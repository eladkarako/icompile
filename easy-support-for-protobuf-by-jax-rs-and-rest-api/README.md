One of the great things about the <a href="http://jcp.org/aboutJava/communityprocess/final/jsr311/index.html">JAX-RS specification</a> is that it is very extensible and adding new providers for different mime-types is very easy. One of the interesting binary protocols out there is <a href="http://code.google.com/apis/protocolbuffers/docs/overview.html">Google Protocol Buffers</a>. They are designed for high-performance systems and drastically reduce the amount of over-the-wire data and also the amount of CPU spent serializing and deserializing that data. There are other similar frameworks out there including <a href="http://java.sun.com/developer/technicalArticles/xml/fastinfoset/">Fast Infoset</a> and <a href="http://incubator.apache.org/thrift/">Thrift</a>.

<!--more-->

Extending JAX-RS to support those protocols is nearly identical so all of the ideas I’ll talk about are generally valid for those frameworks as well. The one limitation that we will table for now is that JAX-RS only works over HTTP and will not work for raw socket protocols and the high-performance aspect of protobufs is somewhat reduced by our dependency on the HTTP envelope. My assumption is that you have done your homework and know that message passing is your overriding bottleneck.
<span id="more-955"></span>
The first thing you will need to do to get started is to download and build Protocol Buffers. You can get the latest stable release from <a href="http://code.google.com/p/protobuf/">here</a>. All the example code you will find in this blog post was developed against protobuf-2.0.3 and the JAX-RS 1.0 specification (using<a href="https://jersey.dev.java.net/">jersey-1.0.1</a>) though I don’t expect the API to change very much going forward. Once you have <em>protoc</em> in your path you are ready to create your first JAX-RS / protobuf project.

The dependencies you will need to create the application are actually quite small. I use<a href="http://maven.apache.org/">Maven</a> (and <a href="http://www.jetbrains.com/idea/download/">IntelliJ 8.0</a>) to do my development so that is how I’ll describe what you need. For running the application you’ll need these installed:
<pre>    &lt;dependency&gt;
      &lt;groupId&gt;com.sun.jersey&lt;/groupId&gt;
      &lt;artifactId&gt;jersey-server&lt;/artifactId&gt;
      &lt;version&gt;1.0.1&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.sun.grizzly&lt;/groupId&gt;
      &lt;artifactId&gt;grizzly-servlet-webserver&lt;/artifactId&gt;
      &lt;version&gt;1.8.6.3&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;com.google.protobuf&lt;/groupId&gt;
      &lt;artifactId&gt;protobuf-java&lt;/artifactId&gt;
      &lt;version&gt;2.0.3&lt;/version&gt;
    &lt;/dependency&gt;

</pre>
Then to execute the tests that we will create to verify that things are working as expected you’ll need two additional test-time only dependencies:
<pre>    &lt;dependency&gt;
      &lt;groupId&gt;com.sun.jersey&lt;/groupId&gt;
      &lt;artifactId&gt;jersey-client&lt;/artifactId&gt;
      &lt;version&gt;1.0.1&lt;/version&gt;
      &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;junit&lt;/groupId&gt;
      &lt;artifactId&gt;junit&lt;/artifactId&gt;
      &lt;version&gt;4.5&lt;/version&gt;
      &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;

</pre>
Not a huge set of dependencies on the surface but Maven does hide a lot of the complexity underneath — total is about 15 jars (mostly grizzly). The next step is to create a Protocol Buffer using their definition language. Instead of making one up myself, I’ll just use the one from their <a href="http://code.google.com/apis/protocolbuffers/docs/javatutorial.html">example</a>, addressbook.proto:
<pre>package tutorial;

option java_package = "com.sampullara.jaxrsprotobuf.tutorial";
option java_outer_classname = "AddressBookProtos";

message Person {
  required string name = 1;
  required int32 id = 2;
  optional string email = 3;

  enum PhoneType {
    MOBILE = 0;
    HOME = 1;
    WORK = 2;
  }

  message PhoneNumber {
    required string number = 1;
    optional PhoneType type = 2 [default = HOME];
  }

  repeated PhoneNumber phone = 4;
}

message AddressBook {
  repeated Person person = 1;
}

</pre>
A fairly simple data description but it does touch on a lot of the features of Protocol Buffers including embedded messages, enums, repeating entries and their type system. Now lets define a simple service that we want to get to work using the <a href="https://jsr311.dev.java.net/nonav/javadoc/javax/ws/rs/ext/package-summary.html">extension SPI</a> of JAX-RS. This service will have two methods, a GET method for returning a new instance of a <em>Person</em> and a POST method that just reflects what is passed to it back to the caller unmodified. That will also let us do some round trip testing. Here is the proposed service:
<pre>package com.sampullara.jaxrsprotobuf.tutorial;

import javax.ws.rs.*;

@Path("/person")
public class AddressBookService {
    @GET
    @Produces("application/x-protobuf")
    public AddressBookProtos.Person getPerson() {
        return AddressBookProtos.Person.newBuilder()
                .setId(1)
                .setName("Sam")
                .setEmail("sam@sampullara.com")
                .addPhone(AddressBookProtos.Person.PhoneNumber.newBuilder()
                        .setNumber("415-555-1212")
                        .setType(AddressBookProtos.Person.PhoneType.MOBILE)
                        .build())
                .build();
    }

    @POST
    @Consumes("application/x-protobuf")
    @Produces("application/x-protobuf")
    public AddressBookProtos.Person reflect(AddressBookProtos.Person person) {
        return person;
    }
}

</pre>
For each of these methods we’ve restricted them to either consuming or producing content of type <em>application/x-protobuf</em>. When JAX-RS sees a request that matches that type or a caller that accepts that type these will be valid endpoints to satisfy those requests. Out of the box, Jersey includes readers and writers for a variety of types including form data, XML and JSON. They also provide a way to register new mime-type readers and writers with a very simple set of annotations on classes that implement either MessageBodyReader or MessageBodyWriter. The class that implements reading is very straight forward, first it calls you back to see if you can read something, then it calls you to actually read it passing you the stream of data. Here is the implementation:
<pre>    @Provider
    @Consumes("application/x-protobuf")
    public static class ProtobufMessageBodyReader implements MessageBodyReader&lt;Message&gt; {
        public boolean isReadable(Class&lt;?&gt; type, Type genericType, Annotation[] annotations, MediaType mediaType) {
            return Message.class.isAssignableFrom(type);
        }

        public Message readFrom(Class&lt;Message&gt; type, Type genericType, Annotation[] annotations,
                    MediaType mediaType, MultivaluedMap&lt;String, String&gt; httpHeaders, 
                    InputStream entityStream) throws IOException, WebApplicationException {
            try {
                Method newBuilder = type.getMethod("newBuilder");
                GeneratedMessage.Builder builder = (GeneratedMessage.Builder) newBuilder.invoke(type);
                return builder.mergeFrom(entityStream).build();
            } catch (Exception e) {
                throw new WebApplicationException(e);
            }
        }
    }

</pre>
This class either needs to be under a package that is registered to be scanned when the application starts or it could be explicitly registered by extending <em>Application</em>. You’ll see in our Main method later we use the former strategy. You’ll note that in order for us to instantiate a new Protocol Buffer builder we need to use reflection on the type that JAX-RS is expecting. I’ve convinced myself thats the best way to do it but please comment if you can think of a better way. If there were additional configuration information you needed to pass to the reader you could annotate the methods with that information and receive it here in the annotations array.

The writer is a bit more complicated because in addition to the <em>isWritable</em> and <em>writeTo</em>methods you have to be able to return the size that you are going to write. I was hoping that Protocol Buffers supported a quick way to sum the size of an object but alas they do not so instead I actually do the write in <em>getSize</em> and temporarily store the result with a weak map. In the future I’d like to see streaming better supported. Here is how I implemented the writer:
<pre>    @Provider
    @Produces("application/x-protobuf")
    public static class ProtobufMessageBodyWriter implements MessageBodyWriter&lt;Message&gt; {
        public boolean isWriteable(Class&lt;?&gt; type, Type genericType, Annotation[] annotations, MediaType mediaType) {
            return Message.class.isAssignableFrom(type);
        }

        private Map&lt;Object, byte[]&gt; buffer = new WeakHashMap&lt;Object, byte[]&gt;();

        public long getSize(Message m, Class&lt;?&gt; type, Type genericType, Annotation[] annotations, MediaType mediaType) {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            try {
                m.writeTo(baos);
            } catch (IOException e) {
                return -1;
            }
            byte[] bytes = baos.toByteArray();
            buffer.put(m, bytes);
            return bytes.length;
        }

        public void writeTo(Message m, Class type, Type genericType, Annotation[] annotations, 
                    MediaType mediaType, MultivaluedMap httpHeaders,
                    OutputStream entityStream) throws IOException, WebApplicationException {
            entityStream.write(buffer.remove(m));
        }
    }

</pre>
I’d love to get around the non-streaming limitation in this integration so if you have any ideas, send them my way. Now we also need to generate the code from the Protocol Buffer definition file. I again use Maven to do that with this additional stanza:
<pre>      &lt;plugin&gt;
        &lt;artifactId&gt;maven-antrun-plugin&lt;/artifactId&gt;
        &lt;executions&gt;
          &lt;execution&gt;
            &lt;id&gt;generate-sources&lt;/id&gt;
            &lt;phase&gt;generate-sources&lt;/phase&gt;
            &lt;configuration&gt;
              &lt;tasks&gt;
                &lt;mkdir dir='target/generated-sources' /&gt;
                &lt;exec executable='protoc'&gt;
                  &lt;arg value='--java_out=target/generated-sources' /&gt;
                  &lt;arg value='src/main/resources/addressbook.proto' /&gt;
                &lt;/exec&gt;
              &lt;/tasks&gt;
              &lt;sourceRoot&gt;target/generated-sources&lt;/sourceRoot&gt;
            &lt;/configuration&gt;
            &lt;goals&gt;
              &lt;goal&gt;run&lt;/goal&gt;
            &lt;/goals&gt;
          &lt;/execution&gt;
        &lt;/executions&gt;
      &lt;/plugin&gt;

</pre>
That should now be enough to build the service itself along with the message readers and writers. The last thing to do on the production side is to show how you would deploy this using the <a href="https://grizzly.dev.java.net/">Grizzly</a> container:
<pre>public class Main {
    public static final URI BASE_URI = UriBuilder.fromUri("http://localhost/").port(9998).build();

    public static void main(String[] args) throws IOException {
        System.out.println("Starting grizzly...");
        URI uri = BASE_URI;
        SelectorThread threadSelector = createServer(uri);
        System.out.println(String.format("Try out %spersonnHit enter to stop it...", uri));
        System.in.read();
        threadSelector.stopEndpoint();
    }

    public static SelectorThread createServer(URI uri) throws IOException {
        Map&lt;String, String&gt; initParams = new HashMap&lt;String, String&gt;();
        initParams.put("com.sun.jersey.config.property.packages", "com.sampullara");
        return GrizzlyWebContainerFactory.create(uri, initParams);
    }
}

</pre>
Jersey+Grizzly makes it very easy instantiate a new servlet container at a particular URI and immediately access the REST services that you have deployed. For testing, it is nice to be able to bring up an actual environment so easily. In our tests we are also going to make use of the REST client that is included with Jersey so that you can see the serialization on both sides of the wire. In order to get the server up and running during the test we need to implement <em>setUp</em>() and <em>tearDown</em>():
<pre>    private SelectorThread threadSelector;
    private WebResource r;

    @Override
    protected void setUp() throws Exception {
        super.setUp();

        //start the Grizzly web container and create the client
        threadSelector = Main.createServer(Main.BASE_URI);

        ClientConfig cc = new DefaultClientConfig();
        cc.getClasses().add(ProtobufProviders.ProtobufMessageBodyReader.class);
        cc.getClasses().add(ProtobufProviders.ProtobufMessageBodyWriter.class);
        Client c = Client.create(cc);
        r = c.resource(Main.BASE_URI);
    }

    @Override
    protected void tearDown() throws Exception {
        super.tearDown();
        threadSelector.stopEndpoint();
    }


</pre>
The client doesn’t have the special class scanning capability so we directly register our providers with the client and point it at the same URI that the server is running on. Being able to control those in your tests makes integration tests far easier as you don’t have to worry about mismatched configurations. The first tests we will run will be using the Jersey client:
<pre>    public void testUsingJerseyClient() {
        WebResource wr = r.path("person");
        AddressBookProtos.Person p = wr.get(AddressBookProtos.Person.class);
        assertEquals("Sam", p.getName());

        AddressBookProtos.Person p2 = wr.type("application/x-protobuf").post(AddressBookProtos.Person.class, p);
        assertEquals(p, p2);
    }

</pre>
Notice how you can build up a web resource incrementally adding additional constraints or paths to it until ultimately you call one of the HTTP methods on that resource. We also see that using that client API we get typed access to the REST server. Slightly more complicated is another test using direct HTTP connections:
<pre>    public void testUsingURLConnection() throws IOException {
        AddressBookProtos.Person person;
        {
            URL url = new URL("http://localhost:9998/person");
            URLConnection urlc = url.openConnection();
            urlc.setDoInput(true);
            urlc.setRequestProperty("Accept", "application/x-protobuf");
            person = AddressBookProtos.Person.newBuilder().mergeFrom(urlc.getInputStream()).build();
            assertEquals("Sam", person.getName());
        }
        {
            URL url = new URL("http://localhost:9998/person");
            HttpURLConnection urlc = (HttpURLConnection) url.openConnection();
            urlc.setDoInput(true);
            urlc.setDoOutput(true);
            urlc.setRequestMethod("POST");
            urlc.setRequestProperty("Accept", "application/x-protobuf");
            urlc.setRequestProperty("Content-Type", "application/x-protobuf");
            person.writeTo(urlc.getOutputStream());
            AddressBookProtos.Person person2 = AddressBookProtos.Person.newBuilder().mergeFrom(urlc.getInputStream()).build();
            assertEquals(person, person2);
        }
    }

</pre>
This code looks more like what a non-Java client might do to access your REST service and deserialize the information using their Protocol Buffers. In fact, why don’t we try this with some Python 2.5 code:
<pre>import urllib
import addressbook_pb2

f = urllib.urlopen("http://localhost:9998/person")
person = addressbook_pb2.Person()
person.ParseFromString(f.read())
print person.name

</pre>
Works great and outputs “Sam” as expected. Very fast but still interoperable between multiple languages in a type-safe way. Once Thrift is further along I will likely make the same sort of interoperability possible.

For those that just want to open up the final product and see how it all works, here is a <a href="http://buildandtest.com/files/jaxrs-protobuf.zip">link to download it</a>. You’ll also note that I actually use <a href="http://code.google.com/p/graven/">graven</a> under the covers to do my builds as Maven’s XML is a little too verbose for me.
<strong>first</strong> let's download my OpenSearch XML, 
click: <a type="application/octet-stream" download="opensearch.xml" title="opensearch.xml" href="https://icompile.eladkarako.com/_resources/opensearch.xml">opensearch.xml</a>.

<blockquote>
  by the way... here is how to force-download of a file instead of opening it in the browser:
  <pre>
  &lt;a type="application/octet-stream" download="opensearch.xml" title="opensearch.xml" 
   href="https://icompile.eladkarako.com/_resources/opensearch.xml"&gt;opensearch.xml&lt;/a&gt;
  </pre>
</blockquote>

<hr/>

<strong>Editing:</strong>
change <code>ShortName</code>, <code>Description</code>, <code>Tags</code>, <code>Image</code> to reflect your website name/title.
<em>You can encode your <code>favicon.ico</code> to a base64 through various tool including this: <a href="https://github.com/eladkarako/ConsoleBase64">https://github.com/eladkarako/ConsoleBase64</a>.</em>

Look around for <code>&lt;Param name="q"</code> and change its value so the website will be your website. No need to escape or encode the address, it will be done automatically by the browser.

<hr/>

<strong>Declaring the link:</strong>

Put this inside your HTML-file's &lt;HEAD&gt;-part:

<pre>&lt;link rel="search" type="application/opensearchdescription+xml" 
    href="https://icompile.eladkarako.com/_resources/opensearch.xml" title="Search icompile.eladkarako.com" /&gt;

It's best that the webserver will serve that XML-file with mimetype of <code>application/opensearchdescription+xml</code>, instead of just <code>text/xml</code>, 

But normally, if your websites is static, and hosted on GitHub-pages you do not have any control on the mimetype the web-server is using. you can try rename/include a copy of the same file and serve this one,
with a different name: <code>opensearch.opensearchdescription+xml</code>, 
I'm not aware of any rule set by GitHub to change its mimetype to the file but it might happen ;|

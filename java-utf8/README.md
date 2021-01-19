<code>java -Dfile.encoding=UTF-8</code>

working with Windows' console/batch file? make sure to also change the code-page using <code>chcp</code>:
<pre>
chcp 65001
.....\\java.exe -Dfile.encoding=UTF-8 .......
</pre>

<!--more-->

Reader classes are now covered, for Writer classes make sure to explicit use <code>UTF-8</code>.
prefer using OutputStreamWriter (instead of FileWriter which does not support explicit charset):
<pre>
BufferedWriter out = new BufferedWriter(
                       new OutputStreamWriter(
                         new FileOutputStream(path)
                        ,"UTF-8"
                       )
                     );
</pre>

Some swear by explicit providing and additional reader/writer set

<pre>
 OutputStreamWriter char_output = new OutputStreamWriter(
     new FileOutputStream("some_output.utf8"),
     Charset.forName("UTF-8").newEncoder() 
 );

 InputStreamReader char_input = new InputStreamReader(
     new FileInputStream("some_input.utf8"),
     Charset.forName("UTF-8").newDecoder() 
 );
</pre>

which can be specified to handle input-error, which is sometime useful..

<pre>
CharsetEncoder encoder = Charset.forName("UTF-8").newEncoder();
encoder.onMalformedInput(CodingErrorAction.REPORT);
encoder.onUnmappableCharacter(CodingErrorAction.REPORT);
BufferedWriter out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("jedis.txt"),encoder));
</pre>
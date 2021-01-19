<img src="https://icompile.eladkarako.com/_uploads/2011-03-14_165345_vectorized.png" alt="Closure Products Logo (including Closure Compiler)" title="Closure Products Logo (including Closure Compiler)" width="104" height="104" class="alignnone size-full wp-image-415" /> <img src="https://icompile.eladkarako.com/_uploads/2011-03-14_165234.png" alt="Google Code Lab Logo" title="Google Code Lab Logo" width="173" height="49" class="alignnone size-full wp-image-413" />

<a href="http://code.google.com/closure/compiler/">Google's Closure Compiler Service</a> is basically a tool for making JavaScript download and run faster. It is a true compiler for JavaScript. Instead of compiling from a source language to machine code, it compiles from JavaScript to better JavaScript. It parses your JavaScript, analyzes it, removes dead code and rewrites and minimizes what's left. It also checks syntax, variable references, and types, and warns about common JavaScript pitfalls.

tools that are recommended to be used along with it are:
-<a href="http://closure-inspector.googlecode.com/files/closureinspector09.xpi">Closure Inspector Add-On for firefox</a>.
-<a href="http://getfirebug.com/">Firebug JavaScript debugger</a>.

there are two ways using the Closure Compiler through command-line, and the online service,

first one, is by using the recent build, that can be download from this URL: <a href="http://closure-compiler.googlecode.com/files/compiler-latest.zip">http://closure-compiler.googlecode.com/files/compiler-latest.zip</a>.
to use the advance attribute of the compiler you might want to use the following command:
<pre> 
java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --warning_level VERBOSE  --js 1.js --js_output_file 2.js

rem where 1.js is the original javascript file.
rem and 2.js is the name for the output file.
</pre>

second way is using the online service at <a href="http://closure-compiler.appspot.com/home">http://closure-compiler.appspot.com/home</a>
<a href="https://icompile.eladkarako.com/_uploads/2011-03-14_0910521.jpg"><img src="https://icompile.eladkarako.com/_uploads/2011-03-14_0910521.jpg" alt="closure-compiler screen example by Elad Karako" title="closure-compiler screen example" width="300" height="120" class="alignnone size-medium wp-image-411" /></a>

Once the compiler has been rendered a fixed, more compact code (but not exactly readable), you can use it as it is (highly compressed), or another good option is to run it through the <a href="http://jsbeautifier.org/">Javascript unpacker and beautifier by Einar Lielmanis</a>, to make it more readable, or, "human-friendly".

This nice technique reads the file `as is`,
it even keeps the internal EOL characters (`\\
`, `\
`,..)

It requires no external-libraries and even compatible with Java7!

Forget the entire awkward combination of <code>InputStream</code>, <code>FileInputStream</code>, <code>FileReader</code>, <code>InputStreamReader</code> and <code>BufferedReader</code>
and those embarrassing <code>readline()</code> loops!

<!--more-->

<pre><span style='color:#800000; font-weight:bold; '>import</span><span style='color:#004a43; '> java</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>io</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>IOException</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>import</span><span style='color:#004a43; '> java</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>nio</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>charset</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>StandardCharsets</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>import</span><span style='color:#004a43; '> java</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>nio</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>file</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>Files</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>import</span><span style='color:#004a43; '> java</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>nio</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>file</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>Paths</span><span style='color:#800080; '>;</span>

<span style='color:#3f5fbf; '>/**</span>
<span style='color:#3f5fbf; '>&#xa0;</span><span style='color:#7f9fbf; font-weight:bold; '>*</span><span style='color:#3f5fbf; '> quick complete file reader</span><span style='color:#7f9fbf; font-weight:bold; '>,</span><span style='color:#3f5fbf; '> including the EOL characters (`\\
`</span><span style='color:#7f9fbf; font-weight:bold; '>,</span><span style='color:#3f5fbf; '> `\
`</span><span style='color:#7f9fbf; font-weight:bold; '>,</span><span style='color:#3f5fbf; '>..)</span>
<span style='color:#3f5fbf; '>&#xa0;*/</span>
<span style='color:#800000; font-weight:bold; '>public</span> <span style='color:#800000; font-weight:bold; '>class</span> Main <span style='color:#800080; '>{</span>

  <span style='color:#800000; font-weight:bold; '>public</span> <span style='color:#800000; font-weight:bold; '>static</span> <span style='color:#bb7977; '>void</span> main<span style='color:#808030; '>(</span><span style='color:#bb7977; font-weight:bold; '>String</span><span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> args<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>throws</span> <span style='color:#bb7977; font-weight:bold; '>IOException</span> <span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span> <span style='color:#808030; '>=</span><span style='color:#808030; '>=</span> args<span style='color:#808030; '>.</span>length<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>throw</span> <span style='color:#800000; font-weight:bold; '>new</span> <span style='color:#bb7977; font-weight:bold; '>Error</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>"no file specified.."</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

    <span style='color:#800000; font-weight:bold; '>final</span> <span style='color:#bb7977; font-weight:bold; '>String</span> path <span style='color:#808030; '>=</span> args<span style='color:#808030; '>[</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>

    <span style='color:#800000; font-weight:bold; '>final</span> <span style='color:#bb7977; font-weight:bold; '>String</span> content <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>new</span> <span style='color:#bb7977; font-weight:bold; '>String</span><span style='color:#808030; '>(</span>Files<span style='color:#808030; '>.</span>readAllBytes<span style='color:#808030; '>(</span>Paths<span style='color:#808030; '>.</span>get<span style='color:#808030; '>(</span>path<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span> StandardCharsets<span style='color:#808030; '>.</span>UTF_8<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

    <span style='color:#bb7977; font-weight:bold; '>System</span><span style='color:#808030; '>.</span>out<span style='color:#808030; '>.</span>println<span style='color:#808030; '>(</span>content<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span>
<span style='color:#800080; '>}</span>
</pre>

<sub>You may modify the EOL afterwards to either one you like using easy string-replace..</sub>

<hr/>

Similar solution but slightly slower due-to reading character by character:

<pre><span style='color:#800000; font-weight:bold; '>public</span> <span style='color:#800000; font-weight:bold; '>static</span> long copyLarge(InputStream input, OutputStream output)
       <span style='color:#800000; font-weight:bold; '>throws</span> IOException <span style='color:#800080; '>{</span>
   <span style='color:#bb7977; '>byte</span><span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> buffer <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>new</span> <span style='color:#bb7977; '>byte</span><span style='color:#808030; '>[</span>DEFAULT_BUFFER_SIZE<span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
   <span style='color:#bb7977; '>long</span> count <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
   <span style='color:#bb7977; '>int</span> n <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
   <span style='color:#800000; font-weight:bold; '>while</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>-</span><span style='color:#008c00; '>1</span> <span style='color:#808030; '>!</span><span style='color:#808030; '>=</span> <span style='color:#808030; '>(</span>n <span style='color:#808030; '>=</span> input<span style='color:#808030; '>.</span>read<span style='color:#808030; '>(</span>buffer<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
       output<span style='color:#808030; '>.</span>write<span style='color:#808030; '>(</span>buffer<span style='color:#808030; '>,</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span> n<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
       count <span style='color:#808030; '>+</span><span style='color:#808030; '>=</span> n<span style='color:#800080; '>;</span>
   <span style='color:#800080; '>}</span>
   <span style='color:#800000; font-weight:bold; '>return</span> count<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>


Use cURL response headers using either <code>--head</code> or <code>--include</code> (to include the headers with the response-body),

For the following example we will use <code>GREP</code>, <code>SED </code> (gnu can be compiled either Win32 or Linux, heck! even use cygwin in Windows [as long you put the c:\\cygwin\\bin\\ in PATH, it is super easy])
and <code>Content-Length</code> response-header,

- no "on screen" output (perfect for in-scripts)
- no temporary-file saving (R/O I/O are considered bad practice.. and slow..)
- working out PIPE action (suitable for both Windows and Linux)
- processing and simple arithmetics on value (no just a "stupid" string..)

<pre><span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>

<span style='color:#800000; font-weight:bold; '>setlocal</span> enableextensions
  <span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#808030; '>/</span>f <span style='color:#0000e6; '>"tokens=*"</span> <span style='color:#797997; '>%%</span>a <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span>'curl <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>head <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>ipv4 <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>sslv3 <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>silent <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>location<span style='color:#808030; '>-</span>trusted <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>url <span style='color:#0000e6; '>"https://storage.googleapis.com/chromium-browser-continuous/Win_x64/362418/mini_installer.exe"</span> <span style='color:#008c00; '>2</span><span style='color:#808030; '>^</span><span style='color:#808030; '>></span><span style='color:#808030; '>^</span><span style='color:#808030; '>&amp;</span><span style='color:#008c00; '>1</span> <span style='color:#808030; '>^</span><span style='color:#808030; '>|</span> grep <span style='color:#0000e6; '>"Content-Length"</span> <span style='color:#008c00; '>2</span><span style='color:#808030; '>^</span><span style='color:#808030; '>></span><span style='color:#808030; '>^</span><span style='color:#808030; '>&amp;</span><span style='color:#008c00; '>1</span> <span style='color:#808030; '>^</span><span style='color:#808030; '>|</span> sed <span style='color:#0000e6; '>"s/\\
$//g"</span> <span style='color:#008c00; '>2</span><span style='color:#808030; '>^</span><span style='color:#808030; '>></span><span style='color:#808030; '>^</span><span style='color:#808030; '>&amp;</span><span style='color:#008c00; '>1</span> <span style='color:#808030; '>^</span><span style='color:#808030; '>|</span> sed <span style='color:#0000e6; '>"s/content-length\\:\\ //gi"</span> <span style='color:#008c00; '>2</span><span style='color:#808030; '>^</span><span style='color:#808030; '>></span><span style='color:#808030; '>^</span><span style='color:#808030; '>&amp;</span><span style='color:#008c00; '>1</span>'<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span> <span style='color:#800000; font-weight:bold; '>set</span> <span style='color:#808030; '>/</span>a num<span style='color:#808030; '>=</span><span style='color:#797997; '>%%</span>a <span style='color:#808030; '>)</span>
  
  <span style='color:#800000; font-weight:bold; '>set</span> <span style='color:#808030; '>/</span>a num<span style='color:#808030; '>=</span><span style='color:#797997; '>%num%</span> <span style='color:#808030; '>/</span> <span style='color:#008c00; '>1024</span> <span style='color:#808030; '>/</span> <span style='color:#008c00; '>1024</span>
  
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> it is %num%MB</span>
<span style='color:#800000; font-weight:bold; '>endlocal</span>
</pre>

will output
<pre>
it is 41MB
</pre>

(original header was <code>Content-Length: 43597312</code>)


(naturally a pure bash variable output is simpler.. but interior of pipe processing is still -kind'a- similar, and thus- useful or at least quite interesting..)

<em>Hope it will be useful I've saw no StackOverflow nor any Google-related resources providing anything similar to that..
</em>
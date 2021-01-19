blunt && direct, here is a working example,

<pre>
@echo off

setlocal enableextensions
    <span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#808030; '>/</span>f <span style='color:#800000; '>"</span><span style='color:#0000e6; '>tokens=*</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>%</span><span style='color:#808030; '>%</span>a <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span><span style='color:#0000e6; '>'curl -s storage.googleapis.com/chromium-browser-continuous/Win_x64/LAST_CHANGE 2^>^&amp;1'</span><span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span>set curl_output<span style='color:#808030; '>=</span><span style='color:#808030; '>%</span><span style='color:#808030; '>%</span>a<span style='color:#808030; '>)</span>

    echo <span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>-</span>
    echo <span style='color:#808030; '>%</span>curl_output<span style='color:#808030; '>%</span>
    echo <span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>--</span><span style='color:#808030; '>-</span>
endlocal
pause
</pre>



<blockquote>notice that 
<ol>
  <li>the command <code>curl -s storage.googleapis.com/chromium-browser-continuous/Win_x64/LAST_CHANGE 2^>^&1</code> contains <code>2>&1</code>, this is normally used to pipe the output from the 'standard-error' stream to 'standard-output' stream.
  </li><li>if you'll skip using it the <code>%version%</code> variable will be empty...</li>
  <li>the <code>2^>^&1</code> is the <strong>escaped form</strong> of <code>2>&1</code>, you'll need to escape the <code>></code> and <code>&</code> symbols in CMD-scripts, the <code>^</code> character is the CMD-escape character.</li>
  <li>you may, also, improve -or- replace the <code>2>&1</code> directive, by <strong>piping</strong> the output through <strong><code>xarg</code> command</strong>, in that case, the full command should look similar to this: <code>for /f "tokens=*" %%a in ('curl -s storage.googleapis.com/chromium-browser-continuous/Win_x64/LAST_CHANGE 2^>^&1 | xargs -0 echo') do (set version=%%a)</code></li>
</ol>
</blockquote>', 'cURL Output, Stored In Variable
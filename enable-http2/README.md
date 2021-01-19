There are several interesting switches I have located in the Chromium/Chrome code lately:

<ul>
<li><pre><span style='color:#696969; '>// Disable SPDY/3.1. This is a temporary testing flag.</span>
<span style='color:#800000; font-weight:bold; '>const</span> <span style='color:#800000; font-weight:bold; '>char</span> kDisableSpdy31<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span>                 <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>disable-spdy31</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
</pre></li>
<li><pre><span style='color:#696969; '>// Enable SPDY/4, aka HTTP/2. This is a temporary testing flag.</span>
<span style='color:#800000; font-weight:bold; '>const</span> <span style='color:#800000; font-weight:bold; '>char</span> kEnableSpdy4<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span>                   <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>enable-spdy4</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
</pre></li>
<li><pre><span style='color:#696969; '>// Uses WebSocket over SPDY.</span>
<span style='color:#800000; font-weight:bold; '>const</span> <span style='color:#800000; font-weight:bold; '>char</span> kEnableWebSocketOverSpdy<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span>       <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>enable-websocket-over-spdy</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
</pre></li>
<li><pre><span style='color:#696969; '>// Uses Spdy for the transport protocol instead of HTTP. This is a temporary</span>
<span style='color:#696969; '>// testing flag.</span>
<span style='color:#800000; font-weight:bold; '>const</span> <span style='color:#800000; font-weight:bold; '>char</span> kUseSpdy<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span>                       <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>use-spdy</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
</pre></li>
</ul>

If you would like to give HTTP/2 a go, you are welcome to use those switches by adding a prefix of <code>--</code>, in that orderly fashion:

<code>C:\\Users\\<strong>Elad</strong>\\AppData\\Local\\Chromium\\Application\\chrome.exe  <em>--disable-spdy31 --enable-spdy4 --enable-websocket-over-spdy --use-spdy</em></code>

<sub>Assuming your name is <code>Elad</code> too ;)</sub>

I was updating my hosts.eladkarako.com with some new spam sites,
during the process I've notices some weird *native* JavaScript API using, as part of pop-up and alert the page was also "sending vibrations" apparently to make the page more reliable,

<pre>
navigator<span style='color:#808030; '>.</span>vibrate <span style='color:#808030; '>=</span> navigator<span style='color:#808030; '>.</span>vibrate <span style='color:#808030; '>||</span> navigator<span style='color:#808030; '>.</span>webkitVibrate <span style='color:#808030; '>||</span> navigator<span style='color:#808030; '>.</span>mozVibrate <span style='color:#808030; '>||</span> navigator<span style='color:#808030; '>.</span>msVibrate<span style='color:#800080; '>;</span>
navigator<span style='color:#808030; '>.</span>vibrate<span style='color:#808030; '>(</span><span style='color:#808030; '>[</span><span style='color:#008c00; '>1000</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>500</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>1000</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>500</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>1000</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>500</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>1000</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>500</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>1000</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

weird but effecting hardware using JavaScript, and native programming- is always kind'a cool, 
<input style="box-shadow: 2px 2px 2px rgba(0,0,0,.5);" type="button" value="Try It!" onmousedown="javascript:(function(){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate;navigator.vibrate([1000,500,1000,500,1000,500,1000,500,1000]);return true;}());"/>
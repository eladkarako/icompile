Run this command:

<pre>javascript<span style='color:#800080; '>:</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>window<span style='color:#808030; '>,</span>document<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>window<span style='color:#808030; '>.</span>stop<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>document<span style='color:#808030; '>.</span>execCommand<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>Stop</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>document<span style='color:#808030; '>.</span>clear<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>document<span style='color:#808030; '>.</span>close<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>document<span style='color:#808030; '>.</span>open<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>document<span style='color:#808030; '>.</span>close<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span><span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#0f4d75; '>undefined</span><span style='color:#800080; '>;</span><span style='color:#800080; '>}</span><span style='color:#808030; '>(</span>top<span style='color:#808030; '>,</span>top<span style='color:#808030; '>.</span>document<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

either from console, or create a new bookmark, with this- as its address (a.k.a "create a bookmarklet dude!")

it will
<ul>
  <li>Stop the page loading as soon as possible (usually right away)</li>
  <li>Will free the memory, effectively unhang the chrome process (usually cures everything)</li>
  <li>enable closing the tab, unloading the resource from the main <code>chrome.exe</code> process</li>
</ul>', 'Solved: Chrome's Tab Keeps Loading Forever
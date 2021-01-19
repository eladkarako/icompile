Here is a simple quick&&dirty way of checking the state of the global-scope (window/top/self/...),
but you may apply the logic to any object, or even run the main method recursively to provide a compare status, as deep as required..

I'm going for a clear-example stuff, comparing before and after of one direct-layer of *stuff* added/removed into window.

It is especially useful for reverse-engineering a long and complicated, possibly obfuscated code,
which is too complex to view, but - naturally - will be much simpler to just see the result/effect on the DOM.

<!--more-->
<hr/>

Just start with some place to store the before state:
<pre>
window._before <span style='color:#808030; '>=</span> <span style='color:#808030; '>{</span><span style='color:#808030; '>}</span><span style='color:#808030; '>;</span>
<span style='color:#800000; font-weight:bold; '>for</span><span style='color:#808030; '>(</span>a <span style='color:#800000; font-weight:bold; '>in</span> window<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span>window.hasOwnProperty<span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span> window._before<span style='color:#808030; '>[</span>a<span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> window<span style='color:#808030; '>[</span>a<span style='color:#808030; '>]</span><span style='color:#808030; '>;</span>
</pre>
(copy&&paste it to the JavaScript console, but don't execute it yet, we have more to add..)

--- do some HTML editing ---
you may inject an external javascript file,
or simply edit the HTML of the page using Chrome's developer-tools panel (the "elements" tab is just fine),
for example you can add the following Google-code, used for creating a custom Google-search for your website (just double click "body" and edit it as HTML, adding the following code. Easy!)
<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span>
  <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>var</span> cx <span style='color:#808030; '>=</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>XXXXXXXXXXXXXXXXXXXXX:YYYYY_ZZZZZ</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>var</span> gcse <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>createElement<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>script</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    gcse<span style='color:#808030; '>.</span>type <span style='color:#808030; '>=</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>text/javascript</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>
    gcse<span style='color:#808030; '>.</span>async <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span><span style='color:#800080; '>;</span>
    gcse<span style='color:#808030; '>.</span>src <span style='color:#808030; '>=</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>https://cse.google.com/cse.js?cx=</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>+</span> cx<span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>var</span> s <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>getElementsByTagName<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>script</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#808030; '>[</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
    s<span style='color:#808030; '>.</span>parentNode<span style='color:#808030; '>.</span>insertBefore<span style='color:#808030; '>(</span>gcse<span style='color:#808030; '>,</span> s<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>gcse:search</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>gcse:search</span><span style='color:#a65700; '>></span>
</pre>

next, you'll have to "capture" the after-state, done pretty much like the before one:
<em>(notice the "ignore-part", it's so you'll have cleaner results..)</em>
<pre>window<span style='color:#808030; '>.</span>_after <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span>
<span style='color:#800000; font-weight:bold; '>for</span><span style='color:#808030; '>(</span>a <span style='color:#800000; font-weight:bold; '>in</span> window<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>===</span> window<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>hasOwnProperty</span><span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>continue</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>/* stuff you can not enumerate */</span>
  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#808030; '>-</span><span style='color:#008c00; '>1</span> <span style='color:#808030; '>!==</span> a <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>_before</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>_after</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>_diff</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>ignore_me_too!</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span>  <span style='color:#800000; font-weight:bold; '>continue</span><span style='color:#800080; '>;</span>  <span style='color:#696969; '>/*ignore those names*/</span>
  window<span style='color:#808030; '>.</span>_after<span style='color:#808030; '>[</span>a<span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> window<span style='color:#808030; '>[</span>a<span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>
(copy&&paste it to the JavaScript console, but don't execute it yet, we have more to add..)


the difference is calculated, quite easily with the following code:
<pre>window<span style='color:#808030; '>.</span>_diff <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>for</span><span style='color:#808030; '>(</span>a <span style='color:#800000; font-weight:bold; '>in</span> window<span style='color:#808030; '>.</span>_after<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>  <span style='color:#696969; '>/*exist now but not before ==>> added*/</span>
  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>===</span> window<span style='color:#808030; '>.</span>_after<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>hasOwnProperty</span><span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>continue</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>/* stuff you can not enumerate */</span>
  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>===</span> window<span style='color:#808030; '>.</span>_before<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>hasOwnProperty</span><span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span> window<span style='color:#808030; '>.</span>_diff<span style='color:#808030; '>[</span>a<span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>diff</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>added</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>obj</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span>window<span style='color:#808030; '>.</span>_after<span style='color:#808030; '>[</span>a<span style='color:#808030; '>]</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#800000; font-weight:bold; '>for</span><span style='color:#808030; '>(</span>a <span style='color:#800000; font-weight:bold; '>in</span> window<span style='color:#808030; '>.</span>_before<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> <span style='color:#696969; '>/* exist before but not now ==>> deleted*/</span>
  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>===</span> window<span style='color:#808030; '>.</span>_before<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>hasOwnProperty</span><span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>continue</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>/* stuff you can not enumerate */</span>
  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>===</span> window<span style='color:#808030; '>.</span>_after<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>hasOwnProperty</span><span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span> window<span style='color:#808030; '>.</span>_diff<span style='color:#808030; '>[</span>a<span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>diff</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>deleted</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>obj</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span>window<span style='color:#808030; '>.</span>_after<span style='color:#808030; '>[</span>a<span style='color:#808030; '>]</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>

(copy&&paste it to the JavaScript console, but don't execute it yet, we have more to add..)

that's it, just print the diff-object and you're done.

<pre>console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>
  window<span style='color:#808030; '>.</span>_diff
<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>


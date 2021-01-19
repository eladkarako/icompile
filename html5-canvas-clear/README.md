<pre>
<span style='color:#800000; font-weight:bold; '>function</span> canvas_clear<span style='color:#808030; '>(</span>canvas<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>      <span style='color:#696969; '>//clear canvas' path and content, reset tranform. return reference to same object.</span>
  <span style='color:#800000; font-weight:bold; '>var</span> context <span style='color:#808030; '>=</span> canvas<span style='color:#808030; '>.</span>getContext<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>2d</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  context<span style='color:#808030; '>.</span>beginPath<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  context<span style='color:#808030; '>.</span>setTransform<span style='color:#808030; '>(</span><span style='color:#008c00; '>1</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>1</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  context<span style='color:#808030; '>.</span>clearRect<span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span> canvas<span style='color:#808030; '>.</span>width<span style='color:#808030; '>,</span> canvas<span style='color:#808030; '>.</span>height<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#696969; '>//canvas.width = canvas.width; //don't use!</span>
  <span style='color:#800000; font-weight:bold; '>return</span> canvas<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

<span style='color:#800000; font-weight:bold; '>function</span> canvas_clear_deep<span style='color:#808030; '>(</span>canvas<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>       <span style='color:#696969; '>//clear canvas' path and content, reset tranform (as before).</span>
  <span style='color:#800000; font-weight:bold; '>var</span> tmp <span style='color:#808030; '>=</span> canvas<span style='color:#808030; '>.</span>cloneNode<span style='color:#808030; '>(</span><span style='color:#0f4d75; '>true</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>       <span style='color:#696969; '>//  + NEW: unhook event-handlers (optional: attribute-events too)</span>
                                          <span style='color:#696969; '>//  + update DOM with fresh-canvas.</span>
                                          <span style='color:#696969; '>//  + clear unused memory.</span>
                                          <span style='color:#696969; '>//  + return reference to fresh-canvas.</span>

  <span style='color:#696969; '>/* //optionally enable this part to also remove inline(attribute)-events.</span>
<span style='color:#696969; '>&#xa0;&#xa0;NamedNodeMap.prototype.forEach = Array.prototype.forEach;     //optionally unhook inline(""attribute"")-event</span>
<span style='color:#696969; '>&#xa0;&#xa0;tmp.attributes.forEach(function(attribute){</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;if(false === /^on/i.test(attribute.nodeName)) return;</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;tmp.removeAttribute(attribute.nodeName);</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;});</span>
<span style='color:#696969; '>&#xa0;&#xa0;*/</span>

  tmp <span style='color:#808030; '>=</span> canvas_clear<span style='color:#808030; '>(</span>tmp<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#0f4d75; '>null</span> <span style='color:#808030; '>!==</span> canvas<span style='color:#808030; '>.</span>parentElement<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>  <span style='color:#696969; '>//replace with fresh-canvas</span>
    canvas<span style='color:#808030; '>.</span>parentElement<span style='color:#808030; '>.</span>replaceChild<span style='color:#808030; '>(</span>tmp<span style='color:#808030; '>,</span> canvas<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span>

  <span style='color:#696969; '>//cleanup</span>
  canvas <span style='color:#808030; '>=</span> canvas_clear<span style='color:#808030; '>(</span>canvas<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  canvas <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>undefined</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>return</span> tmp<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

HTMLCanvasElement<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>clear      <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> <span style='color:#800000; font-weight:bold; '>return</span> canvas_clear<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>      <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
HTMLCanvasElement<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>clear_deep <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> <span style='color:#800000; font-weight:bold; '>return</span> canvas_clear_deep<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
</pre>
Also available on this gist: <a title="https://gist.github.com/eladkarako/a005225594ade65347e2f5ad4c55d131" href="https://gist.github.com/eladkarako/a005225594ade65347e2f5ad4c55d131" target="_blank">https://gist.github.com/eladkarako/a005225594ade65347e2f5ad4c55d131</a>

And just use <code>canvas.clear()</code> or <code>canvas.clear_deep()</code> :]

Enjoy!
<pre>
<style>
#grayscale_example:before{
  transition: -webkit-filter .5s ease-in-out;
  /* assuming some color applied to container */
  background: none lightblue; color: yellow;
  content: '[Hover Me] Color: YES';
}

#grayscale_example:hover:before{
  /* filter will be applied across container and all inner-content */
  -webkit-filter: grayscale(100%);
  content: '[UnHover ] Color:  NO';
}
</style>
<span id="grayscale_example"></span>
</pre>

<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>style</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#808030; '>#</span>grayscale_example<span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>before</span><span style='color:#800080; '>{</span>
  <span style='color:#bb7977; font-weight:bold; '>transition</span><span style='color:#808030; '>:</span> -webkit-filter <span style='color:#008c00; '>.</span><span style='color:#008c00; '>5</span><span style='color:#006600; '>s</span> <span style='color:#074726; '>ease-in-out</span><span style='color:#800080; '>;</span>
  <span style='color:#696969; '>/* assuming some color applied to container */</span>
  <span style='color:#bb7977; font-weight:bold; '>background</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>none</span> <span style='color:#797997; '>lightblue</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>color</span><span style='color:#808030; '>:</span> <span style='color:#797997; '>yellow</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>content</span><span style='color:#808030; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>[Hover Me] Color: YES</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#808030; '>#</span>grayscale_example<span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>hover</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>before</span><span style='color:#800080; '>{</span>
  <span style='color:#696969; '>/* filter will be applied across container and all inner-content */</span>
  -webkit-filter<span style='color:#808030; '>:</span> grayscale<span style='color:#808030; '>(</span><span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>content</span><span style='color:#808030; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>[UnHover ] Color:  NO</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>style</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>span</span><span style='color:#274796; '> </span><span style='color:#074726; '>id</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"grayscale_example"</span><span style='color:#a65700; '>&gt;</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>span</span><span style='color:#a65700; '>&gt;</span>
</pre>


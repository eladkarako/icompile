<pre><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#800080; '>{</span>
  <span style='color:#696969; '>/* makes some presentations attribute to properly be inherited by page's elements */</span>
  <span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span>                    <span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span>                   <span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>text-size-adjust</span><span style='color:#808030; '>:</span>         <span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>box-sizing</span><span style='color:#808030; '>:</span>               <span style='color:#074726; '>border-box</span><span style='color:#800080; '>;</span>

  <span style='color:#696969; '>/* set rendering-engine to avoid picture-perfect in favor of speedy/very responsive page */</span>
  <span style='color:#bb7977; font-weight:bold; '>text-rendering</span><span style='color:#808030; '>:</span>           optimizeSpeed<span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>-webkit-font-smoothing</span><span style='color:#808030; '>:</span>   <span style='color:#074726; '>none</span><span style='color:#800080; '>;</span>

  <span style='color:#696969; '>/* ditch some special-rules in font-faces, allowing the rendering-engine simpler processing of text for view. */</span>
  <span style='color:#bb7977; font-weight:bold; '>font-kerning</span><span style='color:#808030; '>:</span>             <span style='color:#074726; '>none</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>font-feature-settings</span><span style='color:#808030; '>:</span>    <span style='color:#800000; '>"</span><span style='color:#0000e6; '>kern</span><span style='color:#800000; '>"</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>', 'HTML5 Ninja - CSS3 To Make Your Website Behave and Render Faster
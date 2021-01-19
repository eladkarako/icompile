<pre><style>
  pre[code-like]{
    -webkit-text-stroke: .2px rgba(0,0,0,.5);
    background: rgba(245,245,211,.1) none;
    border-radius: 2px;
    border: 1px dashed rgba(214,214,214,.7);
    box-shadow: 1px 1px 1px rgba(0,0,0,.5),  -1px -1px 2px rgba(0,0,0,.2);
    color: #000000;
    font-family: Courier New,monospace;
    line-height: 1.3em;
    margin: 0;
    overflow-x: auto;
    padding: 5px;
    white-space: pre !important;
    word-break: normal !important;
    word-wrap: normal !important;
  }
</style></pre>

<pre><span style='color:#696969; '>/* convert &#x1f64c; to \\uD83D\\uDE4C */</span>
<span style='color:#800000; font-weight:bold; '>function</span> text_to_unicode<span style='color:#808030; '>(</span>string<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  <span style='color:#800000; '>'</span><span style='color:#0000e6; '>use strict</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>function</span> is_whitespace<span style='color:#808030; '>(</span>c<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span> <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#008c00; '>9</span> <span style='color:#808030; '>===</span> c <span style='color:#808030; '>||</span> <span style='color:#008c00; '>10</span> <span style='color:#808030; '>===</span> c <span style='color:#808030; '>||</span> <span style='color:#008c00; '>13</span> <span style='color:#808030; '>===</span> c <span style='color:#808030; '>||</span> <span style='color:#008c00; '>32</span> <span style='color:#808030; '>===</span> c<span style='color:#800080; '>;</span>  <span style='color:#800080; '>}</span>
  <span style='color:#800000; font-weight:bold; '>function</span> left_pad<span style='color:#808030; '>(</span>string<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span> <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#797997; '>Array</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>4</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>concat</span><span style='color:#808030; '>(</span>string<span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>0</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>slice</span><span style='color:#808030; '>(</span><span style='color:#808030; '>-</span><span style='color:#008c00; '>1</span> <span style='color:#808030; '>*</span> <span style='color:#797997; '>Math</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>max</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>4</span><span style='color:#808030; '>,</span> string<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span>

  string <span style='color:#808030; '>=</span> string<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>split</span><span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>map<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>c<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\\\\</span><span style='color:#0000e6; '>u</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> left_pad<span style='color:#808030; '>(</span>c<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>charCodeAt</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toString</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>16</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toUpperCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      
  <span style='color:#800000; font-weight:bold; '>return</span> string<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#696969; '>/* convert \\uD83D\\uDE4C to &#x1f64c; */</span>
<span style='color:#800000; font-weight:bold; '>function</span> unicode_to_text<span style='color:#808030; '>(</span>string<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>var</span>  prefix <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\\\\</span><span style='color:#0f69ff; '>\\\\</span><span style='color:#0000e6; '>u</span><span style='color:#800000; '>"</span>
     <span style='color:#808030; '>,</span> regex  <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>new</span> <span style='color:#797997; '>RegExp</span><span style='color:#808030; '>(</span>prefix <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>([\\da-f]{4})</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>ig</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span>
     <span style='color:#800080; '>;</span> 
  
  string <span style='color:#808030; '>=</span> string<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span>regex<span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>match</span><span style='color:#808030; '>,</span> backtrace1<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span><span style='color:#808030; '>(</span> <span style='color:#800000; font-weight:bold; '>parseInt</span><span style='color:#808030; '>(</span>backtrace1<span style='color:#808030; '>,</span> <span style='color:#008c00; '>16</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>)</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  
  <span style='color:#800000; font-weight:bold; '>return</span> string<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>
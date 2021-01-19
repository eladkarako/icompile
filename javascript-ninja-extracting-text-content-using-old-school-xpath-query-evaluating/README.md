<!--more-->


<pre>XPathResult<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>to_array <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>var</span> me <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>this</span>
    <span style='color:#808030; '>,</span> len <span style='color:#808030; '>=</span> me<span style='color:#808030; '>.</span>snapshotLength
    <span style='color:#808030; '>,</span> arr <span style='color:#808030; '>=</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span>
    <span style='color:#808030; '>,</span> <span style='color:#797997; '>index</span>
    <span style='color:#800080; '>;</span>
    
  <span style='color:#800000; font-weight:bold; '>for</span><span style='color:#808030; '>(</span><span style='color:#797997; '>index</span><span style='color:#808030; '>=</span><span style='color:#008c00; '>0</span> <span style='color:#800080; '>;</span> <span style='color:#797997; '>index</span><span style='color:#808030; '>&lt;</span>len <span style='color:#800080; '>;</span> <span style='color:#797997; '>index</span><span style='color:#808030; '>+=</span><span style='color:#008c00; '>1</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    arr<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span> me<span style='color:#808030; '>.</span>snapshotItem<span style='color:#808030; '>(</span><span style='color:#797997; '>index</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span>
  
  <span style='color:#800000; font-weight:bold; '>return</span> arr<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>



<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>elements<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; '>&quot;</span><span style='color:#0000e6; '>use strict</span><span style='color:#800000; '>&quot;</span><span style='color:#800080; '>;</span>

  elements<span style='color:#808030; '>.</span>forEach<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span><span style='color:#797997; '>arguments</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>(</span>
  document<span style='color:#808030; '>.</span>evaluate<span style='color:#808030; '>(</span>
    <span style='color:#800000; '>&apos;</span><span style='color:#0000e6; '>//text()[not(ancestor::head  and  ancestor::meta  and  ancestor::link  and  ancestor::script  and  ancestor::style  and  ancestor::noscript  and  ancestor::code)]</span><span style='color:#800000; '>&apos;</span>
    <span style='color:#808030; '>,</span> document<span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>null</span><span style='color:#808030; '>,</span> XPathResult<span style='color:#808030; '>.</span>ORDERED_NODE_SNAPSHOT_TYPE<span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>null</span>
  <span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>to_array<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>
<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>


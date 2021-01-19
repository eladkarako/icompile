<h3><pre><span style='color:#797997; '>Array</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>shuffle <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span> shuffle<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>sort</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>a<span style='color:#808030; '>,</span> b<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#008c00; '>0</span> <span style='color:#808030; '>===</span> <span style='color:#808030; '>~</span><span style='color:#808030; '>~</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>2</span> <span style='color:#808030; '>*</span> <span style='color:#797997; '>Math</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>random</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>?</span> <span style='color:#808030; '>-</span><span style='color:#008c00; '>1</span> <span style='color:#800080; '>:</span> <span style='color:#008c00; '>1</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
</pre></h3>
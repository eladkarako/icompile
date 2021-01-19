Useful for heuristic-algorithms.

<pre>NodeList<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>forEach <span style='color:#808030; '>=</span> <span style='color:#797997; '>Array</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>forEach<span style='color:#800080; '>;</span>

<span style='color:#800000; font-weight:bold; '>var</span> count <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>var</span> distrb <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

<span style='color:#800000; font-weight:bold; '>var</span> elements <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>querySelectorAll<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>*</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>var</span> <span style='color:#800000; font-weight:bold; '>length</span> <span style='color:#808030; '>=</span> elements<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#800080; '>;</span>

elements<span style='color:#808030; '>.</span>forEach<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>element<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> count<span style='color:#808030; '>[</span> element<span style='color:#808030; '>.</span>nodeName <span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> <span style='color:#808030; '>(</span>count<span style='color:#808030; '>[</span> element<span style='color:#808030; '>.</span>nodeName <span style='color:#808030; '>]</span> <span style='color:#808030; '>||</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span><span style='color:#008c00; '>1</span><span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

<span style='color:#797997; '>Object</span><span style='color:#808030; '>.</span>keys<span style='color:#808030; '>(</span>count<span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>forEach<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>key<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  distrb<span style='color:#808030; '>[</span> key <span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> <span style='color:#008c00; '>100</span> <span style='color:#808030; '>*</span> count<span style='color:#808030; '>[</span> key <span style='color:#808030; '>]</span> <span style='color:#808030; '>/</span> <span style='color:#800000; font-weight:bold; '>length</span> 
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

This helps to characterization of the page,
for example- this page: <a href="https://nodejs.org/download/nightly/v8.0.0-nightly20161123fd644f51f8/" target="_blank">https://nodejs.org/download/nightly/v8.0.0-nightly20161123fd644f51f8/</a>

has a very defined percentage of "download page" or "FTP like download page" :)

<pre><span style='color:#800080; '>{</span>
    HTML<span style='color:#800080; '>:</span>   <span style='color:#008000; '>2.1739130434782608</span>
  <span style='color:#808030; '>,</span> HEAD<span style='color:#800080; '>:</span>   <span style='color:#008000; '>2.1739130434782608</span>
  <span style='color:#808030; '>,</span> TITLE<span style='color:#800080; '>:</span>  <span style='color:#008000; '>2.1739130434782608</span>
  <span style='color:#808030; '>,</span> BODY<span style='color:#800080; '>:</span>   <span style='color:#008000; '>2.1739130434782608</span>
  <span style='color:#808030; '>,</span> H1<span style='color:#800080; '>:</span>     <span style='color:#008000; '>2.1739130434782608</span>
  <span style='color:#808030; '>,</span> HR<span style='color:#800080; '>:</span>     <span style='color:#008000; '>4.3478260869565215</span>
  <span style='color:#808030; '>,</span> PRE<span style='color:#800080; '>:</span>    <span style='color:#008000; '>2.1739130434782608</span>
  <span style="background:yellow;"><span style='color:#808030; '>,</span> A<span style='color:#800080; '>:</span>      <span style='color:#008000; '>80.43478260869566</span></span>
  <span style='color:#808030; '>,</span> SCRIPT<span style='color:#800080; '>:</span> <span style='color:#008000; '>2.1739130434782608</span>
<span style='color:#800080; '>}</span>
</pre>

might come in handy for someone else too... ;]
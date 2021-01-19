Explanation By Example.
<!--more-->


<pre><span style='color:#800000; font-weight:bold; '>function</span> handler<span style='color:#808030; '>(</span>ev<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>function</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> ev<span style='color:#808030; '>.</span>preventDefault  <span style='color:#808030; '>&amp;&amp;</span>  ev<span style='color:#808030; '>.</span>preventDefault<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>function</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> ev<span style='color:#808030; '>.</span>stopPropagation <span style='color:#808030; '>&amp;&amp;</span>  ev<span style='color:#808030; '>.</span>stopPropagation<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  <span style='color:#696969; '>/* useful if you're handling a CustomEvent - before firing it, after event has fired those attributes are (usually) read-only. */</span>
  ev<span style='color:#808030; '>.</span>cancelBubble <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span><span style='color:#800080; '>;</span>  <span style='color:#696969; '>/* * */</span>
  ev<span style='color:#808030; '>.</span>cancelable   <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span><span style='color:#800080; '>;</span>  <span style='color:#696969; '>/* * */</span>
  ev<span style='color:#808030; '>.</span>bubbles      <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>false</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>/* * */</span>

  <span style='color:#696969; '>/* -------- */</span>
  <span style='color:#696969; '>/* do stuff */</span>
  <span style='color:#696969; '>/* -------- */</span>

  <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#0f4d75; '>false</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>
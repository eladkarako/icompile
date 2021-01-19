This is straightforward (but memory-efficient) <code>Object</code> ("JSON"-like) recursive sort.
<strong><em>It can handle both Arrays And Objects</em></strong>.

<pre><span style='color:#800000; font-weight:bold; '>function</span> sort_object<span style='color:#808030; '>(</span>obj<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> <span style='color:#696969; '>/* json like */</span>
  <span style='color:#800000; font-weight:bold; '>var</span> result <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

  <span style='color:#797997; '>Object</span><span style='color:#808030; '>.</span>keys<span style='color:#808030; '>(</span>obj<span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>sort</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>forEach<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>key<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    key <span style='color:#808030; '>=</span> <span style='color:#797997; '>String</span><span style='color:#808030; '>(</span>key<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    result<span style='color:#808030; '>[</span>key<span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> obj<span style='color:#808030; '>[</span>key<span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>return</span> result<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#800000; font-weight:bold; '>function</span> is_object<span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>object</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> a <span style='color:#808030; '>&amp;&amp;</span>
         <span style='color:#800000; '>"</span><span style='color:#0000e6; '>object</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> a<span style='color:#808030; '>.</span><span style='color:#797997; '>constructor</span><span style='color:#808030; '>.</span>name<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toLowerCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>
<span style='color:#800080; '>}</span>

<span style='color:#800000; font-weight:bold; '>function</span> is_array<span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>object</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> a <span style='color:#808030; '>&amp;&amp;</span>  
         <span style='color:#800000; '>"</span><span style='color:#0000e6; '>array</span><span style='color:#800000; '>"</span>  <span style='color:#808030; '>===</span> a<span style='color:#808030; '>.</span><span style='color:#797997; '>constructor</span><span style='color:#808030; '>.</span>name<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toLowerCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>
<span style='color:#800080; '>}</span>

<span style='color:#800000; font-weight:bold; '>function</span> sorter<span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#696969; '>/* nothing to sort (2 cases) */</span>
  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#0f4d75; '>null</span>  <span style='color:#808030; '>===</span> a<span style='color:#808030; '>)</span>                <span style='color:#800000; font-weight:bold; '>return</span> a<span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>===</span> is_object<span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span> <span style='color:#808030; '>&amp;&amp;</span> 
     <span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>===</span> is_array<span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span>      <span style='color:#800000; font-weight:bold; '>return</span> a<span style='color:#800080; '>;</span>

  a <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span> <span style='color:#808030; '>===</span> is_object<span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span> <span style='color:#800080; '>?</span> sort_object<span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span> <span style='color:#800080; '>:</span>
      <span style='color:#0f4d75; '>true</span> <span style='color:#808030; '>===</span> is_array<span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span>  <span style='color:#800080; '>?</span> a<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>sort</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>       <span style='color:#800080; '>:</span>
      a <span style='color:#696969; '>/* will not arrive here.. */</span>
      <span style='color:#800080; '>;</span>

  <span style='color:#797997; '>Object</span><span style='color:#808030; '>.</span>keys<span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>forEach<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>aa<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    a<span style='color:#808030; '>[</span>aa<span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> sorter<span style='color:#808030; '>(</span>a<span style='color:#808030; '>[</span>aa<span style='color:#808030; '>]</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>return</span> a<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>
<!--more-->



before:
<pre>
{
    "b": {
      "g": 0
    , "z": 0
    , "a": 0
  }
  , "c": [4, 9, 1, 0]
  , "a": "hi"
}
</pre>

after:
<pre>
{
    "a": "hi"
  , "b": {
      "a": 0
    , "g": 0
    , "z": 0
  }
  , "c": [0, 1, 4, 9]
}
</pre>
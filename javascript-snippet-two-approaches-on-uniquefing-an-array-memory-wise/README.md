Since nigher <code>Unique'fing</code> nor <code>uniqify</code> are actually words in the English language [<em>should they be though?</em>] <strong>but</strong> taken from a developer's terminology jargon.. I'll choose the later.. :]]

#1
<pre><span style='color:#800000; font-weight:bold; '>function</span> uniqify<span style='color:#808030; '>(</span>array<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> <span style='color:#696969; '>/* note: depending on memory-efficient implementations, this can be huge memory waste.. but it is sort-of one-liner... :] */</span>
  <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#797997; '>Object</span><span style='color:#808030; '>.</span>keys<span style='color:#808030; '>(</span>
           array<span style='color:#808030; '>.</span>reduce<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>carry<span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>item</span><span style='color:#808030; '>,</span> <span style='color:#797997; '>index</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
             carry<span style='color:#808030; '>[</span> <span style='color:#800000; font-weight:bold; '>item</span> <span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span><span style='color:#800080; '>;</span>
             <span style='color:#800000; font-weight:bold; '>return</span> carry<span style='color:#800080; '>;</span>
           <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span><span style='color:#808030; '>)</span>
         <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>

#2
<pre><span style='color:#800000; font-weight:bold; '>function</span> uniqify<span style='color:#808030; '>(</span>array<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> <span style='color:#696969; '>/* note: using JavaScript's OO module, tmp variable does no-longer requires dirty dirty "var" lines */</span>
  array<span style='color:#808030; '>.</span>tmp <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
  array<span style='color:#808030; '>.</span>forEach<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>item</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    array<span style='color:#808030; '>.</span>tmp<span style='color:#808030; '>[</span> <span style='color:#800000; font-weight:bold; '>item</span> <span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#797997; '>Object</span><span style='color:#808030; '>.</span>keys<span style='color:#808030; '>(</span>array<span style='color:#808030; '>.</span>tmp<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>
<pre>
<span style='color:#797997; '>String</span><span style='color:#808030; '>.</span>from_char_code__with_unicode_surrogate_pair_support <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>char_code<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>use strict</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>var</span> surrogate1<span style='color:#808030; '>,</span> surrogate2<span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span>char_code <span style='color:#808030; '>&lt;=</span> <span style='color:#008000; '>0xFFFF</span><span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span><span style='color:#808030; '>(</span>char_code<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  char_code  <span style='color:#808030; '>=</span> char_code <span style='color:#808030; '>-</span> <span style='color:#008000; '>0x10000</span><span style='color:#800080; '>;</span>
  surrogate1 <span style='color:#808030; '>=</span> <span style='color:#008000; '>0xD800</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span>char_code <span style='color:#808030; '>&gt;</span><span style='color:#808030; '>&gt;</span> <span style='color:#008c00; '>10</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  surrogate2 <span style='color:#808030; '>=</span> <span style='color:#008000; '>0xDC00</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span>char_code <span style='color:#808030; '>&amp;</span>  <span style='color:#008000; '>0x3FF</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span><span style='color:#808030; '>(</span><span style='color:#808030; '>[</span>surrogate1<span style='color:#808030; '>,</span> surrogate2<span style='color:#808030; '>]</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
</pre>

<hr/>

A seamless solution is to secretly override (one time..)
<code>fromCharCode</code> method.

<pre>
<span style='color:#696969; '>/* the magic of scope :] */</span>
<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>use strict</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>var</span> original_reference <span style='color:#808030; '>=</span> <span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span><span style='color:#800080; '>;</span>
  
  <span style='color:#800000; font-weight:bold; '>function</span> fromCharCodeFixed<span style='color:#808030; '>(</span>code<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span>code <span style='color:#808030; '>&lt;=</span> <span style='color:#008000; '>0xFFFF</span><span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>return</span> original_reference<span style='color:#808030; '>(</span>code<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  
    code <span style='color:#808030; '>=</span> code <span style='color:#808030; '>-</span> <span style='color:#008000; '>0x10000</span><span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>return</span> original_reference<span style='color:#808030; '>(</span><span style='color:#008000; '>0xD800</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span>code <span style='color:#808030; '>&gt;</span><span style='color:#808030; '>&gt;</span> <span style='color:#008c00; '>10</span><span style='color:#808030; '>)</span>
                             <span style='color:#808030; '>,</span><span style='color:#008000; '>0xDC00</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span>code <span style='color:#808030; '>&amp;</span>  <span style='color:#008000; '>0x3FF</span><span style='color:#808030; '>)</span>
                             <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span>

  <span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span> <span style='color:#808030; '>=</span> fromCharCodeFixed<span style='color:#800080; '>;</span>                        <span style='color:#696969; '>//override</span>
  <span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span><span style='color:#808030; '>.</span>original_reference <span style='color:#808030; '>=</span> original_reference<span style='color:#800080; '>;</span>    <span style='color:#696969; '>//allow access to original reference (optional)</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

Do it only once. although it can not really harm anything
other than create a recursive infinite-loop to itself :]
You can check the existence of <code>original_reference</code> to make sure not to run the block again... :]]
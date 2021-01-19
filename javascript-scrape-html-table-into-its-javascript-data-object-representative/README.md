sometimes you'll want to tweak an existing page, by injecting a javascript bookmark,
user-script (greasemonkey for example) or even plain console eval.

parsing a HTML table into a data-table representation can provide easier access to data and DOM-elements (for style modifications, for example..)

for the given html example:

<pre>
<table class="main-table" border="1" cellspacing="0" cellpadding="5">
 <tr>                 <th>#</th>  <th>name</th>  <th>title</th>   </tr>
 
 <tr class="item">    <td>1</td>  <td>Foo1</td>  <td>Bar1</td>    </tr>
 <tr class="item">    <td>2</td>  <td>Foo2</td>  <td>Bar2</td>    </tr>
 <tr class="item">    <td>3</td>  <td>Foo3</td>  <td>Bar3</td>    </tr>

</table>
</pre>

<pre><span style='color:#800000; font-weight:bold; '>var</span> headers<span style='color:#808030; '>,</span> rows<span style='color:#808030; '>,</span> table<span style='color:#800080; '>;</span>

headers <span style='color:#808030; '>=</span> <span style='color:#797997; '>Array</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>map<span style='color:#808030; '>.</span>call<span style='color:#808030; '>(</span>document<span style='color:#808030; '>.</span>getElementsByTagName<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>th</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>element<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>return</span> element<span style='color:#808030; '>.</span>innerText
         <span style='color:#808030; '>.</span>trim<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>
         <span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>?</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>?</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

rows <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>querySelectorAll<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>tr[class*="bz_bugitem"</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

table <span style='color:#808030; '>=</span> <span style='color:#797997; '>Array</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>map<span style='color:#808030; '>.</span>call<span style='color:#808030; '>(</span>rows<span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>row<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>var</span> 
    columns_as_array <span style='color:#808030; '>=</span> row<span style='color:#808030; '>.</span>getElementsByTagName<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>td</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>
    columns_as_object <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span><span style='color:#808030; '>,</span>
    i<span style='color:#808030; '>,</span>
    headers_len <span style='color:#808030; '>=</span> headers<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span>
    <span style='color:#800080; '>;</span>
    
    <span style='color:#800000; font-weight:bold; '>for</span><span style='color:#808030; '>(</span>i<span style='color:#808030; '>=</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> i<span style='color:#808030; '>&lt;</span>headers_len<span style='color:#800080; '>;</span> i<span style='color:#808030; '>+=</span><span style='color:#008c00; '>1</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> <span style='color:#696969; '>//store by column order (zero-based-index)</span>
      columns_as_object<span style='color:#808030; '>[</span> i <span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> columns_as_array<span style='color:#808030; '>[</span>i<span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>     <span style='color:#696969; '>//store by column order (zero-based-index)</span>
    <span style='color:#800080; '>}</span>
    columns_as_object<span style='color:#808030; '>[</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>length</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> columns_as_array<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>//fake "length" attribute just like it was a real array, the top X elements are "by number"</span>
    
    
    <span style='color:#800000; font-weight:bold; '>for</span><span style='color:#808030; '>(</span>i<span style='color:#808030; '>=</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> i<span style='color:#808030; '>&lt;</span>headers_len<span style='color:#800080; '>;</span> i<span style='color:#808030; '>+=</span><span style='color:#008c00; '>1</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> <span style='color:#696969; '>//map row array to row object - store by column title</span>
      columns_as_object<span style='color:#808030; '>[</span> headers<span style='color:#808030; '>[</span>i<span style='color:#808030; '>]</span> <span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> columns_as_array<span style='color:#808030; '>[</span>i<span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span>
    
    <span style='color:#800000; font-weight:bold; '>return</span> columns_as_object<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>headers<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>table<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>
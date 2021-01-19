A good amount of in-app stored data <sup>(hopefully small-amount of text, unless there is something *wrong with you*)</sup> is "encrypted" as base64
- and, while encryption is 'hardly the point', it would be nice to make stored data (textual! small amount!) harder to rip/decipher/scrape/grab/<em>grapes?</em><sup>(yumm!)</sup>

here is raw to "hidden" process (including proper Unicode handling and some "=" hiding, to avoid the most obvious base64 characteristics..)
<!--more-->
<pre><span style='color:#800000; font-weight:bold; '>var</span> s<span style='color:#808030; '>,</span> fixed_length<span style='color:#800080; '>;</span>
s <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>my password1</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>                  <span style='color:#696969; '>/* raw data                       */</span>
s <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>unescape</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>encodeURIComponent</span><span style='color:#808030; '>(</span>    <span style='color:#696969; '>/* to bit string  (Unicode2ASCII) */</span>
      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>my password</span><span style='color:#800000; '>"</span>
    <span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

s <span style='color:#808030; '>=</span> btoa<span style='color:#808030; '>(</span>s<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
s <span style='color:#808030; '>=</span> s<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#0f69ff; '>\\=</span><span style='color:#808030; '>+</span><span style='color:#808030; '>$</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; '>g</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

s <span style='color:#808030; '>=</span> s<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>split</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>reverse<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>   <span style='color:#696969; '>/* make similar raw-strings significantly different (at first look)*/</span>

s <span style='color:#808030; '>=</span> btoa<span style='color:#808030; '>(</span>s<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
s <span style='color:#808030; '>=</span> s<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#0f69ff; '>\\=</span><span style='color:#808030; '>+</span><span style='color:#808030; '>$</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; '>g</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>
s
<span style='color:#808030; '>,</span>s<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span>
<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

<hr/>

more function like, the only thing needed to remember is using same amount of "iterations"

<pre><span style='color:#800000; font-weight:bold; '>function</span> enc<span style='color:#808030; '>(</span>s<span style='color:#808030; '>,</span> iteration<span style='color:#696969; '>/*==1*/</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  s <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>unescape</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>encodeURIComponent</span><span style='color:#808030; '>(</span>s<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>  <span style='color:#696969; '>/* handling Unicode */</span>
  <span style='color:#800000; font-weight:bold; '>for</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>var</span> i<span style='color:#808030; '>=</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> i<span style='color:#808030; '>&lt;</span>iteration<span style='color:#800080; '>;</span> i<span style='color:#808030; '>++</span><span style='color:#808030; '>)</span>
    s <span style='color:#808030; '>=</span> btoa<span style='color:#808030; '>(</span>s<span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#0f69ff; '>\\=</span><span style='color:#808030; '>+</span><span style='color:#808030; '>$</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; '>g</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>return</span> s<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#800000; font-weight:bold; '>function</span> dec<span style='color:#808030; '>(</span>s<span style='color:#808030; '>,</span> iteration<span style='color:#696969; '>/*==1*/</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>for</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>var</span> i<span style='color:#808030; '>=</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> i<span style='color:#808030; '>&lt;</span>iteration<span style='color:#800080; '>;</span> i<span style='color:#808030; '>++</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    s <span style='color:#808030; '>=</span> <span style='color:#808030; '>(</span>s <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>===</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>substring</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span> s<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span> <span style='color:#808030; '>+</span> s<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span> <span style='color:#808030; '>%</span> <span style='color:#008c00; '>4</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>/* re-(right-"="-)pad */</span>
    s <span style='color:#808030; '>=</span> atob<span style='color:#808030; '>(</span>s<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span>
  s <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>decodeURIComponent</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>escape</span><span style='color:#808030; '>(</span>s<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>    <span style='color:#696969; '>/* handling Unicode */</span>
  <span style='color:#800000; font-weight:bold; '>return</span> s<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>

for example:
<pre>
enc("a") or enc("a",0)
"a"
enc("a",1)
"YQ"
enc("a",2)
"WVE"
enc("a",3)
"V1ZF"
<hr/>
dec("a") or dec("a",0)
"a"
<hr/>
*** dec("a",1)
*** "Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded." (error)
*** this will happen if used iteration number larger than what actually used in "enc" function. naturally you'll need some error handling and fallbacks :]
<hr/>
dec("V1ZF",1)
"WVE"
dec("WVE",1)
...
</pre>
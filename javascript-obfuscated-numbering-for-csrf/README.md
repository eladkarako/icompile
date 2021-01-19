<pre>
+((!+[]+!![]+!![]+[])+(+!![]))                                           31
+((+!![]+[])+(!+[]+!![]))                                                12
+((+!![]+[])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]))                  18
+((!+[]+!![]+!![]+!![]+[])+(+!![]))                                      41
+((!+[]+!![]+!![]+!![]+[])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]))         47
!+[]+!![]+!![]+!![]+!![]+!![]+!![]                                        7
+((!+[]+!![]+!![]+[])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]))    39
</pre>

<!--more-->
<hr/>
and a part of the entire mechanism (including several DOM elements embedded in the HTML (no javascript) with hidden-input containing token and public encryption key(s):

<pre>
<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>var</span> a <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
      <span style='color:#800000; font-weight:bold; '>try</span> <span style='color:#800080; '>{</span>
        <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#808030; '>!</span><span style='color:#808030; '>!</span>window<span style='color:#808030; '>.</span>addEventListener
      <span style='color:#800080; '>}</span> <span style='color:#800000; font-weight:bold; '>catch</span> <span style='color:#808030; '>(</span>e<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
        <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#808030; '>!</span><span style='color:#008c00; '>1</span>
      <span style='color:#800080; '>}</span>
    <span style='color:#800080; '>}</span>
    <span style='color:#808030; '>,</span> b <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span>b<span style='color:#808030; '>,</span> c<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
      a<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>?</span> document<span style='color:#808030; '>.</span>addEventListener<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>DOMContentLoaded</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> b<span style='color:#808030; '>,</span> c<span style='color:#808030; '>)</span> <span style='color:#800080; '>:</span> document<span style='color:#808030; '>.</span>attachEvent<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>onreadystatechange</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> b<span style='color:#808030; '>)</span>
    <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
  b<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>var</span> a <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>getElementById<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>cf-content</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    a<span style='color:#808030; '>.</span>style<span style='color:#808030; '>.</span>display <span style='color:#808030; '>=</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>block</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>setTimeout</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
      <span style='color:#800000; font-weight:bold; '>var</span> s<span style='color:#808030; '>,</span> t<span style='color:#808030; '>,</span> o<span style='color:#808030; '>,</span> p<span style='color:#808030; '>,</span> b<span style='color:#808030; '>,</span> r<span style='color:#808030; '>,</span> e<span style='color:#808030; '>,</span> a<span style='color:#808030; '>,</span> k<span style='color:#808030; '>,</span> i<span style='color:#808030; '>,</span> n<span style='color:#808030; '>,</span> g<span style='color:#808030; '>,</span> f<span style='color:#808030; '>,</span> zMiHfRM <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span>
        <span style='color:#800000; '>"</span><span style='color:#0000e6; '>v</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#808030; '>+</span><span style='color:#808030; '>(</span><span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>+</span><span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>+</span><span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span>
      <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
      t <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>createElement<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>div</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      t<span style='color:#808030; '>.</span>innerHTML <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>&lt;a href='/'>x&lt;/a></span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
      t <span style='color:#808030; '>=</span> t<span style='color:#808030; '>.</span>firstChild<span style='color:#808030; '>.</span>href<span style='color:#800080; '>;</span>
      r <span style='color:#808030; '>=</span> t<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>match</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#0000e6; '>https</span><span style='color:#808030; '>?</span><span style='color:#0000e6; '>:</span><span style='color:#0f69ff; '>\\/</span><span style='color:#0f69ff; '>\\/</span><span style='color:#800000; '>/</span><span style='color:#808030; '>)</span><span style='color:#808030; '>[</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
      t <span style='color:#808030; '>=</span> t<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>substr</span><span style='color:#808030; '>(</span>r<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      t <span style='color:#808030; '>=</span> t<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>substr</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span> t<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span> <span style='color:#808030; '>-</span> <span style='color:#008c00; '>1</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      a <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>getElementById<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>jschl-answer</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      f <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>getElementById<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>challenge-form</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      zMiHfRM<span style='color:#808030; '>.</span>v <span style='color:#808030; '>*=</span> <span style='color:#808030; '>+</span><span style='color:#808030; '>(</span><span style='color:#808030; '>(</span><span style='color:#808030; '>+</span><span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>+</span><span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      zMiHfRM<span style='color:#808030; '>.</span>v <span style='color:#808030; '>*=</span> <span style='color:#808030; '>+</span><span style='color:#808030; '>(</span><span style='color:#808030; '>(</span><span style='color:#808030; '>+</span><span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>+</span><span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      zMiHfRM<span style='color:#808030; '>.</span>v <span style='color:#808030; '>*=</span> <span style='color:#808030; '>+</span><span style='color:#808030; '>(</span><span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>+</span><span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>+</span><span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      zMiHfRM<span style='color:#808030; '>.</span>v <span style='color:#808030; '>+=</span> <span style='color:#808030; '>!</span><span style='color:#808030; '>+</span><span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
      zMiHfRM<span style='color:#808030; '>.</span>v <span style='color:#808030; '>-</span><span style='color:#808030; '>=</span> <span style='color:#808030; '>+</span><span style='color:#808030; '>(</span><span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>+</span><span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>+</span><span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      zMiHfRM<span style='color:#808030; '>.</span>v <span style='color:#808030; '>-</span><span style='color:#808030; '>=</span> <span style='color:#808030; '>+</span><span style='color:#808030; '>(</span><span style='color:#808030; '>(</span><span style='color:#808030; '>+</span><span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>+</span><span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      zMiHfRM<span style='color:#808030; '>.</span>v <span style='color:#808030; '>-</span><span style='color:#808030; '>=</span> <span style='color:#808030; '>+</span><span style='color:#808030; '>(</span><span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>+</span><span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>+</span><span style='color:#808030; '>!</span>!<span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      a<span style='color:#808030; '>.</span>value <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>parseInt</span><span style='color:#808030; '>(</span>zMiHfRM<span style='color:#808030; '>.</span>v<span style='color:#808030; '>,</span> <span style='color:#008c00; '>10</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span> t<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#800080; '>;</span>
      <span style='color:#800000; '>'</span><span style='color:#0000e6; '>; 121</span><span style='color:#800000; '>'</span>
      f<span style='color:#808030; '>.</span>submit<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>4000</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>false</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>
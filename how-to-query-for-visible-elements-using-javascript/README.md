I was looking for only the visible links in sourceforge.net,
in order to rewrite them to direct-download instead of their redirect page,

there is simple heuristics, to extract just the *right* &lt;a&gt; elements,
but few are theme are (although "real"..) hidden, meaning there is no use to run the javascript rewrite-algorithm on those, so we should save the overhead..

..but how do we know if the link is visible (for example, a "download button"),
or a "shadow one" (minor size, or simply not user-accessible)?

<img src="https://icompile.eladkarako.com/_uploads/2016/01/2016-01-21_215557.jpg" alt="2016-01-21_215557" width="974" height="675" class="alignnone size-full wp-image-4443" />

well, it is quite simple:

<pre><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>elements<span style='color:#808030; '>,</span> style<span style='color:#808030; '>,</span> is_in<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  is_in <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>haystack<span style='color:#808030; '>,</span> needle<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    haystack <span style='color:#808030; '>=</span> haystack<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toLowerCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    needle <span style='color:#808030; '>=</span> needle<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toLowerCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

    <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#808030; '>-</span><span style='color:#008c00; '>1</span> <span style='color:#808030; '>!==</span> haystack<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>indexOf</span><span style='color:#808030; '>(</span>needle<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

  elements <span style='color:#808030; '>=</span> <span style='color:#797997; '>Array</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>filter<span style='color:#808030; '>.</span>call<span style='color:#808030; '>(</span>elements<span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>element<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    style <span style='color:#808030; '>=</span> getComputedStyle<span style='color:#808030; '>(</span>element<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

    <span style='color:#800000; font-weight:bold; '>return</span>  <span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>===</span> is_in<span style='color:#808030; '>(</span>style<span style='color:#808030; '>.</span>display<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>none</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>&amp;&amp;</span>
            <span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>===</span> is_in<span style='color:#808030; '>(</span>style<span style='color:#808030; '>.</span>visibility<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>hidden</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>&amp;&amp;</span>
            <span style='color:#800000; '>"</span><span style='color:#0000e6; '>0</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>!==</span> style<span style='color:#808030; '>.</span>width<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#808030; '>[</span><span style='color:#808030; '>^</span><span style='color:#797997; '>\\d</span><span style='color:#808030; '>]</span><span style='color:#808030; '>*</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; '>g</span><span style='color:#808030; '>,</span><span style='color:#800000; '>'</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>&amp;&amp;</span>
            <span style='color:#800000; '>"</span><span style='color:#0000e6; '>0</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>!==</span> style<span style='color:#808030; '>.</span>height<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#808030; '>[</span><span style='color:#808030; '>^</span><span style='color:#797997; '>\\d</span><span style='color:#808030; '>]</span><span style='color:#808030; '>*</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; '>g</span><span style='color:#808030; '>,</span><span style='color:#800000; '>'</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  
  <span style='color:#800000; font-weight:bold; '>return</span> elements<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>(</span>
   document<span style='color:#808030; '>.</span>querySelectorAll<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>a[href*="/projects/"][href*="/files/"][href*="/download"]</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span>
 <span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>null</span>
 <span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>null</span>
<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>
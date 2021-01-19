<pre>
<span style='color:#800000; font-weight:bold; '>var</span> a <span style='color:#808030; '>=</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>for</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>var</span> i<span style='color:#808030; '>=</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> i<span style='color:#808030; '>&lt;</span> <span style='color:#008c00; '>100</span><span style='color:#800080; '>;</span> i<span style='color:#808030; '>++</span><span style='color:#808030; '>)</span>
  a<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\\\\</span><span style='color:#0000e6; '>u</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>0000</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span><span style='color:#008c00; '>600</span> <span style='color:#808030; '>+</span> i<span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toString</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>16</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>substr</span><span style='color:#808030; '>(</span><span style='color:#808030; '>-</span><span style='color:#008c00; '>4</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>a<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '> </span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span>
</pre>

<!--more-->
<hr/>

Usage Example:
Say you have this nice eye-emoji <code>&#x1f441;</code>,
and you want to 'have' its other "near" emoji (Unicode) symbols.
You can use the loop above to render as much symbols as you want, using the "base" of this emoji, Using the developer's-panel's console to run just a few, easy, JavaScript snippets.

First run <code>escape(&#34;&#x1f441;&#34;)</code> to get <code>%uD83D%uDC41</code>, the Unicode escaped form is: <code>&#92;uD83D&#92;uDC41</code>.
<sub>Notice that this emoji is a combination of a pair of Unicode characters.</sub>
paste <code>0xDC41</code> to the developer's-panel's-console, to get the decimal <code>56385</code>.

Getting the next 100 emoji symbols, after <code>&#x1f441;</code>:
<sub>Slightly modify the above-code to: (and run it in the console)</sub>
<pre>
<span style='color:#800000; font-weight:bold; '>var</span> a <span style='color:#808030; '>=</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>for</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>var</span> i<span style='color:#808030; '>=</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> i<span style='color:#808030; '>&lt;</span> <span style='color:#008c00; '>100</span><span style='color:#800080; '>;</span> i<span style='color:#808030; '>++</span><span style='color:#808030; '>)</span>
  a<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\\\\</span><span style='color:#0000e6; '>uD83D</span><span style='color:#0f69ff; '>\\\\</span><span style='color:#0000e6; '>u</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>0000</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span><span style='color:#008c00; '>56385</span> <span style='color:#808030; '>+</span> i<span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toString</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>16</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>substr</span><span style='color:#808030; '>(</span><span style='color:#808030; '>-</span><span style='color:#008c00; '>4</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>a<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '> </span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span>
</pre>

This will result with a long list of space-separated, Unicode-escaped characters.

<img src="https://icompile.eladkarako.com/_uploads/2017/01/icompile.eladkarako.com_unicode_after_loop.png" alt="" width="860" height="370" />

which you can now double-click, copy, and paste it back to the console (wrap it with a pair of <code>""</code>) to have it shown as the emoji-symbols themselves.

<img src="https://icompile.eladkarako.com/_uploads/2017/01/icompile.eladkarako.com_unicode_visible_after_loop.png" alt="" width="950" height="439" />

<sub>You can also paste the end-emoji result directly to <a href="http://bin.eladkarako.com" target="_blank">http://bin.eladkarako.com</a> for editing.</sub>

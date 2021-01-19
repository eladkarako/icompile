Just in-case you've ever fiddled around with JavaScript's Regular-Expression modifiers,
and wondered why you might not get the Backtrack..
- a.k.a <em>back-reference</em>, 
-- a.k.a <em>group referencing</em>, 
--- a.k.a <em>"that thing with the brackets that extracts some $hit from within RegEx.."</em>
..to always work..

<blockquote>You are most likely have *enhanced* your regex with a <em><strong>Global-Search</strong> modifier (<code>g</code>)</em>,
and that is when <em>all hell broke loose</em></blockquote>

<sub>*in the following example ignore the <code>m</code>(multi-line) modifier..</sub>

<em><strong>Global-Search</strong> beats <strong>Backtrack</strong>:</em>
<pre><span style='color:#800000; '>"</span><span style='color:#0000e6; '>10 sold hello world 15 sold hello world</span><span style='color:#800000; '>"</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>match</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#808030; '>(</span><span style='color:#797997; '>\\d</span><span style='color:#808030; '>+</span><span style='color:#808030; '>)</span><span style='color:#0000e6; '> sold</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; font-size:22pt; display:inline-block;'>mg</span><span style='color:#808030; '>)</span>

<blockquote><span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>10 sold</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>15 sold</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span></blockquote>
</pre>

<hr/>

<em><strong>No Global-Search?</strong> - <strong>Backtrack</strong> works..</em>
<pre><span style='color:#800000; '>"</span><span style='color:#0000e6; '>10 sold hello world 15 sold hello world</span><span style='color:#800000; '>"</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>match</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#808030; '>(</span><span style='color:#797997; '>\\d</span><span style='color:#808030; '>+</span><span style='color:#808030; '>)</span><span style='color:#0000e6; '> sold</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; font-size:22pt; display:inline-block;'>m</span><span style='color:#808030; '>)</span>

<blockquote><span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>10 sold</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>10</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span></blockquote>
</pre>

<hr/>
<strong>And here is a nice-little trick that <em>background-loops around</em> the matches:</strong>
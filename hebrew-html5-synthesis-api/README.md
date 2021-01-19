The point is matching the pronunciations nuances and vocals using <code>-</code>, <code>[SPACE]s</code>, <code>AEIOUY</code> combination, to get something that sounds like Hebrew...

dashes are resulting with a longer pronunciations on the last and first letters around the dash,
[SPACE] results with a small pause.. 
...setting the pitch low and speed to 0.4 also helps!

<pre>window<span style='color:#808030; '>.</span>speechSynthesis<span style='color:#808030; '>.</span>speak<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>msg<span style='color:#808030; '>,</span> text_phrase<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  msg<span style='color:#808030; '>.</span>lang <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>he-IL</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
  msg<span style='color:#808030; '>.</span>pitch <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
  msg<span style='color:#808030; '>.</span>rate <span style='color:#808030; '>=</span> <span style='color:#008000; '>0.4</span><span style='color:#800080; '>;</span>

  msg<span style='color:#808030; '>.</span>text <span style='color:#808030; '>=</span> text_phrase<span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>return</span> msg<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>(</span>
  <span style='color:#800000; font-weight:bold; '>new</span> SpeechSynthesisUtterance<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>
<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>Sha-lom Yea-led, anie kakki, mae-toom-taam, rotse-ma-kott? yeaa-mana-yek</span><span style='color:#800000; '>"</span>
<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

<a href="https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API">Google Developers - Web apps that talk - Introduction to the Speech Synthesis API</a>
<!--more-->
<pre><span style='color:#696969; '>/*</span>
<span style='color:#696969; '>https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation  - on the lowest-target:                        stops other listeners of the same type-event.</span>
<span style='color:#696969; '>https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble              - same as "stopImmediatePropagation" (old)</span>
<span style='color:#696969; '>https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault            - on the window down to target:                stops other listeners of the same type-event to execute + marks the event as canceled.</span>
<span style='color:#696969; '>https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation           - on the window down to to target:             stops other listeners of the same type-event on same target from executing + stops all listeners of the same type-event on target's ancestor from executing. similar to "preventDefault" but it allows the current listener to execute, plus it does not cancel the event. </span>
<span style='color:#696969; '>*/</span>
<span style='color:#800000; font-weight:bold; '>function</span> isolate<span style='color:#808030; '>(</span>ev<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>boolean</span><span style='color:#800000; '>"</span>  <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> ev<span style='color:#808030; '>.</span>cancelBubble<span style='color:#808030; '>)</span>             <span style='color:#808030; '>&amp;&amp;</span> <span style='color:#808030; '>(</span>ev<span style='color:#808030; '>.</span>cancelBubble <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span>                                                           <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>function</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> ev<span style='color:#808030; '>.</span>stopImmediatePropagation<span style='color:#808030; '>)</span> <span style='color:#808030; '>&amp;&amp;</span> <span style='color:#808030; '>(</span>ev<span style='color:#808030; '>.</span>stopImmediatePropagation<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span> ev<span style='color:#808030; '>.</span>stopImmediatePropagation<span style='color:#808030; '>.</span>call<span style='color:#808030; '>(</span>ev<span style='color:#808030; '>.</span>currentTarget<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>function</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> ev<span style='color:#808030; '>.</span>preventDefault<span style='color:#808030; '>)</span>           <span style='color:#808030; '>&amp;&amp;</span> <span style='color:#808030; '>(</span>ev<span style='color:#808030; '>.</span>preventDefault<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>           ev<span style='color:#808030; '>.</span>preventDefault<span style='color:#808030; '>.</span>call<span style='color:#808030; '>(</span>          ev<span style='color:#808030; '>.</span>currentTarget<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>function</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> ev<span style='color:#808030; '>.</span>stopPropagation<span style='color:#808030; '>)</span>          <span style='color:#808030; '>&amp;&amp;</span> <span style='color:#808030; '>(</span>ev<span style='color:#808030; '>.</span>stopPropagation<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>          ev<span style='color:#808030; '>.</span>stopPropagation<span style='color:#808030; '>.</span>call<span style='color:#808030; '>(</span>         ev<span style='color:#808030; '>.</span>currentTarget<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  
  <span style='color:#696969; '>/* return false; */</span> <span style='color:#696969; '>/* include this line at the end of your listener */</span>
<span style='color:#800080; '>}</span>
</pre>


<ul>
<li>
stopImmediatePropagation
- on the lowest-target.
- stops other listeners of the same type-event.
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation</a>
</li>
<li>
cancelBubble
- same as "stopImmediatePropagation" (old).
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble</a>
</li>
<li>
preventDefault
- on the window down to target.
- stops other listeners of the same type-event to execute + marks the event as canceled.
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault</a>
</li>
<li>
stopPropagation
- on the window down to to target.
- stops other listeners of the same type-event on same target from executing
- stops all listeners of the same type-event on target's ancestor from executing.
- similar to "preventDefault" but it allows the current listener to execute, plus it does not cancel the event.
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation</a>
</li>
<li>
<strong>return false;</strong>
- at the end of the event-listener (otherwise the 'return' will break out of the listener-function)
- same as cancelEvent (old)
- due its position at the end of the method, other-types events might be already bubble up the DOM, introduced at very early versions of JavaScript, might break older (1.0-3.6) version of Firefox, which will understand the 'false' as document.write and replace the whole DOM with the 'false' text (bug fixed after v2.4).
if you must return something, return 'undefined' (which is just like do not returning anything).
</li>
</ul>
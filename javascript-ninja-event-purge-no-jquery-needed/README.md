SpamCop.net has a 50,000 characters limit, which applied just before submitting a "Spam Report" form,
on that case it is enforced using an inline-(attribute) event: <code code-like>onsubmit<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>return formval(50000);</span><span style='color:#800000; '>"</span></code>

other ways are using either onsubmit as event-handler (<code code-like>element<span style='color:#808030; '>.</span>onsubmit <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>ev<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span><span style='color:#808030; '>.</span><span style='color:#808030; '>.</span><span style='color:#808030; '>.</span></code>) or the <code>element<span style='color:#808030; '>.</span>addEventListener<span style='color:#808030; '>(</span><span style='color:#808030; '>.</span><span style='color:#808030; '>.</span><span style='color:#808030; '>.</span><span style='color:#808030; '>)</span></code> method.

while setting an event handler yourself and removing it is quite easy,
unhooking (removing event handler) is not always as easy when it has came from the page's body or external script-resources,
(most of the times it requires quite a bit of digging through the developer-console/panel)

there is, however, another way.
cloning an element (well.. <code>Node</code>) returns an unmodified/"original DOM" version as parsed from the page's source,
ignoring later assign events, but does include every inline-attribute (inline-event handlers included),

blah blah.. technical stuff..

so, essentially:
1. <code>cloneNode(true)</code>
2. <code>removeAttribute('on...')</code>

here is how to "fix" the SpamCop.net limitation ;)

<pre><span style='color:#797997; '>Array</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>forEach<span style='color:#808030; '>.</span>call<span style='color:#808030; '>(</span>document<span style='color:#808030; '>.</span>querySelectorAll<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>form, input, textarea</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>element<span style='color:#808030; '>,</span> tmp<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  element<span style='color:#808030; '>.</span>parentNode<span style='color:#808030; '>.</span>replaceChild<span style='color:#808030; '>(</span>element<span style='color:#808030; '>.</span>cloneNode<span style='color:#808030; '>(</span><span style='color:#0f4d75; '>true</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span> element<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#797997; '>Array</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>forEach<span style='color:#808030; '>.</span>call<span style='color:#808030; '>(</span>document<span style='color:#808030; '>.</span>querySelectorAll<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>form</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>element<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  element<span style='color:#808030; '>.</span>removeAttribute<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>onsubmit</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>
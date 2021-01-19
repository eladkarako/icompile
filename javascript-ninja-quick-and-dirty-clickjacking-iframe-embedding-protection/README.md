A nifty little trick.

<em>copy&&paste</em> the following:
<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"application/javascript"</span><span style='color:#274796; '> async</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"async"</span><span style='color:#274796; '> </span><span style='color:#074726; '>src</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"data:application/javascript;base64,KGZ1bmN0aW9uKHQscyl7Cih0Lmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkhPT1zLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkpJiYodD1zKTtyZXR1cm4gdHJ1ZTt9KHRvcC5sb2NhdGlvbixzZWxmLmxvY2F0aW9uKSk7"</span><span style='color:#a65700; '>&gt;</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>&gt;</span>
</pre>

Just before <code>&#60;&#47;head&#62;</code>.

F.Y.I - it uses the following <code>plain/text</code> code:
<pre><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>t<span style='color:#808030; '>,</span>s<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
<span style='color:#808030; '>(</span>t<span style='color:#808030; '>.</span>hostname<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toLowerCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>!==</span>s<span style='color:#808030; '>.</span>hostname<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toLowerCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>&amp;&amp;</span><span style='color:#808030; '>(</span>t<span style='color:#808030; '>=</span>s<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span><span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#0f4d75; '>true</span><span style='color:#800080; '>;</span><span style='color:#800080; '>}</span><span style='color:#808030; '>(</span>top<span style='color:#808030; '>.</span>location<span style='color:#808030; '>,</span>self<span style='color:#808030; '>.</span>location<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

but as base64, you can also use <code>ASYNC</code> attribute, which benefit some browsers whom optimize the loading of external-resources.

Enjoy!
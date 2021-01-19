IFRAMEs with SRC attribute such as <code>about:blank</code> or <code>javascript:true</code> are called <strong>orgin-free</strong> IFRAMEs,
IFRAMEs whom which loads a page, which enables the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS" target="_blank">CORS headers</a>, are called origin-permissive.

Both kinds allow accessing the internal document element from another domain (such as the main-page),
If you ever wonder how to get a list of those documents from your-own page, the easy answer is you have to <strong>try</strong> and it out figure-out later.

This snippet tries (silently) to access the document of every IFRAME it finds under the input-window object,
and returns a list of those where it manage to do so, successfully.

<pre><span style='color:#800000; font-weight:bold; '>function</span> get_document<span style='color:#808030; '>(</span>win<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>var</span> doc <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>null</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>try</span><span style='color:#800080; '>{</span>
    doc <span style='color:#808030; '>=</span> win<span style='color:#808030; '>.</span>document <span style='color:#808030; '>||</span> win<span style='color:#808030; '>.</span>contentDocument <span style='color:#808030; '>||</span> win<span style='color:#808030; '>.</span>contentWindow<span style='color:#808030; '>.</span>document<span style='color:#800080; '>;</span> <span style='color:#696969; '>/* try access reference of document */</span>
  <span style='color:#800080; '>}</span><span style='color:#800000; font-weight:bold; '>catch</span><span style='color:#808030; '>(</span>err<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span><span style='color:#800080; '>}</span>
  <span style='color:#800000; font-weight:bold; '>return</span> doc<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#800000; font-weight:bold; '>function</span> get_accessible_iframes<span style='color:#808030; '>(</span>win<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  win <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>undefined</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> win <span style='color:#800080; '>?</span> self <span style='color:#800080; '>:</span> win<span style='color:#800080; '>;</span> <span style='color:#696969; '>/* normalize input */</span>

  <span style='color:#800000; font-weight:bold; '>return</span> win<span style='color:#808030; '>.</span>document<span style='color:#808030; '>.</span>querySelectorAll<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>iframe</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>filter<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>iframe<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
                                                          <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#0f4d75; '>null</span> <span style='color:#808030; '>!==</span> get_document<span style='color:#808030; '>(</span>iframe<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
                                                       <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#696969; '>/*</span>
<span style='color:#696969; '>get_accessible_iframes();     // same as `get_accessible_iframes(self);`</span>
<span style='color:#696969; '>get_accessible_iframes(top);</span>
<span style='color:#696969; '>*/</span>
</pre>

also available in this here: <a href="https://gist.github.com/eladkarako/2e2450fe6b2b01b3263f342519f5cd87" target="_blank">https://gist.github.com/eladkarako/2e2450fe6b2b01b3263f342519f5cd87</a>
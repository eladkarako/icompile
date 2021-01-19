Did someone say 'blob'  :)

<a href="https://icompile.eladkarako.com/_uploads/2015/03/blob_family_by_angelishi-d4gwt0m.gif"><img src="https://icompile.eladkarako.com/_uploads/2015/03/blob_family_by_angelishi-d4gwt0m.gif" alt="blob" width="50" height="50" class="size-full wp-image-2801" /></a>

You can get real-data from the <em>objectURL</em> and not just blob by changing the <code>responseType</code> to either <code>"text"</code> or <code>"arraybuffer"</code>.

<hr />

Here is a <em>back-and-forth conversion</em> of <code>text/javascript</code> to <code>blob</code> to <code>objectURL</code> back to <code>blob</code> or <code>text/javascript</code>.

<pre>
<span style='color:#5f5035; '>&lt;?php</span><span style='color:#000000; '></span>
<span style='color:#800000; font-weight:bold; '>var</span><span style='color:#000000; '> blob </span><span style='color:#808030; '>=</span><span style='color:#000000; '> </span><span style='color:#800000; font-weight:bold; '>new</span><span style='color:#000000; '> Blob</span><span style='color:#808030; '>(</span><span style='color:#808030; '>[</span><span style='color:#0000e6; '>'self.onmessage=function(e){postMessage(e)}'</span><span style='color:#808030; '>]</span><span style='color:#808030; '>,</span><span style='color:#800080; '>{</span><span style='color:#400000; '>type</span><span style='color:#800080; '>:</span><span style='color:#000000; '> </span><span style='color:#0000e6; '>'text/javascript'</span><span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span><span style='color:#000000; '>   </span><span style='color:#696969; '>//->console: (object)   Blob {size: 42, type: "text/javascript", slice: function}</span><span style='color:#000000; '></span>
<span style='color:#000000; '></span>
<span style='color:#800000; font-weight:bold; '>var</span><span style='color:#000000; '> obju </span><span style='color:#808030; '>=</span><span style='color:#000000; '> URL</span><span style='color:#808030; '>.</span><span style='color:#000000; '>createObjectURL</span><span style='color:#808030; '>(</span><span style='color:#000000; '>js_blob</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span><span style='color:#000000; '> </span><span style='color:#696969; '>//->console:  "blob:http%3A//stackoverflow.com/02e79c2b-025a-4293-be0f-f121dd57ccf7"</span><span style='color:#000000; '></span>
<span style='color:#000000; '></span>
<span style='color:#800000; font-weight:bold; '>var</span><span style='color:#000000; '> xhr </span><span style='color:#808030; '>=</span><span style='color:#000000; '> </span><span style='color:#800000; font-weight:bold; '>new</span><span style='color:#000000; '> XMLHttpRequest</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span><span style='color:#000000; '></span>
<span style='color:#000000; '>xhr</span><span style='color:#808030; '>.</span><span style='color:#000000; '>open</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>'GET'</span><span style='color:#808030; '>,</span><span style='color:#000000; '> </span><span style='color:#0000e6; '>'blob:http%3A//stackoverflow.com/02e79c2b-025a-4293-be0f-f121dd57ccf7'</span><span style='color:#808030; '>,</span><span style='color:#000000; '> </span><span style='color:#800000; font-weight:bold; '>true</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span><span style='color:#000000; '></span>
<span style='color:#000000; '>xhr</span><span style='color:#808030; '>.</span><span style='color:#000000; '>responseType </span><span style='color:#808030; '>=</span><span style='color:#000000; '> </span><span style='color:#0000e6; '>'text'</span><span style='color:#800080; '>;</span><span style='color:#000000; '> </span><span style='color:#696969; '>/* or "blob" */</span><span style='color:#000000; '></span>
<span style='color:#000000; '>xhr</span><span style='color:#808030; '>.</span><span style='color:#000000; '>onreadystatechange </span><span style='color:#808030; '>=</span><span style='color:#000000; '> </span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span><span style='color:#000000; '></span>
<span style='color:#000000; '>&#xa0;&#xa0;</span><span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#000000; '>xhr</span><span style='color:#808030; '>.</span><span style='color:#000000; '>DONE </span><span style='color:#808030; '>!</span><span style='color:#808030; '>=</span><span style='color:#808030; '>=</span><span style='color:#000000; '> xhr</span><span style='color:#808030; '>.</span><span style='color:#000000; '>readyState</span><span style='color:#808030; '>)</span><span style='color:#000000; '> </span><span style='color:#800000; font-weight:bold; '>return</span><span style='color:#800080; '>;</span><span style='color:#000000; '></span>
<span style='color:#000000; '></span>
<span style='color:#000000; '>&#xa0;&#xa0;console</span><span style='color:#808030; '>.</span><span style='color:#400000; '>log</span><span style='color:#808030; '>(</span><span style='color:#000000; '>xhr</span><span style='color:#808030; '>.</span><span style='color:#000000; '>response</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span><span style='color:#000000; '></span>
<span style='color:#800080; '>}</span><span style='color:#000000; '></span>
<span style='color:#000000; '>xhr</span><span style='color:#808030; '>.</span><span style='color:#000000; '>send</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span><span style='color:#000000; '></span>
<span style='color:#000000; '></span>
<span style='color:#696969; '>/*</span>
<span style='color:#696969; '>&#xa0;&#xa0;responseType "blob" ->console: (object)   Blob {size: 42, type: "text/javascript", slice: function}</span>
<span style='color:#696969; '>&#xa0;&#xa0;responseType "text" ->console: (text)     'self.onmessage=function(e){postMessage(e)}'</span>
<span style='color:#696969; '>*/</span><span style='color:#000000; '></span>
<span style='color:#5f5035; '>?></span>
</pre>


<hr />
<sub><em>if you are wondering, I'm using it to generate a <strong>web-worker with no external files</strong></em>
<em>you may use it to return binary content, for example a YouTube video ;) (from the &lt;video&gt; tag resource attribute)</em></sub>

<pre>blob<span style='color:#800080; '>:</span>http<span style='color:#808030; '>%</span>3A<span style='color:#696969; '>//stackoverflow.com/02e79c2b-025a-4293-be0f-f121dd57ccf7"</span>

<span style='color:#800000; font-weight:bold; '>var</span> xhr <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>new</span> XMLHttpRequest<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
xhr<span style='color:#808030; '>.</span>open<span style='color:#808030; '>(</span><span style='color:#0000e6; '>'GET'</span><span style='color:#808030; '>,</span> <span style='color:#0000e6; '>'blob:http%3A//stackoverflow.com/02e79c2b-025a-4293-be0f-f121dd57ccf7'</span><span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>true</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
xhr<span style='color:#808030; '>.</span>responseType <span style='color:#808030; '>=</span> <span style='color:#0000e6; '>'text'</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>/* or "blob" */</span>
xhr<span style='color:#808030; '>.</span>onreadystatechange <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span>xhr<span style='color:#808030; '>.</span>DONE <span style='color:#808030; '>!==</span> xhr<span style='color:#808030; '>.</span>readyState<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>return</span><span style='color:#800080; '>;</span>

  console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>xhr<span style='color:#808030; '>.</span>response<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
xhr<span style='color:#808030; '>.</span>send<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

<span style='color:#696969; '>/*</span>
<span style='color:#696969; '>&#xa0;&#xa0;responseType "blob" ->console: (object)   Blob {size: 42, type: "text/javascript", slice: function}</span>
<span style='color:#696969; '>&#xa0;&#xa0;responseType "text" ->console: (text)     'self.onmessage=function(e){postMessage(e)}'</span>
<span style='color:#696969; '>*/</span>
</pre>

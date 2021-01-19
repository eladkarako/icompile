<!--more-->

<h2>The <code>document.domain</code> method</h2>
<ul>
	<li>Method type: <strong>iframe</strong>.</li>
</ul>
Note that this is an iframe method that sets the value of document.domain to a suffix of the current domain. If it does so, the shorter domain is used for subsequent origin checks. For example, assume a script in the document at <code>http://store.company.com/dir/other.html</code> executes the following statement:
<pre><code><span class="pln">document</span><span class="pun">.</span><span class="pln">domain </span><span class="pun">=</span> <span class="str">"company.com"</span><span class="pun">;</span></code></pre>
After that statement executes, the page would pass the origin check with <code>http://company.com/dir/page.html</code>. However, by the same reasoning, company.com could not set <code>document.domain</code> to <code>othercompany.com</code>.

With this method, you would be allowed to exectue javascript from an iframe sourced on a subdomain on a page sourced on the main domain. This method is not suited for cross-domain resources as browsers like Firefox will not allow you to change the <code>document.domain</code> to a completely alien domain.

Source: <a href="https://developer.mozilla.org/en/Same_origin_policy_for_JavaScript" rel="nofollow">https://developer.mozilla.org/en/Same_origin_policy_for_JavaScript</a>
<h2>The Cross-Origin Resource Sharing method</h2>
<ul>
	<li>Method type: <strong>AJAX</strong>.</li>
</ul>
<a href="http://www.w3.org/TR/access-control/" rel="nofollow">Cross-Origin Resource Sharing</a> (CORS) is a W3C Working Draft that defines how the browser and server must communicate when accessing sources across origins. The basic idea behind CORS is to use custom HTTP headers to allow both the browser and the server to know enough about each other to determine if the request or response should succeed or fail.

For a simple request, one that uses either <code>GET</code> or <code>POST</code> with no custom headers and whose body is <code>text/plain</code>, the request is sent with an extra header called <code>Origin</code>. The Origin header contains the origin (protocol, domain name, and port) of the requesting page so that the server can easily determine whether or not it should serve a response. An example <code>Origin</code> header might look like this:
<pre><code><span class="typ">Origin</span><span class="pun">:</span><span class="pln"> http</span><span class="pun">:</span><span class="com">//www.stackoverflow.com</span></code></pre>
If the server decides that the request should be allowed, it sends a <code>Access-Control-Allow-Origin</code> header echoing back the same origin that was sent or <code>*</code> if it’s a public resource. For example:
<pre><code><span class="typ">Access</span><span class="pun">-</span><span class="typ">Control</span><span class="pun">-</span><span class="typ">Allow</span><span class="pun">-</span><span class="typ">Origin</span><span class="pun">:</span><span class="pln"> http</span><span class="pun">:</span><span class="com">//www.stackoverflow.com</span></code></pre>
If this header is missing, or the origins don’t match, then the browser disallows the request. If all is well, then the browser processes the request. Note that neither the requests nor responses include cookie information.

The Mozilla team suggests in <a href="http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/" rel="nofollow">their post about CORS</a> that you should check for the existence of the <code>withCredentials</code> property to determine if the browser supports CORS via XHR. You can then couple with the existence of the <code>XDomainRequest</code> object to cover all browsers:
<pre><code><span class="kwd">function</span><span class="pln"> createCORSRequest</span><span class="pun">(</span><span class="pln">method</span><span class="pun">,</span><span class="pln"> url</span><span class="pun">){</span>
    <span class="kwd">var</span><span class="pln"> xhr </span><span class="pun">=</span> <span class="kwd">new</span> <span class="typ">XMLHttpRequest</span><span class="pun">();</span>
    <span class="kwd">if</span> <span class="pun">(</span><span class="str">"withCredentials"</span> <span class="kwd">in</span><span class="pln"> xhr</span><span class="pun">){</span><span class="pln">
        xhr</span><span class="pun">.</span><span class="pln">open</span><span class="pun">(</span><span class="pln">method</span><span class="pun">,</span><span class="pln"> url</span><span class="pun">,</span> <span class="kwd">true</span><span class="pun">);</span>
    <span class="pun">}</span> <span class="kwd">else</span> <span class="kwd">if</span> <span class="pun">(</span><span class="kwd">typeof</span> <span class="typ">XDomainRequest</span> <span class="pun">!=</span> <span class="str">"undefined"</span><span class="pun">){</span><span class="pln">
        xhr </span><span class="pun">=</span> <span class="kwd">new</span> <span class="typ">XDomainRequest</span><span class="pun">();</span><span class="pln">
        xhr</span><span class="pun">.</span><span class="pln">open</span><span class="pun">(</span><span class="pln">method</span><span class="pun">,</span><span class="pln"> url</span><span class="pun">);</span>
    <span class="pun">}</span> <span class="kwd">else</span> <span class="pun">{</span><span class="pln">
        xhr </span><span class="pun">=</span> <span class="kwd">null</span><span class="pun">;</span>
    <span class="pun">}</span>
    <span class="kwd">return</span><span class="pln"> xhr</span><span class="pun">;</span>
<span class="pun">}</span>

<span class="kwd">var</span><span class="pln"> request </span><span class="pun">=</span><span class="pln"> createCORSRequest</span><span class="pun">(</span><span class="str">"get"</span><span class="pun">,</span> <span class="str">"http://www.stackoverflow.com/"</span><span class="pun">);</span>
<span class="kwd">if</span> <span class="pun">(</span><span class="pln">request</span><span class="pun">){</span><span class="pln">
    request</span><span class="pun">.</span><span class="pln">onload </span><span class="pun">=</span> <span class="kwd">function</span><span class="pun">()</span> <span class="pun">{</span>
        <span class="com">// ...</span>
    <span class="pun">};</span><span class="pln">
    request</span><span class="pun">.</span><span class="pln">onreadystatechange </span><span class="pun">=</span><span class="pln"> handler</span><span class="pun">;</span><span class="pln">
    request</span><span class="pun">.</span><span class="pln">send</span><span class="pun">();</span>
<span class="pun">}</span></code></pre>
Note that for the CORS method to work, you need to have access to any type of server header mechanic and can't simply access any third-party resource.

Source: <a href="http://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/" rel="nofollow">http://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/</a>
<h2>The <code>window.postMessage</code> method</h2>
<ul>
	<li>Method type: <strong>iframe</strong>.</li>
</ul>
<code>window.postMessage</code>, when called, causes a <code>MessageEvent</code> to be dispatched at the target window when any pending script that must be executed completes (e.g. remaining event handlers if<code>window.postMessage</code> is called from an event handler, previously-set pending timeouts, etc.). The<code>MessageEvent</code> has the type message, a <code>data</code> property which is set to the string value of the first argument provided to <code>window.postMessage</code>, an <code>origin</code> property corresponding to the origin of the main document in the window calling <code>window.postMessage</code> at the time <code>window.postMessage</code> was called, and a <code>source</code> property which is the window from which <code>window.postMessage</code> is called.

To use <code>window.postMessage</code>, an event listener must be attached:
<pre><code>    <span class="com">// Internet Explorer</span><span class="pln">
    window</span><span class="pun">.</span><span class="pln">attachEvent</span><span class="pun">(</span><span class="str">'onmessage'</span><span class="pun">,</span><span class="pln">receiveMessage</span><span class="pun">);</span>

    <span class="com">// Opera/Mozilla/Webkit</span><span class="pln">
    window</span><span class="pun">.</span><span class="pln">addEventListener</span><span class="pun">(</span><span class="str">"message"</span><span class="pun">,</span><span class="pln"> receiveMessage</span><span class="pun">,</span> <span class="kwd">false</span><span class="pun">);</span></code></pre>
And a <code>receiveMessage</code> function must be declared:
<pre><code><span class="kwd">function</span><span class="pln"> receiveMessage</span><span class="pun">(</span><span class="kwd">event</span><span class="pun">)</span>
<span class="pun">{</span>
    <span class="com">// do something with event.data;</span>
<span class="pun">}</span></code></pre>
The off-site iframe must also send events properly via <code>postMessage</code>:
<pre><code><span class="tag">&lt;script&gt;</span><span class="pln">window</span><span class="pun">.</span><span class="pln">parent</span><span class="pun">.</span><span class="pln">postMessage</span><span class="pun">(</span><span class="str">'foo'</span><span class="pun">,</span><span class="str">'*'</span><span class="pun">)</span><span class="tag">&lt;/script&gt;</span></code></pre>
Any window may access this method on any other window, at any time, regardless of the location of the document in the window, to send it a message. Consequently, any event listener used to receive messages must first check the identity of the sender of the message, using the origin and possibly source properties. This cannot be understated: <strong>Failure to check the <code>origin</code> and possibly <code>source</code> properties enables cross-site scripting attacks.</strong>

Source: <a href="https://developer.mozilla.org/en/DOM/window.postMessage" rel="nofollow">https://developer.mozilla.org/en/DOM/window.postMessage</a>

<a href="https://icompile.eladkarako.com/_uploads/2015/01/cdmn.png"><img class="alignnone size-full wp-image-2387" src="https://icompile.eladkarako.com/_uploads/2015/01/cdmn.png" alt="cdmn" rem-width="1023" rem-height="590" /></a>
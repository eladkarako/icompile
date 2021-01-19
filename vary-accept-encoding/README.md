<h4>Specify a Vary: Accept-Encoding header</h4>
<img class="aligncenter size-full wp-image-3860" src="https://icompile.eladkarako.com/_uploads/2015/12/bootstrapcdn-vary-accept-encoding-2.png" alt="bootstrapcdn-vary-accept-encoding-2" width="393" height="427" />

Bugs in some public proxies may lead to compressed versions of your resources being served to users that don't support compression. Specifying the <code>Vary: Accept-Encoding</code> header instructs the proxy to store both a compressed and uncompressed version of the resource.
<!--more-->
<ul>
	<li>The <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9" rel="nofollow"><code>cache-control</code></a> header is the primary mechanism for an HTTP server to tell a caching proxy the "freshness" of a response. (i.e., how/if long to store the response in the cache)</li>
	<li>In some situations, <code>cache-control</code> directives are insufficient. A discussion from the HTTP working group is archived <a href="http://www.w3.org/Protocols/HTTP/Issues/vary-header.html" rel="nofollow">here,</a> describing a page that changes only with language. This is <em>not</em>the correct use case for the vary header, but the context is valuable for our discussion. (Although I believe the Vary header would solve the problem in that case, there is a Better Way.) From that page:</li>
</ul>
<blockquote><em><a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.44" rel="nofollow"><code>Vary</code></a> is strictly for those cases where it's hopeless or excessively complicated for a proxy to replicate what the server would do.</em></blockquote>
<ul>
	<li>This <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.44" rel="nofollow">page</a> describes the header usage from the server perspective, this <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html#sec13.6" rel="nofollow">one</a> from a caching proxy perspective. It's intended to specify a set of HTTP request headers that determine uniqueness of a request.</li>
</ul>
A contrived example:

Your HTTP server has a large landing page. You have two slightly different pages with the same URL, depending if the user has been there before. You distinguish between requests and a user's "visit count" based on Cookies. But -- since your server's landing page is so large, you want intermediary proxies to cache the response if possible.

The URL, Last-Modified and Cache-Control headers are insufficient to give this insight to a caching proxy, but if you add <code>Vary: Cookie</code>, the cache engine will add the Cookie header to its caching decisions.

Finally, for small traffic, dynamic web sites -- I have always found the simple <code>Cache-Control: no-cache, no-store</code> and <code>Pragma: no-cache</code> sufficient.

Edit -- to more precisely answer your question: the HTTP request header 'Accept' defines the Content-Types a client can process. If you have two copies of the same content at the same URL, differing only in Content-Type, then using <code>Vary: Accept</code> could be appropriate.

<strong>Update 11 Sep 12:</strong>

I'm including a couple links that have appeared in the comments since this comment was originally posted. They're both excellent resources for real-world examples (and problems) with Vary: Accept; Iif you're reading this answer you need to read those links as well.

The first, from the outstanding EricLaw, on Internet Explorer's behavior with the Vary header and some of the challenges it presents to developers: <a href="http://blogs.msdn.com/ieinternals/archive/2009/06/17/Vary-Header-Prevents-Caching-in-IE.aspx" rel="nofollow">Vary Header Prevents Caching in IE</a>. In short, IE (pre IE9) does not cache any content that uses the Vary header because the request cache does not include HTTP Request headers. EricLaw (Eric Lawrence in the real world) is a Program Manager on the IE team.

The second is from Eran Medan, and is an on-going discussion of Vary-related unexpected behavior in Chrome: <a href="http://code.google.com/p/chromium/issues/detail?id=94369" rel="nofollow">Backing doesn't handle Vary header correctly</a>. It's related to IE's behavior, except the Chrome devs took a different approach -- though it doesn't appear to have been a deliberate choice.

<hr />

&nbsp;

That’s great for direct access, but modern networks use intermediate caches and CDNs. And there’s the problem: how does the cache use headers to decide what to send back? How can it replicate the server’s decision-making logic?

<strong>Vary</strong> to the rescue. The <strong>Vary</strong> header describes what information “uniquely” identifies a request — caches should only be used if the incoming request matches the <strong>Vary</strong> information in the cache.

For example, if a server sends the <strong>Vary: User-Agent</strong> header, intermediate caches will store a separate cache entry for each User-Agent they see (every OS + browser combination, yikes). This behavior was an issue for me in support (<a href="http://www.netdna.com/company/careers/" target="_blank">we’re hiring!</a>), because we saw origin servers getting hammered as each user-agent requested new content and sidestepped the cache. After some research, I figured out <a href="http://mark.koli.ch/2010/09/understanding-the-http-vary-header-and-caching-proxies-squid-etc.html" target="_blank">why this happened</a> (turn off <strong>Vary: User-Agent</strong>), but the header left a bad taste in my mouth.

&nbsp;

The fix is for the origin server to send back <strong>Vary: Accept-Encoding</strong>. Now the intermediate CDNs will keep separate cache entries (one for <strong>Accept-encoding: gzip</strong>, another if you didn’t send the header). These days you’re unlikely to have clients without compression, but why risk cache mixups?

Origin servers should include <strong>Vary: Accept-Encoding</strong>, and here’s how:
<h3>Apache/.htaccess</h3>
<pre>&lt;IfModule mod_headers.c&gt;
  &lt;FilesMatch ".(js|css|xml|gz|html)$"&gt;
    Header append Vary: Accept-Encoding
  &lt;/FilesMatch&gt;
&lt;/IfModule&gt;</pre>
<h3>Nginx</h3>
<pre>gzip_vary on</pre>
<h3>IIS</h3>
<pre>&lt;system.webServer&gt;
  &lt;httpProtocol&gt;
    &lt;customHeaders&gt;
    &lt;remove name="Vary"&gt;&lt;/remove&gt;
    &lt;add name="Vary" value="Accept-Encoding"&gt;&lt;/add&gt;
    &lt;/customHeaders&gt;
  &lt;/httpProtocol&gt;
&lt;/system.webServer&gt;</pre>
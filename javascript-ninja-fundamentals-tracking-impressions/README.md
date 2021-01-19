<div class="post-text">
<h3>➫➬ Some time saver advice, look for jQuery plugins that does few of those sub-tasks, embedded them as-is into your code.. &#x1f44c;</h3>

<hr />

<h2>⋰ Stuff You Want To Know... ⋱   &#x1f440;</h2>
<ul>
 	<li>have scroll until the widget-container is in the viewport (the part of screen visible).</li>
 	<li>the tab + the window are currently focused.</li>
 	<li>mouse/ touch hover each widget container, each recommendation container, each image, each text description.</li>
 	<li>amount of time of "attention" by mouse hovering above element, or viewport time.</li>
 	<li>repeating /new user, by your 3rd-party cookie (your domain, for example <code>widgets.kyler.com</code>)</li>
 	<li>&#x1f449; new awesome <a href="https://developer.mozilla.org/en-US/docs/Web/API/Performance" rel="nofollow"><strong>API</strong></a></li>
</ul>
<!--more-->


<ul>
 	<li><a href="https://github.com/samyk/evercookie" rel="nofollow">fingerprinting your users &#x1f3c3;</a> - forever cookie (<strong>BAD BAD idea</strong>, but also good if just for playing with)</li>
 	<li>User browser capabilities (query modernizr, enumerate the browser API,...)</li>
 	<li>Open a hidden iframe with your domain, to create your cookies (3'rd party) on the page, this is a trick used by Google, to overcome browser limiting all 3'rd party cookies.</li>
 	<li>advanced: inject not a script, but a iframe, use onmessage api to communicate with your lite-script on the main page (optionally).</li>
 	<li>provide a <code>&lt;noscript&gt;&lt;/noscript&gt;</code> alternative which is just a url that returns a 1x1 pixel image, with all the relevant information you want to collect as argument, prepare a server-side service to collect the data.</li>
 	<li>make all your domains cross-domain friendly, so you could use plain Ajax instead of callbacks..
<ul>
 	<li><a href="https://icompile.eladkarako.com/crossdomain-xml-and-clientaccesspolicy-xml-extremely-permissive/" rel="nofollow">CrossDomain.xml And ClientAccessPolicy.xml - Extremely Permissive</a></li>
 	<li>And COR headers (by .htaccess for example)
<pre>Header set   Access-Control-Allow-Origin        "*"
Header set   Access-Control-Allow-Headers       "Accept, Accept-Charset, Accept-Encoding, Accept-Language, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Expose-Headers, Access-Control-Max-Age, Access-Control-Request-Headers, Access-Control-Request-Method, Cache-Control, Connection, Content-Encoding, Content-Length, Content-Type, Cookie, Date, DNT, Expires, Host, If-Modified-Since, Keep-Alive, Origin, Pragma, Referer, Server, Set-Cookie, Transfer-Encoding, User-Agent, Vary, X-Content-Type-Options, X-CustomHeader, X-Modified, X-OTHER, X-PING, X-PINGOTHER, X-Powered-By, X-Requested-With"
Header set   Access-Control-Expose-Headers      "Accept, Accept-Charset, Accept-Encoding, Accept-Language, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Expose-Headers, Access-Control-Max-Age, Access-Control-Request-Headers, Access-Control-Request-Method, Cache-Control, Connection, Content-Encoding, Content-Length, Content-Type, Cookie, Date, DNT, Expires, Host, If-Modified-Since, Keep-Alive, Origin, Pragma, Referer, Server, Set-Cookie, Transfer-Encoding, User-Agent, Vary, X-Content-Type-Options, X-CustomHeader, X-Modified, X-OTHER, X-PING, X-PINGOTHER, X-Powered-By, X-Requested-With"
Header set   Access-Control-Allow-Credentials   "true"</pre>
</li>
</ul>
</li>
</ul>
- the bonus of having cross-domain friendly domain is that you are now fully capable of sending reports using xhr (XMLHTTPRequest), web-sockets (advanced) or <code>navigator.sendBeacon</code>(prefered) not just scripts and images...
And.. here is a a nice open-source event and statistics collecting named <a href="https://github.com/piwik/piwik" rel="nofollow">piwik</a> you can host on your own domain.

<strong>Hope You'll Find It Useful &#x1f609;<sub><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=7994YX29444PA&amp;lc=US&amp;item_name=Elad%20Karako&amp;item_number=stackoverflow%2dcoffee%2dicon&amp;amount=0%2e50&amp;currency_code=USD&amp;bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted" rel="nofollow">☕</a></sub></strong>

</div>
also answered on <a href="http://stackoverflow.com/questions/28853146/best-way-to-track-impressions/34838369#34838369" target="_blank">stackoverflow</a>
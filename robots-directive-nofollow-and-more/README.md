<!--more-->

.htaccess
<pre>
&lt;ifmodule mod_headers.c&gt;
  Header set X-Robots-Tag "noindex, nofollow, nosnippet, noarchive, noodp, notranslate, noimageindex"
&lt;/ifmodule&gt;
&lt;/pre&gt;
</pre>

index.*
<code>
&lt;meta name="robots" content="noindex, nofollow, nosnippet, noarchive, noodp, notranslate, noimageindex, unavailable_after: 25 Jun 2010 15:00:00 PST"/&gt;
</code>

<a rel="nofollow" href="https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag" target="_blank">https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag</a>



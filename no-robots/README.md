(A Not So Active) Anti Google|* Bot headers
<ol>
<li><h3><code>robots.txt</code></h3>
<pre>User-agent: *

Disallow : /</pre>
</li>
<li><h3><code>.htaccess</code> header (useful for non-html files..) </h3>
<pre>&lt;IfModule mod_headers.c&gt;
  Header set X-Robots-Tag "noindex, nofollow, nosnippet, noarchive, noodp, notranslate, noimageindex, unavailable_after: 25 Jun 2010 15:00:00 PST"
&lt;/IfModule&gt;</pre>
</li>
</ol>
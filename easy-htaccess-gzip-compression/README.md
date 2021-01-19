<img style="border:none;" src="https://icompile.eladkarako.com/_uploads/2015/01/gzipicon.png" alt="gzipicon" width="185" height="185" class="alignright size-full wp-image-2244" />
unlike <a href="https://github.com/eladkarako/PHP-Easy-GZIP-With-No-Use-Of-Buffers" title="https://github.com/eladkarako/PHP-Easy-GZIP-With-No-Use-Of-Buffers" target="_blank">my github project here</a>,
you may as well use your Apache's (or nginx) htaccess rules to apply something called <u><strong>output filter</strong></u>, 
<br />
<strong style="font-size: x-large;">...and its quite easy!</strong>
<br />
<!--more-->


Here is how to compress files by mimetype (prefered method):
<ol>
<li>first, add an empty file named <code style="display:inline">.htaccess</code>, the placement which you'll need to add it varies, the rule-of-thumb is "it applies recursively downwards all folders", so, for the moment, let us create a designated folder named "my_gzip_content" under you web-site tree, down at your host-provider (just FTP for that..), following with creating an empty file (you can do it in the server or just copy an empty text file from your PC using FTP and renaming it <code style="display:inline">.htaccess</code>.
<img src="https://icompile.eladkarako.com/_uploads/2015/01/2015-01-02_144353.png" alt="2015-01-02_144353" width="205" height="121" class="alignnone size-full wp-image-2240" />
</li>

<li>edit, the file adding this content to it:

<pre><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>IfModule</span><span style='color:#274796; '> mod_deflate</span><span style='color:#008c00; '>.</span><span style='color:#274796; '>c</span><span style='color:#a65700; '>></span>
  # Force deflate for mangled headers
  <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>IfModule</span><span style='color:#274796; '> mod_setenvif</span><span style='color:#008c00; '>.</span><span style='color:#274796; '>c</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>IfModule</span><span style='color:#274796; '> mod_headers</span><span style='color:#008c00; '>.</span><span style='color:#274796; '>c</span><span style='color:#a65700; '>></span>
      SetEnvIfNoCase ^(Accept-EncodXng|X-cept-Encoding|X{<span style='color:#008c00; '>15</span>}|~{<span style='color:#008c00; '>15</span>}|-{<span style='color:#008c00; '>15</span>})$ ^((gzip|deflate)\\s*,?\\s*)+|[X~-]{<span style='color:#008c00; '>4</span>,<span style='color:#008c00; '>13</span>}$ HAVE_Accept-Encoding
      RequestHeader append Accept-Encoding "gzip,deflate" env=HAVE_Accept-Encoding
    <span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>IfModule</span><span style='color:#a65700; '>></span>
  <span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>IfModule</span><span style='color:#a65700; '>></span>

  # Legacy versions of Apache
  <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>IfModule</span><span style='color:#274796; '> !mod_filter</span><span style='color:#008c00; '>.</span><span style='color:#274796; '>c</span><span style='color:#a65700; '>></span>
    AddOutputFilterByType DEFLATE text/html text/plain text/css application/json text/javascript
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE text/xml application/xml text/x-component
    AddOutputFilterByType DEFLATE application/xhtml+xml application/rss+xml application/atom+xml
    AddOutputFilterByType DEFLATE image/svg+xml application/vnd<span style='color:#008c00; '>.</span>ms-fontobject application/x-font-ttf font/opentype
  <span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>IfModule</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>IfModule</span><span style='color:#a65700; '>></span>
</pre>
</li>

<li>
- done!
- ...whaaa?
</li>

<li>
- yessss!
all you have to do is place <code style="display:inline;">.htm, .html, .txt, .text, .css, .json, .js, .xml, .xhtml, .vnd, .ttf </code> under that folder, and once you'll browse it, your server will serve it along with the "gzip header", and of course- also compress it using common deflate gzip compression methods,
your browser will get a compressed content (binary) along with several headers that reminds it that it should handle the content as compressed (meaning, decompress before use), and you can save a large amount of traffic, and serve your website a lot faster, which is a plus for Google-crawlers, that will mark your website higher thanks to this..
</li>
</ol>



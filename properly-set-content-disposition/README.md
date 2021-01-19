<pre>##place inside a folder that contains some music videos and documents, this will override the default handler.

<span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>FilesMatch</span> <span style='color:#2a00ff; '>"\\.(mov|mp3|pdf)$"</span><span style='color:#7f0055; '>&gt;</span>

  <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>IfModule</span> mod_mime.c<span style='color:#7f0055; '>&gt;</span> 
    ForceType application/octet-stream
  <span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>IfModule</span><span style='color:#7f0055; '>&gt;</span>

  <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>IfModule</span> mod_headers.c<span style='color:#7f0055; '>&gt;</span> 
    ##fix a bug in old GoDaddy servers.
    Header unset X-Content-Type-Options
    Header unset Content-Disposition

    ##prevent mimetype sniffing (first few bytes can determine that a file should be opened in browser).
    Header set X-Content-Type-Options "nosniff"

    ##extract filename, apply to proper (for example) Content-Disposition: attachment; file="my music.mp3"
    SetEnvIf Request_URI "^.*/([^/]*)$" FILENAME=$1
    Header set "Content-Disposition" "attachment;filename=\\"%{FILENAME}e\\""
    UnsetEnv FILENAME
  <span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>IfModule</span><span style='color:#7f0055; '>&gt;</span>

<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>FilesMatch</span><span style='color:#7f0055; '>&gt;</span>
</pre>


<blockquote>forcing type / because of 'reasons'? &#x1f450;
If this header is used in a response with the application/octet- stream content-type, the implied suggestion is that the user agent should not display the response, but directly enter a `save response as...' dialog.
</blockquote>
<hr />
also edit your HTML so links would use HTML5's download attribute:

<pre><span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; font-weight:bold; '>a</span> href=<span style='color:#2a00ff; '>"mydirectory/my%20music.mp3"</span> download=<span style='color:#2a00ff; '>"my music.mp3"</span> type=<span style='color:#2a00ff; '>"application/octet-stream"</span> title=<span style='color:#2a00ff; '>"click to download"</span><span style='color:#7f0055; '>&gt;</span>hello!!<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; font-weight:bold; '>a</span><span style='color:#7f0055; '>&gt;</span>
</pre>

(which is <a rel="nofollow" href="https://developers.google.com/web/updates/2011/08/Downloading-resources-in-HTML5-a-download" target="_blank">good enough for Google</a>).

✨And, naturally.. &#x1f440; you can combine both of the solutions!


reference: <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html" target="_blank">W3 /  Protocols - RFC2616 (Section 19)</a>.


<br />

also answered on <a href="http://stackoverflow.com/questions/14388994/forcing-a-download-using-filesmatch-in-htaccess-at-www-root/34758866#34758866" target="_blank">stackoverflow</a>
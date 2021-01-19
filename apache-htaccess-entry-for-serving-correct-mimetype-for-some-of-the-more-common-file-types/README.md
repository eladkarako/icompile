Put this part in your <code>.htaccess</code> to make sure your files are served with correct mimetype, and will eventually trigger the target-browser/OS, proper, handler.

<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>IfModule</span> <span style='color:#0000e6; '>mod_mime.c</span><span style='color:#a65700; '>&gt;</span> 
  <span style='color:#800000; font-weight:bold; '>AddType</span> application/font<span style='color:#808030; '>-</span>woff                  woff
  <span style='color:#800000; font-weight:bold; '>AddType</span> application/javascript                 js
  <span style='color:#800000; font-weight:bold; '>AddType</span> application/octet<span style='color:#808030; '>-</span>stream               safariextz
  <span style='color:#800000; font-weight:bold; '>AddType</span> application/vnd.ms<span style='color:#808030; '>-</span>fontobject          eot
  <span style='color:#800000; font-weight:bold; '>AddType</span> application/x<span style='color:#808030; '>-</span>chrome<span style='color:#808030; '>-</span>extension         crx
  <span style='color:#800000; font-weight:bold; '>AddType</span> application/x<span style='color:#808030; '>-</span>font<span style='color:#808030; '>-</span>ttf                 ttf ttc
  <span style='color:#800000; font-weight:bold; '>AddType</span> application/x<span style='color:#808030; '>-</span>font<span style='color:#808030; '>-</span>woff                woff
  <span style='color:#800000; font-weight:bold; '>AddType</span> application/x<span style='color:#808030; '>-</span>mpegurl                  m3u8
  <span style='color:#800000; font-weight:bold; '>AddType</span> application/x<span style='color:#808030; '>-</span>xpinstall                xpi
  <span style='color:#800000; font-weight:bold; '>AddType</span> audio/mp4                              m4a
  <span style='color:#800000; font-weight:bold; '>AddType</span> audio/mpeg                             mp3
  <span style='color:#800000; font-weight:bold; '>AddType</span> audio/ogg                              oga ogg
  <span style='color:#800000; font-weight:bold; '>AddType</span> font/opentype                          otf
  <span style='color:#800000; font-weight:bold; '>AddType</span> image/webp                             webp
  <span style='color:#800000; font-weight:bold; '>AddType</span> image/x<span style='color:#808030; '>-</span>icon                           ico
  <span style='color:#800000; font-weight:bold; '>AddType</span> text/cache<span style='color:#808030; '>-</span>manifest                    appcache manifest
  <span style='color:#800000; font-weight:bold; '>AddType</span> text/plain                             srt sub ssa
  <span style='color:#800000; font-weight:bold; '>AddType</span> text/vtt                               vtt
  <span style='color:#800000; font-weight:bold; '>AddType</span> text/x<span style='color:#808030; '>-</span>component                       htc
  <span style='color:#800000; font-weight:bold; '>AddType</span> text/x<span style='color:#808030; '>-</span>vcard                           vcf
  <span style='color:#800000; font-weight:bold; '>AddType</span> video/3gpp                             3gp
  <span style='color:#800000; font-weight:bold; '>AddType</span> video/mp2t                             ts
  <span style='color:#800000; font-weight:bold; '>AddType</span> video/mp4                              mp4 m4v
  <span style='color:#800000; font-weight:bold; '>AddType</span> video/ogg                              ogv ogg
  <span style='color:#800000; font-weight:bold; '>AddType</span> video/quicktime                        mov
  <span style='color:#800000; font-weight:bold; '>AddType</span> video/x<span style='color:#808030; '>-</span>ms<span style='color:#808030; '>-</span>wmv                         wmv
  <span style='color:#800000; font-weight:bold; '>AddType</span> video/webm                             webm
  <span style='color:#800000; font-weight:bold; '>AddType</span> video/x<span style='color:#808030; '>-</span>flv                            flv
  <span style='color:#800000; font-weight:bold; '>AddType</span> video/x<span style='color:#808030; '>-</span>msvideo                        avi

<span style='color:#696969; '>&#xa0;&#xa0;# Web application-manifests.  [https://github.com/mdn/to-do-notifications/blob/gh-pages/.htaccess]</span>
  <span style='color:#800000; font-weight:bold; '>AddType</span> application/x<span style='color:#808030; '>-</span>web<span style='color:#808030; '>-</span>app<span style='color:#808030; '>-</span>manifest<span style='color:#808030; '>+</span>json    webapp

<span style='color:#696969; '>&#xa0;&#xa0;# SVG.</span>
<span style='color:#696969; '>&#xa0;&#xa0;#   Required for svg webfonts on iPad [twitter.com/FontSquirrel/status/14855840545]</span>
  <span style='color:#800000; font-weight:bold; '>AddType</span> image/svg<span style='color:#808030; '>+</span>xml                          svg svgz 
  <span style='color:#800000; font-weight:bold; '>AddEncoding</span> gzip                               svgz
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>IfModule</span><span style='color:#a65700; '>&gt;</span>
</pre>

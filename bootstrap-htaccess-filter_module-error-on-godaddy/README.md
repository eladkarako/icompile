The following part from <a title="https://github.com/billpatrianakos/matvre/blob/master/bootstrap.htaccess" href="https://github.com/billpatrianakos/matvre/blob/master/bootstrap.htaccess" target="_blank">https://github.com/billpatrianakos/matvre/blob/master/bootstrap.htaccess</a> does not seems to be working with GoDaddy's servers so remove it... unless you like the "Server Error 500" thing...
<pre># HTML, TXT, CSS, JavaScript, JSON, XML, HTC:

  FilterDeclare   COMPRESS
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $text/html
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $text/css
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $text/plain
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $text/xml
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $text/x-component
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $application/javascript
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $application/json
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $application/xml
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $application/xhtml+xml
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $application/rss+xml
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $application/atom+xml
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $application/vnd.ms-fontobject
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $image/svg+xml
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $application/x-font-ttf
  FilterProvider  COMPRESS  DEFLATE resp=Content-Type $font/opentype
  FilterChain     COMPRESS
  FilterProtocol  COMPRESS  DEFLATE change=yes;byteranges=no

</pre>

also this..
<pre>
# Rename session cookie to something else, than PHPSESSID
php_value session.name coolcookiename
</pre>
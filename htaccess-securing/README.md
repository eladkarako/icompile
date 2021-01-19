1. <a href="http://incredibill.me/htaccess-block-country-ips" title="http://incredibill.me/htaccess-block-country-ips" target="_blank">Generating a country based blocked lists to put in your htaccess file.</a>

<br/>

2. blocking bad crawlers
<pre>
# 5G:[USER AGENTS]
<IfModule mod_setenvif.c>
	SetEnvIfNoCase User-Agent (curl|binlar|casper|cmsworldmap|comodo|diavol|dotbot|feedfinder|flicky|ia_archiver|jakarta|kmccrew|nutch|planetwork|purebot|pycurl|outbrain|java|skygrid|sucker|turnit|vikspider|zmeu) keep_out
	<limit GET POST PUT>
		Order Allow,Deny
		Allow from all
		Deny from env=keep_out
	</limit>
</IfModule>
</pre>

<br/>

3. using new headers ::: <a href="https://wiki.mozilla.org/Security/CSP/Specification" title="https://wiki.mozilla.org/Security/CSP/Specification" target="_blank">https://wiki.mozilla.org/Security/CSP/Specification</a>
<pre>

#https://wiki.mozilla.org/Security/CSP/Specification
<IfModule mod_headers.c>
  Header set Vary "Accept-Encoding"

  #prevent browser sniff mimetype from file content before downloading the file, using this- the declared mimetype will be used.
  Header set X-Content-Type-Options "nosniff"

  #activates Internet-Explorer's anti-XSS tools
  Header set X-Xss-Protection "1; mode=block"

  # CSRF protection - only friendly frames allows
  Header set X-Frame-Options "SAMEORIGIN"
</IfModule>
</pre>
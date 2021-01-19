the following rule will redirect but keep all request headers
<pre>
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule .* ./pit/index.php?originalurl=%0 [PT,QSA,L]
</pre>

the redirect page will be added originalurl= argument with all arguments (?variable=value&...)
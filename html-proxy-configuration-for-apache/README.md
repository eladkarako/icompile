Essentially, it tries to locate "links" (URL, URI, whateva'...) in (X)HTML Documents,
kindd'a smart..

The following is a pin-point location on "Where Would \\ONE\\ Would Find A Link"... :)


<pre><span style='color:#b96969; '># Configuration example.</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '># For detailed information about these directives see</span>
<span style='color:#b96969; '># &lt;URL:http://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html&gt;</span>
<span style='color:#b96969; '># and for mod_xml2enc see</span>
<span style='color:#b96969; '># &lt;URL:http://httpd.apache.org/docs/2.4/mod/mod_xml2enc.html&gt;</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '># First, to load the module with its prerequisites.  Note: mod_xml2enc</span>
<span style='color:#b96969; '># is not always necessary, but without it mod_proxy_html is likely to</span>
<span style='color:#b96969; '># mangle pages in encodings other than ASCII or Unicode (utf-8).</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '># For Unix-family systems:</span>
<span style='color:#b96969; '># LoadFile	/usr/lib/libxml2.so</span>
<span style='color:#b96969; '># LoadModule	proxy_html_module	modules/mod_proxy_html.so</span>
<span style='color:#b96969; '># LoadModule	xml2enc_module		modules/mod_xml2enc.so</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '># For Windows (I don't know if there's a standard path for the libraries)</span>
<span style='color:#b96969; '># LoadFile	C:/path/zlib.dll</span>
<span style='color:#b96969; '># LoadFile	C:/path/iconv.dll</span>
<span style='color:#b96969; '># LoadFile	C:/path/libxml2.dll</span>
<span style='color:#b96969; '># LoadModule	proxy_html_module	modules/mod_proxy_html.so</span>
<span style='color:#b96969; '># LoadModule	xml2enc_module		modules/mod_xml2enc.so</span>
<span style='color:#b96969; '># </span>
<span style='color:#b96969; '># All knowledge of HTML links has been removed from the mod_proxy_html</span>
<span style='color:#b96969; '># code itself, and is instead read from httpd.conf (or included file)</span>
<span style='color:#b96969; '># at server startup.  So you MUST declare it.  This will normally be</span>
<span style='color:#b96969; '># at top level, but can also be used in a &lt;Location&gt;.</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '># Here's the declaration for W3C HTML 4.01 and XHTML 1.0</span>

ProxyHTMLLinks	a		href
ProxyHTMLLinks	area		href
ProxyHTMLLinks	link		href
ProxyHTMLLinks	img		src longdesc usemap
ProxyHTMLLinks	object		classid codebase data usemap
ProxyHTMLLinks	q		cite
ProxyHTMLLinks	blockquote	cite
ProxyHTMLLinks	ins		cite
ProxyHTMLLinks	del		cite
ProxyHTMLLinks	form		<span style='color:#508050; font-weight:bold; '>action</span>
ProxyHTMLLinks	input		src usemap
ProxyHTMLLinks	head		profile
ProxyHTMLLinks	base		href
ProxyHTMLLinks	script		src for

<span style='color:#b96969; '># To support scripting events (with ProxyHTMLExtended On),</span>
<span style='color:#b96969; '># you'll need to declare them too.</span>

ProxyHTMLEvents	onclick ondblclick onmousedown onmouseup \\
		onmouseover onmousemove onmouseout onkeypress \\
		onkeydown onkeyup onfocus onblur onload \\
		onunload onsubmit onreset onselect onchange

<span style='color:#b96969; '># If you need to support legacy (pre-1998, aka "transitional") HTML or XHTML,</span>
<span style='color:#b96969; '># you'll need to uncomment the following deprecated link attributes.</span>
<span style='color:#b96969; '># Note that these are enabled in earlier mod_proxy_html versions</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '># ProxyHTMLLinks	frame		src longdesc</span>
<span style='color:#b96969; '># ProxyHTMLLinks	iframe		src longdesc</span>
<span style='color:#b96969; '># ProxyHTMLLinks	body		background</span>
<span style='color:#b96969; '># ProxyHTMLLinks	applet		codebase</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '># If you're dealing with proprietary HTML variants,</span>
<span style='color:#b96969; '># declare your own URL attributes here as required.</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '># ProxyHTMLLinks	myelement	myattr otherattr</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '>###########</span>
<span style='color:#b96969; '># EXAMPLE #</span>
<span style='color:#b96969; '>###########</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '># To define the URL /my-gateway/ as a gateway to an appserver with address</span>
<span style='color:#b96969; '># http://some.app.intranet/ on a private network, after loading the</span>
<span style='color:#b96969; '># modules and including this configuration file:</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '># ProxyRequests Off  &lt;-- this is an important security setting</span>
<span style='color:#b96969; '># ProxyPass /my-gateway/ http://some.app.intranet/</span>
<span style='color:#b96969; '># &lt;Location /my-gateway/&gt;</span>
<span style='color:#b96969; '>#	ProxyPassReverse /</span>
<span style='color:#b96969; '>#	ProxyHTMLEnable On</span>
<span style='color:#b96969; '>#	ProxyHTMLURLMap http://some.app.intranet/ /my-gateway/</span>
<span style='color:#b96969; '>#	ProxyHTMLURLMap / /my-gateway/</span>
<span style='color:#b96969; '># &lt;/Location&gt;</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '># Many (though not all) real-life setups are more complex.</span>
<span style='color:#b96969; '>#</span>
<span style='color:#b96969; '># See the documentation at</span>
<span style='color:#b96969; '># http://apache.webthing.com/mod_proxy_html/</span>
<span style='color:#b96969; '># and the tutorial at</span>
<span style='color:#b96969; '># http://www.apachetutor.org/admin/reverseproxies</span>
</pre>
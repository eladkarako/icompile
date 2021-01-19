<pre><style>
  pre.code-like{
    -webkit-text-stroke: .2px rgba(0,0,0,.5);
    background: rgba(245,245,211,.1);
    border-radius: 2px;
    border: 1px dashed rgba(214,214,214,.7);
    box-shadow: 1px 1px 1px rgba(0,0,0,.5),  -1px -1px 2px rgba(0,0,0,.2);
    color: #000000;
    font-family: Courier New,monospace;
    line-height: 1.3em;
    margin: 0;
    overflow-x: auto;
    padding: 5px;
    white-space: pre !important;
    word-break: normal !important;
    word-wrap: normal !important;
  }
</style></pre>

crossdomain.xml
<pre><span style='color:#7f0055; '>&lt;?</span><span style='color:#7f0055; font-weight:bold; '>xml</span><span style='color:#7f0055; '> </span><span style='color:#7f0055; '>version</span><span style='color:#7f0055; '>=</span><span style='color:#2a00ff; '>"</span><span style='color:#7f0055; font-weight:bold; '>1.0</span><span style='color:#2a00ff; '>"</span><span style='color:#7f0055; '>?></span>
<span style='color:#7f0055; '>&lt;!</span><span style='color:#7f0055; font-weight:bold; '>DOCTYPE</span> <span style='color:#7f0055; font-weight:bold; '>cross-domain-policy</span> <span style='color:#7f0055; '>SYSTEM</span> <span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>http</span><span style='color:#2a00ff; '>:</span><span style='color:#7f0055; font-weight:bold; '>//</span><span style='color:#3f3fbf; '>www.adobe.com</span><span style='color:#3f3fbf; '>/xml/dtds/cross-domain-policy.dtd</span><span style='color:#2a00ff; '>"</span><span style='color:#7f0055; '>></span>
<span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>cross-domain-policy</span><span style='color:#7f0055; '>></span>
  <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>site-control</span> permitted-cross-domain-policies=<span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>all</span><span style='color:#2a00ff; '>"</span><span style='color:#7f0055; '>/></span>
  <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>allow-access-from</span> domain=<span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>*</span><span style='color:#2a00ff; '>"</span> to-ports=<span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>*</span><span style='color:#2a00ff; '>"</span> secure=<span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>false</span><span style='color:#2a00ff; '>"</span><span style='color:#7f0055; '>/></span>
  <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>allow-http-request-headers-from</span> domain=<span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>*</span><span style='color:#2a00ff; '>"</span> headers=<span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>*</span><span style='color:#2a00ff; '>"</span> secure=<span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>false</span><span style='color:#2a00ff; '>"</span><span style='color:#7f0055; '>/></span>
<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>cross-domain-policy</span><span style='color:#7f0055; '>></span>
</pre>


<hr />


<pre><span style='color:#7f0055; '>&lt;?</span><span style='color:#7f0055; font-weight:bold; '>xml</span><span style='color:#7f0055; '> </span><span style='color:#7f0055; '>version</span><span style='color:#7f0055; '>=</span><span style='color:#2a00ff; '>"</span><span style='color:#7f0055; font-weight:bold; '>1.0</span><span style='color:#2a00ff; '>"</span><span style='color:#7f0055; '> </span><span style='color:#7f0055; '>encoding</span><span style='color:#7f0055; '>=</span><span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>utf-8</span><span style='color:#2a00ff; '>"</span><span style='color:#7f0055; '>?></span>
<span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>access-policy</span><span style='color:#7f0055; '>></span>
  <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>cross-domain-access</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>policy</span><span style='color:#7f0055; '>></span>
      <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>allow-from</span> http-request-headers=<span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>*</span><span style='color:#2a00ff; '>"</span><span style='color:#7f0055; '>></span>
        <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>domain</span> uri=<span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>*</span><span style='color:#2a00ff; '>"</span><span style='color:#7f0055; '>/></span>
      <span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>allow-from</span><span style='color:#7f0055; '>></span>
      <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>grant-to</span><span style='color:#7f0055; '>></span>
        <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>resource</span> path=<span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>/</span><span style='color:#2a00ff; '>"</span> include-subpaths=<span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>true</span><span style='color:#2a00ff; '>"</span><span style='color:#7f0055; '>/></span>
      <span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>grant-to</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>policy</span><span style='color:#7f0055; '>></span>
  <span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>cross-domain-access</span><span style='color:#7f0055; '>></span>
<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>access-policy</span><span style='color:#7f0055; '>></span>
</pre>
<pre><script>
  function make_editable_readonly(element){
    element.backup_innerHTML = element.innerHTML;
    element.contenteditable = "true";
element.onautocomplete = element.onchange = element.oncontextmenu = element.oncopy = element.oncuechange = element.oncut = element.ondrag = element.ondragend = element.ondrop = element.onemptied = element.onkeyup = element.onmouseup = element.onpaste = element.onreset = function restore(){ if (element.innerHTML !== element.backup_innerHTML) element.innerHTML = element.backup_innerHTML; }; 
  }

  Array.prototype.forEach.call(document.querySelectorAll('pre.code-like'), function(element){ make_editable_readonly(element) });
</script></pre>


<hr />

Mostly used for 
■ Flash
■ Flex
■ (and) Silverlight
■ there are some rare JavaScript bridges that uses those files too... (mostly for crossdomain-XHR)..

☠☢☣⚠⚡...⚾... <em>(whaaa? why ⚾?? ohhh... nevermind..)</em>
<strong>no</strong> warning or other lame excuse, this is what no-one wants you to use,


<blockquote>⓵ it is actually not really needed to the encoding, 
but you may specify <code>encoding="utf-8"</code> or <code>encoding="ISO-8859-1"</code>
</blockquote>

<blockquote>⓶ Alternative policy file-schemas
Generic DTD 	http://www.adobe.com/xml/dtds/cross-domain-policy.dtd
Generic XSD 	http://www.adobe.com/xml/schemas/PolicyFile.xsd
HTTP XSD    	http://www.adobe.com/xml/schemas/PolicyFileHttp.xsd
HTTPS XSD   	http://www.adobe.com/xml/schemas/PolicyFileHttps.xsd
FTP XSD     	http://www.adobe.com/xml/schemas/PolicyFileFtp.xsd
Socket XSD  	http://www.adobe.com/xml/schemas/PolicyFileSocket.xsd
</blockquote>

<blockquote>⓷ Ideally, all URL policy files should be served (using <code>.htaccess</code> is perfectly fine!) with: <code>Content-Type: text/x-cross-domain-policy</code>.
(although is is ok to serve it as either one of those: <code>text/*</code>,<code>application/xml</code> or <code>application/xhtml+xml</code>
</blockquote>

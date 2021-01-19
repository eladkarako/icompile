<code>Unexpected attribute "http_headers" for mapping type script.</code> is especially annoying if you are developing some kind of all-in-one app which requires some headers sent, and you come from the world of Apache && .htaccess which makes this sort of stuff super easy..

But as for GAE - There are limitations

for <code>static files</code> you can use:
<ul>
 	<li><code>mime_type</code></li>
 	<li><code>upload</code></li>
 	<li><code>expiration</code></li>
 	<li><code>require_matching_file</code></li>
 	<li><code>http_headers</code></li>
 	<li><code>application_readable</code></li>
</ul>
for <code>static dir</code> you can use
<ul>
 	<li><code>mime_type</code></li>
 	<li><code>expiration</code></li>
 	<li><code>require_matching_file</code></li>
 	<li><code>http_headers</code></li>
 	<li><code>application_readable</code></li>
</ul>
for <code>API endpoint</code> you can use:
<ul>
 	<li><code>position</code></li>
 	<li>and <code>script</code></li>
</ul>
<!--more-->


<strong>but</strong> for <code>script</code> you can <strong>ONLY</strong> use:
<ul>
 	<li><code>position</code></li>
</ul>
Hope it helps a little,
I've come around the same issue with PHP-scripting over <em>GAE</em>,
After digging around I found those limits were defined in the <code>appinfo.py</code> (around lines ~960-970)...
<div class="highlight highlight-source-python">
<pre>  <span class="pl-c1">COMMON_FIELDS</span> <span class="pl-k">=</span> <span class="pl-c1">set</span>([
      <span class="pl-c1">URL</span>, <span class="pl-c1">LOGIN</span>, <span class="pl-c1">AUTH_FAIL_ACTION</span>, <span class="pl-c1">SECURE</span>, <span class="pl-c1">REDIRECT_HTTP_RESPONSE_CODE</span>])



  <span class="pl-c1">ALLOWED_FIELDS</span> <span class="pl-k">=</span> {
      <span class="pl-c1">HANDLER_STATIC_FILES</span>: (<span class="pl-c1">MIME_TYPE</span>, <span class="pl-c1">UPLOAD</span>, <span class="pl-c1">EXPIRATION</span>,
                             <span class="pl-c1">REQUIRE_MATCHING_FILE</span>, <span class="pl-c1">HTTP_HEADERS</span>,
                             <span class="pl-c1">APPLICATION_READABLE</span>),
      <span class="pl-c1">HANDLER_STATIC_DIR</span>: (<span class="pl-c1">MIME_TYPE</span>, <span class="pl-c1">EXPIRATION</span>, <span class="pl-c1">REQUIRE_MATCHING_FILE</span>,
                           <span class="pl-c1">HTTP_HEADERS</span>, <span class="pl-c1">APPLICATION_READABLE</span>),
      <span class="pl-c1">HANDLER_SCRIPT</span>: (<span class="pl-c1">POSITION</span>),
      <span class="pl-c1">HANDLER_API_ENDPOINT</span>: (<span class="pl-c1">POSITION</span>, <span class="pl-c1">SCRIPT</span>),
  }

  <span class="pl-k">def</span> <span class="pl-en">GetHandler</span>(<span class="pl-smi"><span class="pl-smi">self</span></span>):
    <span class="pl-s"><span class="pl-pds">"""</span>Get handler for mapping.</span></pre>
</div>
..But don't bother editing the file thinking it will remove the limitation <sub>(as I did..)</sub>,
it will <em>just skip</em> the <strong>client-side</strong> validation of <code>appinfo.py</code>, but <em>will fail</em> on <strong>server-side validation</strong> with similar message:
<blockquote>Error 400: --- begin server output ---
Error when loading application configuration:
Unexpected attribute "http_headers" for mapping type script.
--- end server output ---</blockquote>
A nice alternative <sub>(for <code>PHP</code> at least..)</sub>,
is delaying the output by providing an output buffer,
which gives you a "long-time" (basically until you either flush the buffers or the scripts ends) to manually<a href="http://php.net/manual/en/function.header.php">send the headers yourself</a>

your code (again, in <code>PHP</code> but you can find similar solutions for other script-languages)
should look something like this:
<div class="highlight highlight-text-html-php">
<pre><span class="pl-s1"><span class="pl-k">&lt;</span>?<span class="pl-c1">php</span> </span>
<span class="pl-s1"><span class="pl-c1">header</span>(<span class="pl-s"><span class="pl-pds">'</span>Access-Control-Allow-Origin: *<span class="pl-pds">'</span></span>); </span></pre>
</div>
and for delaying the output using an output buffer (I recommend using this way to avoid "sending headers after a content has already sent to browser")
is by adding (again, in <code>PHP</code>) a file named <code>php.ini</code> with the following values:
<div class="highlight highlight-source-ini">
<pre><span class="pl-k">output_buffering</span>=On
<span class="pl-k">implicit_flush</span>=0</pre>
</div>

<hr />

full project:
<code>app.yaml</code>:
<div class="highlight highlight-source-yaml">
<pre><span class="pl-s"><span class="pl-ent">application:</span> <span class="pl-s">helloworld</span></span>
<span class="pl-c1"><span class="pl-ent">version:</span> 1</span>
<span class="pl-s"><span class="pl-ent">runtime:</span> <span class="pl-s">php55</span></span>
<span class="pl-c1"><span class="pl-ent">api_version:</span> 1</span>

<span class="pl-s"><span class="pl-ent">handlers:</span></span>
<span class="pl-s">- <span class="pl-ent">url:</span> <span class="pl-s">/.*</span></span>
  <span class="pl-s"><span class="pl-ent">script:</span> <span class="pl-s">helloworld.php</span></span></pre>
</div>
<code>helloworld.php</code>
<div class="highlight highlight-text-html-php">
<pre><span class="pl-pse">&lt;?php</span>
<span class="pl-s1">  <span class="pl-c">/* CORS Joy!!! */</span></span>
<span class="pl-s1">  <span class="pl-c1">header</span>(<span class="pl-s"><span class="pl-pds">'</span>Access-Control-Allow-Origin: *<span class="pl-pds">'</span></span>);</span>
<span class="pl-s1">  <span class="pl-c1">header</span>(<span class="pl-s"><span class="pl-pds">'</span>Access-Control-Allow-Headers: Content-Length<span class="pl-pds">'</span></span>);</span>
<span class="pl-s1">  <span class="pl-c1">header</span>(<span class="pl-s"><span class="pl-pds">'</span>Access-Control-Expose-Headers: Content-Length<span class="pl-pds">'</span></span>);</span>
<span class="pl-s1">  <span class="pl-c1">header</span>(<span class="pl-s"><span class="pl-pds">'</span>Timing-Allow-Origin: *<span class="pl-pds">'</span></span>);</span>

<span class="pl-s1">  <span class="pl-c">/* anything.. really... */</span></span>
<span class="pl-s1">  <span class="pl-c1">header</span>(<span class="pl-s"><span class="pl-pds">'</span>Content-Type: text/json;<span class="pl-pds">'</span></span>);</span>
<span class="pl-s1">  <span class="pl-c1">header</span>(<span class="pl-s"><span class="pl-pds">'</span>X-Powered-By: peanut-butter<span class="pl-pds">'</span></span>);</span>

<span class="pl-s1">  <span class="pl-c">/* output */</span></span>
<span class="pl-s1">  <span class="pl-c1">echo</span> <span class="pl-s"><span class="pl-pds">'</span>{"hello":"world"}<span class="pl-pds">'</span></span>;</span>

<span class="pl-s1">  <span class="pl-c">/* implicit flush... */</span></span>
<span class="pl-pse"><span class="pl-s1">?</span>&gt;</span></pre>
</div>
<code>php.ini</code>
<div class="highlight highlight-source-ini">
<pre><span class="pl-c">;GOOGLE APP</span>
<span class="pl-c">;----------------------------------------------------------------------------------------------------------------------</span>
<span class="pl-c">; enable "soft-disabled functions"                                                              https://cloud.google.com/appengine/docs/php/runtime#PHP_Disabled_functions</span>
    <span class="pl-k">google_app_engine.enable_functions</span>    = <span class="pl-s"><span class="pl-pds">"</span>gc_collect_cycles, gc_disable, gc_enable, gc_enabled, get_current_user, getmygid, getmyinode, getmypid, getmyuid, getrusage, libxml_disable_entity_loader, parse_str, php_sapi_name, php_uname, phpinfo, phpversion<span class="pl-pds">"</span></span>

<span class="pl-c">; no sockets, no "curl_multi_*" functions, only standard protocols, only ports 80 and 443.      https://cloud.google.com/appengine/docs/php/runtime#PHP_cURL_support</span>
    <span class="pl-k">google_app_engine.enable_curl_lite</span>    = 1
<span class="pl-c">;----------------------------------------------------------------------------------------------------------------------</span>



<span class="pl-c">;PHP</span>
<span class="pl-c">;----------------------------------------------------------------------------------------------------------------------</span>
<span class="pl-c">; no curl, no MongoDB (due to use of sockets).                                                  https://cloud.google.com/appengine/docs/php/runtime#dynamically_loadable_extensions</span>
    <span class="pl-k">extension</span>                             = <span class="pl-s"><span class="pl-pds">"</span>imagick.so<span class="pl-pds">"</span></span>
    <span class="pl-k">extension</span>                             = <span class="pl-s"><span class="pl-pds">"</span>intl.so<span class="pl-pds">"</span></span>
    <span class="pl-k">extension</span>                             = <span class="pl-s"><span class="pl-pds">"</span>fileinfo.so<span class="pl-pds">"</span></span>

<span class="pl-c">; set defaults for PHP engine.                                                                  https://cloud.google.com/appengine/docs/php/runtime#PHP_Directives_with_new_initialization_defaults</span>
    <span class="pl-k">date.timezone</span>                         = <span class="pl-s"><span class="pl-pds">"</span>Asia/Jerusalem<span class="pl-pds">"</span></span>

<span class="pl-c">; set defaults for PHP engine - for debug.</span>
    <span class="pl-k">display_errors</span>                        = 1
    <span class="pl-k">display_startup_errors</span>                = 1
    <span class="pl-k">html_errors</span>                           = 1
    <span class="pl-k">allow_url_include</span>                     = 1
    <span class="pl-k">expose_php</span>                            = On


<span class="pl-c">; make sure headers could-be sent longer-in the PHP-script lifetime - normal behaviour.</span>
    <span class="pl-k">output_buffering</span>                      = On
    <span class="pl-k">implicit_flush</span>                        = 0</pre>
</div>
<em><sub>Hope it will save someone some time :]</sub></em>
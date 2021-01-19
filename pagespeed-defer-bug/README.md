<em>Sort of bypass 'till fix will be embedded in the module..</em>
<!--more-->
<a href="https://github.com/pagespeed/mod_pagespeed/issues/1367" target="_blank">https://github.com/pagespeed/mod_pagespeed/issues/1367</a>


<div class="comment-body markdown-body markdown-format js-comment-body">Found a bug on the way <code>SCRIPT</code> tags are rewritten on the page.

On this scenario using <em>ModPageSpeed</em> with <em>defer_javascript</em>, where the script has an inline-event handler attribute (for example <code>onload</code>, <code>onerror</code>, etc..) will cause the page to break,<br>
due to incorrect uses of <strong>inverted commas</strong>.

Here is just the faulty part <sup>(the full HTML will be added later)</sup>

<em>W/O ModPageSpeed</em>

<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#274796; '> async </span><span style='color:#074726; '>defer</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"application/javascript"</span><span style='color:#274796; '> </span><span style='color:#074726; '>src</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"https://www.google-analytics.com/analytics.js"</span><span style='color:#274796; '> </span><span style='color:#074726; '>onload</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>'(function(ga){if("undefined" === typeof ga)return;  ga("create","UA-27302073-1","eladkarako.com");  ga("require","linkid","linkid.js");  ga("require","displayfeatures");  ga("set","&amp;uid","579a7f7610f4e");  ga("send","pageview");  }(window.ga));'</span><span style='color:#274796; '> </span><span style='color:#a65700; '>&gt;</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>&gt;</span></pre>

<em>W/ ModPageSpeed</em>

<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#274796; '> async </span><span style='color:#074726; '>defer</span><span style='color:#274796; '> pagespeed_orig_type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"application/javascript"</span><span style='color:#274796; '> pagespeed_orig_src</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"https://www.google-analytics.com/analytics.js"</span><span style='color:#274796; '> </span><span style='color:#074726; '>onload</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>'this.setAttribute('</span><span style='color:#274796; '>pagespeed_onload</span><span style='color:#0000e6; '>','</span><span style='color:#274796; '>(function(ga){if(</span><span style='color:#0000e6; '>"undefined"</span><span style='color:#274796; '> </span><span style='color:#808030; '>=</span><span style='color:#808030; '>=</span><span style='color:#808030; '>=</span><span style='color:#274796; '> typeof ga)return;  ga(</span><span style='color:#0000e6; '>"create"</span><span style='color:#274796; '>,</span><span style='color:#0000e6; '>"UA-27302073-1"</span><span style='color:#274796; '>,</span><span style='color:#0000e6; '>"eladkarako.com"</span><span style='color:#274796; '>);  ga(</span><span style='color:#0000e6; '>"require"</span><span style='color:#274796; '>,</span><span style='color:#0000e6; '>"linkid"</span><span style='color:#274796; '>,</span><span style='color:#0000e6; '>"linkid.js"</span><span style='color:#274796; '>);  ga(</span><span style='color:#0000e6; '>"require"</span><span style='color:#274796; '>,</span><span style='color:#0000e6; '>"displayfeatures"</span><span style='color:#274796; '>);  ga(</span><span style='color:#0000e6; '>"set"</span><span style='color:#274796; '>,</span><span style='color:#0000e6; '>"&amp;uid"</span><span style='color:#274796; '>,</span><span style='color:#0000e6; '>"579a7f7610f4e"</span><span style='color:#274796; '>);  ga(</span><span style='color:#0000e6; '>"send"</span><span style='color:#274796; '>,</span><span style='color:#0000e6; '>"pageview"</span><span style='color:#274796; '>);  }(window</span><span style='color:#008c00; '>.</span><span style='color:#274796; '>ga));</span><span style='color:#0000e6; '>');'</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"text/psajs"</span><span style='color:#274796; '> orig_index</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"6"</span><span style='color:#a65700; '>&gt;</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>&gt;</span>
</pre>

<hr>

<strong>here is my <code>.htaccess</code> (I'm preety sure its the <code>defer_javascript</code> functionality).</strong>:

<pre><span style='color:#696969; '># BEGIN WordPress</span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>IfModule</span> <span style='color:#0000e6; '>mod_rewrite.c</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#800000; font-weight:bold; '>RewriteEngine</span> <span style='color:#074726; '>On</span>
<span style='color:#800000; font-weight:bold; '>RewriteBase</span> /
<span style='color:#800000; font-weight:bold; '>RewriteRule</span> ^index\\.php$ <span style='color:#808030; '>-</span> [L]
<span style='color:#800000; font-weight:bold; '>RewriteCond</span> %{REQUEST_URI}        !pagespeed
<span style='color:#800000; font-weight:bold; '>RewriteCond</span> %{REQUEST_FILENAME}   !<span style='color:#808030; '>-</span>f
<span style='color:#800000; font-weight:bold; '>RewriteCond</span> %{REQUEST_FILENAME}   !<span style='color:#808030; '>-</span>d
<span style='color:#800000; font-weight:bold; '>RewriteRule</span> . /index.php [L]
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>IfModule</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#696969; '># END WordPress</span>

 <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>IfModule</span> <span style='color:#0000e6; '>pagespeed_module</span><span style='color:#a65700; '>&gt;</span>
   ModPagespeed                <span style='color:#074726; '>on</span>
   ModPagespeedRunExperiment   <span style='color:#074726; '>on</span>
   
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#use PageSpeed to modify all of the pages/resources, but do not modify admin pages.</span>
   ModPagespeedAllow           <span style='color:#0000e6; '>"*"</span>
   ModPagespeedDisallow        <span style='color:#0000e6; '>"*/wp-admin/*"</span>
 
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;######################################################</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;# Prevent PageSpeed From Removing Or Modifying Those #</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;######################################################</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#keep googleoff/googleon comments used for googlebot-web-crawler (for example: &lt;!--googleoff: all-->&lt;!--googleon: all-->).</span>
   ModPagespeedRetainComment   <span style='color:#0000e6; '>"googleon*"</span>
   ModPagespeedRetainComment   <span style='color:#0000e6; '>"googleoff*"</span>
   
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#keep my custom comments.</span>
   ModPagespeedRetainComment <span style='color:#0000e6; '>" _*"</span>
 
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#don't add "Cache-Control: no-cache, max-age=0" headers.</span>
   ModPagespeedModifyCachingHeaders <span style='color:#074726; '>off</span>
 
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#############################################</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;# Allow PageSpeed To Remove Or Modify Those #</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#############################################</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#remove all (those whom were not retained..) HTML comments (will not modify JavaScript/CSS comments).</span>
   ModPagespeedEnableFilters remove_comments
 
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#remove whitespace (space, tab, some newlines) from between attributes and HTML tags. the most important filter.</span>
   ModPagespeedEnableFilters collapse_whitespace
 
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#modify links, from fully qualified to relative-links (will not modify META tags (canonical/og:url) but WILL change CSS/JS/IMG/etc..)</span>
   ModPagespeedEnableFilters trim_urls
 
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#modify every image to only load, when container is in ViewPort. will add &lt;noscript> tag with this content &lt;meta HTTP-EQUIV="refresh" content="0;url='https://icompile.eladkarako.com/?ModPagespeed=noscript'" /> in-case user does not have JavaScript-support, to load the page without lazy-loading and other script-related enhancements.</span>
   ModPagespeedEnableFilters lazyload_images
 
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#lower the letter-case of attributes in HTML tags, limiting variation of letters helps GZIP compression.</span>
   ModPagespeedLowercaseHtmlNames <span style='color:#074726; '>on</span>
 
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#Adds missing explicit width and height attributes to &lt;img> tags that lack them.</span>
   ModPagespeedEnableFilters insert_image_dimensions
 
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#trim whitespace in inline CSS and JavaScript blocks.</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#ModPagespeedEnableFilters rewrite_css</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#ModPagespeedEnableFilters rewrite_javascript</span>
 
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#enable longer period of browser-cache for some resources (image, css, js,...)</span>
   ModPagespeedEnableFilters extend_cache
 
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;#defer JavaScript execution until page load. It defers this by changing the type and src attributes of &lt;script> elements on the HTML page to data-pagespeed-orig-type and data-pagespeed-orig-src respectively. It also adds a new type attribute whose value is set to text/psajs. A window.onload handler is added to the HTML, which executes all the deferred scripts.</span>
   ModPagespeedEnableFilters defer_javascript
 
 <span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>IfModule</span><span style='color:#a65700; '>&gt;</span>
</pre>


here is the html before/after for your convenient:<br>
<a href="https://eladkarako.com/without.txt">https://eladkarako.com/without.txt</a><br>
<a href="https://eladkarako.com/with.txt">https://eladkarako.com/with.txt</a>

<hr/>

<strong>how it started?</strong>

while initially I didn't much care of the script being dynamic,
so this worked quite well ensuring the page will not through <code>'ga' is undefined</code> error,
if the user is blocking Google-Analytics (there is a server-side dynamic part of UUID the users by [safe] session cookie):

<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>body<span style='color:#808030; '>,</span> script<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  script<span style='color:#808030; '>.</span>setAttribute<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>src</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://www.google-analytics.com/analytics.js</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  script<span style='color:#808030; '>.</span>setAttribute<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>async</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  script<span style='color:#808030; '>.</span>setAttribute<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>defer</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  script<span style='color:#808030; '>.</span>onload <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>undefined</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> window<span style='color:#808030; '>.</span>ga<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>return</span><span style='color:#800080; '>;</span>
    window<span style='color:#808030; '>.</span>ga<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>create</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>UA-27302073-1</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>eladkarako.com</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    window<span style='color:#808030; '>.</span>ga<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>require</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>linkid</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>linkid.js</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    window<span style='color:#808030; '>.</span>ga<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>require</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>displayfeatures</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    window<span style='color:#808030; '>.</span>ga<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>set</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>&amp;uid</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#5f5035; background:#ffffe8; '>&lt;?php</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#800000; background:#ffffe8; font-weight:bold; '>print</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#797997; background:#ffffe8; '>$_SESSION</span><span style='color:#808030; background:#ffffe8; '>[</span><span style='color:#0000e6; background:#ffffe8; '>'unique_id'</span><span style='color:#808030; background:#ffffe8; '>]</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#5f5035; background:#ffffe8; '>?></span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    window<span style='color:#808030; '>.</span>ga<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>send</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>pageview</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
  body<span style='color:#808030; '>.</span>appendChild<span style='color:#808030; '>(</span>script<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>(</span>
 document<span style='color:#808030; '>.</span>querySelector<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>body</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span>
<span style='color:#808030; '>,</span>document<span style='color:#808030; '>.</span>createElement<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>script</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span>
<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>&gt;</span>
</pre>

moving the entire thing into an (although older) inline-event handler seems a no-brainer,
but, due to the bug (above) the entire handler seems to break the page's HTML, by not using the correct
escaping of inverted commas at the right place..

so I've got back to PHP using a little <code>BASE64</code> trick, to limit the <em>on-page intervention</em> of Google PageSpeed with the actual content/logic of the script...

<pre><span style='color:#696969; '>&lt;!-- safe google analytics --></span>
<span style='color:#5f5035; background:#ffffe8; '>&lt;?php</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#797997; background:#ffffe8; '>$src</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#808030; background:#ffffe8; '>=</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#800000; background:#ffffe8; '>&lt;&lt;&lt;</span><span style='color:#e34adc; background:#ffffe8; '>SRC</span><span style='color:#0000e6; background:#ffffe8; '></span>
<span style='color:#0000e6; background:#ffffe8; '>(function(body, script){</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;&#xa0;script.setAttribute("src", "https://www.google-analytics.com/analytics.js");</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;&#xa0;script.setAttribute("async", "");</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;&#xa0;script.setAttribute("defer", "");</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;&#xa0;script.onload = function(){</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;&#xa0;&#xa0;&#xa0;if("undefined" === typeof window.ga) return;</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;&#xa0;&#xa0;&#xa0;window.ga("create", "UA-27302073-1", "eladkarako.com");</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;&#xa0;&#xa0;&#xa0;window.ga("require", "linkid", "linkid.js");</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;&#xa0;&#xa0;&#xa0;window.ga("require", "displayfeatures");</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;&#xa0;&#xa0;&#xa0;window.ga("set", "&amp;uid", "###REPLACE_WITH_SESSION_ID###");</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;&#xa0;&#xa0;&#xa0;window.ga("send", "pageview");</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;&#xa0;};</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;&#xa0;body.appendChild(script);</span>
<span style='color:#0000e6; background:#ffffe8; '>}(</span>
<span style='color:#0000e6; background:#ffffe8; '>&#xa0;document.querySelector("body")</span>
<span style='color:#0000e6; background:#ffffe8; '>,document.createElement("script")</span>
<span style='color:#0000e6; background:#ffffe8; '>));</span>
<span style='color:#e34adc; background:#ffffe8; '>SRC</span><span style='color:#0000e6; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#797997; background:#ffffe8; '>$src</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#808030; background:#ffffe8; '>=</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#400000; background:#ffffe8; '>str_replace</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#0000e6; background:#ffffe8; '>'</span><span style='color:#800000; background:#ffffe8; '>#</span><span style='color:#0000e6; background:#ffffe8; '>##REPLACE_WITH_SESSION_ID##</span><span style='color:#800000; background:#ffffe8; '>#</span><span style='color:#0000e6; background:#ffffe8; '>'</span><span style='color:#808030; background:#ffffe8; '>,</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#797997; background:#ffffe8; '>$_SESSION</span><span style='color:#808030; background:#ffffe8; '>[</span><span style='color:#0000e6; background:#ffffe8; '>'unique_id'</span><span style='color:#808030; background:#ffffe8; '>]</span><span style='color:#808030; background:#ffffe8; '>,</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#797997; background:#ffffe8; '>$src</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#797997; background:#ffffe8; '>$src</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#808030; background:#ffffe8; '>=</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#400000; background:#ffffe8; '>base64_encode</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#797997; background:#ffffe8; '>$src</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#5f5035; background:#ffffe8; '>?></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#274796; '> async </span><span style='color:#074726; '>defer</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"application/javascript"</span><span style='color:#274796; '> </span><span style='color:#074726; '>src</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"data:application/javascript;charset=UTF-8;base64,</span><span style='color:#5f5035; background:#ffffe8; '>&lt;?php</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#800000; background:#ffffe8; font-weight:bold; '>print</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#797997; background:#ffffe8; '>$src</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#5f5035; background:#ffffe8; '>?></span><span style='color:#0000e6; '>"</span><span style='color:#a65700; '>&gt;</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#5f5035; background:#ffffe8; '>&lt;?php</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#800000; background:#ffffe8; font-weight:bold; '>unset</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#797997; background:#ffffe8; '>$src</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#696969; background:#ffffe8; '>/* cleanup */</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#5f5035; background:#ffffe8; '>?></span>
</pre>

nifty little thing... ;)



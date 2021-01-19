<blockquote><strong>
This little trick speeds up browsing for repeating-customers/readers of any website!
(Also improve background data-transfer and streaming!! and makes your browser faster!)
</strong></blockquote>

You're probably familiar with <code>Cache-Control</code> header, setting max-age (seconds) for each response-resources (image, pages, scripts),

<img src="https://icompile.eladkarako.com/_uploads/2016/12/icompile.eladkarako.com_http_request.png" alt="" width="349" height="253"/> 
Usually similar to <code>Expires</code> header which specify a target date instead of a delta (but the same).

by default, when a resource expires, it does so while the user is requesting the page (again),
the resource is fetched (fresh) but makes the user wait while the page is downloaded at that point in-time,
all to prevent stale resource.
<img src="https://icompile.eladkarako.com/_uploads/2016/12/icompile.eladkarako.com_http_cache_control.png" alt="" width="474" height="215"/>
The <code>stale-while-revalidate</code> addition to the <code>Cache-Control</code> header allows the current view to STILL be the old/stale one, but at the same time trigger the background fetching the newer resources,
so the user may get the latest one next time.

<img src="https://icompile.eladkarako.com/_uploads/2016/12/icompile.eladkarako.com_http_cache_control_highlight.png" alt="" width="356" height="259" />

<!--more-->
<hr/>

You don't have to use <code>Cache-Control</code> with the <code>max-age</code> if you don't like to,
you can just use the flags <code>stale-while-revalidate</code> and <code>stale-if-error</code>,
by specifying (on Apache) <code>Header append "Cache-Control" "stale-while-revalidate=86400"</code> and <code>Header append "Cache-Control" "stale-if-error=259200"</code>,
which would not remove the old (if any) header.

I now serve every-resource using the additional flags, which <em>helps to make the internet fast for everyone :)</em>

Here is a part (snippet) of the <code>.htaccess</code> I'm using with all of <a href="https://eladkarako.com" target="_blank">eladkarako.com</a> resources (as of now..)

<pre><span style='color:#696969; '>###  #####################</span>
<span style='color:#696969; '>###  ##  E X P I R E S  ##</span>
<span style='color:#696969; '>###  #####################</span>
<span style='color:#696969; '>###      # ----------------------------------------------------------------------</span>
<span style='color:#696969; '>###      # Expires headers (for better cache control)</span>
<span style='color:#696969; '>###      # ----------------------------------------------------------------------</span>
<span style='color:#696969; '>###  </span>
<span style='color:#696969; '>###      # These are pretty far-future expires headers.</span>
<span style='color:#696969; '>###      # They assume you control versioning with cachebusting query params like</span>
<span style='color:#696969; '>###      #   &lt;script src="application.js?20100608"&gt;</span>
<span style='color:#696969; '>###      # Additionally, consider that outdated proxies may miscache </span>
<span style='color:#696969; '>###      #   www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/</span>
<span style='color:#696969; '>###  </span>
<span style='color:#696969; '>###      # If you don't use filenames to version, lower the CSS  and JS to something like</span>
<span style='color:#696969; '>###      #   "access plus 1 week" or so.</span>
<span style='color:#696969; '>###  </span>
      <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>IfModule</span> <span style='color:#0000e6; '>mod_expires.c</span><span style='color:#a65700; '>&gt;</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresActive</span> <span style='color:#074726; '>on</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#Perhaps better to whitelist expires rules? Perhaps.</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresDefault</span>                               <span style='color:#0000e6; '>"access plus 1 month"</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#cache.appcache needs re-requests in FF 3.6 (thanks Remy ~Introducing HTML5)</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"text/cache-manifest"</span>            <span style='color:#0000e6; '>"access plus 0 seconds"</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#Your document html </span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"text/html"</span>                      <span style='color:#0000e6; '>"access plus 2 minutes"</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#Data</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"text/xml"</span>                       <span style='color:#0000e6; '>"access plus 2 minutes"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"application/xml"</span>                <span style='color:#0000e6; '>"access plus 2 minutes"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"application/json"</span>               <span style='color:#0000e6; '>"access plus 2 minutes"</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#Feed</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"application/rss+xml"</span>            <span style='color:#0000e6; '>"access plus 2 minutes"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"application/atom+xml"</span>           <span style='color:#0000e6; '>"access plus 2 minutes"</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#vCard</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"text/x-vcard"</span>                   <span style='color:#0000e6; '>"access plus 2 minutes"</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#Favicon (cannot be renamed)</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"image/x-icon"</span>                   <span style='color:#0000e6; '>"access plus 1 year"</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#Media: images, video, audio</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"image/webp"</span>                     <span style='color:#0000e6; '>"access plus 2 months"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"image/gif"</span>                      <span style='color:#0000e6; '>"access plus 2 months"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"image/png"</span>                      <span style='color:#0000e6; '>"access plus 2 months"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"image/jpg"</span>                      <span style='color:#0000e6; '>"access plus 2 months"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"image/jpeg"</span>                     <span style='color:#0000e6; '>"access plus 2 months"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"video/ogg"</span>                      <span style='color:#0000e6; '>"access plus 2 months"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"audio/ogg"</span>                      <span style='color:#0000e6; '>"access plus 2 months"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"video/mp4"</span>                      <span style='color:#0000e6; '>"access plus 2 months"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"video/webm"</span>                     <span style='color:#0000e6; '>"access plus 2 months"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"audio/mp4"</span>                      <span style='color:#0000e6; '>"access plus 2 months"</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#HTC files  (css3pie)</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"text/x-component"</span>               <span style='color:#0000e6; '>"access plus 2 months"</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#binary (exe and other)</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"application/octet-stream"</span>       <span style='color:#0000e6; '>"access plus 1 year"</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#chrome extension</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"application/x-chrome-extension"</span> <span style='color:#0000e6; '>"access plus 1 year"</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#firefox plugin</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"application/x-xpinstall"</span>        <span style='color:#0000e6; '>"access plus 1 year"</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#Webfonts</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"application/x-font-ttf"</span>         <span style='color:#0000e6; '>"access plus 1 year"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"font/truetype"</span>                  <span style='color:#0000e6; '>"access plus 1 year"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"font/opentype"</span>                  <span style='color:#0000e6; '>"access plus 1 year"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"application/x-font-woff"</span>        <span style='color:#0000e6; '>"access plus 1 year"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"application/font-woff"</span>          <span style='color:#0000e6; '>"access plus 1 year"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"image/svg+xml"</span>                  <span style='color:#0000e6; '>"access plus 1 year"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"application/vnd.ms-fontobject"</span>  <span style='color:#0000e6; '>"access plus 1 year"</span>

<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;#CSS and JavaScript</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"text/css"</span>                       <span style='color:#0000e6; '>"access plus 1 year"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"text/javascript"</span>                <span style='color:#0000e6; '>"access plus 1 year"</span>
        <span style='color:#800000; font-weight:bold; '>ExpiresByType</span> <span style='color:#0000e6; '>"application/javascript"</span>         <span style='color:#0000e6; '>"access plus 1 year"</span>

<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;# ----------------------------------------------------------------------</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;# ETag removal</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;# ----------------------------------------------------------------------</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;# Since we're sending far-future expires, we don't need ETags for static content. developer.yahoo.com/performance/rules.html#etags</span>
        FileETag <span style='color:#074726; '>None</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;# FileETag None is not enough for every server.</span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>IfModule</span> <span style='color:#0000e6; '>mod_headers.c</span><span style='color:#a65700; '>&gt;</span>
          <span style='color:#800000; font-weight:bold; '>Header</span> <span style='color:#074726; '>unset</span> ETag
        <span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>IfModule</span><span style='color:#a65700; '>&gt;</span>
    
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;# ----------------------------------------------------------------------</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;# Cache-Control (with only stale flags, no need for max-age.. for now..)</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;# ----------------------------------------------------------------------</span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>IfModule</span> <span style='color:#0000e6; '>mod_headers.c</span><span style='color:#a65700; '>&gt;</span>
          <span style='color:#800000; font-weight:bold; '>Header</span> <span style='color:#074726; '>append</span> Cache<span style='color:#808030; '>-</span>Control <span style='color:#0000e6; '>"stale-while-revalidate=86400,stale-if-error=259200"</span>
        <span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>IfModule</span><span style='color:#a65700; '>&gt;</span>
      <span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>IfModule</span><span style='color:#a65700; '>&gt;</span>
</pre>

p.s. you can use one <code>append</code> command (with comma as separator) or two <code>append</code> commands.
- I use one, since I can control the space added after the comma (I prefer the HTTP-header's values to do not include whitespace-characters, as much as possible...:\\)

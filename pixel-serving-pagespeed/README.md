

This is all about PIXEL-IMAGES,

<blockquote>
While pixel-images themselves are all about an out-going request,
with little to none caring of the actual response -

- Due to <strong>compatibility issues</strong>, <strong>browser pre-rendering enhancements</strong>,
<strong>mimetype-sniffing</strong>, <strong>client-side caching</strong>, <strong>cross-domain limitations</strong>,
and content/visibility base loading such as <strong>lazy-loading and content-deferring</strong> -

- In most cases we <strong>actually</strong> need to, also, (ridiculously) ensure that the pixel-image has rendered perfectly.
</blockquote>

<!--more-->

<blockquote>
<sub>Note:
Pixel-image is an archaic way of notifying the server-side of *stuff*.
If possible, try avoid the pixel-image in favour of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon" target="_blank">navigator.sendBeacon</a>, which is superior in every-way (for supported browsers). If you must- then at-least have the pixel-image as fallback to the sendBeacon method</sub>
</blockquote>

<hr/>

<h3 style="text-decoration:underline;"><em>PageSpeed </em>"no defer" attribute is a FLAG!</h3>.

Including <code>data-pagespeed-no-defer</code> or <code>pagespeed_no_defer</code> (for older versions of <em>ModPageSpeed</em>)
will exclude the image from the <em>PageSpeed</em> resource-defer engine,

It has no use in the HTML itself, and is only a "flag" used for the <em>PageSpeed-extension</em> running at server-side,
the attribute it will be removed from the HTML onced the source has finished processed, so if you want to make sure you've placed the attribute, load your page using <code>..../my_page.php?ModPagespeed=off</code> attribute (and view the page's source).

Some web-hosting plans such as GoDaddy's economy-plan, includes an old-version of <em>ModPageSpeed</em>,
which does not recognise the <code>data-pagespeed-no-defer</code> attribute,

since <code>pagespeed_no_defer</code> won't be removed from the <em>ModPageSpeed</em> source <em>anytime soon</em>,
you'll be better use that instead  -- it will be removed from HTML source anyway..

HTML5, XHTML Compatibility, and client side rendering best-practices for image-pixel:

<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>span</span><span style='color:#274796; '> </span><span style='color:#074726; '>style</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#bb7977; font-weight:bold; '>visibility</span><span style='color:#808030; '>:</span><span style='color:#074726; '>hidden</span><span style='color:#800080; '>;</span><span style='color:#274796; '> </span><span style='color:#bb7977; font-weight:bold; '>z-index</span><span style='color:#808030; '>:</span><span style='color:#808030; '>-</span><span style='color:#008c00; '>9999</span><span style='color:#800080; '>;</span><span style='color:#0000e6; '>"</span><span style='color:#a65700; '>&gt;</span><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>img</span><span style='color:#274796; '> </span><span style='color:#074726; '>data</span><span style='color:#274796; '>-pagespeed-no-</span><span style='color:#074726; '>defer</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"true"</span><span style='color:#274796; '> pagespeed_no_defer</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"true"</span><span style='color:#274796; '> </span><span style='color:#074726; '>width</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"1"</span><span style='color:#274796; '> </span><span style='color:#074726; '>height</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"1"</span><span style='color:#274796; '> </span><span style='color:#074726; '>border</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"0"</span><span style='color:#274796; '> </span><span style='color:#074726; '>alt</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>""</span><span style='color:#274796; '> </span><span style='color:#074726; '>rel</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"nofollow,noindex"</span><span style='color:#274796; '> </span><span style='color:#074726; '>src</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"___PIXEL_URL___"</span><span style='color:#a65700; '>/></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>span</span><span style='color:#a65700; '>&gt;</span>
</pre>

<hr/>

<h3 style="text-decoration:underline;">And How About Some Pixel-Serving Checklist...</h3>

<ol>
  <li>Minimal (BUT True!) image-content:
    <ul>
      <li>
        BASE64 decode this little thing <code>R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==</code>
        and serve it as is.
      </li>
      <li>
        use correct response-mimetype: <code>image/gif</code>
      </li>
    </ul>
  </li>
  <li>Don't use <code>/assets/</code> folder for your pixel-image
    IIS, NodeJS, Jetty and other servers might provide you a bootstrap folder structure with a <code>/static/</code>, <code>/resources/</code> or <code>/assets/</code> folder,
    Placing your image under there might requires you of resolving all sort an caching issues:
    <ul>
      <li>
        make sure to send the image with <code>HTTP Status 200</code> and not <code>HTTP Status 304</code>
      </li>
      <li>
        remove <code>ETAG</code>
      </li>
    </ul>
  </li>
  <li>Don't use a real GIF file
      Reading an image file from disk is pricey!
      decode the BASE64 above, And keep it in a variable,

      If possible, place the content (either binary or BASE64-encoded) at a persistence state,
      for the server-lifetime.
      
      RAM APIs that might also work for you: <code>APC</code>, <code>APCu</code>, <code>MemCache</code>, <code>Memcached</code> or <code>Redis</code>
  </li>
  <li>No cache headers:
    <ul>
      <li>
        <code>Expires: Sat, 26 Jul 1997 05:00:00 GMT</code>
      </li>
      <li>
        <code>Cache-Control: no-store,no-cache,must-revalidate,pre-check=0,post-check=0</code>
      </li>
      <li>
        <code>Pragma: no-cache</code>
      </li>
    </ul>
  </li>
  <li>A browser-friendly binary content, explicitly:
    <ul>
      <li>Include multi-part header for faster handling
        <code>Accept-Ranges: bytes</code>
      </li>
      <li>prevent mimetype sniffing (first few bytes of the file) and just download the file.
        <code>X-Content-Type-Options: nosniff</code>
      </li>
      <li>Include multi-part header for faster handling
        <code>Content-Transfer-Encoding: binary</code>
      </li>
      <li>Include multi-part header for faster handling
        <code>Content-Disposition: inline;filename="pixel.gif"</code>
      </li>
    </ul>
  </li>
  <li>CORS And Tainting Issues
    If you'll serve a pixel-image to a different (sub-)domain,
    Explicit enable the (sub-)domains using the CORS headers.
    Since pixel-image are all about the initial-request, you might even use the <code>*</code> syntax:
    <code>Access-Control-Allow-Origin: *</code>, <code>Access-Control-Allow-Credentials: true</code> and <code>Timing-Allow-Origin: *</code>.

    *It will also ensure you serve a resource that will not cause canvas-tainting.
    *Read more at https://developer.mozilla.org/en-US/docs/Web/HTML/CORS .
  </li>
</ol>

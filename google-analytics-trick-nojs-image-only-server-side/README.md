utm.gif Request Parameters Explained

By Jim Gianoglio / October 4, 2011 Google Analytics
Have you ever wondered how exactly does information about visits to your website get sent back to Google Analytics? Let me introduce you to <code>__utm.gif</code>.

GIF Request 

You see, whenever a page of your site loads (as long as you have GA tracking code on the page) a request is made for a small file — the <code>__utm.gif</code>. But don't be fooled by the size of this file (weighing in at only 35 bytes); it packs a lot of information in the request URI of that little pixel. Here's an example:


<pre>
http://www.google-analytics.com/__utm.gif?utmwv=5.1.7&utms=1&utmn=1894752493&utmhn=www.lunametrics.com&utmcs=UTF-8&utmsr=1280x1024&utmsc=24-bit&utmul=en-us&utmje=1&utmfl=10.3%20r183&utmdt=Tracking%20QR%20Codes%20with%20Google %20Analytics&utmhid=1681965357&utmr=http%3A%2F%2Fwww.google.com%2Fsearch %3Fq%3Dtracking%2Bqr%2Bcodes%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dorg.mozilla%3Aen-US%3Aofficial%26client%3Dfirefox-a&utmp=%2Fblog%2F2011%2F08%2F18%2Ftracking-qr-codes-google-anaytics%2F&utmac=UA-296882-1&utmcc=__utma%3D230887938.1463229748.1317737798.1317737798.1317737798.1 %3B%2B__utmz%3D230887938.1317737798.1.1.utmcsr%3Dgoogle%7Cutmccn%3D(organic) %7Cutmcmd%3Dorganic%7Cutmctr%3Dtracking%2520qr%2520codes%3B&utmu=DC~
</pre>

Holy parameters, Batman! Let's break that down now to see what information is being sent back.
<ol>
<li>
<code>utmwv=5.1.7</code> – Tracking code version
</li>
<li>
<code>utms=1</code> – Session number. Number of sessions/visits from this particular browser Session requests. Updates every time a <code>__utm.gif</code> request is made. 
Stops incrementing at 500 (max number of GIF requests per session).
</li>
<li>
<code>utmn=1894752493</code> – Unique ID generated for each GIF request to prevent caching of the GIF image
</li>
<li>
<code>utmhn=www.lunametrics.com</code> – Host name, which is a URL-encoded string
</li>
<li>
<code>utmcs=UTF-8</code> – Language encoding for the browser. Some browsers don't set this, in which case it is set to "-"
</li>
<li>
<code>utmsr=1280×1024</code> – Screen resolution
</li>
<li>
<code>utmsc=24-bit</code> – Screen color depth
</li>
<li>
<code>utmul=en-us</code> – Browser language
</li>
<li>
<code>utmje=1</code> – Indicates if browser is Java enabled. 1 is true.
</li>
<li>
<code>utmfl=10.3 r183</code> – Flash version
</li>
<li>
<code>utmdt=Tracking QR Codes with Google Analytics</code> – Page title, which is a URL-encoded string
</li>
<li>
<code>utmhid=1681965357</code> – A random number used to link the GA GIF request with AdSense
</li>
<li>
<code>utmr=http://www.google.com/search?q=tracking+qr+codes&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a</code> – Referral, complete URL
</li>
<li>
<code>utmp=/blog/2011/08/18/tracking-qr-codes-google-anaytics/</code> – Page request of the current page
</li>
<li>
<code>utmac=UA-296882-1</code> – Account string, appears on all requests
</li>
<li>
<code>utmcc=</code>
    <code>__utma=230887938.1463229748.1317737798.1317737798.1317737798.1;</code>
    <code>+__utmz=230887938.1317737798.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=tracking%20qr%20codes;</code> – Cookie values. This request parameter sends all the cookies requested from the page.
</li>
<li>
<code>utmu=DC~</code> – This is a new parameter that contains some internal state that helps improve ga.js.
</li>

Notice the next to last parameter – <code>utmcc</code>. If you look through that you'll see all of your cookie information, like visitor ID, how many times they've been to your site, how they got to your site, what keyword (if any) they used, etc.

Although that GIF request URI is long, it doesn't use all the parameters available. Here's an (almost) full list of the GIF request parameters from Google code. And here are additional eCommerce-specific parameters (scroll down to the bottom) that are nicely summarized.

 

Update:

Thanks to Michael Freeman in his comment below for pointing out a new parameter – <code>utmvp</code> – which indicates the size of the viewing pane. As opposed to <code>utmsr</code> (screen resolution), <code>utmvp</code> is is the actual size of the window pane. For visitors with plugins and toolbars that take up screen space in their browser, you'll see that utmvp is less than utmsr.

Now it's your turn

There are a number of free tools that allow you to quickly and easily see what information is being sent in that GIF request (or if it's even being requested at all). Watch this quick video demonstrating the use of two tools – Firebug and HttpFox (both for Firefox). If you're a Chrome browser, you may want to try the Google Analytics Tracking Code Debugger. Here's a list of even more debugging tools.

 
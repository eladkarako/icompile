If you've fiddle with networking testing and you've done something wrong,
you'll happen to need the URL of the last error page, accessed through JavaScript,
It is shown to be immensely difficult,

There are, naturally, several reasons.

<!--more-->

- Google Chrome uses an internal-page, replacing the what should have been your page,
showing a, more friendly, error message.

For the following example I've blocked <code>communities.vmware.com</code> through my HOSTS file, just for fun,
Followed by accessing <code>chrome://net-internals/#dns</code> and clearing up the DNS-cache, I've then hard-refreshed the page to render the following DNS-error page:

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_chrome_dns_page_error_location.png" alt="icompile.eladkarako.com_chrome_dns_page_error_location" width="1006" height="534"/>

Say you are currently working on designing a new version of core to Google's DNS-algorithm, but you STILL want to view the page. How would you extract the URL? for example extracting the URL and doing a little <code>top.location.replace("my-php-proxy.com?url=...page's-url..")</code>, and using my (for example) php-proxy (which you can download for free from: <a href="https://github.com/eladkarako/php-proxy-app" target="_blank">https://github.com/eladkarako/php-proxy-app</a>)

Imagine that awesome JavaScript-bookmark... :)

Yet...
Surprisingly - <code>top.location.href</code>, the "what you've thought was the solution", will show you something weird... :)

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_chrome_dns_page_error_location_fake_top_location.png" alt="icompile.eladkarako.com_chrome_dns_page_error_location_fake_top_location" width="709" height="424"/>

You are in-fact, in the most protected domains under chrome, and internal web-site named <code>data:text/html,chromewebdata</code>, which will show you that, friendly error.

The page's content will generated dynamically, its DOM is injected with pre-existing data (similar to server-side populating the raw data into an HTML page).

<blockquote>* those pages are NOT accessible by chrome-extensions (unless you'll give it specific permissions through some internal flags.. but don't do it.. hazards extensions might get access to your raw data through malicious script-injections..)</blockquote>

Anyway... a bookmarklet should be sufficient,
getting the data through some data in the DOM.

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_chrome_dns_page_error_location_fake_top_location_dom_can_help.png" alt="icompile.eladkarako.com_chrome_dns_page_error_location_fake_top_location_dom_can_help" width="1013" height="624" />

Solution: ;)

<pre>
javascript:(function(window,url){
  window.location.replace(
   "http://username:password@proxy.example.com/index.php?url=" + encodeURIComponent(url)
  );
}(
  top
, "" === top.location.hostname && -1 !== top.location.pathname.indexOf("chromewebdata") ? top.loadTimeData.data_.summary.failedUrl : top.location.href
));
</pre>

bookmark-like:
<pre>
javascript:(function(window,url){window.location.replace("http://username:password@proxy.example.com/index.php?url="+encodeURIComponent(url));}(top,""===top.location.hostname&&-1!==top.location.pathname.indexOf("chromewebdata")?top.loadTimeData.data_.summary.failedUrl:top.location.href));
</pre>

naturally implement your proxy somewhere, and some sort of AUTH protection might be helpful as well,
set everything right, and you'll got yourself a nice little developer-toolkit to help you while you'll be working on network-engineering.

Happy codding :]

<hr/>

another variation (for a bookmarklet)

<pre>
(function(window, document, location, PROXY_BASE_URL, tmp){
  tmp = -1 === location.href.toLowerCase().indexOf("chromewebdata") 
                            ? location.href
                            : loadTimeData.data_.summary.failedUrl
                                      .replace("\\u0202a","").replace("\\u202b","").replace("\\u202c","")   /* remove Unicode be-directional hints (l-t-r, r-t-l and end hint). */
                            ;
  tmp = encodeURIComponent(tmp);
  tmp = tmp.replace("%E2%80%AA","");
  tmp = PROXY_BASE_URL + tmp;
  location.assign(tmp);
}(
  top
, top.document
, top.location
, "https://username:password@proxy.domain.com?url="
));

javascript:(function(window,document,location,PROXY_BASE_URL,tmp){tmp=-1===location.href.toLowerCase().indexOf("chromewebdata")?location.href:loadTimeData.data_.summary.failedUrl.replace("\\u0202a","").replace("\\u202b","").replace("\\u202c","");tmp=encodeURIComponent(tmp);tmp=tmp.replace("%E2%80%AA","");tmp=PROXY_BASE_URL+tmp;location.assign(tmp)})(top,top.document,top.location,"https://username:password@proxy.domain.com?url=");
</pre>
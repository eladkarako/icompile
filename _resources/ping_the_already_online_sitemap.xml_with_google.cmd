@echo off

::sitemap uses the https://www.w3.org/TR/NOTE-datetime format for dates (for example <lastmod>.....</lastmod>)

::http://www.google.com/webmasters/sitemaps/ping?sitemap=[your sitemap web address]
::http://www.bing.com/webmaster/ping.aspx?siteMap=[your sitemap web address]
::http://www.google.com/ping?sitemap=<full_URL_of_sitemap>


set "URL_SITEMAP=https://icompile.eladkarako.com/sitemap.xml"
set "URL_SITEMAP_ENCODED=https%3A%%%2F%%%2Ficompile.eladkarako.com%%%2Fsitemap.xml"
set "URL_SERVICE=http://www.google.com/ping?sitemap="

call "curl.exe" --ipv4 --anyauth --insecure --location-trusted --user-agent "Mozilla/5.0 Chrome" --referer "%URL_SITEMAP%;auto" --output "-" --verbose --url "%URL_SERVICE%%URL_SITEMAP%"

::pushd "D:\DOS\Aria2"
::call "D:\DOS\Aria2\aria2c.cmd" "%URL_SERVICE%%URL_SITEMAP%"
::popd

echo [INFO] Exit-Code: [%ErrorLevel%]

pause

exit /b 0

::--------------------------------------------------
:: Google no longer crawl the sitemap.xml file (even if submitted to the new console),  
:: and requires a ""ping"" request to crawl it again (for example after adding new entry).
:: this noticement will inform users when they uses the new console to submit url for a sitemap.xml file for their website.
:: and older documentation shows some more information about it too:  
:: English:  https://support.google.com/webmasters/answer/183668?hl=en#addsitemap
:: Hebrew:   https://support.google.com/webmasters/answer/183668?hl=iw#addsitemap
::--------------------------------------------------
:: http://www.google.com/ping?sitemap=https%3A%2F%2Ficompile.eladkarako.com%2Fsitemap.xml
:: is
:: http://www.google.com/ping?sitemap=https%%3A%%2F%%2Ficompile.eladkarako.com%%2Fsitemap.xml
:: for the sake of 'escape' for using in a batch-file.
::--------------------------------------------------
:: your URL to the sitemap needs to be encoded (not escaped),  
:: by 'encodeURIComponent' function. try opening a browser's developer-console and run:
:: encodeURIComponent('https://icompile.eladkarako.com/sitemap.xml');    [ENTER]
:: and you'll get:
:: "https%3A%2F%2Ficompile.eladkarako.com%2Fsitemap.xml"
:: add it to the end-of the following string to get the full URL:
:: http://www.google.com/ping?sitemap=
:: (the 'http://www.google.com/ping?sitemap=' does not need to be encoded in any way).
::--------------------------------------------------
:: the curl command above uses '--output -' which explicitly tells curl to use the STDOUT stream (put it on screen), this is the default way curl normally does unless you specify --output file, but this way it won't be overrided on different operation systems.
:: --anyauth --insecure --location-trusted are to skip certificate switching and verifying and 'go with it'.
:: along with -ipv4 for compatibility.
:: --verbose is a really just a great way to know what is happening.
:: --user-agent "Mozilla/5.0 Chrome" overrides the default curl useragent that sometimes gets blocked.
:: the optional --referer "%URL%;auto" makes the 'REFERER' (not referrer!) http header start with 'https://icompile.eladkarako.com/sitemap.xml', and carry the last url in a redirect chain, it helps to simulate an organic browsing.
::--------------------------------------------------



::alternative - PING RPC
::http://xmlrpc.com/
::https://www.websitewizard.tv/wordpress-ping-list/
::  http://rpc.pingomatic.com/
::  http://feedburner.google.com/fb/a/pingSubmit?bloglink=http://yourwebsite.com/
::  http://rpc.weblogs.com/pingSiteForm?name=YourWebsite&url=http://yourwebsite.com
::  
::  http://bing.com/webmaster/ping.aspx
::  http://ping.blo.gs/
::  http://blog.goo.ne.jp/XMLRPC
::  http://blog.with2.net/ping.php
::  http://blogping.unidatum.com/RPC2
::  http://blogpingr.de/ping/rpc2
::  https://ping.blogs.yandex.ru/RPC2
::  http://blogsearch.google.ae/ping/RPC2
::  http://blogsearch.google.at/ping/RPC2
::  http://blogsearch.google.be/ping/RPC2
::  http://blogsearch.google.bg/ping/RPC2
::  http://blogsearch.google.ca/ping/RPC2
::  http://blogsearch.google.ch/ping/RPC2
::  http://blogsearch.google.cl/ping/RPC2
::  http://blogsearch.google.co.cr/ping/RPC2
::  http://blogsearch.google.co.hu/ping/RPC2
::  http://blogsearch.google.co.id/ping/RPC2
::  http://blogsearch.google.co.il/ping/RPC2
::  http://blogsearch.google.co.in/ping/RPC2
::  http://blogsearch.google.co.it/ping/RPC2
::  http://blogsearch.google.co.jp/ping/RPC2
::  http://blogsearch.google.co.ma/ping/RPC2
::  http://blogsearch.google.co.nz/ping/RPC2
::  http://blogsearch.google.co.th/ping/RPC2
::  http://blogsearch.google.co.uk/ping/RPC2
::  http://blogsearch.google.co.ve/ping/RPC2
::  http://blogsearch.google.co.za/ping/RPC2
::  http://blogsearch.google.com.ar/ping/RPC2
::  http://blogsearch.google.com.au/ping/RPC2
::  http://blogsearch.google.com.br/ping/RPC2
::  http://blogsearch.google.com.co/ping/RPC2
::  http://blogsearch.google.com.do/ping/RPC2
::  http://blogsearch.google.com.mx/ping/RPC2
::  http://blogsearch.google.com.my/ping/RPC2
::  http://blogsearch.google.com.pe/ping/RPC2
::  http://blogsearch.google.com.sa/ping/RPC2
::  http://blogsearch.google.com.sg/ping/RPC2
::  http://blogsearch.google.com.tr/ping/RPC2
::  http://blogsearch.google.com.tw/ping/RPC2
::  http://blogsearch.google.com.ua/ping/RPC2
::  http://blogsearch.google.com.uy/ping/RPC2
::  http://blogsearch.google.com.vn/ping/RPC2
::  http://blogsearch.google.com/ping/RPC2
::  http://blogsearch.google.de/ping/RPC2
::  http://blogsearch.google.es/ping/RPC2
::  http://blogsearch.google.fi/ping/RPC2
::  http://blogsearch.google.fr/ping/RPC2
::  http://blogsearch.google.gr/ping/RPC2
::  http://blogsearch.google.hr/ping/RPC2
::  http://blogsearch.google.ie/ping/RPC2
::  http://blogsearch.google.in/ping/RPC2
::  http://blogsearch.google.it/ping/RPC2
::  http://blogsearch.google.jp/ping/RPC2
::  http://blogsearch.google.ki/ping/RPC2
::  http://blogsearch.google.kz/ping/RPC2
::  http://blogsearch.google.la/ping/RPC2
::  http://blogsearch.google.li/ping/RPC2
::  http://blogsearch.google.lk/ping/RPC2
::  http://blogsearch.google.lt/ping/RPC2
::  http://blogsearch.google.lu/ping/RPC2
::  http://blogsearch.google.md/ping/RPC2
::  http://blogsearch.google.mn/ping/RPC2
::  http://blogsearch.google.ms/ping/RPC2
::  http://blogsearch.google.mu/ping/RPC2
::  http://blogsearch.google.mv/ping/RPC2
::  http://blogsearch.google.mw/ping/RPC2
::  http://blogsearch.google.nl/ping/RPC2
::  http://blogsearch.google.no/ping/RPC2
::  http://blogsearch.google.nr/ping/RPC2
::  http://blogsearch.google.nu/ping/RPC2
::  http://blogsearch.google.pl/ping/RPC2
::  http://blogsearch.google.pn/ping/RPC2
::  http://blogsearch.google.pt/ping/RPC2
::  http://blogsearch.google.ro/ping/RPC2
::  http://blogsearch.google.ru/ping/RPC2
::  http://blogsearch.google.rw/ping/RPC2
::  http://blogsearch.google.sc/ping/RPC2
::  http://blogsearch.google.se/ping/RPC2
::  http://blogsearch.google.sh/ping/RPC2
::  http://blogsearch.google.si/ping/RPC2
::  http://blogsearch.google.sk/ping/RPC2
::  http://blogsearch.google.sm/ping/RPC2
::  http://blogsearch.google.sn/ping/RPC2
::  http://blogsearch.google.st/ping/RPC2
::  http://blogsearch.google.tk/ping/RPC2
::  http://blogsearch.google.tl/ping/RPC2
::  http://blogsearch.google.tm/ping/RPC2
::  http://blogsearch.google.to/ping/RPC2
::  http://blogsearch.google.tp/ping/RPC2
::  http://blogsearch.google.tt/ping/RPC2
::  http://blogsearch.google.tw/ping/RPC2
::  http://blogsearch.google.us/ping/RPC2
::  http://blogsearch.google.vg/ping/RPC2
::  http://blogsearch.google.vu/ping/RPC2
::  http://blogsearch.google.ws/ping/RPC2
::  http://news2paper.com/ping
::  http://ping.bloggers.jp/rpc
::  http://ping.fc2.com
::  http://ping.rss.drecom.jp
::  http://rpc.bloggerei.de/ping/
::  http://rpc.pingomatic.com
::  http://rpc.technorati.com/rpc/ping
::  http://rpc.twingly.com
::  http://services.newsgator.com/ngws/xmlrpcping.aspx
::  http://api.feedster.com/ping
::  http://api.moreover.com/RPC2
::  http://api.moreover.com/ping
::  http://www.blogdigger.com/RPC2
::  http://www.blogshares.com/rpc.php
::  http://www.blogsnow.com/ping
::  http://www.blogstreet.com/xrbin/xmlrpc.cgi
::  http://bulkfeeds.net/rpc
::  http://www.newsisfree.com/xmlrpctest.php
::  http://ping.feedburner.com
::  http://ping.syndic8.com/xmlrpc.php
::  http://ping.weblogalot.com/rpc.php
::  http://rpc.blogrolling.com/pinger/
::  http://rpc.weblogs.com/RPC2
::  http://www.feedsubmitter.com
::  http://blo.gs/ping.php
::  http://www.pingerati.net
::  http://www.pingmyblog.com
::  http://geourl.org/ping
::  http://ipings.com
::  http://www.weblogalot.com/ping
::  http://rpc.pingomatic.com/
::  http://rpc.blogbuzzmachine.com/RPC2
::  http://ping.fc2.com/
::  http://blogs.yandex.ru/
::  http://rpc.bloggerei.de/
::  http://ping.blogs.yandex.ru/RPC2
::  http://ping.rss.drecom.jp/
::  http://rpc.odiogo.com/ping/
::  http://mod-pubsub.org/kn_apps/blogchatt
::  http://ping.amagle.com/
::  http://ping.bloggers.jp/rpc/
::  http://ping.exblog.jp/xmlrpc
::  http://bblog.com/ping.php
::  http://bitacoras.net/ping
::  http://blogdb.jp/xmlrpc
::  http://blogmatcher.com/u.php
::  http://coreblog.org/ping/
::  http://www.lasermemory.com/lsrpc/
::  http://ping.rootblog.com/rpc.php
::  http://pingoat.com/goat/RPC2
::  http://topicexchange.com/RPC2
::  http://trackback.bakeinu.jp/bakeping.php
::  http://www.bitacoles.net/ping.php
::  http://www.blogoole.com/ping/
::  http://www.blogpeople.net/servlet/weblogUpdates
::  http://www.mod-pubsub.org/kn_apps/blogchatter/ping.php
::  http://www.newsisfree.com/RPCCloud
::  http://www.snipsnap.org/RPC2
::  http://www.weblogues.com/RPC/
::  http://xmlrpc.blogg.de
::  http://rpc.twingly.com
::  http://www.blogsnow.com/ping
::  http://www.blogstreet.com/xrbin/xmlrpc.cgi
::  http://bulkfeeds.net/rpc
::  http://www.newsisfree.com/xmlrpctest.php
::  http://ping.blo.gs/
::  http://ping.feedburner.com
::  http://rpc.blogrolling.com/pinger/
::  http://rpc.technorati.com/rpc/ping
::  http://rpc.weblogs.com/RPC2
::  http://www.feedsubmitter.com
::  http://blo.gs/ping.php
::  http://www.pingmyblog.com
<img src="https://icompile.eladkarako.com/_uploads/2014/12/dns.jpg" alt="dns" width="224" height="222" class="alignright size-full wp-image-2287" />
appspot is a sandbox/playground (whatevvvvveeeerrrr....) for apps...served by Google Frontend servers

breaking the logic without any whitepapers was quite easy...

I was proxy'ing my phone's addresses, through my PC's FIDDLER, this is a monthly routine,
since I need to keep up with all the junk push through publishers, through their new updated applications,
after I'm maintaining a list of all new PING, TRACKING, STATISTICS, ADVERTISEMENTS and plain old UNNEEDED JUNK,
I'm adding it to my sub-website <a href="hosts.eladkarako.com" title="hosts.eladkarako.com --- Ads Be Gone!" target="_blank">hosts.eladkarako.com</a>.

this time I've noticed something cool: using the host-name: <code style="display:inline;">gaednsproxy.appspot.com</code> with a simple mimetype of <code style="display:inline;">text/html</code> and short GET request: <code style="display:inline;">http://gaednsproxy.appspot.com/?d=WTJ4cFpXNTBjek11WjI5dloyeGxMbU52YlE9PQ%3D%3D</code>

request was made by some open source application named DroidFu:
<pre>
GET http://gaednsproxy.appspot.com/?d=WTJ4cFpXNTBjek11WjI5dloyeGxMbU52YlE9PQ%3D%3D HTTP/1.1
Host: gaednsproxy.appspot.com
User-Agent: Android/DroidFu
Connection: close
Connection: close
</pre>


response was just an ip..
<pre>

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Dec 2014 07:56:31 GMT
Server: Google Frontend
Cache-Control: private
Alternate-Protocol: 80:quic,p=0.02
Connection: close

74.125.28.101
</pre>

looks like an escaped-base64 argument, I've thought..
using my good old base64 enc/dec <a href="https://eladkarako.com/old/__work/demo/base64encodedecode.html" title="base64encodedecode --- quickly encode/decode strings/base64" target="_blank">here</a>

it was double enc/ in base64

so... 

<pre>
WTJ4cFpXNTBjek11WjI5dloyeGxMbU52YlE9PQ%3D%3D
(unescaped)->
WTJ4cFpXNTBjek11WjI5dloyeGxMbU52YlE9PQ==
(first base64 decode)->
Y2xpZW50czMuZ29vZ2xlLmNvbQ==
(second base64 decode)->
clients3.google.com
</pre>

<img src="https://icompile.eladkarako.com/_uploads/2014/12/ip.jpg" alt="ip" rem-width="500" rem-height="300" class="alignleft size-full wp-image-2288" />

so this one was just a simple reverse hostname (clients3.google.com) to IP (74.125.28.101)...
double base64 looks kind'a overkill, fishy?? don'know..

from my experience it just may be a plain Anti-Fraud (Anti Man-In-The-Middle, Proxy/DNS Poisoning, etc...), 
this way the IP is resolved through an external-server (a.k.a "safe place"), other then a risked machine (self Android device), 

simple but effective....
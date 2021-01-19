<ul>
	<li>Open free account on <a title="runscope.com" href="https://www.runscope.com">runscope.com</a>, found your "bucket ID" (found on the lower-left part of the page).</li>
	<li>Root, Install XPosed, and module named runscopeEverything, put in your "bucket ID", save, restart your device.</li>
	<li>Query your requests using runscope dashboard, click on "all requests".</li>
</ul>
<!--more-->


<ul>
	<li>Some cool stuff:
<ul>
<ul>
	<li>user-agent of the system: Dalvik/1.6.0 (Linux; U; Android 4.4.2; SM-N000 Build/KOT00H)</li>
	<li>finding ads and junk content domains like:
api.crittercism.com and ads.mp.mydas.mobi
and blocking them using  <a href="hosts.eladkarako.com">hosts.eladkarako.com</a></li>
	<li></li>

	<li>
looking at pressy server requests
first one:</li>
</ul>
</ul>
<pre>pressy-server.appspot.com		 204	 309 ms	          
POST /_ah/api/pressylicenseendpoint/v1/activatePressyLicenseByEmail?emails=foo@gmail.com
</pre>
<pre>HEADERS
Accept-Encoding: gzip
Connection: close
Content-Encoding: gzip
Content-Length: 25
Content-Type: application/x-www-form-urlencoded
Host: pressy-server.appspot.com
User-Agent: Google-HTTP-Java-Client/1.16.0-rc (gzip)
QUERYSTRING

emails: fooemail@gmail.com
PARAMETERS
BODY VIEW
%1F%%BF%BD%08%00%00%00%00%00%00%00%00%00%00%EF%BF%EF%BF%BD%03%00%00%00%00%00%00%00%00%00=
</pre>
and response
<pre>View Request View Response  Response Playback URL  Start Comparison
HEADERS

Alternate-Protocol: 443:quic
Date: Fri, 04 Jul 2014 19:29:35 GMT
Etag: "3b_5GvRFxuRAfObU_/wKHlcvx88FGhvl4R2nU"
Server: GSE
BODY view
(empty)
</pre>
</li>
</ul>

for the second one I've typed the activation code ABC:
<pre>pressy-server.appspot.com		 204	 250 ms	          
GET /_ah/api/pressylicenseendpoint/v1/pressylicense/ABC	  	 --	10s ago
View Request View Response  Response Playback URL  Start Comparison
HEADERS

Accept-Encoding: gzip
Connection: close
Host: pressy-server.appspot.com
User-Agent: Google-HTTP-Java-Client/1.16.0-rc (gzip)
</pre>
and got the response
<pre>HEADERS

Alternate-Protocol: 443:quic
Date: Fri, 04 Jul 2014 19:29:47 GMT
Etag: "3b_5GvRFxuRAfObU_IZMNfj78AY/wKHlcvx88q97KnU"
Server: GSE
BODY view
(empty)
</pre>', 'Using RunScope And XPosed On Rooted Android to Mitigate Requests From System Services, Block Ads
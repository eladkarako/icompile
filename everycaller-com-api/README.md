<img src="https://icompile.eladkarako.com/_uploads/2015/04/icompile.eladkarako.com_everycaller_api.png" alt="icompile.eladkarako.com_everycaller_api" width="300" height="192" class="alignright size-full wp-image-2921" />Checking a number for a spammer, using the community.
<!--more-->



query for <code>Israel: 077-111-1111</code> should be turns to <code>+972771111111</code>
<pre>
POST https://www.everycaller.com/api/android/35/iw_IL/lookup/ HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: Call Control/2.0 (40008); iw_IL; Android 4.4.2; Model SM-----; Build KOT49H; SIMs:1;
Accept: application/json
Host: www.everycaller.com
Connection: Keep-Alive
Accept-Encoding: gzip
Content-Length: 289

{"identification":{"timestamp":1428200000000,"id":"---------------","app_version":"2.0","build":40008,"vendor":"android_market","name":"samsungSM-----","imei":"--------"},"phone_number":[{"called":0,"country":"IL","phone_number":"+972771111111"}],"level":0}
</pre>

<pre>
HTTP/1.1 200 OK
Vary: Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 124
Accept-Ranges: bytes
Date: Sun, 05 Apr 2015 11:00:00 GMT
Age: 0
Connection: keep-alive
X-Cache: MISS

{"results":[{"phone_number":"+972771111111","caller_name":"","spam_level":0,"complaints":0,"blocking_stats":0}],"credits":0}
</pre>

<hr />

it also supports multiple phone-number queries:
<pre>
POST https://www.everycaller.com/api/android/35/iw_IL/lookup/ HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: Call Control/2.0 (40008); iw_IL; Android 4.4.2; Model SM-----; Build KOT49H; SIMs:1;
Accept: application/json
Host: www.everycaller.com
Connection: Keep-Alive
Accept-Encoding: gzip
Content-Length: 984

{"identification":{"timestamp":1428200000000,"id":"-------------","app_version":"2.0","build":40008,"vendor":"android_market","name":"samsungSM----","imei":"----------"},"phone_number":[{"called":1,"country":"IL","phone_number":"+972----"},{"called":1,"country":"IL","phone_number":"+9725-------"},{"called":1,"country":"IL","phone_number":"+972-----"},{"called":1,"country":"IL","phone_number":"+972--------"},............],"level":1}
</pre>


<pre>
HTTP/1.1 200 OK
Vary: Accept-Encoding
Content-Type: application/json; charset=utf-8
Content-Length: 1362
Accept-Ranges: bytes
Date: Sun, 05 Apr 2015 11:00:00 GMT
Age: 0
Connection: keep-alive
X-Cache: MISS

{"results":[{"phone_number":"+972------","caller_name":"","spam_level":0,"complaints":0,"blocking_stats":0},{"phone_number":"+972-------","caller_name":"","spam_level":0,"complaints":0,"blocking_stats":0},..........],"credits":0}
</pre>


on the way of having a web-app that will use that "API" here is a snippet (that ignores the cross-domain issue for now.. but essentially you use proxy + some '*' headers for that...)

<pre>
<span style='color:#800000; font-weight:bold; '>function</span> get_number_data<span style='color:#808030; '>(</span>numbers<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  number <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>undefined</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> number <span style='color:#800080; '>?</span> <span style='color:#808030; '>[</span><span style='color:#0000e6; '>'+972771111111'</span><span style='color:#808030; '>]</span> <span style='color:#800080; '>:</span> numbers<span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>var</span> number_data <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span>
    <span style='color:#800000; '>"</span><span style='color:#0000e6; '>identification</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800080; '>{</span>
      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>timestamp</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#008c00; '>1428200000000</span><span style='color:#808030; '>,</span>
      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>id</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>00000000001</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>app_version</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>2.0</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>build</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#008c00; '>40008</span><span style='color:#808030; '>,</span>
      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>vendor</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>android_market</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>name</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>samsungSMNone</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>imei</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>000000000000</span><span style='color:#800000; '>"</span>
    <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span>
    <span style='color:#800000; '>"</span><span style='color:#0000e6; '>phone_number</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#808030; '>,</span>
    <span style='color:#800000; '>"</span><span style='color:#0000e6; '>level</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#008c00; '>0</span>
  <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>



  numbers<span style='color:#808030; '>.</span>forEach<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span>n<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    number_data<span style='color:#808030; '>.</span>phone_number<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span><span style='color:#800080; '>{</span>
      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>called</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span>
      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>country</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>IL</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>phone_number</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> String<span style='color:#808030; '>(</span>n<span style='color:#808030; '>)</span>
    <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>return</span> JSON<span style='color:#808030; '>.</span>stringify<span style='color:#808030; '>(</span>number_data<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>


$<span style='color:#808030; '>.</span>ajax<span style='color:#808030; '>(</span><span style='color:#800080; '>{</span>
  <span style='color:#0000e6; '>' '</span><span style='color:#800080; '>:</span> <span style='color:#0000e6; '>''</span><span style='color:#808030; '>,</span>
  type<span style='color:#800080; '>:</span> <span style='color:#0000e6; '>'POST'</span><span style='color:#808030; '>,</span>
  url<span style='color:#800080; '>:</span> <span style='color:#0000e6; '>'http://www.everycaller.com/api/android/35/iw_IL/lookup/'</span><span style='color:#808030; '>,</span>
  data<span style='color:#800080; '>:</span> get_number_data<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>
  contentType<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>application/json; charset=utf-8</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  traditional<span style='color:#800080; '>:</span> <span style='color:#0f4d75; '>true</span><span style='color:#808030; '>,</span>
  beforeSend<span style='color:#800080; '>:</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span>xhr<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    xhr<span style='color:#808030; '>.</span>setRequestHeader<span style='color:#808030; '>(</span><span style='color:#0000e6; '>'Accept'</span><span style='color:#808030; '>,</span> <span style='color:#0000e6; '>'application/json'</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    xhr<span style='color:#808030; '>.</span>setRequestHeader<span style='color:#808030; '>(</span><span style='color:#0000e6; '>'User-Agent'</span><span style='color:#808030; '>,</span> <span style='color:#0000e6; '>'Call Control/2.0 (40008); iw_IL; Android 4.4.2; Model SMNone; Build KOT49H; SIMs:1;'</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    xhr<span style='color:#808030; '>.</span>setRequestHeader<span style='color:#808030; '>(</span><span style='color:#0000e6; '>'Accept-Encoding'</span><span style='color:#808030; '>,</span> <span style='color:#0000e6; '>'gzip'</span><span style='color:#808030; '>)</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span>
  success<span style='color:#800080; '>:</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span>data<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span><span style='color:#797997; '>arguments</span><span style='color:#808030; '>)</span>
  <span style='color:#800080; '>}</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>
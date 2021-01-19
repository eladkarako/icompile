If you would like to 'fake give yourself CORS' for every request, modify cookies to remove the 'http' only directive so you could always edit cookies using javascript, or perhaps just add an <code>X-Hello: World</code> header to every response you get from anywhere, to fool your browser to think it is the real thing, got from a foo-server,
- here is what you need to do:
<!--more-->
prepare manifest with the following permissions:
<pre>
, "permissions"             : ["*://*/*"
                              ,"webRequest"
                              ,"webRequestBlocking"
                              ]
</pre>
allow your background script to run in the background:
<pre>
, "background"              : { "scripts":    [ 
                                                "resources/background_response_manipulation.js"
                                              ]
                              , "persistent": true 
                              }

</pre>

in your background javascript file, add a listener to <code>chrome.webRequest.onHeadersReceived</code>
<pre>
function headers_handler(response){
  .....
  //shamelessly override/modify response.responseHeaders array (it's ok since it is just a local copy)
  .....
  return {"responseHeaders": response.responseHeaders};
}

filters   = {urls:  ["<all_urls>"]
            ,types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object"]
            };
info_spec = ["responseHeaders", "blocking"];

chrome.webRequest.onHeadersReceived.addListener(headers_handler, filters, info_spec);
</pre>

- if only want to work on HTML pages- limit the filters to just ["main_frame", "sub_frame"]  .
- you may add <code>"ping","other"</code> to modify other resources too..  .
- you may keep info_spec set to both <code>["responseHeaders", "blocking"]</code> even if you don't want to block anything, some resources say it helps for some reasons, since it makes some of the pipelines synchronous. but it will also requires the 'webRequestBlocking' permission.

do you want to debug the final-version of the response-headers after all the modification? simply add a listener to <code>chrome.webRequest.onResponseStarted</code>, go to <code>chrome://extensions/</code>, click the inspect the generated-background page, switch to console to see anything you write into the background-script's <code>console.log</code>.

- <code>response.responseHeaders</code> is an array of plain objects <code>{name: '.....', value: '.....'}</code>, you can modify, delete or add new entries onto the <code>response.responseHeaders</code> itself, since while in the function, it is just a local-copy, so it does not change anything, when done- return an object having the key <code>responseHeaders</code> with your the modify version.

- here is a (very limited) link to Chrome's documentations: <a href="https://developer.chrome.com/extensions/webRequest#type-OnHeadersReceivedOptions" target="_blank">https://developer.chrome.com/extensions/webRequest#type-OnHeadersReceivedOptions</a>

- here is a full example for a background script that modify the 'cache-control' (notify that header's name is always lower-case) to have an additions of the new stale-while.. directive.

it is part of my <code>Boostaler</code> <sup><em>(= boost+stale+er)</em></sup> Chrome extension <sup>(<a href="https://github.com/eladkarako/Chrome-Extension-Boostaler" target="_blank">GitHub</a>, <a href="https://chrome.google.com/webstore/detail/boostaler/dalkfakmooljfejnddeaibdkgbbogpea" target="_blank">Chrome Store</a>)</sup>.

<pre>
<span style='color:#696969; '>/* ╔════════════════════════════════════════╗</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;║ background_response_manipulation       ║</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;╟────────────────────────────────────────╢</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;║                                        ║</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;╚════════════════════════════════════════╝</span>
<span style='color:#696969; '>░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */</span>

regex_stalewhile   <span style='color:#808030; '>=</span><span style='color:#0000e6; '> </span><span style='color:#800000; '>/</span><span style='color:#0000e6; '>stale-while-revalidate</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; '>i</span><span style='color:#800080; '>;</span>
regex_staleiferror <span style='color:#808030; '>=</span><span style='color:#0000e6; '> </span><span style='color:#800000; '>/</span><span style='color:#0000e6; '>stale-if-error</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; '>i</span><span style='color:#800080; '>;</span>
regex_firstcomma   <span style='color:#808030; '>=</span><span style='color:#0000e6; '> </span><span style='color:#800000; '>/</span><span style='color:#808030; '>^</span><span style='color:#0f69ff; '>\\,</span><span style='color:#800000; '>/</span><span style='color:#800080; '>;</span>
regex_doublecomma   <span style='color:#808030; '>=</span><span style='color:#0000e6; '> </span><span style='color:#800000; '>/</span><span style='color:#0000e6; '>,,</span><span style='color:#808030; '>+</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; '>g</span><span style='color:#800080; '>;</span>

<span style='color:#800000; font-weight:bold; '>function</span> headers_handler<span style='color:#808030; '>(</span>response<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#696969; '>// extract original</span>
  <span style='color:#800000; font-weight:bold; '>var</span> is_edited <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>false</span><span style='color:#800080; '>;</span>

  response<span style='color:#808030; '>.</span>responseHeaders<span style='color:#808030; '>.</span>forEach<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>item</span><span style='color:#808030; '>,</span> <span style='color:#797997; '>index</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>cache-control</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>!==</span> <span style='color:#800000; font-weight:bold; '>item</span><span style='color:#808030; '>.</span>name<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toLowerCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span>   <span style='color:#800000; font-weight:bold; '>return</span><span style='color:#800080; '>;</span>

    <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>===</span> regex_stalewhile<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>test</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>item</span><span style='color:#808030; '>.</span>value<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span>   <span style='color:#800000; font-weight:bold; '>item</span><span style='color:#808030; '>.</span>value <span style='color:#808030; '>+=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>,stale-while-revalidate=86400</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>  <span style='color:#696969; '>//edit existing</span>
    <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>===</span> regex_staleiferror<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>test</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>item</span><span style='color:#808030; '>.</span>value<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>item</span><span style='color:#808030; '>.</span>value <span style='color:#808030; '>+=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>,stale-if-error=259200</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>

    <span style='color:#800000; font-weight:bold; '>item</span><span style='color:#808030; '>.</span>value <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>item</span><span style='color:#808030; '>.</span>value<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span>regex_firstcomma<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span>regex_doublecomma<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>  <span style='color:#696969; '>//fix</span>

    is_edited <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span><span style='color:#800080; '>;</span>  <span style='color:#696969; '>//if false, there was no cache-control header</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  
  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>===</span> is_edited<span style='color:#808030; '>)</span> response<span style='color:#808030; '>.</span>responseHeaders<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span><span style='color:#800080; '>{</span>name<span style='color:#800080; '>:</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>cache-control</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> value<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>stale-while-revalidate=86400,stale-if-error=259200</span><span style='color:#800000; '>"</span><span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800080; '>{</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>responseHeaders</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> response<span style='color:#808030; '>.</span>responseHeaders<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

filters   <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span>urls<span style='color:#800080; '>:</span>  <span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>&lt;all_urls></span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>
            <span style='color:#808030; '>,</span>types<span style='color:#800080; '>:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>main_frame</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>sub_frame</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>stylesheet</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>script</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>image</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>font</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>object</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>
            <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
info_spec <span style='color:#808030; '>=</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>responseHeaders</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>blocking</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>

chrome<span style='color:#808030; '>.</span>webRequest<span style='color:#808030; '>.</span>onHeadersReceived<span style='color:#808030; '>.</span>addListener<span style='color:#808030; '>(</span>headers_handler<span style='color:#808030; '>,</span> filters<span style='color:#808030; '>,</span> info_spec<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

<span style='color:#696969; '>/*</span>
<span style='color:#696969; '>//for debugging - will shows (readonly) the final version of the response-headers, after modified by ALL the extensions.</span>
<span style='color:#696969; '>chrome.webRequest.onResponseStarted.addListener(function(response){ console.log(response); }, filters, ["responseHeaders"]);</span>
<span style='color:#696969; '>*/</span>
</pre>

here is a modification that will allow more/less "listening for requests"...
the third option is not accepted by Chrome, just Mozilla browsers.. but it's nice to try :)

<pre>
          //,types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object"]
            ,types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "other"]   /* Chrome max value:   https://developer.chrome.com/extensions/webRequest */
          //,types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "other", "xbl", "xslt", "beacon", "xml_dtd", "media", "websocket", "csp_report", "imageset", "web_manifest"] /* Mozilla max value:  https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webRequest/ResourceType */
</pre>

since <code>XMLHTTPRequest</code> objects are usually called for specific request,
part from those whom are called regularly.. there is not much of a point in including it..

ping might have positive effect (although ping requests are forbidden now days in new-chrome versions..),
other can be anything really, maybe it includes media, beacon which is helpful to be stale'able.. :)

so really what we're having is:
<pre>
filters   = {urls:  ["<all_urls>"]
          //,types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object"]                                         /*original set*/
            ,types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object",                   "ping", "other"]      /*all but not xhr, always keep the xhr most-updated...*/
          //,types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "other"]      /* Chrome max value:   https://developer.chrome.com/extensions/webRequest -- other might be ["xbl", "xslt", "beacon", "xml_dtd", "media", "websocket", "csp_report", "imageset", "web_manifest"] from: Mozilla max value:  https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webRequest/ResourceType */
            };
</pre>

fun!
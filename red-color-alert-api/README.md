new:

https://www.oref.org.il/WarningMessages/alert/alerts.json
https://www.oref.org.il/WarningMessages/History/AlertsHistory.json

This gets a session cookie:

https://www.oref.org.il/Shared/Ajax/GetTickerMessages.aspx?lang=he&isFirst=0&hpNewsId=901

- - - - - - - - - - - - - -

<code>view-source:https://www.oref.org.il/</code> in the inner-HTML, will see several JSON-like "databases", 
first "group" are those are used to related a geo-location Hebrew city-names to an area-code <sub>(<code>{ code: "6", area: "גליל עליון" }</code>)</sub>, 
next there will be a 'city-id UUID code to an area code (above) and estimation of the lat/lng' (probably using Google earth/map API) <sub>(<code>{cityID:"45FD1BB3DEA530F551074B0454E829E4", areaID:"34", area:"תבור", lat:"32.682085", lng:"35.320743"}</code>)</sub>, 
near the end of the page you'll have a really big "DB", combining verbosed name in Hebrew of the city, UUID for each city, and its area code, probably a combined "DB" (<sub><code>{label:"מכון וינגייט", value:"0", id:"2FACBF110E44944FBAF0C3767751F1FE", lat:"32.2630364", lng:"34.837004", areaid:"0"}</code>)</sub> ordered by Hebrew alef-beit.

- - - - - - - - - - - - - -

The <code>SilenceWave.js</code> (https://www.oref.org.il/Shared/ClientScripts/SilenceWave.js?SiteVersion=3.3) appears to control the UI part of the page, several timers, JavaScript UI-interaction handlers, extracting and parsing parts of the "DB" from inside the page, basic <strong>cookies</strong> parsing (they already have loaded jQuery!) (◔_◔) 🙄, a call to a global function that hasn't set in this JS-file <code>GetJsonFile</code> - but defined in another JS file called <code>main.js</code> (https://www.oref.org.il/Shared/ClientScripts/Design2015/main.js?SiteVersion=3.3), 
which uses XMLHTTPRequest to fetch the JSON, which also uses <code>console.log</code> to write down each time it does that <sub>(<code>[7:14:57] https://www.oref.org.il/WarningMessages/History/AlertsHistory.json</code>)</sub>, 
its URL is also set globally, this time in the page's main body <code>var urlGetAlerts='https://www.oref.org.il/WarningMessages/History/AlertsHistory.json';</strong> as a global-variable. 
It also seems that the code is so unorganised, there is a second loop for fetching the JSON right inside <code>WarningMessages.js</code> (https://www.oref.org.il/Shared/ClientScripts/WarningMessages/WarningMessages.js?SiteVersion=3.3) 
containing a duplicated-code copy/paste from <code>main.js</code>. The code repeats itself due to an empty cookie-check.

This whole thing says that there is a request (at-least from two places) every 2 seconds, but sometimes every 1 seconds do to the two method-timed together :|

- - - - - - - - - - - - - -

these are the old API:


http://www.oref.org.il/WarningMessages/History/AlertsHistory.json

http://www.oref.org.il/Shared/Ajax/GoogleMap.aspx?lang=he&RiFid=1087

http://www.oref.org.il/shared/Ajax/GoogleMap.aspx?City=&area=0&lang=he&RiFid=1087&from=City

http://www.oref.org.il/Shared/Ajax/GetInstructionsByArea.aspx?lang=he&RiFid=1087

url             = url + "&fromDate=" + startDate + "&toDate=" + endDate


- - - - - 

Here is a example for the "database" from the old page:
<a href="https://github.com/eladkarako/Informatics/blob/master/__%D7%90%D7%96%D7%95%D7%A8%D7%99%D7%9D.json">__אזורים.json</a>

<a href="https://github.com/eladkarako/Informatics/blob/master/__%D7%90%D7%96%D7%95%D7%A8%D7%99%D7%9D2.json">__אזורים2.json</a>

<a href="https://github.com/eladkarako/Informatics/blob/master/__%D7%99%D7%99%D7%A9%D7%95%D7%91%D7%99%D7%9D.json">__יישובים.json</a>


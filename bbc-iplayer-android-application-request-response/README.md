<img src="https://icompile.eladkarako.com/_uploads/2014/09/images-1.jpg" alt="images (1)" width="284" height="177" class="alignnone size-full wp-image-1954" />

<!--more-->


<code style="display:inline;">Android boot-up #1/2</code>

request:
<pre>
GET http://polling.bbc.co.uk/appconfig/iplayerradio/android/1.6.1/status.json HTTP/1.1
User-Agent: BBCiPlayerRadio/1.6.1.1522345 (SM-N900; Android 4.4.2)
Host: polling.bbc.co.uk
Connection: Keep-Alive
Accept-Encoding: gzip
</pre>

response:
<pre>
HTTP/1.1 200 OK
Server: Apache
Content-Type: application/json
ETag: &quot;28-50354284fae00&quot;
X-PAL-Host: pal051.cwwtf.bbc.co.uk:80
Last-Modified: Thu, 18 Sep 2014 10:07:52 GMT
Content-Length: 40
X-Cache-Action: HIT
X-Cache-Hits: 4
X-Cache-Age: 259
Vary: Accept-Encoding
Cache-Control: max-age=49
Date: Sat, 27 Sep 2014 08:53:53 GMT
Connection: keep-alive

{
	&quot;status&quot;: {
		&quot;appStatus&quot;: &quot;on&quot;	
	}
}

</pre>

response (beautified):
<pre>
{
  "status": {
    "appStatus": "on"
  }
}
</pre>

<code style="display:inline;">Android boot-up #2/2</code>

request:
<pre>
GET http://polling.bbc.co.uk/appconfig/iplayerradio/android/1.6.1/config.json HTTP/1.1
User-Agent: BBCiPlayerRadio/1.6.1.1522345 (SM-N900; Android 4.4.2)
Host: polling.bbc.co.uk
Connection: Keep-Alive
Accept-Encoding: gzip
</pre>

response:
<pre>
HTTP/1.1 200 OK
Server: Apache
Content-Type: application/json
ETag: &quot;f23-50354284fae00&quot;
X-PAL-Host: pal043.cwwtf.bbc.co.uk:80
Last-Modified: Thu, 18 Sep 2014 10:07:52 GMT
Content-Length: 3875
X-Cache-Action: HIT
X-Cache-Hits: 2
X-Cache-Age: 163
Vary: Accept-Encoding
Cache-Control: max-age=269
Date: Sat, 27 Sep 2014 08:53:53 GMT
Connection: keep-alive

{

	&quot;config&quot;: {

		&quot;ion&quot;: {
			&quot;recipe&quot;: &quot;http%3A%2F%2Fwww.bbc.co.uk%2Fmobile%2Fappconfig%2Fiplayerradio%2Fion-recipies%2Fiplayerradio.1.5.yaml&quot;
		},

		&quot;mediaSets&quot;: {
			&quot;low&quot;: &quot;android-phone-tablet-rtmp-3g&quot;,
			&quot;hi&quot;: &quot;android-phone-rtmp-high&quot;
		},
		
		&quot;promotedApps&quot;: [
			{
				&quot;title&quot;: &quot;More UK Radio&quot;,
				&quot;packageName&quot;: &quot;uk.co.radioplayer&quot;,
				&quot;interstitialUrl&quot;: &quot;http://www.radioplayer.co.uk/bbciospromo/index-android.html&quot;,
				&quot;actionName&quot;: &quot;radioplayer_link&quot;
			}
		],

		&quot;stationsWithAODEpisodesDisabled&quot;: [
			&quot;bbc_radio_scotland&quot;,
			&quot;bbc_radio_nan_gaidheal&quot;,
			&quot;bbc_radio_ulster&quot;,
			&quot;bbc_radio_foyle&quot;,
			&quot;bbc_radio_wales&quot;,
			&quot;bbc_radio_cymru&quot;,
			&quot;bbc_radio_berkshire&quot;,
			&quot;bbc_radio_bristol&quot;,
			&quot;bbc_radio_cambridge&quot;,
			&quot;bbc_radio_cornwall&quot;,
			&quot;bbc_radio_coventry_warwickshire&quot;,
			&quot;bbc_radio_cumbria&quot;,
			&quot;bbc_radio_derby&quot;,
			&quot;bbc_radio_devon&quot;,
			&quot;bbc_radio_essex&quot;,
			&quot;bbc_radio_gloucestershire&quot;,
			&quot;bbc_radio_guernsey&quot;,
			&quot;bbc_radio_hereford_worcester&quot;,
			&quot;bbc_radio_humberside&quot;,
			&quot;bbc_radio_jersey&quot;,
			&quot;bbc_radio_kent&quot;,
			&quot;bbc_radio_lancashire&quot;,
			&quot;bbc_radio_leeds&quot;,
			&quot;bbc_radio_leicester&quot;,
			&quot;bbc_radio_lincolnshire&quot;,
			&quot;bbc_london&quot;,
			&quot;bbc_radio_manchester&quot;,
			&quot;bbc_radio_merseyside&quot;,
			&quot;bbc_radio_newcastle&quot;,
			&quot;bbc_radio_norfolk&quot;,
			&quot;bbc_radio_northampton&quot;,
			&quot;bbc_radio_nottingham&quot;,
			&quot;bbc_radio_oxford&quot;,
			&quot;bbc_radio_sheffield&quot;,
			&quot;bbc_radio_shropshire&quot;,
			&quot;bbc_radio_solent&quot;,
			&quot;bbc_radio_somerset_sound&quot;,
			&quot;bbc_radio_stoke&quot;,
			&quot;bbc_radio_suffolk&quot;,
			&quot;bbc_radio_surrey&quot;,
			&quot;bbc_radio_sussex&quot;,
			&quot;bbc_tees&quot;,
			&quot;bbc_three_counties_radio&quot;,
			&quot;bbc_radio_wiltshire&quot;,
			&quot;bbc_wm&quot;,
			&quot;bbc_radio_york&quot;,
			&quot;bbc_school_radio&quot;
		],
		
		&quot;alarmAdjustInMilliseconds&quot;: 10000,

		&quot;webViewURLSettings&quot;: [
		   {
		     &quot;urlPattern&quot;: &quot;^https?://www(?:.int|.test|.stage)?.bbc.co.uk/music/playlister(?:$|[/#?.]+.*$)&quot;,
		     &quot;javascript&quot;: &quot;(function(){require(['jquery-1.9'],function($){document.iplayerRadioApp={makePlaylisterAPICalls:function(){document.playlister.makeSafeForWebView(function(e){BBCiPlayerRadioApp.makeSafeForWebViewComplete()});document.playlister.onSnippetPlaybackRequested(function(e){BBCiPlayerRadioApp.snippetPlaybackRequested()})}};if(document.playlister!==undefined){document.iplayerRadioApp.makePlaylisterAPICalls()}else{$(document).bind('playlister-api-loaded',function(){document.iplayerRadioApp.makePlaylisterAPICalls()})}})})();&quot;,
		     &quot;pageTitle&quot;: &quot;Playlister&quot;
		   },
		   {
		     &quot;urlPattern&quot;: &quot;^https?://(www|ssl)(?:.int|.test|.stage)?.bbc.co.uk/id(?:$|(?!\\/(statecookie|refresh|redirect).*)[/#\\\\?\\\\.]+.*$)&quot;,
		     &quot;javascript&quot;: &quot;(function(){document.bbcid={makeSafeForWebView:function(appCallback){document.bbcid.hideElement('div#orb-header');document.bbcid.hideElement('div#orb-footer');document.bbcid.hideElement('#blq-mast');document.bbcid.hideElement('#blq-global');document.bbcid.hideElement('#blq-foot');document.bbcid.hideElement('div.rememberme-container');if(appCallback!==undefined){appCallback({target:document.bbcid})}},hideElement:function(itemName){var element=document.querySelector(itemName);if(element!==null){element.style.display='none'}}};var event=document.createEvent('Event');event.initEvent('bbcid-api-loaded',true,true);document.dispatchEvent(event)})();(function(){document.iplayerRadioApp={makeBBCiDAPICalls:function(){document.bbcid.makeSafeForWebView(function(e){BBCiPlayerRadioApp.makeSafeForWebViewComplete()})}};if(document.bbcid!==undefined){document.iplayerRadioApp.makeBBCiDAPICalls()}else{document.addEventListener('bbcid-api-loaded',function(){document.iplayerRadioApp.makeBBCiDAPICalls()},false)}})();&quot;,
		     &quot;pageTitle&quot;: &quot;BBC iD&quot;
		   }
		],
		
		&quot;stats&quot;: {
			&quot;echo&quot;: {
				&quot;active&quot;: false,
				&quot;environment&quot;: &quot;nkdata&quot;
			},
			&quot;beacon&quot;: {
				&quot;active&quot;: true,
				&quot;environment&quot;: &quot;bbc&quot;
			}
		},

		&quot;hockeykit&quot;: {
			&quot;active&quot;: false
		}

	}

}

</pre>

response (beautified):
<pre>
{

  "config": {

    "ion": {
      "recipe": "http%3A%2F%2Fwww.bbc.co.uk%2Fmobile%2Fappconfig%2Fiplayerradio%2Fion-recipies%2Fiplayerradio.1.5.yaml"
    },

    "mediaSets": {
      "low": "android-phone-tablet-rtmp-3g",
      "hi": "android-phone-rtmp-high"
    },

    "promotedApps": [{
      "title": "More UK Radio",
      "packageName": "uk.co.radioplayer",
      "interstitialUrl": "http://www.radioplayer.co.uk/bbciospromo/index-android.html",
      "actionName": "radioplayer_link"
    }],

    "stationsWithAODEpisodesDisabled": [
      "bbc_radio_scotland",
      "bbc_radio_nan_gaidheal",
      "bbc_radio_ulster",
      "bbc_radio_foyle",
      "bbc_radio_wales",
      "bbc_radio_cymru",
      "bbc_radio_berkshire",
      "bbc_radio_bristol",
      "bbc_radio_cambridge",
      "bbc_radio_cornwall",
      "bbc_radio_coventry_warwickshire",
      "bbc_radio_cumbria",
      "bbc_radio_derby",
      "bbc_radio_devon",
      "bbc_radio_essex",
      "bbc_radio_gloucestershire",
      "bbc_radio_guernsey",
      "bbc_radio_hereford_worcester",
      "bbc_radio_humberside",
      "bbc_radio_jersey",
      "bbc_radio_kent",
      "bbc_radio_lancashire",
      "bbc_radio_leeds",
      "bbc_radio_leicester",
      "bbc_radio_lincolnshire",
      "bbc_london",
      "bbc_radio_manchester",
      "bbc_radio_merseyside",
      "bbc_radio_newcastle",
      "bbc_radio_norfolk",
      "bbc_radio_northampton",
      "bbc_radio_nottingham",
      "bbc_radio_oxford",
      "bbc_radio_sheffield",
      "bbc_radio_shropshire",
      "bbc_radio_solent",
      "bbc_radio_somerset_sound",
      "bbc_radio_stoke",
      "bbc_radio_suffolk",
      "bbc_radio_surrey",
      "bbc_radio_sussex",
      "bbc_tees",
      "bbc_three_counties_radio",
      "bbc_radio_wiltshire",
      "bbc_wm",
      "bbc_radio_york",
      "bbc_school_radio"
    ],

    "alarmAdjustInMilliseconds": 10000,

    "webViewURLSettings": [{
      "urlPattern": "^https?://www(?:.int|.test|.stage)?.bbc.co.uk/music/playlister(?:$|[/#?.]+.*$)",
      "javascript": "(function(){require(['jquery-1.9'],function($){document.iplayerRadioApp={makePlaylisterAPICalls:function(){document.playlister.makeSafeForWebView(function(e){BBCiPlayerRadioApp.makeSafeForWebViewComplete()});document.playlister.onSnippetPlaybackRequested(function(e){BBCiPlayerRadioApp.snippetPlaybackRequested()})}};if(document.playlister!==undefined){document.iplayerRadioApp.makePlaylisterAPICalls()}else{$(document).bind('playlister-api-loaded',function(){document.iplayerRadioApp.makePlaylisterAPICalls()})}})})();",
      "pageTitle": "Playlister"
    }, {
      "urlPattern": "^https?://(www|ssl)(?:.int|.test|.stage)?.bbc.co.uk/id(?:$|(?!\\/(statecookie|refresh|redirect).*)[/#\\\\?\\\\.]+.*$)",
      "javascript": "(function(){document.bbcid={makeSafeForWebView:function(appCallback){document.bbcid.hideElement('div#orb-header');document.bbcid.hideElement('div#orb-footer');document.bbcid.hideElement('#blq-mast');document.bbcid.hideElement('#blq-global');document.bbcid.hideElement('#blq-foot');document.bbcid.hideElement('div.rememberme-container');if(appCallback!==undefined){appCallback({target:document.bbcid})}},hideElement:function(itemName){var element=document.querySelector(itemName);if(element!==null){element.style.display='none'}}};var event=document.createEvent('Event');event.initEvent('bbcid-api-loaded',true,true);document.dispatchEvent(event)})();(function(){document.iplayerRadioApp={makeBBCiDAPICalls:function(){document.bbcid.makeSafeForWebView(function(e){BBCiPlayerRadioApp.makeSafeForWebViewComplete()})}};if(document.bbcid!==undefined){document.iplayerRadioApp.makeBBCiDAPICalls()}else{document.addEventListener('bbcid-api-loaded',function(){document.iplayerRadioApp.makeBBCiDAPICalls()},false)}})();",
      "pageTitle": "BBC iD"
    }],

    "stats": {
      "echo": {
        "active": false,
        "environment": "nkdata"
      },
      "beacon": {
        "active": true,
        "environment": "bbc"
      }
    },

    "hockeykit": {
      "active": false
    }

  }

}
</pre>
When you build Chromium yourself, or download a Chromium nightly-build, you need to provide API-key, a secret-phrase and a client-id,
running Chromium without either of those three phrases will seriously compromise Chromium's functionality.

The is a sort of "inner-Google" page on how to generate, and use the API-Keys needed to make Chromium a properly, fully functional Chrome-compatible browser (including Syncing your bookmarks and other stuff..)

There is an issue, however, with that page (<code><a href="https://www.chromium.org/developers/how-tos/api-keys" target="blank">https://www.chromium.org/developers/how-tos/api-keys</a></code>) which has not been-updated for a while, especially on the names of the API-services, one, needs to enable in-order to use Chromium in a fully functional mode,

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_google_console_api_services_list_helper_for_chromium_api_keys.png" alt="icompile.eladkarako.com_google_console_api_services_list_helper_for_chromium_api_keys" width="523" height="484"/>

I've gathered those services (including a direct link for you to use in-order to activate it)
the following list (Google API-console) is ordered as:

  - Name.
  - Description.
  - URL.

the list of API-services is sorted (A,B,C..) by the <code>Name</code> of the API-service.

<!--more-->

<blockquote>*Note that there are *EXTRA* API-services here you probably not necessarily have to use, but they are FREE, and you might as well add those anyway (it is just a kind of note for me in that way, since *I* do use every one of those API-services...)</blockquote>

<blockquote>You still need to use the <a href="https://www.chromium.org/developers/how-tos/api-keys" target="blank">https://www.chromium.org/developers/how-tos/api-keys</a> page as a guide, but you can skip the API list and instead - just follow the list below, and enable each one.
</blockquote>

Hope it helps anyone :]

<ul>
  <li>
    <ul>
      <li>Android Device Verification API</li>
      <li>The Android Device Verification API can be used to verify whether a device is a valid Android device.</li>
      <li><a href="https://console.cloud.google.com/apis/api/androidcheck-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/androidcheck-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>CalDAV API</li>
      <li>The CalDAV API lets you manage your Google calendars and events.</li>
      <li><a href="https://console.cloud.google.com/apis/api/caldav-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/caldav-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Chrome Web Store API</li>
      <li>The Chrome Web Store API provides access to data about apps and extensions, as well as developer tools for managing them.</li>
      <li><a href="https://console.cloud.google.com/apis/api/chromewebstore-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/chromewebstore-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Contacts API</li>
      <li>The Google Contacts API lets you manage your contacts.</li>
      <li><a href="https://console.cloud.google.com/apis/api/contacts-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/contacts-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Custom Search API</li>
      <li>Google Custom Search enables you to search over a slice of the web, such as your own website, or a collection of websites. You can harness the power of Google to create a search engine tailored to your needs and interests, and you can present the results in your website.</li>
      <li><a href="https://console.cloud.google.com/apis/api/customsearch-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/customsearch-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Gmail API</li>
      <li>The Gmail API lets you view and manage Gmail mailbox data like threads, messages, and labels.</li>
      <li><a href="https://console.cloud.google.com/apis/api/gmail/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/gmail/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Apps Marketplace API</li>
      <li>Lets your Apps Marketplace applications integrate with Google's licensing and billing services.</li>
      <li><a href="https://console.cloud.google.com/apis/api/appsmarket-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/appsmarket-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Calendar API</li>
      <li>The Google Calendar API lets you manage your calendars and events.</li>
      <li><a href="https://console.cloud.google.com/apis/api/calendar-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/calendar-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Cloud APIs</li>
      <li>This is a meta service for Google Cloud APIs for convenience. Enabling this service enables all commonly used Google Cloud APIs for the project. By default, it is enabled for all projects created through Google Cloud Console and Google Cloud SDK, and should be manually enabled for all other projects that intend to use Google Cloud APIs. Note: disabling this service has no effect on other services.</li>
      <li><a href="https://console.cloud.google.com/apis/api/cloudapis.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/cloudapis.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Cloud Messaging</li>
      <li>Firebase Cloud Messaging (FCM) (https://firebase.google.com/docs/cloud-messaging/) is the new version of GCM. If you are integrating messaging in a new app, start with FCM. GCM users are strongly recommended to upgrade to FCM in order to benefit from new FCM features today and in the future. Note that FCM and GCM are not supported by Cloud Platform Support; please check out our support page at https://firebase.google.com/support/ for related questions.</li>
      <li><a href="https://console.cloud.google.com/apis/api/googlecloudmessaging-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/googlecloudmessaging-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Cloud Speech API.</li>
      <li>Google Cloud Speech API.</li>
      <li><a href="https://console.cloud.google.com/apis/api/speech.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/speech.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Cloud Storage</li>
      <li>Google Cloud Storage is a RESTful service for storing and accessing your data on Google's infrastructure.</li>
      <li><a href="https://console.cloud.google.com/apis/api/storage-component-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/storage-component-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Contacts CardDAV API</li>
      <li>An API to synchronize contacts.</li>
      <li><a href="https://console.cloud.google.com/apis/api/carddav-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/carddav-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Drive API</li>
      <li>The Google Drive API allows clients to access resources from Google Drive.</li>
      <li><a href="https://console.cloud.google.com/apis/api/drive/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/drive/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Identity and Access Management (IAM) API</li>
      <li>Manages identity and access control for Google Cloud Platform resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls.</li>
      <li><a href="https://console.cloud.google.com/apis/api/iam.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/iam.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Maps Android API</li>
      <li>Add maps based on Google Maps data to your Android application with the Google Maps Android API. The API automatically handles access to Google Maps servers, map display and response to user gestures such as clicks and drags.</li>
      <li><a href="https://console.cloud.google.com/apis/api/maps_android_backend/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/maps_android_backend/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Maps Coordinate API</li>
      <li>The Google Maps Coordinate API is no longer supported. If you are a current paying customer, please contact your sales representative for alternative options and solutions.</li>
      <li><a href="https://console.cloud.google.com/apis/api/coordinate-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/coordinate-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Maps Directions API</li>
      <li>Access driving, cycling, walking and public transportation routing with the Google Maps Directions API using an HTTP request. Waypoints offer the ability to alter a route through a specific location. Specify origins, destinations and waypoints either as text strings (e.g. "Chicago, IL" or "Darwin, NT, Australia") or as latitude/longitude coordinates.</li>
      <li><a href="https://console.cloud.google.com/apis/api/directions_backend/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/directions_backend/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Maps Distance Matrix API</li>
      <li>Access travel distance and time for a matrix of origins and destinations with the Google Maps Distance Matrix API. The information returned is based on the recommended route between start and end points and consists of rows containing duration and distance values for each pair.</li>
      <li><a href="https://console.cloud.google.com/apis/api/distance_matrix_backend/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/distance_matrix_backend/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Maps Elevation API</li>
      <li>Query all locations on the surface of earth, including depth locations on the ocean floor (which return negative values), for elevation data with the Google Maps Elevation API. Sampled requests are available for elevation data along paths, allowing elevation change calculation along routes.</li>
      <li><a href="https://console.cloud.google.com/apis/api/elevation_backend/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/elevation_backend/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Maps Geocoding API</li>
      <li>Convert addresses into geographic coordinates (geocoding), which you can use to place markers or position the map. This API also allows you to convert geographic coordinates into an address (reverse geocoding).</li>
      <li><a href="https://console.cloud.google.com/apis/api/geocoding_backend/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/geocoding_backend/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Maps Geolocation API</li>
      <li>Find a location and accuracy radius based on information from things like cell towers and WiFi access points that a mobile client can detect with the Google Maps Geolocation API. This is primarily used where GPS is not possible or appropriate.</li>
      <li><a href="https://console.cloud.google.com/apis/api/geolocation/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/geolocation/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Maps JavaScript API</li>
      <li>Accessing local data and maps built from the same data sources as Google Maps, build and style a map onto your website using the Google Maps JavaScript API. Multiple libraries are available and services such as geocoding, directions, Street View and more to customize your maps to fit your needs.</li>
      <li><a href="https://console.cloud.google.com/apis/api/maps_backend/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/maps_backend/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Maps Time Zone API</li>
      <li>The Google Maps Time Zone API provides the time zone for a location on the earth, as well as that location's time offset from UTC.</li>
      <li><a href="https://console.cloud.google.com/apis/api/timezone_backend/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/timezone_backend/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google People API</li>
      <li>Provides access to information about profiles and contacts.</li>
      <li><a href="https://console.cloud.google.com/apis/api/people.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/people.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Places API for Android</li>
      <li>Find detailed information about places across a wide range of categories. Backed by the same database used by Google Maps and Google+, the Google Places API for Android features about 100 million businesses and points of interest that are updated frequently through owner-verified listings and user-moderated contributions. Key features include autocomplete, search, place picker, photos and add place.</li>
      <li><a href="https://console.cloud.google.com/apis/api/placesandroid/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/placesandroid/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Places API Web Service</li>
      <li>Find detailed information about places across a wide range of categories. Backed by the same database used by Google Maps and Google+, the Google Places API Web Service features about 100 million businesses and points of interest that are updated frequently through owner-verified listings and user-moderated contributions. Key features include autocomplete, search, place picker, photos and add place.</li>
      <li><a href="https://console.cloud.google.com/apis/api/places_backend/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/places_backend/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Search Console API</li>
      <li>The Search Console API provides access to Search Console data for your verified websites.</li>
      <li><a href="https://console.cloud.google.com/apis/api/webmasters-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/webmasters-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google Translate API</li>
      <li>The Google Translate API lets websites and programs integrate with Google Translate programatically.</li>
      <li><a href="https://console.cloud.google.com/apis/api/translate/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/translate/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google+ API</li>
      <li>The Google+ API enables developers to build on top of the Google+ platform.</li>
      <li><a href="https://console.cloud.google.com/apis/api/plus/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/plus/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google+ Domains API</li>
      <li>The Google+ Domains API enables developers to build on top of the Google+ platform for Google Apps domains.</li>
      <li><a href="https://console.cloud.google.com/apis/api/plusdomains-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/plusdomains-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Google+ Hangouts API</li>
      <li>The Google+ Hangouts API enables developers to build applications that run inside of Google+ Hangouts.</li>
      <li><a href="https://console.cloud.google.com/apis/api/plusHangouts/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/plusHangouts/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Nearby Messages API</li>
      <li>Api for exchanging messages with nearby devices.</li>
      <li><a href="https://console.cloud.google.com/apis/api/copresence-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/copresence-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>PageSpeed Insights API</li>
      <li>The PageSpeed Insights API lets you analyze the performance of your website with a simple API. It offers tailored suggestions for how you can optimize your site, and lets you easily integrate PageSpeed Insights analysis into your development tools and workflow.</li>
      <li><a href="https://console.cloud.google.com/apis/api/pagespeedonline-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/pagespeedonline-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Prediction API</li>
      <li>The Prediction API enables you to make smart applications that respond to all the streams of data that flood through your apps by providing quick and easy access to Google's powerful machine learning algorithms.</li>
      <li><a href="https://console.cloud.google.com/apis/api/prediction-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/prediction-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Safe Browsing API (Legacy)</li>
      <li>The Safe Browsing API (v3 and earlier) is an experimental API that allows client applications to check URLs against Google's constantly-updated blacklists of suspected phishing and malware pages. Your client application can use the API to download an encrypted table for local, client-side lookups of URLs.</li>
      <li><a href="https://console.cloud.google.com/apis/api/safebrowsing/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/safebrowsing/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Safe Browsing APIs</li>
      <li>The Safe Browsing API is an experimental API that allows client applications to check URLs against Google's constantly-updated blacklists of suspected phishing and malware pages. Your client application can use the API to download an encrypted table for local, client-side lookups of URLs.</li>
      <li><a href="https://console.cloud.google.com/apis/api/safebrowsing.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/safebrowsing.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>Site Verification API</li>
      <li>The Google Site Verification API lets applications automate the process of managing ownership records for websites and domains.</li>
      <li><a href="https://console.cloud.google.com/apis/api/siteverification-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/siteverification-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>YouTube Analytics API</li>
      <li>Provides access to YouTube Analytics reports.</li>
      <li><a href="https://console.cloud.google.com/apis/api/youtubeanalytics-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/youtubeanalytics-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
  <li>
    <ul>
      <li>YouTube Data API v3</li>
      <li>The YouTube Data API v3 is an API that provides access to YouTube data, such as videos, playlists, and channels.</li>
      <li><a href="https://console.cloud.google.com/apis/api/youtube-json.googleapis.com/overview?project=" target="_blank">https://console.cloud.google.com/apis/api/youtube-json.googleapis.com/overview?project=</a></li>
    </ul>
  </li>
</ol>

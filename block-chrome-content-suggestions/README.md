<!--more-->
This article: <a target="_blank" href="https://icompile.eladkarako.com/chromereader-a-news-reader-right-in-your-mobile-google-chrome/"><em>iCompile</em> - ChromeReader – A News Reader Right In Your Mobile Google Chrome</a>, sometime ago introduced the "You might be interested in reading about" article section in Google-Chrome,
And although there isn't an official feature-flag in your browser's <code>chrome&#x003A;&#x002F;&#x002F;flags</code> for you to disable it,
you can, in-fact disable it from appearing, by blocking the entire service all together.

In-short:

1. be rooted.
2. be offline (turn off your wifi etc...)
3. Add those two lines to your Android's HOSTS file. Use AdAway or edit the HOSTS file manually.
<pre>
127.0.0.1 chromecontentsuggestions.googleapis.com
127.0.0.1 chromecontentsuggestions-pa.googleapis.com
</pre>
or
<pre>
0.0.0.0 chromecontentsuggestions.googleapis.com
0.0.0.0 chromecontentsuggestions-pa.googleapis.com
</pre>
4. reboot your device.
5. stop you browser's process, clean it's cache (all!).



----
notes:
[4] is a must due to Android(linux) internal network-resolve cache.
[5] on Android version 5/6/7+ you "need to be a developer" for an easy access to stop/clear feature in the devices recent-apps list. Go to "about" menu in settings, then "software details", click 10 times on the "build version" line. Open Chrome just for a second, go to the phone's "recent-apps" list, click and hold the top-corner where the icon is (opposite to where the close-'x' is), you'll be shown the classic stop/clean/clear menu, where you click stop few times, go to cache-management and look at the bottom for "clean all".
this must be done OFFLINE(!), after you've edited your HOSTS file and rebooted your phone, since the suggestions displayed in your chrome are fetched (internet..) in the background. 
[3] I use the <code>127.0.0.1</code> version. In the rare cases you're running an internal-proxy of some-sort, it is best to use the <code>0.0.0.0</code> one.

once you've been offline, edited your HOSTS, rebooted, stopped Chrome's process and cleared it's cache, you may get online again, once Chrome will try to fetch the latest stories it will get blocked.
done.

<hr/>

Also..
article suggestions clicking has a unique-user identification reference that is collected/generated from <code>googleapis.com/auth/chrome-content-suggestions</code>, but you can not block it using HOSTS file, since googleapis.com is used across other projects too, but it should be sufficient to block the above domains. If you want, you can use AdGuard, and add the following "adblock-like" rule: <code>googleapis.com/auth/chrome-content-suggestions</code> which then, using AdGuard's internal-proxy will filter-out those requests too :]


If you're paranoid you can add those domains too:
<pre>
alpha-chromecontentsuggestions.googleapis.com
alpha-chromecontentsuggestions.sandbox.googleapis.com
alpha-chromecontentsuggestions-pa.googleapis.com
alpha-chromecontentsuggestions-pa.sandbox.googleapis.com
beta-chromecontentsuggestions-pa.googleapis.com
beta-chromecontentsuggestions-pa.sandbox.googleapis.com
chromecontentsuggestions.googleapis.com
chromecontentsuggestions.sandbox.googleapis.com
chromecontentsuggestions-pa.googleapis.com
chromecontentsuggestions-pa.sandbox.googleapis.com
chromereader-pa.googleapis.com
chromereader-pa.sandbox.googleapis.com
prod-chromecontentsuggestions-pa.googleapis.com
prod-chromecontentsuggestions-pa.sandbox.googleapis.com
staging-chromecontentsuggestions-pa.googleapis.com
staging-chromecontentsuggestions-pa.sandbox.googleapis.com
test-chromecontentsuggestions-pa.googleapis.com
testing-chromecontentsuggestions-pa.googleapis.com
testing-chromecontentsuggestions-pa.sandbox.googleapis.com
</pre>

with the 127.0.0.1 or 0.0.0.0 prefix of your choice...

:]
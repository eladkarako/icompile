<!--more-->
read more: http://kb.mozillazine.org/About:config_entries

<pre>
about:config
</pre>

disable DNS cache
(add new number item when needed)
<pre>
network.dnsCacheExpiration=0
network.dnsCacheEntries=0
</pre>

optionally followed with
<pre>
ipconfig /flushdns
net stop dnscache
net start dnscache
</pre>

<hr/>
<pre>
browser.shell.checkDefaultBrowser            [boolean]   false   (false) // Disable checking if firefox is default browser
browser.sessionstore.resume_from_crash       [boolean]   false   (true) // Disable restoring session
xpinstall.signatures.required                [boolean]   false   (not exist) // Disable extension signature check
extensions.lastAppVersion                    [string ]   ""      (3.6.28)// Disable Add-ons compatibility checking

//////extensions.autoDisableScopes                 [integer]   0       (not exist)// Allow extensions to be installed without user prompt
//////extensions.enabledScopes                     [integer]   15      (not exist)

extensions.update.autoUpdate  false (false) //explicit do not automatically download and install available updates
extensions.update.autoUpdateEnabled  false (true) //no automatic checking for updates at the specified interval (must click check) - saves some processing cpu..
app.update.enabled                           [boolean]   false   (true)// Disable updater
app.update.auto                              [boolean]   false   (true)
app.update.mode                              [integer]   0       (1)
app.update.service.enabled                   [boolean]   false   (not exist)
app.update.url                               [string ]   "https://0.0.0.0/" (https://aus2.mozilla.org/update/3/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml)
plugins.hide_infobar_for_outdated_plugin     [boolean]   true    (false) // Disable plugin checking
plugins.update.url                           [string ]   "https://0.0.0.0/"      (https://www.mozilla.com/%LOCALE%/plugincheck/)

browser.showQuitWarning                      [boolean]   false  (not exist) // Prevent closing dialogs
browser.warnOnQuit                           [boolean]   false  (true)
browser.tabs.warnOnClose                     [boolean]   false  (true)
browser.tabs.warnOnCloseOtherTabs            [boolean]   false  (not exist)

browser.rights.3.shown                       [boolean]   true    (not exist) // Don't show 'know your rights' on first run
datareporting.healthreport.service.enabled   [boolean]   false   (not exist) // Disable health reporter
datareporting.policy.dataSubmissionEnabled   [boolean]   false   (not exist) // Disable all data upload (Telemetry and FHR)

toolkit.crashreporter.enabled                [boolean]   false   (not exist) // Disable crash reporter
breakpad.reportURL                           [string ]   "https://0.0.0.0/" (http://crash-stats.mozilla.com/report/index/)  // disable crash reports
security.warn_leaving_secure                 [boolean]   true    (false)     // warn when leaving secure domain to insecure
security.warn_submit_insecure                [boolean]   true    (false)     // warn when submitting data to insecure domain
devtools.chrome.enabled                      [boolean]   true    (not exist) // Browser Console command line</pre>

<pre>
browser.cache.disk.enable                    [boolean]   false   // Browser cache
browser.cache.disk_cache_ssl                 [boolean]   false
browser.cache.memory.enable                  [boolean]   false
browser.cache.offline.capacity               [integer]   0
browser.cache.offline.enable                 [boolean]   false
image.cache.size                             [integer]   0
media.cache_size                             [integer]   0
network.buffer.cache.count                   [integer]   0              (24)
network.buffer.cache.size                    [integer]   0              (4096)
network.http.use-cache                       [boolean]   false
browser.cache.disk.capacity                  [integer]   0              (51200)
browser.cache.check_doc_frequency            1                        (3) // Make browser to skip cache on each reload.
</pre>


<pre>
browser.urlbar.doubleClickSelectsAll true  (false)
accessibility.blockautorefresh       true (false) // prevent browser from auto refresh, show confirm
accessibility.browsewithcaret        true (false) // easier navigation with cursor keys in pages
browser.bookmarks.max_backups        1    (5)    // less bookmarks backsups
browser.bookmarks.restore_default_bookmarks  false (not exist) // explicit turn off bookmark restore/reset default on safe-mode
browser.startup.homepage             https://www.google.co.il/ (resource:/browserconfig.properties) //change the home page [a.k.a first tab]

general.smoothScroll                  true  (false)   // allow smooth scroll on pages
accelerometer.enabled                 false (true)    // not used in desktop anyway..
</pre>

might not be useful, if you like the default way firefox url bar works
<pre>
browser.urlbar.clickSelectsAll        false (true)    // so you could select just one word if you want
browser.urlbar.doubleClickSelectsAll  true  (false)   // dblclk nav-bar
browser.urlbar.autoFill               true  (false)   // autofill the first autocomplete 
browser.fullscreen.autohide     false (true) //still show tabs on full screen
</pre>

you can enable windows 7 feature using: http://www.sevenforums.com/tutorials/52265-taskbar-thumbnail-previews-enable-disable.html
then activate the preview and taskbar preview. might have performances-impact.
<pre>
browser.allTabs.previews              true  (false)   // add an additional "List all Tabs" or "Preview all tab" button, use click+[CTRL] to get list and without [CTRL] for the preview.
browser.taskbar.previews.enable       true  (false)   // allow preview support on operation-systems such as windows 7+
</pre>

<pre>
browser.blink_allowed                 false (true) // do not allow css feature  "text-decoration: blink"
browser.download.manager.closeWhenDone  true (false) //close the download manager when all downloads are done
browser.enable_automatic_image_resizing  false (true)  //show images as is
</pre>

<pre>
network.standard-url.encode-query-utf8  true (false) //keep Unicode chars safe on send
browser.history.showSessions            true (false) // allow grouping history by sessions for easier browsing
//////browser.history.grouping    [string ]  "Host name"  ("day")  // allow grouping by domain, together with show sessions it is very helpful 

browser.search.defaulturl       [string]  "https://www.google.co.il/search?q=" ("http://www.google.com/search?lr=&ie=UTF-8&oe=UTF-8&q=")
keyword.URL                     [string] "https://www.google.co.il/search?q=" ("http://www.google.com/search?ie=UTF-8&oe=UTF-8&sourceid=navclient&gfns=1&q=")

browser.shell.checkDefaultBrowser   boolean false (true) // don't show alert of firefox not being default browser
</pre>

<pre>
browser.turbo.enabled   boolean true (not exist, false)  

Determined whether to load browser in "Turbo Mode" (aka "quick launch") (Windows/Mozilla Suite only)
True: Load some Mozilla code into memory on Windows boot
False (default): Load browser normally on program execution
</pre>

<pre>
browser.urlbar.matchBehavior  integer 0  (not exist, 1)  //Search anywhere within available text, irrespective of word boundaries
browser.urlbar.search.timeout  integer 10 (not exist, 100) //faster autocomplete in the url-bar

browser.windows.loadOnNewWindow  integer 0 (not exist, 1)  // instead of home-page, open empty page on new windows

config.trim_on_minimize  boolean true (not exist, false)  // unload some stuff from memory to disk while window is minimized, might create a small delay when restoring the window.

config.use_system_prefs  boolean true (false)  // prefer to use the system proxy and accessibility features instead of defining them on firefox itself, helps using fiddler and other proxy listeners. if you don't care about 'accessibility' settings from the os, keep 'config.use_system_prefs.accessibility' false.

config.use_system_prefs.accessibility  boolean true (false)  //prefer to use accessibility settings such as theme, or special devices, as defined by the operation system.
</pre>

<pre>
// override the author's settings and ensure that that feature is enabled and present in any popup window.
dom.disable_window_open_feature.close         true  // Prevents the close button from being disabled.
dom.disable_window_open_feature.directories   true  // Prevents the bookmarks toolbar from being hidden.
dom.disable_window_open_feature.location      true  // Prevents the address bar from being hidden
dom.disable_window_open_feature.menubar      true  // Prevents the menubar from being hidden.
dom.disable_window_open_feature.minimizable      true  // Prevents popup window minimization from being disabled.
dom.disable_window_open_feature.personalbar      true  // Prevents the bookmarks toolbar from being hidden.
dom.disable_window_open_feature.resizable      true  // Prevents popup window resizing from being disabled.
dom.disable_window_open_feature.scrollbars      true  // Prevents the scrollbars on a popup from being disabled.
dom.disable_window_open_feature.status      true  // Prevents the status bar from being hidden.
dom.disable_window_open_feature.titlebar      true  // Prevents the title bar from being hidden.
dom.disable_window_open_feature.toolbar      true  // Prevents the navigation toolbar from being hidden.
</pre>

<pre>
dom.ipc.plugins.enabled                  true (false in version < 4.0)  run plugins in a separate "plugin-container" process. 
dom.ipc.plugins.enabled.timeoutSecs      -1 (45)  don't kill the plugin-container. ever.

dom.max_chrome_script_run_time   integer  60  (20) //allow longer run from scripts both browser and page
dom.max_script_run_time          integer  60  (10)

dom.popup_maximum              1 (20)  // maximum amount of popups a page can open at once
</pre>

<pre>
editor.background_color "#F0F0F0" boolean by docs, but I think it's a string (#FFFFFF) //editor slightly darker white

editor.singleLine.pasteNewlines  integer  0 //Paste content intact (include newlines)

(0 default in Linux): Paste content intact (include newlines)
(1 default everywhere else): Paste the content only up to (but not including) the first newline

</pre>


<pre>
extensions.checkCompatibility      false (not set, true)  //generic disable extension compatibility checking
extensions.checkCompatibility.3.6  false (not set, true)  // using extensions.checkCompatibility.x.yy including the letter (a, b, pre) but not the 3rd number: Firefox 3.6.6 -> extensions.checkCompatibility.3.6

extensions.checkUpdateSecurity  false  (not set, true)  // allow insecure updates, update.rdf from insecure server.
extensions.disabledObsolete false (not set, true)  //avoid disabling old plugins/extension
</pre>

<pre>
geo.enabled false (true) //more secure browsing
</pre>

<pre>
network.http.max-connections                              int     (30)     -> 128
network.http.max-connections-per-server                   int     (15)     -> 32
network.http.max-persistent-connections-per-server        int     (6)      -> 16
network.http.max-persistent-connections-per-proxy         int     (8)      -> 32
network.http.pipelining                                   boolean (false)  -> true   //faster connection
network.http.pipelining.maxrequests                       int     (4)      -> 16
network.http.pipelining.ssl                               boolean (false)  -> true   //faster connection
network.http.proxy.pipelining                             boolean (false)  -> true   //faster connection
network.http.pipelining.firstrequest                      boolean (false, not exist) -> true //faster opening connection

nglayout.initialpaint.delay                               int     (250)    -> 10     //faster draw
ui.submenuDelay                                           int     (os depand not exist)    -> 100     //delay from hover to action

network.dnsCacheExpiration                                int (60, not exist) -> 300          //The number of seconds to cache DNS results. (Default: 60) 300 == 5 minutes
network.dnsCacheEntries                                   int (20, not exist) -> 100          //The number of DNS results to cache. (Default: 20) 
</pre>

<pre>
//more secure
network.http.sendRefererHeader                            int (2)                   -> 0      // 0 Never send the Referer header or set document.referrer. 1 Send the Referer header when clicking on a link, and set document.referrer for the following page.  2 Send the Referer header when clicking on a link or loading an image, and set document.referrer for the following page. (Default) 
network.http.sendSecureXSiteReferrer                      boolean (true)            -> false  // Don't send the Referer header when navigating from a https site to another https site. 
browser.send_pings                                        boolean (true, not exist) -> false  // don't send pings
network.http.redirection-limit                            int (20)                  -> 3
privacy.popups.disable_from_plugins                       int (not exist)           -> 2     //Block all plugin initiated popups. (whitelisted sites will still be able to open popups) (Default in Firefox 1.5 and above and SeaMonkey) 
network.dns.disableIPv6                                   boolean (false)           -> true
</pre>
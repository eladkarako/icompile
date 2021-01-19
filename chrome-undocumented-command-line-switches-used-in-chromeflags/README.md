initially I've run those few command-line switches to re-enable FLASH support, on Chromium, and accessed the chrome://flags to make other modifications 

while executing the main chrome.exe manually it will create a sub-process (which is the main processing thread) with the switches above, and those from the chrome:flags..


--blink-settings=lowPriorityIframes=true
--disable-encrypted-media
--disable-media-source
--enable-experimental-canvas-features
--enable-experimental-web-platform-features
--enable-icon-ntp
--enable-lcd-text
--enable-prefixed-encrypted-media
--enable-smooth-scrolling
--reduced-referrer-granularity
--site-per-process
--lang=en-US
--enable-webrtc-hw-h264-encoding
--show-saved-copy=disable
--enable-suggestions-with-substring-match
--enable-experimental-extension-apis
--disable-bundled-ppapi-flash
--disable-javascript-harmony-shipping
--disable-new-bookmark-apps
--enable-nacl
--javascript-harmony
--ppapi-flash-path="C:\\Windows\\System32\\Macromed\\Flash\\PEPFLA~1.DLL"
--ppapi-flash-version=17.0.0.93
--device-scale-factor=1
--num-raster-threads=4
<!--more-->


&nbsp;

&nbsp;

<hr />

&nbsp;

&nbsp;
<div id="flagsExperimentTemplate">
<div id="container" class="vbox-container">
<div id="top" class="wbox">
<div class="section-header">
<table cellspacing="0" cellpadding="0">
<tbody>
<tr valign="center">
<td><span class="section-header-title">Experiments</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="content">
<div>
<div id="ignore-gpu-blacklist" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Override software rendering list</span> Mac, Windows, Linux, Chrome OS, Android
<div>Overrides the built-in software rendering list and enables GPU-acceleration on unsupported system configurations. <a class="permalink" href="chrome://flags/#ignore-gpu-blacklist">#ignore-gpu-blacklist</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-direct-write" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable DirectWrite</span> Windows
<div>Disables the use of experimental DirectWrite font rendering system. <a class="permalink" href="chrome://flags/#disable-direct-write">#disable-direct-write</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-experimental-canvas-features" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable experimental canvas features</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enables the use of experimental canvas features which are still in development. <a class="permalink" href="chrome://flags/#enable-experimental-canvas-features">#enable-experimental-canvas-features</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-accelerated-2d-canvas" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable accelerated 2D canvas</span> Mac, Windows, Linux, Chrome OS, Android
<div>Disables the use of the GPU to perform 2d canvas rendering and instead uses software rendering. <a class="permalink" href="chrome://flags/#disable-accelerated-2d-canvas">#disable-accelerated-2d-canvas</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-display-list-2d-canvas" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable display list 2D canvas</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enables the use of display lists to record 2D canvas commands. This allows 2D canvas rasterization to be performed on separate thread. <a class="permalink" href="chrome://flags/#enable-display-list-2d-canvas">#enable-display-list-2d-canvas</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="composited-layer-borders" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Composited render layer borders</span> Mac, Windows, Linux, Chrome OS, Android
<div>Renders a border around composited Render Layers to help debug and study layer compositing. <a class="permalink" href="chrome://flags/#composited-layer-borders">#composited-layer-borders</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="show-fps-counter" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">FPS counter</span> Mac, Windows, Linux, Chrome OS, Android
<div>Shows a page's actual frame rate, in frames per second, when hardware acceleration is active. <a class="permalink" href="chrome://flags/#show-fps-counter">#show-fps-counter</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-webrtc-stun-origin" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable support for WebRTC Stun origin header.</span> Mac, Windows, Linux, Chrome OS, Android
<div>When enabled, Stun messages generated by WebRTC will contain the Origin header. <a class="permalink" href="chrome://flags/#enable-webrtc-stun-origin">#enable-webrtc-stun-origin</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-nacl" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Native Client</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enable Native Client for all web applications, even those that were not installed from the Chrome Web Store. <a class="permalink" href="chrome://flags/#enable-nacl">#enable-nacl</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-nacl-debug" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Native Client GDB-based debugging</span> Mac, Windows, Linux, Chrome OS
<div>Enable GDB debug stub. This will stop a Native Client application on startup and wait for nacl-gdb (from the NaCl SDK) to attach to it. <a class="permalink" href="chrome://flags/#enable-nacl-debug">#enable-nacl-debug</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="nacl-debug-mask" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Restrict Native Client GDB-based debugging by pattern</span> Mac, Windows, Linux, Chrome OS
<div>Restricts Native Client application GDB-based debugging by URL of manifest file. Native Client GDB-based debugging must be enabled for this option to work. <a class="permalink" href="chrome://flags/#nacl-debug-mask">#nacl-debug-mask</a></div>
<div><select class="experiment-select">
<option>Debug everything except secure shell and the PNaCl translator.</option>
<option>Debug everything.</option>
<option>Debug only if manifest URL ends with debug.nmf.</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="extension-apis" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Experimental Extension APIs</span> Mac, Windows, Linux, Chrome OS
<div>Enables experimental extension APIs. Note that the extension gallery doesn't allow you to upload extensions that use experimental APIs. <a class="permalink" href="chrome://flags/#extension-apis">#extension-apis</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="extensions-on-chrome-urls" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Extensions on chrome:// URLs</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enables running extensions on chrome:// URLs, where extensions explicitly request this permission. <a class="permalink" href="chrome://flags/#extensions-on-chrome-urls">#extensions-on-chrome-urls</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-fast-unload" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable fast tab/window close</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enables fast tab/window closing - runs a tab's onunload js handler independently of the GUI. <a class="permalink" href="chrome://flags/#enable-fast-unload">#enable-fast-unload</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-app-window-controls" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable 'window-controls' element</span> Mac, Windows, Linux, Chrome OS
<div>Enables using 'window-controls' HTML elements in packaged apps. <a class="permalink" href="chrome://flags/#enable-app-window-controls">#enable-app-window-controls</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-hyperlink-auditing" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable hyperlink auditing</span> Mac, Windows, Linux, Chrome OS, Android
<div>Disable sending hyperlink auditing pings. <a class="permalink" href="chrome://flags/#disable-hyperlink-auditing">#disable-hyperlink-auditing</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="show-autofill-type-predictions" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Show Autofill predictions</span> Mac, Windows, Linux, Chrome OS, Android
<div>Annotates web forms with Autofill field type predictions as placeholder text. <a class="permalink" href="chrome://flags/#show-autofill-type-predictions">#show-autofill-type-predictions</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-smooth-scrolling" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Smooth Scrolling</span> Windows, Linux
<div>Enable the experimental smooth scrolling implementation. <a class="permalink" href="chrome://flags/#enable-smooth-scrolling">#enable-smooth-scrolling</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="overlay-scrollbars" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Overlay Scrollbars</span> Windows, Linux, Chrome OS
<div>Enable the experimental overlay scrollbars implementation. You must also enable threaded compositing to have the scrollbars animate. <a class="permalink" href="chrome://flags/#overlay-scrollbars">#overlay-scrollbars</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-panels" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Panels</span> Mac, Windows, Linux, Chrome OS
<div>Enable Panel windows that open outside of the browser frame. Attempts to open a Panel will open a popup instead if not enabled. Panels are always enabled on the dev and canary channels. <a class="permalink" href="chrome://flags/#enable-panels">#enable-panels</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="save-page-as-mhtml" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Save Page as MHTML</span> Mac, Windows, Linux
<div>Enables saving pages as MHTML: a single text file containing HTML and all sub-resources. <a class="permalink" href="chrome://flags/#save-page-as-mhtml">#save-page-as-mhtml</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-quic" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Experimental QUIC protocol.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enable experimental QUIC protocol support. <a class="permalink" href="chrome://flags/#enable-quic">#enable-quic</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-alternative-services" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Alternative services.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enable support for Alternative Services, an experimental HTTP feature. <a class="permalink" href="chrome://flags/#enable-alternative-services">#enable-alternative-services</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-media-source" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable Media Source API.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Disable the MediaSource object. This object allows JavaScript to send media data directly to a video element. <a class="permalink" href="chrome://flags/#disable-media-source">#disable-media-source</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-encrypted-media" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable Encrypted Media Extensions.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Disable Encrypted Media Extensions on video and audio elements. <a class="permalink" href="chrome://flags/#disable-encrypted-media">#disable-encrypted-media</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-prefixed-encrypted-media" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable prefixed Encrypted Media Extensions.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enable the deprecated version of Encrypted Media Extensions on video and audio elements. <a class="permalink" href="chrome://flags/#enable-prefixed-encrypted-media">#enable-prefixed-encrypted-media</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-javascript-harmony-shipping" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable latest stable JavaScript features</span> Mac, Windows, Linux, Chrome OS, Android
<div>Some web pages use legacy or non-standard JavaScript extensions that may conflict with the latest JavaScript features. This flag disables support of those features for compatibility with such pages. <a class="permalink" href="chrome://flags/#disable-javascript-harmony-shipping">#disable-javascript-harmony-shipping</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-javascript-harmony" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Experimental JavaScript</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enable web pages to use experimental JavaScript features. <a class="permalink" href="chrome://flags/#enable-javascript-harmony">#enable-javascript-harmony</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-gpu-rasterization" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable GPU rasterization.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Use GPU to rasterize web content. Requires impl-side painting. <a class="permalink" href="chrome://flags/#enable-gpu-rasterization">#enable-gpu-rasterization</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
<option>Force-enabled for all layers</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="gpu-rasterization-msaa-sample-count" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">GPU rasterization MSAA sample count.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Specify the number of MSAA samples for GPU rasterization. <a class="permalink" href="chrome://flags/#gpu-rasterization-msaa-sample-count">#gpu-rasterization-msaa-sample-count</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>0</option>
<option>2</option>
<option>4</option>
<option>8</option>
<option>16</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-slimming-paint-v2" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable slimming paint phase 2.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enable slimming paint phase 2 (display list based layerization, sub-tree painting optimization, etc.) <a class="permalink" href="chrome://flags/#enable-slimming-paint-v2">#enable-slimming-paint-v2</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-experimental-web-platform-features" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable experimental Web Platform features.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enable experimental Web Platform features that are in development. <a class="permalink" href="chrome://flags/#enable-experimental-web-platform-features">#enable-experimental-web-platform-features</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-web-bluetooth" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Web Bluetooth.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enables Web Bluetooth which could allow websites to connect to and control Bluetooth devices around you. Including keyboards, cameras, microphones, etc. <a class="permalink" href="chrome://flags/#enable-web-bluetooth">#enable-web-bluetooth</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-devtools-experiments" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Developer Tools experiments.</span> Mac, Windows, Linux, Chrome OS
<div>Enable Developer Tools experiments. Use Settings panel in Developer Tools to toggle individual experiments. <a class="permalink" href="chrome://flags/#enable-devtools-experiments">#enable-devtools-experiments</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="silent-debugger-extension-api" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Silent Debugging.</span> Mac, Windows, Linux, Chrome OS
<div>Do not show the infobar when an extension attaches to a page via chrome.debugger API. This flag is required to debug extension background pages. <a class="permalink" href="chrome://flags/#silent-debugger-extension-api">#silent-debugger-extension-api</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="spellcheck-autocorrect" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Automatic Spelling Correction</span> Windows, Linux, Chrome OS
<div>Turn on autocorrection of text while typing. Synchronous spellchecking is not compatible with this feature. <a class="permalink" href="chrome://flags/#spellcheck-autocorrect">#spellcheck-autocorrect</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-multilingual-spellchecker" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Multilingual Spellchecker</span> Windows, Linux, Chrome OS
<div>Turn on support for spellchecking in multiple languages at the same time. <a class="permalink" href="chrome://flags/#enable-multilingual-spellchecker">#enable-multilingual-spellchecker</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-scroll-prediction" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable scroll prediction</span> Mac, Windows, Linux, Chrome OS
<div>Predicts the finger's future position during scrolls allowing time to render the frame before the finger is there. <a class="permalink" href="chrome://flags/#enable-scroll-prediction">#enable-scroll-prediction</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="top-chrome-md" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Material design in the browser's top chrome</span> Windows, Linux, Chrome OS
<div>Sets the material design elements in the browser's top chrome. <a class="permalink" href="chrome://flags/#top-chrome-md">#top-chrome-md</a></div>
<div><select class="experiment-select">
<option>Non-material</option>
<option>Material</option>
<option>Material Hybrid</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="touch-events" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable touch events</span> Mac, Windows, Linux, Chrome OS
<div>Force touchscreen support to always be enabled or disabled, or to be enabled when a touchscreen is detected on startup (Automatic, the default). <a class="permalink" href="chrome://flags/#touch-events">#touch-events</a></div>
<div><select class="experiment-select">
<option>Automatic</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-touch-adjustment" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable touch adjustment.</span> Windows, Linux, Chrome OS, Android
<div>Disables touch adjustment support. Touch adjustment is the process of refining the position of a touch gesture in order to compensate for touches having poor resolution compared to a mouse. <a class="permalink" href="chrome://flags/#disable-touch-adjustment">#disable-touch-adjustment</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-download-resumption" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Download Resumption</span> Mac, Windows, Linux, Chrome OS
<div>Allow downloads that have been interrupted to be continued or restarted, using the Resume context menu item. <a class="permalink" href="chrome://flags/#enable-download-resumption">#enable-download-resumption</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="allow-nacl-socket-api" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">NaCl Socket API.</span> Mac, Windows, Linux, Chrome OS
<div>Allows applications to use NaCl Socket API. Use only to test NaCl plugins. <a class="permalink" href="chrome://flags/#allow-nacl-socket-api">#allow-nacl-socket-api</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-minimize-on-second-launcher-item-click" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disallow shelf to minimize-on-click.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Disallow the shelf to minimize a window if a shelf item gets clicked which has only a single, already active, window associated with it. <a class="permalink" href="chrome://flags/#disable-minimize-on-second-launcher-item-click">#disable-minimize-on-second-launcher-item-click</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="show-touch-hud" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Show HUD for touch points</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enables a heads-up display at the top-left corner of the screen that lists information about the touch-points on the screen. <a class="permalink" href="chrome://flags/#show-touch-hud">#show-touch-hud</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-pinch" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable pinch scale.</span> Windows, Linux, Chrome OS
<div>Enables experimental support for scale using pinch. <a class="permalink" href="chrome://flags/#enable-pinch">#enable-pinch</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-accelerated-video-decode" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable hardware-accelerated video decode.</span> Mac, Windows, Chrome OS
<div>Disables hardware-accelerated video decode where available. <a class="permalink" href="chrome://flags/#disable-accelerated-video-decode">#disable-accelerated-video-decode</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="ash-debug-shortcuts" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Debugging keyboard shortcuts</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enables additional keyboard shortcuts that are useful for debugging Chromium. <a class="permalink" href="chrome://flags/#ash-debug-shortcuts">#ash-debug-shortcuts</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="debug-packed-apps" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable debugging for packed apps.</span> Mac, Windows, Linux, Chrome OS
<div>Enables debugging context menu options such as Inspect Element for packed applications. <a class="permalink" href="chrome://flags/#debug-packed-apps">#debug-packed-apps</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-password-generation" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable password generation.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Allow the user to have Chrome generate passwords when it detects account creation pages. <a class="permalink" href="chrome://flags/#enable-password-generation">#enable-password-generation</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-automatic-password-saving" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Save passwords automatically.</span> Mac, Windows, Linux, Chrome OS
<div>Skip the passwords prompt and save passwords automatically. <a class="permalink" href="chrome://flags/#enable-automatic-password-saving">#enable-automatic-password-saving</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="password-manager-reauthentication" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable Password Manager Reauthentication</span> Mac, Windows
<div>Disable prompting the user for their OS password before revealing passwords on the passwords page. <a class="permalink" href="chrome://flags/#password-manager-reauthentication">#password-manager-reauthentication</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-password-force-saving" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable force-saving of passwords</span> Mac, Windows, Linux, Chrome OS, Android
<div>Allow the user to manually enforce password saving instead of relying on password manager's heuristics. <a class="permalink" href="chrome://flags/#enable-password-force-saving">#enable-password-force-saving</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-password-link" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable remote password management link</span> Mac, Windows, Linux, Chrome OS, Android
<div>Show a link in the password manager settings page to manage your synced passwords online. <a class="permalink" href="chrome://flags/#enable-password-link">#enable-password-link</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-affiliation-based-matching" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable affiliation based matching in password manager.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Allow credentials stored for Android applications to be filled into corresponding websites. <a class="permalink" href="chrome://flags/#enable-affiliation-based-matching">#enable-affiliation-based-matching</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="wallet-service-use-sandbox" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Use Google Payments sandbox servers</span> Mac, Windows, Linux, Chrome OS, Android
<div>For developers: use the sandbox service for Google Payments API calls for requestAutocomplete(). <a class="permalink" href="chrome://flags/#wallet-service-use-sandbox">#wallet-service-use-sandbox</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="overscroll-history-navigation" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Overscroll history navigation</span> Mac, Windows, Linux, Chrome OS, Android
<div>Experimental history navigation in response to horizontal overscroll. <a class="permalink" href="chrome://flags/#overscroll-history-navigation">#overscroll-history-navigation</a></div>
<div><select class="experiment-select">
<option>Enabled</option>
<option>Disabled</option>
<option>Simple</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-icon-ntp" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable large icons on the New Tab page</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enable the experimental New Tab page using large icons. <a class="permalink" href="chrome://flags/#enable-icon-ntp">#enable-icon-ntp</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-touch-drag-drop" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable touch initiated drag and drop</span> Windows, Chrome OS
<div>Touch drag and drop can be initiated through long press on a draggable element. <a class="permalink" href="chrome://flags/#enable-touch-drag-drop">#enable-touch-drag-drop</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-touch-editing" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable touch based text editing</span> Windows, Linux, Chrome OS
<div>Touch editing can be initiated by tapping on a textfield or a selected text. <a class="permalink" href="chrome://flags/#enable-touch-editing">#enable-touch-editing</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-navigation-tracing" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable navigation tracing</span> Mac, Windows, Linux, Chrome OS, Android
<div>This is to be used in conjunction with the trace-upload-url flag. WARNING: When enabled, Chrome will record performance data for every navigation and upload it to the URL specified by the trace-upload-url flag. The trace may include personally identifiable information (PII) such as the titles and URLs of websites you visit. <a class="permalink" href="chrome://flags/#enable-navigation-tracing">#enable-navigation-tracing</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="trace-upload-url" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Trace label for navigation tracing</span> Mac, Windows, Linux, Chrome OS, Android
<div>This is to be used in conjunction with the enable-navigation-tracing flag. Please select the label that best describes the recorded traces. This will choose the destination the traces are uploaded to. If you are not sure, select other. If left empty, no traces will be uploaded. <a class="permalink" href="chrome://flags/#trace-upload-url">#trace-upload-url</a></div>
<div><select class="experiment-select">
<option>Disabled</option>
<option>Other</option>
<option>emloading</option>
<option>QA</option>
<option>Testing</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-suggestions-with-substring-match" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Substring matching for Autofill suggestions.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Match Autofill suggestions based on substrings (token prefixes) rather than just prefixes. <a class="permalink" href="chrome://flags/#enable-suggestions-with-substring-match">#enable-suggestions-with-substring-match</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-supervised-user-managed-bookmarks-folder" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable managed bookmarks for supervised users</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enable the managed bookmarks folder for supervised users. <a class="permalink" href="chrome://flags/#enable-supervised-user-managed-bookmarks-folder">#enable-supervised-user-managed-bookmarks-folder</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-sync-app-list" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable App Launcher sync</span> Mac, Windows, Linux, Chrome OS
<div>Enable App Launcher sync. This also enables Folders where available (non OSX). <a class="permalink" href="chrome://flags/#enable-sync-app-list">#enable-sync-app-list</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="lcd-text-aa" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">LCD text antialiasing</span> Mac, Windows, Linux, Chrome OS
<div>If disabled, text is rendered with grayscale antialiasing instead of LCD (subpixel) when doing accelerated compositing. <a class="permalink" href="chrome://flags/#lcd-text-aa">#lcd-text-aa</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-offer-store-unmasked-wallet-cards" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Google Payments card saving checkbox</span> Mac, Windows, Linux, Chrome OS, Android
<div>Show the checkbox to offer local saving of a credit card downloaded from the server. <a class="permalink" href="chrome://flags/#enable-offer-store-unmasked-wallet-cards">#enable-offer-store-unmasked-wallet-cards</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-offline-auto-reload" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Offline Auto-Reload Mode</span> Mac, Windows, Linux, Chrome OS, Android
<div>Pages that fail to load while the browser is offline will be auto-reloaded when the browser is online again. <a class="permalink" href="chrome://flags/#enable-offline-auto-reload">#enable-offline-auto-reload</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-offline-auto-reload-visible-only" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Only Auto-Reload Visible Tabs</span> Mac, Windows, Linux, Chrome OS, Android
<div>Pages that fail to load while the browser is offline will only be auto-reloaded if their tab is visible. <a class="permalink" href="chrome://flags/#enable-offline-auto-reload-visible-only">#enable-offline-auto-reload-visible-only</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="show-saved-copy" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Show Saved Copy Button</span> Mac, Windows, Linux, Chrome OS, Android
<div>When a page fails to load, if a stale copy of the page exists in the browser cache, a button will be presented to allow the user to load that stale copy. The primary enabling choice puts the button in the most salient position on the error page; the secondary enabling choice puts it secondary to the reload button. <a class="permalink" href="chrome://flags/#show-saved-copy">#show-saved-copy</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enable: Primary</option>
<option>Enable: Secondary</option>
<option>Disable</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="default-tile-width" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Default tile width</span> Mac, Windows, Linux, Chrome OS, Android
<div>Specify the default tile width. <a class="permalink" href="chrome://flags/#default-tile-width">#default-tile-width</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>128</option>
<option>256</option>
<option>512</option>
<option>1024</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="default-tile-height" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Default tile height</span> Mac, Windows, Linux, Chrome OS, Android
<div>Specify the default tile height. <a class="permalink" href="chrome://flags/#default-tile-height">#default-tile-height</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>128</option>
<option>256</option>
<option>512</option>
<option>1024</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-simple-cache-backend" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Simple Cache for HTTP.</span> Mac, Windows, Linux, Chrome OS
<div>The Simple Cache for HTTP is a new cache. It relies on the filesystem for disk space allocation. <a class="permalink" href="chrome://flags/#enable-simple-cache-backend">#enable-simple-cache-backend</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Disabled</option>
<option>Enabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="device-discovery-notifications" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Device Discovery Notifications</span> Mac, Windows, Linux, Chrome OS
<div>Device discovery notifications on local network. <a class="permalink" href="chrome://flags/#device-discovery-notifications">#device-discovery-notifications</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-print-preview-register-promos" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Print Preview Registration Promos</span> Mac, Windows, Linux, Chrome OS
<div>Enable registering unregistered cloud printers from print preview. <a class="permalink" href="chrome://flags/#enable-print-preview-register-promos">#enable-print-preview-register-promos</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-cloud-print-xps" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable XPS in Google Cloud Print</span> Windows
<div>XPS enables advanced options for classic printers connected to the Cloud Print with Chrome. Printers must be re-connected after changing this flag. <a class="permalink" href="chrome://flags/#enable-cloud-print-xps">#enable-cloud-print-xps</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="tab-capture-upscale-quality" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Tab capture upscaling quality.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Specifies quality setting for images captured if scaling up. <a class="permalink" href="chrome://flags/#tab-capture-upscale-quality">#tab-capture-upscale-quality</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>fast</option>
<option>good</option>
<option>best</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="tab-capture-downscale-quality" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Tab capture downscaling quality.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Specifies quality setting for images captured if scaling down. <a class="permalink" href="chrome://flags/#tab-capture-downscale-quality">#tab-capture-downscale-quality</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>fast</option>
<option>good</option>
<option>best</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-hide-inactive-stacked-tab-close-buttons" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable hiding close buttons on inactive tabs when stacked</span> Windows, Linux, Chrome OS
<div>Disables hiding the close buttons of inactive tabs when the tabstrip is in stacked mode. <a class="permalink" href="chrome://flags/#disable-hide-inactive-stacked-tab-close-buttons">#disable-hide-inactive-stacked-tab-close-buttons</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-spelling-feedback-field-trial" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Spelling Feedback Field Trial.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enable the field trial for sending user feedback to spelling service. <a class="permalink" href="chrome://flags/#enable-spelling-feedback-field-trial">#enable-spelling-feedback-field-trial</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-webgl-draft-extensions" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable WebGL Draft Extensions</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enabling this option allows web applications to access the WebGL Extensions that are still in draft status. <a class="permalink" href="chrome://flags/#enable-webgl-draft-extensions">#enable-webgl-draft-extensions</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-new-profile-management" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable new profile management system</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enables the new profile management system, including profile lock and the new avatar menu UI. <a class="permalink" href="chrome://flags/#enable-new-profile-management">#enable-new-profile-management</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-account-consistency" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable identity consistency between browser and cookie jar</span> Mac, Windows, Linux, Chrome OS, Android
<div>When enabled, the browser manages signing in and out of Google accounts. <a class="permalink" href="chrome://flags/#enable-account-consistency">#enable-account-consistency</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-iframe-based-signin" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enables iframe-based Chromium sign-in flows. This flag overrides --enable-web-based-signin.</span> Mac, Windows, Linux
<div>When enabled, will use an iframe-based Chromium sign-in flow; otherwise uses a webview-based flow. <a class="permalink" href="chrome://flags/#enable-iframe-based-signin">#enable-iframe-based-signin</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-google-profile-info" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Google profile name and icon</span> Mac, Windows, Linux
<div>Enables using Google information to populate the profile name and icon in the avatar menu. <a class="permalink" href="chrome://flags/#enable-google-profile-info">#enable-google-profile-info</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="reset-app-list-install-state" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Reset the App Launcher install state on every restart.</span> Mac, Windows, Linux
<div>Reset the App Launcher install state on every restart. While this flag is set, Chrome will forget the launcher has been installed each time it starts. This is used for testing the App Launcher install flow. <a class="permalink" href="chrome://flags/#reset-app-list-install-state">#reset-app-list-install-state</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-zero-copy" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable zero-copy rasterizer</span> Mac, Windows, Linux, Chrome OS, Android
<div>If enabled, raster threads write directly to GPU memory associated with tiles. <a class="permalink" href="chrome://flags/#enable-zero-copy">#enable-zero-copy</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-new-bookmark-apps" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable the new bookmark app system.</span> Mac, Windows, Linux, Chrome OS
<div>Enables the new system for creating bookmark apps. <a class="permalink" href="chrome://flags/#disable-new-bookmark-apps">#disable-new-bookmark-apps</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-ephemeral-apps-in-webstore" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable experimental ephemeral apps from the webstore.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enables ephemeral apps, which are launched without installing in Chrome, to be launched from the Chrome WebStore. Requires the experimental App Launcher to be enabled. <a class="permalink" href="chrome://flags/#enable-ephemeral-apps-in-webstore">#enable-ephemeral-apps-in-webstore</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-views-rect-based-targeting" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable rect-based targeting in views</span> Windows, Linux, Chrome OS
<div>Disables rect-based targeting in views. Rect-based targeting uses a heuristic to determine the most probable target of a gesture, where the touch region is represented by a rectangle. <a class="permalink" href="chrome://flags/#disable-views-rect-based-targeting">#disable-views-rect-based-targeting</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-link-disambiguation-popup" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Link Disambiguation Popup.</span> Windows, Chrome OS
<div>Enable the zoomed bubble that appears on touchscreens when accidentally touching more than one link at a time. <a class="permalink" href="chrome://flags/#enable-link-disambiguation-popup">#enable-link-disambiguation-popup</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-apps-show-on-first-paint" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable show-on-first-paint for apps.</span> Mac, Windows, Linux, Chrome OS
<div>Show apps windows after the first paint. Windows will be shown significantly later for heavy apps loading resources synchronously but it will be insignificant for apps that load most of their resources asynchronously. <a class="permalink" href="chrome://flags/#enable-apps-show-on-first-paint">#enable-apps-show-on-first-paint</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enhanced-bookmarks-experiment" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Enhanced Bookmarks</span> Mac, Windows, Linux, Chrome OS, Android
<div>Provides an off switch for enhanced bookmarks experiment <a class="permalink" href="chrome://flags/#enhanced-bookmarks-experiment">#enhanced-bookmarks-experiment</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="num-raster-threads" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Number of raster threads</span> Mac, Windows, Linux, Chrome OS, Android
<div>Specify the number of raster threads. <a class="permalink" href="chrome://flags/#num-raster-threads">#num-raster-threads</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-single-click-autofill" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable single-click autofill</span> Mac, Windows, Linux, Chrome OS, Android
<div>Make autofill suggestions on initial mouse click on a form element. <a class="permalink" href="chrome://flags/#enable-single-click-autofill">#enable-single-click-autofill</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-site-engagement-service" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Site Engagement Service</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enables the Site Engagement Service, which records interaction with sites and allocates resources accordingly. <a class="permalink" href="chrome://flags/#enable-site-engagement-service">#enable-site-engagement-service</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-session-crashed-bubble" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable session restore bubble UI.</span> Windows, Linux
<div>If enabled, the session restore UI will be shown in a bubble instead of an info bar. <a class="permalink" href="chrome://flags/#enable-session-crashed-bubble">#enable-session-crashed-bubble</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-pdf-material-ui" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable material UI for PDF.</span> Mac, Windows, Linux, Chrome OS
<div>Enable the new material UI in the PDF Viewer. <a class="permalink" href="chrome://flags/#enable-pdf-material-ui">#enable-pdf-material-ui</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-cast-streaming-hw-encoding" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable support for Cast Streaming hardware video encoding.</span> Mac, Windows, Linux, Chrome OS, Android
<div>This option disables support in Cast Streaming for encoding video streams using platform hardware. <a class="permalink" href="chrome://flags/#disable-cast-streaming-hw-encoding">#disable-cast-streaming-hw-encoding</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-experimental-app-list" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable the experimental App Launcher.</span> Windows, Linux, Chrome OS
<div>Enable the experimental version of the App Launcher. <a class="permalink" href="chrome://flags/#enable-experimental-app-list">#enable-experimental-app-list</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-centered-app-list" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Center the App Launcher.</span> Windows, Linux, Chrome OS
<div>Positions the App Launcher in the center of the screen with a landscape aspect. <a class="permalink" href="chrome://flags/#enable-centered-app-list">#enable-centered-app-list</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-new-app-list-mixer" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable the new App Launcher mixer algorithm.</span> Mac, Windows, Linux, Chrome OS
<div>This enables a new search result selecting and ranking algorithm in the App Launcher. <a class="permalink" href="chrome://flags/#enable-new-app-list-mixer">#enable-new-app-list-mixer</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-threaded-scrolling" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable threaded scrolling.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Disabled threaded handling of scroll-related input events, forcing all such scroll events to be handled on the main thread. Note that this can dramatically hurt scrolling performance of most websites and is intended for testing purposes only. <a class="permalink" href="chrome://flags/#disable-threaded-scrolling">#disable-threaded-scrolling</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="inert-visual-viewport" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Inert visual viewport.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Experiment to have all APIs reflect the layout viewport. This will make window.scroll properties relative to the layout viewport. <a class="permalink" href="chrome://flags/#inert-visual-viewport">#inert-visual-viewport</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-settings-window" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Show settings in a window</span> Mac, Windows, Linux, Chrome OS
<div>If enabled, Settings will be shown in a dedicated window instead of as a browser tab. <a class="permalink" href="chrome://flags/#enable-settings-window">#enable-settings-window</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="distance-field-text" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable distance field text</span> Mac, Windows, Linux, Chrome OS, Android
<div>If enabled, text is rendered with signed distance fields rather than bitmap alpha masks. <a class="permalink" href="chrome://flags/#distance-field-text">#distance-field-text</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="extension-content-verification" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Extension Content Verification</span> Mac, Windows, Linux, Chrome OS
<div>This flag can be used to turn on verification that the contents of the files on disk for extensions from the webstore match what they're expected to be. This can be used to turn on this feature if it would not otherwise have been turned on, but cannot be used to turn it off (because this setting can be tampered with by malware). <a class="permalink" href="chrome://flags/#extension-content-verification">#extension-content-verification</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Bootstrap (get expected hashes, but do not enforce them)</option>
<option>Enforce (try to get hashes, and enforce them if successful)</option>
<option>Enforce strict (hard fail if we can't get hashes)</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="extension-active-script-permission" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">User consent for extension scripts</span> Mac, Windows, Linux, Chrome OS, Android
<div>Require user consent for an extension running a script on the page, if the extension requested permission to run on all urls. <a class="permalink" href="chrome://flags/#extension-active-script-permission">#extension-active-script-permission</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-embedded-extension-options" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable embedded extension options.</span> Mac, Windows, Linux, Chrome OS
<div>Display extension options as an embedded element in chrome://extensions rather than opening a new tab. <a class="permalink" href="chrome://flags/#enable-embedded-extension-options">#enable-embedded-extension-options</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-web-app-frame" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enables the web app style frame for hosted apps.</span> Windows, Chrome OS
<div>Enables the web app style frame for hosted apps, including bookmark apps. This is currently only available for Ash. <a class="permalink" href="chrome://flags/#enable-web-app-frame">#enable-web-app-frame</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-drop-sync-credential" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Drop sync credentials from password manager.</span> Mac, Windows, Linux, Chrome OS, Android
<div>If enabled, the password manager will not offer to save the credential used to sync. <a class="permalink" href="chrome://flags/#enable-drop-sync-credential">#enable-drop-sync-credential</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-extension-action-redesign" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable extension toolbar redesign.</span> Mac, Windows, Linux, Chrome OS
<div>Enables the (in development) new extension toolbar toolbar design. <a class="permalink" href="chrome://flags/#enable-extension-action-redesign">#enable-extension-action-redesign</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="autofill-sync-credential" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Autofill sync credential</span> Mac, Windows, Linux, Chrome OS, Android
<div>How the password manager handles autofill for the sync credential. <a class="permalink" href="chrome://flags/#autofill-sync-credential">#autofill-sync-credential</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Allow</option>
<option>Disallow for reauth</option>
<option>Disallow</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-message-center-always-scroll-up-upon-notification-removal" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable experiments that message center always scroll up upon notification removal.</span> Mac, Windows, Linux, Chrome OS
<div>Enables experiment that message center always scroll up when a notification is removed. <a class="permalink" href="chrome://flags/#enable-message-center-always-scroll-up-upon-notification-removal">#enable-message-center-always-scroll-up-upon-notification-removal</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-tab-audio-muting" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable tab audio muting UI control.</span> Mac, Windows, Linux, Chrome OS
<div>When enabled, the audio indicators in the tab strip double as tab audio mute controls. This also adds commands in the tab context menu for quickly muting multiple selected tabs. <a class="permalink" href="chrome://flags/#enable-tab-audio-muting">#enable-tab-audio-muting</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-credential-manager-api" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable the experimental Credential Manager API.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enables an experimental implementation of the Credential Manager API. Don't enable this unless you know what you're doing. <a class="permalink" href="chrome://flags/#enable-credential-manager-api">#enable-credential-manager-api</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="reduced-referrer-granularity" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Reduce default 'referer' header granularity.</span> Mac, Windows, Linux, Chrome OS, Android
<div>If a page hasn't set an explicit referrer policy, setting this flag will reduce the amount of information in the 'referer' header for cross-origin requests. <a class="permalink" href="chrome://flags/#reduced-referrer-granularity">#reduced-referrer-granularity</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-plugin-power-saver" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Plugin Power Saver</span> Mac, Windows, Linux, Chrome OS
<div>Force on the experimental power saver mode for peripheral plugin content. Overrides content settings. <a class="permalink" href="chrome://flags/#enable-plugin-power-saver">#enable-plugin-power-saver</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-fill-on-account-select" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Fill passwords on account selection</span> Mac, Windows, Linux, Chrome OS, Android
<div>Filling of passwords when an account is explicitly selected by the user rather than autofilling credentials on page load. <a class="permalink" href="chrome://flags/#enable-fill-on-account-select">#enable-fill-on-account-select</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Disabled</option>
<option>Enable with field highlighting</option>
<option>Enable with no field highlighting</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-delay-agnostic-aec" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable Delay Agnostic AEC in WebRTC.</span> Mac, Windows, Linux, Chrome OS
<div>Disable Delay Agnostic AEC in WebRTC. Use if reported system delays are very trusted, or if others experience echo from your machine. <a class="permalink" href="chrome://flags/#disable-delay-agnostic-aec">#disable-delay-agnostic-aec</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="mark-non-secure-as" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Mark non-secure origins as non-secure</span> Mac, Windows, Linux, Chrome OS, Android
<div>Mark non-secure origins as non-secure, or as "dubious". <a class="permalink" href="chrome://flags/#mark-non-secure-as">#mark-non-secure-as</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Mark non-secure origins as neutral.</option>
<option>Mark non-secure origins as non-secure.</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-site-per-process" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable out of process iframes</span> Mac, Windows, Linux, Chrome OS, Android
<div>Highly experimental support for rendering cross-site iframes in separate processes. <a class="permalink" href="chrome://flags/#enable-site-per-process">#enable-site-per-process</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="data-reduction-proxy-lo-fi" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Data Saver Lo-Fi mode</span> Mac, Windows, Linux, Chrome OS, Android
<div>Forces Data Saver Lo-Fi mode to be always enabled, enabled only on cellular connections, or disabled. Data Saver must be enabled for Lo-Fi mode to be used. <a class="permalink" href="chrome://flags/#data-reduction-proxy-lo-fi">#data-reduction-proxy-lo-fi</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Always on</option>
<option>Cellular only</option>
<option>Disable</option>
<option>Slow connections only</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="clear-data-reduction-proxy-data-savings" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Clear data savings on startup</span> Mac, Windows, Linux, Chrome OS, Android
<div>Clears data savings obtained by using data reduction proxy when chrome starts. <a class="permalink" href="chrome://flags/#clear-data-reduction-proxy-data-savings">#clear-data-reduction-proxy-data-savings</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-data-reduction-proxy-config-client" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Data Reduction Proxy configuration service client.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Uses the Data Reduction Proxy configuration service for authentication and proxy configuration. <a class="permalink" href="chrome://flags/#enable-data-reduction-proxy-config-client">#enable-data-reduction-proxy-config-client</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="allow-insecure-localhost" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Allow invalid certificates for resources loaded from localhost.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Allows requests to localhost over HTTPS even when an invalid certificate is presented. <a class="permalink" href="chrome://flags/#allow-insecure-localhost">#allow-insecure-localhost</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-add-to-shelf" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable add to shelf</span> Mac, Windows, Linux, Chrome OS
<div>Enable the display of add to shelf banners, which prompt a user to add a web app to their shelf, or other platform-specific equivalent. <a class="permalink" href="chrome://flags/#enable-add-to-shelf">#enable-add-to-shelf</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="bypass-app-banner-engagement-checks" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Bypass user engagement checks</span> Mac, Windows, Linux, Chrome OS, Android
<div>Bypasses user engagement checks for displaying app banners, such as requiring that users have visited the site before and that the banner hasn't been shown recently. This allows developers to test that other eligibility requirements for showing app banners, such as having a manifest, are met. <a class="permalink" href="chrome://flags/#bypass-app-banner-engagement-checks">#bypass-app-banner-engagement-checks</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="use-sync-sandbox" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Use Chrome Sync sandbox</span> Mac, Windows, Linux, Chrome OS, Android
<div>Connects to the testing server for Chrome Sync. <a class="permalink" href="chrome://flags/#use-sync-sandbox">#use-sync-sandbox</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-child-account-detection" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable child account detection.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enable detection of child accounts on sign-in and startup, as well as periodically. <a class="permalink" href="chrome://flags/#enable-child-account-detection">#enable-child-account-detection</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="v8-pac-mojo-out-of-process" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Out-of-process V8 Proxy Resolver.</span> Mac, Windows, Linux, Chrome OS
<div>Enable Out-of-process V8 Proxy Resolver. Runs the V8 proxy resolver in a utility process instead of inside the browser process. <a class="permalink" href="chrome://flags/#v8-pac-mojo-out-of-process">#v8-pac-mojo-out-of-process</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-media-router" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Media Router</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enables Chrome to access external presentation-type displays and use them for presenting web content. <a class="permalink" href="chrome://flags/#enable-media-router">#enable-media-router</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="supervised-user-safesites" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Child account SafeSites filtering</span> Mac, Windows, Linux, Chrome OS, Android
<div>Enable or disable SafeSites filtering for child accounts. <a class="permalink" href="chrome://flags/#supervised-user-safesites">#supervised-user-safesites</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
<option>Static blacklist only</option>
<option>Online check only</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="scroll-top-left-interop" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Document scrolling element interoperability.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Control whether document.body.scrollTop/scrollLeft in JavaScript reflects the standard interoperable behavior (enabled) or legacy WebKit behavior (disabled). When enabled, document.scrollingElement is document.documentElement, when disabled it's document.body (for strict-mode pages). <a class="permalink" href="chrome://flags/#scroll-top-left-interop">#scroll-top-left-interop</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="try-supported-channel-layouts" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Causes audio output streams to check if channel layouts other than the default hardware layout are available.</span> Windows
<div>Causes audio output streams to check if channel layouts other than the default hardware layout are available. Turning this on will allow the OS to do stereo to surround expansion if supported. May expose third party driver bugs, use with caution. <a class="permalink" href="chrome://flags/#try-supported-channel-layouts">#try-supported-channel-layouts</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="emphasize-titles-in-omnibox-dropdown" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Emphasize titles in the omnibox dropdown</span> Mac, Windows, Linux, Chrome OS, Android
<div>Causes the omnibox dropdown to sometimes display suggestion titles more prominently than URLs. <a class="permalink" href="chrome://flags/#emphasize-titles-in-omnibox-dropdown">#emphasize-titles-in-omnibox-dropdown</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-webrtc-dtls12" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable negotiation with DTLS 1.2 for WebRTC.</span> Mac, Windows, Linux, Chrome OS, Android
<div>When enabled, WebRTC will try to negotiate DTLS 1.2. <a class="permalink" href="chrome://flags/#enable-webrtc-dtls12">#enable-webrtc-dtls12</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="v8-cache-options" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">JavaScript caching mode.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Caching mode for the V8 JavaScript engine. <a class="permalink" href="chrome://flags/#v8-cache-options">#v8-cache-options</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Disabled</option>
<option>Cache JavaScript parser data.</option>
<option>Cache JavaScript compiler data.</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-md-downloads" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Material Design downloads</span> Mac, Windows, Linux, Chrome OS
<div>If enabled, the chrome://downloads/ URL loads the Material Design downloads page. <a class="permalink" href="chrome://flags/#enable-md-downloads">#enable-md-downloads</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-tab-discarding" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable tab discarding</span> Mac, Windows
<div>If enabled, tabs get discarded from memory when the system memory is low. Discarded tabs are still visible on the tab strip and get reloaded when clicked on. <a class="permalink" href="chrome://flags/#enable-tab-discarding">#enable-tab-discarding</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-clear-browsing-data-counters" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Clear browsing data counters.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Shows data volume counters in the Clear browsing data dialog. <a class="permalink" href="chrome://flags/#enable-clear-browsing-data-counters">#enable-clear-browsing-data-counters</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="simple-clear-browsing-data-support-string" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Use a simple support string in the Clear browsing data dialog.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Instead of enumerating data types that are not deleted in the dialog, use a simple support string linking to an article with more information. <a class="permalink" href="chrome://flags/#simple-clear-browsing-data-support-string">#simple-clear-browsing-data-support-string</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-new-task-manager" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable the new task manager.</span> Mac, Windows, Linux, Chrome OS
<div>Disables the use of the new and optimized implementation of the chrome task manager. <a class="permalink" href="chrome://flags/#disable-new-task-manager">#disable-new-task-manager</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="simplified-fullscreen-ui" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Simplified fullscreen / mouse lock UI.</span> Mac, Windows, Linux, Chrome OS
<div>An experimental new user experience when entering page-triggered fullscreen or mouse pointer lock states. <a class="permalink" href="chrome://flags/#simplified-fullscreen-ui">#simplified-fullscreen-ui</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="low-priority-iframes" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-switched">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Low priority iframes.</span> Mac, Windows, Linux, Chrome OS, Android
<div>Reduces the load priority of iframe resources. <a class="permalink" href="chrome://flags/#low-priority-iframes">#low-priority-iframes</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-disable-link" href="chrome://flags/#">Disable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="trace-export-events-to-etw" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable exporting of tracing events to ETW.</span> Windows
<div>If enabled, trace events will be exported to the Event Tracing for Windows (ETW) and can then be captured by tools such as UIForETW or Xperf. <a class="permalink" href="chrome://flags/#trace-export-events-to-etw">#trace-export-events-to-etw</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-push-api-background-mode" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Push API background mode</span> Mac, Windows, Linux
<div>Enable background mode for the Push API. This allows Chrome to continue running after the last window is closed, and to launch at OS startup, if the Push API needs it. <a class="permalink" href="chrome://flags/#enable-push-api-background-mode">#enable-push-api-background-mode</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Enabled</option>
<option>Disabled</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-webusb-notifications" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">WebUsb notifications.</span> Mac, Windows, Linux, Chrome OS
<div>Experimental WebUsb notifications. <a class="permalink" href="chrome://flags/#enable-webusb-notifications">#enable-webusb-notifications</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-webusb-on-any-origin" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Allow WebUSB from any origin.</span> Mac, Windows, Linux, Chrome OS
<div>If enabled, any origin is allowed to use connected WebUSB devices without prompting the user. <a class="permalink" href="chrome://flags/#enable-webusb-on-any-origin">#enable-webusb-on-any-origin</a></div>
</div>
</div>
<div class="experiment-actions"><a class="experiment-enable-link" href="chrome://flags/#">Enable</a></div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-ppapi-win32k-lockdown" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-default">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable PPAPI Win32k Lockdown.</span> Windows
<div>Specify the PPAPI plugins which will be run within the Win32k lockdown sandbox policy. <a class="permalink" href="chrome://flags/#enable-ppapi-win32k-lockdown">#enable-ppapi-win32k-lockdown</a></div>
<div><select class="experiment-select">
<option>Default</option>
<option>Disabled</option>
<option>Flash only</option>
<option>PDF only</option>
<option>Flash and PDF</option>
<option>All plugins</option>
</select></div>
</div>
</div>
<div class="experiment-actions"></div></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div id="container" class="vbox-container">
<div id="top" class="wbox">
<div class="section-header">
<table cellspacing="0" cellpadding="0">
<tbody>
<tr valign="center">
<td><span class="section-header-title">Unavailable Experiments</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="content">
<div>
<div id="disable-webrtc-hw-decoding" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable support for WebRTC hardware video decoding.</span> Chrome OS, Android
<div>This option disables support in WebRTC for decoding video streams using platform hardware. <a class="permalink" href="chrome://flags/#disable-webrtc-hw-decoding">#disable-webrtc-hw-decoding</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-webrtc-hw-encoding" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable support for WebRTC hardware video encoding.</span> Chrome OS, Android
<div>This option disables support in WebRTC for encoding video streams using platform hardware. <a class="permalink" href="chrome://flags/#disable-webrtc-hw-encoding">#disable-webrtc-hw-encoding</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-software-rasterizer" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable 3D software rasterizer</span>
<div>Don't fall back to a 3D software rasterizer when the GPU cannot be used. <a class="permalink" href="chrome://flags/#disable-software-rasterizer">#disable-software-rasterizer</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-ble-advertising-in-apps" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable BLE Advertising in Chrome Apps.</span> Chrome OS
<div>Enables BLE Advertising in Chrome Apps. BLE Advertising might interfere with regular use of Bluetooth Low Energy features. <a class="permalink" href="chrome://flags/#enable-ble-advertising-in-apps">#enable-ble-advertising-in-apps</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="ash-disable-maximize-mode-window-backdrop" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable window backdrops in TouchView</span> Chrome OS
<div>Disables the grey window backdrops used in TouchView (maximize mode) behind windows which cannot be maximized. <a class="permalink" href="chrome://flags/#ash-disable-maximize-mode-window-backdrop">#ash-disable-maximize-mode-window-backdrop</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="ash-enable-touch-view-testing" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable TouchView maximizing UI for testing</span> Chrome OS
<div>Enable Ctrl+Alt+Shift+8 to toggle the TouchView maximizing mode. <a class="permalink" href="chrome://flags/#ash-enable-touch-view-testing">#ash-enable-touch-view-testing</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="disable-touch-feedback" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Disable additional touch feedback on UI components.</span> Chrome OS
<div>Certain UI components will stop displaying visual feedback upon touch interactions. <a class="permalink" href="chrome://flags/#disable-touch-feedback">#disable-touch-feedback</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="ash-enable-mirrored-screen" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable mirrored screen mode.</span> Chrome OS
<div>Enable the mirrored screen mode. This mode flips the screen image horizontally. <a class="permalink" href="chrome://flags/#ash-enable-mirrored-screen">#ash-enable-mirrored-screen</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="ash-stable-overview-order" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Use a stable window order in overview.</span> Chrome OS
<div>Uses a stable window ordering in overview mode which attempts to minimize movement of windows when entering / exiting overview and between overview sessions. <a class="permalink" href="chrome://flags/#ash-stable-overview-order">#ash-stable-overview-order</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-password-change-support" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable change password support.</span> Mac
<div>Enable updating a password in the password manager after submitting a "change password" form. <a class="permalink" href="chrome://flags/#enable-password-change-support">#enable-password-change-support</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="scroll-end-effect" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Scroll end effect</span> Chrome OS
<div>Experimental scroll end effect in response to vertical overscroll. <a class="permalink" href="chrome://flags/#scroll-end-effect">#scroll-end-effect</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="touch-selection-strategy" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Touch text selection strategy</span> Android
<div>Controls how text selection granularity changes when touch text selection handles are dragged. Non-default behavior is experimental. <a class="permalink" href="chrome://flags/#touch-selection-strategy">#touch-selection-strategy</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-suggestions-service" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable the Suggestions Service</span> Chrome OS, Android
<div>Enable the experimental Chrome suggestions service. <a class="permalink" href="chrome://flags/#enable-suggestions-service">#enable-suggestions-service</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-tcp-fast-open" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable TCP Fast Open</span> Linux, Chrome OS, Android
<div>Enable the option to send extra authentication information in the initial SYN packet for a previously connected client, allowing faster data send start. <a class="permalink" href="chrome://flags/#enable-tcp-fast-open">#enable-tcp-fast-open</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="bleeding-edge-renderer-mode" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Bleeding Edge Renderer Paths - LIKELY TO CRASH YOUR BROWSER</span> Android
<div>Use bleeding-edge code to make Chrome draw content faster. The changes behind this path are very likely to break lots of content. <a class="permalink" href="chrome://flags/#bleeding-edge-renderer-mode">#bleeding-edge-renderer-mode</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-apps-file-associations" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Apps file associations.</span> Mac
<div>Enable OS integration of file associations for Chrome Apps. <a class="permalink" href="chrome://flags/#enable-apps-file-associations">#enable-apps-file-associations</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-hotword-hardware" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable simulated hardware 'Ok Google' features.</span> Chrome OS
<div>Enables an experimental version of 'Ok Google' hotword detection features that have a hardware dependency. <a class="permalink" href="chrome://flags/#enable-hotword-hardware">#enable-hotword-hardware</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-credit-card-scan" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Credit card scanning</span> Android
<div>Enable scanning a new credit card number when filling out a credit card form. <a class="permalink" href="chrome://flags/#enable-credit-card-scan">#enable-credit-card-scan</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-touch-hover" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable support for hover capable touchscreens.</span> Android
<div>Enables hover feature by holding your finger just over the screen to experience a mouseover event. <a class="permalink" href="chrome://flags/#enable-touch-hover">#enable-touch-hover</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
<div id="enable-drive-search-in-app-launcher" class="experiment">
<table width="100%" cellspacing="0" cellpadding="2">
<tbody>
<tr class="experiment-unsupported">
<td valign="top">
<div class="experiment-text">
<div><span class="experiment-name">Enable Drive Search in Chrome App Launcher.</span> Chrome OS
<div>Files from Drive will show up when searching the Chrome App Launcher. <a class="permalink" href="chrome://flags/#enable-drive-search-in-app-launcher">#enable-drive-search-in-app-launcher</a></div>
</div>
</div>
<div class="experiment-actions">
<div>Sorry, this experiment is not available on your platform.</div>
</div></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
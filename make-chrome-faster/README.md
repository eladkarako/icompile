1. Use Chrome/Chromium Of x64bit, if your machine can handle it.

2. Install those both <strong>official</strong> Chrome-extensions:
<a href="https://chrome.google.com/webstore/detail/dalkfakmooljfejnddeaibdkgbbogpea" target="_blank">https://chrome.google.com/webstore/detail/dalkfakmooljfejnddeaibdkgbbogpea</a>
<a href="https://chrome.google.com/webstore/detail/pcgokfnmpaefeofjpbicabmcadpcnhon" target="_blank">https://chrome.google.com/webstore/detail/pcgokfnmpaefeofjpbicabmcadpcnhon</a>

3. Access <code>chrome&#x003A;&#x002F;&#x002F;flags/</code> and change the following values,
you may easily reach either of those by copy&&paste them into the address-bar.
<blockquote code-like>
&#x1f449; <code>chrome://flags/#num-raster-threads</code>  ➧4
&#x1f449; <code>chrome://flags/#default-tile-width</code>  ➧1024
&#x1f449; <code>chrome://flags/#default-tile-height</code> ➧1024

&#x1f449; <code>chrome://flags/#enable-fast-unload</code>  ➧Enable
&#x1f449; <code>chrome://flags/#smooth-scrolling</code>    ➧Disable
&#x1f449; <code>chrome://flags/#enable-quic</code>         ➧Enable
&#x1f449; <code>chrome://flags/#enable-zero-copy</code>    ➧Enable
&#x1f449; <code>chrome://flags/#enable-site-per-process</code>  ➧Enable
&#x1f449; <code>chrome://flags/#v8-cache-options</code>    ➧'Cache V8 parser data.'
&#x1f449; <code>chrome://flags/#v8-cache-strategies-for-cache-storage</code>   
 ➧'Aggressive'
&#x1f449; <code>chrome://flags/#enable-scroll-anchoring</code>  ➧Disable
&#x1f449; <code>chrome://flags/#enable-pointer-events</code>    ➧Enable
&#x1f449; <code>chrome://flags/#passive-listener-default</code> ➧'Force All True'
&#x1f449; <code>chrome://flags/#document-passive-event-listeners</code>  ➧Enable
&#x1f449; <code>chrome://flags/#passive-event-listeners-due-to-fling</code>  ➧Enable
&#x1f449; <code>chrome://flags/#expensive-background-timer-throttling</code>  ➧Enable
&#x1f449; <code>chrome://flags/#enable-nostate-prefetch</code>  ➧'Enabled Prerender'
&#x1f449; <code>chrome://flags/#enable-resource-prefetch</code>  ➧'Enable Prefetching'
&#x1f449; <code>chrome://flags/#delay-navigation</code>          ➧Disable
</blockquote>

4. Just before the restart required in stage [3] (above),
close all other tabs (other than <code>chrome&#x003A;&#x002F;&#x002F;flags/</code>),
access <code>chrome&#x003A;&#x002F;&#x002F;net-internals/#dns</code> in a new-tab, and click the 'clear host cache', you can safely close the <code>chrome&#x003A;&#x002F;&#x002F;net-internals/#dns</code> now, and back in the <code>chrome&#x003A;&#x002F;&#x002F;flags/</code> click on the big-blue 'relaunch now' button.

5. Run Chrome with the following command-line switches:
<pre>
--enable-accelerated-vpx-decode="0x03" --prefetch-search-results --disable-pinch --disable-in-process-stack-traces --enable-tcp-fastopen --enable-threaded-compositing --enable-gpu-scheduler --use-double-buffering --enable-hardware-overlays --enable-partial-raster --disable-speech-api --ipc-connection-timeout="90"  --enable-gpu-memory-buffer-compositor-resources --enable-gpu-memory-buffer-video-frames --enable-native-gpu-memory-buffers --disable-payment-request --disable-3d-apis --disable-logging --disable-presentation-api --enable-rgba-4444-textures --v8-cache-options="data" --v8-cache-strategies-for-cache-storage="aggressive"
</pre>
you may use a <code>.bat</code> or <code>.cmd</code> batch file if it is easier for you,
or use my <a href="https://github.com/eladkarako/iniRun">https://github.com/eladkarako/iniRun</a> project.
here is my ini file (for chromium :])

<pre>
[Information]
Parent_Folder=C:\\Users\\Elad\\AppData\\Local\\Chromium\\Application

Arguments=--force-device-scale-factor="1.2" --enable-accelerated-vpx-decode="0x03" --allow-outdated-plugins --ppapi-flash-path="C:\\Windows\\System32\\Macromed\\Flash\\PEPFLA~1.DLL" --ppapi-flash-version="24.0.0.221" --prefetch-search-results --enable-lcd-text --enable-font-antialiasing=1 --ppapi-antialiased-text-enabled=1 --no-referrers --reduced-referrer-granularity --force-ui-direction=ltr --enable-pepper-testing --keep-alive-for-test --disable-pinch --ipc-connection-timeout="90" --disable-hang-monitor --disable-in-process-stack-traces --enable-tcp-fastopen --enable-threaded-compositing --enable-grouped-history --ash-md=enabled --material-design-ink-drop-animation-speed="fast" --show-md-login --top-chrome-md="material" --secondary-ui-md="material" --enable-gpu-scheduler --show-md-login --disable-md-oobe --use-double-buffering --desktop-window-1080p --enable-hardware-overlays --enable-partial-raster --disable-speech-api --enable-gpu-memory-buffer-compositor-resources --enable-gpu-memory-buffer-video-frames --enable-native-gpu-memory-buffers --disable-payment-request --disable-3d-apis --disable-logging --disable-presentation-api --enable-rgba-4444-textures --v8-cache-options="data" --v8-cache-strategies-for-cache-storage="aggressive" --enable-threaded-compositing --no-referrers


;;// Overrides the timeout, in seconds, that a child process waits for a
;;// connection from the browser before killing itself.
;;const char kIPCConnectionTimeout[]          = "ipc-connection-timeout";


Full_Path=C:\\Users\\Elad\\AppData\\Local\\Chromium\\Application\\chrome.exe

Run_Mode=SW_SHOWMAXIMIZED
</pre>

search this blog for newer ways to download all recent command-line switches and this might also help: <a href="https://github.com/eladkarako/Chrome-Command-Line-Switches">https://github.com/eladkarako/Chrome-Command-Line-Switches</a> :]


Enjoy!
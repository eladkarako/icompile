<img src="https://icompile.eladkarako.com/_uploads/2017/05/icompile.eladkarako.com_browser_force_aspect_pixel_density.png" alt="" width="926" height="523" />

<strong>Firefox:</strong>
<code>about:config</code>, <code>layout.css.devPixelsPerPx</code>, change from <code>-1.0</code> to something like <code>1.4</code> (it's a string), will change immediately.

<strong>Chrome:</strong>
command-line switch to <code>chrome.exe</code>, use <code>--force-device-scale-factor="1.2"</code> (for example).

It may help you with larger screens (a.k.a HiDPI displays)
or simply to adjust your display for a better visibility.
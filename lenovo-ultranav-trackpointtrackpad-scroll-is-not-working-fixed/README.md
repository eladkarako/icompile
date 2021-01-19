scrolling scrolling.. PC sleeps, on resume: your scroll mouse-key (for TrackPoint) or two-finger scroll down on the TrackPad had stopped working..

put this in a reg file, and run it for a quick fix:
<pre>
Windows Registry Editor Version 5.00

[HKEY_USERS\\S-1-5-21-1109280529-701945964-1310375388-1000\\Software\\Synaptics\\SynTPEnh\\UltraNavPS2]
"TrackPointMode"=dword:00001214

[HKEY_USERS\\S-1-5-21-1109280529-701945964-1310375388-1000\\Software\\Synaptics\\SynTP\\StickPS2]
"Gestures"=dword:000000a0
</pre>

* go to <code style="display:inline;">HKEY_USERS</code>, look around and replace the S-1-5.... with your own SUUID.


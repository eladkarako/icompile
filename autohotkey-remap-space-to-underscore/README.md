- having to work with a lot of MS-DOS or in environment that is not friendly to spaces in file-names?
- writing long sentences, and hitting multiple times the <code style="display:inline;">[SHIFT]+[-]</code>, which is result with unnatural-writing pattern?

the following script runs in the background, replacing the <code style="display:inline;">[SPACE]</code> key with <code style="display:inline;">[_]</code> <small>(underscore)</small>, providing a continues writing.


<pre>
;09:22 17/09/2014
;# name:         space_to_underscore.
;# description:  replace [SPACE] key with [_] key.

Space::Send _

;+Space::Send _                 ---- this will replace [SHIFT]+[SPACE] to [_]


;# components explained
;+       [SHIFT] key
;Space   [SPACE] key
;::Send  remap keys
;_       underscore
</pre>


its AutoHotKey, so compiling it will result with an icon near the clock area (on your right, in LTR Windows OS),
you can disable/enable it when needed.
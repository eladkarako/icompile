Full Hebrew Support. No gibberish. 

<ol>
<li>
<strong>CONVERT.</strong>
Use Subtitle-Workshop<sup><a href="http://subworkshop.sourceforge.net/" target="_blank">&#x1f4ce;︎ </a></sup> and save your subtitle as <code>.ass</code><sup><em>(Advanced SubStation Alpha)</em></sup>.
</li>
<li>
<strong>Resolve Gibberish.</strong>
Open the <code>.ass</code> file using either:
- Notepad2 <sup><a href="http://www.flos-freeware.ch/notepad2.html" target="_blank">&#x1f4ce;︎ </a></sup> and click <code>File→Encoding→UTF-8</code>
or
- Notepad++ <sup><a href="https://notepad-plus-plus.org/download/" target="_blank">&#x1f4ce;︎ </a></sup> and click <code>Encoding→Encode in UTF-8 without BOM</code>.
</li>
<li>
<strong>Better Presentation.</strong>
Open the <code>.ass</code> file using Notepad2 or Notepad++, and replace:
<pre>
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Tahoma,24,&H00FFFFFF,&H00FFFFFF,&H00FFFFFF,&H00C0C0C0,-1,0,0,0,100,100,0,0.00,1,2,3,2,20,20,20,1
</pre>
with
<pre>
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Tahoma,20,&H00FFFFFF,&H00FFFFFF,&H00000000,&H00000000,-1,0,0,0,100,100,0,0,1,1,0,2,10,10,20,1
</pre>
<em>You may change the font-family, font-size, border color, etc..  to your liking..</em> 
</li>
<li>
<strong>Run:</strong>
<code>ffmpeg -i video.mp4 -vf "ass=subtitle.ass" out_video.mp4</code>
or : <code>ffmpeg -hide_banner -y -i "video.mp4" -filter_complex "[0:v]ass=subtitle.ass[VIDEO];" -map "[VIDEO]" -preset veryslow -crf 21 -pix_fmt yuv420p -movflags "+faststart" out_video.mp4</code> (advance filtering example).
</li>
</ol>
granted, not directly related to IT, yet while working on some signal algorithms I accidentally came across this neat trick in winamp <em>(related to Nullsoft DirectSoud)</em>,

XFade or Overlapping is when the next song in your playlist fade-in at the end of the current playing song, it is commonly used when listening to music on the radio (online steams or regular),

overlapping helps you to enjoy continuous listening, minimizing the amount of silence (mostly at the start and end of the playing track).

visualizing it:
<img src="https://icompile.eladkarako.com/_uploads/31.png" alt="" title="Overlapping3" width="446" height="300" class="alignnone size-full wp-image-305" />
<!--more-->

<strong>how to activate it? (built into winamp, no plug-ins are needed)</strong>
 <!--more-->
Options->Preferences... (or just hit Ctrl+P)
<img src="https://icompile.eladkarako.com/_uploads/2010-12-26_170418.gif" alt="" title="2010-12-26_170418" width="587" height="79" class="alignnone size-full wp-image-306" />
next go to Plug-ins->Output, select <strong>Nullsoft DirectSound Output vX.X [out_ds.dll]</strong>, click <strong>Configure</strong>.
go to <strong>Fading</strong> Tab, 
select <strong>on end of song (xxxxx ms)</strong>,
check (ON) the <strong>Enable</strong>, and <strong>Use custom fade time</strong>.
Fill out number of milliseconds (1000 is 1 second of overlapping),
any values of 100000 to- 30000 works fine,
the value of 20 seconds (20000) works best for me.
<img src="https://icompile.eladkarako.com/_uploads/2010-12-26_171444.png" alt="" title="2010-12-26_171444" width="524" height="377" class="alignnone size-full wp-image-307" />

another small tweak is to <strong>remove silence at the beginning / end of the track</strong> (in the <strong>Other</strong> Tab).
enabling this check, means that the overlapping effect will be more close, and might sounds a bit funny when your following tracks are in different tempo rates (like smooth jazz followed by hard-rock n' roll),
basically, not recommended, unless playing similar genre music with similar tempo rate, like one complete album of <a href="http://www.the88.net/">The 88</a>.

<iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/z1Y3M5576no?rel=0&amp;showinfo=0&amp;showads=0" frameborder="0" allowfullscreen></iframe>

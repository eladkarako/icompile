<img src="https://github.com/eladkarako/icompile/releases/download/latest/icompile.eladkarako.com_kitty_menorah_animation_bf.gif" /> 

<br />

- lightning up the Menorah (1'st candle was today)
- cat is acting funny
<img src="https://icompile.eladkarako.com/_uploads/2015/12/out00000.png" alt="out00000" width="300" height="366" class="alignnone size-full wp-image-3813" />

- at first I'm..
<img src="https://icompile.eladkarako.com/_uploads/2015/12/2015-12-07_031449.jpg" alt="2015-12-07_031449" width="269" height="221" class="alignnone size-full wp-image-3817" />
- but then I've quickly grabbed the phone and started to film..

- breaking video to frames, one per new PNG file, using 
<pre>
convert -coalesce video.mpeg out%05d.png
</pre>
- adding <code>watermark</code> to the bottom of each PNG file, using
<pre>
convert out00000.png -background #685067 -fill white -background #6C938E -pointsize 12 label:"i c o m p i l e . e l a d k a r a k o . c o m" -gravity Center -append anno_label2.jpg
</pre>

making a quick and dirty parallel-multi-process batch file (using "start")
to make it faster/better/cool'er

"_file_encoder.cmd":
<pre>
@echo off

set sFILE_NAME_INPUT="%~s1"

::path
set sFILE_NAME_OUTPUT=%~d1%~p1
::filename
set sFILE_NAME_OUTPUT=%sFILE_NAME_OUTPUT%_watermark_%~n1
::use JPG ext.
set sFILE_NAME_OUTPUT=%sFILE_NAME_OUTPUT%.jpg


call convert %sFILE_NAME_INPUT% -background #685067 -fill white -background #6C938E -pointsize 12 label:"i c o m p i l e . e l a d k a r a k o . c o m" -gravity Center -append "%sFILE_NAME_OUTPUT%"

exit
</pre>


"_start_all.cmd":
<pre>
@echo off
echo I am the runner

for %%e in (*.png) do (
    ::parallel different process. and continue.
    start /low /min "cmd /c "call _file_encoder.cmd "%%e"""
)
</pre>

- double click the _start_all.cmd, 1 second operation x99 files (in parallel) takes about 10 seconds.

- making a 6-seconds delay, HD animated GIF, using:
<pre>
convert -background white -alpha remove -layers OptimizePlus -delay 6 *.jpg -loop 0 animation.gif
</pre>

- thinking 2-way gif will be wayyyy funnier, making the gif go back and forth, using:
<pre>
convert animation.gif -coalesce -duplicate 1,-2-1 -layers OptimizePlus -loop 0 animation_bf.gif
</pre>

result is a super HD, but single gif > 22MB,
copy every 2nd image to another folder, cut 1/2 of the frames (some things do not need a script...)

- quickly writing this post with all those <a href="http://www.imagemagick.org/script/command-line-processing.php" target="_blank">convert</a> tricks,
clicking publish, and laugh my ass out for 4 minutes no b$hit :)


Going with the holiday spirit and watching some "Robot Chicken" Hanukkah sketches:

<iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/VJvgUaBTNmQ?rel=0&amp;showinfo=0&amp;showads=0" frameborder="0" allowfullscreen></iframe>

<iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/vthPL9lj7kw?rel=0&amp;showinfo=0&amp;showads=0" frameborder="0" allowfullscreen></iframe>


<h2>Happy Holidays</h2>

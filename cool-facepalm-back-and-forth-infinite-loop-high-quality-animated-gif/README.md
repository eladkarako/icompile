<span style="line-height: 1.5em;">I've watched the episode Deja Q of Star Trek The Next Generation (Season 3 Episode 13),</span>

it was the source of this very wild-spread meme, called "<a href="http://knowyourmeme.com/memes/facepalm" target="_blank">facepalm</a>", featuring captain <a href="http://en.wikipedia.org/wiki/Jean-Luc_Picard" target="_blank">Jean-Luc Picard</a>,
in whatever-whatnot situation (quite funny..)

anyway I've decided to use it as a custom 404 page for a small project I'm doing,
this aside, I've desired a fancy animated-GIF, with caption, to capture the entire thing...

steps:
<ol>
	<li>get getting the video source (YouTube is a good source, or any HD deluxe package of <em>Star Trek The Next Generation</em> for a better, higher quality result).</li>
	<li><span style="text-decoration: underline;">For Video-Processing</span> ::  get <a href="http://www.virtualdub.org/" target="_blank">VirtualDub</a> (<a href="http://sourceforge.net/projects/virtualdub/files/virtualdub-win/1.10.4.35491/VirtualDub-1.10.4-AMD64.zip/download" target="_blank">x64</a>) and install it
here are some configuration (grey ones, are optional).
<ol>
	<li><span style="line-height: 1.5em; color: #c0c0c0;">Options-&gt;Preformance</span>
<ul>
	<li><span style="color: #c0c0c0;">set all scales to far right (increase buffer).</span></li>
</ul>
</li>
	<li><span style="line-height: 1.5em; color: #000000;">Options-&gt;Preferences</span>
<ul>
	<li><span style="line-height: 1.5em; color: #000000;">-&gt;Images</span>
<ul>
	<li><span style="color: #000000;"><span style="line-height: 1.5em;">set value of </span><em style="line-height: 1.5em;">default frame rate</em><span style="line-height: 1.5em;"> to 0.5000, it </span><span style="line-height: 1.5em;">means "capture an image every ½ of a second".</span></span></li>
</ul>
</li>
	<li><span style="color: #c0c0c0;">-&gt;Threading</span>
<ul>
	<li><span style="color: #c0c0c0;">Video compression threads: change from 0 to 1.</span></li>
	<li><span style="color: #c0c0c0;">increase max-threads in combo-box below.</span></li>
</ul>
</li>
	<li><span style="color: #c0c0c0;">-&gt;3D accel</span>
<ul>
	<li><span style="color: #c0c0c0;">check ON the Enable 3D video filter acceleration (VDXA)</span></li>
</ul>
</li>
</ul>
</li>
</ol>
</li>
	<li>For Adding Caption- The Easy Way (As a Subtitle) ::
<ol>
	<li>get <a href="www.codecguide.com" target="_blank">K-Lite x86 and x64</a> mega codec pack, install all ffdshow64 filters.</li>
	<li>copy content of <em><strong>C:\\Program Files (x86)\\K-Lite Codec Pack\\Filters\\ffdshow64</strong></em><strong> </strong>into
<em>[where-ever-you've-placed-videolan]</em>\\VideoLan\\plugins\\.</li>
	<li>restart VideoLan</li>
</ol>
</li>
</ol>
&nbsp;

now a little watching through the video shows that Jean-Luc Picard starts the meme stuff at
frame number 9287 (in time this is about 0:06:11.480 into from the very start),
and ends on 9333 (0:06:13.320)
<ol>
	<li>go to the start location, you can jump frames with [RIGHT Arrow] [LEFT Arrow] keys, press the 'Mark In' button.</li>
	<li>do the same with the end location (press the 'Mark Out' button.</li>
	<li>in the menu:
<ol>
	<li>File-&gt;Export-&gt;Image Sequence
<ol>
	<li>select a folder (probably best if it will be an empty one)</li>
	<li>select 'PNG' and remove the checkbox 'Quick compress'</li>
	<li>press 'OK' and wait 'till done,</li>
	<li>open command-line (CMD) and change-dir to this folder.</li>
	<li>*make sure you have 'imagemagick' (a.k.a Image-Magic) in the PATH so you could write 'convert.exe' anywhere and get the executable running..</li>
	<li>run:
<span style="line-height: 1.5em;">convert -background white -alpha remove -layers OptimizePlus -delay 6 *.p<span style="line-height: 1.5em;">ng -loop 0 myAnimatedGif.gif</span>
</span></li>
	<li>* we are delaying 6/100 since we have a-lot of frames, and it will be reasonably smooth animation (also very high-quality)</li>
	<li>this will be now need to be processed again so the animation will be repeated back and forth</li>
	<li>run:
<span style="line-height: 1.5em;">convert myAnimatedGif.gif -coalesce -duplicate 1,-2-1 -layers Optimi<span style="line-height: 1.5em;">zePlus -loop 0 backnforthAni.gif</span>
</span></li>
	<li>*the command is removing optimizations and applying back after processing, duplication (meaning adding..) frames.</li>
</ol>
</li>
</ol>
</li>
</ol>
you can apply filters in VideoDub to shrink result before exporting the static-images
the subtitle (there are few) are very useful since you can modify the subtitle file and reload it, and export the result,
which is faster then using another program to image-process text into an image, and put it as an overlay to the video frame,

using subtitle will, naturally, be rendered into the video, but it will be on the higher quality since it will be done once..

result:

very high-quality but huge file, so unless you're serving it from localhost, with the rest of your project files,
make it
- smaller.
- use fewer frames and higher delay.
or..
- use different quality imagemagick-command-line-switch


I'm using 46 frames and 6/100 delay

nice, isn't.. :)
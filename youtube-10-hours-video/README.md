How to create a 1/2/...10/... hours video by repeating a segments of a long playing video,
using minimal amount of tools (ie. <em>software</em>), mainly <a href="https://en.wikipedia.org/wiki/FFmpeg" target="_blank">ffmpeg</a>.

<!--more-->
<hr/>

<blockquote>
You may download ffmpeg from here: <a href="https://ffmpeg.zeranoe.com/builds/" target="_blank">#1</a> <a href="https://ffmpeg.zeranoe.com/builds/win32/" target="_blank">#2</a> <a href="https://ffmpeg.zeranoe.com/builds/win64/" target="_blank">#3</a> <sup><em>(Windows)</em></sup> or from here: <a href="https://ffmpeg.org/download.html#releases" target="_blank">#4</a> <sup><em>(Everything else..)</em></sup>.
also, those quick guides might be useful for <em>FFMPEG-N00bs</em>.. :]
- <a href="https://icompile.eladkarako.com/ffmpeg-fixes-your-video-files/" target="_blank">FFMPEG Fixes Your Video Files</a>
- <a href="https://icompile.eladkarako.com/ffmpeg-time-range-to-time-diff-using-javascript/" target="_blank">FFMPEG Time-Range To Time-Diff Using JavaScript</a>
</blockquote>



I use the <a href="https://www.youtube.com/watch?v=Ui4hrHBxrZY" target="_blank"><em>Flipbookit</em></a> out of Tim's Grand Illusions YouTube channel.

<img src="https://icompile.eladkarako.com/_uploads/2017/01/2017-01-06_223541.png" alt="" width="459" height="341" />

<hr/>

Using high-accuracy player to identify (manually) the maximum amount of raw/initial v/a stream,
I'm using 'Subtitle-Wordshop' because I like its keyboard-shortcuts (ctrl+space=play/pause alt+left/right=quick jump).

<img src="https://icompile.eladkarako.com/_uploads/2017/01/2017-01-06_230257.png" alt="" width="769" height="382" />

Media-Player-Classic is fair too..
<img src="https://icompile.eladkarako.com/_uploads/2017/01/2017-01-07_004843.png" alt="" width="323" height="256" />

I've found a nice long-part of the video: from <code>00:01:05.376</code> until <code>00:01:16.077</code>,
next, we'll going to use FFMPEG to cut this area into a new mp4 file, for that we need the delta, in seconds or in time-string (as above) 

if you don't want to calculate it yourself, you can copy&paste the following code into the developers-panel's console,
(and feed-in your values of course..)

<pre>
javascript:(function(zero,base,a,b,c,userin){if(null===userin)return;userin=userin.replace(/\\s*/g,"").split("-");a=Number(new Date(base+userin[0]));b=Number(new Date(base+userin[1]));c=new Date(b-a+zero);c=("00"+c.getHours()).substr(-2)+":"+("00"+c.getMinutes()).substr(-2)+":"+("00"+c.getSeconds()).substr(-2)+"."+("000"+c.getMilliseconds()).substr(-3);prompt("☆ RANGE: "+userin.join("→")+"\
"+"∆ DIFF: "+c+"\
",c)})(Number(new Date("2016-01-01 "+"00:00:00.000")),"2016-01-01 ",null,null,null,prompt("FFMPEG Compatible Range2Diff","00:01:05.376-00:01:16.077"));
</pre>
the delta came out as <code>00:00:10.701</code>

Now.. you may cut quickly (will take about ~1 second) using:
<pre>
ffmpeg -i input.mp4 -threads 16 -vcodec copy -acodec copy -sn -ss 00:01:05.376 -t 00:00:10.701 out.mp4
</pre>

but you might loose audio sync and few frames in the process,

since this can be consider a "raw source", and the total-time is tiny, as long we'll be using some smart switches we can-keep audio and video sync, and high-quality end result,

<pre>
call ffmpeg.exe -y                                                                     ^
-hide_banner -loglevel "info" -stats                                                   ^
-i  "input.mp4"                                                                        ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt+fastseek"                                           ^
-movflags  "+faststart"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-x264opts  "keyint=4" -g "2" -forced-idr "true" -refs "25" -rc-lookahead "25"          ^
-preset    "veryslow" -crf "23" -subq "9" -qcomp "0.60"                                ^
 ^
-ss        "00:00:00.001"                                                              ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"  ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
-sn -ss 00:01:05.376 -t 00:00:10.701                                                   ^
out.mp4
</pre>

the command-line is a bit-lengthy, since it propely de-interlace the video-frames and elegantly cure double-framing, while still try to keep the v/a in-sync :)
still took only about 1 minute to finish executing :]

Now, there is a quite hard, repetitive process of trying to make the audio repeate without it looking jumpy or weird,
it is quite hard since you have to do it all by yourself, manually,
and it is crutial to pick, at the first stage (above) a long-enough, good-quality video,
that can be aligned upon itself,
again- without make it look or heard to jumpy or weird,
for that you <del>might</del> WOULD need to repeate the about process of cutting from the "raw source" with literately (not figuratively!) milliseconds of accuracy, 

while respecting the initial "borders" of <code>00:01:05.376 -to- 00:01:16.077</code>, 
you can make the video start later (for example <code>00:01:05.500</code>)
- NOTE that you have to calculate <code>00:01:05.500-00:01:16.077</code> delta-duration, AGAIN!!
AND/OR - trim out of the end of the video, which is easier (since you keep the starting point, and don't have to re-calc anything, so if you're lazy try it first..)


but first lets align couple of videos start-end-start-end...

prepare a small text file named 'streams.txt' with this content:
<pre>
# testing good quality repeat
# ---------------------------------
file 'c:/users/elad/desktop/out.mp4'
file 'c:/users/elad/desktop/out.mp4'
file 'c:/users/elad/desktop/out.mp4'
# ---------------------------------
</pre>

-- the file's-path must be absolute (even if you run the whole-thing from the same folder..)
-- instead of <code>\\</code> use <code>/</code>.
-- wrap the path with <code>'</code> character
-- if you see 'file-name' unsafe, set safe to <code>0</code>, to allow processing every type of file. (use <code>-safe "0"</code> before the <code>-i ....</code> part)
-- the file may be ASCII or UTF-8/Unicode encoded (if required due to file names, but better keep it simple!), if you run FFMPEG on Windows, make sure it the EOL is Windows' style (CR+LF) - you can use notepad++/notepad2 for that.

for a quick "feel", we'll use stream-copy (faster!) the command 
`ffmpeg -safe 0 -f concat -i "streams.txt" -threads 16 -vcodec copy -acodec copy  "out_repeat.mp4"`

------
tip: You may use new subtitle file named <code>input.srt</code> at the same folder as <code>input.mp4</code>, double clicking the <code>input.srt</code> will quickly open the Subtitle-Workshop program, you can then double click the first subtitle to quickly jump the the start-point,
it is just a "shortcut", we don't need the subtitle itself or its content in any-way..

--- it should be UTF-8 without BOM, Windows EOL, with two empty lines at its end,
the milliseconds are sapareted by comma, not dot!  - like so:
<pre>
1
00:01:05,376 --> 00:01:16,077
hello...


</pre>


--------------
to make things faster, concat the following commands into a single file named 'run.cmd' and save it at the same folder as 'input.mp4':

<pre>
@echo off
call ffmpeg.exe -y                                                                     ^
-hide_banner -loglevel "info" -stats                                                   ^
-ss 00:01:05.0                                                                         ^
-i  "input.mp4"                                                                        ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt+fastseek"                                           ^
-movflags  "+faststart"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-x264opts  "keyint=4" -g "2" -forced-idr "true" -refs "25" -rc-lookahead "25"          ^
-preset    "ultrafast" -crf "1" -subq "9" -qcomp "0.60"                                ^
 ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"  ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
-sn -ss 00:00:00.376 -t 00:00:10.701                                                   ^
out.mp4


ffmpeg -safe 0 -f concat -i "streams.txt" -threads 16 -vcodec copy -acodec copy  "out_repeat.mp4"

pause
pause
</pre>

tricks:
notice we've changes the preset to <code>ultrafast</code>, and the crf to 1 (almost lossless but not! since 0 will change the processing of the video..),
to make seeking faster I've moved the most of the seeking before the <code>-i ... </code> and the milliseconds, after it..

later we could make things more efficient...

now, all left to do is to, painfully, trim milliseconds away from the delta-duration number in the <code>-t</code> part of the command, save and execute the 'cmd' file, and check the "out_repeat.mp4" result.

keep the <code>"pause, pause" for quick debug..</code>

TRYING:
<code>00:01:05.376-00:01:14.752   ---   -ss 00:01:05.376 -t 00:00:09.376</code>
<pre>
@echo off
call ffmpeg.exe -y                                                                     ^
-hide_banner -loglevel "info" -stats                                                   ^
-ss 00:01:05.0                                                                         ^
-i  "input.mp4"                                                                        ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt+fastseek"                                           ^
-movflags  "+faststart"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-x264opts  "keyint=4" -g "2" -forced-idr "true" -refs "25" -rc-lookahead "25"          ^
-preset    "ultrafast" -crf "1" -subq "9" -qcomp "0.60"                                ^
 ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"  ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
-sn -ss 00:00:00.376 -t 00:00:09.376                                                   ^
out.mp4


ffmpeg -safe 0 -y -hide_banner -loglevel "info" -stats -f concat -i "streams.txt" -threads 16 -vcodec copy -acodec copy  "out_repeat.mp4"

pause
pause
</pre>

-- <code>00:09:376</code> to <code>00:08.777</code>
-- <code>00:08.777</code> to <code>00:08.100</code>
nope. too much!
-- <code>00:08.777</code> to <code>00:08.200</code>
still. too much!
-- <code>00:08.777</code> to <code>00:08.500</code>
almost!. still too much!
-- <code>00:08.777</code> to <code>00:08.550</code>
very close!
-- <code>00:08.777</code> to <code>00:08.565</code>

to increase accuracy (at a price of speed) I've changed 
<code>-fflags "+genpts+discardcorrupt+fastseek"</code> to <code>-fflags "+genpts+discardcorrupt-fastseek"</code>

very close!
-- <code>00:08.777</code> to <code>00:08.585</code>

finally <code>.573</code> was the best visual and audio sync result, but now it is time to test it with full encode process so the 'out.mp4' can stay (for now) with the speed tricks, but `ffmpeg -safe 0 -y -hide_banner -loglevel "info" -stats -f concat -i "streams.txt" -threads 16 -vcodec copy -acodec copy  "out_repeat.mp4"`

will be transform to 
<pre>
call ffmpeg.exe -y                                                                     ^
-hide_banner -loglevel "info" -stats                                                   ^
-f concat -i "streams.txt"                                                             ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt-fastseek"                                           ^
-movflags  "+faststart"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-x264opts  "keyint=4" -g "2" -forced-idr "true" -refs "25" -rc-lookahead "25"          ^
-preset    "ultrafast" -crf "1" -subq "9" -qcomp "0.60"                                ^
 ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"  ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
out_repeat.mp4
</pre>

so the complete 'cmd' file name is now:

<pre>
@echo off
call ffmpeg.exe -y                                                                     ^
-hide_banner -loglevel "info" -stats                                                   ^
-ss 00:01:05.0                                                                         ^
-i  "input.mp4"                                                                        ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt-fastseek"                                           ^
-movflags  "+faststart"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-x264opts  "keyint=4" -g "2" -forced-idr "true" -refs "25" -rc-lookahead "25"          ^
-preset    "ultrafast" -crf "1" -subq "9" -qcomp "0.60"                                ^
 ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"  ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
-sn -ss 00:00:00.376 -t 00:00:08.573                                                   ^
out.mp4


::ffmpeg -safe 0 -y -hide_banner -loglevel "info" -stats -f concat -i "streams.txt" -threads 16 -vcodec copy -acodec copy  "out_repeat.mp4"


call ffmpeg.exe  -y -safe "0"                                                          ^
-hide_banner -loglevel "info" -stats                                                   ^
-f "concat" -i "streams.txt"                                                           ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt-fastseek"                                           ^
-movflags  "+faststart"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-x264opts  "keyint=4" -g "2" -forced-idr "true" -refs "25" -rc-lookahead "25"          ^
-preset    "ultrafast" -crf "1" -subq "9" -qcomp "0.60"                                ^
 ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"  ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
out_repeat.mp4

pause
pause
</pre>

we've just doing 'concat' for two files, still testing..

since it is "full processing" the timing might be changed (slightly- <code>.573</code> to <code>.572</code> in this case..) again while there is internal convertion/readout of the stream as 'mp4toannexb bitstream' ("Auto-inserting h264_mp4toannexb bitstream filterx")


<hr/>

math time..

creating a 1/2/.../10 hours video is a matter of multiplication the duration of the single video, 
for example, <code>8</code> seconds currently..

start with 1 hour.. 
1 hour is 60 minutes, or 3600 seconds, which are 3600/8 === x450 times of the video,

for accuracy... the video's duration is actually 8.596 which is slightly like 8.600 which are about 8600 milliseconds..
3600 seconds are 3600000 / 8600 are 418 times the movie... round it up to 420...

so in-order to make a 1-hour video, we have to make a text file with 420 lines (copied over and over)
easy enough use notepad2 and ctrl+d to fast duplicate a single line, and once you have enough, start copy&paste&copy&paste... :)

<hr/>

* the 1 hour long 'cmd' file is quite similar to the previous "two files concat" "cmd file",
other than changed the name of txt file feeding it to the second command, it practically the same..


'25fpssync_cut_x1hour.cmd':
<pre>
@echo off
call ffmpeg.exe -y                                                                     ^
-hide_banner -loglevel "info" -stats                                                   ^
-ss 00:01:05.0                                                                         ^
-i  "input.mp4"                                                                        ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt-fastseek"                                           ^
-movflags  "+faststart"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-x264opts  "keyint=4" -g "2" -forced-idr "true" -refs "25" -rc-lookahead "25"          ^
-preset    "ultrafast" -crf "1" -subq "9" -qcomp "0.60"                                ^
 ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"  ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
-sn -ss 00:00:00.376 -t 00:00:08.572                                                   ^
out.mp4


::ffmpeg -safe 0 -y -hide_banner -loglevel "info" -stats -f concat -i "streams.txt" -threads 16 -vcodec copy -acodec copy  "out_repeat.mp4"


call ffmpeg.exe  -y -safe "0"                                                          ^
-hide_banner -loglevel "info" -stats                                                   ^
-f "concat" -i "streams_1hour.txt"                                                           ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt-fastseek"                                           ^
-movflags  "+faststart"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-x264opts  "keyint=4" -g "2" -forced-idr "true" -refs "25" -rc-lookahead "25"          ^
-preset    "ultrafast" -crf "1" -subq "9" -qcomp "0.60"                                ^
 ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"  ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
out_repeat.mp4

pause
pause
</pre>

we don't care too much about compression so crf and preset switches don't have extream processing set on at all..

anyway...
let it run, it won't show you too much of a progress but it will take time, there are filters processing the video/audio improving the output and fixing bad-framing.. 

without compressing.. about 2 minutes are 2 giga.. :/

it is also very slow, lets try to concat the first file, and then, to fix the 1 hour file,
<pre>
@echo off
call ffmpeg.exe -y                                                                     ^
-hide_banner -loglevel "info" -stats                                                   ^
-ss 00:01:05.0                                                                         ^
-i  "input.mp4"                                                                        ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt-fastseek"                                           ^
-movflags  "+faststart"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-x264opts  "keyint=4" -g "2" -forced-idr "true" -refs "25" -rc-lookahead "25"          ^
-preset    "ultrafast" -crf "1" -subq "9" -qcomp "0.60"                                ^
 ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"  ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
-sn -ss 00:00:00.376 -t 00:00:08.572                                                   ^
out.mp4


ffmpeg -y -hide_banner -loglevel "info" -stats -safe "0" -f concat -i "streams_1hour.txt" -threads 16 -vcodec copy -acodec copy  "out_repeat.mp4"


call ffmpeg.exe -safe "0" -y                                                           ^
-hide_banner -loglevel "info" -stats                                                   ^
-i  "out_repeat.mp4"                                                                   ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt-fastseek"                                           ^
-movflags  "+faststart"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-ss 00:00:00.005                                                                       ^
-x264opts  "keyint=4" -g "2" -forced-idr "true" -refs "25" -rc-lookahead "25"          ^
-preset    "ultrafast" -crf "1" -subq "9" -qcomp "0.60"                                ^
 ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"  ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
out_repeat_1hour.mp4

pause
pause
</pre>

it is far more time efficient but the audio/video might get out out sync due to frames that are put before the first video/audio-frames... :/
<hr/>

amm... but it takes too much HD-space, so you might as well use high-quality settings, with a bit more compression in mind,
switch back preset to <code>veryslow</code> (it only matters in file-size), and put a slightly more reasonable crf value of <code>23</code>.

<pre>
@echo off
call ffmpeg.exe -y                                                                     ^
-hide_banner -loglevel "info" -stats                                                   ^
-ss 00:01:05.0                                                                         ^
-i  "input.mp4"                                                                        ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt-fastseek"                                           ^
-movflags  "+faststart"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-x264opts  "keyint=4" -g "2" -forced-idr "true" -refs "25" -rc-lookahead "25"          ^
-preset    "veryslow" -crf "23" -subq "9" -qcomp "0.60"                                ^
 ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"  ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
-sn -ss 00:00:00.376 -t 00:00:08.572                                                   ^
out.mp4


ffmpeg -y -hide_banner -loglevel "info" -stats -safe "0" -f concat -i "streams_1hour.txt" -threads 16 -vcodec copy -acodec copy  "out_repeat.mp4"


call ffmpeg.exe -y                                                                     ^
-hide_banner -loglevel "info" -stats                                                   ^
-i  "out_repeat.mp4"                                                                   ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt-fastseek"                                           ^
-movflags  "+faststart"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-ss 00:00:00.005                                                                       ^
-x264opts  "keyint=4" -g "2" -forced-idr "true" -refs "25" -rc-lookahead "25"          ^
-preset    "veryslow" -crf "23" -subq "9" -qcomp "0.60"                                ^
 ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"  ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
out_repeat_1hour.mp4

pause
pause
</pre> 

here is a link to download the text file of 1 hour (and 10 seconds) video <a href="https://github.com/eladkarako/icompile/releases/download/latest/streams_1hour_txt.zip">https://github.com/eladkarako/icompile/releases/download/latest/streams_1hour_txt.zip</a>
and the 8 seconds output from the source-video (the first "cutting" command): <a href="https://github.com/eladkarako/icompile/releases/download/latest/8second_video_to_10hours_video.mp4">https://github.com/eladkarako/icompile/releases/download/latest/8second_video_to_10hours_video.mp4</a>
<hr/>

for the example file here is the last output...
<pre>
[mov,mp4,m4a,3gp,3g2,mj2 &commat; 0000000000508820] Auto-inserting h264_mp4toannexb bitstream filterx
frame=89880 fps=2758 q=-1.0 Lsize= 3307403kB time=01:00:10.33 bitrate=7504.6kbits&sol;s speed= 111x
video:3248703kB audio:56358kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: 0.070867%
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from &apos;out_repeat.mp4&apos;:
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    encoder         : Lavf57.40.101
  Duration: 01:00:10.34, start: 0.000000, bitrate: 7504 kb&sol;s
    Stream #0:0(und): Video: h264 (High) (avc1 &sol; 0x31637661), yuv420p, 1920x1080 [SAR 1:1 DAR 16:9], 7371 kb&sol;s, 24.
90 fps, 25 tbr, 12800 tbn, 50 tbc (default)
    Metadata:
      handler_name    : VideoHandler
    Stream #0:1(und): Audio: aac (LC) (mp4a &sol; 0x6134706D), 44100 Hz, stereo, fltp, 127 kb&sol;s (default)
    Metadata:
      handler_name    : SoundHandler
[libx264 &commat; 0000000000581840] using SAR=1&sol;1
[libx264 &commat; 0000000000581840] DPB size (16 frames, 130560 mbs) &gt; level limit (13 frames, 110400 mbs)
[libx264 &commat; 0000000000581840] using cpu capabilities: MMX2 SSE2Fast SSSE3 SSE4.2 AVX
[libx264 &commat; 0000000000581840] profile High, level 5.0
[libx264 &commat; 0000000000581840] 264 - core 148 r2694 3b70645 - H.264&sol;MPEG-4 AVC codec - Copyleft 2003-2016 - http:&sol;&sol;ww
w.videolan.org&sol;x264.html - options: cabac=1 ref=16 deblock=1:0:0 analyse=0x3:0x133 me=umh subme=9 psy=1 psy_rd=1.00
:0.00 mixed_ref=1 me_range=24 chroma_me=1 trellis=2 8x8dct=1 cqm=0 deadzone=21,11 fast_pskip=1 chroma_qp_offset=-2
threads=16 lookahead_threads=16 sliced_threads=1 slices=16 nr=0 decimate=1 interlaced=0 bluray_compat=0 constrained
_intra=0 bframes=0 weightp=2 keyint=4 keyint_min=1 scenecut=40 intra_refresh=0 rc=crf mbtree=0 crf=23.0 qcomp=0.60
qpmin=0 qpmax=69 qpstep=4 ip_ratio=1.40 aq=1:1.00
[mp4 &commat; 0000000000582440] Using AVStream.codec to pass codec parameters to muxers is deprecated, use AVStream.codecp
ar instead.
    Last message repeated 1 times
Output #0, mp4, to &apos;out_repeat_1hour.mp4&apos;:
  Metadata:
    encoder         : Lavf57.40.101
    Stream #0:0: Video: h264 (libx264) ([33][0][0][0] &sol; 0x0021), yuv420p, 1920x1080 [SAR 1:1 DAR 16:9], q=-1--1, 25
 fps, 12800 tbn, 25 tbc (default)
    Metadata:
      encoder         : Lavc57.46.100 libx264
    Side data:
      cpb: bitrate max&sol;min&sol;avg: 0&sol;0&sol;0 buffer size: 0 vbv_delay: -1
    Stream #0:1: Audio: aac (LC) ([64][0][0][0] &sol; 0x0040), 44100 Hz, stereo, fltp, 128 kb&sol;s (default)
    Metadata:
      encoder         : Lavc57.46.100 aac
Stream mapping:
  Stream #0:0 -&gt; #0:0 (h264 (native) -&gt; h264 (libx264))
  Stream #0:1 -&gt; #0:1 (aac (native) -&gt; aac (native))
Press [q] to stop, [?] for help
[mp4 &commat; 0000000000582440] Starting second pass: moving the moov atom to the beginning of the file
frame=90257 fps=7.0 q=22.0 Lsize= 3196966kB time=01:00:10.44 bitrate=7253.8kbits&sol;s speed=0.281x
video:3133602kB audio:59701kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: 0.114719%
[libx264 &commat; 0000000000581840] frame I:22565 Avg QP:17.73  size: 79770
[libx264 &commat; 0000000000581840] frame P:67692 Avg QP:20.26  size: 20812
[libx264 &commat; 0000000000581840] mb I  I16..4: 15.8% 76.0%  8.1%
[libx264 &commat; 0000000000581840] mb P  I16..4:  6.7% 15.4%  0.8%  P16..4: 32.7%  4.0%  2.4%  0.0%  0.0%    skip:38.0%
[libx264 &commat; 0000000000581840] 8x8 transform intra:72.4% inter:87.6%
[libx264 &commat; 0000000000581840] coded y,uvDC,uvAC intra: 54.9% 52.7% 5.9% inter: 7.8% 18.5% 0.0%
[libx264 &commat; 0000000000581840] i16 v,h,dc,p: 17% 39% 19% 25%
[libx264 &commat; 0000000000581840] i8 v,h,dc,ddl,ddr,vr,hd,vl,hu: 15% 21% 17%  6%  6%  6%  8%  8% 14%
[libx264 &commat; 0000000000581840] i4 v,h,dc,ddl,ddr,vr,hd,vl,hu: 19% 21% 12%  6%  8%  7%  9%  7% 12%
[libx264 &commat; 0000000000581840] i8c dc,h,v,p: 53% 29% 14%  4%
[libx264 &commat; 0000000000581840] Weighted P-Frames: Y:0.0% UV:0.0%
[libx264 &commat; 0000000000581840] ref P L0: 76.9%  6.6% 13.4%  3.1%
[libx264 &commat; 0000000000581840] kb&sol;s:7110.38
[aac &commat; 0000000002892fa0] Qavg: 573.163
Press any key to continue . . .
</pre>

I left it overnight, so I don't know how much long did it take, it was about ~3 hour I guess..
final result was 3.04GB mp4, properly encoded.

<ul>
<li>Cut the file into the required chunk, without any encoding using <code>-codec "copy"</code>.</li>
<li>Keep in mind the starting point, provide a "pre-jump" to speed up file processing, using double <code>-ss</code>: first is <code>-ss ABSOLUTE</code> followed by <code>-i FILE</code>, followed by second <code>-ss RELATIVE</code>.</li>
</ul>

Here is the best practice on how to cut the <code>00:34:10.161-00:34:11.211</code> part of the video.

<pre>
ffmpeg -ss "00:34:00" -i "in.mp4" -codec "copy" -ss "00:00:10.161" -to "00:00:11.211"  "out.mp4"
</pre>

instead of (don't use it like that!)
<pre>
ffmpeg -i "in.mp4" -codec "copy" -ss "00:34:10.161" -to "00:34:11.211"  "out.mp4"
</pre>

Note that "copy", does, in-fact makes it fast enough to be still bearable..

you still have to encode the <code>out.mp4</code>,
but it will be much faster than working on the original file!

<!--more-->

You can use this batch file as a drag&drop target:
<pre>
@echo off
:LOOP
::has argument ?
if ["%~1"]==[""] (
  echo done.
  goto END;
)
::argument exist ?
if not exist %~s1 (
  echo not exist
  goto NEXT;
)
::file exist ?
echo exist
if exist %~s1\\NUL (
  echo is a directory
  goto NEXT;
)
::OK
echo is a file

set FILE_INPUT="%~s1"
set FILE_OUTPUT="%~d1%~p1%~n1_fixed.mkv"

call ffmpeg.exe -y                                                                     ^
-hide_banner -loglevel "info" -stats                                                   ^
-i %FILE_INPUT%                                                                        ^
-threads 16                                                                            ^
-flags     "-loop+naq+low_delay"                                                       ^
-flags2    "+fast+ignorecrop+showall+export_mvs"                                       ^
-fflags    "+genpts+discardcorrupt+fastseek"                                           ^
-movflags  "+faststart+disable_chpl"                                                                ^
-tune      "zerolatency"                                                               ^
-pix_fmt   "yuv420p"                                                                   ^
-profile:v "high" -level "5.0"                                                         ^
 ^
-x264opts  "keyint=4" -g "2" -forced-idr "1" -refs "25" -rc-lookahead "25"          ^
-preset    "veryslow" -crf "23" -subq "9" -qcomp "0.60"                                ^
 ^
-af        "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000" -vsync "1"                       ^
-vf        "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=25,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p"   ^
-map_metadata "-1"                                                                     ^
%FILE_OUTPUT%

:NEXT
shift
goto LOOP

:END
pause
</pre>
', 'FFMPEG - Video Cut
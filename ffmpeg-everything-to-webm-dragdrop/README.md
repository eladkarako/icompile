This little batch file will convert every video file,
you will drag&drop over it to a 360p WebM-video.

You can change few of the internal switches,
allowing to create an audio-less webm or increase the default 12FPS to 25FPS.

The default settings were designed to render a minimal-size,
but relatively high-quality video file.

It will also try fix and recover any mess you have (for example - a partially downloaded file),
to a workable video, compatible with playing with all standard video-players.

<!--more-->

<pre>
@echo off

::-----------------------------------
:: a drag&drop *2WebM
::-----------------------------------


set FILE_INPUT="%~s1"
set FILE_OUTPUT="%~d1%~p1%~n1_fixed.webm"

::optional frame-per-second at 25 rate. better - use 12FPS.
set FPS=12
::set FPS=25

::optional: limit length to 5 seconds.
set TO=
::set TO=-to "00:00:05.000"

::optional: with audio - MONO(-ac 1)/STEREO(-ac 2)/AUTO(remove -ac).  better: no audio(-an) .
set AUDIO=-an
::set AUDIO=-c:a      "libopus"               ^
::          -b:a      "96k"                   ^
::          -ac       "1"                     ^
::          -metadata:s:a:0 "language=eng"    ^
::          -filter:a "asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000"


::optional: keep size as is. better: resize to 360p (16:9 video aspect).
set FORCE169=,pad=width=ih*16/9:height=ih:x=(ow-iw)/2:y=(oh-ih)/2:color=#00000000,scale=w=640:h=360
::set FORCE169=


set COMMAND=call ffmpeg -hide_banner -loglevel "info" -stats -strict "experimental" -y      ^
            -i                  %FILE_INPUT%                                                ^
            -pass               "##PASS##"                                                  ^
            -speed              "##SPEED##"                                                 ^
            -flags              "-loop+naq+low_delay+global_header-output_corrupt"          ^
            -flags2             "+fast+ignorecrop+showall+export_mvs"                       ^
            -fflags             "+ignidx+genpts+nofillin+discardcorrupt-fastseek"           ^
            -movflags           "+faststart+disable_chpl"                                   ^
            -avoid_negative_ts  "make_zero"                                                 ^
            -map_metadata       "-1"                                                        ^
            -map_chapters       "-1"                                                        ^
            -me_method          "full"                                                      ^
            -pix_fmt            "yuv420p"                                                   ^
            -threads            "16"                                                        ^
            -sn                                                                             ^
            -ss                 "00:00:00.001"                                              ^
            -c:v                "libvpx-vp9"   -b:v "500k" -minrate "200k" -maxrate "500k"  ^
            -filter:v           "setpts=PTS-STARTPTS,yadif=0:-1:0,dejudder=cycle=20,mpdecimate,fps=fps=%FPS%,setpts=N/FRAME_RATE/TB-STARTPTS,format=pix_fmts=yuv420p%FORCE169%" -vsync "1"    ^
            %AUDIO%                                                                         ^
            -frame-parallel     "1"                                                         ^
            -auto-alt-ref       "1"                                                         ^
            -tile-rows          "2"                                                         ^
            -tile-columns       "6"                                                         ^
            -aq-mode            "variance"                                                  ^
            -lag-in-frames      "25"                                                        ^
            %TO%                                                                            ^
            -f "webm"                                                                       ^
            ##OUT##

::generate two commands for first and second pass.
set COMMAND_PASS_FIRST=%COMMAND%
set COMMAND_PASS_FIRST=%COMMAND_PASS_FIRST:##PASS##=1%
set COMMAND_PASS_FIRST=%COMMAND_PASS_FIRST:##SPEED##=4%
set COMMAND_PASS_FIRST=%COMMAND_PASS_FIRST:##OUT##=nul%

set COMMAND_PASS_SECOND=%COMMAND%
set COMMAND_PASS_SECOND=%COMMAND_PASS_SECOND:##PASS##=2%
set COMMAND_PASS_SECOND=%COMMAND_PASS_SECOND:##SPEED##=-5%
set COMMAND_PASS_SECOND=%COMMAND_PASS_SECOND:##OUT##=%%FILE_OUTPUT%

::reduce whitespace for debugging the command.
set COMMAND_PASS_FIRST=%COMMAND_PASS_FIRST:  = %
set COMMAND_PASS_FIRST=%COMMAND_PASS_FIRST:  = %
set COMMAND_PASS_FIRST=%COMMAND_PASS_FIRST:  = %
set COMMAND_PASS_FIRST=%COMMAND_PASS_FIRST:  = %
set COMMAND_PASS_FIRST=%COMMAND_PASS_FIRST:  = %
set COMMAND_PASS_FIRST=%COMMAND_PASS_FIRST:  = %
set COMMAND_PASS_FIRST=%COMMAND_PASS_FIRST:  = %
set COMMAND_PASS_SECOND=%COMMAND_PASS_SECOND:  = %
set COMMAND_PASS_SECOND=%COMMAND_PASS_SECOND:  = %
set COMMAND_PASS_SECOND=%COMMAND_PASS_SECOND:  = %
set COMMAND_PASS_SECOND=%COMMAND_PASS_SECOND:  = %
set COMMAND_PASS_SECOND=%COMMAND_PASS_SECOND:  = %
set COMMAND_PASS_SECOND=%COMMAND_PASS_SECOND:  = %
set COMMAND_PASS_SECOND=%COMMAND_PASS_SECOND:  = %

::run both commands, the && will make-sure the second command only runs on errorlevel==0 of the first command.
echo.
echo starting first-pass.
echo.
echo %COMMAND_PASS_FIRST%
%COMMAND_PASS_FIRST%
if not ErrorLevel == 0 goto NOFIRSTPASS
echo.
echo done.
echo.

echo.
echo starting second-pass.
echo.
echo %COMMAND_PASS_SECOND%
%COMMAND_PASS_SECOND%
if not ErrorLevel == 0 goto NOSECONDPASS
echo.
echo done.
echo.


del /f /q "ffmpeg2pass*.log"  2&gt;nul &gt;nul
goto EXIT


:NOFIRSTPASS
  echo.
  echo first-pass failed.
  goto EXIT


:NOSECONDPASS
  echo.
  echo second-pass failed.
  goto EXIT


:EXIT
  pause

</pre>

<em>if the format is familiar to you, you might be thinking of this other popular post: <a href="https://icompile.eladkarako.com/ffmpeg-fixes-your-video-files/" >iCompile- FFMPEG Fixes Your Video Files</a>.</em>


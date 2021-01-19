<pre>
@echo off
set VIDEO="%~s1"
set OUTPUT="%~d1%~p1_raw_%~n1.avi"

call ffmpeg -threads 8 -i %VIDEO% -vcodec rawvideo -acodec pcm_s16le %OUTPUT%
pause
</pre>
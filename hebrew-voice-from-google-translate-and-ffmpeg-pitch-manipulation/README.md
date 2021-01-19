Getting voice-output in Hebrew is not yet possible in Google-Translate, 
but by writing the English audio-semantics, and adding extra "aaaa" "eeee" "iiii", 
you can somewhat manipulate the English audio-output to sound a like its in Hebrew, 

Here is a way to generate an MP3 out later FFMPEG "games":
<a download="demo_voice.mp3" href="https://translate.google.com/translate_tts?ie=UTF-8&q=shalom%20maaniiiak&tl=en&total=1&idx=0&textlen=16&tk=659425.829234&client=webapp&ttsspeed=0.24&hint=iw">https://translate.google.com/translate_tts?ie=UTF-8&q=shalom%20maaniiiak&tl=en&total=1&idx=0&textlen=16&tk=659425.829234&client=webapp&ttsspeed=0.24&hint=iw</a>

Once downloaded you can run it through this audio pitch manipulation:

<code>ffmpeg_audio_pitch.cmd</code>
<pre>
@echo off
set "ARGS="
set  ARGS=%ARGS% ffmpeg.exe -y -hide_banner -loglevel "info" -strict "experimental" -threads "16" -stats
set  ARGS=%ARGS% -i "%~1"
set  ARGS=%ARGS% -filter:a
set  ARGS=%ARGS% "
set  ARGS=%ARGS% atempo=tempo=0.5,
set  ARGS=%ARGS% asetrate=sample_rate=44100*1.3,
set  ARGS=%ARGS% aresample=sample_rate=44100:async=100
set  ARGS=%ARGS% "
set  ARGS=%ARGS% -sn -vn 
set  ARGS=%ARGS% "%~dpn1%_speedpitch.m4a"

echo %ARGS%
call %ARGS%
pause
exit /b 0
</pre>

The line <code>asetrate=sample_rate=44100*1.3</code> will make the pitch higher, 
but it will also speed-up the audio-track, 
because of that I'm (pre)slowing-down the audio with <code>atempo=tempo=0.5</code>

You can read more about the audio-filters in here:
<a href="http://ffmpeg.org/ffmpeg-all.html#atempo">ffmpeg.org/ffmpeg-all.html#atempo</a> <br/>
<a href="http://ffmpeg.org/ffmpeg-all.html#asetrate">ffmpeg.org/ffmpeg-all.html#asetrate</a> <br/>
<a href="http://ffmpeg.org/ffmpeg-all.html#aresample">ffmpeg.org/ffmpeg-all.html#aresample</a> <br/>

In a similar manner, making the pitch lower with <code>asetrate=sample_rate=44100*0.7</code>, 
will make the audio-longer/slower...
so you can (pre)speed-up the audio with <code>atempo=tempo=1.5</code>.
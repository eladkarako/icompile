MKV (Matroska video/audio multimedia file) is a container like MOV and AVI, providing support for a huge number of different video, audio and subtitles compression formats. It is not really intended for media content distribution on a large scale, but is achieving it anyway.

MKV support several subtitles streams to be embedded along side the video/audio streams (several subtitle formats supported including SRT, SSA and USF text subtitles, or VobSub streams coming directly from the DVD).

&nbsp;
<h6><span style="color: #808080;">** usage should be purely academic or for free/open license content only **</span></h6>
&nbsp;

step #1 is getting some information on the streams in the video files (specifically, their identification in the list of embedded streams)

<pre>ffmpeg -i myVideo.mkv</pre>

on this example we will get a similar list:

<pre>
Stream #0:0(eng): Video: h264 (High), yuv420p, 1912x796 [SAR 1:1 DAR 478:199], 23.98 fps, 23.98 tbr, 1k tbn, 2k tbc (default)
Stream #0:1(eng): Audio: ac3, 48000 Hz, 5.1(side), fltp, 384 kb/s (default)
Stream #0:2(eng): Subtitle: subrip
Stream #0:3(eng): Subtitle: subrip
Stream #0:4(spa): Subtitle: subrip
Stream #0:5(fre): Subtitle: subrip
Stream #0:6(por): Subtitle: subrip
Stream #0:7(gre): Subtitle: subrip
Stream #0:8(pol): Subtitle: subrip
</pre>

&nbsp;

step #2

extracting the English subtitle (first one on the list)
*note: due to some limitations we would need to demux it out (kind'a re-encoded it) which takes about 2 minutes.

<pre>ffmpeg -threads 4 -i myVideo.mkv -vn -an -codec:s:0.2 srt englishSubtitle.srt</pre>

extracting the Spanish stream is similar

<pre>ffmpeg -threads 4 -i myVideo.mkv -vn -an -codec:s:0.4 srt spanishSubtitle.srt</pre>

&nbsp;

note:
<pre>-threads 4</pre>
will not be usable here due to mkv extraction of this stream could only be single threaded, but its good practice to use this annotation anyway on FFMPEG commands. just because some streams do support multi-threading processing.
you can always run the commands above in few separated command-line window, to make this process parallel (through multi-process) and save some time.

&nbsp;
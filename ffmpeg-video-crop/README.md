Use FFMPEG's stream copy combined with the basic crop-by-time command

<pre>
ffmpeg -threads 4 -ss 00:06:12 -t 00:01:20 -i inVideo.mp4 -vcodec copy -acodec copy outVideo.mp4

</pre>
starting the 6th minute, and 12 seconds into the video (this is the start point for the cut), measure length of 1 minute and 20 seconds, and, using 4 threads, without re-encoding audio nor video stream, put data into new out file.

<pre>-threads 4</pre>
is optional, but recommended.

I've got a long video from YouTube (MP4), which I want to trim to just a two minutes,

this command is accurate, but will take ages since the video is quite lengthy.. so frame-seeking is a nightmare..
<pre>
ffmpeg -i SOURCE.MP4 -ss 24:30:00 -t 00:02:00.00 TARGET.MP4
</pre>

this will work very fast, since it won't encode anything, but unpredictable-framing (I/P/B....) will make the video jumpy and heavy on C/GPU
<pre>
ffmpeg -threads 4 -i SOURCE.MP4 -ss 00:24:30 -t 00:02:00.00 -vcodec copy -acodec copy TARGET.MP4
</pre>

so a re-encoding is required, nothing fancy:
<pre>
ffmpeg -i TARGET.MP4 TARGET_FINAL.MP4
</pre>

regarding video-encoding you might have head of i-frames (a.k.a "<a href="https://en.wikipedia.org/wiki/Intra-frame" target="_blank">intra-</a>", "<a href="https://en.wikipedia.org/wiki/Intra-frame" target="_blank">intra-frames</a>" or "<a href="https://en.wikipedia.org/wiki/Inter_frame" target="_blank">inter-frame</a>" or GOP [in FFMPEG terminalogy] ), by default- every ~12 frames you'll find one, but you can also set the size of the group to <code>1</code> using <code>-g 1</code> in an alternative re-encoding phase:
<pre>
  -g                 <int>        E..V.... set the group of picture (GOP) size (from INT_MIN to INT_MAX) (default 12)
</int></pre>
<pre>
ffmpeg -threads 4 -i TARGET.MP4 -g 1 TARGET_FINAL.MP4
</pre>

it might benefit you somehow, although I prefer the default of <code>/12/</code> which is much less choppy..

anyway,
since <code>GOP</code> is quite new in the FFMPEG-terminology replacing that old <code>-intra</code> switch which does not work in new builds, and "Group Of Pictures" is not quite a intermediate leap to i-frames anyway.. hope it saves anyone some searching time :)


although you can always <code style="background-color:rgba(255,255,160,.8);">ffmpeg -h full 2>&1 >readme.info</code> for the fun of it ;)
', 'FFMPEG - Cut, Copy
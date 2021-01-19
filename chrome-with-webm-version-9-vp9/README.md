The WebM project, is closely integrated with Chromium,
and finally (Chrome beta v60+) you can properly display webm that encoded with VP9.

<hr/>

VP9 supports the full range of web and mobile use cases from low bitrate compression to high-quality ultra-HD, with additional support for 10/12-bit encoding and HDR.

VP9 can reduce video bit rates by as much as 50% compared with other known codecs. It is supported for adaptive streaming and is used by YouTube as well as other leading web video providers.

VP9 decoding is supported on over 2 billion end points including Chrome, Opera, Edge, Firefox and Android devices, as well as millions of smart TVs.

<hr/>

To encode, simply grab any media-file, and the latest FFMPEG,
read through this helpful page: <a href="https://trac.ffmpeg.org/wiki/Encode/VP9" target="_blank">https://trac.ffmpeg.org/wiki/Encode/VP9</a>

here is an example (for Windows)
<pre>
ffmpeg.exe  -i "input.mp4" -c:v "libvpx-vp9" -b:v 2M -c:a "libopus" -pass 1 -f webm   nul           &&  ^
ffmpeg.exe  -i "input.mp4" -c:v "libvpx-vp9" -b:v 2M -c:a "libopus" -pass 2           "output.webm"
</pre>

Here are a bit more advanced encoding options, using ffmpeg,
from the Google-maintained documentation for WebM: <a href="https://developers.google.com/media/vp9/settings/vod/" target="_blank">developers.google.com/media/vp9/settings/vod/</a> (for content-creators).
or (older) from <a href="https://sites.google.com/a/webmproject.org/wiki/ffmpeg/vp9-encoding-guide" target="_blank">here</a>:
<strong>And</strong>- you can make things even easier,
by using (with the VP9 modification above) the code from this article:
<a href="https://icompile.eladkarako.com/ffmpeg-everything-to-webm-dragdrop/"><em>iCompile - </em>FFmpeg – Everything To WebM – Drag&Drop!</a>.

When to use the new encoding?
you are encouraged to provide an alternative (VP8), just for good measures..
but also an additional VP9, properly-encoded, video-source,
- for example:
<pre>
&lt;video poster="movie.jpg" controls&gt;
  &lt;source src="movie.webm" type='video/webm;codecs="vp8,vorbis"'&gt;
  &lt;source src="movie.webm" type='video/webm;codecs="vp09.00.10.08,opus"'&gt;

  &lt;source src="movie.ogv" type='video/ogg;codecs="theora,vorbis"'&gt;
  &lt;source src="movie.mp4" type='video/mp4;codecs="avc1.4D401E,mp4a.40.2"'&gt;
  &lt;p&gt;Fallback message. No support for HTML5 video tag.&lt;/p&gt;
&lt;/video&gt;
</pre>

You can be more specific about the codecs-string,
but it is totally up to you..
Here some additional examples, btw. did you know you can test the support using the JS' MediaSource class? ha!
anyway.. <a href="https://googlechrome.github.io/samples/media/vp9-codec-string.html" target="_blank">googlechrome.github.io/samples/media/vp9-codec-string.html</a>
 
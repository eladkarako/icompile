<img src="https://icompile.eladkarako.com/_uploads/2017/01/icompile.eladkarako.com_ffmpeg_concat_audio_to_video_raw_mp3_scheme.png" alt="" width="555" height="208" />
<!--more-->

<ul>
  <li>
  Place all of your audio files and and image in the same folder as the script,
  run the script to get properly encoded, stream'able video file.
  </li>
  <li>
   You may edit the script to accept any type of media-file,
   and any name for the image other than <code>cover.jpg</code>.
  </li>
</ul>

<pre>
<span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>

<span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> # MP3 LIST(%DATE% %TIME%) </span><span style='color:#808030; '>&gt;</span>list.txt
<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#797997; '>%%</span>e <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span>*.mp3 *.m4a *.oga *.flac<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> file </span>'<span style='color:#797997; '>%%</span>e' <span style='color:#808030; '>&gt;</span><span style='color:#808030; '>&gt;</span>list.txt
<span style='color:#808030; '>)</span>

<span style='color:#800000; font-weight:bold; '>call</span> ffmpeg.exe <span style='color:#808030; '>-</span>y <span style='color:#808030; '>-</span>hide_banner <span style='color:#808030; '>-</span>loglevel <span style='color:#0000e6; '>"info"</span> <span style='color:#808030; '>-</span>stats     <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>threads <span style='color:#008c00; '>16</span>                                                 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags     <span style='color:#0000e6; '>"+loop+global_header+naq+low_delay"</span>              <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>fflags    <span style='color:#0000e6; '>"+genpts+discardcorrupt+fastseek"</span>                <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags2    <span style='color:#0000e6; '>"+fast+ignorecrop+showall+export_mvs"</span>            <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>avoid_negative_ts make_zero                                <span style='color:#808030; '>^</span>
 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>safe <span style='color:#0000e6; '>"0"</span>  <span style='color:#808030; '>-</span>f concat  <span style='color:#808030; '>-</span>i <span style='color:#0000e6; '>"list.txt"</span>                         <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>r <span style='color:#008c00; '>1</span>       <span style='color:#808030; '>-</span>loop <span style='color:#008c00; '>1</span>    <span style='color:#808030; '>-</span>i <span style='color:#0000e6; '>"cover.jpg"</span>                        <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>movflags  <span style='color:#0000e6; '>"+rtphint+dash+disable_chpl+faststart"</span>           <span style='color:#808030; '>^</span>
 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>ss        <span style='color:#0000e6; '>"00:00:00.001"</span>                                   <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>to        <span style='color:#0000e6; '>"00:00:10.000"</span>                                   <span style='color:#808030; '>^</span>
 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>s <span style='color:#0000e6; '>"1280x720"</span>                                               <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>ignore_chapters   <span style='color:#008c00; '>1</span>                                        <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>profile<span style='color:#808030; '>:</span>v <span style='color:#0000e6; '>"high"</span> <span style='color:#808030; '>-</span>level <span style='color:#0000e6; '>"5.0"</span>                              <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>pix_fmt   <span style='color:#0000e6; '>"yuv420p"</span>                                        <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>tune      <span style='color:#0000e6; '>"stillimage"</span>                                     <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>preset    <span style='color:#0000e6; '>"veryslow"</span> <span style='color:#808030; '>-</span>crf <span style='color:#0000e6; '>"23"</span> <span style='color:#808030; '>-</span>subq <span style='color:#0000e6; '>"9"</span> <span style='color:#808030; '>-</span>qcomp <span style='color:#0000e6; '>"0.60"</span>     <span style='color:#808030; '>^</span>
 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>af        <span style='color:#0000e6; '>"asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000"</span>  <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>vf        <span style='color:#0000e6; '>"setpts=PTS-STARTPTS"</span> <span style='color:#808030; '>-</span>vsync <span style='color:#0000e6; '>"1"</span>                                 <span style='color:#808030; '>^</span>
 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>c<span style='color:#808030; '>:</span>a  aac      <span style='color:#808030; '>-</span>b<span style='color:#808030; '>:</span>a 128k <span style='color:#808030; '>-</span>ar <span style='color:#008c00; '>44100</span>                          <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>c<span style='color:#808030; '>:</span>v  libx264  <span style='color:#808030; '>-</span>b<span style='color:#808030; '>:</span>v 1k <span style='color:#808030; '>-</span>minrate 1k <span style='color:#808030; '>-</span>maxrate 1k              <span style='color:#808030; '>^</span>
 <span style='color:#808030; '>^</span>
output.mkv


<span style='color:#800000; font-weight:bold; '>del</span> <span style='color:#808030; '>/</span>f <span style='color:#808030; '>/</span>q list.txt <span style='color:#808030; '>&gt;</span><span style='color:#800000; font-weight:bold; '>nul</span>

<span style='color:#696969; '>::https://icompile.eladkarako.com/ffmpeg-merge-multiple-audio-files-to-a-single-video/#more-7102</span>
<span style='color:#800000; font-weight:bold; '>pause</span>
</pre>

<blockquote>
The proportions of the video are YouTube's <code>720p</code>, and the audio quality is 128KBPS,
Which you also may modify for your needs.
</blockquote>

<blockquote>
You may want to <strong>remove the following lines</strong> from the script:
<pre>
-ss        "00:00:00.001"                                   ^
-to        "00:00:10.000"                                   ^
</pre>
the <code>-to</code> is to output a quick demo (testing quality),
the <code>-ss</code> is to force re-build the index without using some of ffmpeg's bug'gy speed tweaks.
</blockquote>

<hr/>

In a similar way, this will just generate an audio file,

<pre><span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>

<span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> # MP3 LIST(%DATE% %TIME%) </span><span style='color:#808030; '>&gt;</span>list.txt
<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#797997; '>%%</span>e <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span>*.mp3 *.m4a *.oga *.flac<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> file </span>'<span style='color:#797997; '>%%</span>e' <span style='color:#808030; '>&gt;</span><span style='color:#808030; '>&gt;</span>list.txt
<span style='color:#808030; '>)</span>

<span style='color:#800000; font-weight:bold; '>call</span> ffmpeg.exe <span style='color:#808030; '>-</span>y <span style='color:#808030; '>-</span>hide_banner <span style='color:#808030; '>-</span>loglevel <span style='color:#0000e6; '>"info"</span> <span style='color:#808030; '>-</span>stats     <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>threads <span style='color:#008c00; '>16</span>                                                 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags     <span style='color:#0000e6; '>"+loop+global_header+naq+low_delay"</span>              <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>fflags    <span style='color:#0000e6; '>"+genpts+discardcorrupt+fastseek"</span>                <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags2    <span style='color:#0000e6; '>"+fast+ignorecrop+showall+export_mvs"</span>            <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>avoid_negative_ts make_zero                                <span style='color:#808030; '>^</span>
 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>safe <span style='color:#0000e6; '>"0"</span>  <span style='color:#808030; '>-</span>f concat  <span style='color:#808030; '>-</span>i <span style='color:#0000e6; '>"list.txt"</span>                         <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>vn <span style='color:#808030; '>-</span>sn                                                     <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>movflags  <span style='color:#0000e6; '>"+rtphint+dash+disable_chpl+faststart"</span>           <span style='color:#808030; '>^</span>
 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>ss        <span style='color:#0000e6; '>"00:00:00.001"</span>                                   <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>to        <span style='color:#0000e6; '>"00:00:10.000"</span>                                   <span style='color:#808030; '>^</span>
 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>af        <span style='color:#0000e6; '>"asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000"</span>  <span style='color:#808030; '>^</span>
 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>c<span style='color:#808030; '>:</span>a  aac      <span style='color:#808030; '>-</span>b<span style='color:#808030; '>:</span>a 128k <span style='color:#808030; '>-</span>ar <span style='color:#008c00; '>44100</span>                          <span style='color:#808030; '>^</span>
 <span style='color:#808030; '>^</span>
output.aac


<span style='color:#800000; font-weight:bold; '>del</span> <span style='color:#808030; '>/</span>f <span style='color:#808030; '>/</span>q list.txt <span style='color:#808030; '>&gt;</span><span style='color:#800000; font-weight:bold; '>nul</span>

<span style='color:#696969; '>::https://icompile.eladkarako.com/ffmpeg-merge-multiple-audio-files-to-a-single-video/#more-7102</span>
<span style='color:#800000; font-weight:bold; '>pause</span>
</pre>

Want a <code>mp3</code> file?
use <code>-c:a libmp3lame -b:a 128k -ar 44100                       ^</code> instead.

<hr/>

I use <a href="http://www.mp3tag.de/en/download.html" target="_blank">mp3tag</a> to add useful meta-data (aka. IDv3) to the result video or audio file.

This is quite a popular post: <em>iCompile-</em> <a href="https://icompile.eladkarako.com/ffmpeg-fixes-your-video-files/" target="_blank">FFMPEG Fixes Your Video Files</a>.

You can make <a href="https://icompile.eladkarako.com/ffmpeg-nightly-builds/" target="_blank">FFMPEG</a> fix pretty much <strong>every</strong> media-type (while <em>still preserving</em> important data such as cover-art and other meta-tags)
<!--more-->

<pre>
<span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>

<span style='color:#800000; font-weight:bold; '>set</span> FILE_INPUT<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"%~s1"</span>
<span style='color:#800000; font-weight:bold; '>set</span> FILE_OUTPUT<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"%~d1%~p1%~n1__FIXED%~x1"</span>

<span style='color:#800000; font-weight:bold; '>call</span> ffmpeg.exe <span style='color:#808030; '>-</span>y <span style='color:#808030; '>-</span>hide_banner <span style='color:#808030; '>-</span>loglevel <span style='color:#0000e6; '>"info"</span> <span style='color:#808030; '>-</span>stats        <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags             <span style='color:#0000e6; '>"-loop+naq+low_delay+global_header"</span>         <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>fflags            <span style='color:#0000e6; '>"-fastseek+genpts+discardcorrupt+nofillin"</span>  <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags2            <span style='color:#0000e6; '>"+fast+ignorecrop+showall+export_mvs"</span>       <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>avoid_negative_ts <span style='color:#0000e6; '>"make_zero"</span>                                 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>analyzeduration   <span style='color:#0000e6; '>"2000000"</span>                                   <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>threads <span style='color:#008c00; '>16</span>                                                    <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>i <span style='color:#797997; '>%FILE_INPUT%</span>                                                <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>movflags          <span style='color:#0000e6; '>"+rtphint+dash+disable_chpl+faststart"</span>      <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>map_metadata      <span style='color:#0000e6; '>"0"</span> <span style='color:#808030; '>-</span>write_id3v2 <span style='color:#0000e6; '>"1"</span> <span style='color:#808030; '>-</span>id3v2_version <span style='color:#0000e6; '>"3"</span>     <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>c <span style='color:#800000; font-weight:bold; '>copy</span>                                                        <span style='color:#808030; '>^</span>
<span style='color:#797997; '>%FILE_OUTPUT%</span>

<span style='color:#800000; font-weight:bold; '>pause</span>
</pre>

<hr/>

It is, also, <strong>super-fast</strong>, since there is no actual-encoding happening, just <em>mux'ing</em>.
<pre>
 _______              ______________            ________
|       |            |              |          |        |
| input |  demuxer   | encoded data |  muxer   | output |
| file  | ---------&gt; | packets      | -------&gt; | file   |
|_______|            |______________|          |________|
</pre>

<!--more-->
<hr/>

The <code>__FIXED</code> suffix, can help you quickly identify the fixed-files in the entire folder,
for example, here is how to list them all:

<pre>
<span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>

<span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> # Media-List(%DATE% %TIME%) </span><span style='color:#808030; '>&gt;</span>list.txt
<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#797997; '>%%</span>e <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span>*__FIXED.*<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> file </span>'<span style='color:#797997; '>%%</span>e' <span style='color:#808030; '>&gt;</span><span style='color:#808030; '>&gt;</span>list.txt
<span style='color:#808030; '>)</span>
</pre>

<hr/>

The list above can be used to concatenate all of the media-files, into one container:

<pre>
<span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>

<span style='color:#800000; font-weight:bold; '>call</span> ffmpeg.exe <span style='color:#808030; '>-</span>y <span style='color:#808030; '>-</span>hide_banner <span style='color:#808030; '>-</span>loglevel <span style='color:#0000e6; '>"info"</span> <span style='color:#808030; '>-</span>stats        <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>safe <span style='color:#0000e6; '>"0"</span>  <span style='color:#808030; '>-</span>f concat  <span style='color:#808030; '>-</span>i <span style='color:#0000e6; '>"list.txt"</span>                            <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>c <span style='color:#800000; font-weight:bold; '>copy</span>                                                        <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>threads <span style='color:#008c00; '>16</span>                                                    <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags             <span style='color:#0000e6; '>"-loop+naq+low_delay+global_header"</span>         <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>fflags            <span style='color:#0000e6; '>"-fastseek+genpts+discardcorrupt+nofillin"</span>  <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags2            <span style='color:#0000e6; '>"+fast+ignorecrop+showall+export_mvs"</span>       <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>movflags          <span style='color:#0000e6; '>"+rtphint+dash+disable_chpl+faststart"</span>      <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>avoid_negative_ts <span style='color:#0000e6; '>"make_zero"</span>                                 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>analyzeduration   <span style='color:#0000e6; '>"2000000"</span>                                   <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>map_metadata      <span style='color:#0000e6; '>"0"</span> <span style='color:#808030; '>-</span>write_id3v2 <span style='color:#0000e6; '>"1"</span> <span style='color:#808030; '>-</span>id3v2_version <span style='color:#0000e6; '>"3"</span>     <span style='color:#808030; '>^</span>
output.mkv

<span style='color:#800000; font-weight:bold; '>pause</span>
</pre>

<hr/>

<span style="font-size:14pt; text-decoration:underline; font-style:italic;">Fix A Lot Of Files At The Same Time</span>

Say you have couple of audio files:
<img src="https://icompile.eladkarako.com/_uploads/2017/01/couple_of_audio_files.png" alt="" width="350" height="172" />

Copy&paste this to <code>_file.cmd</code>:
<pre>
<span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>

<span style='color:#800000; font-weight:bold; '>set</span> FILE_INPUT<span style='color:#808030; '>=</span><span style='color:#008c00; '>%~s1</span>
<span style='color:#800000; font-weight:bold; '>set</span> FOLDER_OUTPUT<span style='color:#808030; '>=</span><span style='color:#008c00; '>%~d1</span><span style='color:#008c00; '>%~p1</span>FIXED
<span style='color:#800000; font-weight:bold; '>set</span> FILE_OUTPUT<span style='color:#808030; '>=</span><span style='color:#008c00; '>%~n1</span><span style='color:#008c00; '>%~x1</span>

<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>NOT</span> <span style='color:#800000; font-weight:bold; '>exist</span> <span style='color:#0000e6; '>"%FOLDER_OUTPUT%\\"    mkdir "</span><span style='color:#797997; '>%FOLDER_OUTPUT%</span><span style='color:#808030; '>\\</span>"

<span style='color:#800000; font-weight:bold; '>call</span> ffmpeg.exe <span style='color:#808030; '>-</span>y <span style='color:#808030; '>-</span>hide_banner <span style='color:#808030; '>-</span>loglevel <span style='color:#0000e6; '>"info"</span> <span style='color:#808030; '>-</span>stats        <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags             <span style='color:#0000e6; '>"-loop+naq+low_delay+global_header"</span>         <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>fflags            <span style='color:#0000e6; '>"-fastseek+genpts+discardcorrupt+nofillin"</span>  <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags2            <span style='color:#0000e6; '>"+fast+ignorecrop+showall+export_mvs"</span>       <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>avoid_negative_ts <span style='color:#0000e6; '>"make_zero"</span>                                 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>analyzeduration   <span style='color:#0000e6; '>"2000000"</span>                                   <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>threads <span style='color:#008c00; '>16</span>                                                    <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>i <span style='color:#0000e6; '>"%FILE_INPUT%"</span>                                              <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>movflags          <span style='color:#0000e6; '>"+rtphint+dash+disable_chpl+faststart"</span>      <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>map_metadata      <span style='color:#0000e6; '>"0"</span> <span style='color:#808030; '>-</span>write_id3v2 <span style='color:#0000e6; '>"1"</span> <span style='color:#808030; '>-</span>id3v2_version <span style='color:#0000e6; '>"3"</span>     <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>c <span style='color:#800000; font-weight:bold; '>copy</span>                                                        <span style='color:#808030; '>^</span>
<span style='color:#0000e6; '>"%FOLDER_OUTPUT%\\%FILE_OUTPUT%"</span>

<span style='color:#800000; font-weight:bold; '>exit</span>
</pre>

and this to <code>_start_all.cmd</code>:
<pre>
<span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>
<span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> I am the runner</span>
<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#797997; '>%%</span>e <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span>*.mp3 *.acc *.m4a<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span>
  <span style='color:#800000; font-weight:bold; '>start</span> <span style='color:#808030; '>/</span><span style='color:#800000; font-weight:bold; '>low</span> <span style='color:#0000e6; '>"cmd /c "</span><span style='color:#800000; font-weight:bold; '>call</span> _file.<span style='color:#800000; font-weight:bold; '>cmd</span> <span style='color:#0000e6; '>"%%e"</span><span style='color:#0000e6; '>""</span>
<span style='color:#808030; '>)</span>
</pre>

<em>Note: you may modify <code>(*.mp3 *.acc *.m4a)</code> to include any other media-file!</em>

Place the <code>cmd</code> files at the same folder as the media-files:
<img src="https://icompile.eladkarako.com/_uploads/2017/01/with_batch_files.png" alt="" width="558" height="169" />

and run the <code>_start_all.cmd</code>,
<strong>all the files will be fixed in parallel, instead of one-after-the-other.</strong>
overall it will take about ~2 seconds :]

Fixed files will be placed under a new folder named: <code>FIXED</code> (the files will have the same name as the original).

<img src="https://icompile.eladkarako.com/_uploads/2017/01/fixed_done.png" alt="" width="663" height="168"/>


This is will generate a text file filed with all the mp3 files in the folder,
it will also PRE QUERY each file using FFPROBE and will add the result to the file,
helping to avoid sync-or-duration problems.

ffprobe supports built-in formatting, which might help you avoid using external commands such as cut, sed, grep, etc... .

<!--more-->

The result is an improved (but not encoded) combination of all the mp3 files,

name it something like <code>merge_mp3.cmd</code>.

<pre>
<span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>exist</span> list.txt   <span style='color:#808030; '>(</span> <span style='color:#800000; font-weight:bold; '>del</span> <span style='color:#808030; '>/</span>f <span style='color:#808030; '>/</span>q list.txt   <span style='color:#808030; '>&gt;</span><span style='color:#800000; font-weight:bold; '>nul</span> <span style='color:#808030; '>)</span><span style='color:#808030; '>;</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>exist</span> output.mp3 <span style='color:#808030; '>(</span> <span style='color:#800000; font-weight:bold; '>del</span> <span style='color:#808030; '>/</span>f <span style='color:#808030; '>/</span>q output.mp3 <span style='color:#808030; '>&gt;</span><span style='color:#800000; font-weight:bold; '>nul</span> <span style='color:#808030; '>)</span><span style='color:#808030; '>;</span>


<span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> # MP3 LIST(%DATE% %TIME%)</span><span style='color:#808030; '>&gt;</span>list.txt
<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#797997; '>%%</span>e <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span>*.mp3<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> file </span>'<span style='color:#797997; '>%%</span>e'<span style='color:#808030; '>&gt;</span><span style='color:#808030; '>&gt;</span>list.txt

  <span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#808030; '>/</span>f <span style='color:#0000e6; '>"tokens=*"</span> <span style='color:#797997; '>%%</span>a <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span>'ffprobe <span style='color:#808030; '>-</span>i <span style='color:#0000e6; '>"%%e"</span> <span style='color:#808030; '>-</span>v <span style='color:#0000e6; '>"error"</span> <span style='color:#808030; '>-</span>select_streams <span style='color:#0000e6; '>"a:0"</span> <span style='color:#808030; '>-</span>show_entries <span style='color:#0000e6; '>"stream=duration"</span> <span style='color:#808030; '>-</span>print_format <span style='color:#0000e6; '>"default=noprint_wrappers=1:nokey=1"</span>'<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span> 
    <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> duration %%a</span><span style='color:#808030; '>&gt;</span><span style='color:#808030; '>&gt;</span>list.txt
  <span style='color:#808030; '>)</span><span style='color:#808030; '>;</span>
  
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '>.</span><span style='color:#808030; '>&gt;</span><span style='color:#808030; '>&gt;</span>list.txt
<span style='color:#808030; '>)</span>

<span style='color:#800000; font-weight:bold; '>call</span> ffmpeg.exe <span style='color:#808030; '>-</span>y <span style='color:#808030; '>-</span>hide_banner <span style='color:#808030; '>-</span>loglevel <span style='color:#0000e6; '>"info"</span> <span style='color:#808030; '>-</span>stats        <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags             <span style='color:#0000e6; '>"-loop+naq+low_delay+global_header"</span>         <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>fflags            <span style='color:#0000e6; '>"-fastseek+genpts+discardcorrupt+nofillin"</span>  <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags2            <span style='color:#0000e6; '>"+fast+ignorecrop+showall+export_mvs"</span>       <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>avoid_negative_ts <span style='color:#0000e6; '>"make_zero"</span>                                 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>analyzeduration   <span style='color:#0000e6; '>"2000000"</span>                                   <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>threads <span style='color:#008c00; '>16</span>                                                    <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>safe <span style='color:#0000e6; '>"0"</span> <span style='color:#808030; '>-</span>f concat <span style='color:#808030; '>-</span>i <span style='color:#0000e6; '>"list.txt"</span>                              <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>movflags          <span style='color:#0000e6; '>"+rtphint+dash+disable_chpl+faststart"</span>      <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>map_metadata      <span style='color:#0000e6; '>"0"</span> <span style='color:#808030; '>-</span>write_id3v2 <span style='color:#0000e6; '>"1"</span> <span style='color:#808030; '>-</span>id3v2_version <span style='color:#0000e6; '>"3"</span>     <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>c<span style='color:#808030; '>:</span>a libmp3lame <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>c <span style='color:#800000; font-weight:bold; '>copy</span>  <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>f mp3 output.mp3

<span style='color:#800000; font-weight:bold; '>pause</span>
</pre>

the ffprobe command above will output a single float value (for example: <code>607.503673</code>) which should not be wrapped in inverted commas,
you can get a human-readable value (but not for the use of the concat process, maybe just for your information) by adding <code>-sexagesimal</code> (example output: <code>0:10:07.503673</code>).
<!--more-->

you can follow-up and encode the result with the following code.

name it something like <code>re_encode_mp3.cmd</code>

<pre>
<span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>

<span style='color:#800000; font-weight:bold; '>call</span> ffmpeg.exe <span style='color:#808030; '>-</span>y <span style='color:#808030; '>-</span>hide_banner <span style='color:#808030; '>-</span>loglevel <span style='color:#0000e6; '>"info"</span> <span style='color:#808030; '>-</span>stats        <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags             <span style='color:#0000e6; '>"-loop+naq+low_delay+global_header"</span>         <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>fflags            <span style='color:#0000e6; '>"-fastseek+genpts+discardcorrupt+nofillin"</span>  <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>flags2            <span style='color:#0000e6; '>"+fast+ignorecrop+showall+export_mvs"</span>       <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>avoid_negative_ts <span style='color:#0000e6; '>"make_zero"</span>                                 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>analyzeduration   <span style='color:#0000e6; '>"2000000"</span>                                   <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>threads <span style='color:#008c00; '>16</span>                                                    <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>i <span style='color:#0000e6; '>"output.mp3"</span>                                                <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>movflags          <span style='color:#0000e6; '>"+rtphint+dash+disable_chpl+faststart"</span>      <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>map_metadata      <span style='color:#0000e6; '>"0"</span> <span style='color:#808030; '>-</span>write_id3v2 <span style='color:#0000e6; '>"1"</span> <span style='color:#808030; '>-</span>id3v2_version <span style='color:#0000e6; '>"3"</span>     <span style='color:#808030; '>^</span>
 <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>af <span style='color:#0000e6; '>"asetpts=PTS-STARTPTS,aresample=async=1:min_hard_comp=0.100000"</span>  <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span>c<span style='color:#808030; '>:</span>a libmp3lame <span style='color:#808030; '>-</span>b<span style='color:#808030; '>:</span>a 128k <span style='color:#808030; '>-</span>ar <span style='color:#008c00; '>44100</span>                                  <span style='color:#808030; '>^</span>
output_fixed.mp3

<span style='color:#800000; font-weight:bold; '>pause</span>
</pre>

the result should be faster than encoding in one go :]
', 'FFMPEG - Pre-Fill File Duration Into FFMPEG's MP3-Concatenation File-List
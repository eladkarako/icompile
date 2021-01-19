aria2c <sup><a target="_blank" href="https://aria2.github.io/">https://aria2.github.io/</a></sup> is a console-multi-part download manager, very similar to cURL or wGET. It also allow you to download a single file, using multiple-partial segments, downloading the whole thing much faster (assuming the host isn't limiting download speed by IP, or block multipart downloads).

<img src="https://icompile.eladkarako.com/_uploads/2017/01/icompile.eladkarako.com_console_multi_part_download_manager_aria2c_parallel_downloader.png" alt="" width="1023" height="231" />

It also allows you to download same file from different hosts (for example a Ubuntu ISO, from few mirrors), or, simply multiple-files, from same and or different hosts with the additional of using http-pipeline to save on bandwidth, there are more stuff..

The multipart-download, may replace download-managers such as FlashGet, OrbitDownloader or (in some cases) jDownloader, mostly because it is simply script'able, you can even launch "callbacks" on several pin-points in download timeline.

I use it in plain Windows-CMD batch file, to download the latest FFMPEG from <a href="https://ffmpeg.zeranoe.com/builds/" target="_blank">https://ffmpeg.zeranoe.com/builds/</a>, including an unzip action at the end and moving some of the core-files.

There is an optional <code>log.txt</code> file creating, which may be useful for debug..
pre-locating using <code>falloc</code> is mostly for NTFS (not FAT32!) and newer file-OS, 
You may download aria2c, and run it with <code>--help</code> for all of the other switches..

<!--more-->

<pre><span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>

<span style='color:#696969; '>::pre-cleanup</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>exist</span> <span style='color:#0000e6; '>".\\ffmpeg-latest-win64-static.zip"</span> <span style='color:#808030; '>(</span>
  <span style='color:#800000; font-weight:bold; '>del</span> <span style='color:#808030; '>/</span>f <span style='color:#808030; '>/</span>q <span style='color:#0000e6; '>".\\ffmpeg-latest-win64-static.zip"</span> <span style='color:#808030; '>></span><span style='color:#800000; font-weight:bold; '>nul</span>
<span style='color:#808030; '>)</span>


<span style='color:#696969; '>::download</span>
D<span style='color:#808030; '>:</span><span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>dos</span><span style='color:#808030; '>\\</span>parallel_aria2<span style='color:#808030; '>\\</span>aria2c.exe   <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>split<span style='color:#808030; '>=</span><span style='color:#008c00; '>5</span>                          <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>min<span style='color:#808030; '>-</span>split<span style='color:#808030; '>-</span>size<span style='color:#808030; '>=</span>1M                <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>file</span><span style='color:#808030; '>-</span>allocation<span style='color:#808030; '>=</span>falloc           <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>check<span style='color:#808030; '>-</span>certificate<span style='color:#808030; '>=</span>false          <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>continue</span><span style='color:#808030; '>=</span>true                    <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>max<span style='color:#808030; '>-</span>connection<span style='color:#808030; '>-</span>per<span style='color:#808030; '>-</span>server<span style='color:#808030; '>=</span><span style='color:#008c00; '>16</span>     <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>timeout<span style='color:#808030; '>=</span><span style='color:#008c00; '>120</span>                      <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>connect<span style='color:#808030; '>-</span>timeout<span style='color:#808030; '>=</span><span style='color:#008c00; '>120</span>              <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>max<span style='color:#808030; '>-</span>tries<span style='color:#808030; '>=</span><span style='color:#008c00; '>3</span>                      <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>console<span style='color:#808030; '>-</span>log<span style='color:#808030; '>-</span>level<span style='color:#808030; '>=</span>notice         <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>disable<span style='color:#808030; '>-</span>ipv6<span style='color:#808030; '>=</span>true                <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>human<span style='color:#808030; '>-</span>readable<span style='color:#808030; '>=</span>true              <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>retry<span style='color:#808030; '>-</span>wait<span style='color:#808030; '>=</span><span style='color:#008c00; '>1</span>                     <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>enable<span style='color:#808030; '>-</span>http<span style='color:#808030; '>-</span>keep<span style='color:#808030; '>-</span>alive<span style='color:#808030; '>=</span>true      <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>enable<span style='color:#808030; '>-</span>http<span style='color:#808030; '>-</span>pipelining<span style='color:#808030; '>=</span>true      <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>user</span><span style='color:#808030; '>-</span>agent<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Mozilla/5.0 Chrome"</span>  <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>dir</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"."</span>                          <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>http<span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>user</span><span style='color:#808030; '>=</span>username               <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>http<span style='color:#808030; '>-</span>passwd<span style='color:#808030; '>=</span>password             <span style='color:#808030; '>^</span>
<span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>referer<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"https://zeranoe.com/"</span>   <span style='color:#808030; '>^</span>
<span style='color:#0000e6; '>"https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-latest-win64-static.zip"</span>

<span style='color:#696969; '>::move executables, move entire preset as folder.</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>exist</span> <span style='color:#0000e6; '>".\\ffmpeg-latest-win64-static.zip"</span> <span style='color:#808030; '>(</span>
  unzip <span style='color:#0000e6; '>".\\ffmpeg-latest-win64-static.zip"</span>
  
  <span style='color:#800000; font-weight:bold; '>move</span> <span style='color:#808030; '>/</span>y .<span style='color:#808030; '>\\</span>ffmpeg<span style='color:#808030; '>-</span>latest<span style='color:#808030; '>-</span>win64<span style='color:#808030; '>-</span>static<span style='color:#808030; '>\\</span>bin<span style='color:#808030; '>\\</span>*.exe .<span style='color:#808030; '>\\</span>..
  <span style='color:#800000; font-weight:bold; '>move</span> <span style='color:#808030; '>/</span>y .<span style='color:#808030; '>\\</span>ffmpeg<span style='color:#808030; '>-</span>latest<span style='color:#808030; '>-</span>win64<span style='color:#808030; '>-</span>static<span style='color:#808030; '>\\</span>presets<span style='color:#808030; '>\\</span>.  .<span style='color:#808030; '>\\</span>..
  
  <span style='color:#800000; font-weight:bold; '>rmdir</span> <span style='color:#808030; '>/</span>s <span style='color:#808030; '>/</span>q  <span style='color:#0000e6; '>".\\ffmpeg-latest-win64-static\\"</span>    <span style='color:#808030; '>></span><span style='color:#800000; font-weight:bold; '>nul</span>
  <span style='color:#800000; font-weight:bold; '>del</span>   <span style='color:#808030; '>/</span>f <span style='color:#808030; '>/</span>q  <span style='color:#0000e6; '>".\\ffmpeg-latest-win64-static.zip"</span> <span style='color:#808030; '>></span><span style='color:#800000; font-weight:bold; '>nul</span>
<span style='color:#808030; '>)</span>

<span style='color:#800000; font-weight:bold; '>pause</span>

<span style='color:#696969; '>::  --log=log.txt                      ^</span>
<span style='color:#696969; '>::  --log-level=info                   ^</span>
</pre>
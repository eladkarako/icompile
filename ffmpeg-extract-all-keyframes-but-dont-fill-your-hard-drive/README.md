<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px__2016-01-18_033413.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px__2016-01-18_033413" width="972" height="512" class="alignnone size-full wp-image-4382" />

The following line will
- extract (well.. generate) an keyframe representing image, of EVERY keyframe image in your video file,
- a "ratio-correct" 100 pixel width image,
- a loosely JPEG output with quality of 15, which is about 53% (from 0-100) in terms of quality where 100 is highest quality and 0 is lowest quality,
- all total it will be a lot (!) of files, but 100 files will weight (size) in ~67.2 KB,
which if you'll be using this command to generate a way of (let's say..) trimming a video by visually showing the keyframes, and providing a range collector (..for example), will still generate nice output,

you can even stretch it a bit (in client side!) so it will "look bigger" if you'll keep the 100x? ratio (which is easy to remember, right?)

<pre>ffmpeg -threads 4 -i my_movie.mp4 -vf "select=eq(pict_type\\,I)" -vsync vfr -filter:v scale=100:-1,crop=iw:ih*0.8 -q:v 15 -qscale:v 15 out%05d.jpg</pre>

<pre><style>
pre[image-container]{ display: table-row; }
</style></pre>


Here are the first ~~52 frames of <a href="https://www.youtube-nocookie.com/embed/z0ik1IOKG5I?rel=0&amp;showinfo=0&amp;showads=0" target="_blank">this YouTube video</a>:
<iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/z0ik1IOKG5I?rel=0&amp;showinfo=0&amp;showads=0" frameborder="0" allowfullscreen></iframe>

<!--more-->


<pre>
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00001.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00001" width="100" height="44" class="alignnone size-full wp-image-4330" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00002.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00002" width="100" height="44" class="alignnone size-full wp-image-4331" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00003.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00003" width="100" height="44" class="alignnone size-full wp-image-4332" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00004.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00004" width="100" height="44" class="alignnone size-full wp-image-4333" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00005.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00005" width="100" height="44" class="alignnone size-full wp-image-4334" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00006.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00006" width="100" height="44" class="alignnone size-full wp-image-4335" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00007.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00007" width="100" height="44" class="alignnone size-full wp-image-4336" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00008.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00008" width="100" height="44" class="alignnone size-full wp-image-4337" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00009.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00009" width="100" height="44" class="alignnone size-full wp-image-4338" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00010.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00010" width="100" height="44" class="alignnone size-full wp-image-4339" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00011.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00011" width="100" height="44" class="alignnone size-full wp-image-4340" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00012.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00012" width="100" height="44" class="alignnone size-full wp-image-4341" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00013.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00013" width="100" height="44" class="alignnone size-full wp-image-4342" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00014.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00014" width="100" height="44" class="alignnone size-full wp-image-4343" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00015.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00015" width="100" height="44" class="alignnone size-full wp-image-4344" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00016.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00016" width="100" height="44" class="alignnone size-full wp-image-4345" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00017.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00017" width="100" height="44" class="alignnone size-full wp-image-4346" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00018.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00018" width="100" height="44" class="alignnone size-full wp-image-4347" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00019.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00019" width="100" height="44" class="alignnone size-full wp-image-4348" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00020.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00020" width="100" height="44" class="alignnone size-full wp-image-4349" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00021.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00021" width="100" height="44" class="alignnone size-full wp-image-4350" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00022.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00022" width="100" height="44" class="alignnone size-full wp-image-4351" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00023.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00023" width="100" height="44" class="alignnone size-full wp-image-4352" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00024.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00024" width="100" height="44" class="alignnone size-full wp-image-4353" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00025.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00025" width="100" height="44" class="alignnone size-full wp-image-4354" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00026.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00026" width="100" height="44" class="alignnone size-full wp-image-4355" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00027.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00027" width="100" height="44" class="alignnone size-full wp-image-4356" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00028.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00028" width="100" height="44" class="alignnone size-full wp-image-4357" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00029.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00029" width="100" height="44" class="alignnone size-full wp-image-4358" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00030.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00030" width="100" height="44" class="alignnone size-full wp-image-4359" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00031.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00031" width="100" height="44" class="alignnone size-full wp-image-4360" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00032.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00032" width="100" height="44" class="alignnone size-full wp-image-4361" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00033.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00033" width="100" height="44" class="alignnone size-full wp-image-4362" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00034.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00034" width="100" height="44" class="alignnone size-full wp-image-4363" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00035.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00035" width="100" height="44" class="alignnone size-full wp-image-4364" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00036.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00036" width="100" height="44" class="alignnone size-full wp-image-4365" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00037.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00037" width="100" height="44" class="alignnone size-full wp-image-4366" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00038.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00038" width="100" height="44" class="alignnone size-full wp-image-4367" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00039.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00039" width="100" height="44" class="alignnone size-full wp-image-4368" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00040.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00040" width="100" height="44" class="alignnone size-full wp-image-4369" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00041.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00041" width="100" height="44" class="alignnone size-full wp-image-4370" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00042.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00042" width="100" height="44" class="alignnone size-full wp-image-4371" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00043.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00043" width="100" height="44" class="alignnone size-full wp-image-4372" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00044.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00044" width="100" height="44" class="alignnone size-full wp-image-4373" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00045.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00045" width="100" height="44" class="alignnone size-full wp-image-4374" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00046.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00046" width="100" height="44" class="alignnone size-full wp-image-4375" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00047.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00047" width="100" height="44" class="alignnone size-full wp-image-4376" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00048.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00048" width="100" height="44" class="alignnone size-full wp-image-4377" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00049.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00049" width="100" height="44" class="alignnone size-full wp-image-4378" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00050.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00050" width="100" height="44" class="alignnone size-full wp-image-4379" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00051.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00051" width="100" height="44" class="alignnone size-full wp-image-4380" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00052.jpg" alt="icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00052" width="100" height="44" class="alignnone size-full wp-image-4381" />
</pre>

Looking on one of the images, if you'll keep the ratio you can probably "fake" resize it, still holding the same file size, on reasonable quality

original:
<code>&lt;img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00052.jpg" width="100" height="44" /&gt;</code>
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00052.jpg" width="100" height="44" />

x1.5
<code>..width="150" height="66"..</code>
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00052.jpg" width="150" height="66" />

x2
<code>..width="200" height="88"..</code>
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_ffmpeg_keyframes_extraction_100px_00052.jpg" width="200" height="88" />


still looks quite decent :)

naturally you can always scale up:
- image size (by width and ratio -- eventually amount of pixels in the image),
- quality (both <code>-q</code> factors from 1 to 32 <sub>where 32 is worst-quality and <strong>1 is best</strong></sub>) - to vary the JPEG compression algorithm

', 'FFMPEG - Extract All Keyframes
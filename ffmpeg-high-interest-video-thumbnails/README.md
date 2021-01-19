<pre><style>
pre[image-container]{ display: table-row; }
</style></pre>
<ul>
<li>
ffmpeg is capable of measuring the difference between every scene,
and you may specify you want the difference to be above/below some rate to include that thumbnail.
</li>
<li>
black/white/uni-color screens are common as a transition, and are not a "problem", we should generate quite a lot of thumbnails, and storing them as JPG (loosely format), which has very high compression rate for uni-color images, web can sort the images by size (later) and just remove that below 1kb images.
</li>
<li>
the same issue can also be addressed by performing quite large jumps into the movie, which in-turn also generate a more story-line variety.
</li>
<li>
Just Good Business:
- Keeping thumbnails small enough, undistorted (in ratio) can be easily achieved by limiting the width to <code>200</code> pixels, together with height-ratio matching and smart-cropping, this way, in-image is mostly undisrupted, cropped without missing important-ingredient and provide unified size.
- zero-padded output file name can help with sorting on older systems that might sort 10.jpg right after 1.jpg in normal cases (Windows XP/NT and below).
</li>
</ul>

<pre>ffmpeg -ss 100 -i my_movie.mp4 -vf "select=gt(scene\\,0.1)" -frames:v 50 -filter:v scale=200:-1,crop=iw:ih*0.8,fps=1/10 out%04d.jpg</pre>


for example this ~4minutes <a href="https://www.youtube-nocookie.com/embed/z0ik1IOKG5I?rel=0&amp;showinfo=0&amp;showads=0" target="_blank">YouTube Video</a>:
<iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/z0ik1IOKG5I?rel=0&amp;showinfo=0&amp;showads=0" frameborder="0" allowfullscreen></iframe>
<!--more-->


- the command line would probably won't give you as many as 50 thumbnails (address the command as "maximum 50 frames" it is depending on the length of the jump (<code>-ss 100</code>) which can be adjusted to much less on shorter videos (<code>50</code>, <code>20</code> or even <code>10</code>),
- just bare in mind that lowering the jump rate will probably hit those black screens transitions (which are common in lammmmeeee video editing...)

Jump (<code>-ss</code>) <code>20</code>:
<pre><img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0001.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0001" width="200" height="90" class="alignnone size-full wp-image-4256" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0002.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0002" width="200" height="90" class="alignnone size-full wp-image-4257" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0003.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0003" width="200" height="90" class="alignnone size-full wp-image-4258" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0004.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0004" width="200" height="90" class="alignnone size-full wp-image-4259" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0005.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0005" width="200" height="90" class="alignnone size-full wp-image-4260" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0006.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0006" width="200" height="90" class="alignnone size-full wp-image-4261" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0007.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0007" width="200" height="90" class="alignnone size-full wp-image-4262" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0008.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0008" width="200" height="90" class="alignnone size-full wp-image-4263" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0009.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0009" width="200" height="90" class="alignnone size-full wp-image-4264" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0010.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0010" width="200" height="90" class="alignnone size-full wp-image-4265" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0011.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0011" width="200" height="90" class="alignnone size-full wp-image-4266" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0012.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0012" width="200" height="90" class="alignnone size-full wp-image-4267" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0013.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0013" width="200" height="90" class="alignnone size-full wp-image-4268" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0014.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0014" width="200" height="90" class="alignnone size-full wp-image-4269" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0015.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0015" width="200" height="90" class="alignnone size-full wp-image-4270" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0016.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0016" width="200" height="90" class="alignnone size-full wp-image-4271" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0017.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0017" width="200" height="90" class="alignnone size-full wp-image-4272" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0018.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0018" width="200" height="90" class="alignnone size-full wp-image-4273" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0019.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0019" width="200" height="90" class="alignnone size-full wp-image-4274" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0020.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0020" width="200" height="90" class="alignnone size-full wp-image-4275" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0021.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0021" width="200" height="90" class="alignnone size-full wp-image-4276" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0022.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0022" width="200" height="90" class="alignnone size-full wp-image-4277" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0023.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_20__thumbnail_0023" width="200" height="90" class="alignnone size-full wp-image-4278" />
</pre>

<hr />

raising jump (<code>-ss</code>) back to <code>100</code> will improve the storyline variety, but, naturally, will lower the number of thumbnails rendered:

<pre>
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0001.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0001" width="200" height="90" class="alignnone size-full wp-image-4279" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0002.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0002" width="200" height="90" class="alignnone size-full wp-image-4280" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0003.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0003" width="200" height="90" class="alignnone size-full wp-image-4281" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0004.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0004" width="200" height="90" class="alignnone size-full wp-image-4282" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0005.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0005" width="200" height="90" class="alignnone size-full wp-image-4283" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0006.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0006" width="200" height="90" class="alignnone size-full wp-image-4284" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0007.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0007" width="200" height="90" class="alignnone size-full wp-image-4285" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0008.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0008" width="200" height="90" class="alignnone size-full wp-image-4286" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0009.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0009" width="200" height="90" class="alignnone size-full wp-image-4287" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0010.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0010" width="200" height="90" class="alignnone size-full wp-image-4288" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0011.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0011" width="200" height="90" class="alignnone size-full wp-image-4289" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0012.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0012" width="200" height="90" class="alignnone size-full wp-image-4290" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0013.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0013" width="200" height="90" class="alignnone size-full wp-image-4291" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0014.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0014" width="200" height="90" class="alignnone size-full wp-image-4292" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0015.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_at_100__thumbnail_0015" width="200" height="90" class="alignnone size-full wp-image-4293" />
</pre>


oh, and, by the way- those black frames are about ~1.36KB while the other thumbnails are about ~4-9KB (depending on amount of colors in the image and placement near each other, which is how the JPEG compression algorithm works..).

another variation is the scene difference which is currently on 0.1 rendering a quite different scenes,
we can bring it around 0.4, and lower the jump to <code>20</code> to see the quality of interest, of result.
<pre>ffmpeg -ss 20 -i "PEOPLE ARE AWESOME! 2016 (UNBELIEVABLE).mp4" -vf "select=gt(scene\\,0.4)" -frames:v 50 -filter:v scale=200:-1,crop=iw:ih*0.8,fps=1/10 icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_%04d.jpg</pre>

now, those sort of videos are constructed of mostly multi-scenes with sharp transition so we would still (probably) get a nice result:

<pre>
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0001.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0001" width="200" height="90" class="alignnone size-full wp-image-4294" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0002.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0002" width="200" height="90" class="alignnone size-full wp-image-4295" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0003.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0003" width="200" height="90" class="alignnone size-full wp-image-4296" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0004.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0004" width="200" height="90" class="alignnone size-full wp-image-4297" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0005.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0005" width="200" height="90" class="alignnone size-full wp-image-4298" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0006.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0006" width="200" height="90" class="alignnone size-full wp-image-4299" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0007.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0007" width="200" height="90" class="alignnone size-full wp-image-4300" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0008.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0008" width="200" height="90" class="alignnone size-full wp-image-4301" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0009.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0009" width="200" height="90" class="alignnone size-full wp-image-4302" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0010.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0010" width="200" height="90" class="alignnone size-full wp-image-4303" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0011.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0011" width="200" height="90" class="alignnone size-full wp-image-4304" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0012.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0012" width="200" height="90" class="alignnone size-full wp-image-4305" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0013.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0013" width="200" height="90" class="alignnone size-full wp-image-4306" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0014.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0014" width="200" height="90" class="alignnone size-full wp-image-4307" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0015.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0015" width="200" height="90" class="alignnone size-full wp-image-4308" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0016.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0016" width="200" height="90" class="alignnone size-full wp-image-4309" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0017.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0017" width="200" height="90" class="alignnone size-full wp-image-4310" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0018.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0018" width="200" height="90" class="alignnone size-full wp-image-4311" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0019.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0019" width="200" height="90" class="alignnone size-full wp-image-4312" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0020.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0020" width="200" height="90" class="alignnone size-full wp-image-4313" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0021.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0021" width="200" height="90" class="alignnone size-full wp-image-4314" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0022.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0022" width="200" height="90" class="alignnone size-full wp-image-4315" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0023.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__thumbnail_0023" width="200" height="90" class="alignnone size-full wp-image-4316" />
</pre>

mmmm... 
as you can see:
<pre>
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__comparing_2016-01-18_014240.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__comparing_2016-01-18_014240" width="555" height="137" class="alignnone size-full wp-image-4317" /> <img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__comparing_2016-01-18_014408.jpg" alt="icompile.eladkarako.com__ffmpeg_generate_high_interest_thumbnails__just_back_at_20__scene_at_0_4__comparing_2016-01-18_014408" width="350" height="134" class="alignnone size-full wp-image-4318" />
</pre>

the result is not as good as keeping the scene at lower-rates,
similar colors scenes are generated, which drop the interest rate down down <sub>down...</sub> :)

so it is always better keep the scene variable low, the jump rate (-ss) high (relative to video's length), the frames above 50, which will render more than enough thumbnails, which you can sort by size later, deleting those which are around 2KB which has low amount of colors, which also means they are boring! 

this rule-of-thumb (ha! thumbnail/rule of thumb -- you see what I've did there?)
can be applied beyond removing black screens, if you'll always delete one tenth of your thumbnails, removing the ones which their size is lower first, you can alway assure a high amount of colors, which in combination of high rate of story line jump rate (-ss) and scene variation - WILL result with a high interest thumbnail scenes.

Nice!

<hr/>

<span box-like>May 23, 2016 Edit</span>
I had great result when I've increased the <a rel="nofollow" title="http://www.ffmpeg.org/ffmpeg-codecs.html#Codec-Options" href="http://www.ffmpeg.org/ffmpeg-codecs.html#Codec-Options" target="_blank">bitrate tolerance</a> using <code>-bt</code> and increased the frame-rate, so FFMPEG will look every 60 frame/seconds each time.

<pre>
ffmpeg -threads 8 -ss 10 -i "myMovie.mkv" -bt 50M -vf "select=gt(scene\\,0.05)" -frames:v 20 -filter:v fps=1/60 out%04d.jpg
</pre>

the scene difference is VERY LOW (meaning the scenes should be VERY DIFFERENT),
FFMPEG will take longer to calculate those.. BUT- you'll (probably) get a VERY different color/lighting theme, etc..
..which is a good thing :)))



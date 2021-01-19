<blockquote>
<span box-like>June 2<sup>nd</sup>, 2016</span>
- you might as well just put 1280x720 after cropping to the 16:9 ratio...

<pre>
call ffmpeg -threads 8 -i %VIDEO% -g 5 -vf "yadif=0:0:1" -vsync 2 -async 1 -c:v libx264 -preset slow -crf 18 -c:a libvorbis -q:a 5 -pix_fmt yuv420p -vf "crop=in_h*16/9:in_h,scale=1280:720" %OUTPUT%
</pre>
</blockquote>
<hr/>
<blockquote>
<span box-like>June 2<sup>nd</sup>, 2016</span>
1. match either height or width to a 16/9 box.
2. crop the unnecessary (extra) width or height.
3. scale to 1280x720.

<code>"scale='if(gt(a,16/9),1280,-1)':'if(gt(a,16/9),-1,720)',crop='in_h*16/9:in_h',scale='trunc(oh*a/2)*2:720'"</code>
</blockquote>
<hr/>
<blockquote>
<span box-like>June 2<sup>nd</sup>, 2016</span>
- this will make sure the video is 16/9 ratio, by cropping to the ratio.
- than the scale will make sure that the height is 720 (which means the height is 1280...)

<pre>
call ffmpeg -threads 8 -i %VIDEO% -g 5 -vf "yadif=0:0:1" -vsync 2 -async 1 -c:v libx264 -preset slow -crf 18 -c:a libvorbis -q:a 5 -pix_fmt yuv420p -vf "crop=in_h*16/9:in_h,scale=trunc(oh*a/2)*2:720"  %OUTPUT%
</pre>
</blockquote>
<hr/>
<blockquote>
<span box-like>June 2<sup>nd</sup>, 2016</span>
- this will fix the "not divided with 2" error....

<pre>
call ffmpeg -threads 8 -i %VIDEO% -g 5 -vf "yadif=0:0:1" -vsync 2 -async 1 -c:v libx264 -preset slow -crf 18 -c:a libvorbis -q:a 5 -pix_fmt yuv420p -vf scale=trunc(oh*a/2)*2:720  %OUTPUT%
</pre>
</blockquote>
<hr/>
<blockquote>
<span box-like>June 2<sup>nd</sup>, 2016</span>
- + boxed mode - force 1280x? or ?x720 box like with 16:9 ratio
- might not be perfect when size does not divided by 2, see above for fix.
- + it is better than just setting <code>-vf scale="-1:720"</code> with unknown width...
- will change dimensions!
 
<pre>
@echo off
set VIDEO="%~s1"
set OUTPUT="%~d1%~p1%~n1_youtube_720p.mkv"

call ffmpeg -threads 8 -i %VIDEO% -g 5 -vf "yadif=0:0:1" -vsync 2 -async 1 -c:v libx264 -preset slow -crf 18 -c:a libvorbis -q:a 5 -pix_fmt yuv420p -vf scale="'if(gt(a,16/9),1280,-1)':'if(gt(a,16/9),-1,720)'"  %OUTPUT%
</pre>
</blockquote>
<hr/>
<blockquote>
<span box-like>June 1<sup>st</sup>, 2016</span>
- + fix framing, fix video/audio sync and deinterlace for YouTube.
- + high quality encoding using <code>preset</code>, <code>CRF</code> and <code>q</code> switch.
- will not resize the video to 720p (see above)

<pre>
@echo off
set VIDEO="%~s1"
set OUTPUT="%~d1%~p1%~n1_youtube_720p.mkv"

call ffmpeg -threads 8 -i %VIDEO% -g 5 -vf "yadif=0:0:1" -vsync 2 -async 1 -c:v libx264 -preset slow -crf 18 -c:a libvorbis -q:a 5 -pix_fmt yuv420p %OUTPUT%
</pre>
</blockquote>
<hr/>


<blockquote><span box-like>June 8<sup>th</sup>, 2015</span>
- high quality MKV encoding.
- will not resize the video to 720p (see above)

<pre>
@echo off
set VIDEO="%~s1"
set OUTPUT="%~d1%~p1%~n1_youtube_720p.mkv"

call ffmpeg -threads 8 -i %VIDEO% -c:v libx264 -preset slow -crf 18 -c:a libvorbis -q:a 5 -pix_fmt yuv420p %OUTPUT%

pause
</pre>
</blockquote>

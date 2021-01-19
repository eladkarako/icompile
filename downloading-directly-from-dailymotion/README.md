<!--more-->
older notes:
<blockquote>
Open a video, open developer-tools (CTRL + SHIFT + I)
mouse-click the play button and look for incoming requests looking like
http://proxy-041.dc3.dailymotion.com/sec(5c84dd58dc367bb3ac9639da30dcfb44)/frag(1)/video/151/637/230736151_mp4_h264_aac.ts

The .TS (mimetype video/mp2t), a.k.a "MPEG-2 Transport Stream" is preety much similar to mp4 format.

I use Orbitdownloader, adding group of downloads with the following URL:
http://proxy-041.dc3.dailymotion.com/sec(5c84dd58dc367bb3ac9639da30dcfb44)/frag(1)/video/151/637/230736151_mp4_h264_aac.ts
<img src="https://icompile.eladkarako.com/_uploads/2016/05/2016-05-15_000611.png" alt="2016-05-15_000611" width="551" height="471" class="aligncenter size-full wp-image-5323" />


you can figure out sort-of the length of the segment, since each seg. is ~10 seconds,
and the body of the page (source html) has "buildPlayer({.......})..." which has
the part "client_embedder=&country=IL&length=2723&mode=vod&", divide the number by 10 and you'll get 272,

<img src="https://icompile.eladkarako.com/_uploads/2016/05/2016-05-15_000907.png" alt="2016-05-15_000907" width="1062" height="498" class="aligncenter size-full wp-image-5324" />

I've ignored any real-"length" calculation or estimation, and just added to Orbitdownloader the range of 0 to 299,
it have stopped after 273, so I've paused and deleted the rest,

joining the ts files to one mp4 is quite an "go ask google" thing..

/so-that-s--that../


another weird solutions..

ffmpeg -i "http://proxy-25.dailymotion.com/sec(e3532866da5b7e6ff4023e3691e36ada)/video/926/888/93888629_mp4_h264_aac_hq.m3u8" -c:v copy -c:a copy -bsf:a aac_adtstoasc 93888629_mp4_h264_aac_hq.mp4
ffmpeg -i "http://proxy-25.dailymotion.com/sec(e3532866da5b7e6ff4023e3691e36ada)/video/926/888/93888629_mp4_h264_aac_hq.m3u8"  -c copy t1.ts
ffmpeg -i "http://proxy-32.dailymotion.com/sec(75a791d8d28b23314bdf5737b2555eb0)/video/980/998/93899089_mp4_h264_aac_hq.m3u8"  -c copy t2.ts


ffmpeg -i "http://proxy-25.dailymotion.com/sec(e3532866da5b7e6ff4023e3691e36ada)/video/926/888/93888629_mp4_h264_aac_hq.m3u8" -c:v copy -c:a copy -bsf:a aac_adtstoasc 93888629_mp4_h264_aac_hq.mp4

</blockquote>

<hr/>

newer notes:
<blockquote>
I've I've found out that removing the <code>/frag(...)</code> part and replacing the <code>.ts</code> part with <code>m3u8</code> works fine with ffmpeg, I've just used:
<pre>
ffmpeg -i "http://proxy-041.dc3.dailymotion.com/sec(5c84dd58dc367bb3ac9639da30dcfb44)/video/151/637/230736151_mp4_h264_aac.m3u8" d.mp4
</pre>
which will re-encode video and audio, it might take more time but will render a perfectly working video..
<img src="https://icompile.eladkarako.com/_uploads/2016/05/2016-05-15_003753.png" alt="2016-05-15_003753" width="1278" height="594" class="aligncenter size-full wp-image-5327" />
</blockquote>

<hr/>

even newer notes:


<blockquote>now.. if you'll try to use copy stream to make things faster, which is a good idea,
<pre>
ffmpeg -threads 4 -i "http://proxy-041.dc3.dailymotion.com/sec(5c84dd58dc367bb3ac9639da30dcfb44)/video/151/637/230736151_mp4_h264_aac.m3u8" -threads 4 -vcodec copy -acodec copy d2.mp4
</pre>
you'll get:
<pre>
[mp4 @ 04b21660] malformated aac bitstream, use -absf aac_adtstoasc
av_interleaved_write_frame(): Operation not permitted
</pre>

but <code>-absf aac_adtstoasc</code> (by the doc.s <code>-absf audio bitstream_filters</code>) is deprecated,
using the newer directive is better: <code>-bsf:a aac_adtstoasc</code>

so the command should look something like:

<img src="https://icompile.eladkarako.com/_uploads/2016/05/2016-05-15_004838.png" alt="2016-05-15_004838" width="1295" height="599" class="aligncenter size-full wp-image-5329" />
</blockquote>

<hr/>

even even newer notes:
<blockquote>I was looking over the page's <code>http:&#47;&#47;www.dailymotion.com&#47;video&#47;x3tdh5j_%D7%90%D7%A8%D7%A5-%D7%A0%D7%94%D7%93%D7%A8%D7%AA-%D7%A2%D7%95%D7%A0%D7%94-13-%D7%A4%D7%A8%D7%A7-4_tv</code>'s requests,
and I've noticed a manifest (just as before.. from the download.. stuff..)

<code>http://www.dailymotion.com/cdn/manifest/video/x3tdh5j.m3u8?auth=1463431092-2688-ylnddc03-411c7491899659ca18506faa8e6dfbaf</code>

looking at the page's source, seems that the body's html (well.. script..) code has it, 100% complete..
<img src="https://icompile.eladkarako.com/_uploads/2016/05/2016-05-15_011129.png" alt="2016-05-15_011129" width="1270" height="201" class="aligncenter size-full wp-image-5333" />

so sending a xhr to the address (along with the fact it is cross-domain friendly) should be fairly-reasonable..

opening the url in a new tab works fine too.. so.. minimal auth will work.
here is an example content for that <code>http://www.dailymotion.com/cdn/manifest/video/x3tdh5j.m3u8?auth=1463431092-2688-ylnddc03-411c7491899659ca18506faa8e6dfbaf</code>
manifest:
<pre>
#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=460560,CODECS="mp4a.40.5,avc1.420016",RESOLUTION=512x288,NAME="380"
http://proxy-041.dc3.dailymotion.com/sec(5c84dd58dc367bb3ac9639da30dcfb44)/video/151/637/230736151_mp4_h264_aac.m3u8#cell=core
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=460560,CODECS="mp4a.40.5,avc1.420016",RESOLUTION=512x288,NAME="380"
http://proxy-057.dc3.dailymotion.com/sec(5c84dd58dc367bb3ac9639da30dcfb44)/video/151/637/230736151_mp4_h264_aac.m3u8#cell=core
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=246440,CODECS="mp4a.40.5,avc1.42000d",RESOLUTION=320x184,NAME="240"
http://proxy-041.dc3.dailymotion.com/sec(deef645bdd5e51071942bcfc5078f1ea)/video/151/637/230736151_mp4_h264_aac_ld.m3u8#cell=core
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=246440,CODECS="mp4a.40.5,avc1.42000d",RESOLUTION=320x184,NAME="240"
http://proxy-057.dc3.dailymotion.com/sec(deef645bdd5e51071942bcfc5078f1ea)/video/151/637/230736151_mp4_h264_aac_ld.m3u8#cell=core
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=836280,CODECS="mp4a.40.2,avc1.64001f",RESOLUTION=624x352,NAME="480"
http://proxy-041.dc3.dailymotion.com/sec(c016709adc127cd3bea56eeee596f932)/video/151/637/230736151_mp4_h264_aac_hq.m3u8#cell=core
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=836280,CODECS="mp4a.40.2,avc1.64001f",RESOLUTION=624x352,NAME="480"
http://proxy-057.dc3.dailymotion.com/sec(c016709adc127cd3bea56eeee596f932)/video/151/637/230736151_mp4_h264_aac_hq.m3u8#cell=core
</pre>

parsing the <code>EXTM3U</code> format can help you get various qualities the highers were the last two (by BANDWIDTH value).

there are two values, which seems to be two available proxies,
and (operating some logic here..)
I've noticed that the response-time header for the domain is exposed,
so the website may serve the the content from either of those proxies/cdn(s), the decisions is done at client side apparently  which is kind'a weird (but still ok...)

so selecting the last one, and running:
<pre>
ffmpeg -threads 4 -i "http://proxy-057.dc3.dailymotion.com/sec(c016709adc127cd3bea56eeee596f932)/video/151/637/230736151_mp4_h264_aac_hq.m3u8#cell=core" -vcodec copy -acodec copy -bsf:a aac_adtstoasc  "eretz_nehederet_s13e04.mp4"
</pre>

the <code>#cell=core</code> makes ffmpeg break..
<img src="https://icompile.eladkarako.com/_uploads/2016/05/2016-05-15_012336.png" alt="2016-05-15_012336" width="1281" height="413" class="aligncenter size-full wp-image-5334" />

I don't really want to escape stuff.. so I've just removed the "URI-hash" (<code>#cell=core</code> suffix)
and it works ok...

<img src="https://icompile.eladkarako.com/_uploads/2016/05/2016-05-15_012459.png" alt="2016-05-15_012459" width="1317" height="605" class="aligncenter size-full wp-image-5335" />
</blockquote>

<hr/>

even newer^5 notes:
<blockquote>this code will extract the "main"-manifest, the one which has whole resolutions.
document.querySelector('html').cloneNode(true).innerHTML.match(/\\"[^\\"]*\\:\\/\\/[^\\"]+manifest[^\\"]+\\"/gim).shift()

- I've using <code>document.querySelector('html').cloneNode(true)</code> as a trick,
cloning node will give you back the "from HTML source" initial rendering, so even if for some reason, to make things harder, some JavaScript will delete the script element from the page (leaving only the one in memory),
it won't matter, and still be operations.

- another way is fetching the entire page online using xhr, which is (same domain..) cross-domain-safe, and either parsing or text-matching to find it (the "main"-manifest that is..), but this way you'll be using the web again..
</blockquote>

<hr/>

new^6 notes:
<blockquote>
this is probably a better regex..
<code>document.querySelector('html').cloneNode(true).innerHTML.match(/\\"[^\\"]+manifest[^\\"]+video[^\\"]+\\.m3u8[^\\"]+auth[^\\"]+\\"/gi)[1]</code>

resulting with
<pre>""http:\\/\\/www.dailymotion.com\\/cdn\\/manifest\\/video\\/x3quehc.m3u8?auth=1463438444-2688-9g5iifnr-c3c53d7b37d06eee90bcdc88061ceaa2""
</pre>
</blockquote>

<hr/>

new^7 notes:
<blockquote>
<pre>
JSON.parse(
document.querySelector('html').cloneNode(true).innerHTML.match(/\\"[^\\"]+manifest[^\\"]+video[^\\"]+\\.m3u8[^\\"]+auth[^\\"]+\\"/gi)[1]
);
</pre>
will 'unescape' the backslash and possibly other characters without messing around with any additional regular-expressions and string-replace calls.

all you have to do is use the 'ffmpeg' solution
(download ffmpeg for windows from <a href="https://ffmpeg.zeranoe.com/builds/" target="_blank">here</a>, <a href="https://ffmpeg.zeranoe.com/builds/win32/" target="_blank">here</a> or <a href="https://ffmpeg.zeranoe.com/builds/win64/" target="_blank">here</a> - choose the 'static' version)

<code>ffmpeg -i ___the_m3u8_url___ -threads 8 -vcodec copy -acodec copy -scodec copy  output.mp4</code>

you can later follow the guide at <a href="https://icompile.eladkarako.com/ffmpeg-fixes-your-video-files/" target="_blank">iCompile - FFMPEG Fixes Your Video Files</a> to fix the output de-interlace, remove repeating frames and properly encode to play at mobile-devices or to be streamed / uploaded to youtube..
</blockquote>

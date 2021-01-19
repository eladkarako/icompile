You may use the lovely UI of <a href="http://ffmpeg.zeranoe.com/builds/" target="_blank">ffmpeg.zeranoe.com/builds/</a> to select and download the latest-build
<img src="https://icompile.eladkarako.com/_uploads/2016/12/icompile.eladkarako.com_ffmpeg_nightly_builds.png" alt="" width="722" height="401"/>

But it is not exactly "script'able",
If you would like to create an "updating script" (using <a href="https://en.wikipedia.org/wiki/CURL" target="_blank">cURL</a>/<a href="https://en.wikipedia.org/wiki/Wget" target="_blank">wGet</a>/<a href="https://aria2.github.io/" target="_blank"><strong>aria2c</strong></a> for example) you will need know how ffmpeg.zeranoe.com is structured.. :)

<!--more-->
There are, FTP-like download pages for the Win64/32 builds, at <a href="https://ffmpeg.zeranoe.com/builds/win64/" target="_blank">https://ffmpeg.zeranoe.com/builds/win64/</a> and <a href="https://ffmpeg.zeranoe.com/builds/win32/" target="_blank">https://ffmpeg.zeranoe.com/builds/win32/</a>,
where you can download specific build-versions from either the <code>/static/</code>, <code>/shared/</code> or <code>/dev/</code> (and libs from the <code>/external_libs/</code>).

This is not all wonderful since you still need to pick a specific version..
<img src="https://icompile.eladkarako.com/_uploads/2016/12/icompile.eladkarako.com_ffmpeg_nightly_builds_ftp_like.png" alt="" width="678" height="350"/>

There is however another entry, named latest (you might not have noticed it at first, unless you've sorted the download links by "Last-Modified" <sup><a href="https://ffmpeg.zeranoe.com/builds/win64/static/?C=M;O=D" target="_blank">#1</a> or <a href="https://ffmpeg.zeranoe.com/builds/win32/static/?C=M;O=D" target="_blank">#2</a></sup>)

Here are the direct-links to the static builds (which are preferred over the shared version!):
<a href="https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-latest-win64-static.zip" target="_blank">https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-latest-win64-static.zip</a>
<a href="https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-latest-win64-static.7z" target="_blank">https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-latest-win64-static.7z</a>
<a href="https://ffmpeg.zeranoe.com/builds/win32/static/ffmpeg-latest-win32-static.zip" target="_blank">https://ffmpeg.zeranoe.com/builds/win32/static/ffmpeg-latest-win32-static.zip</a>
<a href="https://ffmpeg.zeranoe.com/builds/win32/static/ffmpeg-latest-win32-static.7z" target="_blank">https://ffmpeg.zeranoe.com/builds/win32/static/ffmpeg-latest-win32-static.7z</a>

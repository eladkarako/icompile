<a style="font-size:16pt;" href="https://www.imagemagick.org/download/binaries/?C=M;O=D" target="_blank">https://www.imagemagick.org/download/binaries/?C=M;O=D</a>

Sadly there is no "latest" entry,
but you can sort by modification date,
<em>(and even parse a <code>digest.rdf</code> to find-out the name of the latest build..)</em>

and make-use of your browser's [CTRL]+[F] to look for your prefered build,
for me it is the Windows x64 fully static, portable Q16, the higher version (ver 7 given the choice between latest build of 6 or 7..).

<img src="https://icompile.eladkarako.com/_uploads/2017/01/icompile.eladkarako.com_imagemagik_nightly_builds.png" alt="" width="823" height="443" />

Tips:
- use multi-part download manager if you want to download with speed-rates greater than 80KB/S
- use http instead of https prefix to avoid the ssl hand-shake and download faster on download-managers such as OrbitDownloader :)
- you can find Android compatible builds if you want to give your mobile-phone the power of the gods... :))

<hr/>

<blockquote>
It is a bit messy to find the correct download since it does not separated properly,
but you may run the following line in the developer's-panel's console:
<code>document.querySelectorAll('[href*="portable"]:not([href$="asc"])').forEach(function(element){ console.log(element.href); })</code>

to get just the useful ones:
For Windows x64 (64-bit):
<a href="https://www.imagemagick.org/download/binaries/ImageMagick-7.0.4-5-portable-Q16-x64.zip" target="_blank">https://www.imagemagick.org/download/binaries/ImageMagick-7.0.4-5-portable-Q16-x64.zip</a>
<a href="https://www.imagemagick.org/download/binaries/ImageMagick-6.9.7-5-portable-Q16-x64.zip" target="_blank">https://www.imagemagick.org/download/binaries/ImageMagick-6.9.7-5-portable-Q16-x64.zip</a>

For Windows x86 (32-bit):
<a href="https://www.imagemagick.org/download/binaries/ImageMagick-7.0.4-5-portable-Q16-x86.zip" target="_blank">https://www.imagemagick.org/download/binaries/ImageMagick-7.0.4-5-portable-Q16-x86.zip</a>
<a href="https://www.imagemagick.org/download/binaries/ImageMagick-6.9.7-5-portable-Q16-x86.zip" target="_blank">https://www.imagemagick.org/download/binaries/ImageMagick-6.9.7-5-portable-Q16-x86.zip</a>
</blockquote>

<!--more-->

<img src="https://icompile.eladkarako.com/_uploads/2016/05/2016-05-15_022043.png" alt="2016-05-15_022043" width="1337" height="169" class="aligncenter size-full wp-image-5340" />

firefox will not display a broken image, but this will work ok'ish..
<pre>
"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAA"
</pre>
it *should* be right-padded..
<pre>
"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAA=="
</pre>
<a href="https://icompile.eladkarako.com/_uploads/2016/05/g1.gif" alt="g1">g1.gif</a>

but if you don't care about firefox from displaying it,
or even better, you don't want to have it being shown because of little white square thing'y and you don't want to use css to hide it, you can put ""data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAA"" and keep removing right letters (less significant) until it will be totally broken, essentially, an image can be just the header, or even 0 byte if you think about it... (well, due to OS specification, it might be sort of 4KB minimum on NTFS..)


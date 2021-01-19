Does not required root access, pulling is a great way of using some "vendor only" applications, for me it was a very well-designed Hebrew-Date calendar, only available in native Samsung-Galaxy ROMS for some vendors.

Other than that it is a slow (one by one), but sure way of file backup, from "root location" that is available on readonly basis.

alternative options maybe using a file-manager such as "X-Plore", and compressing the entire folder tree of the desire "root location", placing the zip in a readable location on the SdCard, the entire process might take a while but the download process will be much faster due to one-big-file-handling instead of one-by-one fetching which requires a lot of "connection" overhead..
<!--more-->



<ol>

<li><blockquote><pre>adb pull /system/app</pre>
(1.19GB/13 Minutes)</blockquote></li>

<li><blockquote><pre>adb pull /system/priv-app</pre>
(1.09GB/10 Minutes)</blockquote></li>

<li><blockquote>pretty common (almost)
<pre>/system/vendor/app</pre>
<hr />
most likely there (usually not active)
<pre>/system/csc/common/system/priv-app</pre>
<pre>/system/csc/PTR/system/priv-app</pre>
<pre>/system/csc/common/App</pre>
<pre>/system/csc/common/app</pre>
<pre>/system/csc/DBT/system/app</pre>
<hr />
probably not there
<pre>/system/hidden/app</pre>
<hr />
if there, may be just a dummy location..
<pre>/hidden/app</pre></blockquote></li>
</ol>
<!--more-->
<em>[this is an "edit in progress" article, textual, core information for now..]</em>

pre-install tips:
* download cygwin installer from <a href="http://cygwin.com">http://cygwin.com</a>.
its currently about 550KB.

* place the installer in a "low hierarchy" directory such as C:\\CGWN\\setup.exe then run the installer and use your closest mirror server, taken from <a href="http://www.cygwin.com/mirrors.html">this list ( http://www.cygwin.com/mirrors.html )</a>, mine is Israel and the fastest one is <a href="http://mirror.isoc.org.il/pub/cygwin/">http://mirror.isoc.org.il/pub/cygwin/</a>, choosing the closest mirror to you is relevant to to download speed, and although multiple mirrors is possible (by holding CTRL and selecting number of mirrors), it is not really essential or recommended since the downloading process is linear (not threaded).

another possible way to download cygwin is to manually stop the downloading process and browse the mirror web-site using a browser, then locating the cygwin folder and using download manager or wGet, map and download all sub-directories, this way, one can significantly shorten the download time, installation might be safer, better configured  and generally less "buggy" if using the cygwin-installer instead of simply extracting the packages into a folder (although it is possible too).

* cygwin has code libraries, dlls, and executables, all divided into and install-packages, selecting few or all, depending your needs from cygwin, click to packages-tree head for fast switching between install and upgrade.


will be added:
-configuration ini file for installation of cygwin.
-registry values been written by cygwin installer, so you might just copy the folder from one computer to another, and apply the .reg files.
-suggested additional folders to add to your PATH folder.
-Adding to your .bashrc file on cygwin the following line (at the end of the file)  PS1="\\u@\\h\\w>" (this line will make the prompt look better).
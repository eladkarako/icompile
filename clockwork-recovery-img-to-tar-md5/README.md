<!--more-->

1.
<blockquote style="background-color:red;">Suggestion: Use Cygwin or a proper Linux machine, using pure Windows (CMD) will corrupt the images, and will brick your phone. If you'll run those commands from Cygwin, it should be fine.</blockquote>

2. 
<blockquote style="background-color:yellow;">Clockwork Recovery SUCKSSSSSS!!! You should use <a href="https://twrp.me/" target="_blank">TWRP (custom recovery)</a></blockquote>

<hr />

download regular or touch version from <a href="https://www.clockworkmod.com/rommanager" title="https://www.clockworkmod.com/rommanager" target="_blank">https://www.clockworkmod.com/rommanager</a>

download <a href="http://www.mingw.org/wiki/MSYS" title="http://www.mingw.org/wiki/MSYS" target="_blank">http://www.mingw.org/wiki/MSYS</a> and extract it, optionally add the \\bin folder to you system PATH.

<pre>
ren __your_input_file_name__ recovery.img

::POSIX 1003.1-1988 (ustar) format
tar.exe --format=ustar --create recovery.img >recovery.tar

::read in text mode (default if reading tty stdin)
md5sum.exe --text recovery.img >>recovery.tar

ren recovery.tar recovery.tar.md5

</pre>


assuming latest to this time you'll have following file(s):
<pre>recovery-clockwork-6.0.4.6-hltexx.img
or
recovery-clockwork-touch-6.0.4.6-hltexx.img</pre>
and installed the MinGW on default folder <pre>C:\\MinGW\\bin</pre>

<pre>
ren recovery-clockwork-6.0.4.6-hltexx.img recovery.img
C:\\MinGW\\bin\\tar.exe --format=ustar --create recovery.img >recovery.tar
C:\\MinGW\\bin\\md5sum.exe --text recovery.img >>recovery.tar
ren recovery.tar recovery.tar.md5
</pre>
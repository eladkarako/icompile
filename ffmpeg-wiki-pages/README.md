You're F***ed.

Given: <code>corrupted.mp4</code>.

Those would <strong>not work</strong> for you:
<pre>
ffmpeg                                  -i "corrupted.mp4" -codec copy "fixed.mp4"
ffmpeg                                  -i "corrupted.mp4" -codec copy "fixed.mkv"
ffmpeg -f mp4                           -i "corrupted.mp4" -codec copy "fixed.mkv"
ffmpeg -f h264                          -i "corrupted.mp4" -codec copy "fixed.mkv"
ffmpeg -f mpeg                          -i "corrupted.mp4" -codec copy "fixed.mkv"
ffmpeg -f mpegts                        -i "corrupted.mp4" -codec copy "fixed.mkv"
ffmpeg           -err_detect ignore_err -i "corrupted.mp4" -codec copy "fixed.mkv"
ffmpeg -f mp4    -err_detect ignore_err -i "corrupted.mp4" -codec copy "fixed.mkv"
ffmpeg -f h264   -err_detect ignore_err -i "corrupted.mp4" -codec copy "fixed.mkv"
ffmpeg -f mpeg   -err_detect ignore_err -i "corrupted.mp4" -codec copy "fixed.mkv"
ffmpeg -f mpegts -err_detect ignore_err -i "corrupted.mp4" -codec copy "fixed.mkv"
</pre>

Those will not help either (on either place you'll put them before the <code>-i </code> for mux, or afterwards): 
<code>-codec:v libx264</code> before/after/before and after <code>-i </code>, 
<code>-codec:v libx264</code> before/after/before and after <code>-f </code>, 
<code>-dcodec copy</code>, <code>-movflags faststart</code>, <code>-movflags empty_moov</code>, <code>-movflags "+faststart"</code>, <code>-movflags "+empty_moov"</code>, <code>-video_size 1920x1080</code>, <code>-s 1920x1080</code>.

You can try VLC, under the File menu, it has a <code>Convert/Save</code> option (<kbd>CTRL</kbd>+<kbd>R</kbd>), it opens up a wizard/dialog in-which you can open the file, and click "safe/convert" button (try clicking it first for "safe" and if it isn't working well try again everything from the start but use the sub-menu with the small-arrow and select "convert"), you'll get dialog to save the file-name and choose encoding format, MP4 should suite well (you can avoid the part of checking-ON the "dump raw video" it does nothing for you in this case). Sometimes VLC will have some success restoring partial-content.

You can try VirtualDub: <a href="https://sourceforge.net/projects/virtualdub/files/virtualdub-win/">https://sourceforge.net/projects/virtualdub/files/virtualdub-win/</a> - select the latest version you can find, 
or VirtualDub2 <a href="https://sourceforge.net/projects/vdfiltermod/files/VirtualDub%20pack/">https://sourceforge.net/projects/vdfiltermod/files/VirtualDub%20pack/</a> - again, select the latest version you can find. 

When extractin VirtualDub2 you may choose the x64 executable if your machine supports that architecture.

VirtualDub does a very good job in opening raw/old formats such as AVI, it does not handle MP4.
VirtualDub2 does process those streams BUT it uses FFMPEG-lib.s internally, so you would probably get a pop-up message saying "FFMPEG: Unable to open file".

As I was saying, 
You're F***ed.

It might makes you feel better to know the MP4 stream corruption is common stuff, 
usually when the stream is encoded and the encoder does not have the time to do a "second phase" to copy the moov atom to the start of the file
<img src="https://icompile.eladkarako.com/_uploads/2014/11/root1.png" alt="root1" width="705" height="345" class="alignright size-full wp-image-2309" />
<ul>
<li>Install a custom-recovery
  <ul>
  <li>turn off the phone, wait for full shutdown (no screen/LED indicator)</li>
  <li>hold [volume down]+[home button]+[power button]</li>
  <li>press [volume up] on this screen
<a href="https://icompile.eladkarako.com/_uploads/2014/11/2014-11-23_183019.png"><img src="https://icompile.eladkarako.com/_uploads/2014/11/2014-11-23_183019.png" alt="2014-11-23_183019" rem-width="263" rem-height="400" class="alignnone size-full wp-image-2141" /></a>
  </li>
  <li>on your pc: uninstall KIES package (if exist..), and install plain drivers from http://developer.samsung.com/technical-doc/view.do?v=T000000117</li>
  <li>on your pc: download odin from here: <a href="https://github.com/eladkarako/icompile/releases/download/latest/Odin3_v3_07.rar">https://github.com/eladkarako/icompile/releases/download/latest/Odin3_v3_07.rar</a> (or newer versions from here: <a href="https://github.com/eladkarako/mods/tree/store/Odin/">https://github.com/eladkarako/mods/tree/store/Odin/</a>),  extract it anywhere.</li>
  <li>on your pc: download this version of TWRP custom recovery (better then clockwork's): <a href="https://icompile.eladkarako.com/_uploads/2014/11/openrecovery-twrp-2.6.3.7-ha3g.img.rar" title="openrecovery-twrp-2.6.3.7-ha3g.img.rar" alt="openrecovery-twrp-2.6.3.7-ha3g.img.rar">openrecovery-twrp-2.6.3.7-ha3g.img.rar</a>,  extract it anywhere (but just once, you need to end up with tar file, don't extract the tar file itself).</li>
  <li>plug in your phone to USB2.0 port (don't use USB3.0), wait for drivers installation to finish.</li>
  <li>right click Odin3-v3.07.exe and select "Run as administrator"</li>
  <li>on odin, click the PDA button, load the tar file, press start wait till finish.</li>
  <li>the phone will restart (done).</li>
  </ul>
</li>
<li>install supersu binary "package"</li>
<ul>
<img src="https://icompile.eladkarako.com/_uploads/2014/11/root2.jpg" alt="root2" width="240" height="160" class="alignnone size-full wp-image-2310" />
<br/>
<!--more-->


  <li>download the stable or beta version from here:
  <a href="http://forum.xda-developers.com/showthread.php?t=1538053" title="http://forum.xda-developers.com/showthread.php?t=1538053" target="_blank">http://forum.xda-developers.com/showthread.php?t=1538053</a> (look for the "CWM / TWRP / MobileODIN installable ZIP")
<small>the beta is here: <a href="http://forum.xda-developers.com/apps/supersu/2014-09-02-supersu-v2-05-t2868133" title="http://forum.xda-developers.com/apps/supersu/2014-09-02-supersu-v2-05-t2868133" target="_blank">http://forum.xda-developers.com/apps/supersu/2014-09-02-supersu-v2-05-t2868133</a>
or through the main thread: <a href="http://forum.xda-developers.com/apps/supersu" title="http://forum.xda-developers.com/apps/supersu" target="_blank">http://forum.xda-developers.com/apps/supersu</a></small>
</li>
  <li>on your phone: place the zip file (any version you'll like to) in the "main" sdcard (not the external one)</li>
  <li>turn off the phone, turn it on by holding [volume up]+[home button]+[power button], go to <strong>install</strong>, locate the zip file on your sdcard, and just click it, when done-</li>
  <li>go to fix permissions and "make it so"</li>
  <li>reboot, when phone is done, you may install the supersu application from the google-store. optionally install the pro version.</li>
  <li>start the application, answer "no" when asked to disable KNOX (for now), and set the options to trust the system user, and answer "allow/grant" without prompt, quit.</li>
</ul>
<li>download any application to remount the /system partition as R/W. (important), do it, and relaunch the supersu application.</li>
<li>answer "yes" to disable KNOX.</li>
<li>download "root app delete" from the store, start, click on system app, select "junior" mode, and scroll away disabling bloatwares by your choice, keep away from the "deep system" application, but feel free to remove all of the gmail non-core applications, even gmail and youtube, you may install this version of youtube of an additional features like working when the screen is turned-off, and forcing HD everywhere: <a href="http://forum.xda-developers.com/showthread.php?t=1529715" title="[MOD] YouTube 4.4.11 (v5b), *1080p* / 720p HD (over WiFi & 3G), screen off playback" target="_blank">http://forum.xda-developers.com/showthread.php?t=1529715</a></li>
<li>...done</li>
</ul>

', 'Samsung Note 3 N900 - Custom Recovery, Supersu Binary, SuperUser APK, Mount System R/W, Disable KNOX
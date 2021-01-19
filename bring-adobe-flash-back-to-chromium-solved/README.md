ahhh... I had to figure out this one for myself from the source-code of Chromium (Chrome) project at:
<a href="http://src.chromium.org/svn/trunk/src/chrome/common/chrome_switches.cc" title="http://src.chromium.org/svn/trunk/src/chrome/common/chrome_switches.cc" target="_blank">http://src.chromium.org/svn/trunk/src/chrome/common/chrome_switches.cc</a> and <a href="http://src.chromium.org/svn/trunk/src/base/base_switches.cc" title="http://src.chromium.org/svn/trunk/src/base/base_switches.cc" target="_blank">http://src.chromium.org/svn/trunk/src/base/base_switches.cc</a>... :(

Apparently-
New Chromium versions does not have Flash anymore!
- Chrome (regular and Canary) still does.

also, and there are no-people figuring out the solution yet, (as far as Googling around shows..)
so this post should be the first one to explain how to re-enable Adobe Flash on New Chromium installations.

it should be compatible with Windows, Mac and Linux installations.

Chromium not just disable Flash, but it does not ship with the 'pepflashplayer.dll',
in fact- the folder, named PepperFlash, which is the code-name for the embedded plugin for Flash, is empty:

<a href="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_bring_flash_back_to_chromium_solved__empty_pepperflash_folder.jpg"><img src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_bring_flash_back_to_chromium_solved__empty_pepperflash_folder.jpg" alt="icompile.eladkarako.com_bring_flash_back_to_chromium_solved__empty_pepperflash_folder" rem-width="977" rem-height="327" class="alignnone size-full wp-image-2563" /></a>

you can look for pepflashplayer.dll in the Google-Chrome-Canary or regular versions and copy it to the folder but it won't do anything (check using <a href="chrome://flash/" title="chrome://flash/" target="_blank">chrome://flash/</a>)
<a href="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_bring_flash_back_to_chromium_solved__no_flash.jpg"><img src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_bring_flash_back_to_chromium_solved__no_flash.jpg" alt="icompile.eladkarako.com_bring_flash_back_to_chromium_solved__no_flash" rem-width="550" rem-height="253" class="alignnone size-full wp-image-2565" /></a>

for Chromium's plugin-engine to identify the plugin, you'll need to use some command-line switches,
but first let us play smart, assuming you'll be updating Chromium somewhere in the future, the application folder will get overwritten so we're not going to play with files and folders,
lets use the official Adobe plugin!

- download the latest Flash version from the <a href="http://labs.adobe.com/downloads/flashplayer.html" title="http://labs.adobe.com/downloads/flashplayer.html" target="_blank">http://labs.adobe.com/downloads/flashplayer.html</a>
I currently developing some video-players with Flash fallback, so I'm using the "+Debugger" version.. but feel free to download the regular one.

its best for you to first download the uninstaller: <a href="http://labsdownload.adobe.com/pub/labs/flashruntimes/flashplayer/flashplayer17_uninstall_win.exe" title="http://labsdownload.adobe.com/pub/labs/flashruntimes/flashplayer/flashplayer17_uninstall_win.exe" target="_blank">http://labsdownload.adobe.com/pub/labs/flashruntimes/flashplayer/flashplayer17_uninstall_win.exe</a>
run it to clean the old versions (make all of the browsers are closed, even their background processes, just use task-manager and kill chrome.exe firefox.exe and iexplore.exe if any..)

then the IE version:
<a href="http://labsdownload.adobe.com/pub/labs/flashruntimes/flashplayer/flashplayer17_debug_win_ax.exe" title="http://labsdownload.adobe.com/pub/labs/flashruntimes/flashplayer/flashplayer17_debug_win_ax.exe" target="_blank">http://labsdownload.adobe.com/pub/labs/flashruntimes/flashplayer/flashplayer17_debug_win_ax.exe</a>, and install it.

then the "other" browsers version:
<a href="http://labsdownload.adobe.com/pub/labs/flashruntimes/flashplayer/flashplayer17_debug_win_pi.exe" title="http://labsdownload.adobe.com/pub/labs/flashruntimes/flashplayer/flashplayer17_debug_win_pi.exe" target="_blank">http://labsdownload.adobe.com/pub/labs/flashruntimes/flashplayer/flashplayer17_debug_win_pi.exe</a>, and install it.

and the "other other" browsers version:
<a href="http://labsdownload.adobe.com/pub/labs/flashruntimes/flashplayer/flashplayer17_debug_win_ppapi.exe" title="http://labsdownload.adobe.com/pub/labs/flashruntimes/flashplayer/flashplayer17_debug_win_ppapi.exe" target="_blank">http://labsdownload.adobe.com/pub/labs/flashruntimes/flashplayer/flashplayer17_debug_win_ppapi.exe</a>, and install it too.

<a href="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_bring_flash_back_to_chromium_solved__what_to_download.jpg"><img src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_bring_flash_back_to_chromium_solved__what_to_download.jpg" alt="icompile.eladkarako.com_bring_flash_back_to_chromium_solved__what_to_download" rem-width="914" rem-height="471" class="alignnone size-full wp-image-2567" /></a>

in a second, we will be adding some command-line argument to Chromium, but first we need to find out where are the pepflashplayer{architecture}_version_ver._ver._ver.dll is located, and what is their named:

there are two folders:
<pre>C:\\Windows\\System32\\Macromed\\Flash\\</pre>
and
<pre>C:\\Windows\\SysWOW64\\Macromed\\Flash\\</pre>

one is holding the x32 version of Flash, and the other is holding the x64 version.
you can visit <a href="chrome://chrome/" title="chrome://chrome/" target="_blank">chrome://chrome/</a>
to see what version you are using, I'm using the x64 version of Chromium for windows..
<a href="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_bring_flash_back_to_chromium_solved__what_is_your_browser_architecture.jpg"><img src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_bring_flash_back_to_chromium_solved__what_is_your_browser_architecture.jpg" alt="icompile.eladkarako.com_bring_flash_back_to_chromium_solved__what_is_your_browser_architecture" rem-width="523" rem-height="377" class="alignnone size-full wp-image-2568" /></a>

normally the <code>C:\\Windows\\System32\\Macromed\\Flash</code> holds the x32 version and the <code>C:\\Windows\\SysWOW64\\Macromed\\Flash\\</code> has the x64 version.

right! so the x64 version it is,

WAIT!!!
Adobe guys had a bug in the installation script, and the DLL FILES location are upside-down:
<a href="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_bring_flash_back_to_chromium_solved__official_adobe_versions_of_pepperflash.jpg"><img src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_bring_flash_back_to_chromium_solved__official_adobe_versions_of_pepperflash.jpg" alt="icompile.eladkarako.com_bring_flash_back_to_chromium_solved__official_adobe_versions_of_pepperflash" rem-width="1234" rem-height="318" class="alignnone size-full wp-image-2569" /></a> 

ok, so now we'll be using two switches, one to disable the embedded-plugin (even that it is "not there") and the other one to force load a flash-plugin from <code>C:\\Windows\\System32\\Macromed\\Flash</code> folder.

here is an example for the command line to load Chromium, with Flash support, (again):
<pre>
C:\\Users\\Elad\\AppData\\Local\\Chromium\\Application\\chrome.exe --disable-bundled-ppapi-flash --ppapi-flash-path="C:\\Windows\\System32\\Macromed\\Flash\\pepflashplayer64_17_0_0_93.dll"
</pre>

you may put it in a cmd file, or just create a shortcut for chrome.exe and after "OK"'ing it, just re-edit it adding a <code>--disable-bundled-ppapi-flash --ppapi-flash-path="C:\\Windows\\System32\\Macromed\\Flash\\pepflashplayer64_17_0_0_93.dll"</code> at the end.

sometimes sending arguments is hard in windows, most of the time there is a lot of inverted commas confusion and mix-ups.

you can download the exe and the ini file from my github page:
https://github.com/eladkarako/iniRun/tree/master/real_world_example


after you'll run the exe a Chromium process will be created with the arguments passed directly to the Windows-API (so- FAST!) re-open the <a href="chrome://flash/" title="chrome://flash/" target="_blank">chrome://flash/</a> page, and see something like that:

<a href="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_bring_flash_back_to_chromium_solved__flash_loaded_x64bit.jpg"><img src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_bring_flash_back_to_chromium_solved__flash_loaded_x64bit.jpg" alt="icompile.eladkarako.com_bring_flash_back_to_chromium_solved__flash_loaded_x64bit" rem-width="648" rem-height="258" class="alignnone size-full wp-image-2571" /></a>

enjoy!
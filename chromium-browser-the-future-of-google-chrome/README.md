<strong>Update: The Newer and improved method: <a href="https://github.com/eladkarako/mods/tree/store/chromium">https://github.com/eladkarako/mods/tree/store/chromium</a></strong>

<hr/>

<img src="http://dev.chromium.org/_/rsrc/1220197576998/Home/flying_browser.png" alt="" />
Chromium is  the code-name for Google Chrome development project, the <a title="nightly-builds" href="http://en.wikipedia.org/wiki/Neutral_build" target="_blank">nightly-builds</a> are available for download, and are, mostly, fully functional.

<a title="home page" href="http://dev.chromium.org/Home" target="_blank">home page</a> for the project.
new builds are available to download <a title="here" href="http://build.chromium.org/buildbot/snapshots/chromium-rel-xp/" target="_blank">here</a>.

I've made download script, and a small vb6 program to find the latest version, to make it work you would need those 3 things:
1. wGet.
2. this "Latest Chromium URL" program: <a href="https://github.com/eladkarako/icompile/releases/download/latest/LatestChromium.zip">https://github.com/eladkarako/icompile/releases/download/latest/LatestChromium.zip</a>.
3. the following script into a blank CMD (or BAT) file:

<pre>
@echo off
if exist mini_installer.exe del /f /q mini_installer.exe
setlocal enableextensions
for /f "tokens=*" %%a in ('.\\LatestChromiumURL.exe') do (set sURL=%%a)
set sUserAgent="Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6"
wget --directory-prefix=. --user-agent=%sUserAgent% %sURL%
endlocal
pause
</pre>
4. put the (1),
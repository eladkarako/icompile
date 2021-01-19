figured it out.

1.
get latest revision number from this url: <a href="http://commondatastorage.googleapis.com/chromium-browser-continuous/Win/LAST_CHANGE" title="http://commondatastorage.googleapis.com/chromium-browser-continuous/Win/LAST_CHANGE" target="_blank">http://commondatastorage.googleapis.com/chromium-browser-continuous/Win/LAST_CHANGE</a>

2.
concat it to this url, to get into the FTP of this (meaning the latest) revision
http://commondatastorage.googleapis.com/chromium-browser-continuous/index.html?path=Win/<strong>put revision number here</strong>/


I've made a small VB6 program that uses Win32 API to download the latest revision number and send it to the STDOUT,
and a CMD (batch file) that reads it and use wGet to download the execute.

wget has custom settings like using reffer url, cookie, user-agent, avoiding cache, re-write the mime-type, longer keep-alive, tring few times, downloading backup in case of an error- can re download from the same point,
all like the execute was downloaded from a browser.



<pre>
::  browse
::  http://commondatastorage.googleapis.com/chromium-browser-continuous/index.html
::  http://commondatastorage.googleapis.com/chromium-browser-continuous/index.html?path=Win/
::  http://commondatastorage.googleapis.com/chromium-browser-continuous/index.html?path=Win/
::  https://commondatastorage.googleapis.com/chromium-browser-continuous/index.html?path=Win/
::  https://commondatastorage.googleapis.com/chromium-browser-continuous/index.html?path=Win/144914/
::  for more information.

@echo off
::static information init.
set sUserAgent="Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; WOW64; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET4.0C; .NET4.0E)"
set sUrl_Protocol=https
set sUrl_Base=commondatastorage.googleapis.com/chromium-browser-continuous/Win
set sUrl_FileName=mini_installer.exe



setlocal enableextensions
    :: sVersionNumber init.
    set sVersionNumber=""
    set sUrl_Version=http://commondatastorage.googleapis.com/chromium-browser-continuous/Win/LAST_CHANGE
    for /f "tokens=*" %%a in ('.\
es\\getRemoteFileTextContent.exe %sUrl_Version%') do (set sVersionNumber=%%a)
    
    ::dynamic information init.
    set sReferrer="http://commondatastorage.googleapis.com/chromium-browser-continuous/index.html?path=Win/%sVersionNumber%/"
    set sCookie="http://o-o.preferred.fra07t11.v8.cache8.c.bigcache.googleapis.com/chromium-browser-continuous/Win/%sVersionNumber%/mini_installer.exe?ms=tsu&mt=1340990464&cms_redirect=yes&redirect_counter=2"

    ::download execute
    wget "%sUrl_Protocol%://%sUrl_Base%/%sVersionNumber%/%sUrl_FileName%"                                                   ^
                                                                            --no-check-certificate                          ^
                                                                            --wait=2                                        ^
                                                                            --referer=%sReferrer%                           ^
                                                                            --timestamping                                  ^
                                                                            --debug                                         ^
                                                                            --continue                                      ^
                                                                            --no-cache                                      ^
                                                                            --no-cookies                                    ^
                                                                            --no-dns-cache                                  ^
                                                                            --server-response                               ^
                                                                            --auth-no-challenge                             ^
                                                                            --directory-prefix=.                            ^
                                                                            --header="Accept: application/octet-stream"     ^
                                                                            --header="Accept: application/x-msdos-program"  ^
                                                                            --header="Keep-Alive: 300"                      ^

endlocal

pause
</pre>


to use the script you'll need the small Execute or any other way of downloading and reading the content of the latest revision number (you can use "curl" compiled for windows, or something...)

and wGet (compiled for win32) placed in the same folder as the script or in the PATH.
download it here:
<a href="https://github.com/eladkarako/icompile/releases/download/latest/getRemoteFileTextContent.rar">https://github.com/eladkarako/icompile/releases/download/latest/getRemoteFileTextContent.rar</a>





p.s.

you can have all the new command-line switches for the newest latest version of chromium put in a text file and viewed by notepad++.
use the following CMD (batch) script:
<pre>
@echo off
rem   set command-line arguments.
set sURL1=http://src.chromium.org/svn/trunk/src/chrome/common/chrome_switches.cc
set sURL2=http://src.chromium.org/svn/trunk/src/base/base_switches.cc
set sUserAgent="Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 GTBDFff GTB7.0 (.NET CLR 3.5.30729)"

set sFile=switches.cc

rem   remove old files.
if exist %sFile%   del /f /q %sFile%   >nul

rem   download.
wget --directory-prefix=. --user-agent=%sUserAgent% --output-document=%sFile% %sURL1% %sURL2%
rem ren %sFile% %sFile%_

start "D:\\Software\\Notepad++\\Notepad++.exe" "%CD%\\%sFile%"
</pre>

you will need to modify the full url to Notepad++, or put its path in your PATH variable and just use "Notepad++.exe", you will also need a wget compiled for win32 platform (or x64) just google it.


____----____----
<em>March 2014:</em> here is a working update:
<code>it uses wGet, but you can also throw the link into any parallel download manager to speed things up a little, it uses a session cookie to fool the web-server a little bit..</code>

<pre>
::  browse
::  http://commondatastorage.googleapis.com/chromium-browser-continuous/index.html
::  http://commondatastorage.googleapis.com/chromium-browser-continuous/index.html?path=Win/
::  http://commondatastorage.googleapis.com/chromium-browser-continuous/index.html?path=Win/
::  https://commondatastorage.googleapis.com/chromium-browser-continuous/index.html?path=Win/
::  https://commondatastorage.googleapis.com/chromium-browser-continuous/index.html?path=Win/144914/
::  for more information.


::static information init.
set sUserAgent="Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; WOW64; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET4.0C; .NET4.0E)"
set sUrl_Protocol=https
set sUrl_Base=commondatastorage.googleapis.com/chromium-browser-continuous/Win
set sUrl_FileName=mini_installer.exe
set sOrbitDownloaderExeFullPath=C:\\Program Files (x86)\\Orbitdownloader\\orbitdm.exe


setlocal enableextensions
    :: sVersionNumber init.
    set sVersionNumber=""
    set sUrl_Version=http://commondatastorage.googleapis.com/chromium-browser-continuous/Win/LAST_CHANGE
    for /f "tokens=*" %%a in ('.\
es\\getRemoteFileTextContent.exe %sUrl_Version%') do (set sVersionNumber=%%a)
    
    ::dynamic information init.
    set sReferrer="http://commondatastorage.googleapis.com/chromium-browser-continuous/index.html?path=Win/%sVersionNumber%/"
    set sCookie="http://o-o.preferred.fra07t11.v8.cache8.c.bigcache.googleapis.com/chromium-browser-continuous/Win/%sVersionNumber%/mini_installer.exe?ms=tsu&mt=1340990464&cms_redirect=yes&redirect_counter=2"

    set sURL=%sUrl_Protocol%://%sUrl_Base%/%sVersionNumber%/%sUrl_FileName%



    ::option #1.
    ::-------------------------------------------
    wget --no-check-certificate                          ^
         --wait=2                                        ^
         --referer=%sReferrer%                           ^
         --timestamping                                  ^
         --debug                                         ^
         --continue                                      ^
         --no-cache                                      ^
         --no-cookies                                    ^
         --no-dns-cache                                  ^
         --server-response                               ^
         --auth-no-challenge                             ^
         --directory-prefix=.                            ^
         --header="Accept: application/octet-stream"     ^
         --header="Accept: application/x-msdos-program"  ^
         --header="Keep-Alive: 300"                      ^
         "%sURL%"
    
    ::option #2.
    ::-------------------------------------------
    ::call "%sOrbitDownloaderExeFullPath%" "%sURL%"
    
endlocal
</pre>
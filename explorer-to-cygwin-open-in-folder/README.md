replace the <code>Cygwin.bay</code> under <code>c:\\cygwin\\</code> with this content, 

<pre><span style='color:#3f7f59; '>@</span><span style='color:#7f0055; font-weight:bold; '>echo off</span>
<span style='color:#3f7f59; '>::force UTF-8 support</span>
<span style='color:#7f0055; font-weight:bold; '>chcp</span> 65001

<span style='color:#7f0055; font-weight:bold; '>if</span> <span style='color:#2a00ff; '>"%1"</span>==<span style='color:#2a00ff; '>""</span> (
  <span style='color:#7f0055; font-weight:bold; '>goto </span>START_STANDARD
) else (
  <span style='color:#7f0055; font-weight:bold; '>goto </span>START_IN_FOLDER
)


:START_STANDARD
  <span style='color:#7f0055; font-weight:bold; '>call</span> C:\\cygwin\\bin\\mintty.exe -i /Cygwin-Terminal.ico -
  <span style='color:#7f0055; font-weight:bold; '>goto </span>EXIT
  

:START_IN_FOLDER
<span style='color:#3f7f59; '>&#xa0;&#xa0;</span><span style='color:#7f0055; font-weight:bold; '>rem  </span><span style='color:#3f7f59; '>remove [\\'\\"] from first arg</span>
  <span style='color:#7f0055; font-weight:bold; '>set</span> CURRENT=%~1
<span style='color:#3f7f59; '>&#xa0;&#xa0;</span><span style='color:#7f0055; font-weight:bold; '>rem  </span><span style='color:#3f7f59; '>backward2forward slash</span>
  <span style='color:#7f0055; font-weight:bold; '>set</span> CURRENT=%CURRENT:\\=/%
<span style='color:#3f7f59; '>&#xa0;&#xa0;</span><span style='color:#7f0055; font-weight:bold; '>rem  </span><span style='color:#3f7f59; '>remove ":" after the drive letter</span>
  <span style='color:#7f0055; font-weight:bold; '>set</span> CURRENT=%CURRENT::/=/%
<span style='color:#3f7f59; '>&#xa0;&#xa0;</span><span style='color:#7f0055; font-weight:bold; '>rem  </span><span style='color:#3f7f59; '>adds prefix (used in cygwin as dummy drive-mounts)</span>
  <span style='color:#7f0055; font-weight:bold; '>set</span> CURRENT=/cygdrive/%CURRENT%
<span style='color:#3f7f59; '>&#xa0;&#xa0;</span><span style='color:#7f0055; font-weight:bold; '>rem  </span><span style='color:#3f7f59; '>------------------------------------------------------------</span>
  <span style='color:#7f0055; font-weight:bold; '>call</span> C:\\cygwin\\bin\\mintty.exe -i /Cygwin-Terminal.ico c:\\cygwin\\bin\\bash.exe -l -c <span style='color:#2a00ff; '>"cd \\"%CURRENT%\\" ; exec bash"</span> -
  <span style='color:#7f0055; font-weight:bold; '>goto </span>EXIT


:EXIT
</pre>

or download the following file instead: <a download="Cygwin.bat" href="https://icompile.eladkarako.com/_uploads/2015/12/Cygwin.bat">Cygwin.bat</a> (here is the original file: <a download="Cygwin.bat.bak" href="https://icompile.eladkarako.com/_uploads/2015/12/Cygwin.bat_.bak">Cygwin.bat.bak</a>)

if you'll pass a folder path as argument to the batch (no checks.. q&d..) it will open cygwin in this path, in any other case, just open cygwin  in home-directory (standard run..)

<img src="https://icompile.eladkarako.com/_uploads/2015/12/2015-12-05_034648.jpg" alt="2015-12-05_034648" width="657" height="404" class="alignnone size-full wp-image-3769" />

place a shortcut in your SENDTO folder,
and then right-click a folder and select the shortcut from the sendto-menu

or better yet, download the following reg file: <a download="open_in_cygwin.reg" href="https://icompile.eladkarako.com/_uploads/2015/12/open_in_cygwin.reg">open_in_cygwin.reg</a> and double click it,

<pre>
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\\Directory\\shell\\open_in_cygwin]
@="Open In Cy&gwin"

[HKEY_CLASSES_ROOT\\Directory\\shell\\open_in_cygwin\\command]
@="\\"C:\\\\cygwin\\\\Cygwin.bat\\" \\"%1\\""
</pre>

 it will add a new context-menu item for each folder:
<img src="https://icompile.eladkarako.com/_uploads/2015/12/2015-12-05_040001.jpg" alt="2015-12-05_040001" width="295" height="310" class="alignnone size-full wp-image-3771" />

download and run the following file to uninstall the context-menu item: <a download="open_in_cygwin_uninstall.reg" href="https://icompile.eladkarako.com/_uploads/2015/12/open_in_cygwin_uninstall.reg">open_in_cygwin_uninstall.reg</a>
<pre>
Windows Registry Editor Version 5.00

[-HKEY_CLASSES_ROOT\\Directory\\shell\\open_in_cygwin]
</pre>
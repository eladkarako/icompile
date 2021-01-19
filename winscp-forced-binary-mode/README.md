<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_force_winscp_binary_mode_logo.jpg" alt="icompile.eladkarako.com_force_winscp_binary_mode_logo" width="382" rem-height="217" class="alignnone size-full wp-image-4179" />

<blockquote>according to class-description winscp.net (<a rel="nofollow" href="https://winscp.net/eng/docs/library_transferoptions" target="_blank">library_transferoptions</a>) TransferMode builder takes:
either 
  <code>0</code> - <code>TransferMode.Binary</code> (default)
,
  <code>1</code> - <code>TransferMode.Ascii</code>
or
  <code>2</code> - <code>TransferMode.Automatic</code> (based on file extension)
</blockquote>

<!--more-->



For the <a rel="nofollow" href="https://winscp.net/download/winscp576.zip" target="_blank">WinSCP portable edition</a>: look in <code>WinSCP.ini</code> (same directory as WinSCP.exe) and set every value of <code>TransferMode</code> to <code>0</code>, save, done.

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_force_winscp_binary_mode.jpg" alt="icompile.eladkarako.com_force_winscp_binary_mode" width="525" height="490" class="alignnone size-full wp-image-4180" />

<hr />

<blockquote>For the <a href="https://winscp.net/download/winscp576setup.exe" target="_blank">standard installation edition</a> the <a href="https://winscp.net/eng/docs/rawconfig" target="_blank">class documentation can help</a>, 
of follow the <a rel="nofollow" href="https://winscp.net/forum/viewtopic.php?t=8537" target="_blank">instructions of prikryl</a> applying the REG-DATA <code>0</code> in REG-KEY <code>HKEY_CURRENT_USER\\Software\\Martin Prikryl\\WinSCP 2\\Configuration\\Interface\\CopyParam</code> to REG-VALUE <code>TransferMode</code>
</blockquote>

better use the portable one..
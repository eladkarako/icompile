<!--more-->
Windows' Update Executable
%windir%\\System32\\WUDFHost.exe
%windir%\\system32\\wuapp.exe startmenu

You may see commands with arguments such as
<code>C:\\Windows\\System32\\WUDFHost.exe</code> and <code>%windir%\\system32\\wuapp.exe startmenu</code>

The Windows Update service name is plain <code>Windows Update</code>, which will ran through <code>C:\\Windows\\system32\\svchost.exe</code> (the "host process for windows services").
<blockquote>A utility to help system administrators diagnose and repair problems with the WMI service.</blockquote>

<img src="https://icompile.eladkarako.com/_uploads/2016/06/icompile.eladkarako.com_wmidiagvbs_wmi_diagnostic_script.png" alt="icompile.eladkarako.com_wmidiagvbs_wmi_diagnostic_script" width="750" height="604" class="aligncenter size-full wp-image-5422" />

<blockquote>WMIDiag.vbs is a VBScript script designed to help you ascertain the current state of the WMI service on a computer. The download package includes the utility itself, a ReadMe file that discusses how the tool works (and how to best use it), and sample spreadsheets that provide information about the default WMI configuration on various versions of the Microsoft Windows operating system.</blockquote>

The huge (almost 6MiB) visual-basic script can be downloaded from <a href="https://github.com/eladkarako/WMIDiag.vbs" target="_blank">The GitHub Project (Mirror)</a>.
[<a href="https://github.com/eladkarako/WMIDiag.vbs" target="_blank">https://github.com/eladkarako/WMIDiag.vbs</a>]

- Download the vbs script to your desktop or better-yet, a flat (with no spaces) directory path (such as <code>C:\\wmifix\\</code> or something...)
- open command-prompt (CMD) as administrator and run <code>cscript.exe WMIDiag.vbs</code>.

- Expect a similar output:
<img src="https://icompile.eladkarako.com/_uploads/2016/06/icompile.eladkarako.com_wmidiagvbs_wmi_diagnostic_script_output.png" alt="icompile.eladkarako.com_wmidiagvbs_wmi_diagnostic_script_output" width="1156" height="613" class="aligncenter size-full wp-image-5426" />

- When done, M$-Windows-<code>notepad</code> will pop-up with the log file...



<blockquote>- Do You Want To Fix Your WMI Repository/Re-Register DLLs/Repair The Service?
- - Set either <code>set TARGET=%windir%\\system32\\wbem</code> or
    <code>set TARGET=%windir%\\SysWOW64\\wbem</code>
- - Run This Script (copy to text file <code>name_me_whatever.cmd</code>),
- - right click, and run as administrator.
<pre>
@echo off

:: --------------------------------
:: -  RUN AS ADMINISTRATOR.       -
:: --------------------------------
:: -  SELECT x32 or x64 VERSION   -
:: --------------------------------


::set TARGET=%windir%\\system32\\wbem
set TARGET=%windir%\\SysWOW64\\wbem

::--------------------------------------------------------Service STOP
sc config winmgmt start=disabled
net stop winmgmt /y

::--------------------------------------------------------DLL Register
%systemdrive%
cd %TARGET%
for %%e in (*.dll) do (
  call regsvr32 /s "%%e"
)

::--------------------------------------------------------Service START
call %TARGET%\\wmiprvse.exe /regserver 
call %TARGET%\\winmgmt.exe /regserver 
sc config winmgmt start=auto
net start winmgmt

::--------------------------------------------------------Repository Rebuild
%systemdrive%
cd %TARGET%
for %%e in (*.mof) do (
  call mofcomp "%%e"
)

for %%e in (*.mfl) do (
  call mofcomp "%%e"
)

::--------------------------------------------------------Done
pause
::::exit
</pre>
</blockquote>


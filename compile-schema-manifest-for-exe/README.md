<!--more-->

You can include it as <code>resource 24</code>, either by replacing your existing <code>resource 24</code>, or downloading the following <code>res</code>-file, that includes the minified version above.

<a button type="application/octet-stream" title="Download manifest_compiled.res (1.80KB)" download="manifest_compiled.res" href="https://icompile.eladkarako.com/_uploads/2017/06/manifest_compiled.res">Download <strong>manifest_compiled.res</strong> &nbsp; <sub><em>(1.80KB)</em></sub></a>


<hr/>
If you need to modify the text-content above,
you would probably need to compile it to binary res-file,
it is usually done by a program named <code>RC.exe</code>,
provided by Microsoft, as part of the Visual-Studio package,

But, if you are having problems using your <code>RC.EXE</code>
for any reason (mostly old versions of rc/ schema versions/ encoding and such..)

You can try a simple workaround using ResHack:
copy the <code>calc.exe</code> <sub>(from <code>C:\\Windows\\System32\\calc.exe</code>)</sub>,
open it with ResHack, and modify the <code>resource 24</code>, hit compile button above,
and run the following command from CMD in the same folder: 
<code>ResHacker.exe -extract "calc.exe,manifest_compiled.res,24,1,1033"</code>
in the same folder you'll have <code>manifest_compiled.res</code>, probably with Unicode support too :]

<img src="https://icompile.eladkarako.com/_uploads/2017/06/icompile.eladkarako.com_reshacker_as_a_rc_compiler_alternative_workaround.png" alt="" width="601" height="280" />

The alternative is getting the most recent pre-release/beta/community Visual-Studio,
which you can install on a VM to keep your own system clean, search for the <code>RC.EXE</code>,
and simply run <code>rc.exe YOUR_TEXT_MANIFEST_FILE.rc</code>, it will convert the text file into <code>.res file</code>.

<em>The workaround is shorter.</em>

<hr/>

<div style="font-size:9pt;">
  June 25<sup><em>th</em></sup>, 2017 addition- 
  - Here is a plain/basic one.
<pre>
&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0" xmlns:asmv3="urn:schemas-microsoft-com:asm.v3"&gt;
    &lt;assemblyIdentity
        processorArchitecture="*"
        type="win32"
        name="WinSCP"
        version="5.0.0.0"
    /&gt;
    &lt;description&gt;
        WinSCP
    &lt;/description&gt;
    &lt;dependency&gt;
        &lt;dependentAssembly&gt;
            &lt;assemblyIdentity
                type="win32"
                name="Microsoft.Windows.Common-Controls"
                version="6.0.0.0"
                publicKeyToken="6595b64144ccf1df"
                language="*"
                processorArchitecture="*"
            /&gt;
        &lt;/dependentAssembly&gt;
    &lt;/dependency&gt;
    &lt;trustInfo xmlns="urn:schemas-microsoft-com:asm.v3"&gt;
        &lt;security&gt;
            &lt;requestedPrivileges&gt;
                &lt;requestedExecutionLevel
                    level="asInvoker"
                    uiAccess="false"/&gt;
            &lt;/requestedPrivileges&gt;
        &lt;/security&gt;
    &lt;/trustInfo&gt;
    &lt;compatibility xmlns="urn:schemas-microsoft-com:compatibility.v1"&gt;
        &lt;application&gt;
            &lt;!-- Windows Vista --&gt;
            &lt;supportedOS Id="{e2011457-1546-43c5-a5fe-008deee3d3f0}"/&gt;
            &lt;!-- Windows 7 --&gt;
            &lt;supportedOS Id="{35138b9a-5d96-4fbd-8e2d-a2440225f93a}"/&gt;
            &lt;!-- Windows 8 --&gt;
            &lt;supportedOS Id="{4a2f28e3-53b9-4441-ba9c-d69d4a4a6e38}"/&gt;
            &lt;!-- Windows 8.1 --&gt;
            &lt;supportedOS Id="{1f676c76-80e1-4239-95bb-83d0f6d0da78}"/&gt;
            &lt;!-- Windows 10 --&gt;
            &lt;supportedOS Id="{8e0f7a12-bfb3-4fe8-b9a5-48fd50a15a9a}"/&gt;
        &lt;/application&gt;
    &lt;/compatibility&gt;
    &lt;asmv3:application&gt;
        &lt;asmv3:windowsSettings xmlns="http://schemas.microsoft.com/SMI/2005/WindowsSettings"&gt;
            &lt;dpiAware&gt;True/PM&lt;/dpiAware&gt;
            &lt;dpiAwareness xmlns="http://schemas.microsoft.com/SMI/2016/WindowsSettings"&gt;PerMonitorV2,PerMonitor&lt;/dpiAwareness&gt;
        &lt;/asmv3:windowsSettings&gt;
    &lt;/asmv3:application&gt;
&lt;/assembly&gt;
</pre>
</div>
<!--more-->

I've captured the latest Firefox using a <em>null</em> VM,
but it seems that the <code>bin/firefox.exe</code> keeps exiting on import error,

It may be happening since I am building (and running) the package on a different OS-installation than the one that has-been captured on,

well, in that case you might need to specifically add an external-reference to a DLL file within the project.ini,
<code>C:\\Windows\\System32\\KernelBase.dll</code> called by <code>ucrtbase.dll</code> and seems to resolve it,

..just add <code>ExternalDLLs=ucrtbase.dll</code>.

You can also try: <code>ExternalDLLs=kernelbase.dll;kernel32.dll;ucrtbase.dll</code> for an additional "external reference DLL",

optionally add an improved compatibility, by adding:
<pre>
ProcessExternalNameBehavior=Original
SetVirtualModuleFileNameInPeb=1
LoadDotNetFromSystem=Win7
</pre>

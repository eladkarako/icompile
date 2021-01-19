I don't have much time to sum things up,  
so here is the state you most likely have in your registry, 
if you've installed an intel GPU drivers, that comes with openCL drivers.  
I have Intel 3000 on my Lenovo X220, which sadly is embedded on the CPU,  
so no much gain using a GPU-only in this case,  
anyway,  

the files <code>C:\Windows\System32\IntelOpenCL32.dll</code> and <code>C:\Windows\SysWOW64\IntelOpenCL32.dll</code> are the same, and there is no such thing as <code>IntelOpenCL64.dll</code>, 

it is located under the libs in <code>C:\Windows\System32\DriverStore\FileRepository\igdlh64.inf_amd64_neutral_fc2bea7bf411a3c4\IntelOpenCL64.dll</code>, but is not registered or installed.
  
there is a fault in the current way the registry values are:  
<pre>
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors]
"IntelOpenCL64.dll"=dword:00000000

[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors]
"IntelOpenCL32.dll"=dword:00000000

</pre>

(did you also notices that the 32bit and 64bit are upside down?)  

here is the fix and resources which I've.. resourced.. about..  

<pre>
Windows Registry Editor Version 5.00

;https://community.amd.com/thread/238621
;https://www.geeks3d.com/20181220/how-to-enable-intel-opencl-support-on-windows-when-amd-radeon-graphics-driver-is-installed/
;https://software.intel.com/en-us/forums/opencl/topic/804101

;---Intel® CPU Runtime for OpenCL™ Applications 18.1 for Windows* OS (64bit or 32bit)
;    https://software.intel.com/en-us/articles/opencl-drivers#proc-graph-section
;    http://registrationcenter-download.intel.com/akdlm/irc_nas/vcp/13794/opencl_runtime_18.1_x64_setup.msi


[HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\OpenCL\Vendors]
"IntelOpenCL32.dll"=-
"IntelOpenCL64.dll"=-
"C:\\Windows\\System32\\IntelOpenCL32.dll"=dword:00000000

[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Khronos\OpenCL\Vendors]
"IntelOpenCL32.dll"=-
"IntelOpenCL64.dll"=-
"C:\\Windows\\System32\\IntelOpenCL32.dll"=dword:00000000

</pre>


You need a full cold-restart (shutdown, power-up).



Note: if you wish to, you can try to locate all the registry and file-system values and place the x64 bit manually from  <code>C:\Windows\System32\DriverStore\FileRepository\igdlh64.inf_amd64_neutral_fc2bea7bf411a3c4\IntelOpenCL64.dll</code> under <code>C:\Windows\SysWOW64\IntelOpenCL32.dll</code>.  
there is probably a faulty installation process that does that mistake...


if you do you can use those instructions:
<pre>
Press ‘Start‘
Type ‘cmd‘ in search and press Enter.
Type regsvr32 IntelOpenCL64.dll and press Enter
</pre>

and you'll have to fix the reg-file to point to the correct version.
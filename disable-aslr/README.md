<blockquote>Address space layout randomization (ASLR) is a computer security technique involved in protection from buffer overflow attacks. In order to prevent an attacker from reliably jumping to, for example, a particular exploited function in memory, ASLR randomly arranges the address space positions of key data areas of a process, including the base of the executable and the positions of the stack, heap and libraries.</blockquote>

<ul>
<li>
<em>DLL?</em>
The shared CRT isn't your DLL, so you can't disable ASLR for it. You can only disable ASLR for EXEs and DLLs that you own (by disabling the DLL_IMAGE_RELOCATABLE flag in the PE header). 
The reason for this is that Windows Vista and above relocate some key windows binaries during system boot so that they can share the relocated memory across processes - this includes stuff like ntdll, kernel32, gdi32, user32, wininet..
</li>
<li>
<em>As system global settings</em>
A registry setting is available to forcibly enable or disable ASLR for all executables and libraries and is found at <code>HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management\\MoveImages</code>
specifying <code>"MoveImages"=dword:00000000</code> to disable it system-wide (current user).
</li>
<li>
Another option is to use the "Enhanced Mitigation Experience Toolkit" (EMET): <a href="https://technet.microsoft.com/en-us/security/jj653751" target="_blank">https://technet.microsoft.com/en-us/security/jj653751</a>, allowing to enable/disable ASLR it on a system or process basis.
</li>
</ul>
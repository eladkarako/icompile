gpedit.msc  
Computer Configuration
Windows Settings
Scripts (Startup/Shutdown)
Shutdown

Save this cmd file in your computer somewhere: 
<pre>
@echo on
::-------------------------------------------------------------------Firewall Reset (firewall works on XP,7,8+, advfirewall work on 7,8+)
netsh firewall reset
netsh advfirewall reset

::-------------------------------------------------------------------Disable Firewall (firewall works on XP,7,8+, advfirewall work on 7,8+)
netsh firewall set opmode mode=DISABLE profile=ALL
netsh advfirewall set allprofiles state off

::-------------------------------------------------------------------delete http cache
netsh nap reset
netsh rpc reset
netsh winhttp reset
netsh http flush
netsh http delete timeout timeouttype=idleconnectiontimeout
netsh http delete timeout timeouttype=headerwaittimeout

::-------------------------------------------------------------------make connection direct
netsh winhttp reset proxy

::-------------------------------------------------------------------disable tracing (default = disabled, ansi, 65535)
netsh winhttp reset tracing

::-------------------------------------------------------------------delete http cache

netsh http delete cache

::-------------------------------------------------------------------BranchCache Optimize WAN traffic (Windows Server 2008 R2 and Windows® 7)
netsh branchcache reset

::-------------------------------------------------------------------Routing Lists Clear
netsh routing reset

::-------------------------------------------------------------------Network-Adapter’s Software Default (Winsock Reset and Rebuild)
netsh winsock reset

::-------------------------------------------------------------------BranchCache is a new feature of Windows Server 2008 R2 and Windows® 7. BranchCache 
netsh interface ipv4 reset
netsh interface ipv6 reset

::-------------------------------------------------------------------Network-Interfaces Reset
netsh interface reset all

netsh interface httpstunnel reset


::-------------------------------------------------------------------Hardcore TCP/IP Reset and Rebuild
netsh int ip reset c:\temp\netsh_ip_reset_log.txt



exit 
</pre>

for example <code>tcp-ip reset and rebuild.cmd</code>.  

  
  

add <code>C:\Windows\System32\cmd.exe</code> as the "Script Name" line,  
and <code>/C "C:\Software\tcp-ip reset and rebuild.cmd"</code> (for example) in the "Script Parameters" line.  

test it by shutting down your computer.

the registry values (for inspecting) in
might show you last run time 
<pre>
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Group Policy\State\Machine\Scripts\Shutdown\0\0
</pre>
or error codes
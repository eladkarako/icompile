Edit: March 2016 - Copy&Paste this to a new text-file, rename the extension from txt to cmd, and right click, run as Administrator.

<pre><span style='color:#308080; '>@</span><span style='color:#200080; font-weight:bold; '>echo on</span>
<span style='color:#595979; '>::-------------------------------------------------------------------Firewall Reset (firewall works on XP,7,8+, advfirewall work on 7,8+)</span>
netsh firewall reset
netsh advfirewall reset

<span style='color:#595979; '>::-------------------------------------------------------------------Disable Firewall (firewall works on XP,7,8+, advfirewall work on 7,8+)</span>
netsh firewall <span style='color:#200080; font-weight:bold; '>set</span> opmode <span style='color:#200080; font-weight:bold; '>mode</span><span style='color:#308080; '>=</span>DISABLE profile<span style='color:#308080; '>=</span>ALL
netsh advfirewall <span style='color:#200080; font-weight:bold; '>set</span> allprofiles state <span style='color:#200080; font-weight:bold; '>off</span>

<span style='color:#595979; '>::-------------------------------------------------------------------delete http cache</span>
netsh nap reset
netsh rpc reset
netsh winhttp reset
netsh http flush
netsh http delete timeout timeouttype<span style='color:#308080; '>=</span>idleconnectiontimeout
netsh http delete timeout timeouttype<span style='color:#308080; '>=</span>headerwaittimeout

<span style='color:#595979; '>::-------------------------------------------------------------------make connection direct</span>
netsh winhttp reset proxy

<span style='color:#595979; '>::-------------------------------------------------------------------disable tracing (default = disabled, ansi, 65535)</span>
netsh winhttp reset tracing

<span style='color:#595979; '>::-------------------------------------------------------------------delete http cache</span>

netsh http delete cache

<span style='color:#595979; '>::-------------------------------------------------------------------BranchCache Optimize WAN traffic (Windows Server 2008 R2 and Windows® 7)</span>
netsh branchcache reset

<span style='color:#595979; '>::-------------------------------------------------------------------Routing Lists Clear</span>
netsh routing reset

<span style='color:#595979; '>::-------------------------------------------------------------------Network-Adapter’s Software Default (Winsock Reset and Rebuild)</span>
netsh winsock reset

<span style='color:#595979; '>::-------------------------------------------------------------------BranchCache is a new feature of Windows Server 2008 R2 and Windows® 7. BranchCache </span>
netsh interface ipv4 reset
netsh interface ipv6 reset

<span style='color:#595979; '>::-------------------------------------------------------------------Network-Interfaces Reset</span>
netsh interface reset all

netsh interface httpstunnel reset


<span style='color:#595979; '>::-------------------------------------------------------------------Hardcore TCP/IP Reset and Rebuild</span>
netsh int ip reset c<span style='color:#308080; '>:</span><span style='color:#308080; '>\\</span>temp<span style='color:#308080; '>\\</span>netsh_ip_reset_log.txt




<span style='color:#200080; font-weight:bold; '>pause</span>
</pre>

<hr />

older versions:


<strong>handle windows xp clean fix
</strong>
@echo off
echo.
echo -Firewall Reset and Turn-Off.-------------
echo -----------------------------
netsh firewall reset
netsh firewall set opmode mode=DISABLE profile=ALL

echo.
echo -Routing Lists Clear.-------------
echo ---------------------
netsh routing reset

echo.
echo -Winsock Reset and Rebuild.-------------
echo ---------------------
netsh winsock reset

echo.
echo -Network-Interfaces Reset.-------------
echo --------------------------
netsh interface reset all

echo.
echo -Hardcore TCP/IP Reset and Rebuild.-------------
echo -----------------------------------
netsh int ip reset d:\esetlog.txt

echo.
echo -Done.
pause






<strong>handle windows 7 clean fix</strong>

netsh interface portproxy reset
netsh http delete cache
netsh interface tcp reset

netsh rpc reset
netsh winsock reset
netsh winhttp reset

netsh advfirewall reset
netsh advfirewall set allprofiles state off
netsh branchcache reset

netsh int ip reset c:\esetlog.txt
netsh int ipv4 reset c:\\ipv4reset.txt
netsh int ipv6 reset c:\\ipv6reset.txt
netsh int httpstunnel reset c:\\httpstunnel.txt
netsh int tcp reset c:\\tcp.txt

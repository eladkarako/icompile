Some information first:  
<a href="https://en.wikipedia.org/wiki/Maximum_transmission_unit">https://en.wikipedia.org/wiki/Maximum_transmission_unit</a>.  
<a href="https://kb.netgear.com/19863/Ping-Test-to-determine-Optimal-MTU-Size-on-Router">https://kb.netgear.com/19863/Ping-Test-to-determine-Optimal-MTU-Size-on-Router</a>.  
  
To calculate a proper MTU value,  
one that works with most network-adapters, routers and ISP - you use the ping command,  
<code>ping -f -l 1492 "www.google.com"</code> usually results with  
<code>Packet needs to be fragmented but DF set.</code>  

You reduce the number (by 10) and repeat the process,  
when you hit a close-number to the optimal value,  
you might end up with a long delay, and an error.  

for example, for <code>ping -f -l 1472 "www.google.com"</code>  
I get a 3+ seconds waiting and <code>Request timed out.</code>,  

I've than reduced <code>10</code> to <code>1462</code> but it felt lag'gy,  
so I eventualy reduced the value by another <code>10</code> to <code>1452</code>).  

The actual MTU value to use in various registry-values, and the router's WAN/ISP settings,  
is the result you've got plus <code>28</code> (which is the size of the IP and ICMP headers added to each packets),  
so for me <code>1452 + 28 = 1480</code> and that was the value I've used in my router.  

By default D-Link router will use <code>1492</code>.  

Note that although I've managed to ping with the value of <code>1462</code>,  
I've choose to reduce the value a slightly more,  
This is because I've experienced often uploads failures and download hangouts,  
in addition, viewing the router's statistic showed some amount of errors. But mostly the uploads/download failures.  

Normally people 'do not factor' the amount of errors in the router's statistics page,  
but that is good information to query each time you change configuration.  

For example if you're testing different WiFi settings, switching from network states (B/G/N, G/N, G or N.. or AC),  
and 20hz to auto 20/40hz, you should reset the statistics and compare the amount of errors you see. Too much, means the network is not configured in an efficient manner.

  

Normally you should not ping a internet-hostname, since a local-network-addresse usually result with an higher values still working, which is misleanding,  
and it leaves a lot of packet-reshaping to be done on the router.

Using a lightly lower value means your computer and router will probably work well together, with reduced packet-reshaping done in the router.  


For that you may also set the MTU value in each network-adapter.  
Windows vista/7/8/8.1/10+ will allow you to specify a source address using a <code>-S</code> (large case 's').  

But you can simply follow the rule-of-thumb,  
ping a network hostname (as seen above), assuming just one of your network-adapters is currently connected to the network that has internet-access,  
and use the same result MTU (value+28) in each of the network-adapter's registry values.  


Set MTU in your registry - you don't have to, but here is how-to anyway:  

Example:
<pre>
;;; this is for 1480, for example
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces\{11C93925-F3C2-454E-A27B-C1387F2BB135}]
"MTU"=dword:000005c8

; 1480 is 000005c8
; 1496 is 000005db
; 1500 is 000005dc
</pre>

You use a program such as Registry-Workshop or just your regedit.exe,  
and browse <code>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces</code>.  
the best way is to copy each unique identifier (start with '{' ends with '}'),  
making a reg-file like this:  

<pre>
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces\{11C93925-F3C2-454E-A27B-C1387F2BB135}]
"MTU"=dword:000005d8

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces\{1890A883-D7AF-41C2-B35C-9F44222C665C}]
"MTU"=dword:000005d8

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces\{1C1AF966-3CC7-4355-B740-FC9879FE1E43}]
"MTU"=dword:000005d8
</pre>

to delete each newly added MTU (by default there is none) use can copy the reg-file and create something like this:  
<pre>
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces\{11C93925-F3C2-454E-A27B-C1387F2BB135}]
"MTU"=-

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces\{1890A883-D7AF-41C2-B35C-9F44222C665C}]
"MTU"=-

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces\{1C1AF966-3CC7-4355-B740-FC9879FE1E43}]
"MTU"=-
</pre>


Keep in-mind that this will explicitly set MTU to use,  
and normally you don't need it - setting the value in the router is sufficient.

Normally a ThinApp (Thinstall) applications is quite organic, 
it can access most of the resources of the system, 
and be active on various versions of Windows without issues.

But what if you want to use the power of the isolated container, 
to actually block internet-access from the "compiled" application?

On your captured (pre-compiled) ThinApp project, 
edit the <code>HKEY_LOCAL_MACHINE.txt</code> file, 
and add the following lines at the end of the file:

<pre>
isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\Tcpip

isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\TCPIP6

isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\LanmanServer

isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\LanmanWorkstation

isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\TCPIPTUNNEL

isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\TCPIP6TUNNEL

isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\tdx

isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\Winsock

isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\WinSock2

isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Network
</pre>



Note #1: 
<strong>empty lines</strong>: there should be one empty-line before you add the lines above, 
and one empty-line at the end of the file, the file should be UTF-8 encoded (without BOM), and with Windows-EOL.


Note #2: 
If your compiled application registers a <code>WinSock</code> object, 
it might present a visible pop-up showing you "WinSock Error".
In that case, I find the following lines equally effective, 
and they will not generate WinSock errors:
<pre>
isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\Tcpip

isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\TCPIP6

isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\TCPIPTUNNEL

isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\TCPIP6TUNNEL
</pre>


Note #3: 
<strong>Do not generate MSI</strong> (installer) from the ThinApp-project, 
if you're going to use that solution.
Installing that MSI on your system will clear-up very important set of registry-keys, 
and will cause your real-computer to not have any internet-access.


Note #4:
I found the above solution online in one of the support-forums for ThinApp, 
which suggested just adding <code>isolation_full HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\Tcpip</code>, 
I think that adding all of the services above should provide a wider protection.


Note #5:
<strong>Adding a HOSTS-blocking file to your uncompiled-project</strong>.
as an addition you can add a <code>hosts</code> file that will be blocking any <strong>specific</strong> unwanted subdomains, 
to do that create a new file named <code>hosts</code> (no extension) and place it inside <code>%SystemSystem(x64)%\drivers\etc</code> (create the <code>driver</code> and <code>etc</code> folders)
(it will be mapped to the actuall path, for example, of <code>C:\Windows\System32\drivers\etc\hosts</code>), 
I don't know why it's <code>(x64)</code> and not the <code>%SystemSystem%</code> one, 
but that's how project was captured on my Win7x64 machine. I guess you can copy the same structure to <code>%SystemSystem%</code> as well. just in-case.

Here is an example on how the file should be looking like (for example):
<pre>
127.0.0.1 localhost
::1       localhost
:1        localhost

0.0.0.0 ads.baddomain.com
0.0.0.0 www.baddomain.com
</pre>

Including a hosts file this way will override a name-resolving result, 
from your computer, router and DNS service with <code>0.0.0.0</code> which will block it.


Note #6:
You can not block online access to an IP address in the <code>hosts</code> file 
(blocking of IP-ranges can be done by including a pre-configured <a href="https://en.wikipedia.org/wiki/PeerBlock">PeerBlock</a> in your project, 
which uses an additional network-driver on top of the existing network-adapter interface, 
but that's getting too complex already, 
the first method explained in the article should provide you the best way to make your program completely offline.


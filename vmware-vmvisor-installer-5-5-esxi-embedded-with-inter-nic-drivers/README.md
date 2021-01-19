download ISO from VMware website (free version will do) - VMware-VMvisor-Installer-5.5.0-1331820.x86_64.iso
download this custom version of ESXi-Customizer-v2.7.2 (no installation needed) 

<a href="https://github.com/eladkarako/icompile/releases/download/latest/ESXi-Customizer-v2.7.2.rar">https://github.com/eladkarako/icompile/releases/download/latest/ESXi-Customizer-v2.7.2.rar</a>

Or you may also find newer versions in here: <a href="https://www.v-front.de/p/esxi-customizer.html">https://www.v-front.de/p/esxi-customizer.html</a> or here: <a href="https://www.v-front.de/p/esxi-customizer-ps.html">https://www.v-front.de/p/esxi-customizer-ps.html</a>.


Download Intel NIC drivers for linux <sup><em>(Network Adapter Driver for PCI-E Gigabit Network Connections under Linux)</em></sup>, from here: <a href="https://downloadcenter.intel.com/Detail_Desc.aspx?DwnldID=15817">https://downloadcenter.intel.com/Detail_Desc.aspx?DwnldID=15817</a> or here: <a href="https://github.com/eladkarako/icompile/releases/download/latest/e1000e-3.6.0.tar.gz">https://github.com/eladkarako/icompile/releases/download/latest/e1000e-3.6.0.tar.gz</a>


extract "ESXi-Customizer" anywhere and run "ESXi-Customizer.cmd" as administrator.
fill up the paths for the original ISO and browse the tar.gz file (write *.* and [ENTER] to see all files then select your tar.gz file)
place a temp. folder anywhere, use www.imgburn.com to burn the iso to a dvd-rom.

notes:
this should resolve "driver not found" or "no network adapters on the system" messages.
<pre>
This download is valid for the product(s) listed below.
Intel® 82563 Gigabit Ethernet PHY
Intel® 82566 Gigabit Ethernet PHY
Intel® 82567 Gigabit Ethernet Controller
Intel® 82571EB Gigabit Ethernet Controller
Intel® 82572EI Gigabit Ethernet Controller
Intel® 82573E Gigabit Ethernet Controller
Intel® 82573L Gigabit Ethernet Controller
Intel® 82573V Gigabit Ethernet Controller
Intel® 82574 Gigabit Ethernet Controller
Intel® 82577 Gigabit Ethernet PHY
Intel® 82578 Gigabit Ethernet PHY
Intel® 82579 Gigabit Ethernet Controller
Intel® 82583V Gigabit Ethernet Controller
Intel® Ethernet Connection I217-LM
Intel® Ethernet Connection I217-V
Intel® Ethernet Connection I218-LM
Intel® Ethernet Connection I218-V
Intel® Gigabit CT Desktop Adapter
Intel® Gigabit PT Quad Port Server ExpressModule
Intel® PRO/1000 PF Dual Port Server Adapter
Intel® PRO/1000 PF Quad Port Server Adapter
Intel® PRO/1000 PF Server Adapter
Intel® PRO/1000 PT Desktop Adapter
Intel® PRO/1000 PT Dual Port Server Adapter
Intel® PRO/1000 PT Quad Port Low Profile Server Adapter
Intel® PRO/1000 PT Quad Port Server Adapter
Intel® PRO/1000 PT Server Adapter 
</pre>

There are planty of drivers you might want to add, 
here is a collection: 
<a href="https://github.com/eladkarako/icompile/releases/download/latest/VIB_DRIVERS.rar">https://github.com/eladkarako/icompile/releases/download/latest/VIB_DRIVERS.rar</a>


I've previously distributed an already made ISO file, 
with additional drivers (NIC, sata, other hardware, etc..), 
but I no longer distribute it, 
you might Google the file, it might be still out-there somewhere <code>VMware-VMvisor-Installer-5.5.0-1331820.x86_64__driver_databank_March2014.iso</code>.


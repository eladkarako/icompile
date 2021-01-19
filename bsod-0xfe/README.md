My x220 had a lot of BSOD, 
the M$ pages didn't helped, 
they told the story of a device error (USB?).

My fingerprint scanner hardware chip was not working for some time ago, 
and my Intel 3000 was going crazy, not working, 
and every time I've opened a hardware inspection tool (msinfo and such), 
it kept flicking like crazy, refreshing super fast. 
the windows gpu dialog was refreshing too like crazy, 
intel control program was refreshing too, and when clicked on any button it was showing an infinite amount of msgbox popups with error (had to kill the intel-app).

at some point I've opened the computer and replaced the fingerprint-chip, I've also cleaned the dust very carfully without air-spray but with a thin paint-brush to reduce the static, I pre-removed any easily removable cards.

I've created a boot USB and wiped the HD to zero, installing Windows again, with the drivers (I've done that few times until I've found out the exact order), 
the first driver was the intel-chipset and wifi and that's it! next I've installed all the .net runtime and all the vc-runtime, 
I selectivly updated the windows from the windows update and avoided some suggested drivers in favor of older versions from lenovo. 

the point is that the hardware is not flicking anymore, and I suspect it was the fingerprint device, 
something I've read in one of the forums informed me that although the fingerprint-chip is "not USB", 
it interfaces with the bus through an USB bus, so essentially it IS a USB device, 
also, the fingerprint-chip was probably glitching, connecting/disconnecting so the device-manager was having a very hard-time since whenever a new hardware is installed (again in "a USB bus") the device-manager refreshes all the hardware. so this is probably why all the hardware inspection tools were refreshing like crazy.



Below are older messages and information I've read about the error (not very helpful).







https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/bug-check-0xfe--bugcode-usb-driver
https://answers.microsoft.com/en-us/windows/forum/all/blue-screen-caused-by-usb-port/de7fb97a-60b3-4c58-88a1-3460f58bb23a


Bug Check 0xFE: BUGCODE_USB_DRIVER
The BUGCODE_USB_DRIVER bug check has a value of 0x000000FE. This indicates that an error has occurred in a universal serial bus (USB) driver.




Bug Check 0xFE BUGCODE_USB_DRIVER - Windows drivers ...
Windows Debugging Tools ‹ ... ‹ https://docs.microsoft.com
❀︎ Cached Version
23 במאי 2017 · If you are a customer who has received a blue screen error code while ... 0x3, Reserved, Reserved, Reserved, The USB miniport driver has ..



Problem signature:
  Problem Event Name:	BlueScreen
  OS Version:	6.1.7601.2.1.0.256.1
  Locale ID:	1037

Additional information about the problem:
  BCCode:	fe
  BCP1:	0000000000000006
  BCP2:	FFFFFA80120CF870
  BCP3:	0000000048766544
  BCP4:	0000000000000000
  OS Version:	6_1_7601
  Service Pack:	1_0
  Product:	256_1

Files that help describe the problem:
  C:\Windows\Minidump\052120-80574-01.dmp
  C:\Temp\WER-833653-0.sysdata.xml

Read our privacy statement online:
  http://go.microsoft.com/fwlink/?linkid=104288&clcid=0x0409

If the online privacy statement is not available, please read our privacy statement offline:
  C:\Windows\system32\en-US\erofflps.txt





4D36E96C-E325-11CE-BFC1-08002BE10318

HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\AMDVBT2BDA
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\AMDVBT2USB
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\RTL2832UBDA
HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\services\RTL2832UBDA
HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\services\AMDVBT2BDA
HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\services\AMDVBT2USB





Astrometa DVB-T2 USB Driver

AMDVBT2BDA.sys
AMDVBT2USB.sys

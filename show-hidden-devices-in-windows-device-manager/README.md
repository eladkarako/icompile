There is an environment-variable that if set, 
it enables displaying more hidden/unavailble devices 
in the Windows device-manager.

It can be very useful when trying to uninstall drivers.

You can set the environment-variable "on-the-fly", 
following with launching the device-manager application:
<pre>
Set devmgr_show_nonpresent_devices=1
mmc devmgmt.msc /s
</pre>

Or add the <code>devmgr_show_nonpresent_devices</code> with value <code>1</code>, 
to your persistant environment-settings (where you have the system PATH defined..), 
which is very useful.
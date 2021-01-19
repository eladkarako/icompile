<pre>
; Determines how the system responds when a user tries to install device driver files that are not digitally signed.
;     This setting establishes the least secure response permitted on the systems of users in the group. Users can use System in Control Panel to select a more secure setting, but when this setting is enabled, the system does not implement any setting less secure than the one the setting established.
;     When you enable this setting, use the drop-down box to specify the desired response.
;       --   "Ignore" directs the system to proceed with the installation even if it includes unsigned files.
;       --   "Warn" notifies the user that files are not digitally signed and lets the user decide whether to stop or to proceed with the installation and whether to permit unsigned files to be installed. "Warn" is the default.
;       --   "Block" directs the system to refuse to install unsigned files. As a result, the installation stops, and none of the files in the driver package are installed.
;     To change driver file security without specifying a setting, use System in Control Panel. Right-click My Computer, click Properties, click the Hardware tab, and then click the Driver Signing button.
;
;    alternative options is to use:
;      bcdedit.exe -set loadoptions DDISABLE_INTEGRITY_CHECKS
;      bcdedit.exe -set TESTSIGNING ON
;

Windows Registry Editor Version 5.00

[HKEY_USERS\\S-1-5-XXXXXXXXX-----YOUR_USER_ID----XXXXXXX\\Software\\Microsoft\\Windows\\CurrentVersion\\Group Policy Objects\\{5EE91DA0-502A-476C-9E0F-2BE3D0CB2485}User\\Software\\Policies\\Microsoft\\Windows NT\\Driver Signing]
"BehaviorOnFailedVerify"=dword:00000000

[HKEY_USERS\\S-1-5-XXXXXXXXX-----YOUR_USER_ID----XXXXXXX\\Software\\Policies\\Microsoft\\Windows NT\\Driver Signing]
"BehaviorOnFailedVerify"=dword:00000000

[HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\Windows NT\\Driver Signing]
"BehaviorOnFailedVerify"=dword:00000000
</pre>

Undo:
<pre>
; Determines how the system responds when a user tries to install device driver files that are not digitally signed.
;     This setting establishes the least secure response permitted on the systems of users in the group. Users can use System in Control Panel to select a more secure setting, but when this setting is enabled, the system does not implement any setting less secure than the one the setting established.
;     When you enable this setting, use the drop-down box to specify the desired response.
;       --   "Ignore" directs the system to proceed with the installation even if it includes unsigned files.
;       --   "Warn" notifies the user that files are not digitally signed and lets the user decide whether to stop or to proceed with the installation and whether to permit unsigned files to be installed. "Warn" is the default.
;       --   "Block" directs the system to refuse to install unsigned files. As a result, the installation stops, and none of the files in the driver package are installed.
;     To change driver file security without specifying a setting, use System in Control Panel. Right-click My Computer, click Properties, click the Hardware tab, and then click the Driver Signing button.
;
;    alternative options is to use:
;      bcdedit.exe -set loadoptions DDISABLE_INTEGRITY_CHECKS
;      bcdedit.exe -set TESTSIGNING ON
;

Windows Registry Editor Version 5.00

[HKEY_USERS\\S-1-5-XXXXXXXXX-----YOUR_USER_ID----XXXXXXX\\Software\\Microsoft\\Windows\\CurrentVersion\\Group Policy Objects\\{5EE91DA0-502A-476C-9E0F-2BE3D0CB2485}User\\Software\\Policies\\Microsoft\\Windows NT\\Driver Signing]
"BehaviorOnFailedVerify"=-

[HKEY_USERS\\S-1-5-XXXXXXXXX-----YOUR_USER_ID----XXXXXXX\\Software\\Policies\\Microsoft\\Windows NT\\Driver Signing]
"BehaviorOnFailedVerify"=-

[HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\Windows NT\\Driver Signing]
"BehaviorOnFailedVerify"=-
</pre>

figure out your user ID by looking at your registry...
<img src="https://icompile.eladkarako.com/_uploads/2015/12/2015-12-09_161917.jpg" alt="2015-12-09_161917" width="537" height="325" class="alignnone size-full wp-image-3846" />


once you'll do that you might as well edit your sound-card driver's INF file, to enable internal STEREO-MIX, and reinstall the driver :)

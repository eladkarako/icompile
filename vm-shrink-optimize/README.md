After you've installed a clean new Windows 7/8/10, <br/>
and installed all the nedded updated from Windows-update,  <br/>
you'll end up with a hard-drive of about 35GB of a virtual-machine,  <br/>
with almost nothing on it.  <br/>
 <br/>
There are several folders you can delete, free-space null'ification and  <br/>
hard-drive compacting methods that will reduce about 15GB of the hard-file,  <br/>
without changing anything in your machine configuration itself. <br/>
 <br/>
Shrinking the hard-drive will make it easier for you to export VM. <br/>
 <br/>
This will also optimize the performances of the VM. :] <br/>
 <br/>
<ol>
<li>
Disable system-protection, you don't need it in a virtual-machine,  <br/>
where you can use a snapshot when needed. <br/>
 <br/>
Run: <code>C:\Windows\system32\systempropertiesadvanced.exe</code>,  <br/>
go to system-protection tab, for each drive click configure,  <br/>
set the progress-bar to the minimum possible, and click OK,  <br/>
go back and switch to <strong>Turn off system protection</strong>. <br/>
Click the <strong>Delete</strong> button (click continue) and do the same for the next drives. <br/>
Reboot the VM once before you'll continue the next steps. <br/>
<img src="https://i.imgur.com/hgaH38e.png" /> <br/>
<img src="https://i.imgur.com/jqsCHq7.png" /> <br/>
</li>
<li>
Run Windows disk-cleanup: <code>%windir%\system32\cleanmgr.exe</code> <br/>
<img src="https://i.imgur.com/XCjEdLa.png" /> <br/>
select <strong>everything</strong>, including old Windows-updates, run cleanup. <br/>
<img src="https://i.imgur.com/3nJfSXO.png" /> <br/>
</li>
<li>
Clean up leftovers, fix registry, remove old system-restore snapshots with  <br/>
this custom CCleaner: https://github.com/eladkarako/mods/tree/store/CCleaner <br/>
download just the CCleaner folder using github-partial-get: https://github.com/eladkarako/github-partial-get/archive/master.zip  <br/>
or just download the main exe and the INI file. <br/>
</li>
<li>
Disable the windows update service, and delete <code>C:\Windows\SoftwareDistribution\</code> to save about 5GB of storage. <br/>
run <code>services.msc</code>, look for the line of Windows Update, double click it,  <br/>
click stop, set to disabled, click OK. <br/>
<img src="https://i.imgur.com/2BRPkOI.png" /> <br/>
You can now go to <code>C:\Windows\SoftwareDistribution\</code> and delete its entire-content. <br/>
Don't worry, in-case you'll need the Windows Update again, simply set it to enabled and click run, the folder will be re-created. <br/>
</li>
<li>
Defrag all of the drives with Windows Defrag: <code>%windir%\system32\dfrgui.exe</code>, <br/>
it will make sure the hard-drive content is as continues as possible. <br/>
<img src="https://i.imgur.com/NPg9v4Z.png" /> <br/>
</li>
<li>
Download sdelete from https://docs.microsoft.com/sysinternals/downloads/sdelete <br/>
open CMD as administrator, and run <code>sdelete c: -z</code> to zero out empty space. <br/>
<img src="https://i.imgur.com/qu1GpR9.png" /> <br/>
</li>
<li>
<strong>Reboot the VM, and run defrag and sdelete again.</strong> <br/>
</li>
<li>
Shutdown the VM in an orderly fasion. <br/>
<img src="https://i.imgur.com/Ra0qU3i.png" /> <br/>
</li>
<li>
Optional.
Delete all snapshots of the virtual-machine, <br/>
everytime you'll delete one, its state will merge into the previous one <br/>
(don't worry it won't effect the current state), to save time start by deleting <br/>
the most recent-ones, the ones that are closest to the current-state line. <br/>
<img src="https://i.imgur.com/oAtNI44.png" /> <br/>
<br/>
This step is need if you wish to export the machine, <br/>
or maybe backup the virtual-machine folder. <br/>
</li>
<li>
<blockquote>My machine name (Windows 7) is <code>w7</code> and it's located at <code>C:\vm\w7\</code>, <br/>
the hard-drive file name is <code>w7.vdi</code>, make adjustments to where you place your VM, <br/>
and the name of your hard-drive file.</blockquote> <br/>
 <br/>
Open CMD as administrator and run: <br/>
<code>"C:\Program Files\Oracle\VirtualBox\VBoxManage.exe"  modifymedium --compact c:\vm\w7\w7.vdi</code> <br/>
<img src="https://i.imgur.com/ki4OXeZ.png" /> <br/>
 <br/>
This is the final-step, <br/>
it will try to trim storage space from the end-image, <br/>
that is why it was so important to defrag and use sdelete. <br/>
</li>
</ol>

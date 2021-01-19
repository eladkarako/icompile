<h4>Pre-conditions</h4>
You must be an administrator on the local-machine.

<h4>Taking Ownership/Permissive Permissions - Why?</h4>
Its convenient.
You may access all of the files and folders without limits.

<h4>But Really, Should I?</h4>
There are minimal risks, but this is something you should only practice if you are an experienced user.

<h4>OK, How?</h4>
TL;DR
First, you get rid of the UserAccountControl limits,
Secondly, You go to each drive's properties, security, advanced, 
first you check-ON the checkbox to replace ownership on all sub-folders/files, 
then you add a new user: <code>Everyone</code>, and make it take the ownership.
after a reboot, do the same but choose security-tab instead of ownership, 
add new users: <code>Everyone</code>, your personal user, <code>Administrators</code> and give everyone full-control, including the existing ones, making sure to set "all folders and files". You then check-ON the checkbox to replace security-permissions for all sub-folders and files.
During you'll be notified that the properties for the files <code>C:\pagefile.sys</code> and <code>C:\hiberfil.sys</code> (for example) can not be set, it's ok, just skip/continue until it's done.

Don't do more than one drive at a time, and if the process is stuck and you'll need to reboot, 
you'll have to do it again to make sure none of the security-descriptors arn't corrupt.

Some screenshots:
<img src="https://icompile.eladkarako.com/_uploads/ownership_permission_1.png" /><br/>
<img src="https://icompile.eladkarako.com/_uploads/ownership_permission_2.png" /><br/>
<img src="https://icompile.eladkarako.com/_uploads/ownership_permission_3.png" /><br/>
That's OK too.. <br/>
<img src="https://icompile.eladkarako.com/_uploads/ownership_permission_4.png" /><br/>

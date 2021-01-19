<!--more-->


GitHub and git builds for windows, are periodically updated in version,
when they do, the <code>github.exe</code> path location changes.

for example (I'm using 8.3 short path, and I suggest you'll use it too)

it used to be:
<code>C:\\Users\\Elad\\AppData\\Local\\Apps\\2.0\\GXTY5G8Y.XNA\\OAZ2PXZR.G47\\gith..tion_317444273a93ac29_0002.000e_114545a4195e25d4</code>

and now it is 
<code>C:\\Users\\Elad\\AppData\\Local\\Apps\\2.0\\GXTY5G8Y.XNA\\OAZ2PXZR.G47\\GITHTI~4.000\\</code>

or 
<code>C:\\Users\\Elad\\AppData\\Local\\Apps\\2.0\\GXTY5G8Y.XNA\\OAZ2PXZR.G47\\GITHTI~3.000\\</code>

so if you are using TortoiseGit and every now and again you are getting the dialog box (SshAskPass.exe) 
right after showing the following errors:
<pre>
github --credentials store: github: command not found
github --credentials store: github: command not found
....
</pre>

<em>*git-remote-https.exe uses the following path:
<code>"C:\\Program Files\\TortoiseGit\\bin\\SshAskPass.exe" "Password for 'https://[[your github username]]@github.com'</code>: 
</em>

now you know why,

locate the github.exe in it's new path,
use the 8.3 path (a.k.a short path) and replace the old value in your registry or open <code>C:\\Windows\\system32\\systempropertiesadvanced.exe</code> (system properties - advanced)
and update it manually...
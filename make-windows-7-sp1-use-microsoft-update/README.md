<img src="https://icompile.eladkarako.com/_uploads/2014/11/2014-11-01_192208.jpg" />

for some reason, clicking on the 'get updates for other microsoft products' in my Windows-Update application, in Windows 7, is just opening the windows-update website, it used to (about 4 months ago..) show a button in which when pressed, the windows application got updated to also search for all updates for Microsoft Office, Visual Studio, etc..
<!--more-->


I don't know why it does not work anymore,
maybe the fact I'm installing a bundle of Windows7+SP1 with latest updates (October 2014) which has Internet-Explorer Version 11 already inside,

so it might be IE11, might be SP1 or just that the website has stopped working..?!@#?

anyway, I've found out this code, in a blog somewhere, which traced back to an official (MS Vista help page) that shows how to register the 'Microsoft Update' instead of 'Windows Update' (its reversible) using VBS (visual basic script using in windows, which is enabled to fetch some objects and register an existing service, essentially just writing a flag to make it active).

<pre>
Set ServiceManager = CreateObject("Microsoft.Update.ServiceManager") 
ServiceManager.ClientApplicationID = "My App" 
'add the Microsoft Update Service by GUID 
Set NewUpdateService = ServiceManager.AddService2("7971f918-a847-4430-9279-4a52d1efe18d",7,"")
</pre>

you have to reboot the pc to make it active (logout and login might work just as well, probably even if fast-user switch is on - default..)

its content is not really reasonable (wtf is "my app..." ??) but eh... I don't care...


when I've have some time to wrap it in a nice prompt, I'll add some basic yes no cancel to apply or remove the setting.


<pre>
Option Explicit

Private Sub Form_Load()
Dim message, response

message = "Set Microsoft-Update Active:," & vbNewLine & _
"- [YES]     Set Microsoft-Update Active (Instead Of Windows-Update)." & vbNewLine & _
"- [NO]      {Back To Default} - Set Windows-Update Active (Instead Of Microsoft-Update)." & vbNewLine & _
"- [Cancel]  Make No Change." & vbNewLine & _
"---" & vbNewLine & _
"Elad Karako {icompile.eladkarako.com}" & vbNewLine

response = MsgBox(message, vbYesNoCancel Or vbDefaultButton3 Or vbInformation, "User-Action Needed:")
MsgBox (response) 'yes = 6, no=7, cancel=2
End Sub

</pre>
copy &amp; paste this file to an empty file, name it "install.reg", save. double click the file, to "install it".
<pre>Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\\Unknown\\shell\\editnotepad2]
@="Edit with Notepad2"

[HKEY_CLASSES_ROOT\\Unknown\\shell\\editnotepad2\\command]
@="\\"D:\\\\Software\\\\Notepad 2.0\\\\Notepad2.exe\\" %1\\""

[HKEY_CLASSES_ROOT\\Unknown\\shell\\editnotepadpp]
@="Edit with Notepad++"

[HKEY_CLASSES_ROOT\\Unknown\\shell\\editnotepadpp\\command]
@="\\"D:\\\\Software\\\\Notepad++\\\
otepad++.exe\\" \\"%1\\""</pre>
it will add two menu items, for files with extension, that isn't assigned to a program, or in other words,
explorer won't know in which program to use to view those files.

<img class="alignnone size-full wp-image-511" title="add_right_click_edit_in_notepad_for_files_with_unknown_extension" src="https://icompile.eladkarako.com/_uploads/2012/05/add_right_click_edit_in_notepad_for_files_with_unknown_extension.png" alt="" width="363" height="131" />

<hr />

wish to remove it?


copy &amp; paste this file to an empty file, name it "uninstall.reg", save. double click the file, to "uninstall it".
<pre>Windows Registry Editor Version 5.00
[-HKEY_CLASSES_ROOT\\Unknown\\shell\\editnotepad2]
[-HKEY_CLASSES_ROOT\\Unknown\\shell\\editnotepadpp]</pre>

<hr />

note:
as you've probably noticed, notepad2 and notepad++ 'sits' in a custom folder under D:\\Software\\

on your computer, you might want to use any other editor, or notepad++ from another location.





if you want to use notepad++ from C:\\Program Files\\Notepad++ (for example), edit the install script so the path will use this path. remember: path in registry syntax uses two '\\'. so C:\\Program Files\\Notepad++\
otepad++.exe will became C:\\\\Program Files\\\\Notepad++\\\
otepad++.exe

&nbsp;

here is our modified install script:
<pre>Windows Registry Editor Version 5.00
[HKEY_CLASSES_ROOT\\Unknown\\shell\\editnotepadpp]
@="Edit with Notepad++"

[HKEY_CLASSES_ROOT\\Unknown\\shell\\editnotepadpp\\command]
@="\\"C:\\\\Program Files\\\\Notepad++\\\
otepad++.exe\\" \\"%1\\""</pre>
and our uninstall script will be similar..
<pre>Windows Registry Editor Version 5.00
[-HKEY_CLASSES_ROOT\\Unknown\\shell\\editnotepadpp]</pre>

<hr />

here is an illustration of the registry:

<img class="alignnone size-full wp-image-512" title="add_right_click_edit_in_notepad_for_files_with_unknown_extension_registry" src="https://icompile.eladkarako.com/_uploads/2012/05/add_right_click_edit_in_notepad_for_files_with_unknown_extension_registry.png" alt="" width="621" height="171" />


<hr />

note2:
have you noticed that the default action is still the "Open", which shows the 'Open Dialog' for unknown extensions?
you can set each of the actions under \\shell\\ to be the default one.

the secret is using
@="--the name of the key--" under \\shell\\

for example we want to set the default to be notepad++, so (I've separated it to another script) run this one:
<pre>Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Unknown\\shell]
@="editnotepadpp"</pre>
this relays on the fact that there is a key named editnotepadpp, if you've changed it / customized it, make sure to use your key name.

to bring it back (uninstall it, or in another words make it use the default 'open' dialog) just use this script:
<pre>Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Unknown\\shell]
@="openas"</pre>
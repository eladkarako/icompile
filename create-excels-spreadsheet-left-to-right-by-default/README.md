<a href="https://icompile.eladkarako.com/_uploads/2012/01/2012-01-14_213323.png"><img class="alignnone size-medium wp-image-455" title="excel-ltr-preview" src="https://icompile.eladkarako.com/_uploads/2012/01/2012-01-14_213323.png" alt="" width="300" height="206" /></a>

Hi,
if you've got yourself a OS that supports few languages, such as Hebrew/English,
you might want to make sure that Excel will open new spreadsheets Left to Right for English

1. open registry editor and browse HKEY_USERS, find out what is your username UUID, its the long string, copy its textual value ("s-...").

<a href="https://icompile.eladkarako.com/_uploads/2012/01/2012-01-14_213653.png"><img class="alignnone size-medium wp-image-456" title="2012-01-14_213653" src="https://icompile.eladkarako.com/_uploads/2012/01/2012-01-14_213653.png" alt="" width="300" height="161" /></a>

2. create new file named "excel_rtl.reg", make sure if you use notepad to surround it with  inverted commas (").
replace the username UUID below with yours.

3. run the reg file.

<pre>Windows Registry Editor Version 5.00

<span style='color:#7f9fbf; font-weight:bold; '>[HKEY_USERS\\S-1-5-21-2454573167-78480226-1662416551-1005\\Software\\Microsoft\\Office\\12.0\\Excel\\Options]</span>
<span style='color:#0000e6; '>"DefaultSheetR2L"</span><span style='color:#808030; '>=</span><span style='color:#696969; '>dword</span>:<span style='color:#008c00; '>00000000</span>
</pre>

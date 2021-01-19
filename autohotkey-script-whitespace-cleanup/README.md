Strip Formatting and Paste Clipboard (Windows+V)

This AutoHotKey script is extremely helpful when removing hidden Microsoft mark-up from the clipboard when pasting from Word to online WYSIWYG editors, cleaning up Outlook replies, removing trailing non-breaking spaces or using the "Paste as Value" function in Excel.
<!--more-->

<pre>
REMOVECHAR:
AutoTrim,Off
StringCaseSense,On
StringReplace,string,string,chr(160),A_Space,All ;Non-breaking space
StringReplace,string,string,–,-,All ;emdash
StringReplace,string,string,´,',All
StringReplace,string,string,’,',All
StringReplace,string,string,©,(C),All
StringReplace,string,string,“,",All ;left quote
StringReplace,string,string,”,",All ;right quote
StringReplace,string,string,®,(R),All
StringReplace,string,string,¼,1/4,All
StringReplace,string,string,½,1/2,All
StringReplace,string,string,¾,3/4,All
StringReplace,string,string,™,TM,All
StringReplace,string,string,«,<<,All
StringReplace,string,string,»,>>,All
StringReplace,string,string,„,",All
StringReplace,string,string,•,-,All ;bullet
StringReplace,string,string,…,...,All
Return
 
#v:: ;Windows+V Strip Formatting and Paste Clipboard
string = %clipboard%
Gosub,REMOVECHAR
clipboard := RegExReplace(string, "(^\\s+)|(\\s+$)")
SendPlay,^v
return
</re>
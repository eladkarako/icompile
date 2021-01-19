goto
C:\\Documents and Settings\\Elad\\Application Data\\Mozilla\\Firefox\\Profiles\\35htmg30.default\\extensions\\

if your extensions are still in xpi form, use winrar to extract them to a folder in that name, new firefox browsers does not require extracting the xpi file, but doing it on-the-fly. once extracted, you can remove the xpi files. the folders will be used instead.

&nbsp;

browse {e4a8a97b-f2ed-450b-b12d-ee082ba24781}

browse the chrome folder.

use winrar and extract greasemonkey.jar into a folder \\greasemonkey\\

browse the folder\\content\\, open install.js in notepad++

&nbsp;

change line 13 to:

var gTotalDelay = new GM_PrefManager().getValue('installDelay', 1);

&nbsp;

&nbsp;

change line 130 (in the startTimer method) to:

gTimer = window.setInterval(onInterval, 10);

&nbsp;

save the file.

&nbsp;

go up one level,

use <strong>winzip</strong> to compress content,locate,skin

and rename the greasemonkey.zip to .jar

move the greasemonkey.jar to its original place, one level above, overriding the original file.

remove the (extracted from before) \\greasemonkey\\ folder. you don't need it.
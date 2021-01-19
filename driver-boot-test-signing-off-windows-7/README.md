<!--more-->
<code>-Press "Start" Button
-start writing in the search-box: cmd
-right click "cmd" icon and choose "run as administrator"</code>

run:
<code>bcdedit</code>

to see something like this:
<code>...
testsigning             Yes
...</code>

run:
<code>bcdedit /set testsigning off</code>

to make it change to "No".


-=-=-=-=-=-

Running <code>java.exe</code> or <code>javaw.exe</code>,
and having this problem?:

<pre>
Error: opening registry key 'Software\\JavaSoft\\Java Runtime Environment'
Error: could not find java.dll
Error: Could not find Java SE Runtime Environment.
</pre>

<!--more-->

All you have to do is to rename/remove those files:
<pre>
C:\\Windows\\System32\\java.exe
C:\\Windows\\System32\\javaw.exe
C:\\Windows\\System32\\javaws.exe
C:\\Windows\\SysWOW64\\java.exe
C:\\Windows\\SysWOW64\\javaw.exe
C:\\Windows\\SysWOW64\\javaws.exe
</pre>

Since the environment settings makes <code>Windows</code> directory take precedence,
over other path location.

Right after renaming/removing <strong><em>(btw.: no need to reboot nor to log-off)</em></strong>,
run <code>where java.exe</code>,
and expect to get something like <code>C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\java.exe</code>,

It will resolve this issue system-wide :]

Enjoy!
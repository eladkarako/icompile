add a batch file (disconnect_session.cmd for example), with the following content:

<pre>
@echo off
C:\\Windows\\System32\\tscon.exe rdp-tcp#0 /dest:console


::--- disconnect current session
::tsdiscon

::tsdiscon rdp-tcp#0
::tsdiscon 2 /v
</pre>

', 'Disconnect A Windows-Based Virtual-Machine
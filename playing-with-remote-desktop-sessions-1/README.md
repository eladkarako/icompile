disconnect current session, on a single user, windows 7 based OS, but sending the connection to "console" to make the session kept open
C:\\Windows\\System32\\tscon.exe rdp-tcp#0 /dest:console

will an alet on the guest side telling you your session has ended

---

find out all the current opened sessions to a machine
query session

will give:
 SESSIONNAME       USERNAME                 ID  STATE   TYPE        DEVICE
 services                                    0  Disc
>rdp-tcp#0         Elad                      2  Active  rdpwd
 console                                     3  Conn
 rdp-tcp                                 65536  Listen
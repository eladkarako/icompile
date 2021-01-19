C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Default>dir /X /s /b | findstr /v /i "\\Cache\\"

dir /S /A-D /O-S /B


















@echo on
set sSqliteEXE="%CD%\\sqlite3.exe"
set sChromiumRoot=C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data

c:
cd "%sChromiumRoot%"
for /r %%e in (*.*) do (
  start /MIN /LOW cmd /c "%sSqliteEXE% "%%e" vacuum"
)
pause

------------------------------------------------------------
------------------------------------------------------------

sqlite-shell-win32-x86-3090200.zip
  sqlite3.exe

sqlite-dll-win64-x64-3090200.zip
  sqlite3.dll
  sqlite3.def

------------------------------------------------------------
------------------------------------------------------------

sqlite3.exe --help

Usage: sqlite3.exe [OPTIONS] FILENAME [SQL]
FILENAME is the name of an SQLite database. A new database is created
if the file does not previously exist.
OPTIONS include:
   -ascii               set output mode to 'ascii'
   -bail                stop after hitting an error
   -batch               force batch I/O
   -column              set output mode to 'column'
   -cmd COMMAND         run "COMMAND" before reading stdin
   -csv                 set output mode to 'csv'
   -echo                print commands before execution
   -init FILENAME       read/process named file
   -[no]header          turn headers on or off
   -help                show this message
   -html                set output mode to HTML
   -interactive         force interactive I/O
   -line                set output mode to 'line'
   -list                set output mode to 'list'
   -lookaside SIZE N    use N entries of SZ bytes for lookaside memory
   -mmap N              default mmap size set to N
   -newline SEP         set output row separator. Default: '\
'
   -nullvalue TEXT      set text string for NULL values. Default ''
   -pagecache SIZE N    use N slots of SZ bytes each for page cache memory
   -scratch SIZE N      use N slots of SZ bytes each for scratch memory
   -separator SEP       set output column separator. Default: '|'
   -stats               print memory stats before each finalize
   -version             show SQLite version
   -vfs NAME            use NAME as the default VFS

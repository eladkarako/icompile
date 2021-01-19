@echo off
chcp 65001 2>nul >nul

set "EXIT_CODE=111"
set "NODE="
for /f "tokens=*" %%a in ('call %~sdp0get_node.cmd 2^>nul') do ( set "NODE=%%a"  )
if ["%ErrorLevel%"] NEQ ["0"] ( goto END ) 
if ["%NODE%"] EQU [""]        ( goto END )

::run NodeJS with path-to-index.js, and all the command-line-arguments passed to index.cmd .
call "%NODE%" "%~sdp0index.js" %* 
set "EXIT_CODE=%ErrorLevel%"

:END
pause
exit /b %EXIT_CODE%

::--------------------------------------------------------------------------------------
::  Exit codes
::    0       success - exit-code is from NodeJS' index.js script.
::    111     error   - no node.exe found (NodeJS index.js hasn't started yet).
::    OTHER   error   - exit code is from NodeJS' index.js script.
::--------------------------------------------------------------------------------------


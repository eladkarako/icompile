@echo off
chcp 65001 2>nul >nul

::I can't include an exe directly in the project...
copy /b /y ".\set_time\set_time._exe_" ".\set_time\set_time.exe" 1>nul 2>nul


set "EXIT_CODE=111"
set "NODE="
for /f "tokens=*" %%a in ('call %~sdp0get_node.cmd 2^>nul') do ( set "NODE=%%a"  )
if ["%ErrorLevel%"] NEQ ["0"] ( goto END ) 
if ["%NODE%"] EQU [""]        ( goto END )

::run NodeJS with path-to- '_builder.js', and all the command-line-arguments passed to '_builder.cmd' .
call "%NODE%" "%~sdp0_builder.js" %* 
set "EXIT_CODE=%ErrorLevel%"

:END
pause
exit /b %EXIT_CODE%

::--------------------------------------------------------------------------------------
::  Exit codes
::    0       success - exit-code is from NodeJS' _builder.js script.
::    111     error   - no node.exe found (NodeJS _builder.js hasn't started yet).
::    OTHER   error   - exit code is from NodeJS' _builder.js script.
::--------------------------------------------------------------------------------------


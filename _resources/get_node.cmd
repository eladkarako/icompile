@echo off
chcp 65001 2>nul >nul


::pre-cleanup (solves repeating-override problem).
set "EXIT_CODE=0"
set "NODE="


::---------------------------------local (same folder) node.exe
set "NODE=%~sdp0node.exe"
echo [INFO] looking for node.exe locally in [%~dp0] .                          1>&2

if exist "%NODE%" ( 
  echo [INFO] success - node.exe found locally in [%~dp0] .                   1>&2
  goto SUCCESS_FOUNDNODE 
) 

echo [INFO] node.exe NOT found locally in [%~dp0] .                           1>&2
echo [INFO] looking for node.exe in the PATH system environment-variable...   1>&2

::---------------------------------in system PATH (first result)
for /f "tokens=*" %%a in ('where node.exe 2^>nul') do ( set "NODE=%%a"           )
if ["%ErrorLevel%"] NEQ ["0"]                         ( goto ERROR_NONODE        )
if ["%NODE%"] EQU [""]                                ( goto ERROR_NONODE        )
for /f %%a in ("%NODE%")                           do ( set "NODE=%%~fsa"        )
if not exist "%NODE%"                                 ( goto ERROR_NONODE        )

echo [INFO] success - node.exe found in PATH environment-variable             1>&2
goto SUCCESS_FOUNDNODE


:SUCCESS_FOUNDNODE
  set "VERSION="
  for /f "tokens=*" %%a in ('%NODE% -v 2^>nul')      do ( set "VERSION=%%a"        )
  if ["%ErrorLevel%"] EQU ["0"] ( 
    echo [INFO] the node.exe version found is: %VERSION%              1>&2
  )

  set "EXIT_CODE=0"
  echo. 1>&2
  echo [INFO] --------------------- [standard-output start]         1>&2
  echo %NODE%
  echo [INFO] --------------------- [standard-output end]         1>&2
  echo. 1>&2
  echo [INFO] program ended-successfully.                           1>&2
  goto END

:ERROR_NONODE
  set "EXIT_CODE=1"
  echo [ERROR] node.exe - can not find it.                          1>&2
  echo download https://nodejs.org/dist/v10.16.3/win-x86/node.exe   1>&2
  echo and place it in this folder,                                 1>&2
  echo or add to the 'PATH' environment-variable the location of    1>&2
  echo a NodeJS installation folder (where node.exe exists).        1>&2
  echo.
  echo [INFO] program ended with an ERROR.                          1>&2
  goto END


:END
  echo [INFO] exit code: [%EXIT_CODE%]. 1>&2
  exit /b %EXIT_CODE%


::--------------------------------------------------------------------------------------
::  Exit codes
::    0       success
::    1       error, no node.exe found (not locally, not through system's-PATH)
::--------------------------------------------------------------------------------------


@echo off
::force UTF-8 support
chcp 65001

if "%1"=="" (
  goto START_STANDARD
) else (
  goto START_IN_FOLDER
)


:START_STANDARD
  call C:\cygwin\bin\mintty.exe -i /Cygwin-Terminal.ico -
  goto EXIT
  

:START_IN_FOLDER
  rem  remove [\'\"] from first arg
  set CURRENT=%~1
  rem  backward2forward slash
  set CURRENT=%CURRENT:\=/%
  rem  remove ":" after the drive letter
  set CURRENT=%CURRENT::/=/%
  rem  adds prefix (used in cygwin as dummy drive-mounts)
  set CURRENT=/cygdrive/%CURRENT%
  rem  ------------------------------------------------------------
  call C:\cygwin\bin\mintty.exe -i /Cygwin-Terminal.ico c:\cygwin\bin\bash.exe -l -c "cd \"%CURRENT%\" ; exec bash" -
  goto EXIT


:EXIT

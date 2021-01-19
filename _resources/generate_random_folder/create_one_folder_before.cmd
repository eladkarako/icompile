@echo off
chcp 65001 2>nul >nul

::fully qualified path of one-folder up the folder-tree.
set "BASE=%~dp0.."
for /f %%a in ("%BASE%") do ( set "BASE=%%~fa" )

set "ERROR_LEVEL=0"

call "%~dp0index.cmd" "%BASE%"

set "ERROR_LEVEL=%ErrorLevel%"

exit /b %ERROR_LEVEL%
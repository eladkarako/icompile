@echo off
chcp 65001 2>nul >nul

set "ERROR_LEVEL=0"

call "node.exe" "%~sdp0index.js" "%~1"

set "ERROR_LEVEL=%ErrorLevel%"

pause

exit /b %ERROR_LEVEL%

<pre>set sUserAgent="Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1456.0 Safari/537.36"
set sURL=http://closure-linter.googlecode.com/files/closure_linter-latest.tar.gz
set sDownloadfile=closure_linter-latest.tar.gz

::rename existing to old_*
if exist %sDownloadfile% (
    ren %sDownloadfile% old_%sDownloadfile% &gt;nul
)

::download new version
.\\_res\\wget.exe --continue --server-response --directory-prefix=. --user-agent=%sUserAgent% %sURL%

::extract
if exist %sDownloadfile% (
    ::extract archive  -- x=eXtract, z=filter through gZip, v=be Verbose(show activity), f=filename.
   .\\_res\\tar xzvf %sDownloadfile%

   ::remove archive file
   del /f /q %sDownloadfile% &gt;nul
)

pause</pre>
You can download the entire script with resources (wget to download and tar to extract the "closure_linter-latest.tar.gz" file into a folder (plain easy tar xzvf closure_linter-latest.tar.gz where x=eXtract, z=filter through gZip, v=be Verbose(show activity), f=filename).

<a href="https://github.com/eladkarako/icompile/releases/download/latest/latest_linter_with_wget_and_tar.rar"></a>

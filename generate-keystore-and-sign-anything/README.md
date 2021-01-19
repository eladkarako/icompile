drag & drop any amount of files,
any mix of zip, jar and apk files.
<!--more-->

for each file in the list of files
you'll get a new file with the suffix "_signed" (and the same extension)
in the same place the original-file was.

generating keystore is a one-time thing,
but here is a batch (not drag&drop, simply run),
to create a fresh keystore, in-case you need to.

Signing algorithm is the optimal for
compatibility, so <em>explicit</em> RSA and SHA1,
it will work even if you have Java7/8/9..+.

<code>generate_keystore.cmd</code>
<pre>
@echo off

call keytool.exe  -genkeypair                                     ^
                  -alias       "alias_name"                       ^
                  -keyalg      "RSA"                              ^
                  -keysize     "2048"                             ^
                  -sigalg      "SHA1withRSA"                      ^
                  -validity    "10000"                            ^
                  -keypass     "111111"                           ^
                  -keystore    "foo.keystore"                     ^
                  -storepass   "111111"                           ^
                  -dname       "CN=*, OU=*, O=*, L=*, S=*, C=*"   ^
                  -v

pause
</pre>

<code>sign.cmd</code>
<pre>
@echo off

:LOOP
::has argument ?
if ["%~1"]==[""] (
  echo.
  echo done.
  goto END;
)
::argument exist ?
if not exist %~s1 (
  echo not exist
  goto NEXT;
)
::file exist ?
echo exist
if exist %~s1\\NUL (
  echo is a directory
  goto NEXT;
)
::OK
echo is a file
echo.

set FILE_SOURCE="%~1"
set FILE_TARGET="%~d1%~p1%~n1_signed%~x1"
copy /y %FILE_SOURCE% %FILE_TARGET% >nul

call jarsigner  -keystore     "foo.keystore"     ^
                -storepass    "111111"           ^
                -keypass      "111111"           ^
                -digestalg    "SHA1"             ^
                -sigalg       "SHA1withRSA"      ^
                -verbose:all                     ^
                -tsa          "http://sha1timestamp.ws.symantec.com/sha1/timestamp" ^
                -strict                          ^
                %FILE_TARGET%                    ^
                alias_name

echo.
echo %FILE_SOURCE%
echo -^&gt; %FILE_TARGET%
echo.
echo ------------------------------------
echo.

:NEXT
shift
goto LOOP

:END
pause

</pre>

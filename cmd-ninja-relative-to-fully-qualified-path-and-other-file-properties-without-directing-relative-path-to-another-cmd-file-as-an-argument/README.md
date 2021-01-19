Given the following directory-tree
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_cmd_file_path_properties_short_relative_file_name_directory_folder_without_sending_to_another_cmd_file_as_argument_args.jpg" alt="icompile.eladkarako.com_cmd_file_path_properties_short_relative_file_name_directory_folder_without_sending_to_another_cmd_file_as_argument_args" width="1053" height="424" class="alignnone size-full wp-image-4170" />

I want to get some information on apktool_2.0.2.jar
for example fully-qualified short (old dos 8.3 format that is compatible with old Java argument'ing) path,

here is a snippet containing it,
this '_' prefix is advisable, the double '%' is to escape the loop's variable, the '~' is to strip any \\' \\" wrapping chars around the path (best practice, always use it), the reason '_drive' phrase has (also) 's' in it is to make the result more letter-case consistent (the 8.3 format uses Upper-Case while if you'll run CMD console and browse or change-dir using a Lower-Case drive letter it will be embodied in the result).

<pre>
@echo off
set relative=.\\apktool_2.0.2.jar

for /f %%a in ("%relative%")do (set "_full=%%~fa"     )
for /f %%a in ("%relative%")do (set "_full83=%%~fsa"  )
for /f %%a in ("%relative%")do (set "_drive=%%~dsa"   )
for /f %%a in ("%relative%")do (set "_path=%%~pa"     )
for /f %%a in ("%relative%")do (set "_path83=%%~psa"  )
for /f %%a in ("%relative%")do (set "_name=%%~na"     )
for /f %%a in ("%relative%")do (set "_name83=%%~nsa"  )
for /f %%a in ("%relative%")do (set "_ext=%%~xa"      )
for /f %%a in ("%relative%")do (set "_ext83=%%~xsa"   )
for /f %%a in ("%relative%")do (set "_att=%%~aa"      )
for /f %%a in ("%relative%")do (set "_time=%%~ta"     )
for /f %%a in ("%relative%")do (set "_size=%%~za"     )

echo %_full%
echo %_full83%
echo %_drive%
echo %_path%
echo %_path83%
echo %_name%
echo %_name83%
echo %_ext%
echo %_ext83%
echo %_att%
echo %_time%
echo %_size%

::------------------------------------------------------------::
::  relative  < ->  .\\apktool_2.0.2.jar                        ::
::------------------------------------------------------------::
::  _full     < ->  D:\\DOS\\android\\bin\\apktool_2.0.2.jar       ::
::  _full83   < ->  D:\\DOS\\android\\bin\\APKTOO~1.JAR            ::
::  _drive    < ->  D:                                         ::
::  _path     < ->  \\DOS\\android\\bin\\                          ::
::  _path83   < ->  \\DOS\\android\\bin\\                          ::
::  _name     < ->  apktool_2.0.2                              ::
::  _name83   < ->  APKTOO~1                                   ::
::  _ext      < ->  .jar                                       ::
::  _ext83    < ->  .JAR                                       ::
::  _att      < ->  --a------                                  ::
::  _time     < ->  10/14/2015 02:06 PM                        ::
::  _size     < ->  6329931                                    ::
::------------------------------------------------------------::
</pre>
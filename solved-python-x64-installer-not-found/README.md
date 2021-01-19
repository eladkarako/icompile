there are two things can be done:

1. find a suitable x64 compiled version of the package from <a href="http://www.lfd.uci.edu/~gohlke/pythonlibs/">http://www.lfd.uci.edu/~gohlke/pythonlibs/</a>

2. execute the following reg file (for 2.7 version of python x64 only)

&nbsp;

<pre>
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Python]

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Python\\PythonCore]

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Python\\PythonCore\\2.7]

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Python\\PythonCore\\2.7\\Help]

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Python\\PythonCore\\2.7\\Help\\Main Python Documentation]
@="C:\\\\Python27\\\\Doc\\\\python273.chm"

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Python\\PythonCore\\2.7\\InstallPath]
@="C:\\\\Python27\\\\"

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Python\\PythonCore\\2.7\\InstallPath\\InstallGroup]
@="Python 2.7"

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Python\\PythonCore\\2.7\\Modules]

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Python\\PythonCore\\2.7\\PythonPath]
@="C:\\\\Python27\\\\Lib;C:\\\\Python27\\\\DLLs;C:\\\\Python27\\\\Lib\\\\lib-tk"

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Python]

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Python\\PythonCore]

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Python\\PythonCore\\2.7]

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Python\\PythonCore\\2.7\\Help]

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Python\\PythonCore\\2.7\\Help\\Main Python Documentation]
@="C:\\\\Python27\\\\Doc\\\\python273.chm"

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Python\\PythonCore\\2.7\\InstallPath]
@="C:\\\\Python27\\\\"

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Python\\PythonCore\\2.7\\InstallPath\\InstallGroup]
@="Python 2.7"

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Python\\PythonCore\\2.7\\Modules]

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Python\\PythonCore\\2.7\\PythonPath]
@="C:\\\\Python27\\\\Lib;C:\\\\Python27\\\\DLLs;C:\\\\Python27\\\\Lib\\\\lib-tk"
</pre>
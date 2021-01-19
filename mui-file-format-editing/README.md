MUI is a language resource for executables, changing the operating-system's language will try to use a suitable language resource, with EN fallback..

let us use <code>calc.exe</code>, with a dual-language generic windows 7, as our base example.

C:\\Windows\\System32\\calc.exe
C:\\Windows\\System32\\en-US\\calc.exe.mui
C:\\Windows\\System32\\he-IL\\calc.exe.mui

C:\\Windows\\SysWOW64\\calc.exe
C:\\Windows\\SysWOW64\\en-US\\calc.exe.mui
C:\\Windows\\SysWOW64\\he-IL\\calc.exe.mui

MUI files in general (for example the <code>calc.exe.mui</code> from <code>system32\\he-IL</code> <code>SysWOW64\\he-IL</code>or ) are a 32 bit DLL file with 0000 Entry Point it means they are resource-only, with no code, also they are not packed or compressed in any way..

<img src="https://icompile.eladkarako.com/_uploads/2015/10/icompile.eladkarako.com__mui_files11.jpg" alt="icompile.eladkarako.com__mui_files1" width="979" height="382" class="aligncenter size-full wp-image-3580" />

windows 7 linker for those are in most cases c++ version 9.0, with no overlay (SubSystem: Windows GUI)

essentially you can copy calc.exe to a custom folder, and edit (for education purposes the resources-table using a plain easy <a href="http://www.angusj.com/resourcehacker/" target="_blank">resource editor (free)</a>)

<img src="https://icompile.eladkarako.com/_uploads/2015/10/icompile.eladkarako.com__mui_files4.jpg" alt="icompile.eladkarako.com__mui_files4" width="681" height="461" class="aligncenter size-full wp-image-3584" />

fonts and font-faces/types are not changeable through window-handle-hooking, and nor the dialog in the "classic manner" types and sizes are written in the string-table part.. yes.. weird..

<img src="https://icompile.eladkarako.com/_uploads/2015/10/icompile.eladkarako.com__mui_files3.jpg" alt="icompile.eladkarako.com__mui_files3" width="511" height="501" class="aligncenter size-full wp-image-3581" />

<img src="https://icompile.eladkarako.com/_uploads/2015/10/icompile.eladkarako.com__mui_files2.jpg" alt="icompile.eladkarako.com__mui_files2" width="650" height="489" class="aligncenter size-full wp-image-3582" />


by the way 1037 is hebrew language code (1033 is english language code..)

<em>don't edit core-files keep their md5 unmodified it is important,
and don't distribute stuff you haven't created yourself :)</em>
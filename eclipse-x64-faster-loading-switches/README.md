make eclipse to load and preform much faster,

add this after -vmargs in the eclipse.ini
-d64
-Dsun.java2d.opengl=true

<a href="https://icompile.eladkarako.com/_uploads/2012/02/2012-02-02_232409.jpg"><img src="https://icompile.eladkarako.com/_uploads/2012/02/2012-02-02_232409.jpg" alt="" title="2012-02-02_232409" width="371" height="112" class="alignnone size-full wp-image-472" /></a>

it is for x64 available CPU only,

the first on is a very documented switch that helps java see we want to use the x64 properties
and not the x86.
the second one uses an alternative graphics renderer for eclipse, making it use less memory to re-paint, elements in the eclipse window and tabs, maybe it will make eclipse a little uglier :)  
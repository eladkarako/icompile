<blockquote>
A Bit Overkill of verifying what version of EXE to use (x32/x64), with error handling.
I use `ie4uinit.exe -ClearIconCache || ie4uinit.exe -show` as an example for an execute that exist in both-folders.
This is just a dictionary code, you can make it more efficient by storing the files and paths using `SET`, and even skip the x32 check or put the x32 path in a variable and optinally overwrite it, then executing the file blindly.
P.s just f.y.i. - executing `ie4uinit` from either x32 or x64 does not really makes a difference (this is just an example..)
</blockquote>

The <code>%WINDIR%\\SysWOW64\\NUL</code> is a small trick to see if the path is a folder.

<a href="https://gist.github.com/eladkarako/a4627ae198cf69672dec871356b90ff2">https://gist.github.com/eladkarako/a4627ae198cf69672dec871356b90ff2</a>

<iframe type="text/html" charset="UTF-8" loading="eager" lazyload="off" importance="high" 
  src="https://icompile.eladkarako.com/_resources/embed_gist.html?gistuser=eladkarako&gistid=a4627ae198cf69672dec871356b90ff2&origin=https%3A%2F%2Ficompile.eladkarako.com" 
  referrerpolicy="no-referrer" sandbox="allow-same-origin allow-scripts allow-top-navigation" 
  seamless="false" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" 
  style="height:300px;"
></iframe>

<!--more-->
helps to identify machines

download motod maker from <a href="http://edeca.net/wp/programs/motd-maker/">http://edeca.net/wp/programs/motd-maker/</a>
or here (flat exe with dll files)
<a href="https://github.com/eladkarako/icompile/releases/download/latest/motod_maker.rar">https://github.com/eladkarako/icompile/releases/download/latest/motod_maker.rar</a>


use <a href=" http://www.network-science.de/ascii">http://www.network-science.de/ascii/</a> to generate title (use "DOOM" font)
copy&paste to the opened motodmaker program, set colors etc..
choose options, raw and reset, save to file, edit the file (notepad2 or notepad++) show non-printed chars. replace \\par with empty string, and line end to linux format add one more space on top and remove the / or \\ on end of file, add empty line at the end.
use putty:
run 
<pre>
sudo touch /etc/motd
</pre>

<pre>
sudo chown karako:karako /etc/motd
</pre>

use winscp and notepad2 or notepad++ as default editor,
and pass the content (not the not printable chars. are important..)


bring back default ownership..
<pre>
sudo chown root:root /etc/motd
</pre>


then simply ssh into it:
<img src="https://icompile.eladkarako.com/_uploads/2014/01/2014-01-01_114937.jpg" alt="2014-01-01_114937" width="400" height="174"/>

raw example
<pre>
[32m
                                                                      
 _____ _           _   _      ____                      _             
| ____| | __ _ ___| |_(_) ___/ ___|  ___  __ _ _ __ ___| |__      _   
|  _| | |/ _` / __| __| |/ __\\___ \\ / _ \\/ _` | '__/ __| '_ \\   _| |_ 
| |___| | (_| \\__ \\ |_| | (__ ___) |  __/ (_| | | | (__| | | | |_   _|
|_____|_|\\__,_|___/\\__|_|\\___|____/ \\___|\\__,_|_|  \\___|_| |_|   |_|  
                                                                      
 _  ___ _                                                             
| |/ (_) |__   __ _ _ __   __ _                                       
| ' /| | '_ \\ / _` | '_ \\ / _` |                                      
| . \\| | |_) | (_| | | | | (_| |                                      
|_|\\_\\_|_.__/ \\__,_|_| |_|\\__,_|                                      
                                                                      
                                [0m

</pre>
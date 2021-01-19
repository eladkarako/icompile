<em>Does This Looks Familiar?</em>

<img src="https://icompile.eladkarako.com/_uploads/2017/06/icompile.eladkarako.com_solved_linux_mint_and_debian_packages_problem.png" alt="" width="1065" height="306"/>

<!--more-->

You've probably followed instructions from:
<ul>
<li>
<a href="https://deb.debian.org/" target="_blank">https://deb.debian.org/</a>
<a href="https://backports.debian.org/Instructions/" target="_blank">https://backports.debian.org/Instructions/</a>
<img src="https://icompile.eladkarako.com/_uploads/2017/06/icompile.eladkarako.com_solved_linux_mint_and_debian_packages_intro_2.png" alt="" width="923" height="435"/>
</li>
<li>
Or even:
<img src="https://icompile.eladkarako.com/_uploads/2017/06/icompile.eladkarako.com_solved_linux_mint_and_debian_packages_intro_1.png" alt="" width="923" height="580"/>
</li>
</ul>

And, you've probably ran those lines:
<ul>
<li><code>su -</code></li>
<li><code>echo 'deb http://http.debian.net/debian wheezy-backports main' &gt; /etc/apt/sources.list.d/wheezy-backports-main.list</code></li>
</ul>

Here is a solution/workaround/magic-trick
to resolve this pesky little issue:

Run this, <em>(while still under <code>su</code>)</em>: <code>gedit /etc/apt/sources.list.d/wheezy-backports-main.list</code>
and <strong>replace the content with this one</strong>:
<pre>deb https://deb.debian.org/debian wheezy-backports main
deb https://deb.debian.org/debian stable main
deb https://deb.debian.org/debian-security stable/updates main</pre>

Save (of course), quit gedit,
and run this line<em>(while still under <code>su</code>)</em>: <code>aptitude install debian-archive-keyring</code>.

Finally run <em>(while still under <code>su</code>)</em>: <code>apt-get update</code>.

You'll see something like this:
<pre>
....
....
....
Get:14 https://deb.debian.org/debian wheezy-backports InRelease [319 B]        
Ign:15 https://deb.debian.org/debian stable InRelease
Get:16 https://deb.debian.org/debian-security stable/updates InRelease [326 B]
Get:17 https://deb.debian.org/debian wheezy-backports/main amd64 Packages [612 kB]
Get:18 https://deb.debian.org/debian wheezy-backports/main i386 Packages [611 kB]
Get:19 https://deb.debian.org/debian wheezy-backports/main Translation-en [380 kB]
Get:20 https://deb.debian.org/debian stable Release [307 B]                    
Get:21 https://deb.debian.org/debian-security stable/updates/main amd64 Packages [413 kB]
Get:22 https://deb.debian.org/debian-security stable/updates/main i386 Packages [413 kB]
Get:23 https://deb.debian.org/debian-security stable/updates/main Translation-en [217 kB]
Get:24 https://deb.debian.org/debian stable Release.gpg [311 B]                
Get:25 https://deb.debian.org/debian stable/main amd64 Packages [6,790 kB]     
Get:26 https://deb.debian.org/debian stable/main i386 Packages [6,793 kB]      
Get:27 https://deb.debian.org/debian stable/main Translation-en [4,583 kB]     
Fetched 21.3 MB in 2min 23s (148 kB/s)                                         
Reading package lists... Done
</pre>

<br/>

..And you're done.

:]

Enjoy!
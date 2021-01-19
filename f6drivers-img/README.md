<code>Hiren's BootCD</code>'s <code>menu.lst</code> includes the following part:

<pre>title Mini Windows Xp<span style='color:#0f69ff; '>\
</span>Run Antivirus and other windows programs
<span style='color:#696969; '># example password: test </span>
<span style='color:#696969; '># password --md5 $1$gNe0$KZPOE8wNbTNSKOzrajuoB0</span>
find --<span style='color:#bb7977; font-weight:bold; '>set</span>-root <span style='color:#40015a; '>/HBCD/XP/XP.BIN</span>
<span style='color:#696969; '>#map --mem /HBCD/XP/f6drivers.img (fd0)&amp;&amp;map --hook</span>
chainloader <span style='color:#40015a; '>/HBCD/XP/XP.BIN</span>
</pre>

The <code>f6drivers.img</code> line is marked out (the file does not actually exist),

You may download the <code>x86</code> drivers <sup>from: <a href="https://downloadcenter.intel.com/download/26361/Intel-Rapid-Storage-Technology-Intel-RST-RAID-Driver?product=55005" title="Intel Rapid Storage Technology (Intel RST) RAID Driver (v15.2.0.1020 10/20/2016)" target="_blank">#1</a> or <a href="https://downloadcenter.intel.com/download/18668/AHCI-F6-Floppy-Disk-Utility-for-AHCI" title="Intel: AHCI: F6 Floppy Disk Utility for AHCI (v9.5.0.1037 10/14/2009)" target="_blank">#2</a></sup>, <a href="http://www.winimage.com" target="_blank">WinImage</a> and just place the content in a new <code>.IMA</code> file, next- rename the extension from <code>.IMA</code> to <code>.IMG</code>.

Download a ready to use <code>.IMG</code> files:
<!--more-->
- (NEW) Intel Rapid Storage Technology (Intel RST) RAID Driver (v15.2.0.1020 10/20/2016)
- - <a download="x86__f6drivers.img" type="application/octet-stream" href="https://icompile.eladkarako.com/_uploads/2016/11/x86__f6drivers.img">x86</a>
- - <a download="x64__f6drivers.img" type="application/octet-stream" href="https://icompile.eladkarako.com/_uploads/2016/11/x64__f6drivers.img">x64</a>
- (OLD) AHCI: F6 Floppy Disk Utility for AHCI (v9.5.0.1037 10/14/2009)
- - <a download="x86__f6drivers_old.img" type="application/octet-stream" href="https://icompile.eladkarako.com/_uploads/2016/11/x86__f6drivers_old.img">x86</a>
- - <a download="x64__f6drivers_old.img" type="application/octet-stream" href="https://icompile.eladkarako.com/_uploads/2016/11/x64__f6drivers_old.img">x64</a>

What to choose?
Well- <code>Hiren's BootCD</code>'s "XP" is really a <a href="https://en.wikipedia.org/wiki/Windows_Recovery_Environment" target="_blank">WinPE</a>, which is based on a <code>x86</code> Windows-XP, tweaked to be loaded into the RAM,
so- you definitely need a <code>x86</code> version.

Either choose the new one or the old one.

<ul>
  <li>
What drivers the <a download="x86__f6drivers.img" type="application/octet-stream" href="https://icompile.eladkarako.com/_uploads/2016/11/x86__f6drivers.img">"new one"</a> includes?
<pre>
Intel Chipset SATA RAID Controller
Intel(R) 6th Generation Core Processor Family Platform I/O SATA AHCI Controller
Intel(R) 100 Series/C230 Chipset Family SATA AHCI Controller
Intel(R) 100 Series/C230 Chipset Family SATA AHCI Controller
Intel(R) 200 Series Chipset Family SATA AHCI Controller
</pre>
  </li>
  <li>
What drivers the <a download="x86__f6drivers_old.img" type="application/octet-stream" href="https://icompile.eladkarako.com/_uploads/2016/11/x86__f6drivers_old.img">"old one"</a> includes?
<pre>
Intel Rapid Storage Technology Driver
Intel AHCI Controller
Intel(R) ESB2 SATA AHCI Controller
Intel(R) ICH7R/DH SATA AHCI Controller
Intel(R) ICH7M/MDH SATA AHCI Controller
Intel(R) ICH8R/DH/DO SATA AHCI Controller
Intel(R) ICH8M-E/M SATA AHCI Controller
Intel(R) ICH9R/DO/DH SATA AHCI Controller
Intel(R) ICH9M-E/M SATA AHCI Controller
Intel(R) ICH10D/DO SATA AHCI Controller
Intel(R) ICH10R SATA AHCI Controller
Intel(R) 5 Series 4 Port SATA AHCI Controller
Intel(R) 5 Series 6 Port SATA AHCI Controller
Intel(R) 5 Series/3400 Series SATA AHCI Controller
Intel Rapid Storage Technology Driver
Intel RAID Controller
Intel(R) ESB2 SATA RAID Controller
Intel(R) ICH7R/DH SATA RAID Controller
Intel(R) ICH7MDH SATA RAID Controller
Intel(R) ICH8R/ICH9R/ICH10R/DO/5 Series/3400 Series SATA RAID Controller
Intel(R) ICH8M-E/ICH9M-E/5 Series SATA RAID Controller
</pre>
  </li>
</ul>

<hr/>

How to use BOTH of the <code>.IMG</code> files?
<ol>
<li>
download both the <a download="x86__f6drivers.img" type="application/octet-stream" href="https://icompile.eladkarako.com/_uploads/2016/11/x86__f6drivers.img">new</a> and the <a download="x86__f6drivers_old.img" type="application/octet-stream" href="https://icompile.eladkarako.com/_uploads/2016/11/x86__f6drivers_old.img">old</a> <code>.IMG</code> files to your desktop.
</li>
<li>
rename <code>x86__f6drivers.img</code> to <code>f6drvnew.img</code>, 
rename <code>x86__f6drivers_old.img</code> to <code>f6drvold.img</code> (proper "8.3" naming).
</li>
<li>
move the files under <code>HBCD\\XP\\</code> (same folder having <code>XP.BIN</code> and <code>XP.wim</code>)
</li>
<li>
Use Notepad2 or Notepad++ (not Windows'-Notepad!) to edit the <code>HBCD\\menu.lst</code> file,
and..

replace:
<pre>title Mini Windows Xp<span style='color:#0f69ff; '>\
</span>Run Antivirus and other windows programs
<span style='color:#696969; '># example password: test </span>
<span style='color:#696969; '># password --md5 $1$gNe0$KZPOE8wNbTNSKOzrajuoB0</span>
find --<span style='color:#bb7977; font-weight:bold; '>set</span>-root <span style='color:#40015a; '>/HBCD/XP/XP.BIN</span>
<span style='color:#696969; '>#map --mem /HBCD/XP/f6drivers.img (fd0)&amp;&amp;map --hook</span>
chainloader <span style='color:#40015a; '>/HBCD/XP/XP.BIN</span>
</pre>

with:
<pre>title Mini Windows Xp<span style='color:#0f69ff; '>\
</span>Run Antivirus and other windows programs <span style='color:#800080; '>(</span>NO SATA<span style='color:#800080; '>)</span>
<span style='color:#696969; '># example password: test </span>
<span style='color:#696969; '># password --md5 $1$gNe0$KZPOE8wNbTNSKOzrajuoB0</span>
find --<span style='color:#bb7977; font-weight:bold; '>set</span>-root <span style='color:#40015a; '>/HBCD/XP/XP.BIN</span>
<span style='color:#696969; '>#map --mem /HBCD/XP/f6drivers.img (fd0)&amp;&amp;map --hook</span>
chainloader <span style='color:#40015a; '>/HBCD/XP/XP.BIN</span>

title Mini Windows Xp<span style='color:#0f69ff; '>\
</span>Run Antivirus and other windows programs <span style='color:#800080; '>(</span>SATA Drivers - NEW<span style='color:#800080; '>)</span>
<span style='color:#696969; '># example password: test </span>
<span style='color:#696969; '># password --md5 $1$gNe0$KZPOE8wNbTNSKOzrajuoB0</span>
find --<span style='color:#bb7977; font-weight:bold; '>set</span>-root <span style='color:#40015a; '>/HBCD/XP/XP.BIN</span>
map --mem <span style='color:#40015a; '>/HBCD/XP/f6drvnew.img</span> <span style='color:#800080; '>(</span>fd0<span style='color:#800080; '>)</span><span style='color:#800080; '>&amp;&amp;</span>map --hook
chainloader <span style='color:#40015a; '>/HBCD/XP/XP.BIN</span>

title Mini Windows Xp<span style='color:#0f69ff; '>\
</span>Run Antivirus and other windows programs <span style='color:#800080; '>(</span>SATA Drivers - OLD<span style='color:#800080; '>)</span>
<span style='color:#696969; '># example password: test </span>
<span style='color:#696969; '># password --md5 $1$gNe0$KZPOE8wNbTNSKOzrajuoB0</span>
find --<span style='color:#bb7977; font-weight:bold; '>set</span>-root <span style='color:#40015a; '>/HBCD/XP/XP.BIN</span>
map --mem <span style='color:#40015a; '>/HBCD/XP/f6drvold.img</span> <span style='color:#800080; '>(</span>fd0<span style='color:#800080; '>)</span><span style='color:#800080; '>&amp;&amp;</span>map --hook
chainloader <span style='color:#40015a; '>/HBCD/XP/XP.BIN</span>
</pre>

(Save the file.. done)
</li>
<li>
You're basically done, but your BootCD will only work for Intel-Chipsets
So feel free to enhance it with drivers from other vendors(VIA, nVidia, etc...)
</li>
</ol>

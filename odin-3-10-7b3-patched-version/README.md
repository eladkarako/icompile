<a href="https://icompile.eladkarako.com/_uploads/2015/12/256.png" rel="attachment wp-att-3970"><img src="https://icompile.eladkarako.com/_uploads/2015/12/256.png" alt="256" rem-width="256" rem-height="256" class="alignnone size-full wp-image-3970" /></a>

<a href="https://icompile.eladkarako.com/_uploads/2015/12/icompile.eladkarako.com_odin_logo_header.png" rel="attachment wp-att-3969"><img src="https://icompile.eladkarako.com/_uploads/2015/12/icompile.eladkarako.com_odin_logo_header.png" alt="icompile.eladkarako.com_odin_logo_header" rem-width="856" rem-height="72" class="alignnone size-full wp-image-3969" /></a>

I've patched some things up in the latest <code>ODIN 3.10.7</code> mostly cosmetic and linguistics,
adding description to the recently modified button-names clearing up the ambiguity once and for all,
also recompiled some of the handlers in pure ASM to find the PORT faster,
and fixed few of memory leaks during "hot-events" - USB connections and such..
<!--more-->


<a href="https://icompile.eladkarako.com/_uploads/2015/12/2015-12-26_105922.jpg" rel="attachment wp-att-3971"><img src="https://icompile.eladkarako.com/_uploads/2015/12/2015-12-26_105922.jpg" alt="2015-12-26_105922" width="905" height="670" class="alignnone size-full wp-image-3971" /></a>

DOWNLOAD: 

<a download="Odin3_v3.10.7b3.zip" href="https://icompile.eladkarako.com/_uploads/2015/12/Odin3_v3.10.7b3.zip"rel="">Odin3_v3.10.7b3.zip</a> (796KB)
<a download="Odin3_v3.10.7b3.rar" href="https://icompile.eladkarako.com/_uploads/2015/12/Odin3_v3.10.7b3.rar"rel="">Odin3_v3.10.7b3.rar</a> (805KB)

MIRROS:
<a mirror href="http://www71.zippyshare.com/v/8C6hdPHU/file.html" target="_blank">http://www71.zippyshare.com/v/8C6hdPHU/file.html</a>
<a mirror href="http://ge.tt/5c4gOMU2" target="_blank">http://ge.tt/5c4gOMU2</a>
<a mirror href="http://rghost.net/8wPx8nYRB" target="_blank">http://rghost.net/8wPx8nYRB</a>
<a mirror href="http://www.sendmyway.com/govnmkty9rrk" target="_blank">http://www.sendmyway.com/govnmkty9rrk</a>
<a mirror href="http://hugefiles.net/u7d6zgimllfo" target="_blank">http://hugefiles.net/u7d6zgimllfo</a>
<a mirror href="http://www.solidfiles.com/d/5fa5bba42c/" target="_blank">http://www.solidfiles.com/d/5fa5bba42c/</a>
<a mirror href="http://tusfiles.net/avyafwvzbnul" target="_blank">http://tusfiles.net/avyafwvzbnul</a>
<a mirror href="http://www.datafilehost.com/d/637aec6c" target="_blank">http://www.datafilehost.com/d/637aec6c</a>




Odin3.ini
<pre>
[Option]
Title=OdinDownload.com
FactoryResetTime=1
OptionEnable=1
SLP=0
AuthorityKey=pw
RtnForSprint=1

[APOption]
RePartition=0
AutoReboot=1
FResetTime=1
FlashLock=0
TFlash=0
NandErase=0

[CPOption]
PhoneEFSClear=0
PhoneBootUpdate=0k

[UIOption]
LED=0

[ButtonOption]
Bootloader=1
PDA=1
Phone=1
CSC=1
UMS/PATCH=0
USERDATA=0

[D300Jig]
;[0] not use / COM [1~2] usable
D300COM=0
;[0] not use / [1] use
MicroCable=0

[PortArrange]
;SAMSUNG Mobile Modem port (for Download mode)
DPort0=
DPort1= 
DPort2=
DPort3= 
DPort4= 
DPort5=
DPort6=
DPort7=
;SAMSUNG Android USB Modem port (for Samsung Kies)
SPort0=
SPort1=
SPort2=
SPort3=
SPort4=
SPort5=
SPort6=
SPort7=
</pre>

<hr />

Vector graphics - logo && stuff..
<pre>

<a href="https://icompile.eladkarako.com/_uploads/2015/12/odin.svg" rel="attachment wp-att-4050">SVG</a>
<a href="https://icompile.eladkarako.com/_uploads/2015/12/odin.dxf"rel="">DXF</a>
<a href="https://icompile.eladkarako.com/_uploads/2015/12/odin.ai"rel="">AI</a>
<a href="https://icompile.eladkarako.com/_uploads/2015/12/odin__256.png" rel="attachment wp-att-4057"><img src="https://icompile.eladkarako.com/_uploads/2015/12/odin__256.png" alt="odin__256" rem-width="256" rem-height="256" class="alignnone size-full wp-image-4057" />256.png</a>
<a href="https://icompile.eladkarako.com/_uploads/2015/12/odin__128.png" rel="attachment wp-att-4056"><img src="https://icompile.eladkarako.com/_uploads/2015/12/odin__128.png" alt="odin__128" rem-width="128" rem-height="128" class="alignnone size-full wp-image-4056" />128.png</a>
<a href="https://icompile.eladkarako.com/_uploads/2015/12/odin__96.png" rel="attachment wp-att-4055"><img src="https://icompile.eladkarako.com/_uploads/2015/12/odin__96.png" alt="odin__96" rem-width="96" rem-height="96" class="alignnone size-full wp-image-4055" />96.png</a>
<a href="https://icompile.eladkarako.com/_uploads/2015/12/odin__72.png" rel="attachment wp-att-4054"><img src="https://icompile.eladkarako.com/_uploads/2015/12/odin__72.png" alt="odin__72" rem-width="72" rem-height="72" class="alignnone size-full wp-image-4054" />72.png</a>
<a href="https://icompile.eladkarako.com/_uploads/2015/12/odin__48.png" rel="attachment wp-att-4053"><img src="https://icompile.eladkarako.com/_uploads/2015/12/odin__48.png" alt="odin__48" rem-width="48" rem-height="48" class="alignnone size-full wp-image-4053" />48.png</a>
<a href="https://icompile.eladkarako.com/_uploads/2015/12/odin__32.png" rel="attachment wp-att-4052"><img src="https://icompile.eladkarako.com/_uploads/2015/12/odin__32.png" alt="odin__32" rem-width="32" rem-height="32" class="alignnone size-full wp-image-4052" />32.png</a>
<a href="https://icompile.eladkarako.com/_uploads/2015/12/odin__16.png" rel="attachment wp-att-4051"><img src="https://icompile.eladkarako.com/_uploads/2015/12/odin__16.png" alt="odin__16" rem-width="16" rem-height="16" class="alignnone size-full wp-image-4051" />16.png</a>
</pre>


Looking for all of the official Samsung-Odin versions?
I've collected the safe, official versions, into the following page at GitHub:
<a href="https://eladkarako.github.io/odin" target="_blank">https://eladkarako.github.io/odin</a>
or <a href="https://www.github.com/eladkarako/odin/" target="_blank">https://www.github.com/eladkarako/odin/</a>, safe and quick download, no ads or popups, antivirus report supplied too :]

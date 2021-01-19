<img style="border:none;" src="https://icompile.eladkarako.com/_uploads/2014/12/2015-01-02_150831.png" alt="2015-01-02_150831" width="420" height="276" class="alignright size-full wp-image-2251" />
Quick solution on registering the components needed,
(Using Windows 7 x64, but should work on other machines too...)
 
<!--more-->

<pre>
C:
CD C:\\Windows\\SysWOW64
regsvr32 MSCOMCTL.OCX
regtlib msdatsrc.tlb


</pre>
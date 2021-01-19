January, 01 2011. a well formatted <a href="http://en.wikipedia.org/wiki/Hosts_(file)">HOSTS file</a> with 178,055 malicious hosts blocked, size is about ~4.70MB.
<!--more-->
1. download and uncompress to a temporary folder. 

<a href="http://hotfile.com/dl/93540476/248879d/HOSTS_y2011_m01_d01.rar.html">http://hotfile.com/dl/93540476/248879d/HOSTS_y2011_m01_d01.rar.html</a>

mirrors:
<a href="http://depositfiles.com/files/tu5pomljg">http://depositfiles.com/files/tu5pomljg</a>
<a href="http://www.megaupload.com/?d=XO0P3LWI">http://www.megaupload.com/?d=XO0P3LWI</a>
<a href="http://www.easy-share.com/1913444813/HOSTS_y2011_m01_d01.rar">http://www.easy-share.com/1913444813/HOSTS_y2011_m01_d01.rar</a>
<a href="http://www.fileserve.com/file/zTbwvxs">http://www.fileserve.com/file/zTbwvxs</a>
<a href="http://www.filesonic.com/file/50866167/HOSTS_y2011_m01_d01.rar">http://www.filesonic.com/file/50866167/HOSTS_y2011_m01_d01.rar</a>
<a href="http://www.megashare.com/2875305">http://www.megashare.com/2875305</a>
<a href="http://rapidshare.com/files/440315796/HOSTS_y2011_m01_d01.rar">http://rapidshare.com/files/440315796/HOSTS_y2011_m01_d01.rar</a>
<a href="http://www.filefactory.com/file/b4e8063/n/HOSTS_y2011_m01_d01_rar">http://www.filefactory.com/file/b4e8063/n/HOSTS_y2011_m01_d01_rar</a>
<a href="http://netload.in/dateiRJUdgR7BJz/HOSTS_y2011_m01_d01.rar.htm">http://netload.in/dateiRJUdgR7BJz/HOSTS_y2011_m01_d01.rar.htm</a>
<a href="http://www.mediafire.com/?4w9cixy0dbl04u1">http://www.mediafire.com/?4w9cixy0dbl04u1</a>

2. download <a href="http://www.flos-freeware.ch/notepad2.html">notepad2.0</a>.

3.disconnect from the internet, disable all network-adapters,
start->run-><strong>ipconfig /flushdns</strong> .

4. start->run-><strong>services.msc</strong> .
locate the line named <strong>DNS Service</strong>, <strong>stop</strong> the service and set it to <strong>disabled</strong>.

5. use Notepad2 to open the local HOSTS file (located under "C:\\WINDOWS\\system32\\drivers\\etc\\hosts").
make sure the HOSTS file is writable.

6. use Notepad2 to open the <strong>HOSTS_y2011_m01_d01.txt</strong> copy its content and post it to the bottom of the local HOSTS file.

7. save the local HOSTS file and make it read-only.

8. done, all hosts are now blocked. re-enable all network-adapters, reconnect to the internet.

9. note: the DNS Server of your ISP should be automatically recognized, if its not, you can use Google's free ones: 
<code>8.8.8.8
8.8.4.4</code>
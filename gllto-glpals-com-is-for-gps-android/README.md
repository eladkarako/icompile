<img src="https://icompile.eladkarako.com/_uploads/gps.jpg" />


You might have notice connections from <code>gllto.glpals.com</code> from your mobile device and wondered what is it,  
well its related to AGPS (Assist GPS) which are lists of satalites locations,  
along with mobile-location (your SIM allows an estimate location by relative closeness to a mobile-antenna),  
that can help the GPS zero-in ("GPS fix") on the current accurate-location.

Note:  
GPS-related configuration-files, are spread across the file-system,  
most Samsung devices will have:  
<code>/system/etc/gps.conf</code>:  
<pre>
NTP_SERVER=north-america.pool.ntp.org
XTRA_SERVER_1=http://gllto1.glpals.com/4day/v3/latest/lto2.dat
XTRA_SERVER_2=http://gllto2.glpals.com/4day/v3/latest/lto2.dat
SUPL_HOST=supl.google.com
SUPL_PORT=7276
</pre>

and <code>/system/etc/gps.xml</code>:  
<pre>
&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;glgps xmlns="http://www.glpals.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.glpals.com/glconfig.xsd" &gt;
  &lt;!--HAL Confguration  --&gt;
  &lt;hal
       PortName="/dev/ttySAC1"
       BaudRate="921600"
       GpioNStdbyPath="/sys/class/sec/gps/GPS_PWR_EN/value"
       GpioDelayMs="250"
       NvStorageDir="/data/system/gps/"
       FactoryTestFilePath="/data/"

       LogDirectory="/storage/sdcard0/gps/broadcom/storage"

       WakeLock="geo"

       LPmode="false"
       CpColdStart="false"
       CpGuardTimeSec="1"

       SuplEnable="true"
       SuplUseApn="false"
       SuplTlsCertPath="/system/etc/gps.cer"
       SuplTlsEnable="false"
       SuplUT1Seconds="20"
       SuplUT2Seconds="20"
       SuplUT3Seconds="20"
       SuplVersion="1"

       LbsEnable="true"
       LbsServer="BCMLS2.glpals.com"
       HttpSyncLto="true"
       LtoDir="/data/system/gps/"

       IgnoreJniTime="true"
       AssertEnabled="false"
   /&gt;

  &lt;gll
       LogPriMask="LOG_INFO"
       LogFacMask="LOG_GLLIO | LOG_RAWDATA | LOG_DEVKF | LOG_GLLAPI | LOG_NMEA"
       FrqPlan="FRQ_PLAN_26MHZ_2PPM_26MHZ_300PPB"
       RfType="GL_RF_47521_BRCM_EXT_LNA"
       WarmStandbyTimeout1Seconds="10"
       WarmStandbyTimeout2Seconds="15"
  &gt;
  &lt;/gll&gt;

  &lt;gll_features
       EnableLowPowerPmm="true"
  /&gt;

&lt;/glgps&gt;
</pre>

<hr/>

Here is an example for another variation of <code>gps.xml</code>:  
<a href="https://android.googlesource.com/device/samsung/crespo4g/+/85fa55814b52f182504333d5512d68e29e7f2932/gps.xml">https://android.googlesource.com/device/samsung/crespo4g/+/85fa55814b52f182504333d5512d68e29e7f2932/gps.xml</a>  
and <code>gps.conf</code>:  
<a href="https://android.googlesource.com/device/samsung/crespo4g/+/85fa55814b52f182504333d5512d68e29e7f2932/gps.conf">https://android.googlesource.com/device/samsung/crespo4g/+/85fa55814b52f182504333d5512d68e29e7f2932/gps.conf</a>.

<hr/>

more files are available under <code>/data/gps/</code> or <code>/data/system/gps/</code>,  
including the downloaded <code>lto2.dat</code> (long term orbit data)

<hr/>

<a href="http://gllto.glpals.com/2day/glo/v2/latest/" title="http://gllto.glpals.com/2day/glo/v2/latest/" target="_blank">http://gllto.glpals.com/2day/glo/v2/latest/</a>
<a href="http://gllto.glpals.com/2day/latest/" title="http://gllto.glpals.com/2day/latest/" target="_blank">http://gllto.glpals.com/2day/latest/</a>
<a href="http://gllto.glpals.com/2day/v2/latest/" title="http://gllto.glpals.com/2day/v2/latest/" target="_blank">http://gllto.glpals.com/2day/v2/latest/</a>
<a href="http://gllto.glpals.com/2day/v3/latest/" title="http://gllto.glpals.com/2day/v3/latest/" target="_blank">http://gllto.glpals.com/2day/v3/latest/</a>
<a href="http://gllto.glpals.com/2day/v4/latest/" title="http://gllto.glpals.com/2day/v4/latest/" target="_blank">http://gllto.glpals.com/2day/v4/latest/</a>
<a href="http://gllto.glpals.com/4day/glo/v2/latest/" title="http://gllto.glpals.com/4day/glo/v2/latest/" target="_blank">http://gllto.glpals.com/4day/glo/v2/latest/</a>
<a href="http://gllto.glpals.com/4day/v3/latest/" title="http://gllto.glpals.com/4day/v3/latest/" target="_blank">http://gllto.glpals.com/4day/v3/latest/</a>
<a href="http://gllto.glpals.com/4day/v4/latest/" title="http://gllto.glpals.com/4day/v4/latest/" target="_blank">http://gllto.glpals.com/4day/v4/latest/</a>
<a href="http://gllto.glpals.com/7day/glo/v2/latest/" title="http://gllto.glpals.com/7day/glo/v2/latest/" target="_blank">http://gllto.glpals.com/7day/glo/v2/latest/</a>
<a href="http://gllto.glpals.com/7day/latest/" title="http://gllto.glpals.com/7day/latest/" target="_blank">http://gllto.glpals.com/7day/latest/</a>
<a href="http://gllto.glpals.com/7day/v2/latest/" title="http://gllto.glpals.com/7day/v2/latest/" target="_blank">http://gllto.glpals.com/7day/v2/latest/</a>
<a href="http://gllto.glpals.com/7day/v3/latest/" title="http://gllto.glpals.com/7day/v3/latest/" target="_blank">http://gllto.glpals.com/7day/v3/latest/</a>
<a href="http://gllto.glpals.com/7day/v4/latest/" title="http://gllto.glpals.com/7day/v4/latest/" target="_blank">http://gllto.glpals.com/7day/v4/latest/</a>

<hr/>

Those are variations of list of satalites available, known as AGPS.  
You will most likely notice those when you use a 3rd-party GPS manager app that has an option to clear/update AGPS,  
or if you pipe-the connections of your phone through a reverse-proxy/man-in-the-middle listener programs such as BURP-suite or Fiddler.  
The data file will be most likely located under <code>/data/gps/gldata.sto</code> or <code>/data/system/gps/gldata.sto</code>.  

<hr/>

Privacy:  

If you have any kind of system ad-block such as HOSTS lists or a proxy,  
you should find out if it blocks any of the domains used to download updates for the AGPS.  

You <strong>should not block</strong> those domains:  
<pre>
gllto.glpals.com
gllto1.glpals.com
gllto2.glpals.com
gllto3.glpals.com
bcmls.glpals.com
bcmls1.glpals.com
bcmls2.glpals.com
bcmls3.glpals.com
</pre>

You <strong>MAY block</strong> those domains:  
<pre>
supl.google.com
supl.nokia.com
lbs.geo.t-mobile.com
supl.vodafone.com
supl.three.com
</pre>

<hr/>

Possible fix when one of the domains is blocked and you are not sure if/what is blocking it,  
is to replace the domain-hostname with ONE of the resolved IP-addresses,  
you can search online for various online tools to resolve domain hostname to IP,  
or use <code>chrome://net-internals/#dns</code> on an older Chrome browser.  

for example <code>bcmls2.glpals.com</code> resolved to those IPs:  
<pre>
54.190.124.218
52.37.77.41
35.167.243.194
52.42.193.147
34.208.182.246
52.88.180.37
52.88.175.51
44.239.132.28

52.25.120.35
52.88.175.51
44.233.217.3
54.190.124.218
100.21.81.80
34.208.182.246
54.149.98.29
52.88.136.170
</pre>

You can try <a href="https://github.com/eladkarako/net-resolver">https://github.com/eladkarako/net-resolver</a> just put <code>bcmls2.glpals.com</code> in a text-file and pass it to the js script (<code>node index.js yourfile.txt</code> or drag&amp;drop over <code>index.cmd</code> if you are on Windows).  

<hr/>

In XDA-developers <a href="https://forum.xda-developers.com/showthread.php?t=1239713&page=76">https://forum.xda-developers.com/showthread.php?t=1239713&page=76</a> claim to allow a faster GPS-lock ("GPS-Fix") by replacing the content of  <code>/system/etc/gps.conf</code> with the following content (afterwards you should delete <code> /data/gps</code> or <code>/data/system/gps/</code> and reboot, then use any GPS test app from the store and update the AGPS):  
(for non-glonass devices)
<pre>
NTP_SERVER=in.pool.ntp.org
XTRA_SERVER_1=http://gllto.glpals.com/7day/v4/latest/lto2.dat
XTRA_SERVER_2=http://gllto.glpals.com/7day/v3/latest/lto2.dat
XTRA_SERVER_3=http://gllto.glpals.com/30day/v2/latest/lto2.dat
SUPL_HOST=supl.google.com
SUPL_PORT=7276
</pre>

(for glonass devices)
<pre>
NTP_SERVER=in.pool.ntp.org
XTRA_SERVER_1=http://gllto.glpals.com/7day/glo/v2/latest/lto2.dat
XTRA_SERVER_2=http://gllto.glpals.com/4day/glo/v2/latest/lto2.dat
XTRA_SERVER_3=http://gllto.glpals.com/2day/glo/v2/latest/lto2.dat
SUPL_HOST=supl.google.com
SUPL_PORT=7276
</pre>

<hr/>

I personally changed <code>gps.conf</code> to:  
<pre>
#------------------------------time servers
NTP_SERVER=time.google.com
NTP_SERVER=pool.ntp.org

#------------------------------long-term-orbit-data servers (glonass supported devices) - can change version in some cases if file isn't loading.
XTRA_SERVER_1=http://gllto.glpals.com/7day/glo/v2/latest/lto2.dat
XTRA_SERVER_2=http://gllto.glpals.com/4day/glo/v2/latest/lto2.dat
XTRA_SERVER_3=http://gllto.glpals.com/2day/glo/v2/latest/lto2.dat

#------------------------------long-term-orbit-data servers (old, non-glonass devices) - can change version in some cases if file isn't loading.
###XTRA_SERVER_1=http://gllto.glpals.com/7day/v2/latest/lto2.dat
###XTRA_SERVER_2=http://gllto.glpals.com/2day/v2/latest/lto2.dat
###XTRA_SERVER_3=http://gllto.glpals.com/30day/v2/latest/lto2.dat

#------------------------------server for initial location based on IP and data collected from previous/other devices.
SUPL_HOST=supl.google.com
SUPL_PORT=7275


#------------------------------master-switch for AGPS
DEFAULT_AGPS_ENABLE=TRUE

#------------------------------WiFi positioning. based on previous registration of devices location when connected to WiFi and location at supl.google.com (1=enable, 0=disable).
ENABLE_WIPER=1

#------------------------------initial very-generic location (ip-to-country and other estimations) based on information from supl.google.com (1=enable, 0=disable).
REPORT_POSITION_USE_SUPL_REFLOC=1

#------------------------------cell-tower reports as location (1=enable, 0=disable).
INTERMEDIATE_POS=1

#------------------------------limit what is accepted as location from cell-tower (accuracy-threshold). in meters (use larger values for faster "lock"). do not use zero.
ACCURACY_THRES=3000

#------------------------------this is mostly already set in gps.xml
# DEBUG LEVELS: 0 - none, 1 - Error, 2 - Warning, 3 - Info
# 4 - Debug, 5 - Verbose
###DEBUG_LEVEL =0


#---------------------------------------------------------
# set file permission to 644, root:root (0).
# set file EOL to windows (\r\n),
# set file encoding to ASCII (or UTF8, without BOM!)
# delete content of '/data/gps' or '/data/system/gps'
#---------------------------------------------------------
# edit build.prop
# make sure it has those props, with those values (change if needed):
#     ro.ril.gprsclass=12
#     persist.radio.apm_sim_not_pwdn=1
#     ro.com.google.locationfeatures=1
#     ro.com.google.networklocation=1
#---------------------------------------------------------
# reboot
# enable location with high-accuracy (with google), 
# and have SIM in the device if possible.
#---------------------------------------------------------


#####https://rootzwiki.com/topic/28989-the-end-all-be-all-guide-to-your-gps/
#####https://forum.xda-developers.com/showthread.php?t=1239713
#####https://forum.xda-developers.com/showthread.php?t=1239713&page=76
#####https://forum.xda-developers.com/showpost.php?p=45490978&postcount=751#post_message_45490978
</pre>

and <code>gps.xml</code> to:  
<pre>
&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;glgps xmlns="http://www.glpals.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.glpals.com/glconfig.xsd" &gt;
  &lt;!--HAL Confguration  --&gt;
  &lt;hal
       PortName="/dev/ttySAC1"
       BaudRate="921600"
       GpioNStdbyPath="/sys/class/sec/gps/GPS_PWR_EN/value"
       GpioDelayMs="250"
       NvStorageDir="/data/system/gps/"
       FactoryTestFilePath="/data/"

       LogDirectory="/storage/sdcard0/gps/broadcom/storage"

       WakeLock="geo"

       LPmode="false"
       CpColdStart="false"
       CpGuardTimeSec="1"
       ReAidingOnHotStart="true"
       SuplEnable="true"
       SuplUseApn="true"
       SuplTlsCertPath="/system/bin/gps.cer"
       SuplTlsEnable="false"
       SuplUT1Seconds="20"
       SuplUT2Seconds="20"
       SuplUT3Seconds="20"
       SuplVersion="1"

       LbsEnable="true"
       LbsServer="BCMLS2.glpals.com"
       HttpSyncLto="true"
       LbsCellEnable="true"
       LtoDir="/data/system/gps/"

       HulaSensorMask="0x1F"
       IgnoreJniTime="true"
       AssertEnabled="false"
   /&gt;

  &lt;gll
       LogPriMask="LOG_INFO"
       LogFacMask="LOG_GLLIO | LOG_RAWDATA | LOG_GLLAPI | LOG_NMEA"
       FrqPlan="FRQ_PLAN_26MHZ_2PPM_26MHZ_300PPB"
       RfType="GL_RF_47521_BRCM_EXT_LNA"
       WarmStandbyTimeout1Seconds="10"
       WarmStandbyTimeout2Seconds="15"
  &gt;
  &lt;/gll&gt;

  &lt;gll_features
       EnableLowPowerPmm="true"
  /&gt;

&lt;/glgps&gt;
</pre>

I've deleted the content of <code>/data/system/gps/</code>,  
made sure the <code>build.prop</code> file was not blocking network location of google location,  
and rebooted the device,  
after I've turned ON GPS on high accuracy, on cell-data, I've tried to clear and update AGPS,  
and checked <code>/data/system/gps/</code>,  
<code>gldata.sto</code> was there quite fast, but for <code>lto2.dat</code> it took a while.  

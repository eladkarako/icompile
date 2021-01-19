<pre>
<span style='color:#800000; font-weight:bold; '>echo off</span>
<span style='color:#509D52; '>::stuff you can modify.</span>
<span style='color:#509D52; '>::--------------------------------------------------------------------------------</span>
<span style='color:#509D52; '>::                          http|https</span>
<span style='color:#800000; font-weight:bold; '>set</span> PROTOCOL<span style='color:#808030; '>=</span>http
<span style='color:#509D52; '>::                          snapshots|continuous</span>
<span style='color:#800000; font-weight:bold; '>set</span> BRANCH<span style='color:#808030; '>=</span>snapshots
<span style='color:#509D52; '>::                          Android|Arm|Linux|LinuxGit|LinuxGit_x64|Linux_ARM_Cross-Compile|Linux_ChromiumOS|Linux_ChromiumOS_Full|Linux_x64|Mac|MacGit|Win|WinGit|Win_x64|chromium-full-linux-chromeos</span>
<span style='color:#800000; font-weight:bold; '>set</span> OS<span style='color:#808030; '>=</span>Win_x64
<span style='color:#509D52; '>::                          mini_installer.exe|REVISIONS|chrome-win32-syms.zip|chrome-win32.zip|pnacl.zip|content-shell.zip|gcapi.zip|metrics-metadata.zip|remoting-host.msi|remoting-me2me-host-win.zip|devtools_frontend.zip|chrome-linux.zip|changelog.xml|chrome-android.zip</span>
<span style='color:#800000; font-weight:bold; '>set</span> <span style='color:#800000; font-weight:bold; '>FILE</span><span style='color:#808030; '>=</span>mini_installer.exe
<span style='color:#509D52; '>::--------------------------------------------------------------------------------</span>


<span style='color:#509D52; '>::stuff you should keep as is.</span>
<span style='color:#509D52; '>::--------------------------------------------------------------------------------</span>
<span style='color:#800000; font-weight:bold; '>set</span> URL_LASTCHANGE<span style='color:#808030; '>=</span><span style='color:#797997; '>%PROTOCOL%</span><span style='color:#808030; '>:</span><span style='color:#808030; '>/</span><span style='color:#808030; '>/</span>storage.googleapis.com<span style='color:#808030; '>/</span>chromium<span style='color:#808030; '>-</span>browser<span style='color:#808030; '>-</span><span style='color:#797997; '>%BRANCH%</span><span style='color:#808030; '>/</span><span style='color:#797997; '>%OS%</span><span style='color:#808030; '>/</span>LAST_CHANGE

<span style='color:#800000; font-weight:bold; '>set</span> COMMAND_CURL_FORVERSION<span style='color:#808030; '>=</span>curl.exe <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>silent <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>http2 <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>ipv4 <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>anyauth <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>insecure <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>location<span style='color:#808030; '>-</span>trusted <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>ssl<span style='color:#808030; '>-</span>allow<span style='color:#808030; '>-</span>beast <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>ssl<span style='color:#808030; '>-</span>no<span style='color:#808030; '>-</span>revoke <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>url <span style='color:#0000e6; '>"%URL_LASTCHANGE%"</span>

<span style='color:#800000; font-weight:bold; '>set</span> VERSION<span style='color:#808030; '>=</span>
<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#808030; '>/</span>f <span style='color:#0000e6; '>"tokens=*"</span> <span style='color:#797997; '>%%</span>a <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span>'<span style='color:#800000; font-weight:bold; '>call</span> <span style='color:#797997; '>%COMMAND_CURL_FORVERSION%</span> <span style='color:#008c00; '>2</span><span style='color:#808030; '>^</span><span style='color:#808030; '>&gt;</span><span style='color:#808030; '>^</span><span style='color:#808030; '>&amp;</span><span style='color:#008c00; '>1</span>'<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>set</span> VERSION<span style='color:#808030; '>=</span><span style='color:#797997; '>%%</span>a<span style='color:#808030; '>)</span>
<span style='color:#509D52; '>::error handling</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>[</span><span style='color:#0000e6; '>"%VERSION%"</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span><span style='color:#808030; '>=</span> <span style='color:#808030; '>[</span><span style='color:#0000e6; '>""</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>(</span> <span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>NOVERSION</span> <span style='color:#808030; '>)</span>
<span style='color:#800000; font-weight:bold; '>set</span> URL_DOWNLOAD<span style='color:#808030; '>=</span><span style='color:#797997; '>%PROTOCOL%</span><span style='color:#808030; '>:</span><span style='color:#808030; '>/</span><span style='color:#808030; '>/</span>storage.googleapis.com<span style='color:#808030; '>/</span>chromium<span style='color:#808030; '>-</span>browser<span style='color:#808030; '>-</span><span style='color:#797997; '>%BRANCH%</span><span style='color:#808030; '>/</span><span style='color:#797997; '>%OS%</span><span style='color:#808030; '>/</span><span style='color:#797997; '>%VERSION%</span><span style='color:#808030; '>/</span><span style='color:#797997; '>%FILE%</span>

<span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '>.</span>
<span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> Got Latest-Version: </span><span style='color:#0000e6; '>^></span><span style='color:#0000e6; '>%VERSION%</span><span style='color:#0000e6; '>^&lt;</span><span style='color:#0000e6; '> ^[Branch:%BRANCH%/OS:%OS%^]</span>
<span style='color:#509D52; '>::--------------------------------------------------------------------------------</span>


<span style='color:#509D52; '>::you should enable one-of-your-prefered downloaders.</span>
<span style='color:#509D52; '>::goto DOWNLOAD_CURL</span>
<span style='color:#509D52; '>::goto DOWNLOAD_WGET</span>
<span style='color:#509D52; '>::goto DOWNLOAD_ORBITDOWNLOADER</span>
<span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>DOWNLOAD_ARIA2C</span>



<span style='color:#509D52; '>::you should not reach here, unless</span>
<span style='color:#509D52; '>::you've forgot to enable one of the "downloader lines" (above)...</span>
<span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>NODOWNLOADER</span>


<span style='color:#509D52; '>::--------------------------------------------------------------------------------</span>
<span style='color:#e34adc; '>:NOVERSION</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> ERROR: could not get the latest version...</span>
  <span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>EXIT</span>

<span style='color:#e34adc; '>:NODOWNLOADER</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> ERROR: please enable one of the downloader lines..</span>
  <span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>EXIT</span>


<span style='color:#e34adc; '>:DOWNLOAD_CURL</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> Start Download using cURL...</span>
  <span style='color:#800000; font-weight:bold; '>call</span> curl.exe <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>verbose <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>http2 <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>ipv4 <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>ignore<span style='color:#808030; '>-</span>content<span style='color:#808030; '>-</span>length <span style='color:#808030; '>^</span>
                <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>anyauth <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>insecure <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>location<span style='color:#808030; '>-</span>trusted          <span style='color:#808030; '>^</span>
                <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>ssl<span style='color:#808030; '>-</span>allow<span style='color:#808030; '>-</span>beast <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>ssl<span style='color:#808030; '>-</span>no<span style='color:#808030; '>-</span>revoke <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>tcp<span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>fastopen</span> <span style='color:#808030; '>^</span>
                <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>tcp<span style='color:#808030; '>-</span>nodelay <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>use</span><span style='color:#808030; '>-</span>ascii <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>url <span style='color:#0000e6; '>"%URL_DOWNLOAD%"</span>
  <span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>EXIT</span>


<span style='color:#e34adc; '>:DOWNLOAD_WGET</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> Start Download using wGET...</span>
  <span style='color:#800000; font-weight:bold; '>call</span> wget.exe <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>directory<span style='color:#808030; '>-</span>prefix<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"."</span> <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>debug</span> <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>user</span><span style='color:#808030; '>-</span>agent<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Mozilla/5.0 Chrome"</span> <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>continue</span> <span style='color:#808030; '>^</span>
                <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>server<span style='color:#808030; '>-</span>response <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>no<span style='color:#808030; '>-</span>check<span style='color:#808030; '>-</span>certificate <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>secure<span style='color:#808030; '>-</span>protocol<span style='color:#808030; '>=</span><span style='color:#800000; font-weight:bold; '>auto</span>  <span style='color:#0000e6; '>"%URL_DOWNLOAD%"</span>
  <span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>EXIT</span>


<span style='color:#e34adc; '>:DOWNLOAD_ARIA2C</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> Start Download using Aria2C...</span>
  <span style='color:#800000; font-weight:bold; '>call</span> aria2c.exe <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>allow<span style='color:#808030; '>-</span>overwrite<span style='color:#808030; '>=</span>true         <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>auto</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>file</span><span style='color:#808030; '>-</span>renaming<span style='color:#808030; '>=</span>false         <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>check<span style='color:#808030; '>-</span>certificate<span style='color:#808030; '>=</span>false        <span style='color:#808030; '>^</span>
                  <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>check<span style='color:#808030; '>-</span>integrity<span style='color:#808030; '>=</span>false        <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>connect<span style='color:#808030; '>-</span>timeout<span style='color:#808030; '>=</span><span style='color:#008c00; '>120</span>              <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>console<span style='color:#808030; '>-</span>log<span style='color:#808030; '>-</span>level<span style='color:#808030; '>=</span>notice       <span style='color:#808030; '>^</span>
                  <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>continue</span><span style='color:#808030; '>=</span>true                <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>dir</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"."</span>                          <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>disable<span style='color:#808030; '>-</span>ipv6<span style='color:#808030; '>=</span>true              <span style='color:#808030; '>^</span>
                  <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>enable<span style='color:#808030; '>-</span>http<span style='color:#808030; '>-</span>keep<span style='color:#808030; '>-</span>alive<span style='color:#808030; '>=</span>true  <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>enable<span style='color:#808030; '>-</span>http<span style='color:#808030; '>-</span>pipelining<span style='color:#808030; '>=</span>true      <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>file</span><span style='color:#808030; '>-</span>allocation<span style='color:#808030; '>=</span>prealloc       <span style='color:#808030; '>^</span>
                  <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>http<span style='color:#808030; '>-</span>auth<span style='color:#808030; '>-</span>challenge<span style='color:#808030; '>=</span>false    <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>human<span style='color:#808030; '>-</span>readable<span style='color:#808030; '>=</span>true              <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>max<span style='color:#808030; '>-</span>concurrent<span style='color:#808030; '>-</span>downloads<span style='color:#808030; '>=</span><span style='color:#008c00; '>16</span>    <span style='color:#808030; '>^</span>
                  <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>max<span style='color:#808030; '>-</span>connection<span style='color:#808030; '>-</span>per<span style='color:#808030; '>-</span>server<span style='color:#808030; '>=</span><span style='color:#008c00; '>16</span> <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>max<span style='color:#808030; '>-</span>tries<span style='color:#808030; '>=</span><span style='color:#008c00; '>3</span>                      <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>min<span style='color:#808030; '>-</span>split<span style='color:#808030; '>-</span>size<span style='color:#808030; '>=</span>1M              <span style='color:#808030; '>^</span>
                  <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>retry<span style='color:#808030; '>-</span>wait<span style='color:#808030; '>=</span><span style='color:#008c00; '>1</span>                 <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>rpc<span style='color:#808030; '>-</span>secure<span style='color:#808030; '>=</span>false                 <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>split<span style='color:#808030; '>=</span><span style='color:#008c00; '>8</span>                        <span style='color:#808030; '>^</span>
                  <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>timeout<span style='color:#808030; '>=</span><span style='color:#008c00; '>120</span>                  <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>user</span><span style='color:#808030; '>-</span>agent<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Mozilla/5.0 Chrome"</span>  <span style='color:#0000e6; '>"%URL_DOWNLOAD%"</span>
  <span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>EXIT</span>


<span style='color:#e34adc; '>:DOWNLOAD_ORBITDOWNLOADER</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> Start Download using OrbitDownloader...</span>
  <span style='color:#800000; font-weight:bold; '>call</span> <span style='color:#0000e6; '>"C:\\Program Files (x86)\\Orbitdownloader\\orbitdm.exe"</span> <span style='color:#0000e6; '>"%URL_DOWNLOAD%"</span>
  <span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>EXIT</span>


<span style='color:#e34adc; '>:EXIT  </span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '>.</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> Done.</span>
  <span style='color:#800000; font-weight:bold; '>pause</span>


<span style='color:#509D52; '>::--------------------------------------------------------------------------------------------</span>
<span style='color:#509D52; '>::--------------------------------------------------------------------------------------------</span>
<span style='color:#509D52; '>::</span>
<span style='color:#509D52; '>::   - "http"           - http protocol is faster to connect and download with OrbitDownloader and wGet, it also means your PC won't preform certificate exchange with the remote machine.</span>
<span style='color:#509D52; '>::   - "snapshots"      - snapshots is newer, "continuous" is more stable (but might be very old).</span>
<span style='color:#509D52; '>::   - "OS" and "FILE"  - are what you want to download</span>
<span style='color:#509D52; '>::</span>
<span style='color:#509D52; '>::</span>
<span style='color:#509D52; '>:: snapshots    - newest (unstable) newest code-changes - passed unit-tests + compilation.</span>
<span style='color:#509D52; '>:: continuous   - old    (stable)                       - passed unit-tests + compilation + test-suits.</span>
<span style='color:#509D52; '>:: ------------------------------------------------------------------------------------------------------</span>
<span style='color:#509D52; '>::   branch   |  branch description           |  version-based build</span>
<span style='color:#509D52; '>:: ___________|_______________________________|_____________________________________________________________________________________________</span>
<span style='color:#509D52; '>::   Win_x64  |  Chromium Installer (64-bit)  |  storage.googleapis.com/chromium-browser-continuous/Win_x64/{version}/mini_installer.exe  </span>
<span style='color:#509D52; '>::   Win_x64  |  Chromium Package (64-bit)    |  storage.googleapis.com/chromium-browser-continuous/Win_x64/{version}/chrome-win32.zip    </span>
<span style='color:#509D52; '>::   Win      |  Chromium Installer (32-bit)  |  storage.googleapis.com/chromium-browser-continuous/Win/{version}/mini_installer.exe</span>
<span style='color:#509D52; '>::   Win      |  Chromium Package (64-bit)    |  storage.googleapis.com/chromium-browser-continuous/Win/{version}/chrome-win32.zip    </span>
<span style='color:#509D52; '>::</span>
<span style='color:#509D52; '>::</span>
<span style='color:#509D52; '>::------------------------------------------------------</span>
<span style='color:#509D52; '>::- SCRIPT WAS WRITTEN AND MAINTAINED BY ELAD KARAKO.  -</span>
<span style='color:#509D52; '>::- LAST UPDATED: JULY, 2017. FREE TO USE UNDER GNU.   -</span>
<span style='color:#509D52; '>::------------------------------------------------------</span>
</pre>

Download tools..
<ul>
<li><strong>must: cURL for windows:</strong> <a href="https://github.com/eladkarako/curl-archive">github.com/eladkarako/curl-archive</a>.</li>
<li>optional: <a href="https://github.com/aria2/aria2/releases">github.com/aria2/aria2/releases</a>.</li>
<li>optional: wGet for Windows: <a href="http://nebm.ist.utl.pt/~glopes/wget/">nebm.ist.utl.pt/~glopes/wget/</a>|<a href="https://eternallybored.org/misc/wget/">eternallybored.org/misc/wget/</a>.</li>
<li>optional: orbitdownloader (Google it...)</li>
</ul>

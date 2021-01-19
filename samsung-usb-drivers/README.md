<blockquote>
Download odin and <strong>newer</strong> versions
of the <strong>Samsung drivers</strong> from this github page:
<a href="https://github.com/eladkarako/odin">github.com/eladkarako/odin/</a>,
the Samsung drivers download-links are placed at the end of the github-page.
</blockquote>

Samsung Drivers. .
<!--more-->
<blockquote>
<ul>
  <li>
  <a download="SAMSUNG_USB_Driver_for_Mobile_Phones.zip" href="https://icompile.eladkarako.com/_uploads/2016/11/SAMSUNG_USB_Driver_for_Mobile_Phones.zip">SAMSUNG_USB_Driver_for_Mobile_Phones.zip</a>
it's 9.17MB, version 1.5.61. Signed by Samsung at July 22<sup>nd</sup>, 2016 (9:33AM),
Contains 15 drivers, whom which their version is 2.12.3.0, last modified at April 7<sup>th</sup>, 2016.
  </li>
  <li>
  <a download="Kies3Setup.exe" href="https://icompile.eladkarako.com/_uploads/2016/11/Kies3Setup.exe">Kies3Setup.exe</a>
it's 38.80MB, version 3.2.16084.2. Signed by Samsung at September 18, 2016 (10:07PM).
  </li>
</ul>
</blockquote>

<hr/>

Help, Frequently-asked-questions, Developer Hub:

<blockquote>
<span style="text-decoration:underline;">Why Do I Need Samsung Drivers On My PC Anyway?</span>
Your phone will not be properly identified by Windows if you won't install it,
after the installation you would be able to access its internal-storage and sd-card
or use your phone as a USB-modem.
- You can use your phone as a camera for your PC.
- Using Odin <sup><a href="https://en.wikipedia.org/wiki/Odin_(firmware_flashing_software)" target="_blank">Wikipedia</a> | <a href="https://github.com/eladkarako/odin" target="_blank">Download</a></sup> in-order to <a href="http://sammobile.com/firmwares/" target="_blank">flash a firmware</a>, requires switching your phone to <a href="https://icompile.eladkarako.com/samsung-galaxy-recovery-and-download-mode/" target="_blank" title="iCompile - Samsung Galaxy Recovery And Download-Mode">download-mode</a> and to be connected to the PC, you'll need the drivers so Odin will identify your phone's-modem.
- Debugging, using Andorid Debug Bridge (ADB) and Android software-development.
</blockquote>

<blockquote>
<span style="text-decoration:underline;">List Of Drivers Included:</span>
<ul>
<li>SAMSUNG Escape USB Andorid Debug Bridge Interface driver</li>
<li>SAMSUNG Escape USB Android Debug Bridge driver</li>
<li>SAMSUNG Escape USB Composite driver</li>
<li>SAMSUNG Escape USB Device Management Serial Port driver</li>
<li>SAMSUNG Escape USB Diagnostic Serial Port driver</li>
<li>SAMSUNG Escape USB Ethernet Adapter driver</li>
<li>SAMSUNG Escape USB Marvel Diagnostic driver</li>
<li>SAMSUNG Escape USB Media Transfer Protodol driver</li>
<li>SAMSUNG Escape USB Modem driver</li>
<li>SAMSUNG Escape USB Obex Serial Port driver</li>
<li>SAMSUNG Escape USB Remote NDIS based Internet Sharing driver</li>
<li>SAMSUNG Escape USB RMNET  Parent driver</li>
<li>SAMSUNG Escape USB RMNET Miniport Ethernet Adapter driver</li>
<li>SAMSUNG Escape USB Samsung Debug Bridge Driver</li>
<li>SAMSUNG Mobile USB Connectivity Device Driver</li>
</ul>
</blockquote>

<blockquote>
<span style="text-decoration:underline;">Is this an official distribution?</span>
Yes.
the drivers are signed by Samsung, and are safe to use on Windows.
</blockquote>

<hr/>
<blockquote>
<span style="text-decoration:underline;">How this article came to be?</span>
I've looked for an updated drivers everywhere, but found only old versions,
than - I've broke into the setup package of Samsung KIES (which DOES get updated quite frequently),
and found that THERE is an updated version of the drivers inside,
So I've deicide to share it with everyone.

<em>Yes, I did the hard work of reverse-engineer the binary packaging,
and YOU get to enjoy the fruits of my labor, the internet is a magical ;)</em>
</blockquote>

<blockquote>
<span style="text-decoration:underline;">How to reverse-engineer it, yourself! [Tips]</span>
<ol>
  <li><img src="https://icompile.eladkarako.com/_uploads/2016/09/re1.png" alt="" width="231" height="80"/> 
The <code>Kies3Setup.exe</code> is visual-c++ v8, InstallShield setup, you can use <code>InstallShield /b</code> switch to extract its content.</li>
  <li><img src="https://icompile.eladkarako.com/_uploads/2016/09/re2.png" alt="" width="257" height="199"/> This is a MSI, a very friendly Windows-Installer package. You can even slipstream it into your custom Windows installation :)
Use msi2xml to extract its content.</li>
  <li><img src="https://icompile.eladkarako.com/_uploads/2016/09/re3.png" alt="" width="505" height="71"/> Under the folder-tree you'll find <code>SAMSUNG_USB_Driver_for_Mobile_Phones.exe</code>, it's a Nullsoft installer (NSIS), use either NSIDis or simply open it with <a href="https://icompile.eladkarako.com/7zip/" target="_blank">7Zip</a>. 
Easy.</li>
</ol>
</blockquote>

<img src="https://icompile.eladkarako.com/_uploads/icompile.eladkarako.com_burp_as_reverse_proxy.png" title="Burp configuration to allow accepting connections from other devices" alt="Burp configuration to allow accepting connections from other devices" />  

Follow the instructions: (as explained in the image above)  
<ol>
<li>
  Configuring Burp to listen to remote-connections (all interfaces).  
  
  <pre>
  'Proxy' tab
    'Options' tab
      select the line at 'proxy listeners', and click 'Edit'.
        'Binding' tab
          in 'Bind to address', select 'All interfaces', and click 'OK'.
            on the dialong 'Confirm: are you sure you want...', click 'Yes'.
  </pre>  
  
  Note that you can also specify address to capture only traffic from a specific network-adapter,  
  but usually your PC has one active network-connection to your home WiFi,  
  from which it gets both internet and possibly (unless the router defines you in 'guest area'),  
  and access shared resources from other network devices such as storage or printers.  
    
  You might get few more if you are using a virtual-machine which creates a virtual network-adapter,  
  if you are planing on listening to connections just from a virtual-machine,  
  than this is just for you, otherwise best to keep it on 'All interfaces'.  
</li>
<li>
  <pre>
  On the different device,  
  the one you want to inspect,  
  configure a proxy, using the address of the computer running Burp at the moment and port 8080.  

  You can inspect unsecure traffic from that device right-away on your computer-running-Burp.  
  
  Visit, http://burp in the device you just defined proxy.  
  on the top, press the burp button, and install or download to your device and install later the certificate-file.  
  If you can manage, place it in the trusted authorities section (Windows),  
  and VPN (Android) - for example.
  
  You should be able to use secure-connection inspection for standard-connections.  
  
  </pre>
  Note, that for some mobile-apps,  
  which uses Certificate-Pinning,  
  you need Xposed-Framework, Xposed-App, and 'Unpin Certificate' module,  
  to manage to capture traffic with Burp.
  sorry...
</li>
<li>
Note that the format of the certificate is DER,  
binary format that works OK with Windows (and maybe a more advance Android operation-systems),  
you need to convert it to good, old-school CRT.  

that you can do online for free with the website:  
https://www.sslshopper.com/ssl-converter.html (requires JavaScript),  
it will identify the format itself,  
and suggest the CRT as output, click save.  

You can do this on your device (disable the proxy settings for now, complete, install and turn them on again),  
or on your computer and move the CRT file back to the phone by a USB cable (or disable the proxy to be able to copy the file over the home-network if you are capable of it).  

for CRT, just click it, and install, you need it for WiFi, but you can install it for apps and VPN a well.
</li>
</ol>
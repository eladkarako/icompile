Steps:
--------------
1. enable functionality on VMware ESXi, by editing <code style="display:inline;">/etc/vmware/config</code> file.
2. configure an empty (Red Hat Linux 5 x64 based) machine, set few extra VMX configuration, define maximum NIC from type <code style="display:inline;">VMXNET 3</code>, maximum RAM, maximum HD spece, etc..
3. boot up and install XEN-server <small><code style="display:inline;">(XenServer-6.2.0-install-cd.iso)</code></small>, set the IP for the management-console.
4. on your PC install the XEN-Center <small><code style="display:inline;">(XenCenter.msi)</code></small>
5. deploy OVX or XVA or install a new Windows/Linux/Mac/... machine from the start.


Steps: ->
--------------
if you'll try to do a straightforward installation of XEN server into VMWare-Hypervisor (a.k.a vSphere a.k.a ESXi) you'll get either "No Network Adapters" or, after you'll try installing guest OS on XEN you'll get "Visualization not supported".

there are steps to follow, which will be standard, few are advanced - but still in the UI of Hypervisor (part of the wizard), some will be including editing using VI editor in the Hypervisor-shell (use PUTTY..) and configurations called "VMX lines" which is set to the guest-machine settings


- install VMware Hypervisor 5.5 (or newer), setup a static IP, Subnet, Gateway, DNS.
- on your PC access httsp://your_hypervisor_ip look towards the middle of the page, click "Download vSphere Client", when download finishes- install and log-into Hypervisor-client.
- 
- enable SSH-shell for your ESXI.
- edit the global config to enable nested VM virtualization<pre>
cd /etc/vmware
vi config
</pre>



http://www.virtuallyghetto.com/2011/07/how-to-enable-support-for-nested-64bit.html
http://pricklytech.wordpress.com/2010/09/14/installing-citrix-xenserver-on-vmware-vsphere/
http://discussions.citrix.com/topic/309635-hyper-v-required-when-is-this-going-away/
http://discussions.citrix.com/topic/320841-w7-vm-on-synchronizer-on-esx-no-network-connectivity/
http://www.virtualizedgeek.com/2013/07/xenclient-vs-vmware-view-client/
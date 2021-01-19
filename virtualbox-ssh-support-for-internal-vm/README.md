VirtualBox -> preferences -> Network -> Nat Networks -> create new button (name=> "NatNetwork") -> OK....

vm (state is OFF) -> settings -> network -> change attached to -> NAT <strong>Network</strong> (choose the name "NatNetwork") -> promiscuous mode change to -> allow all.

start your machine, make sure you're getting "THE INTERNET" ;)

check your vm's internal ip (ifconfig or click the network icon for connection information).
install openssh-server (sudo apt-get openssh-server)

VirtualBox -> preferences -> Network -> Nat Networks -> double click or edit (same) -> click port forwarding -> fill: tcp, 127.0.1.1, 22, 10.0.???.???,22
instead of 10.0.???.??? fill the vm's ip.

putty:
you goto address is 127.0.1.1, vbox will forward it to your vm.


<img src="https://icompile.eladkarako.com/_uploads/2016/01/2016-01-22_022409.jpg" alt="2016-01-22_022409" width="791" height="428" class="alignnone size-full wp-image-4451" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/2016-01-22_022124.jpg" alt="2016-01-22_022124" width="659" height="412" class="alignnone size-full wp-image-4452" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/2016-01-22_022034.jpg" alt="2016-01-22_022034" width="688" height="445" class="alignnone size-full wp-image-4453" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/2016-01-22_021935.jpg" alt="2016-01-22_021935" width="340" height="218" class="alignnone size-full wp-image-4454" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/2016-01-22_021909.jpg" alt="2016-01-22_021909" width="680" height="359" class="alignnone size-full wp-image-4455" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/2016-01-22_021811.jpg" alt="2016-01-22_021811" width="600" height="548" class="alignnone size-full wp-image-4456" />

<img src="https://icompile.eladkarako.com/_uploads/2016/01/2016-01-22_021719.jpg" alt="2016-01-22_021719" width="510" height="339" class="alignnone size-full wp-image-4457" />
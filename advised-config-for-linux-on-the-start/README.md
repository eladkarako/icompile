<!--more-->
tmsh show sys license detail | grep -i "Registration key" | sha512sum






כדי שאפשר יהיה לעשות רימוט דסקטופ
sudo apt-get install xrdp

    echo "gnome-session --session=ubuntu-2d" > ~/.xsession
    sudo apt-get install gnome-session-fallback


פונטים
sudo apt-get install ttf-mscorefonts-installer
sudo apt-get install ttf-mscorefonts
sudo fc-cache -f -s -v

sudo apt-get install ubuntu-dev-tools
sudo apt-get install openssh
sudo apt-get install openssh-server

install putty



----------how to install svn
sudo apt-get-repository ppa:rabbitvcs/ppa
sudo apt-get update
sudo apt-get install rabbitvcs-nautilus3






--------------------------------------- skip sudo password
---install kuser
sudo kuser,
groups: adm, cdrom, sudo, dip, plugdev, lpadmin, netcode, sambashare


sudo EDITOR=gedit visudo



--------------------------------------------------------------


sudo apt-get install nodejs npm






sudo apt-get install ruby
sudo apt-get install rubygems
http://www.vagrantup.com/downloads  --- as a replacement for puppet
http://welcometothebundle.com/easily-install-statsd-and-graphite-with-vagrant/

--------------------
DNSניסיון להגדיר ככה שירשם ב
https://help.ubuntu.com/12.10/serverguide/network-configuration.html
--------
sudo gedit /etc/network/interfaces
iface eth0 inet static
    address 172.29.32.139
    netmask 255.255.255.0
    gateway 172.29.32.254
    dns-search olympus.F5Net.com
    dns-nameservers 192.168.184.180 192.168.184.183
--------



http://johannilsson.com/2012/05/13/graphite.html





sudo EDITOR=gedit visudo
add at end:
netcode ALL=(ALL) NOPASSWD: ALL
karako ALL=(ALL) NOPASSWD: ALL
shlomo ALL=(ALL) NOPASSWD: ALL
peter ALL=(ALL) NOPASSWD: ALL
graphite ALL=(ALL) NOPASSWD: ALL




















----------------------------------------------------------
----------------------------------------------------------
----------------------------------------------------------

sudo apt-get install python-pip
sudo apt-get install ruby1.9.3
sudo gem install vagrant
sudo git clone https://github.com/liuggio/vagrant-statsd-graphite-puppet.git
cd vagrant-statsd-graphite-puppet
##################################################sudo apt-get install virtualbox
##################################################sudo vagrant up






אולי יעזור לקנפג על מכונה וירטואלית אי-פי שונה
http://www.coding4streetcred.com/blog/post/VirtualBox-Configuring-Static-IPs-for-VMs















=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
http://cookingclouds.com/2012/07/06/graphite-install/
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
sudo apt-get install python-pip
sudo wget https://launchpad.net/graphite/0.9/0.9.10/+download/graphite-web-0.9.10.tar.gz
sudo wget https://launchpad.net/graphite/0.9/0.9.10/+download/carbon-0.9.10.tar.gz
sudo wget https://launchpad.net/graphite/0.9/0.9.10/+download/whisper-0.9.10.tar.gz
sudo wget https://launchpad.net/graphite/0.9/0.9.10/+download/check-dependencies.py
ls |grep tar |while read i ; do tar xzvf $i ; done
sudo apt-get -y install apache2 python-django python-django-tagging python-ldap python-memcache python-cairo
cd ~/whisper-0.9.10/
sudo python setup.py install

sudo pip install txamqp

-----------INSTALL CARBON
sudo apt-get -y install python-twisted python-simplejson
cd ~/carbon-0.9.10/
sudo python setup.py install
cd /opt/graphite/conf/
sudo cp carbon.conf.example carbon.conf
sudo cp storage-schemas.conf.example storage-schemas.conf
cd /opt/graphite/
sudo ./bin/carbon-cache.py start

-----------INSTALL GRAPHITE-WEB
cd ~/graphite-web-0.9.10/
sudo python check-dependencies.py
----------------------------------->All necessary dependencies are met.
----------------------------------->All optional dependencies are met.
sudo python setup.py install
sudo cp examples/example-graphite-vhost.conf /etc/apache2/sites-available/default
sudo cp /opt/graphite/conf/graphite.wsgi.example /opt/graphite/conf/graphite.wsgi
sudo mkdir /etc/apache2/run
sudo apt-get -y install libapache2-mod-wsgi
sudo /etc/init.d/apache2 reload
cd /opt/graphite/webapp/graphite/
sudo python manage.py syncdb
sudo chown -R www-data:www-data /opt/graphite/storage
cd /opt/graphite/webapp/graphite
sudo cp local_settings.py.example local_settings.py
sudo /etc/init.d/apache2 restart



EXAMPLES ON HOW TO SEND DATA TO GRAPHITE
hostname = * you guessed it
test_001 = service name
1001 = value
NOW = epoch time to input in graph

NOW=`date +%s` ; echo "hostname.test_001 1001 $NOW" |nc localhost 2003
or

cd /opt/graphite/examples
sudo python ./example-client.py






----------------------------------------------------------------------------------------------------------
Follow these steps to install Graphite on a fresh Ubuntu 12.04 instance. Make sure you read and understand the commands because by the time you read this, things could be outdated.
<a href="https://gist.github.com/surjikal/2777886">https://gist.github.com/surjikal/2777886</a>

<iframe type="text/html" charset="UTF-8" loading="eager" lazyload="off" importance="high" 
  src="https://icompile.eladkarako.com/_resources/embed_gist.html?gistuser=surjikal&gistid=2777886&origin=https%3A%2F%2Ficompile.eladkarako.com" 
  referrerpolicy="no-referrer" sandbox="allow-same-origin allow-scripts allow-top-navigation" 
  seamless="false" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" 
  style="height:300px;"
></iframe>













----------להתקין cpanm
curl -L http://cpanmin.us | perl - --sudo App::cpanminus 
sudo cpanm Net::SNMP







=======================lamp (wamp like package for linux):





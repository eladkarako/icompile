<!--more-->

use mintx64:
fullusername/username/password
brain/brain/brain
---- your single user should be "brain" and so is machine name.

------------------------------------------------------------pre
sudo apt-get -y update
sudo apt-get -y upgrade
sudo apt-get install --assume-yes build-essential
sudo apt-get install --assume-yes linux-headers-$(uname -r)
------------------------------------------------------------

------------------------------------------------------------java
sudo apt-get remove --assume-yes openjdk*
sudo apt-get autoremove
sudo apt-get clean
sudo apt-get update

sudo add-apt-repository --yes ppa:webupd8team/java
sudo apt-get -y update
sudo apt-get install --assume-yes oracle-java7-installer
------------------------------------------------------------

-------------HOSTS fixup
sudo sed -i '$s/$/\
&\
&127.0.1.1       brain.myCompanyHost.com/' /etc/hosts
sudo sed -i '$s/$/\
&\
&172.29.32.140   elasticsearch.myCompanyHost.com/' /etc/hosts


-------------
-------------install webserver
sudo apt-get install --assume-yes apache2
sudo apt-get install --assume-yes php5 libapache2-mod-php5
sudo sed -i '$s/$/\
&\
&ServerName localhost/' /etc/apache2/apache2.conf
sudo /etc/init.d/apache2 restart
-------------
-------------


-------------
-------------prepare webserver root www folder for writing
sudo usermod --append --groups www-data brain
sudo usermod --append --groups root brain
sudo chown brain:brain -R /var/www
-------------


-------------perl related modules
sudo curl -L http://cpanmin.us | sudo perl - --sudo App::cpanminus
sudo cpanm --sudo Elasticsearch
        --------------------------------------this is a backup way to download and compile this perl module ----- make sure the 's' in Elasticsearch is small-case everywhere!!!
        sudo cpanm --sudo --uninstall Elasticsearch

        cd ~
        wget http://search.cpan.org/CPAN/authors/id/D/DR/DRTECH/Elasticsearch-0.76.tar.gz
        tar xvzf Elasticsearch-0.76.tar.gz
        cd Elasticsearch-0.76
        sudo perl Makefile.PL
        sudo make
        sudo make test
        sudo make install
                *verify by
                ls -asl /usr/local/share/perl/5.14.2/Elasticsearch.pm

        sudo nano ~/.bashrc
            add:
                PERLLIB="$PERLLIB:/usr/local/share/perl/5.14.2/"




--------------------------------------logstash log sender
mkdir ~/logstash
cd ~/logstash
wget https://download.elasticsearch.org/logstash/logstash/logstash-1.3.2-flatjar.jar -O logstash.jar
wget https://raw.github.com/eladkarako/logstashconf/master/baseconfig.conf
rm ~/logstash/send2elasticsearch.pl && wget https://raw.github.com/eladkarako/logstashconf/master/send2elasticsearch.pl
sed -i 's/elasticsearch.host.com/elasticsearch.myCompanyHost.com/' ~/logstash/send2elasticsearch.pl
sudo chmod 0755 ~/logstash/send2elasticsearch.pl

xxxx     --------------------------------------logstash auto run as daemon. note that the start path and name are taken from "logstash log sender" (above)
xxxx     cd ~/logstash
xxxx     wget https://raw.github.com/eladkarako/logstashconf/master/logstash_for_initd.sh
xxxx     sudo mv logstash_for_initd.sh /etc/init.d/.
xxxx     sudo mv /etc/init.d/logstash_for_initd.sh /etc/init.d/logstash
xxxx     sudo chmod 0755 /etc/init.d/logstash
xxxx     sudo update-rc.d logstash defaults
xxxx     ***sudo reboot*********
xxxx     sudo logstash status
xxxx         if not working:
xxxx             sudo update-rc.d -f foobar remove
xxxx             sudo rm /etc/init.d/logstash
xxxx 
xxxx 

--------------------------------------logstash start manually from console VNC session
cd ~/logstash
java -jar logstash.jar agent -f baseconfig.conf
------------- close down the VNC viewer, the program will keep running.

-------------copy data C:\\wamp\\www\\1\\cloud-storage\aw to machine's /var/www/cloud-storage/raw using winscp. **it should take about 15 minutes.





--------------------------------------run manually (not as service)
curl "https://raw.github.com/eladkarako/logstashconf/master/one_line.csv" | ~/logstash/send2elasticsearch.pl





--------------------------------------generate foo information with current timestamp
mkdir ~/foo || cd ~/foo
-------------------------------------------foo line generator
wget https://raw2.github.com/eladkarako/logstashconf/master/send2send2el.pl

-------------------------------------------line sender
rm ~/logstash/send2elasticsearch.pl && wget https://raw.github.com/eladkarako/logstashconf/master/send2elasticsearch.pl
sed -i 's/elasticsearch.host.com/elasticsearch.myCompanyHost.com/' ~/logstash/send2elasticsearch.pl

-------------------------------------------looper
wget https://raw2.github.com/eladkarako/logstashconf/master/loopsend.sh
sudo chmod 0755 *.pl *.sh
./loopsend.sh




























xxxx sudo cpanm Elasticsearch
xxxx sudo cpan Module::Build



--------------------------------------logstash log sender
mkdir ~/logstash
cd ~/logstash
wget https://download.elasticsearch.org/logstash/logstash/logstash-1.3.2-flatjar.jar -O logstash.jar
wget https://raw.github.com/eladkarako/logstashconf/master/baseconfig.conf
wget https://raw.github.com/eladkarako/logstashconf/master/send2elasticsearch.pl
sed -i 's/elasticsearch.host.com/\\"elasticsearch.myCompanyHost.com\\"/' send2elasticsearch.pl
sudo u+x send2elasticsearch.pl

--------------------------------------perl parser 

pip install elasticsearch
https://chrome.google.com/webstore/detail/sense/doinijnbnggojdlcjifpdckfokbbfpbo
---------------------------
common::sense
Data::Printer
JSON::XS
LWP::Protocol::Net::Curl












------------------------------------------ generate foo values:
mkdir ~/foo && cd ~/foo



















-------------------------------------------------->copy content:
open winscp to karako@brain.myCompanyHost.com
copy all files from /var/www to c:\\wamp\\www\\1

open putty to karako@172.29.42.112 ("brainvm1" on esx)
cd /var/www
sudo chmod -R 777 .

open winscp to karako@172.29.42.112 ("brainvm1" on esx)
set copy 9 files at same time in transfer to make copy faster.
copy "cloud-storage,service,index.html" from c:\\wamp\\www\\1 to karako@172.29.42.112 /var/www


sudo /etc/hosts
172.29.42.112   elasticsearch.myCompanyHost.com #elasticsearch
172.29.42.112   graphite.myCompanyHost.com      #graphite


--------------install cpanm
sudo curl -L http://cpanmin.us | sudo perl - --sudo App::cpanminus
sudo cpanm install Net::SNMP
sudo cpanm install Elasticsearch























----------------------------------------------------------------- קובץ קונפיגורציה נמצא פה
sudo gedit /etc/apache2/apache2.conf

using winscp copy all files in /var/www/raw to c:\\wamp\\www\\1

windows:
open cmd
run command
pscp -r c:/wamp/www/1 karako@172.29.42.112:/var/www
    it will show:
        karako@172.29.42.112's password:
    then start copy:
        f25344b5d560a9c04686e44c3 | 452 kB | 452.6 kB/s | ETA: 00:00:00 | 100%
        f25344b5d560a9c04686e44c3 | 452 kB | 452.6 kB/s | ETA: 00:00:00 | 100%
        f25344b5d560a9c04686e44c3 | 452 kB | 452.6 kB/s | ETA: 00:00:00 | 100%
        f25344b5d560a9c04686e44c3 | 453 kB | 453.2 kB/s | ETA: 00:00:00 | 100%
        f25344b5d560a9c04686e44c3 | 452 kB | 452.8 kB/s | ETA: 00:00:00 | 100%
        f25344b5d560a9c04686e44c3 | 452 kB | 452.6 kB/s | ETA: 00:00:00 | 100%
        f25344b5d560a9c04686e44c3 | 452 kB | 452.6 kB/s | ETA: 00:00:00 | 100%
        f25344b5d560a9c04686e44c3 | 452 kB | 452.6 kB/s | ETA: 00:00:00 | 100%
        f25344b5d560a9c04686e44c3 | 452 kB | 452.6 kB/s | ETA: 00:00:00 | 100%
        f25344b5d560a9c04686e44c3 | 452 kB | 452.6 kB/s | ETA: 00:00:00 | 100%















use 172.29.42.112 (then change to new IP 172.29.42.100)

u/p of sudo user: karako/ESafe8349

', 'Big-Data machine, Logstash agent daemon
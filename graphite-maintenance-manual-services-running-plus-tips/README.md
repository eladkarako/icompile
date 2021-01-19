<!--more-->
1.-------------------------------
su graphite

2.-------------------------------
pkill gunicorn
sudo python /opt/graphite/bin/carbon-cache.py stop

3.-------------------------------
sudo rm -rfv /opt/graphite/storage/whisper/stats*

4.-------------------------------
sudo python /opt/graphite/webapp/graphite/manage.py cleanup
sudo /etc/init.d/memcached restart
sudo python /opt/graphite/bin/carbon-cache.py start
sudo python /opt/graphite/webapp/graphite/manage.py syncdb
cd /opt/graphite/conf/
echo admin | sudo -S gunicorn -b '0.0.0.0:8080' -u graphite -g graphite -w 2 graphite_wsgi:application

4.------------------------------- אופציונלי
cd /opt/statsd
sudo nodejs stats.js localConfig.js





------------------------------------
הערות: 
graphite1.myCompanyHost.com:8080
graphite1.myCompanyHost.com:2003 - plain

graphite1.myCompanyHost.com:---8125 -UDP!!! - plain for logstash


graphite1.myCompanyHost.com:2004 - pickel protocol ????



לבדוק אם פתוח
http://localhost/other/openport.php?host=172.29.42.112&ports=8125', 'graphite maintenance - manual services running
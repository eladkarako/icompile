<!--more-->
https://gist.github.com/surjikal/2777886#graphite-configuration
http://blog.stuartherbert.com/php/2011/09/21/real-time-graphing-with-graphite/
http://statsd.readthedocs.org/en/latest/index.html


********************* on the machine tips:
----------------------------how to install (first!)
********** from my experience it is better to have single user named "graphite", and machine named "graphite1". "graphite" user is root.
-make it auto login (in the install)
-install open-ssh server, desktop sharing without password. now you can vnc and putty!
----------------------------

------------------------------------- after first install essentials part 1:
1. sudo EDITOR=gedit visudo
add:
graphite ALL=(ALL) NOPASSWD: ALL
to avoid sudo password prompt
2. put screen the smallest resolution available (system settings - hardware - display - 600x800(4:3) - apply - save.
3. disable lock (on configuration, and disable enter password on unlock) (system settings - screen saver and lock settings - remove 'x' from dim screen - turn screen off: never - lock OFF - remove 'x' from require my pass.
***************************************************

------------------------------------- install essentials part 2:
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install build-essential
sudo apt-get install linux-headers-$(uname -r)

***************************************************

------------------------------------- install essentials part 3: Create a symbolic links for kernel headers. The vmware tools installer is looking for the version.h file in under [kernelsource path]/include/linux/version.h, it’s not there. The location of version.h is [kernelsource path]include/generated/uapi/linux/version.h
sudo ln -s /usr/src/linux-headers-$(uname -r)/include/generated/uapi/linux/version.h /usr/src/linux-headers-$(uname -r)/include/linux/version.h

xxxxxxxxxxx    ********* creating snapshots is a great backup feature. with vmware tools installed on the machine snapshots can be smaller (shrinking memory stuff) -- its a good idea!
xxxxxxxxxxx    
xxxxxxxxxxx    ------------------------------------- installing VMware tools. start -----optional
xxxxxxxxxxx    4. choose (on esx) -> right click machine->guest->install upgrade vmware tools, copy tar.gz from disk to desktop
xxxxxxxxxxx    open this on real linux window (on ESX gui console).
xxxxxxxxxxx    tar xzvf VMwareTools-8.3.7-341836.tar.gz
xxxxxxxxxxx    cd vmware-tools-distrib/
xxxxxxxxxxx    sudo ./vmware-install.pl
xxxxxxxxxxx    (to uninstall run:   sudo ./vmware-uninstall-tools.pl )
xxxxxxxxxxx    --->In which directoty do you want to install the binary files? [/usr/bin]                           ----> {ENTER}
xxxxxxxxxxx    --->What is the directory that contains the init directories (rc0.d/ to rc6.d/)? [/etc]              ----> {ENTER}
xxxxxxxxxxx    --->What is the directory that contains the init scripts? [/etc/init.d]                              ----> {ENTER}
xxxxxxxxxxx    --->In which directory do you want to install the daemon files? [/usr/sbin]                          ----> {ENTER}
xxxxxxxxxxx    --->In which directory do you want to install the library files? [/usr/lib/vmware-tools]             ----> {ENTER}
xxxxxxxxxxx    --->The path "/usr/lib/vmware-tools" does not exist currently. This program is going to
xxxxxxxxxxx     create it, including needed parent directories. Is this what you want? [yes]                        ----> {ENTER}
xxxxxxxxxxx    --->In which directory do you want to install the documentation files? [/usr/share/doc/vmware-tools] ----> {ENTER}
xxxxxxxxxxx    ---> ...some information...
xxxxxxxxxxx    ---> Before running VMware Tools for the first time... configure it... [yes]                         ----> {ENTER}
xxxxxxxxxxx    ---> Detected GCC at.... valid path... Whould you like to change it? [no]                            ----> {ENTER}
xxxxxxxxxxx    ---> Detected kernel headers at.... valid path... Whould you like to change it? [no]                 ----> {ENTER}
xxxxxxxxxxx    ---> *(ignore errors)*.....shared folders feature.. ..CD. [ Press Enter key to continue ]            ----> {ENTER}
xxxxxxxxxxx    ---> .....fast network device driver... run again.. ..CD. [ Press Enter key to continue ]            ----> {ENTER}
xxxxxxxxxxx    ---> .....host to guest drag and drop.. run again.. ..CD. [ Press Enter key to continue ]            ----> {ENTER}
xxxxxxxxxxx    ---> Enjoy, --the VMware team.
xxxxxxxxxxx    ---> ****** using the linux mint gui restart machine!!
xxxxxxxxxxx    ---> close all vbc, putty sessions.
xxxxxxxxxxx    ------------------------------------- installing VMware tools. end
xxxxxxxxxxx    xxxxxxxxxx it removed the user 'karako', which is weird.
*********************

---------------------------------------------------------------Installing graphite base dependencies
sudo apt-get install libpq-dev
sudo apt-get install python-dev python-pip python-cairo python-psycopg2
sudo apt-get install python-django python-django-tagging
sudo apt-get install postgresql postgresql-client

---------------------------------------------------------------Setup Postgresql
--------------------------------------------------------------------------Start the postgresql service:
sudo service postgresql start
--------------------------------------------------------------------------Create a user and database for graphite:
sudo -u postgres createuser graphite
sudo -u postgres createdb -O graphite graphite
--------------------------------------------------------------------------Change the password of the postgres and graphite users:
sudo -u postgres psql -d template1
    ALTER USER postgres WITH PASSWORD 'admin';
    ALTER USER graphite WITH PASSWORD 'admin';
    
    **** ->> I use password 'admin' this is the full screen, you write after prompt "template1=# " and press {ENTER}, you write \\q to exit.
    **************************************************************
    *    psql (9.1.10)
    *    Type "help" for help.
    *
    *    template1=# ALTER USER postgres WITH PASSWORD 'admin';
    *    ALTER ROLE
    *    template1=# ALTER USER graphite WITH PASSWORD 'admin';
    *    ALTER ROLE
    *    template1=# \\q
    **************************************************************

---------------------------------------------------------------Install Graphite
sudo pip install carbon
sudo pip install whisper
sudo pip install graphite-web
---------------------------------------------------------------Graphite configuration
--------------------------------------------------------------------------1. Removing pyc's. For some reason, there are pyc files in the webapp. Let's delete those:
cd /opt/graphite/webapp/graphite
sudo rm `find -name "*.pyc"`
--------------------------------------------------------------------------2. Database. Here you will want to edit the settings file so that graphite can connect to postgesql. First you have to create a copy of the example settings file:
cd /opt/graphite/webapp/graphite
sudo cp local_settings.py{.example,}
--------------------------------------------------------------------------** modify database connection. Here's what you probably want to modify in config:
sudo gedit local_settings.py
    fill the database configuration, notice 'admin' is the db password I use. and change 'ENGINE' too..


#DATABASES = {
#    'default': {
#        'NAME': '/opt/graphite/storage/graphite.db',
#        'ENGINE': 'django.db.backends.sqlite3',
#        'USER': '',
#        'PASSWORD': '',
#        'HOST': '',
#        'PORT': ''
#    }
#}
#
------------------------------>take a long string from here instead "https://api.wordpress.org/secret-key/1.1/salt/"
SECRET_KEY = '1234567890abcdef'
........

DATABASES = {
    'default': {
        'NAME': 'graphite',
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'USER': 'graphite',
        'PASSWORD': 'admin',
        'HOST': 'localhost',
        'PORT': '5432'
    }
}

#########################
# Cluster Configuration #
#########################
# (To avoid excessive DNS loo

------------------------------>optionally set memcached options

--------------------------------------->edit local_settings.py again: **since we are not using clustering we can use loopback address (127.0.0.1)
sudo gedit local_settings.py

locate:
    # You should not use the loopback address (127.0.0.1) here if using clustering
    # as every webapp in the cluster should use the exact same values to prevent
    # unneeded cache misses. Set to [] to disable caching of images and fetched data
    #MEMCACHE_HOSTS = ['10.10.10.10:11211', '10.10.10.11:11211', '10.10.10.12:11211']
    #DEFAULT_CACHE_DURATION = 60 # Cache images and data for 1 minute

replace with:
    # You should not use the loopback address (127.0.0.1) here if using clustering
    # as every webapp in the cluster should use the exact same values to prevent
    # unneeded cache misses. Set to [] to disable caching of images and fetched data
    MEMCACHE_HOSTS = ['127.0.0.1:11211']
    DEFAULT_CACHE_DURATION = 60 # Cache images and data for 1 minute

--------------------------------------->install memcached and memcached-components (for graphite only, we will not deal with postgreSQL for now!!!)
sudo apt-get install libevent-dev libmemcached-dev
sudo apt-get install memcached python-memcache 

xxx   optional                        
xxx   optional                        -------------------------------------------->install
xxx   optional                        sudo apt-get install libevent-dev libmemcached-dev
xxx   optional                        sudo apt-get install memcached python-memcache 
xxx   optional                        sudo wget http://pgfoundry.org/frs/download.php/3018/pgmemcache_2.0.6.tar.bz2
xxx   optional                        sudo tar -xvf pgmemcache_2.0.6.tar.bz2 
xxx   optional                        cd pgmemcache/
xxx   optional                        sudo ./configure
xxx   optional                        sudo make
xxx   optional                        sudo make install
xxx   optional                        -------------------------------------------->make sure it runs on port 11211 (by default it is localhost:11211)
xxx   optional                        ps aux | grep memcache
xxx   optional                        -------------------------------------------->check memcache stats by typing:
xxx   optional                        echo "stats settings" | nc localhost 11211
xxx   optional                        -------------------------------------------->we don't use memcached for check memcache stats by typing:
xxx   optional                        
xxx   optional                        continue with later: http://raghavt.blogspot.co.il/2011/07/pgmemcache-setup-and-usage.html




---------------------------------------------------->download pgAdmin III and test the connection.
--------------------------------------------------------------------------** After you are done, you have to tell Django to populate the database:
sudo python manage.py syncdb

        --->will tell you:
            Creating tables ...
            Creating table account_profile
            Creating table account_variable
            Creating table account_view
            Creating table account_window
            Creating table account_mygraph
            Creating table dashboard_dashboard_owners
            Creating table dashboard_dashboard
            Creating table events_event
            Creating table auth_permission
            Creating table auth_group_permissions
            Creating table auth_group
            Creating table auth_user_groups
            Creating table auth_user_user_permissions
            Creating table auth_user
            Creating table django_session
            Creating table django_admin_log
            Creating table django_content_type
            Creating table tagging_tag
            Creating table tagging_taggeditem

            You just installed Django's auth system, which means you don't have any superusers defined.
            Would you like to create one now? (yes/no): 


------> I've used u:"root" p:"admin", no email.
            You just installed Django's auth system, which means you don't have any superusers defined.
            Would you like to create one now? (yes/no): yes
            Username (leave blank to use 'root'): 
            Email address: 
            Password: 
            Password (again): 
            Superuser created successfully.
            Installing custom SQL ...
            Installing indexes ...
            Installed 0 object(s) from 0 fixture(s)
            elad@elad-VirtualBox:/opt/graphite/webapp/graphite$ 


---------------------------------------------------------------Carbon configuration
cd /opt/graphite/conf

-------------------------------------------------------------------------- Let's create copies of some conf files:
sudo cp carbon.conf{.example,}
sudo cp storage-schemas.conf{.example,}
-------------------------------------------------------------------------- make carbon listen to localhost, which is a good idea since we've used local DB.  and carbon's job is to make that data available for real-time graphing immediately and try to get it stored on disk as fast as possible.
sudo gedit ./carbon.conf
    --> search replace 0.0.0.0
        with 127.0.0.1
        
-------------------------------------------------------------------------- make carbon listen to localhost, which is a good idea since we've used local DB.  and carbon's job is to make that data available for real-time graphing immediately and try to get it stored on disk as fast as possible.
sudo gedit ./storage-schemas.conf
default:
    *****************************************************************************************
        # Schema definitions for Whisper files. Entries are scanned in order,
        # and first match wins. This file is scanned for changes every 60 seconds.
        #
        #  [name]
        #  pattern = regex
        #  retentions = timePerPoint:timeToStore, timePerPoint:timeToStore, ...

        # Carbon's internal metrics. This entry should match what is specified in
        # CARBON_METRIC_PREFIX and CARBON_METRIC_INTERVAL settings
        [carbon]
        pattern = ^carbon\\.
        retentions = 60:90d

        [default_1min_for_1day]
        pattern = .*
        retentions = 60s:1d
    *****************************************************************************************
        xxxx				replace with:
        xxxx				    ***************************************************************************************** -------->That translates to: 6 hours of 10 second data (what we consider "near-realtime"), 1 week of 1 minute data, 5 years of 10 minute data
        xxxx				# Schema definitions for Whisper files. Entries are scanned in order,
        xxxx				# and first match wins. This file is scanned for changes every 60 seconds.
        xxxx				#
        xxxx				#  [name]
        xxxx				#  pattern = regex
        xxxx				#  retentions = timePerPoint:timeToStore, timePerPoint:timeToStore, ...
        xxxx				
        xxxx				# Carbon's internal metrics. This entry should match what is specified in
        xxxx				# CARBON_METRIC_PREFIX and CARBON_METRIC_INTERVAL settings
        xxxx				#[carbon]
        xxxx				#pattern = ^carbon\\.
        xxxx				#retentions = 60:90d
        xxxx				#
        xxxx				#[default_1min_for_1day]
        xxxx				#pattern = .*
        xxxx				#retentions = 60s:1d
        xxxx				[stats]
        xxxx				priority = 110
        xxxx				pattern = ^stats\\..*
        xxxx				retentions = 10:2160,60:10080,600:262974
        xxxx				    *****************************************************************************************
replace with:
[stats]
priority = 110
pattern = ^stats\\..*
retentions = 5:3h,10:6h,60:14d,600:2y

-------------------------------------------------------------------------- We'll make a directory to store all the example configs, to clean up things:
sudo mkdir examples
sudo mv *.example examples/


---------------------------------------------------------------Permissions
-------------------------------------------------------------------------- Let's create a graphite user:
sudo adduser graphite
---> use password:"admin"
-------------------------------------------------------------------------- make it root. 
>>>go to configurations and set user to be "admin".
-------------------------------------------------------------------------- skip entering password for root (this is just for fun):
sudo EDITOR=gedit visudo
>>add at the end of the file:
graphite ALL=(ALL) NOPASSWD: ALL

-------------------------------------------------------------------------- Then, lets make him own the graphite install:
sudo chown -R graphite:graphite /opt/graphite
---------------------------------------------------------------Starting up Graphite
-------------------------------------------------------------------------- Log in as the graphite user:
su graphite
---> use password:"admin"
-------------------------------------------------------------------------- Starting carbon:
sudo python /opt/graphite/bin/carbon-cache.py start

--------------->>>> problem:
                        elad@elad-VirtualBox:/opt/graphite/webapp/graphite$ sudo python /opt/graphite/bin/carbon-cache.py start
                        /usr/lib/python2.7/dist-packages/zope/__init__.py:3: UserWarning: Module twisted was already imported from /usr/local/lib/python2.7/dist-packages/twisted/__init__.pyc, but /opt/graphite/lib is being added to sys.path
                          import pkg_resources
                        Traceback (most recent call last):
                          File "/opt/graphite/bin/carbon-cache.py", line 28, in <module>
                            from carbon.util import run_twistd_plugin
                          File "/opt/graphite/lib/carbon/util.py", line 21, in <module>
                            from twisted.scripts._twistd_unix import daemonize
                        ImportError: cannot import name daemonize
                        elad@elad-VirtualBox:/opt/graphite/webapp/graphite$ 

---------------->>>> because we need older version of twisted: https://github.com/graphite-project/carbon/blob/master/requirements.txt install older version
sudo pip install 'Twisted<12.0'

---------------->>> and again:
sudo python /opt/graphite/bin/carbon-cache.py start

-------------------------------------------------------------------------- Starting the Graphite server (Run the web interface under the django development server)
sudo python /opt/graphite/bin/run-graphite-devel-server.py /opt/graphite


--------------------------------------- browse it..  it will be available locally for now.
http://localhost:8080



::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::********************************************************************::::
::::****    you can't use run-graphite-devel-server.py on production    ::::
::::****              set an internal server using gunicorn.            ::::
::::********************************************************************::::
****************************************************************************
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



---------------------------------------------------------------------------------------------------------------------:::::::::::::::::::::::::::: using http://www.ghanei.net/graphite


--------------------------------------- production internal server (not Apache, not nginx - gunicorn) ----- using http://www.ghanei.net/graphite
Graphite comes with a sample WSGI entry point file in /opt/graphite/conf/graphite.wsgi.example. Copy this file to /opt/graphite/conf/graphite_wsgi.py and then start gunicorn:

sudo pip install gunicorn
cd /opt/graphite/conf/
sudo cp ./examples/graphite.wsgi.example ./graphite_wsgi.py
---------------------------------------------- optional--------------- sudo gedit graphite_wsgi.py

--------------------------------------- run gunicorn as a server, that accepts outside connections (don't use 127.0.0.1- use 0.0.0.0)
gunicorn -b '0.0.0.0:8080' -u graphite -g graphite -w 2 graphite_wsgi:application
or
gunicorn --bind '0.0.0.0:8080' --user graphite --group graphite --workers 2 graphite_wsgi:application

****for your information:
            usage: gunicorn [OPTIONS] [APP_MODULE]

            optional arguments:
              -h, --help            show this help message and exit
              -v, --version         show program's version number and exit
              --proxy-protocol      Enable detect PROXY protocol (PROXY mode). [False]
              --worker-connections INT
                                    The maximum number of simultaneous clients. [1000]
              --pythonpath STRING   A directory to add to the Python path. [None]
              -R, --enable-stdio-inheritance
                                    Enable stdio inheritance [False]
              -k STRING, --worker-class STRING
                                    The type of workers to use. [sync]
              --access-logfile FILE
                                    The Access log file to write to. [None]
              --log-syslog-facility SYSLOG_FACILITY
                                    Syslog facility name [user]
              --log-syslog          Log to syslog. [False]
              --preload             Load application code before the worker processes are
                                    forked. [False]
              -w INT, --workers INT
                                    The number of worker process for handling requests.
                                    [1]
              --graceful-timeout INT
                                    Timeout for graceful workers restart. [30]
              --keep-alive INT      The number of seconds to wait for requests on a Keep-
                                    Alive connection. [2]
              -D, --daemon          Daemonize the Gunicorn process. [False]
              -p FILE, --pid FILE   A filename to use for the PID file. [None]
              -u USER, --user USER  Switch worker processes to run as this user. [1001]
              -g GROUP, --group GROUP
                                    Switch worker process to run as this group. [1002]
              --spew                Install a trace function that spews every line
                                    executed by the server. [False]
              -n STRING, --name STRING
                                    A base to use with setproctitle for process naming.
                                    [None]
              -m INT, --umask INT   A bit mask for the file mode on files written by
                                    Gunicorn. [0]
              --limit-request-fields INT
                                    Limit the number of HTTP headers fields in a request.
                                    [100]
              -c FILE, --config FILE
                                    The path to a Gunicorn config file. [None]
              --access-logformat STRING
                                    The Access log format . [%(h)s %(l)s %(u)s %(t)s
                                    "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s"]
              --logger-class STRING
                                    The logger you want to use to log events in gunicorn.
                                    [simple]
              --log-config FILE     The log config file to use. [None]
              --check-config        Check the configuration.. [False]
              --chdir CHDIR         Chdir to specified directory before apps loading.
                                    [/opt/graphite/conf]
              --proxy-allow-from PROXY_ALLOW_IPS
                                    Front-end's IPs from which allowed accept proxy
                                    requests (comma separate). [127.0.0.1]
              --max-requests INT    The maximum number of requests a worker will process
                                    before restarting. [0]
              --settings STRING     The Python path to a Django settings module.
                                    (deprecated) [None]
              --limit-request-line INT
                                    The maximum size of HTTP request line in bytes. [4094]
              --certfile FILE       SSL certificate file [None]
              --paster STRING       Load a paste.deploy config file. [None]
              --error-logfile FILE, --log-file FILE
                                    The Error log file to write to. [-]
              --log-level LEVEL     The granularity of Error log outputs. [info]
              --log-syslog-to SYSLOG_ADDR
                                    Address to send syslog messages [udp://localhost:514]
              --log-syslog-prefix SYSLOG_PREFIX
                                    makes gunicorn use the parameter as program-name in
                                    the syslog entries. [None]
              -b ADDRESS, --bind ADDRESS
                                    The socket to bind. [['127.0.0.1:8000']]
              -e ENV, --env ENV     Set environment variable (key=value). [[]]
              --limit-request-field_size INT
                                    Limit the allowed size of an HTTP request header
                                    field. [8190]
              -t INT, --timeout INT
                                    Workers silent for more than this many seconds are
                                    killed and restarted. [30]
              --debug               Turn on debugging in the server. [False]
              --keyfile FILE        SSL key file [None]
              --backlog INT         The maximum number of pending connections. [2048]

--------------------------------------- handling permission denied warnings:
sudo chmod -R a+w /opt/graphite/storage
--------------------------------------- try again:
gunicorn -b '0.0.0.0:8080' -u graphite -g graphite -w 2 graphite_wsgi:application
    **** you will see in the console:
        2013-12-23 16:11:22 [6828] [INFO] Starting gunicorn 18.0
        2013-12-23 16:11:22 [6828] [INFO] Listening at: http://0.0.0.0:8080 (6828)
        2013-12-23 16:11:22 [6828] [INFO] Using worker: sync
        2013-12-23 16:11:22 [6833] [INFO] Booting worker with pid: 6833
        2013-12-23 16:11:22 [6834] [INFO] Booting worker with pid: 6834


--------------------------------------- browse it
http://localhost:8080





1. סינכרון דאטהבייס
sudo python /opt/graphite/bin/carbon-cache.py stop
sudo python /opt/graphite/webapp/graphite/manage.py syncdb

sudo python /opt/graphite/bin/carbon-cache.py start
cd /opt/graphite/conf/
su graphite
-------------->use pass "admin"
sudo gunicorn -b '0.0.0.0:8080' -u graphite -g graphite -w 2 graphite_wsgi:application







x        --------------------------------------- control services controller
x        ----------------------------------------------------- control services controller: gunicorn, carbon-cache: http://www.michael-noll.com/blog/2013/06/06/installing-and-running-graphite-via-rpm-and-supervisord/
x        sudo apt-get install supervisor
x        ----------------------------------------------------- config: http://thecolinblog.blogspot.co.il/2012/05/supervisor-entries-for-graphite.html tells me how to set supervisor to control all graphite processes - supervisord.conf file:
x        [program:graphite]
x        ; django gunicorn instance for graphite
x        command=/home/someuser/devel/graphite/bin/gunicorn_django --config=/home/someuser/devel/graphite/etc/gunicorn.py --pid=/home/someuser/devel/graphite/var/gunicorn.pid webapp/graphite/
x        environment=PYTHONPATH="/home/someuser/devel/graphite"
x        user=someuser
x        autostart=true
x        autorestart=true
x        directory=/home/someuser/devel/graphite/
x         
x        [program:carbon]
x        ; this is the only way to get carbon to start
x        ; in a manner that supervisor understands.
x        ; --debug is REQUIRED (apparently)
x        ;;;;;;command=/home/someuser/devel/graphite/bin/carbon-cache.py --debug start
x        command=/home/someuser/devel/graphite/bin/carbon-cache.py --nodaemon start
x        directory=/home/someuser/devel/graphite/
x        environment=PYTHONPATH="/home/someuser/devel/graphite"
x        user=cdcd
x        autostart=true
x        autorestart=true
x
x
x        -------------------------------------better: https://gist.github.com/bhang/3004142
x        supervisord_graphite_statsd.conf
x                        [program:gunicorn-graphite]
x                        command=/usr/local/bin/gunicorn_django -u www-data -g www-data -b 127.0.0.1:8080 --log-file=/opt/graphite/storage/log/webapp/gunicorn.log /opt/graphite/webapp/graphite/settings.py
x                        process_name=%(program_name)s
x                        autostart=true
x                        autorestart=true
x                        stopsignal=QUIT
x                        user=www-data
x                         
x                        [program:carbon-cache]
x                        command=python /opt/graphite/bin/carbon-cache.py --debug start
x                        process_name=%(program_name)s
x                        autostart=true
x                        autorestart=true
x                        stopsignal=QUIT
x                         
x                        [program:statsd]
x                        command=/usr/bin/node /opt/statsd/stats.js /opt/statsd/localConfig.js
x                        process_name=%(program_name)s
x                        autostart=true
x                        autorestart=true
x                        stopsignal=QUIT
x                        user=www-data
x
x
x
x        ----------------
x
x
x
x        --------------------------------------- work with Apache on other stuff
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x
x        ======================================================== after changing the storage-schemas.conf:
x        ** give graphite superuser so it could do this:
x        sudo /etc/init.d/memcached status
x        sudo /etc/init.d/memcached restart
x
x        sudo python /opt/graphite/webapp/graphite/manage.py syncdb
x        sudo python /opt/graphite/bin/carbon-cache.py stop
x        sudo python /opt/graphite/bin/carbon-cache.py status
x        sudo python /opt/graphite/bin/carbon-cache.py start
x        gunicorn -b '0.0.0.0:8080' -u graphite -g graphite -w 2 graphite_wsgi:application
x
x
x
x        #------------------------->start nodejs/statsd
x        #
x        #cd /opt/graphite/statsd
x        #nohup /usr/local/bin/node stats.js local.js &
x        #
x
x        -----------------------------------------------------> render data:
x        run or edit:
x        sudo gedit /opt/graphite/examples/example-client.py
x        sudo /opt/graphite/examples/example-client.py



1. סינכרון דאטהבייס
sudo python /opt/graphite/bin/carbon-cache.py stop
sudo python /opt/graphite/webapp/graphite/manage.py syncdb

sudo python /opt/graphite/bin/carbon-cache.py start
cd /opt/graphite/conf/
su graphite
-------------->use pass "admin"
sudo gunicorn -b '0.0.0.0:8080' -u graphite -g graphite -w 2 graphite_wsgi:application









--------------------------------------------------make carbon open outside:
cd /opt/graphite/conf
sudo gedit carbon.conf
    --->search replace every 127.0.0.1 to 0.0.0.1
    run: --- to restart all services
            #!/bin/bash
            GRAPHITEPASSWORD=admin

            ## kill carbon-cache(carbon-cache maintains data-stream on postgreSQL)
            sudo python /opt/graphite/bin/carbon-cache.py stop

            ## make sure command completed signal...
            sleep 1

            ## sync database
            sudo python /opt/graphite/webapp/graphite/manage.py syncdb

            ## make sure command completed signal...
            sleep 1

            ## restart carbon-cache
            sudo python /opt/graphite/bin/carbon-cache.py start

            ## make sure command completed signal...
            sleep 1

            ## run graphite through 'graphite' username, it is important.
            cd /opt/graphite/conf/

            ## killing nicely all old instances
            sudo pkill gunicorn

            ## make sure command completed signal...
            sleep 1

            echo $GRAPHITEPASSWORD | sudo -S gunicorn -b '0.0.0.0:8080' -u graphite -g graphite -w 2 graphite_wsgi:application




=-=-=-
postgreSQL
http://www.postgresql.org





=-=-=-=-=-=-=-=-12:48 יום רביעי 25 דצמבר 2013
using logstash statsd to send metrics to graphite
http://puppetlabs.com/blog/using-logstash-push-metrics-graphite














============================================================= שינוי ארכיטקטורת מידע לסקופ של שנייה אחת

[ctrl + c] to stop gunicorn server.
pkill gunicorn
sudo python /opt/graphite/bin/carbon-cache.py stop
sudo /etc/init.d/memcached stop
sudo rm -rf /opt/graphite/storage/whisper/stats*

sudo gedit /opt/graphite/conf/storage-schemas.conf
        [real_time]
        priority = 200
        pattern = ^stats.*
        retentions = 1:34560000
--------------------------------------------
------------------------------------------------------------------------ install statsd
sudo apt-get install git nodejs npm redis-server fonts-droid
cd /opt/
sudo git clone https://github.com/etsy/statsd.git
cd statsd
sudo cp exampleConfig.js localConfig.js

------------------------------------------------------------------------ config statsd
sudo gedit localConfig.js
        {
          graphitePort: 2003
        , graphiteHost: "localhost"
        , port: 8125
        , backends: [ "./backends/graphite" ]
        , flushInterval: 1000
        }
------------------------------------------------------------------------ memcache and graphite config
cd /opt/graphite/webapp/graphite
sudo gedit local_settings.py
    DEFAULT_CACHE_DURATION = 1 # cache for 1 sec

cd /opt/graphite/webapp/content/js/
sudo gedit composer_widgets.js

---- locate "toggleAutoRefresh" at line 1010, locate "var interval = 60" change to "var interval = 1"










------------------------------------------------------------------ שינוי ארכיטקטורת מידע לפחות מקום 15:59 יום שלישי 31 דצמבר 2013
sudo nano /opt/graphite/conf/storage-schemas.conf
**********************************
[real_time]
priority = 200
pattern = ^stats.*
retentions = 1:1h,10:6h,60:14d
**********************************




------------------------------------------------------------------ 08:46 יום רביעי 01 ינואר 2014 installing graphiti
cd /opt/
sudo git clone https://github.com/paperlesspost/graphiti.git
sudo apt-get install ttf-droid

---------------------------------------rvm installation steps
su graphite
---->pass is admin
sudo curl -L get.rvm.io | sudo bash -s stable
sudo source /etc/profile.d/rvm.sh

---------------------------------------check rvm "need to have list"
sudo rvm requirements

-------------------------------------------- can be diffrent!
sudo apt-get install build-essential openssl libreadline6 libreadline6-dev curl git-core zlib1g zlib1g-dev libssl-dev libyaml-dev 
sudo apt-get install libsqlite3-dev sqlite3 libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev automake libtool bison subversion
sudo apt-get install libcurl4-gnutls-dev

-------------------------------------------- prepare two ruby version (needed for regular and ruby gems)
sudo rvm install 1.8.7
sudo rvm use 1.8.7
sudo rvm install 1.9.3
sudo rvm use 1.9.3

sudo gem install bundle
sudo bundle install














xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
כל מה שמתחת לשורה זו הוא אקסטרה והערות
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



----------------------------------------------------- run everything as graphite:graphite
su graphite
---- pass "admin
sudo chown -R graphite:graphite /opt/graphite

---------------------------------------------open another terminal
su graphite
sudo /etc/init.d/memcached start
sudo python /opt/graphite/bin/carbon-cache.py start
sudo python /opt/graphite/webapp/graphite/manage.py cleanup
sudo python /opt/graphite/webapp/graphite/manage.py syncdb
cd /opt/graphite/conf/
echo admin | sudo -S gunicorn -b '0.0.0.0:8080' -u graphite -g graphite -w 2 graphite_wsgi:application

---------------------------------------------open another terminal
cd /opt/statsd
sudo nodejs stats.js localConfig.js
---keep window running, connections will be available in graphitevm1.myCompanyHost.com:8125


-----------------------------------------------------------------------------------------------------------------------------------------------
:?איך לשלוח מידע
-------------------------------------------------->הוראות http://www.stackdriver.com/sending-aggregates-with-statsd/
------------------------------------- go to mockbrain.myCompanyHost.com
sudo apt-get install python-pip
sudo pip install statsd
sudo nano /etc/hosts
#there is no DNS available, since IT support sucks....
172.29.40.112 elad1bigip.myCompanyHost.com      ############## management 172.29.40.112, self ip 172.29.42.103 virtual server 172.29.42.113
172.29.42.110 mockbrain.myCompanyHost.com
172.29.42.112 graphite1.myCompanyHost.com #note: this ip will be changed soon...
172.29.42.112 graphitevm1.myCompanyHost.com #note: this ip will be changed soon...
172.29.42.214 winmachine.myCompanyHost.com

--------------------------------------------------create information stream to statsd
cd ~
sudo touch send_data_so_statsd_graphite.py
--------------------------------
sudo gedit send_data_so_statsd_graphite.py
--------------------------------
#!/usr/bin/python

import random
import time
import statsd
import math
sc = statsd.StatsClient('graphite1.myCompanyHost.com', 8125)
while True:
    sc.incr('test_statsd_metrics.test_counter')
    sc.timing('test_statsd_metrics.test_timer', math.floor(random.random() * 100))
    sc.gauge('test_statsd_metrics.test_gauge', math.floor(random.random() * 100))
    time.sleep(random.random())
--------------------------------

sudo python send_data_so_statsd_graphite.py

-------------------------------------------------------- install python statsd lib
------------ follow http://www.stackdriver.com/sending-aggregates-with-statsd/ instructions:
------------------------------------------------------------------------------------------------













-------------- אולי אפשר לעבור לזה:
https://github.com/gingerlime/graphite-fabric
זה התקנה מאוחדת של גרפייט

whisper-clean.py





















תחזוקה

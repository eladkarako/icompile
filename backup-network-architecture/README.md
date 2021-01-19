Backup
<pre>
netsh -c interface dump > c:\\NetworkSettings.txt
</pre>

Restore
<pre>
netsh -f C:\\NetworkSettings.txt
</pre>
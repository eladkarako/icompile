The following example uses a Samsung Galaxy S4 that has been updated over-the-air (OTA is the standard update-pushing method) to Lollipop 5.0.1.

- Before every thing you should export all information available using <a href="https://play.google.com/store/apps/details?id=org.vndnguyen.phoneinfo" target="_blank"><img src="https://lh3.googleusercontent.com/eldBokSOkY5Gc5MbrI_0vJv-hE3p_QU2YJTko3OuZjWKvYLYErUzloc8HwRl1MzEFQ=w300-rw" width="20" height="20"/> Phone INFO ★Samsung★</a> preferbly the pro version which allows exporting the to text file.

- download the suitable or the latest Android 5.0.1 from <a href="http://www.sammobile.com" target="_blank">www.sammobile.com</a>, I have actually flashed it (it is original stock one) to make sure it works ok.
I've used this one: <a href="http://www.sammobile.com/firmwares/download/57455/I9500XXUHOI1_I9500OJKHOI1_CEL/" target="_blank">http://www.sammobile.com/firmwares/download/57455/I9500XXUHOI1_I9500OJKHOI1_CEL/</a>

- ok it worked,
- on my PC I've extracted the I9500XXUHOI1_I9500OJKHOI1_I9500XXUHOG1_HOME.tar.md5 / modem.bin
- copied it to c:\\cygwin\\home\\Elad opened cygwin and compressed it to tar using <pre>tar -H ustar -c modem.bin >MODEM_I9500.tar</pre> following with adding the checksum and renaming it: <pre>md5sum -t MODEM_I9500.tar >>MODEM_I9500.tar</pre> <pre>mv MODEM_I9500.tar MODEM_I9500.tar.md5</pre>

I've looked around the web for Cellcom firmwares of 4.4.2 and found a few.
I've downloaded ALL OF THEM! (about 1.6GB each from file sharing websites, on 50KB for about 9 hours each, using automated downloader named jDownloader -- making sleep time useful ;)  )

I've used I9500XXUGNH4_I9500OJKGNI1_I9500JKUGNH1_HOME.tar.md5 and Odin3_v3.10.7 by Samsung,
right after that I've restarted the phone, and waited full 5 minutes
and came back to flash MODEM_I9500.tar.md5

came back for the third time to download mode, and I've flashed custom recovery twrp-2.8.7.0-i9500.img.tar again reboot and download mode (don't tempt to do more than one single flash action!!!)

for the 4th time is flashed CF-Auto-Root-ja3g-ja3gxx-gti9500.tar.md5
rebooted the phone and than rebooted again to recovery-mode, 

Then I've cleaned /data /cache (this includes the dalvik cache too naturally..) and restarted the phone,

at this point you should allow the grant method in super-user apk (already installed) and allow boot su, and disable clickjacking protection since it is very buggy.

time to install XPOSED framework / standard stuff

(consider buying super user pro to support the super-user developer)
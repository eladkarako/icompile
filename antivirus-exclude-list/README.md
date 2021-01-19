It should be perfectly safe to exclude some folders from your anti-virus processing.
Have a look below, my notes/comments should help you understand the generic state-of mind and then you can apply the same reasoning to modify or add other items.

<!--more-->
<pre>
On every Windows-7+ PC:
C:\\System Volume Information\\*.*
C:\\$Recycle.Bin\\*.*
C:\\Config.Msi\\*.*
C:\\Recovery\\*.*
C:\\Windows\\Fonts\\*.*    (will kill your CPU with useless scans)
C:\\hiberfil.sys                 those files should never be scanned
C:\\pagefile.sys                 if locked by mistake or modified, you are looking forward to a BSOD...

------repeate the list-above for EACH hard-disk partition you have (D, E, F,...)-----


If you have an IBM/Lenovo PC:
C:\\DRIVERS\\*.*
C:\\SWTOOLS\\*.*

A Developer:
C:\\My_source_codes\\*.*    never allow to an anti-virus to walk through your files,
                          especially if your code should be private,
                          a lot of patterns found when linking/building exe files will
                          trigger sending a sample of the file to the anti-virus-resource-center.
                          also, building programs will generate a lot of I/O,
                          and some of the obfuscation modules used to protect an execute from hacking,
                          is considered a malware-like pattern: UPX, Armadillo, ASPack, ASProtect,...
                          or even modified LIB files! be safe and exclude it all!!!

C:\\My_SVN_REPO            Windows with TortoiseGit/TortoiseSVN
C:\\My_GIT_REPO            will kill your CPU if not excluded!
C:\\Program Files\\TortoiseGit    Tortoise* will often cycle through the repositories to
C:\\Program Files\\TortoiseSVN    update the icons, and will generate a lot of anti-virus attention!!!
                          
C:\\Dropbox\\*.*      (or whatever you call it - a lot of I/O if you won't exclude it!)
C:\\cygwin\\*.*       (a LOT (!) of small files, and archives, will kill your CPU!)
C:\\cg_cache\\*.*     (or whatever you call it - a lot of archives with each having a LOT of small files)
C:\\git32\\*.*
C:\
odejs32\\*.*
C:\\OpenSSL-Win64\\*.*
C:\\Perl64\\*.*
C:\\Python27\\*.*
C:\\xampp\\*.*
C:\\www\\*.*
C:\\vm\\*.*           (or whatever you name your VirtualBox/VMware/... storage - a lot of disk action!)

Just A User:
C:\\All_My_Setups\\*.*   (or whatever you name your "programs/software install and setup-storage",
                        things like ISO, RAR, ZIP files takes a lot of time to unwrap 
                        and if found a minor something, will often move the entire huge file
                        to quarantine, which may be on another partition, which will kill your CPU and
                        make overall moving/copying file very slow, and later you'll have to deal with
                        bringing the huge files out of quarantine, again..

Browser's exe (not user-profile!)
C:\\Users\\Elad\\AppData\\Local\\Chromium\\Application\\*.*    Chrome, Firefox keep the application part
C:\\Program Files\\Google\\Chrome\\*.*                      and user files in different folders,
C:\\Program Files\\Mozilla Firefox\\*.*                    if you use them a lot, this will trigger the anti-virus
                                                        with the "on execute" scan, slowing things for you..
                                                        New versions of Chrome and Firefox uses multi-process,
                                                        which mean they will open another process of Chrome (for example),
                                                        to render a video, and close it again, this is usually a low risk,
                                                        especially if you don't use online/peer/port scanner, and you're
                                                        happy with the standard scanning.
                                                        Do not exclude the user-profile (usually placed in the AppData folder),
                                                        since when you'll browse bad websites, the cache/temp files might include
                                                        a risky JavaScript or nasty flash-file.. so let your anti-virus scan those!

Custom Network Drivers:
C:\\Program Files\\PeerBlock\\*.*          those programs uses a kernel-driver
C:\\Program Files\\NetLimiter\\*.*         to monitor the connections, if you won't exclude those,
C:\\Program Files\\Wireshark\\*.*          you will probably get a BSOD or an error, or a VERY slow network!

"A lot of I/O" programs:
C:\\Program Files\\Locate32\\*.*           a search program will run through your files every now and again
                                        to index them, this will trigger a nasty slowing down effect.

Defrag/Scan-disk programs               you may or may not want to add those programs to your exclude list,
C:\\Windows\\System32\\dfrgui.exe          granted, those are a good target to be infected with a virus or a malware,  
C:\\Windows\\SysWOW64\\dfrgui.exe          but those are also generating extremely deep processes,
C:\\Windows\\System32\\Defrag.exe          defrag/scan programs are not directly changing the disk, they use Windows' API for that
C:\\Windows\\SysWOW64\\Defrag.exe          but they are still sensitive to lags, and are generating intensive I/O, which 
C:\\Program Files\\JkDefrag\\*.*           will make your anti-virus crazy... unless you're having an anti-virus that knows
C:\\Program Files\\MyDefrag\\*.*           to avoid Microsoft-signed applications (ESET/AVG knows..)
C:\\Windows\\System32\\chkdsk.exe
C:\\Windows\\SysWOW64\\chkdsk.exe

Network/Disk/ I/O intensive programs
C:\\Program Files\\uTorrent\\*.*           every file-sharing programs, should be excluded,
C:\\Program Files\\Vuze\\*.*               but never the downloaded files!
                                        the random port/connection rate especially for an anti-virus with
                                        firewall-like monitoring/capabilities will drive it crazy!




Naturally read the description,
and don't copy-paste blindly the path into your anti-virus exclude-list.
Some the paths brought-here are to illustrate to you the generic-name
of the product,

for example in the section above,
with the path to the Chrome-browser,
you may add the paths to other browsers,
for example: Google-Chrome Canary "C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\Application\\*.*"

In addition make sure you agree with each and every one of the items
you are going to add to your exclude-list!
</pre>
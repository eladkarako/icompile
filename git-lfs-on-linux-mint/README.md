<img src="https://icompile.eladkarako.com/_uploads/2017/06/icompile.eladkarako.com_git_lfs_logo.png" alt="" width="223" height="223" />

<img src="https://icompile.eladkarako.com/_uploads/2017/06/icompile.eladkarako.com_solved_linux_mint_version.png" alt="" width="318" height="199"/>

<!--more-->


<ul>
<li>Start with entering into higher-permission state using <code>su -</code>.
<hr/>
It will make the following commands shorter,
and this way you won't need <code>sudo</code>,

it will also make sure internal-commands in the <code>sh</code>-file (below) will succeed,
otherwise they will fail.. silently.. :/
</li>

<li>Follow:
<a href="https://icompile.eladkarako.com/solved-linux-mint-and-debian-packages/">Solved: Linux Mint And Debian Packages <sub><em>(https://icompile.eladkarako.com/solved-linux-mint-and-debian-packages/)</em></sub></a>,
it will ensure you can access Debian-packages server.
</li>

<li>
<code>apt-get -y install software-properties-common</code>
<em>You'll see something like:</em>
<pre>
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following NEW packages will be installed:
  software-properties-common
0 upgraded, 1 newly installed, 0 to remove and 94 not upgraded.
Need to get 5,206 B of archives.
After this operation, 12.3 kB of additional disk space will be used.
Get:1 http://packages.linuxmint.com serena/upstream amd64 software-properties-common all 1.6.4 [5,206 B]
Fetched 5,206 B in 0s (6,165 B/s)                     
Selecting previously unselected package software-properties-common.
(Reading database ... 237010 files and directories currently installed.)
Preparing to unpack .../software-properties-common_1.6.4_all.deb ...
Unpacking software-properties-common (1.6.4) ...
Setting up software-properties-common (1.6.4) ...
</pre>
</li>

<li>
<code>apt-get -y install python-software-properties</code>
<em>You'll see something like:</em>
<pre>
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following NEW packages will be installed:
  python-software-properties
0 upgraded, 1 newly installed, 0 to remove and 94 not upgraded.
Need to get 5,212 B of archives.
After this operation, 12.3 kB of additional disk space will be used.
Get:1 http://packages.linuxmint.com serena/upstream amd64 python-software-properties all 1.6.4 [5,212 B]
Fetched 5,212 B in 0s (5,602 B/s)                       
Selecting previously unselected package python-software-properties.
(Reading database ... 237013 files and directories currently installed.)
Preparing to unpack .../python-software-properties_1.6.4_all.deb ...
Unpacking python-software-properties (1.6.4) ...
Setting up python-software-properties (1.6.4) ...
</pre>
</li>

<li><em>(if you do not have <code>git</code>- install it using <code>apt-get -y install git</code>)</em>)<li>

<code>add-apt-repository -y ppa:git-core/ppa</code>
<em>You'll see something like:</em>
<pre>
You are about to add the following PPA:
 The most current stable version of Git for Ubuntu.

For release candidates, go to https://launchpad.net/~git-core/+archive/candidate .
 More info: https://launchpad.net/~git-core/+archive/ubuntu/ppa
Executing: /tmp/tmp.lHuzOqiTIo/gpg.1.sh --keyserver
hkp://keyserver.ubuntu.com:80
--recv-keys
E1DF1F24
gpg: requesting key E1DF1F24 from hkp server keyserver.ubuntu.com
gpg: key E1DF1F24: public key "Launchpad PPA for Ubuntu Git Maintainers" imported
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
</pre>
</li>

<li>
<code>apt-get -y update</code>
<em>You'll see something like:</em>
<pre>
Hit:1 http://mirror.isoc.org.il/pub/ubuntu xenial InRelease
Hit:2 http://mirror.isoc.org.il/pub/ubuntu xenial-updates InRelease            
Hit:3 http://mirror.isoc.org.il/pub/ubuntu xenial-backports InRelease          
Hit:4 http://ppa.launchpad.net/git-core/ppa/ubuntu xenial InRelease            
Get:5 http://security.ubuntu.com/ubuntu xenial-security InRelease [102 kB]     
Hit:6 http://archive.canonical.com/ubuntu xenial InRelease                     
Hit:7 http://ppa.launchpad.net/webupd8team/atom/ubuntu xenial InRelease        
Hit:8 http://ppa.launchpad.net/webupd8team/experiments/ubuntu xenial InRelease 
Hit:9 http://ppa.launchpad.net/webupd8team/java/ubuntu xenial InRelease        
Ign:10 http://packages.linuxmint.com serena InRelease                          
Hit:11 http://ppa.launchpad.net/webupd8team/nemo/ubuntu xenial InRelease       
Hit:12 http://ppa.launchpad.net/webupd8team/y-ppa-manager/ubuntu xenial InRelease
Hit:13 http://packages.linuxmint.com serena Release                            
Hit:15 https://deb.debian.org/debian wheezy-backports InRelease                
Ign:16 https://deb.debian.org/debian stable InRelease
Hit:17 https://deb.debian.org/debian-security stable/updates InRelease
Hit:18 https://deb.debian.org/debian stable Release
Hit:20 https://packagecloud.io/github/git-lfs/linuxmint serena InRelease       
Fetched 102 kB in 7s (13.4 kB/s)                                               
Reading package lists... Done
</pre>
</li>

<li>
<code>curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash</code>
<em>You'll see something like:</em>
<pre>
Detected operating system as LinuxMint/serena.
Checking for curl...
Detected curl...
Running apt-get update... done.
Installing apt-transport-https... done.
Installing /etc/apt/sources.list.d/github_git-lfs.list...done.
Importing packagecloud gpg key... done.
Running apt-get update... done.

The repository is setup! You can now install packages.
</pre>
</li>

<li>
<code>apt-get -y install git-lfs</code>
<em>You'll see something like:</em>
<pre>
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following NEW packages will be installed:
  git-lfs
0 upgraded, 1 newly installed, 0 to remove and 96 not upgraded.
Need to get 2,671 kB of archives.
After this operation, 10.8 MB of additional disk space will be used.
Get:1 https://packagecloud.io/github/git-lfs/linuxmint serena/main amd64 git-lfs amd64 2.1.1 [2,671 kB]
Fetched 2,671 kB in 53s (49.9 kB/s)                                            
Selecting previously unselected package git-lfs.
(Reading database ... 237016 files and directories currently installed.)
Preparing to unpack .../git-lfs_2.1.1_amd64.deb ...
Unpacking git-lfs (2.1.1) ...
Processing triggers for man-db (2.7.5-1) ...
Setting up git-lfs (2.1.1) ...
Git LFS initialized.
</pre>
</li>

<li>
<code>git lfs install</code>
<em>You'll see something like:</em>
<pre>
Git LFS initialized.
</pre>
</li>

<li>
You can now quit the 'su' state,
using <code>exit</code> command (to go back to your regular user).
<em>And, you might want to restart your machine now :]</em>
</li>

</ul>

Done.

Enjoy!

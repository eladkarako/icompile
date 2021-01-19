get_real_address.sh
list.txt





<pre>
#!/bin/bash

#set -e #break on error
#set -x #echo on

while IFS='' read -r line || [[ -n "$line" ]]; do
  echo -e "$line\
"
  
  [[ "$line" =~ ^#.*$ ]] && continue
  
  echo $(curl --silent --head $line | xargs -0 echo | grep --max-count=1 --only-matching --extended-regexp 'Location\\: .+' | sed -rn 's/Location: (.+)$/\\1/p')
  echo -e "\
"
done < "list.txt"

</pre>

</pre><pre>
#spyware1
http://list.iblocklist.com/lists/bluetack/spyware
#
#spyware2
http://list.iblocklist.com/?list=llvtlsjyoyiczbkjsxpf&fileformat=p2p&archiveformat=gz
#
#proxies - Contains Tor and other open proxies. 
http://list.iblocklist.com/?list=xoebmbyexwuiogmbyprb&fileformat=p2p&archiveformat=gz
#
#badpeers - List of people who have been reported for bad deeds in p2p.
http://list.iblocklist.com/?list=cwworuawihqvocglcoss&fileformat=p2p&archiveformat=gz
#
#hijacked1 - The ranges on this list have been hijacked by people who are spammers, generally up to no good, and who may be involved with other activities which are a threat. 
http://list.iblocklist.com/lists/bluetack/hijacked
#
#hijacked2 - The ranges on this list have been hijacked by people who are spammers, generally up to no good, and who may be involved with other activities which are a threat. 
http://list.iblocklist.com/?list=usrcshglbiilevmyfhse&fileformat=p2p&archiveformat=gz
#
#hijacked3 - The ranges on this list have been hijacked by people who are spammers, generally up to no good, and who may be involved with other activities which are a threat. 
http://list.iblocklist.com/?list=tbnuqfclfkemqivekikv&fileformat=p2p&archiveformat=gz
#
#microsoft
http://list.iblocklist.com/lists/bluetack/microsoft
#
#spider - Intended to be used by webmasters to block hostile spiders from their web sites.
http://list.iblocklist.com/?list=mcvxsnihddgutbjfbghy&fileformat=p2p&archiveformat=gz
#
#bogon1 - This list contains ranges from which no traffic should be appearing on the internet. These ranges are either for internal use of some sort or are address space not currently in use. Be aware that If you have a router, you will need to make exclusions for it and any other addresses on your LAN. 
http://list.iblocklist.com/lists/bluetack/bogon
#
#bogon2 - This list contains ranges from which no traffic should be appearing on the internet. These ranges are either for internal use of some sort or are address space not currently in use. Be aware that If you have a router, you will need to make exclusions for it and any other addresses on your LAN. 
http://list.iblocklist.com/?list=ewqglwibdgjttwttrinl&fileformat=p2p&archiveformat=gz
#
#bogon3 - This list contains ranges from which no traffic should be appearing on the internet. These ranges are either for internal use of some sort or are address space not currently in use. Be aware that If you have a router, you will need to make exclusions for it and any other addresses on your LAN. 
http://list.iblocklist.com/?list=gihxqmhyunbxhbmgqrla&fileformat=p2p&archiveformat=gz
#
#rangetest bluetack - Contains addresses of suspicious IP's that are under investigation.
http://list.iblocklist.com/?list=plkehquoahljmyxjixpu&fileformat=p2p&archiveformat=gz
#
#level-1 1- Companies or organizations who are clearly involved with trying to stop filesharing. Companies which anti-p2p activity has been seen from. Companies that produce or have a strong financial interest in copyrighted material. Government ranges or companies that have a strong financial interest in doing work for governments. Legal industry ranges. Ips or ranges of isps from which anti-p2p activity has been observed.
http://list.iblocklist.com/lists/bluetack/level-1
#
#level-1 2- Companies or organizations who are clearly involved with trying to stop filesharing. Companies which anti-p2p activity has been seen from. Companies that produce or have a strong financial interest in copyrighted material. Government ranges or companies that have a strong financial interest in doing work for governments. Legal industry ranges. Ips or ranges of isps from which anti-p2p activity has been observed.
http://list.iblocklist.com/?list=ydxerpxkpcfqjaybcssw&fileformat=p2p&archiveformat=gz
#
#level-2 1- General corporate ranges. Ranges used by labs or researchers. Proxies.
http://list.iblocklist.com/lists/bluetack/level-2
#
#level-2 2- General corporate ranges. Ranges used by labs or researchers. Proxies.
http://list.iblocklist.com/?list=gyisgnzbhppbvsphucsw&fileformat=p2p&archiveformat=gz
#
#level-3 1- Many portal-type websites. ISP ranges that may be dodgy for some reason. Ranges that belong to an individual, but which have not been determined to be used by a particular company. Ranges for things that are unusual in some way. The level3 list is aka the paranoid list.
http://list.iblocklist.com/lists/bluetack/level-3
#
#level-3 2- Many portal-type websites. ISP ranges that may be dodgy for some reason. Ranges that belong to an individual, but which have not been determined to be used by a particular company. Ranges for things that are unusual in some way. The level3 list is aka the paranoid list.
http://list.iblocklist.com/?list=uwnukjqktoggdknzrhgh&fileformat=p2p&archiveformat=gz
#
#Anti-Advertisement1
http://list.iblocklist.com/lists/bluetack/ads-trackers-and-bad-pr0n
#
#Anti-Advertisement2
http://list.iblocklist.com/?list=dgxtneitpuvgqqcpfulq&fileformat=p2p&archiveformat=gz
#
#anti-pedophiles - IP ranges of people who we have found to be sharing child pornography in the p2p community.
http://list.iblocklist.com/?list=dufcxgnbjsdwmwctgfuj&fileformat=p2p&archiveformat=gz
#
#dshield 1 - Contains known Hackers and such people in it.
http://list.iblocklist.com/lists/bluetack/dshield
#
#dshield 2 - Contains known Hackers and such people in it.
http://list.iblocklist.com/?list=xpbqleszmajjesnzddhv&fileformat=p2p&archiveformat=gz
#
#webexploit - IP addresses related to current web server hack and exploit attempts that have been logged by us or can be found in and cross referenced with other related IP databases. Malicious and other non search engine bots will also be listed here, along with anything we find that can have a negative impact on a website or webserver such as proxies being used for negative SEO hijacks, unauthorised site mirroring, harvesting, scraping, snooping and data mining / spy bot / security & copyright enforcement companies that target and continuosly scan webservers.
http://list.iblocklist.com/?list=ghlzqtqxnzctvvajwwag&fileformat=p2p&archiveformat=gz
#
#apple
http://list.iblocklist.com/?list=aphcqvpxuqgrkgufjruj
#
#dhca_faker
http://list.iblocklist.com/lists/dchubad/faker
#
#dhca_hacker
http://list.iblocklist.com/lists/dchubad/hacker
#
#dhca_spammer
http://list.iblocklist.com/lists/dchubad/spammer
#
#DROP
http://list.iblocklist.com/?list=sh_drop
#
#malc0de
http://list.iblocklist.com/?list=pbqcylkejciyhmwttify
#
#Malicious
http://list.iblocklist.com/?list=npkuuhuxcsllnhoamkvm
#
#primary-threats
http://list.iblocklist.com/lists/tbg/primary-threats
#
#SpyEye
http://list.iblocklist.com/?list=zvjxsfuvdhoxktpeiokq
#
#web-exploit
http://list.iblocklist.com/lists/bluetack/web-exploit
#
#ZeuS ip - ZeuS Tracker offers various IP- and domain-blocklists that contains known ZeuS Command&Control server (C&C) assocaited with the ZeuS crimeware. ZeuS Tracker offers blocklists in various formats and for different purposes which are described below.
http://list.iblocklist.com/?list=ynkdjqsjyfmilsgbogqf
#
#ZeuS ip - ZeuS Tracker offers various IP- and domain-blocklists that contains known ZeuS Command&Control server (C&C) assocaited with the ZeuS crimeware. ZeuS Tracker offers blocklists in various formats and for different purposes which are described below.
https://zeustracker.abuse.ch/blocklist.php?download=badips
#
#attackers IP - ssh,mail,apache,imap,ftp,sip,bots,strongips,ircbot,bruteforcelogin
http://lists.blocklist.de/lists/all.txt
</pre>
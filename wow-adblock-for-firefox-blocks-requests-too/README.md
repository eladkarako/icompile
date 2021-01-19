my notes on debugging a code that downloads an external javascript file
<!--more-->
Yes you would probably expect that but listen carefully:

1. I have blocked it in my HOSTS.
<img src="https://icompile.eladkarako.com/_uploads/2013/02/2013-02-21_233036.jpg" alt="" title="2013-02-21_233036" width="546" height="114" class="alignnone size-full wp-image-605" />

..ok no biggy thats the first place I've looked and remarked it..

2. I have <a href="http://www.peerblock.com/" title="PeerBlock" target="_blank">PeerBlock</a>...
..handled it.. turned it off

3. still nothing, perhaps clearing cookies, cache... help!

4. restarting browser...

5. trimming my script to ~nil~

6. still does not download ga.js... it it something on my computer?
trying modern event handlers? lets try native onload/onerror debug messages...

oh.. keep getting the onerror message, thats progress,

**some sobbing**

opening the ga.js <strong>directly</strong> in the browser.. as a url,
it works! @!@#@#!

so its probably my script (?)

disabling greasemonkey, <a href="http://userscripts.org/scripts/show/47300" title="Google-Tracking-B-Gone" target="_blank">Google-Tracking-B-Gone</a>..
...getting warmer...

switching from pure js to jquery just to verify,
JSLint, JSHint and all the validations on WebStorm 
...getting colder...

and then!
ha ha! (some even say <a href="http://haza.urbanup.com/1807525" title="HAZA! (the second one..)" target="_blank">HA!ZA!</a>
nope! I'm doing just fine there...


it appears that AdBlock, as an all mighty Firefox extension has some big power tools on its control,
one of them, is "sitting" right on the peer of the connections (figuratively speaking its like someone is sitting near the entrance of your house selectively blocking some of the people from entering..)

..anyway..

I've already found the reason, but just to show you the real power of AdBlock for Firefox,
it was not blocking ga.js when I've entered the url in my address-bar, but no script could it..

in the way to find the cause I've also---...

putting small html, and js with minimal code, in my server instead of my wamp localhost server..
surfing using hidemyass proxy..

connecting and disconnecting my VPN, since it could relate to DNS tables re-written by OpenVPN device-handler..
closing the browsers and <a href="http://www.piriform.com/ccleaner/builds" title="CCleaner" target="_blank">CCleaner</a> it all..

after 8 minutes..
(yeah all this took about 8 and a half minutes.. :) )

I've should probably have checked with Chrome or IE,
But I'm a Mozilla Fan..!


if verbose-ing the cause is not enough,
feast your eyes on this :)

<img src="https://icompile.eladkarako.com/_uploads/2013/02/2013-02-21_225614.jpg" alt="" title="2013-02-21_225614" width="1140" height="556" class="alignnone size-full wp-image-600" />

<img src="https://icompile.eladkarako.com/_uploads/2013/02/2013-02-21_225652.jpg" alt="" title="2013-02-21_225652" width="1141" height="531" class="alignnone size-full wp-image-601" />
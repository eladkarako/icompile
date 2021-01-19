<em>4 Emily From UK- Hope it would help ;)</em>
<ol>
 	<li><img src="http://i.stack.imgur.com/xcOCY.jpg" alt="" /></li>
 	<li><code>sudo apt-get install --assume-yes build-essential dkms linux-headers-generic linux-headers-$(uname -r)</code></li>
 	<li><code>sudo ln -s /usr/src/linux-headers-$(uname -r)/include/generated/uapi/linux/version.h /usr/src/linux-headers-$(uname -r)/include/linux/version.h</code></li>
 	<li><img src="http://i.stack.imgur.com/Wddsy.jpg" alt="" /></li>
</ol>
<blockquote><img src="http://i.stack.imgur.com/6b59e.jpg" alt="" /></blockquote>
<ol start="5">
 	<li><code>sudo reboot</code></li>
</ol>

<hr />

+ bonus: <em>shared folders "secret" ;)</em>
<ol start="6">
 	<li><img src="http://i.stack.imgur.com/NxmP9.jpg" alt="" /></li>
 	<li><img src="http://i.stack.imgur.com/BRsOn.jpg" alt="" /></li>
 	<li><img src="http://i.stack.imgur.com/r3NoG.jpg" alt="" /></li>
 	<li><img src="http://i.stack.imgur.com/XeGKM.jpg" alt="" /></li>
 	<li><code>sudo gpasswd -a &lt;username&gt; vboxsf</code><img src="http://i.stack.imgur.com/p8MXn.jpg" alt="" /></li>
 	<li><code>sudo reboot</code></li>
 	<li>done.</li>
 	<li>???</li>
 	<li>profit ;)</li>
</ol>
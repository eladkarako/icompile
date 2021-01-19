1#
on Chromium (and Canary) open the *special URL*
<a href="about:flags" title="about:flags" target="_blank">about:flags</a> or <a href="chrome://flags/" title="chrome://flags/" target="_blank">chrome://flags/</a>

#2
enable: "Enable Experimental JavaScript".

#3
<a href="http://www.youtube.com/watch?v=tO5sxLapAts" title="http://www.youtube.com/watch?v=tO5sxLapAts" target="_blank">profit</a>.

lets use it,
<small>NOTE: please avoid using your evil laugh (..a.k.a Mu Ha Ha Ha..) as much as possible..</small>

first, play the funky prototype game
<pre>
  String.prototype.observe = Object.observe;
</pre>

now open up a nice little website like <a href="http://updates.html5rocks.com/" title="http://updates.html5rocks.com/" target="_blank">http://updates.html5rocks.com/</a> (my personal favorite)..

and execute (even from Developer's Tools-console)
<pre>
document.cookie.observe(this, function(){
 console.log(arguments);
});
</pre>

<a href="http://updates.html5rocks.com/" title="http://updates.html5rocks.com/" target="_blank">http://updates.html5rocks.com/</a> predictably modified the cookie for a cookie named "__commandLineAPI"
adding and removing it.

try modifying the document.cookie and see the result in your console for more details,
due to this beeing a #DRAFT, you may not deploy your web-app with it just yet (or never if you wish global-browser support..., or use the latest <a href="modernizr.com/" title="modernizr.com/" target="_blank">Modernizr: the feature detection library for HTML5/CSS3</a> ', 'JavaScript Object.observe For String Too
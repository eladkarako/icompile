<!--more-->
Change This:
<pre>
$("html,body").animate({scrollTop:$("#rwid").offset().top},1E3)}
</pre>

To This:
<pre>
document.querySelector("#rwid").scrollIntoView({ 
  behavior: "smooth"
});
</pre>

For Some Free Style, By Length:
<pre>
window.scroll({
  top:      2500
 ,left:     0 
 ,behavior: "smooth"
});
</pre>

Or:
<pre>
window.scroll({
  top:      document.querySelector("#rwid").offsetTop
 ,left:     0 
 ,behavior: "smooth"
});
</pre>

<hr/>

Optionally adding smooth-scroll CSS rule,
which is more apply to touch related events,
but still nice to have :]

<pre>
body{
  scroll-behavior:            smooth;
  -webkit-overflow-scrolling: touch;
     -moz-overflow-scrolling: touch;
          overflow-scrolling: touch;
}
</pre>

And maybe this too,
to reduce the click response
- and provide a more responsive clicks/touch/scroll events.
<pre>
body{
  height:                   100%;
  overflow-y:             scroll;
  touch-action:     manipulation;
  user-zoom:                none;
  -webkit-user-drag:        none;
     -moz-user-drag:        none;
          user-drag:        none;
}
</pre>

:]]

', 'Smooth Scroll Animation
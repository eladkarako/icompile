<!--more-->


<pre>
javascript:(function(b,s,r,u){s.src=u+r;b.appendChild(s);}(document.getElementsByTagName("body")[0],document.createElement("script"),"?__="+(new Date()).getTime(),"http://localhost/file.js"))
</pre>

or, beautified..

<pre>
javascript: (function(b, s, r, u) {
  s.src = u + r;
  b.appendChild(s);
}(
  document.getElementsByTagName("body")[0],
  document.createElement("script"),
  "?__=" + (new Date()).getTime(),
  "http://localhost/file.js"
))
</pre>', 'Minimal JavaScript Bookmarklet Format
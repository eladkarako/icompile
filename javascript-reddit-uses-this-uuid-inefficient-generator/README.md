<pre>
 var e = (new Date).getTime();
 "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
   var n = (e + Math.random() * 16) % 16 | 0;
   return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16)
 });
</pre>
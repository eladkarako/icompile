Preserve the full-meaning of the string, without encoding or breaking Unicode-pairs.
<pre>
String.prototype.map                = Array.prototype.map;
String.prototype.to_char_code       = function(){ return (this+"").map(function(c){                return c.charCodeAt(0)                                                  });           };
String.prototype.escape_to_unicode  = function(){ return (this+"").to_char_code().map(function(i){ return "\\u005Cu" + ("0000" + i.toString(16).toUpperCase()).substr(-4);  }).join("");  };

//test- run:   "שh&#x1f400;".escape_to_unicode();
</pre>

another variation is using regular-expressing with attention to Unicode, meaning <code>/u</code>,
but it won't work for you since you, still, might get a Unicode-pair (where you have to run <code>charCodeAt(0)</code> and <code>charCodeAt(1)</code>.. etc...). Split by character (I'm using <code>Array.map</code>, but it is the same as using <code>split("").map(...</code>) will work around that, keeping the character whole (meaning not like the Unicode/ASCII-escape trick) but still breaking nicely characters, including breaking Unicode-pairs-
-to quickly get the <code>\\u..</code> equivalent of your string. :]
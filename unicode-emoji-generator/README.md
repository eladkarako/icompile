<ul>
<li><blockquote>Without calculating offsets and doing the regular-stuff people are doing to generate surrogate-pairs <a href="https://en.wikipedia.org/wiki/UTF-16" target="_blank">(1)</a> <a href="http://stackoverflow.com/questions/5903008/what-is-a-surrogate-pair-in-java" target="_blank">(2)</a>,
this little trick make use of the decimal HTML-Entity of each unicode character :)</blockquote>
</li>
<li>start up with browsing the <code>about:blank</code> page, with minimal browser windows opened, the following steps will take a lot of processing power...
</li>
<li>open up the console and run:
<pre>
//this is a good example: &#128268;
(function(){
  var a = [], i;
  
  for(i=120000; i&lt;130000; i+=1){ a.push(i); }

  a = "&#" + a.join("; &#") + ";";
  
  document.body.style.display="none";
  document.body.innerHTML = a;
  setTimeout(function(){
    document.body.style.display="block";
  },10);
}());
</pre>

<blockquote>find a good range by looking at <a href="http://www.fileformat.info/" target="_blank">fileformat.info</a> first.
if you want to copy stuff around, make sure that your editor is pre-defined to Unicode (UTF-16 LE/Little Endian BOM)
</blockquote>
</li>
</ul>


<ul>
<li><blockquote><strong>well that IS embarrassing</strong> --- apparently webkit has a bug/feature,
where- while the Unicode-characters still are perfectly representative on the web-page,
the content is completely un-copy&&paste-able to a notepad, in fact if you'll try- you'll just get the spaces (' ') between characters (funny isn't?)

--this is due to the representation of the string on using HTML Entities, 
the reason is probably that,</blockquote>

<blockquote>for example (decimal) <code>& # 128268;</code> or (hex)  <code>& # x1f50c;</code> are not really the surrogate-pair "\\uD83D\\uDD0C" it is just a placeholder... (or something)...
</blockquote>
</li>

<li>fear NOT, here is a little longer but still quite nice solution...
this time we are still looping on range, but we'll going to render REAL surrogate-pair and use some pinning-together we will use String's from-char-code (which supports surrogate-pairs!)

basically it is as easy as:
<pre>
var a = [], i;

for(i=128000; i&lt;129000; i+=1) a.push(String.fromCharCode(
  ((i - 0x10000) >> 10) | 0xD800
, ((i - 0x10000) % 0x400) | 0xDC00
));
</pre>

and taking the code far above with the (near) above modification...

(function(){
  //browse about:blank first, then open up the console and paste the code :)
  var a = [], i;
  
  for(i=128000; i&lt;129000; i+=1) 
    a.push(String.fromCharCode(
      ((i - 0x10000) >> 10) | 0xD800
    , ((i - 0x10000) % 0x400) | 0xDC00
    ));

  a = a.join(" "); 
  
  document.body.style.display="none";
  document.body.innerHTML = a;
  setTimeout(function(){
    document.body.style.display="block";
  },10);
}());
</li>


<li>and...
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_unicode_javascript_3.jpg" alt="result: totally  copy&amp;&amp;paste-able" width="622" height="373" class="size-full wp-image-4145" /></li>
</ul>

last thing- bidi chars, can mess with your cursor direction when you are copy&&paste'ing around,
the following will delete (no regex!!) each of the "OFFICIAL" Unicode-bidi chars, if any.

<pre>
(function(){
  //browse about:blank first, then open up the console and paste the code :)
  var a = [], i;
  
  for(i=0; i&lt;30000; i+=1) 
    a.push(String.fromCharCode(i));

  a = a.join(" ").replace("\\u2066","").replace("\\u2067","").replace("\\u2068","").replace("\\u2069","").replace("\\u200E","").replace("\\u200F","").replace("\\u061C","").replace("\\u202A","").replace("\\u202B","").replace("\\u202C","").replace("\\u202D","").replace("\\u202E","");
  
  document.body.style.display="none";
  document.body.innerHTML = a;
  setTimeout(function(){
    document.body.style.display="block";
  },10);
}());
</pre>

until <code>65533</code> (0XFFFD) you can use single value in <code>.fromCharCode(...)</code>,
afterwards it is the world of surrogate-pairs :)
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_unicode_javascript_5.jpg" alt="icompile.eladkarako.com_unicode_javascript_5" width="704" height="266" class="alignnone size-full wp-image-4150" />
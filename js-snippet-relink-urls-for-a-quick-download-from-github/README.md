Naturally GitHub is not "THE" place for binary files sharing,
but it used quite often as one (yep! even Google does it..).

<blockquote>
It is a great place to put files.. by downloading it,
is not always the fastest way, unless the author had some basic understanding,
and provided you with direct-links to the files, which may be easily put in the README..
</blockquote>


Anyway...
this is probably what you'll normally do..

<img src="https://icompile.eladkarako.com/_uploads/2017/07/icompile.eladkarako.com_js_snippet_to_relink_urls_for_a_quick_download_from_github_original1.png" alt="" width="723" height="447" />

<img src="https://icompile.eladkarako.com/_uploads/2017/07/icompile.eladkarako.com_js_snippet_to_relink_urls_for_a_quick_download_from_github_original2.png" alt="" width="700" height="460" />

walking through:
<pre>
https://github.com/google/fonts/blob/master/apache/opensans/OpenSans-Bold.ttf
https://github.com/google/fonts/blob/master/apache/opensans/OpenSans-Bold.ttf?raw=true
https://raw.githubusercontent.com/google/fonts/master/apache/opensans/OpenSans-Bold.ttf
</pre> 

Since the structure of the direct-download links is known,
at least for now (it did changed few times before..)
you can "fix" the links, to point to the direct URL..

btw.: 
not only does it relink, so you can click and download
or copy the links to your download-manager (one by one),
it also generates a links, and outputs it to the console.

<em>amm...naturally it is an ad-hoc solution..</em>

<pre>
NodeList.prototype.map = Array.prototype.map;

var list = document.querySelectorAll('[href*="/blob/"]').map(function(a){
  var URL = a.href; //js-object .href includes the domain for relative URLs.

  //fix URL to point to the file, directly.
  URL = URL.replace(/http\\:/g, "https:")                                                 //make sure it is https:
           .replace(/^https\\:\\/\\/github.com\\//gi, "https://raw.githubusercontent.com/")  //this is the current way to download
           .replace(/\\/blob\\//g, "")                                                     //remove this too...
           ;
           
  a.setAttribute("href", URL);  //explicitly set "href" attribute.

  //will also help downloading.
  a.setAttribute("download", a.innerText.replace(/[\\
]/g));
  a.setAttribute("type", "application/octet-stream");

  return URL;
});

console.log(list.join("\
"));
</pre>
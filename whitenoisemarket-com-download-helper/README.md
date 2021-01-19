whitenoisemarket.com uses a Google login token, which is stored in the localStorage,
the pages are SO HEAVY they actually crash the browser if you open more than two tabs,

<img src="https://icompile.eladkarako.com/_uploads/2016/01/2016-01-09_203702.png" alt="2016-01-09_203702" width="623" height="350" class="alignnone size-full wp-image-4094" />

but once you've validate your auth details (Google/Facebook)

run the following code from the console and it will rewrite the links in THAT page,
to be a direct download links, saving you 2 clicks and almost 50 seconds of waiting (+ extra page load time...)

the format is constant, and it does not defined as a hack, since the auth token is still required,
it is just a download helper.

<pre>
NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map = Array.prototype.map;
var token = localStorage.satellizer_token;


function get_filename(name){
  name = name.replace(/([^\\-])([^\\-]*)(\\-.)([^\\-]*)/g,function(whole, match1, match2, match3, match4){
    return match1.toUpperCase() + match2.toLowerCase() + match3.toUpperCase().replace('-','') + match4.toLowerCase()
  });

  return name;
}

document.querySelectorAll('a[href^="/sound"]').forEach(function(a){
  a.href = ""
         + "http://whitenoisemarket.com/download/"
         + get_filename(
             a.pathname.substring(a.pathname.lastIndexOf('/') +1)
           )
         + ".wna"
         + a.search
         + "&token=" + token;
});

</pre>

naturally there is a download limit :(
so choose only the ones you really like :)
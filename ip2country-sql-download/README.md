Part of an JavaScript 'proof of concept' I've ran some time ago,
When I've worked on a private project that handles a large IP2Country data,
looking for the most efficient on-the-fly way of handling a large set of data,

the project is in <a href="https://github.com/eladkarako/IP2Country-In-Pure-JavaScript" title="https://github.com/eladkarako/IP2Country-In-Pure-JavaScript" target="_blank">my GitHub-> https://github.com/eladkarako/IP2Country-In-Pure-JavaScript</a>

I'm working on a nice (NICE!) project and looked around for some 'ready-to-use' MYSQL import-and-forget solutions, that were, also, free to use. there are none of those.

I've reversed-engineered my JavaScript code.. using some nifty Notepad2 and EditPlus tricks (mostly regex search and replace), followed by inserting the data into a local DB, with indexing and all...
just to export it, to an importable scheme.

I've uploaded (compressed) the RAR file into my GitHub too,
just create a database, extract the RAR file, import the table and information (one time),

then you can run a nice query like this one, 
<pre>
SELECT * FROM ip
LEFT OUTER JOIN country 
ON ip.countryid = country.id
WHERE ip.ip_low >= 87679232 AND ip.ip_high <= 87681023
ORDER BY country.id DESC LIMIT 1;
</pre>

make sure to pre-convert the ip from the format of [0-255].[0-255].[0-255].[0-255] to <strong>long ip</strong> format (in the code above I use 87679232 as the long ip),

for example: <a href="http://php.net/manual/en/function.ip2long.php" title="http://php.net/manual/en/function.ip2long.php" target="_blank">http://php.net/manual/en/function.ip2long.php</a>.

here is a similar (JavaScript) code which is kind'a generic so you can also implement it,
on your *weird* language, if you do not have a native methods to mess-around with..
<pre>
(function(){
...............
  window["JSIP2Country"] = {};
  var ref = window["JSIP2Country"];
  
  ref.lib = {};
  ref.lib.ip2int = function(sIP){
    var a = sIP.split('.');
    return ( 16777216 * a[0] ) + (65536 * a[1]) + (256 * a[2]) + a[3];
  };

  ref.lib.int2ip = function(lInt){
    var a = [];
    a.push(parseInt((lInt/16777216)%256,10), parseInt((lInt/65536)%256,10), parseInt((lInt/256)%256,10), parseInt(lInt%256,10));
    return a.join('.');
  };

  ref.db = [];
  
  ref.loadDone = function(){
    
  };
}());
..........
</pre>


<strong>do not use it for your company, its for non-commercial, personal usage only.
(the code is regulated :) ..)</strong>
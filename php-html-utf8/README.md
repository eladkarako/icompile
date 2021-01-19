<pre>
<!-- help code tags play nice with template -->
<style type="text/css">code{ display:inline !important; }</style>
</pre>

put this on the top of your page, (just after the <code>&lt;?php</code> part)
<pre>
//Make PHP UTF-8 friendly --part #1:
//-------------------------------
define("U","UTF-8"); 

mb_language("uni"); 
mb_internal_encoding(U); 
mb_http_input(U); 
mb_http_output(U); 
mb_regex_encoding(U); 
</pre>

<pre>
//Make PHP UTF-8 friendly --part #2:
//-------------------------------
define("UC", 'he_IL.' . U); //or 'en_US.' . U
//setlocale(LC_COLLATE,UC); 
//setlocale(LC_CTYPE,UC); 
//setlocale(LC_MONETARY,UC); 
//setlocale(LC_NUMERIC,UC); 
//setlocale(LC_TIME,UC); 
//defined("LC_MESSAGES") && setlocale(LC_MESSAGES,UC); 
setlocale(LC_ALL,UC); //same as above
</pre>

at this point just before starting using <code>echo</code> and <code>print</code>
add this line to start buffering it, as UTF-8 content.
<pre>
//Make PHP UTF-8 friendly --part #3:
//-------------------------------
ob_start("mb_output_handler");  //+ at script-end use:  ob_end_flush();
</pre>

at the end of your PHP page, use <code>ob_end_flush();</code> to output it all, from the buffer (its also a best practice in general to apply way of thinking..).


set your page to output the right charset in the right encoding out to page,
also use the right mime-type to provide best browser compatibility,
easily done, by header'ing round..
and yes, it does requires separate charset and encoding (other wise on non-encoded HTML pages you'll see some very strange characters that.. may or may not.. break the HTML parsing)..
<pre>
//page's output
define('CT','plain');  //html|json|javascript|xml|plain
header('Content-Encoding: ' . U);
header('Content-Type: text/' . CT . '; charset=' . U);
</pre>
(for Ajax'ing a JSON, use text/json or application/json or text/plain).

=-=-=-=

for best practice, if you are writing a HTML page, using PHP,
make sure that your template will include the few needed meta tags:
<code>&lt;meta http-equiv='Content-Type' content='Type=text/html; charset=utf-8'&gt;</code>
and the newest HTML5 meta-tag: <code>&lt;meta charset="utf-8"&gt;</code>.
why?

=-=-=-=

well, you can set the header using various way, from the <code>header</code> PHP-command,
to .htaccess 's <code>Header set Content-Type "text/html; charset=utf-8"</code>

=-=-=-=

3rd-party crawlers for search engines will parse your web-pages, letter by letter, from source, considering language from the meta tags, and ignoring the server's encoding headers,

proxy'ing your website through several ISPs might even provide seemless gzip, splicing, or other types of compressions that should passed seamless without modifying anything,
still - those methods (including Firewalls, CDNs or other Active-Network modulators) will sometimes strip HTTP-headers, providing with hard-coded addition will not effect the content on the page, but will provide the browse's parsing engine with enough alternatives to make your end-result support well on all browsers (IE too..).

=-=-=-=

plus, if a user will save your page, onto his/hers PC, he/she will have no problem opening it for later view without all the content break down..

=-=-=-=

last thing is to use db tier that will support UTF-8, there are the mongoDB and the most excellent PostgreSQL (personal favorite), but even on InnoDB (default mySQL based db) provided by GoDaddy, this will work.
for this we will use <code>mysqli_set_charset</code>


here is a nice little code segment..

<pre>
$link = @mysqli_connect('host', 'username', 'password', 'dbname');
if (!$link){ die('Connect Error: ' . mysqli_connect_errno()); } //connection.

@mysqli_set_charset($link, "utf8"); //not critical, so we don't even have to check its result (you may still do it if you please..)

$queryStr = "SELECT `id`,......";
$queryResult = mysqli_fetch_assoc(mysqli_query($link, $queryStr));

print_r($queryResult);

@mysqli_free_result($queryResult);
@mysqli_close($link);


@ob_end_flush(); //  <---- here is our friend from before.. ending the script..

</pre>


very common problem solving..:
------------------------------------
after you've applied all the headers to use UTF-8, you see that the page's source including some weird characters:
<img src="https://icompile.eladkarako.com/_uploads/2014/07/2014-07-18_145116.jpg" alt="2014-07-18_145116" width="323" height="191" class="alignnone size-full wp-image-1502" />

use WinSCP to connect to your FTP/SFTP/other web-server,
on Option-> Preferences -> Editor.
click: Add
select: External Editor
  provide the page to: Notepad++.exe (installed in your PC)
  keep existing value of Editor Autoselection: *.*
  click: OK.
select: the new line you've just added
click: the UP button to make this line the very top of the list.
click: OK to close the Preferences dialog,
optionally save (overrite) the session to save your settings for next time (Session->Save Session).

double click your PHP file (it can be easily a HTML file too..)
it will open in Notepad++ on your PC.


click: Encoding-> Convert to UTF-8.

if you see some weird characters that are not part of the page now,
you can safely delete them, as you'll do with normal characters ([Backspace], [Delete]).
save the file, it will be uploaded to the web-server, and.. you're done.
', 'PHP, HTML
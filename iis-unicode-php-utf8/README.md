<pre>
<style type="text/css">code{display:inline !important;}</style>
</pre>

An IIS server outputs a JSON I want to use,
this is the story's beginning...

The first investigation is to open the resource with Developer-Tools (Chrome) or Firebug (Firefox) or Fiddler opened in the background and look for the <code>server</code> and <code>X-Powered-By</code> headers.
in my case my *suspiciousness* proven worthy <code>"server: Microsoft-IIS/6.0"  "X-Powered-By: ASP.NET"</code>

-try to read the remote-JSON, using PHP's <code>file_get_contents</code>
then you'll output it to your text/plain, UTF-8 page,
and you'll see it *all* break.

why the example breaks, why PHP does not read it properly?

for this we should answer another question first:
why viewing content on your browser "simply works" ?
well, it does not "simply works", browsers tend to be very (very!) content-smart, providing on-the-ply pre-process encoding heuristics to fix incompatibilities and essentially can sort-of 'read the result' and decide if the result is properly displayed (if not, an alternative encoding will be used..)

all goes well for PHP if your content is UTF-8 and you're applying <a href="https://icompile.eladkarako.com/php-html-utf8/" title="https://icompile.eladkarako.com/php-html-utf8/" target="_blank">needed changes</a> or if your input is English-like based characters (even extended ASCII will do, basically the native interrupter is ISO-8859-1),

That IIS outputs a JSON that its content includes non-English (Hebrew), non-UTF-8 characters,
Non-English characters are basically non-fallback'able (I've just made that word.. but I promise you, that you'll be using it yourself in a second you'll be using it yourself in your next staff meeting.),

its UNICODE, and not the good one..
did you ever made a PHP script to handle the new XLS (XLSX) or DOCX format? nightmare right?
there are some ugly hacks but basically you'll need to push some bits,
writing BOM (as in Unicode's BOM) before writing the text..

understanding this, make reversing the process more reasonable,

first lets set OUR (as in.. our php script) to be normal, UTF-8 charset and encoded content.
next read the content of the remote JSON, and trim that UNICODE BOM prefix
next, echo some of the UTF-8 BOM (optional) and use <code>mb_convert_encoding</code> to change that horrible <code>UTF-16LE</code> into lovely <code>UTF-8</code>, <code>echo</code> the result,

and you've just made yourself some middleman interruptor, you can use it like this, or wrap it with some URL arguments to provide extra features (JSONP's callback method, diffrent-mimetype, post-processing, all the response-headers as DEBUG-mode, etc...)

<pre>
<?php
define('URL','http://someones-IIS-Server.com/service.json');

header('Content-Encoding: UTF-8');
header('Content-type: text/html; charset=UTF-8');


$s = substr(file_get_contents(URL), 2, -4);

//var_dump($http_response_header);


echo "\\xEF\\xBB\\xBF"; // UTF-8 BOM


echo mb_convert_encoding($s, 'UTF-8', 'UTF-16LE');

?>

</pre>
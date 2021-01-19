<ol>
<li>
first, set up internal engine to UTF-8.

<pre>
mb_language("uni");
mb_internal_encoding("UTF-8");
mb_http_input("UTF-8");
mb_http_output("UTF-8");
mb_regex_encoding("UTF-8");
setlocale(LC_ALL, "he_IL.UTF-8");
</pre>
</li>

<li>

<ol>
<li>
start the GZIP buffer
</li>
<li>
start the internal-engine-buffer (now set for UTF-8).
</li>
<li>
notice that the implicit flush is set twice, <strong>keep it.</strong>
</li>
</ol>

<pre>
ob_start("ob_gzhandler");
ob_implicit_flush(false);

ob_start("mb_output_handler");
ob_implicit_flush(false);
</pre>
</li>

<li>
use your PHP script as usual,
echo content, print, print_r, var_dump, etc..

for example:
<pre>
echo str_repeat("-=á黪ğřƳȪȭǱȌȢɸʌΈΣϣொᆕᶙṕℳℱⅧ⅜⇦∬⓲┲▶➂ⶴは㌵㠩דוזחטש", 3000);
</pre>
</li>

<li>
<strong>script end: 
we will close the buffers and flush them, in a backward-order</strong>,

this will enable us to collect data on the each of the output's-length too!
<small>(I found it so interesting I will actually write some extra headers with the information..)</small>

<ol>
<li>
<small>(optionally)</small>store size-of the <strong>raw output</strong>.
</li>
<li>
<strong>close and flush</strong> the <strong>raw output</strong>.
</li>
<li>
<small>(optionally)</small>store size-of the <strong>mb <small>(UTF-8)</small> buffered output</strong>.
</li>
<li>
<strong>close and flush</strong> the <strong>mb_outputhandler <small>(UTF-8)</small> buffered output</strong>.
</li>
<li>
<small>(optionally)</small>store size-of the <strong>mb <small>(UTF-8)</small> buffered output</strong>.
</li>
<li>
<strong>close and flush</strong> the <strong>ob_gzhandler <small>(GZIP)</small> buffered output</strong>.
</li>
</ol>

<pre>
$content_length__raw = ob_get_length();
ob_end_flush(); //close the raw output which will be dumped into the internal engine buffer.

$content_length__utf8 = ob_get_length();
ob_end_flush(); //close the internal-engine buffer, which will be dumped into the gzip engine buffer.

$content_length__gzip = ob_get_length();
</pre>
</li>

<br/>
at this point the value of content_length__gzip is actually the Content-Length header value since its the real output length (the final layer).
</br>

<li>
write the Content-Length header.
<pre>
header('Content-Length: ' . $content_length__gzip);
</pre>
</li>

<li>
any additional headers should be written now.
for example:
<pre>
header('Content-Type: text/html; charset=utf-8');
</pre>
</li>
</ol>

<br/>

<ul>
<li>
the easiest way is to wrap it all in few functions..
here is a complete example, that will write an additional interesting information as headers <small>(why headers? well, naturally, altering with the body of the response will change the measurements.. so headers is the best way..)</small>
</li>
<li>
<pre>
<?php
/**
 * set PHP's internal engine to parse UTF-8 natively.
 * make sure to use mb_* methods.
 * @param string $encoding        (optional)  - by default "UTF-8" (US-ACSII, ISO-8859-1, ISO-8859-1, Windows 1252)
 * @param string $encoding_locate (optional)  - by default "he_IL.UTF-8" (en_US.UTF-8)
 * @return mixed                              - true on if encoding is set successfully or false on failure.
 * @link https://icompile.eladkarako.com
 */
function set_encoding_internal($encoding = "UTF-8", $encoding_locate = "he_IL.UTF-8") {
  mb_language("uni");
  mb_internal_encoding($encoding);
  mb_http_input($encoding);
  mb_http_output($encoding);
  mb_regex_encoding($encoding);
  setlocale(LC_ALL, $encoding_locate);

  return mb_internal_encoding(); //chain trigger
}

/**
 * pipe the output through the internal engine (you need to call set_encoding_internal before) and gzip.
 */
function output_buffer_start() {
  ob_start("ob_gzhandler");
  ob_implicit_flush(false); // ----------------------------------------------------------------------------- force only flush text at the end of the buffer-flush.
  ob_start("mb_output_handler"); // ------------------------------------------------------------------------ + at script-end use:  ob_end_flush();
  ob_implicit_flush(false); // ----------------------------------------------------------------------------- force only flush text at the end of the buffer-flush.
}

/**
 * @param float|int $original
 * @param float|int $new
 * @return string
 */
function getRatio($original, $new) {
  $rate = round((100 / $original) * $new, 2, PHP_ROUND_HALF_UP); // ---- percentage of the original.
  $rate = 100 - $rate; // ---------------------------------------------- percentage from the complete whole ("profit").
  $rate = (0.0 !== $rate) ? (-1) * $rate : $rate; // ------------------- symbolise the change (meaning interpretable by cases).
  $rate = ((string)$rate) . '%'; // ------------------------------------ stringify with percentage symbol.
  return $rate;
}

/**
 * @return int Content-Length of the current output-content
 */
function output_buffer_end() {
  $content_length__raw = ob_get_length();
  ob_end_flush(); //close the raw output which will be dumped into the internal engine buffer.

  $content_length__utf8 = ob_get_length();
  ob_end_flush(); //close the internal-engine buffer, which will be dumped into the gzip engine buffer.

  $content_length__gzip = ob_get_length();

  header('X-Content-Length-0-RAW: ' . (string)$content_length__raw . " bytes");
  header('X-Content-Length-1-UTF8: ' . (string)$content_length__utf8 . " bytes");
  header('X-Content-Length-1to0-Delta: ' . (string)($content_length__utf8 - $content_length__raw) . " bytes");
  header('X-Content-Length-1to0-RATIO: ' . getRatio($content_length__raw, $content_length__utf8));

  header('X-Content-Length-2-GZIP: ' . (string)$content_length__gzip . " bytes");
  header('X-Content-Length-2to1-Delta: ' . (string)($content_length__gzip - $content_length__utf8) . " bytes");
  header('X-Content-Length-2to1-RATIO: ' . getRatio($content_length__utf8, $content_length__gzip));

  return $content_length__gzip;
}

set_encoding_internal(); // ------- native UTF-8 support
output_buffer_start(); // --------- pipe the output seemlessly through internal-engine (now UTF-8) and GZIP.


echo str_repeat("-=á黪ğřƳȪȭǱȌȢɸʌΈΣϣொᆕᶙṕℳℱⅧ⅜⇦∬⓲┲▶➂ⶴは㌵㠩דוזחטש", 3000);

$content_length_in_bytes = output_buffer_end();

header('Content-Length: ' . $content_length_in_bytes);

header('Content-Type: text/html; charset=utf-8');

header('Vary: Accept-Encoding'); //best practice is to add this by ".htaccess"-file rules
</pre>
</li>
<li>
the result will look like so:

<a href="https://icompile.eladkarako.com/_uploads/2014/08/2014-08-02_181624.png"><img src="https://icompile.eladkarako.com/_uploads/2014/08/2014-08-02_181624.png" alt="2014-08-02_181624" width="580" height="193" class="alignnone size-full wp-image-1665" /></a>

<a href="https://icompile.eladkarako.com/_uploads/2014/08/2014-08-02_181757.png"><img src="https://icompile.eladkarako.com/_uploads/2014/08/2014-08-02_181757.png" alt="2014-08-02_181757" width="603" height="347" class="alignnone size-full wp-image-1664" /></a>

</li>
</ul>




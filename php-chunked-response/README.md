<code>.htaccess</code>
<pre>
SetEnvIf Request_URI .* no-gzip=1

#&lt;ifModule mod_headers.c&gt;
#  Header set Connection keep-alive
#&lt;/ifModule&gt;
#
#&lt;IfModule mod_php5.c&gt;
#  php_value post_max_size 5M
#  php_value upload_max_filesize 5M
#  php_value memory_limit 700M
#  php_value max_execution_time 9000000
#  php_value max_input_time 259200
#  php_value session.gc_maxlifetime 12000
#&lt;/IfModule&gt;
#
</pre>

<code>chunk_ed__response___index.php</code>
<pre>
&lt;?php
  /**
   * making a chunk'ed response.
   *
   * 1. disable gzip compression (both PHP script and .htaccess).
   * 2. no buffering (PHP engine will not delay the PHP-script response untill the script will end), killing initial PHP buffer.
   * 3. PHP-engine language-initializing to UTF-8.
   * 3. pre-send content-headers.
   *
   * @author Elad Karako (icompile.eladkarako.com)
   * @link   http://icompile.eladkarako.com
   */
  error_reporting(E_STRICT);

  //settings - no gzip
//  @apache_setenv('no-gzip', 1);         //don't use it, it crashes nginx :) use the added to .htaccess   ::-&gt;&gt;   SetEnvIf Request_URI .* no-gzip=1
  @ini_set("zlib.output_compression", 0);

  //settings - no buffering
  @ini_set('output_buffering', 0);
  @ini_set('implicit_flush', 0);
  @ob_implicit_flush(0);
  while (ob_get_level() &gt; 0) @ob_end_clean(); //disable Apache's and nginx's (pre)initial-buffer.

  //language-engine configuration
  mb_language("uni");
  mb_internal_encoding('UTF-8');
  mb_http_input('UTF-8');
  mb_http_output('UTF-8');
  mb_regex_encoding('UTF-8');
  setlocale(LC_ALL, 'en_US.UTF-8');

  //language-content response-headers
  header('Charset: UTF-8', true);
  header('Content-Encoding: UTF-8', true);
  header('Content-Type: text/plain; charset=UTF-8', true);

  //bonus
  usleep(10 * 1000); //10 milliseconds
  date_default_timezone_set("Asia/Jerusalem");
  header('Access-Control-Allow-Origin: *', true, 200);

  //-------------------------------------------------------------------------------

  require_once('./fn.php');

  $output = str_repeat('a', 1000 * 4); //mock output


  $chunks = get_chunks($output);
  send_chunks($chunks);
?&gt;
</pre>

<code>fn.php</code>
<pre>
&lt;?php

  /**
   * convert text, to chunks, with additional information (to be used in "send_chunks" function).
   *
   * @param string $output     - original text to be process.
   * @param int    $chunk_size - (default is 512 characters) set maximum amount of characters in single-chunk.
   *
   * @return array
   */
  function get_chunks($output = '', $chunk_size = 512) {
    $chunks = explode('|###|', chunk_split($output, $chunk_size, '|###|'));
    $chunks = array_map(function ($chunk) {
      return [
        //original text
        'content_text'                           =&gt; $chunk

        //size of original text (in characters)
        , 'content_char_count'                   =&gt; mb_strlen($chunk)
        , 'content_char_count_in_hexadecimal'    =&gt; dechex(mb_strlen($chunk))

        //size of original text (in bytes)
        , 'content_size_in_bytes'                =&gt; mb_strlen($chunk, '8bit')
        , 'content_size_in_bytes_in_hexadecimal' =&gt; dechex(mb_strlen($chunk, '8bit'))
      ];
    }, $chunks);

    return $chunks;
  }


  /**
   * sends out the header marking the response as chunked,
   * and start sending pre-ordered chunked, as given from get_chunks function.
   *
   * @param $chunks - associative array as given from get_chunks function
   *
   * @return bool - always returns true (to easier-concatenation of commands)
   */
  function send_chunks($chunks) {
    header("Transfer-Encoding: chunked", true);

    $size_of_original_content = 0;
    foreach ($chunks as $index =&gt; $chunk) $size_of_original_content += $chunk['content_size_in_bytes']; //just sum length without sending output yet.
    header("Content-Length: " . $size_of_original_content, true); //make sure

    foreach ($chunks as $index =&gt; $chunk) {
      printf("%x\r\n%s\r\n", $chunk['content_size_in_bytes'], $chunk['content_text']);
      flush();

      usleep(100 * 1000); //10 milliseconds
    }

    return true;
  }


  //
  //  if (false === $prepare_output_as_chunked_transfer_encoding) return $output;
  //
  //  $sep = "\r\n";
  //  $output_chunked = '';
  //  foreach ($output as $index =&gt; $chunk) {
  //    $size = dechex(mb_strlen($chunk));
  //    $output_chunked .= $size . $sep . $chunk . $sep;
  //  }
  //
  //  return $output_chunked;
  //  }
  //
  //  $output = str_repeat('a', 512 * 4); //mock output
  //
  //  $output = get_chunks($output, 512);
  //
  //
  //  $chunks = get_chunks();
  //  $chunks = str_repeat('a', 512 * 4);
  //
  //
  //  //generate an orderly chunk-queue
  //  $chunks = call_user_func(function () { //512x4 = 2048
  //
  //    return array_merge($chunk, $chunk, $chunk, $chunk);
  //  });
  //
  //  //output the chunks
  //  foreach ($chunks as $chunk) {
  //    $size = dechex(mb_strlen($chunk));
  //    $sep = "\r\n";
  //
  //    echo $size . $sep . $chunk . $sep;
  //    @ob_flush();
  //    @flush();
  //    usleep(500 * 1000); //500 milliseconds
  //  }
  //
  //
  //  for ($i = 0; $i &lt; ob_get_level(); $i++) ob_end_flush();
  //  ob_implicit_flush(1);
  //  flush();
  //
  //  function dump_chunk($chunk) {
  //    printf("%x\r\n%s\r\n", strlen($chunk), $chunk);
  //    flush();
  //  }
  //
  //  for (; ;) {
  //    $output = [];
  //    exec("/usr/games/fortune", $output);
  //    dump_chunk(implode("\n", $output));
  //    usleep(pow(2, 18));
  //  }
  //


  //  header("Transfer-Encoding: chunked", true);
  //
  //  function get_chunk($string) {
  //    return printf(
  //      "%x\r\n%s\r\n", mb_strlen($string), $string
  //    );
  //  }

  //
  //  function truffle_shuffle($body, $chunklen = 76, $end = "\r\n") {
  //    $chunk = chunk_split($body, $chunklen, "-=blender=-");
  //    $truffle = explode("-=blender=-", $chunk);
  //    $shuffle = shuffle($truffle);
  //    $huknc = implode($end, $shuffle);
  //
  //    return $huknc;
  //  }
  //

?&gt;
</pre>

<a href="https://gist.github.com/eladkarako/ca60209ff85efa1c1a0be58f8469c891">https://gist.github.com/eladkarako/ca60209ff85efa1c1a0be58f8469c891</a>

<pre>
&lt;?php
  while (ob_get_level() &gt; 0) ob_end_flush();

  date_default_timezone_set("Asia/Jerusalem");

  mb_language("uni");
  mb_internal_encoding('UTF-8');
  setlocale(LC_ALL, 'en_US.UTF-8');
  header('Charset: UTF-8');
  header('Content-Language: en');
  header('Content-Encoding: UTF-8');
  header('Content-Type: text/plain; charset=UTF-8');

  header('Access-Control-Allow-Origin: *');
  header('X-UA-Compatible: IE=edge,chrome=1');
  header('Viewport: width=device-width, initial-scale=1.0');


  $html = file_get_contents('./demo.html.txt');
  
  
  $replacements = [
  "#&lt;!--(.*?)--&gt;#is" =&gt; ""
  ,"#&lt;head(.*?)&gt;(.*?)&lt;/head&gt;#is" =&gt; ""
  ,"#&lt;script(.*?)&gt;(.*?)&lt;/script&gt;#is" =&gt; ""
  ,"#&lt;iframe(.*?)&gt;(.*?)&lt;/iframe&gt;#is" =&gt; ""
  ,"#&lt;noscript(.*?)&gt;(.*?)&lt;/noscript&gt;#is" =&gt; ""
  ,"#&lt;style(.*?)&gt;(.*?)&lt;/style&gt;#is"=&gt;""
  ,"#&lt;meta(.*?)&gt;#is"=&gt;""
  ,"#&lt;link(.*?)&gt;#is"=&gt;""  
  ];
  $html = preg_replace(array_keys($replacements),array_values($replacements),$html);

  $html = strip_tags($html);
  $replacements = [
    "#\d+#is"=&gt;""  
    ,"#[\(\)\[\]\,\.\-\_\!\&\;\:\#]*#is"=&gt;""  
    ,"#\n+#is"=&gt;"\n"
    ,"#\r+#is"=&gt;""
    ,"#\s+#is"=&gt;" "
  ];
  $html = preg_replace(array_keys($replacements),array_values($replacements),$html);

  $html = filter_var($html, FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_STRIP_LOW);
  $html = filter_var($html, FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_STRIP_HIGH);
  $html = filter_var($html, FILTER_SANITIZE_STRING);
  $html = filter_var($html, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
  $html = filter_var($html, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);


  echo $html;
  
  
  $patterns1 = [
    "/\r/"                                            =&gt; ''                                     // Non-legal carriage return
    , "/[\n\t]+/"                                     =&gt; ' '                             // Newlines and tabs
    , '/[ ]{2,}/'                                     =&gt; ' '                             // Runs of spaces, pre-handling
    , '/&lt;script[^&gt;]*&gt;.*?&lt;\/script&gt;/i'                 =&gt; ''         // &lt;script&gt;s -- which strip_tags supposedly has problems with
    , '/&lt;style[^&gt;]*&gt;.*?&lt;\/style&gt;/i'                   =&gt; ''           // &lt;style&gt;s -- which strip_tags supposedly has problems with
    , '/&lt;!-- .* --&gt;/'                                 =&gt; ''                         // Comments -- which strip_tags might have problem a with

    //, '/&lt;h[123][^&gt;]*&gt;(.*?)&lt;\/h[123]&gt;/ie'              =&gt; mb_strtoupper("\n\n\\1\n\n")      // H1 - H3
    //, '/&lt;h[456][^&gt;]*&gt;(.*?)&lt;\/h[456]&gt;/ie'              =&gt; ucwords("\n\n\\1\n\n")      // H4 - H6
    , '/&lt;p[^&gt;]*&gt;/i'                                   =&gt; "\n\n\t"                           // &lt;P&gt;
    , '/&lt;br[^&gt;]*&gt;/i'                                  =&gt; "\n"                          // &lt;br&gt;
    //, '/&lt;b[^&gt;]*&gt;(.*?)&lt;\/b&gt;/ie'                        =&gt; mb_strtoupper("\\1")                // &lt;b&gt;
    //, '/&lt;strong[^&gt;]*&gt;(.*?)&lt;\/strong&gt;/ie'              =&gt; mb_strtoupper("\\1")      // &lt;strong&gt;
    , '/&lt;i[^&gt;]*&gt;(.*?)&lt;\/i&gt;/i'                         =&gt; '_\\1_'                 // &lt;i&gt;
    , '/&lt;em[^&gt;]*&gt;(.*?)&lt;\/em&gt;/i'                       =&gt; '_\\1_'           // &lt;em&gt;
    , '/(&lt;ul[^&gt;]*&gt;|&lt;\/ul&gt;)/i'                         =&gt; "\n\n"                // &lt;ul&gt; and &lt;/ul&gt;
    , '/(&lt;ol[^&gt;]*&gt;|&lt;\/ol&gt;)/i'                         =&gt; "\n\n"        // &lt;ol&gt; and &lt;/ol&gt;
    , '/&lt;li[^&gt;]*&gt;(.*?)&lt;\/li&gt;/i'                       =&gt; "\t* \\1\n"          // &lt;li&gt; and &lt;/li&gt;
    , '/&lt;li[^&gt;]*&gt;/i'                                  =&gt; "\n\t* "           // &lt;li&gt;
    //, '/&lt;a [^&gt;]*href="([^"]+)"[^&gt;]*&gt;(.*?)&lt;\/a&gt;/ie'    =&gt; "\\2"//'$this-&gt;_build_link_list("\\1", "\\2")'
    , '/&lt;hr[^&gt;]*&gt;/i'                                  =&gt; "\n-------------------------\n"                   // &lt;hr&gt;
    , '/(&lt;table[^&gt;]*&gt;|&lt;\/table&gt;)/i'                   =&gt; "\n\n"           // &lt;table&gt; and &lt;/table&gt;
    , '/(&lt;tr[^&gt;]*&gt;|&lt;\/tr&gt;)/i'                         =&gt; "\n"            // &lt;tr&gt; and &lt;/tr&gt;
    , '/&lt;td[^&gt;]*&gt;(.*?)&lt;\/td&gt;/i'                       =&gt; "\t\t\\1\n"     // &lt;td&gt; and &lt;/td&gt;
    //, '/&lt;th[^&gt;]*&gt;(.*?)&lt;\/th&gt;/ie'                      =&gt; mb_strtoupper("\t\t\\1\n")      // &lt;th&gt; and &lt;/th&gt;
    , '/&(nbsp|#160);/i'                              =&gt; ' '                  // Non-breaking space
    , '/&(quot|rdquo|ldquo|#8220|#8221|#147|#148);/i' =&gt; '"'  // Double quotes
    , '/&(apos|rsquo|lsquo|#8216|#8217);/i'           =&gt; "'" // Single quotes
    , '/&gt;/i'                                       =&gt; '&gt;' // Greater-than
    , '/&lt;/i'                                       =&gt; '&lt;'      // Less-than
    , '/&(amp|#38);/i'                                =&gt; '&'  // Ampersand
    , '/&(copy|#169);/i'                              =&gt; '(c)'             // Copyright
    , '/&(trade|#8482|#153);/i'                       =&gt; '(tm)'      // Trademark
    , '/&(reg|#174);/i'                               =&gt; '(R)'   // Registered
    , '/&(mdash|#151|#8212);/i'                       =&gt; '--'      // mdash
    , '/&(ndash|minus|#8211|#8722);/i'                =&gt; '-' // ndash
    , '/&(bull|#149|#8226);/i'                        =&gt; '*'         // Bullet
    , '/&(pound|#163);/i'                             =&gt; '�'          // Pound sign
    , '/&(euro|#8364);/i'                             =&gt; 'EUR'     // Euro sign
    , '/&[^&;]+;/i'                                   =&gt; ''          // Unknown/unhandled entities
    , '/[ ]{2,}/'                                     =&gt; ' '                   // Runs of spaces, post-handling
  ];
  //$html = preg_replace(array_keys($patterns), array_values($patterns), $html);

  //$html = strip_tags($html);

  echo $html;
</pre>

<a href="https://gist.github.com/eladkarako/5e94a8467677057e70378eb6131af954#file-html2text-php">https://gist.github.com/eladkarako/5e94a8467677057e70378eb6131af954#file-html2text-php</a>

A Simple form-submit example (without jQuery) with server-side sanitize for the input.

<pre>
&lt;?php
  function arg_value($name){
    $items = [
              filter_input(INPUT_POST, $name, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH | FILTER_FLAG_STRIP_BACKTICK)
             ,filter_input(INPUT_GET,  $name, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH | FILTER_FLAG_STRIP_BACKTICK)
             ];

    $items = array_filter($items, function($item){
               return ((null !== $item) && (false !== $item));
             });

    array_push($items, null); /* null value so there always be something to return, even if the array was empty.. */

    $items = array_shift($items);

    return $items;
  }

/* main */

  $urls = call_user_func(function(){  //array of urls (empty lines preserved, order important).
    $raw  = arg_value("_textarea_source");
    $raw  = null === $raw ? "" : $raw;

    $raw  = preg_replace("#\r\n#m",                                   "\n", $raw);  //normalize windows|linux EOL, for breaking into lines, utorrent-client actually needs-the-`\r\n`-EOL, otherwise it will all be in one line...
    $raw  = preg_replace("#^\s+$#",                                   "",   $raw);  //remove whitespace-lines.
    $raw  = preg_replace("#[^a-z0-9\$\#\/\-\_\!\%\?\&\:\@\=\.\n]#im", "",   $raw);  //similar to "URL SANITIZE FILTER".
    $raw  = explode("\n", $raw);
    $raw  = array_unique($raw); //remove 100% duplicated lines (leave only first one)
    return $raw;
  });

  $hostnames =  call_user_func(function() use ($urls){  //unique list of just the hostnames
    $hostnames = array_map(function($url){
      return parse_url($url, PHP_URL_HOST);
    }, $urls);
    
    $hostnames = array_filter($hostnames, function($hostname){
      return null !== $hostname && "" !== $hostname;
    });

    $hostnames = array_unique($hostnames);
    
    return $hostnames;
  });
  
  $ips = array_map(function($hostname){
    return gethostbynamel($hostname)[0];
  }, $hostnames);
  
  $urls = implode("\r\n", $urls);
  $urls_hostname_as_ip = str_replace($hostnames, $ips, $urls);

?&gt;&lt;html&gt;&lt;head&gt;
&lt;style&gt;
*{
  margin:0;
  padding:0;
  width:100%;
  font-family: "Courier New", monospace;
  font-size: 12pt;
  resize:none;
}
textarea{
  overflow:hidden;
}
textarea[name="_textarea_source"]{ height:40%; }
input[type="submit"]{              height:20%; }
textarea[name="_textarea_target"]{ height:40%; }
&lt;/style&gt;
&lt;/head&gt;&lt;body&gt;
&lt;form id="_form" method="POST" rem-action="" target="_self" accept-charset="UTF-8" autocapitalize="none" autocomplete="off" autofocus="true" spellcheck="false" autocorrect="false" enctype="application/x-www-form-urlencoded;charset=UTF-8" rem-enctype="multipart/form-data"&gt;
  &lt;textarea name="_textarea_source" inputmode="verbatim" placeholder="http://82.102.187.123/search?q=aaa"&gt;&lt;?php echo $urls; ?&gt;&lt;/textarea&gt;
  &lt;input type="submit" /&gt;
&lt;/form&gt;
&lt;textarea name="_textarea_target" readonly&gt;&lt;?php echo $urls_hostname_as_ip; ?&gt;&lt;/textarea&gt;

&lt;script&gt;
(function(form, textarea_source, textarea_target, xhr, self_url){ "use strict";
  
  textarea.placeholder = "http://82.102.187.123/search?q=aaa" + "\r\n"
                       + "http://www.google.com/search?q=aaa" + "\r\n"
                       ;

  form.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXonsubmit = function(ev){
    ev.cancelBubble = true;
    ("function" === typeof ev.preventDefault)  && ev.preventDefault();
    ("function" === typeof ev.stopPropagation) && ev.stopPropagation();
    
    xhr.onreadystatechange = function(ev){
      if(XMLHttpRequest.DONE !== xhr.readyState) return;
      console.log(ev);
    };
    
    xhr.open("POST", self_url, true);
    xhr.responseType = "text";
    xhr.overrideMimeType("text/plain;charset=UTF-8;lang=en-US;language=English");
    xhr.send();
  };

}(
    document.querySelector('[id="_form"]')
  , document.querySelector('[name="_textarea_source"]')
  , document.querySelector('[name="_textarea_target"]')
  , new XMLHttpRequest()
  , (function(a){a.href="_self";return a}(document.createElement("a"))).href /* fully qualified URL (trick) */
))
&lt;/script&gt;
&lt;/body&gt;&lt;/html&gt;&lt;?php
//define("JSON_OPTIONS", 0 | JSON_HEX_APOS /*           All ' are converted to \u0027.                                                  (Available since PHP 5.3.0). */
//                         | JSON_HEX_QUOT /*           All " are converted to \u0022.                                                  (Available since PHP 5.3.0)*/
//                         | JSON_HEX_AMP /*            All &#38;#38;s are converted to \u0026.                                         (Available since PHP 5.3.0). */
//                         | JSON_HEX_TAG /*            All &lt; and &gt; are converted to \u003C and \u003E.                           (Available since PHP 5.3.0). */
//                         | JSON_NUMERIC_CHECK /*      Encodes numeric strings as numbers.                                             (Available since PHP 5.3.3). */
//                         | JSON_UNESCAPED_UNICODE /*  Encode multibyte Unicode characters literally (default is to escape as \uXXXX)  (Available since PHP 5.4.0). */
//                         | JSON_PRETTY_PRINT /*       Use whitespace in returned data to format it                                    (Available since PHP 5.4.0). */
//);

  //$raw = json_encode($raw, JSON_OPTIONS);
  //JSON stringify the object (Unicode content!)
  //$xhr = json_encode($xhr, 0 | JSON_HEX_APOS /*           All ' are converted to \u0027.                                                  (Available since PHP 5.3.0). */
  //                           | JSON_HEX_QUOT /*           All " are converted to \u0022.                                                  (Available since PHP 5.3.0)*/
  //                           | JSON_HEX_AMP /*            All &#38;#38;s are converted to \u0026.                                         (Available since PHP 5.3.0). */
  //                           | JSON_HEX_TAG /*            All &lt; and &gt; are converted to \u003C and \u003E.                           (Available since PHP 5.3.0). */
  //                           | JSON_NUMERIC_CHECK /*      Encodes numeric strings as numbers.                                             (Available since PHP 5.3.3). */
  //                           | JSON_UNESCAPED_UNICODE /*  Encode multibyte Unicode characters literally (default is to escape as \uXXXX)  (Available since PHP 5.4.0). */
  //                           | JSON_PRETTY_PRINT /*       Use whitespace in returned data to format it                                    (Available since PHP 5.4.0). */
  //                   );
  //header('Content-Type: '                      .   'text/json;charset=UTF-8');

  //$url  = preg_replace_callback('%[^:/@?&=#]+%usD', function($matches){ return urlencode($matches[0]); }, $url); /*to safe US-ASCII*/
  //$host = parse_url($url, PHP_URL_HOST);
  //$host = urldecode($host); 
?&gt;
</pre>

<a href="https://gist.github.com/eladkarako/9c3bb124f54b2c71d3519edcdbde4528#file-form_submit_with_fallback_more_efficient_one-time-per-hostname_resolve-php">https://gist.github.com/eladkarako/9c3bb124f54b2c71d3519edcdbde4528#file-form_submit_with_fallback_more_efficient_one-time-per-hostname_resolve-php</a>

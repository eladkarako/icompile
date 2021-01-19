<pre><style type="text/css">
code{
display:inline !important;
box-shadow: .5px .5px .5px rgba(0,0,0,.3) !important;
margin: 2px 2px 2px 2px !important;
border: rgba(0,0,0,.8) !important;
padding: 1px 7px 1px 7px !important;
outline: rgba(0,0,0,.8) !important;
background-color: rgba(245,255,0,0.3) !important;
}
</style></pre>

<em><h3>Here Is A POST Request Header String (without the data-body)</h3></em>

<pre>
POST /collect HTTP/1.1
Host: stats.g.doubleclick.net
Connection: keep-alive
Cache-Control: no-cache
Accept: image/webp,*/*;q=0.8
Pragma: no-cache
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36
Referer: http://localhost/a/
Accept-Encoding: gzip,deflate,sdch
Accept-Language: en,en-US;q=0.8,he;q=0.6
Cookie: _ga=GA1.2.53d1ee9b3c4810.54724696
X-Forward-For: 1.2.3.4
Content-type: application/x-www-form-urlencoded
Content-Length: 485
</pre>

without the usage of external modules, lets parse it into associative array, with fallback for lines like <code>POST /collect HTTP/1.1</code> which do not have to be with string-key, for those, we will use the index of the line (starting from 0).

essentially exactly the same look&feel, you'll get from <code>$responseHeaders = <a href="http://php.net/manual/en/function.get-headers.php">get_headers</a>($url, true);</code>, but for any given string,
for example you can specify using CURL's <code>CURLINFO_HEADER_OUT => true</code> to track the handle's request string, so later you will use <code>$info = curl_getinfo($ch)</code> followed by <code>$requestHeaders = $info['request_header']</code> to get the <strong>string</strong> <small>(or simply use <code>curl_getinfo($ch, CURLINFO_HEADER_OUT)</code> to get the string)</small>

<pre>
//-------------------------------------------------------------------------------- process request headers from info, from string to associative array
$requestHeaders = call_user_func_array(function ($info) {
  $headersAssociative = array();

  $headers = (isset($info['request_header']) === true) ? $info['request_header'] : '';
  $headers = explode("\\
", $headers);

  foreach ($headers as $i => $headerLine) {
    if($headerLine === ''){ //skip empty lines.
      continue;
    }

    $parts = explode(': ', $headerLine);
    if (isset($parts[1])) {
      $headersAssociative[ $parts[0] ] = $parts[1]; //use key name
    } else {
      $headersAssociative[ $i ] = $headerLine; //use index as key name
    }
  }
  return $headersAssociative;

}, array($info)); //pass the $info as parameter to call_user_func_array
//--------------------------------------------------------------------------------------------------------------------
</pre>

which will be resolved to following <code>var_dump</code>
<pre>
array (size=14)
  0 => string 'POST /collect HTTP/1.1' (length=22)
  'Host' => string 'stats.g.doubleclick.net' (length=23)
  'Connection' => string 'keep-alive' (length=10)
  'Cache-Control' => string 'no-cache' (length=8)
  'Accept' => string 'image/webp,*/*;q=0.8' (length=20)
  'Pragma' => string 'no-cache' (length=8)
  'User-Agent' => string 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36' (length=109)
  'Referer' => string 'http://localhost/a/' (length=19)
  'Accept-Encoding' => string 'gzip,deflate,sdch' (length=17)
  'Accept-Language' => string 'en,en-US;q=0.8,he;q=0.6' (length=23)
  'Cookie' => string '_ga=GA1.2.53d1ee9b3c4880.54724696' (length=33)
  'X-Forward-For' => string '8.8.8.8' (length=7)
  'Content-type' => string 'application/x-www-form-urlencoded' (length=33)
  'Content-Length' => string '485' (length=3)
</pre>

<img style="width:100%" src="https://icompile.eladkarako.com/_uploads/2014/07/2014-07-25_103021.jpg" alt="2014-07-25_103021" width="703" height="298" class="alignnone size-full wp-image-1603" />

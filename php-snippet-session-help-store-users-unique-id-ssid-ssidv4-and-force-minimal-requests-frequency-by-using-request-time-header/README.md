the following code is part of an online service I've recently wrote,
<ul>
<li>
the session cookie is HTTP-Server only, meaning no JavaScript modification.
</li>
<li>
each user will have two unique id-s, one is the native by PHP, with increased entropy, and one is UUID version 4 Standard, as required by some services (Microsoft, and some of Google Analytics codes require it)
</li>
<li>
checking the DELTA from the last request-time, all "too frequent" requests, ones which will arrive in less then a second one after the other will be rejected.
</li>
<li>
session cookie renamed to something meaningful other then PHP_SESSION
</li>
<ul>

<br/>
naturally this is a generic-concept, its bad practice to kick your users, but if your server allows it, you may also run a slimmer scope using <code>$SERVER['REQUEST_TIME_FLOAT']</code> which will provide a finer measurement.

second best thing is to maintain the same principle using user's IP, 


<pre>
define('SSID','servicessid'); session_name(SSID); ini_set('session.cookie_httponly',1); 
if(session_status() == PHP_SESSION_NONE || session_id() == ''){session_start(); } 

//maintain user's unique id
if(! isset($_SESSION['uniqueID'])){           $_SESSION['uniqueID'] = uniqid('',true); } //session unique id
if(! isset($_SESSION['uniqueID_SSIDv4'])){    $_SESSION['uniqueID_UUIDv4'] = sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0x0fff)|0x4000,mt_rand(0,0x3fff)|0x8000,mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff)) } //session unique id

//maintain last request time, to prevent DoS
if(isset($_SERVER['REQUEST_TIME'])){
  $_SESSION['reqTime_prev'] = isset($_SESSION['reqTime_now']) ? $_SESSION['reqTime_now'] : 0;
  $_SESSION['reqTime_now'] = $_SERVER['REQUEST_TIME'];
  $sessionRequestDiff = $_SESSION['reqTime_now'] - $_SESSION['reqTime_prev'];

  if($sessionRequestDiff < 2){
    echo '{error: "your last request was 1 second ago. please take it easy..}';
    exit(0);
  }
}
</pre>', 'PHP Snippet - Session Help - Store User's Unique-Id (SSID
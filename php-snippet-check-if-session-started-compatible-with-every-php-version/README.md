place the following code, on your page, it will resolved into true: session has-started, or false when it doesn't yet started.

<pre>
<?php
define('SSID', 'sessionnssid');
session_name(SSID);
ini_set('session.cookie_httponly', 1);

/**
 * PHP cross-version compatible way of
 * checking if session has started.
 * @return bool
 */
function isSession(){
  return (function_exists('session_status') && PHP_SESSION_ACTIVE === session_status()) || (function_exists('session_id') && '' !== session_id());
}

</pre>


and here is a quick-way to start the session when needed, and visualize the (same or new) session id:

<pre>
<?php
define('SSID', 'sessionnssid');
session_name(SSID);
ini_set('session.cookie_httponly', 1);

/**
 * PHP cross-version compatible way of
 * checking if session has started.
 * @return bool
 */
function isSession(){
  return (function_exists('session_status') && PHP_SESSION_ACTIVE === session_status()) || (function_exists('session_id') && '' !== session_id());
}

(!isSession()) && session_start(); // start if needed.
                                   // if session-cookie exist, the same session from before will continue (=== same session id)
                                   // if session-cookie removed exist, a new session (new session-id) will be created.

echo "Session-ID: " . session_id();

?>

</pre>


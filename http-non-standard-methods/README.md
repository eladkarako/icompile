<pre>
CONNECT
COPY
DELETE
GET
HEAD
LOCK
MKCOL
MOVE
OPTIONS
PATCH
PING
POST
PROPFIND
PROPPATCH
PUT
TRACE
UNLOCK
X-PINGOTHER
</pre>

You might find it especially useful for CORS directive ,
Here is an example on how to use it for <code>Access-Control-Allow-Methods</code> (PHP):
<pre>
&lt;?php
header('Access-Control-Allow-Methods: CONNECT,COPY,DELETE,GET,HEAD,LOCK,MKCOL,MOVE,OPTIONS,PATCH,PING,POST,PROPFIND,PROPPATCH,PUT,TRACE,UNLOCK,X-PINGOTHER');
?&gt;
</pre>
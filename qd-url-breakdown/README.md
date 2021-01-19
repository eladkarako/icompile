<pre>
var r = new RegExp(/^(?:([^:/?#.]+):)?(?:\\/\\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$/)
r.exec('https://username:password@mail.google.com:8080/mail/u/0/h/123/?&th=456&v=c#abcd/123:123')
</pre>

<pre>
["https://username:password@mail.google.com:8080/mail/u/0/h/123/?&th=456&v=c#abcd/123:123", "https", "username:password", "mail.google.com", "8080", "/mail/u/0/h/10ob63b4sf84u/", "&th=151498e8f866a57c&v=c", "abcd/123:123"]
</pre>
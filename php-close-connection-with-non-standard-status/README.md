Send header <code>Connection: close</code> using <code><span style='color:#5f5035;'>&lt;?php</span> <span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>'Connection&#x003A; close'</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span><span style='color:#5f5035;'>?&gt;</span></code> is simple enough.
When using a non-standard HTTP-status, make sure to put its definition (through <a href="http://php.net/manual/en/function.header.php" title="http://php.net/manual/en/function.header.php" target="_blank">header</a>) <strong>first</strong>.

Here is the correct way of doing it:
<pre>
<span style='color:#5f5035;'>&lt;?php</span>
<span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>'HTTP/1.1 418 I\\'m a teapot'</span><span style='color:#808030;'>,</span><span style='color:#000000;'> </span><span style='color:#0f4d75;'>true</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span>
<span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>"Connection: close"</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span>
<span style='color:#5f5035;'>?&gt;</span>
</pre>

You'll want to specify the HTTP-status, in-full,
in the example above I'm using the <code>418 I'm a teapot</code>,
<a href="https://tools.ietf.org/html/rfc2324" target="_blank">RFC2324 - Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0)</a> which, <a href="https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol" target="_blank">is a joke HTTP-status</a>.

And <strong>although it is very much a real HTTP-status</strong>, you can not normally just put it at the end of <code>header('Connection: closed', true, 418)</code>, since it will apparently won't be parsed correctly and simply return an error 500..

So to make sure it is 100% supported, always send the HTTP-status using header, unambiguously.

Some older Apache server will probably try to gzip-compress your response,
this can be also quickly avoided by flushing the output-buffer and specifying a zero-length content:
<pre>
<span style='color:#5f5035;'>&lt;?php</span>
<span style='color:#800000;font-weight:bold; '>while</span><span style='color:#808030;'>(</span><span style='color:#400000;'>ob_get_level</span><span style='color:#808030;'>(</span><span style='color:#808030;'>)</span><span style='color:#808030;'>&gt;</span><span style='color:#008c00;'>0</span><span style='color:#808030;'>)</span><span style='color:#800080;'>{</span><span style='color:#800080;'>@</span><span style='color:#400000;'>ob_end_flush</span><span style='color:#808030;'>(</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span><span style='color:#800080;'>}</span>
<span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>'HTTP/1.1 418 I\\'m a teapot'</span><span style='color:#808030;'>,</span><span style='color:#000000;'> </span><span style='color:#0f4d75;'>true</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span>
<span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>"Content-Encoding: none"</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span>
<span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>"Content-Length: 0"</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span>
<span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>"Connection: close"</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span>
<span style='color:#5f5035;'>?&gt;</span>
</pre>

Actually when I'm thinking about it,
maybe you better even use <code>HTTP 1.0</code> in the response,
since <em>keep-alive</em> is pretty much a <a href="https://en.wikipedia.org/wiki/HTTP_persistent_connection#HTTP_1.1" target="_blank"><em>given fact in <code>HTTP 1.1</code></em></a> (unless declared otherwise).

So this might be a better way utilising it:
<pre>
<span style='color:#5f5035;'>&lt;?php</span>
<span style='color:#800000;font-weight:bold; '>while</span><span style='color:#808030;'>(</span><span style='color:#400000;'>ob_get_level</span><span style='color:#808030;'>(</span><span style='color:#808030;'>)</span><span style='color:#808030;'>&gt;</span><span style='color:#008c00;'>0</span><span style='color:#808030;'>)</span><span style='color:#800080;'>{</span><span style='color:#800080;'>@</span><span style='color:#400000;'>ob_end_flush</span><span style='color:#808030;'>(</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span><span style='color:#800080;'>}</span>
<span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>'HTTP/1.0 418 I\\'m a teapot'</span><span style='color:#808030;'>,</span><span style='color:#000000;'> </span><span style='color:#0f4d75;'>true</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span>
<span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>"Content-Encoding: none"</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span>
<span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>"Content-Length: 0"</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span>
<span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>"Connection: close"</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span>
<span style='color:#5f5035;'>?&gt;</span>
</pre>

Ps.
If you wish to set the HTTP version dynamically, without messing with it, just replace the correct line in the code above with this one:
<code><span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#000000;'>filter_input</span><span style='color:#808030;'>(</span><span style='color:#000000;'>INPUT_SERVER</span><span style='color:#808030;'>,</span><span style='color:#000000;'> </span><span style='color:#0000e6;'>"SERVER_PROTOCOL"</span><span style='color:#808030;'>,</span><span style='color:#000000;'> FILTER_SANITIZE_NUMBER_FLOAT</span><span style='color:#808030;'>,</span><span style='color:#000000;'> FILTER_FLAG_ALLOW_FRACTION</span><span style='color:#808030;'>)</span><span style='color:#000000;'> </span><span style='color:#808030;'>.</span><span style='color:#000000;'> </span><span style='color:#0000e6;'>' 418 I\\'m a teapot'</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span></code>.

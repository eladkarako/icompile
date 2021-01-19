UTF-8/Unicode-String To "Byte-String" Notes
<!--more-->


<strong>JavaScript</strong>
<code>unescape(encodeURIComponent(&#34;&#1488;&#34;))</code>
--- <code>&#34;&#215;&#34;</code>

<code>unescape(encodeURIComponent(&#34;&#1488;&#34;)).length</code>
--- <code>2</code>

<code>unescape(encodeURIComponent(&#34;&#1488;&#34;)).split(&#39;&#39;).map(function(c){ return c.charCodeAt(0) })/code>
</code><code>[215, 144]</code>

<a href="https://icompile.eladkarako.com/_uploads/2016/03/javascript_2016-03-16_000730.jpg" rel="attachment wp-att-4914"><img src="https://icompile.eladkarako.com/_uploads/2016/03/javascript_2016-03-16_000730.jpg" alt="javascript_2016-03-16_000730" width="870" height="199" class="alignnone size-full wp-image-4914" /></a>

<hr />

<strong>PHP</strong>
<code>var_dump( &#39;&#1488;&#39; );</code>
--- string(2) &#34;&#1488;&#34;
hmmmm.... <strong>2</strong> ?
it <strong><em>*might*</em></strong> be <strong><em>already</em></strong> processing UTF-8.... :)
<code>var_dump( unpack(&#39;C*&#39;, (&#39;&#1488;&#39;)) );</code>
--- 
<code>array(2) { [1]=&#62; int(215) [2]=&#62; int(144) }</code>
<strong>(* Yes it does, natively!*)</strong>
<strong>..so if you </strong>
<code>var_dump( unpack(&#39;C*&#39;, utf8_encode(&#39;&#1488;&#39;)) );</code>
.......
--- 
<code>array(4) { [1]=&#62; int(195) [2]=&#62; int(151) [3]=&#62; int(194) [4]=&#62; int(144) }</code>


<strong>make sure it's indeed UTF-8 globally everywhere</strong>:
1. encode the php file itself to UTF-8.
2. include those lines in the very top of the page:
<code>mb_language(&#34;uni&#34;);</code>
<code>@mb_internal_encoding(&#39;UTF-8&#39;);</code>
<code>setlocale(LC_ALL,&#39;en_US.UTF-8&#39;);</code>
3*. <strong>Also</strong>, if you are outputting stuff.. make sure to send out an header with charset: 
<code>header(&#39;Content-Type: text&#47;plain; charset=UTF-8&#39;);</code>
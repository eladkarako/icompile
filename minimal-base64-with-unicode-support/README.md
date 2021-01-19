<pre>
btoa(unescape(encodeURIComponent("&#x05D0;")))
===&gt; btoa("&#x00D7;&#x0090;")
===&gt; "15A="

decodeURIComponent(escape(atob("15A=")))
===&gt; decodeURIComponent(escape("&#x00D7;&#x0090;"))
===&gt; "&#x05D0;"
</pre>
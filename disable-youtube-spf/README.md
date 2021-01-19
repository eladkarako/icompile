<!--more-->

<blockquote>Disabling SPF (<a href="http://youtube.github.io/spfjs/" target="_blank">Structured-Page-Fragments</a>/ implementation of <a href="https://en.wikipedia.org/wiki/Single-page_application" target="_blank">Single-Page-Application</a>) has a fallback to natural page browsing.</blockquote>

Just include the following rule in your custom AdBlock -or- uBlock-Origin: <code>/spf.js</code>
it will match <code>https://s.ytimg.com/yts/jsbin/spf-vfldNIm25/spf.js</code> (for example).

or you can make it more specific with the alternative-rule <code>ytimg.com/yts/jsbin/*/spf.js</code> (although the previous one should be perfectly fine as is)
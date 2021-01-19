I've (for example) you browse the URL <a href="https://googleblog.blogspot.com/2009/11/releasing-chromium-os-open-source.html" target="_blank">https://googleblog.blogspot.com/2009/11/releasing-chromium-os-open-source.html</a> from the <a href="https://en.wikipedia.org/wiki/United_Kingdom" target="_blank">UK</a> you might be surprised to find-out that you'll be redirected to a UK-related URL: <a href="https://googleblog.blogspot.co.uk/2009/11/releasing-chromium-os-open-source.html" target="_blank">https://googleblog.blogspot<span style="font-size:20pt;">.co.uk</span>/2009/11/releasing-chromium-os-open-source.html</a>.

Reasons aside, this might not be optimal <em>for you</em> for various reasons, or maybe, it simply annoys you :/

What you want is a "sticky" domain, of your choice (i.e. keep is <code>.com</code> or even <code>.ru</code> or <code>.co.il</code> <em>if you feel like it..</em>).

Well, you need to activate something that called "No Country Redirect", or NCR for short,
It is a completely server-side feature that returns (via <code>Set-Cookie</code> HTTP-header) a HTTP cookie (meaning you can not set it with JavaScript) setting your domain to be <em>sticky</em>, preventing redirection.

How to do it?
<!--more-->
add <code>/ncr/</code> as the first URL-path element, for example:
<code>https://googleblog.blogspot.com/ncr/2009/11/releasing-chromium-os-open-source.html</code>[ENTER]

it will then redirect (ONCE) to <code>https://googleblog.blogspot.com/2009/11/releasing-chromium-os-open-source.html</code> and will write a one-day old cookie named <code>NCR</code> with the value <code>1</code>, to the domain <code>*.googleblog.blogspot.com</code>.

you may also use any other domain you wish to "make sticky".

if you have some favorite 'live' testing page, this little trick will help you make the test page 'more consistent', which is a good thing (although a better thing is, naturally, never to relay on real online web-pages in testing..)


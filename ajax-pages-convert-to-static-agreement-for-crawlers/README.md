<a href="https://developers.google.com/webmasters/ajax-crawling/docs/specification" target="_blank" rel="nofollow">https://developers.google.com/webmasters/ajax-crawling/docs/specification</a>

<!--more-->

&nbsp;
<div class="devsite-article-body clearfix">

This document describes an agreement between web servers and search engine crawlers that allows for dynamically created content to be visible to crawlers. Google currently supports this agreement. The hope is that other search engines will also adopt this proposal.
<h2 id="basic-definitions">Basic definitions</h2>
<ul>
	<li><b>Web application:</b> In this document, a web application is an AJAX-enabled, interactive web application.</li>
	<li><b>State:</b> While traditional static web sites consist of many pages, a more appropriate term for AJAX applications is "state". An application consists of a number of states, where each state constitutes a specific user experience or a response to user input. Examples of states: For a mail application, states could be base state, inbox, compose, etc. For a chess application, states could be base state, start new game, but also current state x of the chessboard, including information about past moves, whose player's turn it is, and so forth. In an AJAX application, a state often corresponds to a URL with a hash fragment.</li>
	<li><b>Hash fragments:</b> Traditionally, hash fragments (that is, everything after # in the URL) have been used to indicate one portion of a static HTML document. By contrast, AJAX applications often use hash fragments in another function, namely to indicate state. For example, when a user navigates to the URL<code>http://www.example.com/ajax.html#key1=value1&amp;key2=value2</code>, the AJAX application will parse the hash fragment and move the application to the "key1=value1&amp;key2=value2" state. This is similar in spirit to moving to a portion of a static document, that is, the traditional use of hash fragments. History (the back button) in AJAX applications is generally handled with these hash fragments as well. Why are hash fragments used in this way? While the same effect could often be achieved with query parameters (for example, <code>?key1=value1&amp;key2=value2</code>), hash fragments have the advantage that in and of themselves, they do not incur an HTTP request and thus no round-trip from the browser to the server and back. In other words, when navigating from<code>www.example.com/ajax.html</code> to<code>www.example.com/ajax.html#key1=value1&amp;key2=value2</code>, the web application moves to the state <code>key1=value1&amp;key2=value2</code> without a full page refresh. As such, hash fragments are an important tool in making AJAX applications fast and responsive. Importantly, however, hash fragments are not part of HTTP requests (and as a result they are not sent to the server), which is why our approach must handle them in a new way. See <a href="http://tools.ietf.org/html/rfc3986#section-3.5">RFC 3986</a> for more details on hash fragments.</li>
	<li><b>Query parameters:</b> Query parameters (for example, <code>?s=value</code> in the URL) are used by web sites and applications to post to or obtain information from the server. They incur a server round-trip and full page reload. In other words, navigating from <code>www.example.com</code> to <code>www.example.com?s=value</code> is handled by an HTTP request to the server and a full page reload. See <a href="http://tools.ietf.org/html/rfc3986#section-3.4">RFC 3986</a> for more details. Query parameters are routinely used in AJAX applications as well.</li>
	<li><b>HTML snapshot:</b> An HTML snapshot is the serialization of the DOM the browser will produce when loading the page, including executing any JavaScript that is needed to get the intial page.</li>
	<li><b>Pretty URL:</b> Any URL containing a hash fragment beginning with <code>!</code>, for example, <code>www.example.com?myquery#!key1=value1&amp;key2=value2</code></li>
	<li><b>Ugly URL:</b> Any URL containing a query parameter with the key <code>_escaped_fragment_</code>, for example,<code>www.example.com?myquery&amp;_escaped_fragment_=key1=value1%26key2=value2</code>.</li>
</ul>
<h2 id="bidirectional-between--url-to-_escaped_fragment_-url">Bidirectional between <code>#!</code> URL to <code>_escaped_fragment_</code> URL</h2>
A bidirectional mapping exists between pretty and ugly URLs:

<center><b><code>?_escaped_fragment_=key1=value1%26key2=value2</code></b>: used for crawling only, indicates an indexable AJAX app state</center><b><code>#!key1=value1&amp;key2=value2</code></b>: used for normal (browser) web site interaction

&nbsp;
<h2 id="mapping-from--to-_escaped_fragment_--format">Mapping from <code>#!</code> to <code>_escaped_fragment_</code> format</h2>
Each URL that contains a hash fragment beginning with the exclamation mark is considered a <code>#!</code> URL. Note that any URL may contain <i>at most</i> one hash fragment. Each pretty (<code>#!</code>) URL has a corresponding ugly (<code>_escaped_fragment_</code>) URL, which is derived with the following steps:
<ol>
	<li>The hash fragment becomes part of the query parameters.</li>
	<li>The hash fragment is indicated in the query parameters by preceding it with <code>_escaped_fragment_=</code></li>
	<li>Some characters are <i>escaped</i> when the hash fragment becomes part of the query parameters. These characters are listed below.</li>
	<li>All other parts of the URL (host, port, path, existing query parameters, and so on) remain unchanged.</li>
</ol>
<h2 id="mapping-from-_escaped_fragment_-format-to--format">Mapping from <code>_escaped_fragment_</code> format to <code>#!</code> format</h2>
Any URL whose query parameters contain the special token <code>_escaped_fragment_</code> as the last query parameter is considered an <code>_escaped_fragment_</code> URL. Further, there must only be one<code>_escaped_fragment_</code> in the URL, and it must be the last query parameter. The corresponding <code>#!</code> URL can be derived with the following steps:
<ol>
	<li>Remove from the URL all tokens beginning with <code>_escaped_fragment_=</code> (Note especially that the <code>=</code>must be removed as well).</li>
	<li>Remove from the URL the trailing <code>?</code> or <code>&amp;</code> (depending on whether the URL had query parameters other than <code>_escaped_fragment_</code>).</li>
	<li>Add to the URL the tokens <code>#!</code>.</li>
	<li>Add to the URL all tokens after <code>_escaped_fragment_=</code> after unescaping them.</li>
</ol>
Note: As is explained below, there is a special syntax for pages without hash fragments, but that still contain dynamic Ajax content. For those pages, to map from the <code>_escaped_fragment_</code> URL to the original URL, omit steps 3 and 4 above.
<h2 id="escaping-characters-in-the-bidirectional-mapping">Escaping characters in the bidirectional mapping</h2>
The following characters will be escaped when moving the hash fragment string to the query parameters of the URL, and must be unescaped by the web server to obtain the original URL:
<ul>
	<li>%00..20</li>
	<li>%23</li>
	<li>%25..26</li>
	<li>%2B</li>
	<li>%7F..FF</li>
</ul>
Control characters (0x00..1F and 0x7F) should be avoided. Non-ASCII text will be converted to UTF-8 before escaping.
<h2 id="role-of-the-search-engine-crawler">Role of the Search Engine Crawler</h2>
<h3 id="transformation-of-url">Transformation of URL</h3>
<ol>
	<li>URLs of the format <code>domain[:port]/path#!hashfragment</code>, for example,<code>www.example.com#!key1=value1&amp;key2=value2</code> are <i>temporarily</i> transformed into<code>domain[:port]/path?_escaped_fragment_=hashfragment</code>, such as <code>www.example.com?_escaped_fragment_=key1=value1%26key2=value2</code>. In other words, a hash fragment beginning with an exclamation mark ('!') is turned into a query parameter. We refer to the former as "pretty URLs" and to the latter as "ugly URLs".</li>
	<li>URLs of the format <code>domain[:port]/path?queryparams#!hashfragment</code> (for example,<code>www.example.com?user=userid#!key1=value1&amp;key2=value2</code>) are <i>temporarily</i> transformed into<code>domain[:port]/path?queryparams&amp;_escaped_fragment_=hashfragment</code> (for the above example, <code>www.example.com?user=userid&amp;_escaped_fragment_=key1=value1%26key2=value2</code>). In other words, a hash fragment beginning with an exclamation mark ('!') is made part of the existing query parameters by adding a query parameter with the key "_escaped_fragment_" and the value of the hash fragment without the "!". As in this case the URL already contains query parameters, the new query parameter is delimited from the existing ones with the standard delimiter '&amp;'. We refer to the former <code>#!</code> as "pretty URLs" and to the latter <code>_escaped_fragment_</code> URLs as "ugly URLs".</li>
	<li>Some characters are <i>escaped</i> when making a hash fragment part of the query parameters. See the previous section for more information.</li>
	<li>If a page has no hash fragments, but contains <code>&lt;meta name="fragment" content="!"&gt;</code> in the<code>&lt;head&gt;</code> of the HTML, the crawler will transform the URL of this page from <code>domain[:port]/path</code> to<code>domain[:port]/path?_escaped_fragment=</code> (or <code>domain[:port]/path?queryparams</code> to<code>domain[:port]/path?queryparams&amp;_escaped_fragment_=</code> and will then access the transformed URL. For example, if <code>www.example.com</code> contains <code>&lt;meta name="fragment" content="!"&gt;</code> in the head, the crawler will transform this URL into <code>www.example.com?_escaped_fragment_=</code> and fetch <code>www.example.com?_escaped_fragment_=</code> from the web server.</li>
</ol>
<h3 id="request">Request</h3>
The crawler agrees to request from the server ugly URLs of the format:
<ul>
	<li><code>domain[:port]/path?_escaped_fragment_=hashfragment</code></li>
	<li><code>domain[:port]/path?queryparams&amp;_escaped_fragment_=hashfragment</code></li>
	<li><code>domain[:port]/path?_escaped_fragment_=</code></li>
	<li><code>domain[:port]/path?queryparams&amp;_escaped_fragment_=</code></li>
</ul>
<h3 id="search-result">Search result</h3>
The search engine agrees to display in the search results the corresponding pretty URLs:
<ul>
	<li><code>domain[:port]/path#!hashfragment</code></li>
	<li><code>domain[:port]/path?queryparams#!hashfragment</code></li>
	<li><code>domain[:port]/path</code></li>
	<li><code>domain[:port]/path?queryparams</code></li>
</ul>
<h2 id="role-of-the-application-and-web-server">Role of the application and web server</h2>
<h3 id="opting-into-the-ajax-crawling-scheme">Opting into the AJAX crawling scheme</h3>
The application must opt into the AJAX crawling scheme to notify the crawler to request ugly URLs. An application can opt in with either or both of the following:
<ul>
	<li>Use <code>#!</code> in your site's hash fragments.</li>
	<li>Add a trigger to the head of the HTML of a page without a hash fragment (for example, your home page):<center>
<pre><span class="tag">&lt;meta</span> <span class="atn">name</span><span class="pun">=</span><span class="atv">"fragment"</span> <span class="atn">content</span><span class="pun">=</span><span class="atv">"!"</span><span class="tag">&gt;</span></pre>
&nbsp;

&nbsp;

</center></li>
</ul>
Once the scheme is implemented, AJAX URLs containing hash fragments with <code>#!</code> are eligible to be crawled and indexed by the search engine.
<h3 id="transformation-of-url_1">Transformation of URL</h3>
In response to a request of a URL that contains <code>_escaped_fragment_</code> (which should always be a request from a crawler), the server agrees to return an HTML snapshot of the corresponding pretty <code>#!</code> URL. See above for the mapping between <code>_escaped_fragment_</code> (ugly) URLs and <code>#!</code> (pretty) URLs.
<h3 id="serving-the-html-snapshot-corresponding-to-the-dynamic-page">Serving the HTML snapshot corresponding to the dynamic page</h3>
In response to an <code>_escaped_fragment_</code> URL, the origin server agrees to return to the crawler an HTML snapshot of the corresponding <code>#!</code> URL. The HTML snapshot must contain the same content as the dynamically created page.

HTML snapshots can be obtained in an offline process or dynamically in response to a crawler request. For a guide on producing an HTML snapshot, see the <a href="https://developers.google.com/webmasters/ajax-crawling/docs/html-snapshot">HTML snapshot</a> section.
<h2 id="pages-without-hash-fragments">Pages without hash fragments</h2>
<a name="MetaTag"></a>It may be impossible or undesirable for some pages to have hash fragments in their URLs. For this reason, this scheme has a special provision for such pages: in order to indicate that a page without a hash fragment should be crawled again in <code>_escaped_fragment_</code> form, it is possible to embed a special meta tag into the head of its HTML. The syntax for this meta tag is as follows:

&nbsp;
<pre><span class="tag">&lt;meta</span> <span class="atn">name</span><span class="pun">=</span><span class="atv">"fragment"</span> <span class="atn">content</span><span class="pun">=</span><span class="atv">"!"</span><span class="tag">&gt;</span></pre>
The following important restrictions apply:
<ol>
	<li>The meta tag may only appear in pages without hash fragments.</li>
	<li>Only "!" may appear in the <tt>content</tt> field.</li>
	<li>The meta tag must appear in the head of the document.</li>
</ol>
The crawler treats this meta tag as follows: If the page <code>www.example.com</code> contains the meta tag in its head, the crawler will retrieve the URL <code>www.example.com?_escaped_fragment_=</code>. It will index the content of the page as <code>www.example.com</code> and will display <code>www.example.com</code> in search results.

As noted above, the mapping from the <code>_escaped_fragment_</code> to the <code>#!</code> syntax is slightly different in this case: to retrieve the original URL, the web server instead simply removes the tokens<code>_escaped_fragment_=</code> (note the <code>=</code>) from the URL. In other words, you want to end up with the URL<code>www.example.com</code> instead of <code>www.example.com#!</code>.
<p class="note"><span style="color: red;"><b>Warning:</b> Should the content for <code>www.example.com?_escaped_fragment_=</code> return a 404 code, no content will be indexed for <code>www.example.com</code>! So, be careful if you add this meta tag to your page and make sure an HTML snapshot is returned.</span></p>

<h2 id="hyperlinks-and-sitemaps">Hyperlinks and Sitemaps</h2>
In order to crawl your site's URLs, a crawler must be able to find them. Here are two common ways to accomplish this:
<ol>
	<li><b>Hyperlinks:</b> An HTML page or an HTML snapshot can contain hyperlinks to pretty URLs, that is, URLs containing <code>#!</code> hash fragments. Note: The crawler will <b>not</b> follow links extracted from HTML that contain<code>_escaped_fragment_</code>.</li>
	<li><b>Sitemap:</b> Pretty URLs may be listed in Sitemaps. For more information on Sitemaps, please see<a href="http://www.sitemaps.org/">www.sitemaps.org</a>.</li>
</ol>
<h2 id="backward-compatibility-to-current-practice">Backward compatibility to current practice</h2>
Current practices will still be supported. Hijax remains a valid solution, as we describe <a href="https://developers.google.com/webmasters/ajax-crawling/docs/%20http:/googlewebmastercentral.blogspot.com/2007/11/spiders-view-of-web-20">here</a>. Giving the crawler access to static content remains the main goal.
<h2 id="existing-uses-of-">Existing uses of #!</h2>
A few web pages already use exclamation marks as the first character in a hash fragment. Because hash fragments are not a part of the URL that are sent to a server, such URLs have never been crawled. In other words, such URLs are not currently in the search index.

Under the new scheme, they can be crawled. In other words, a crawler will map each <code>#!</code> URL to its corresponding <code>_escaped_fragment_</code> URL and request this URL from the web server. Because the site uses the pretty URL syntax (that is, <code>#!</code> hash fragments), the crawler will assume that the site has opted into the AJAX crawling scheme. This can cause problems, because the crawler will not get any meaningful content for these URLs if the web server does not return an HTML snapshot.

There are two options:
<ol>
	<li>The site adopts the AJAX crawling scheme and returns HTML snapshots.</li>
	<li>If this is not desired, it is possible to opt <i>out</i> out of the scheme by adding a directive to the<code>robots.txt</code> file:<code>Disallow: /*_escaped_fragment_</code></li>
</ol>
</div>
<div class="devsite-content-footer">

Except as otherwise noted, the content of this page is licensed under the <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 License</a>, and code samples are licensed under the <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License</a>. For details, see our <a href="https://developers.google.com/site-policies">Site Policies</a>.
<p class="devsite-content-footer-date">Last updated June 30, 2015.</p>

</div>

<hr />

<blockquote>
<h1>Changing the browser-URL without refreshing page</h1>
An often overlooked feature of HTML5 is the new “onpopstate” event.

This new feature offers you a way to change the URL displayed in the browser* through javascript without reloading the page. It will also create a back-button event and you even have a state object you can interact with.

This means you won’t have to use the hash-hack anymore if you want add state to your AJAX-application, and search engines will be able to index your pages too.

So how does it work? Well, it’s fairly simple. In Chrome you write:
<pre>window.history.pushState(“object or string”, “Title”, “/new-url”);</pre>
Executing this line of code will change the URL to my-domain.com/new-url (3rd option). The “Title” string (2nd option) is intended to describe the new state, and will <em>not</em> change the title of the document as one might otherwise expect. The <a href="http://www.w3.org/TR/html5/author/history.html#session-history-entry">W3 documentation</a> states:

“Titles associated with session history entries need not have any relation with the current title of the Document. The title of a session history entry is intended to explain the state of the document at that point, so that the user can navigate the document’s history.”

So if you want the document’s title to change to match the title of the history entry, you’ll need to write a hook for that (hint: just tie a function to the onpopstate event). Finally, “object or string” (1st option) is a way to pass an object to the state which you can then use to manipulate the page.

You can programmatically invoke the back-function by running:
<pre>window.history.back();</pre>
And you can of course go forward too:
<pre>window.history.forward();</pre>
Or even go to a specific history state:
<pre>window.history.go(2);</pre>
The object you pass as the first option to the pushState function will stay with each state, so if you go back in the history, you’ll get the object for that state. If you need to manipulate a state (instead of creating a new one) you can use:
<pre>window.history.replaceState(“object or string”, “Title”, “/another-new-url”);</pre>
Note that while this will change the URL of the page, it will <em>not</em> allow the user to click the back-button to go back to the previous state because you’re replacing the current state, not adding a new one. So, this is the correct behaviour.

Personally, I think the URL should be the first parameter and then the two other options should be optional. Regardless, this feature will certainly come in handy when working with AJAX- and Flash-applications that need state (read: bookmarkable pages and back-button support). Anyone looking to make their Flash- or AJAX-application indexable by search engines so they will get better raking in Google and the likes, should also have a look at this new feature.

The most prominent implementation of this HTML5-feature that I’ve seen is in the new Flickr layout. Here’s an<a href="http://www.flickr.com/photos/aknacer/3007419018/">example page</a> (remember to enable the new layout if you haven’t already). Now, if you’re using the latest version of Chrome or Safari and click one of the sets, e.g. “Strobist”, it will slide open and the URL will change but you’ll notice that the page doesn’t reload.

It’s worth noting that Flickr uses replaceState instead of pushState – in other words, they don’t add a back-button event. I’m guessing they feel that switching back and forth between opened/closed sets is too small a change for a back-button event (I’d certainly agree with them on that decision), so instead they just replace the URL so if you copy/paste the link to a friend, they’ll see the exact same page that you did.

Another interesting thing is how Flickr still use the old hash-hack as a fallback if you’re running on browsers that don’t support this new HTML5-feature. I predict/hope that a lot of the plugins that help you easily implement the hash-hack will bake this into their core so people with new browsers can start reaping the benefits.

The latest versions of Chrome and Safari already have support for “onpopstate” and Firefox 4 will have support for it as well. Unfortunately, it seems like IE9 won’t be supporting this feature if we are to believe <a href="http://en.wikipedia.org/wiki/Comparison_of_layout_engines_(HTML5)#APIs">this Wikipedia article</a>(“Trident” is IE’s layout engine).

Check out the <a href="http://www.w3.org/TR/html5/author/history.html#history-0">W3 specification</a> for more info.

<small>* For security reasons, you can only change the path of the URL, not the domain itself. So you can change anything in the URL after my-domain.com/[change-the-stuff-here.html].</small></blockquote>

<hr />

&nbsp;
<blockquote><a href="https://github.com/browserstate/history.js" target="_blank">https://github.com/browserstate/history.js</a>

History.js gracefully supports the HTML5 History/State APIs (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports jQuery, MooTools and Prototype. For HTML5 browsers this means that you can modify the URL directly, without needing to use hashes anymore.</blockquote>

<hr />

&nbsp;
<blockquote><a href="http://www.tinywall.info/2012/02/change-browser-url-without-page-reload-refresh-with-ajax-request-using-javascript-html5-history-api-php-jquery-like-facebook-github-navigation-menu.html" target="_blank">http://www.tinywall.info/2012/02/change-browser-url-without-page-reload-refresh-with-ajax-request-using-javascript-html5-history-api-php-jquery-like-facebook-github-navigation-menu.html</a>
<h3 class="post-title entry-title"></h3>
</blockquote>
<div id="post-body-7314894645187715328" class="post-body entry-content">
<blockquote>
<div dir="ltr">When you are working with ajax, the problem is that after you have loaded some content using ajax, you can't change the URL of the browser according to the content. Because of this, <b>reloading the page causes the new ajax content to disappear</b> and it shows the previous page. Although you can resolve this problem with having some hash tag in the URL, but <b>having hash tag in the url for navigation won't be SEO friendly</b>.</div></blockquote>
</div>
<a name="more"></a>

Do you ever wonder when you are working <b>Facebook or Github</b> in a HTML5 supported browser, when you click on the links, the <b>content is loaded into the page using ajax and at the same time the URL changes in the browser</b> according to the specific page but without hash tag in the URL.

This makes use of the <b>HTML5 History API</b> to change the browser URL without refreshing the page.

Consider a page that has the following links to three menu items and a div to display the ajax content.
<pre><code>
&lt;div id="menu"&gt;
&lt;a href="menu1.php" rel="tab"&gt;menu1&lt;/a&gt; |
&lt;a href="menu2.php" rel="tab"&gt;menu2&lt;/a&gt; |
&lt;a href="menu3.php" rel="tab"&gt;menu3&lt;/a&gt;
&lt;/div&gt;
</code></pre>
To override the default action for the link(anchor tag), use the following jQuery code snippet.
<pre><code>
$(function(){
$("a[rel='tab']").click(function(e){
//code for the link action
return false;
});
});
</code></pre>
Now to get the ajax content and display it and change the browser URL to the specific location without refresh use the following code.
<pre><code>
$(function(){
$("a[rel='tab']").click(function(e){
//e.preventDefault();
/*
if uncomment the above line, html5 nonsupported browers won't change the url but will display the ajax content;
if commented, html5 nonsupported browers will reload the page to the specified link.
*/

//get the link location that was clicked
pageurl = $(this).attr('href');

//to get the ajax content and display in div with id 'content'
$.ajax({url:pageurl+'?rel=tab',success: function(data){
$('#content').html(data);
}});

//to change the browser URL to the given link location
if(pageurl!=window.location){
window.history.pushState({path:pageurl},'',pageurl);
}
//stop refreshing to the page given in
return false;
});
});
</code></pre>
For this HTML5 History API, the back button functionality won't work as normal. So we need to override back button to get the ajax content without reloading the page.
To do this add the following code snippet in the page.
<pre><code>
/* the below code is to override back button to get the ajax content without page reload*/
$(window).bind('popstate', function() {
$.ajax({url:location.pathname+'?rel=tab',success: function(data){
$('#content').html(data);
}});
});
</code></pre>
For the HTML5 History API non supported browsers, those links will reload the page to the specific location. But if its supported, you are lucky; it will get only the required content using ajax and display it without reloading the entire page.

<a href="http://demo.tinywall.info/html5-history-api" target="_blank">Live Demo</a> | <a href="https://github.com/tinywall/demo.tinywall.info/archive/html5-history-api.zip" target="_blank">Download Code</a>
<div></div>
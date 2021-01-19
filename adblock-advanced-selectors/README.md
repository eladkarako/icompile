<div class="post-text">
<h2>Advanced selectors. <sup>Like A BOSS! &#x1f454;</sup></h2>
<blockquote>&#x1f481; <em><sub>which are also applied to <strong>JavaScript</strong>'s <code>element.querySelector('....')</code> and <code>element.querySelectorAll('....')</code>, and, naturally <strong>CSS3</strong>.</sub></em></blockquote>
<ul>
 	<li><code>img[src^="https://example.com/ad"]</code> (☞ "start with" match)
<blockquote>will hide every image that <strong>starts</strong> with that string, (ad, ads, adware, ad_hello.. - included)</blockquote>
</li>
 	<li><code>*[class*="ads-"]</code> (☞ this is "middle match" or "everything match")
<blockquote>class attribute is a long space-separated string ⚋⚋, this will hide <strong>elements</strong>, which are having anything (partial match, but case-sensitive!) looking like this, it will hide:
<ul>
 	<li><code>&lt;div class="toobar-ads-top foo"&gt;....&lt;/div&gt;</code></li>
 	<li><code>&lt;span class="vendorads-2 hello"&gt;....&lt;/span&gt;</code></li>
 	<li>but also stuff like <code>&lt;div class="no-ads-at-all"&gt;...&lt;/div&gt;</code> ;)</li>
</ul>
</blockquote>
</li>
 	<li><code>a[href$="/bad_page.html"]</code> (☞ "match end")
<blockquote>can help you hide links that are ending with this string, the long string can be something like this: <code>https://example.com/pages/other_stuff/bad_page.html</code>, and also <code>http://cdn.example.com/just_another/bad_page.html</code>.</blockquote>
</li>
</ul>
see <a href="https://adblockplus.org/filter-cheatsheet" rel="nofollow">https://adblockplus.org/filter-cheatsheet</a> and <a href="https://adblockplus.org/en/filters#elemhide_css" rel="nofollow">https://adblockplus.org/en/filters#elemhide_css</a>
<h2>first test you use a correct syntax, open the developer-console and try to use <code>document.querySelectorAll('img[src*="your_image.src"]')</code> <sub>(or another selector of your choice that actually matches anything in your page</sub></h2>
if this gets you an answer: <img src="https://i.stack.imgur.com/ZabVy.jpg" alt="" />
<sub>(<a href="https://i.stack.imgur.com/ZabVy.jpg" rel="nofollow">full size</a>)</sub>
<h2>You can go ahead and change it (slightly) to the AdBlock format which uses <code>()</code> instead of <code>[]</code>,</h2>
meaning something like this <code>#(id^="ads-container-")</code>
or <code>||www.example.com#(class*="ads-")^</code>

✨Enjoy Ads Free Browsing ✨ &#x1f609;<sub><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=7994YX29444PA&amp;lc=US&amp;item_name=Elad%20Karako&amp;item_number=stackoverflow%2dcoffee%2dicon&amp;amount=0%2e50&amp;currency_code=USD&amp;bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted" rel="nofollow">☕</a></sub>

also answered in <a href="http://stackoverflow.com/questions/14079048/adblock-plus-hids-elements-with-ids-or-class-with-the-word-ad/34836907#34836907" target="_blank">stackoverflow</a>.

</div>
<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_google_developer2.gif" alt="" width="140" height="48" />

Adding a small addition to the head of the page will speed-up the loading of the <em>Google Analytics</em> code you most-probably have on your page.

<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_preload_analytics.png" alt="" width="823" height="253"/>

And it is super easy too!
for the most parts you only need to add a single line:
<!--more-->

<code>&ltlink rel="preload" as="script" href="https://www.google-analytics.com/analytics.js"/&gt;</pre>
to the HEAD part of the document, ideally just before the <code>&lt;HEAD&gt;</code> part.

<hr/>

If you are using some of the more advance features of Google Analytics,
such as <code>linkid</code> <em>for <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-link-attribution" target="_blank">Enhanced Link Attribution</a></em> or <code>ec</code> <em>for <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce" target="_blank">Ecommerce Tracking</a></em>
you may even provide an additional overall speed-up by using:
<pre>
&lt;link rel="preload" as="script" href="//www.google-analytics.com/analytics.js"/&gt; 
&lt;link rel="preload" as="script" href="//www.google-analytics.com/plugins/ua/linkid.js"/&gt; 
&lt;link rel="preload" as="script" href="//www.google-analytics.com/plugins/ua/ec.js"/&gt;
</pre>

<hr/>

Lastly, if you are still using the older Google Analytics which uses <code>ga.js</code> instead of <code>analytics.js</code>
(and you don't want to <a href="https://developers.google.com/analytics/devguides/collection/upgrade/reference/gajs-analyticsjs" target="_blank">upgrade</a>..) - just use:
<pre>
&lt;link rel="preload" as="script" href="//www.google-analytics.com/ga.js" /&gt;
</pre>

<hr/>

Notes:
- Consider using <code>https://</code> instead of <code>//</code> to always load Google Analytics from it's secure-location.
- For the older (ga.js) Google Analytics <strong>with linkid</strong> use:
<pre>
&lt;link rel="preload" as="script" href="//www.google-analytics.com/ga.js"/&gt;
&lt;link rel="preload" as="script" href="//www.google-analytics.com/plugins/ga/inpage_linkid.js"/&gt;
</pre>
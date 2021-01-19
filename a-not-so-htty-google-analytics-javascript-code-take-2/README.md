<img src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com__a_not_so_htty_google_analytics_javascript_code_take_2.png" />

continuing the <a href="https://icompile.eladkarako.com/a-not-so-shitty-google-analytics-javascript-code/">first article I've wrote some time ago</a>...
...I've found out some improvement to apply both the original and my (later) modification of the <em>Google-Analytics</em> engine: 

<a href="https://gist.github.com/eladkarako/c4f7ea1b59e5e42e99f7c0adb304046b#file-a-not-so-htty-google-analytics-javascript-code-take-2-js">https://gist.github.com/eladkarako/c4f7ea1b59e5e42e99f7c0adb304046b#file-a-not-so-htty-google-analytics-javascript-code-take-2-js</a>

<iframe type="text/html" charset="UTF-8" loading="eager" lazyload="off" importance="high"
  src="https://icompile.eladkarako.com/_resources/embed_gist.html?gistuser=eladkarako&gistid=c4f7ea1b59e5e42e99f7c0adb304046b&origin=https%3A%2F%2Ficompile.eladkarako.com" 
  referrerpolicy="no-referrer" sandbox="allow-same-origin allow-scripts allow-top-navigation" 
  seamless="false" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" 
  style="height:300px;"
></iframe>


...explained:
<ul>
<li>
I HOSTS-block <code>www.google-analytics.com</code> and <code>ssl.google-analytics.com</code>.
the original code, didn't check if <code>window.ga</code> was defined, result with JavaScript-exception, breaking the page and every JavaScript code after it..
</li>
<li>
On the same 'spirit', but different- 
the original code loads external-resource (<code>analytics.js</code>) dynamically, but executes <code>ga(...)</code> function sequentially, sometimes (in about 20%, in most modern browsers), the remote-resource is not loading fast enough,
so the later execution of <code>ga</code>-function, does nothing. That's bad.
</li>
<li>
the prefix of the whole preparation, setting <code>GoogleAnalyticsObject</code>, <code>ga.l</code>, <code>ga.q</code> is redundant, since the <code>analytics.js</code> will overwrite those definitions anyway...
</li>
<li>
we might take advantage of new defer attribute, to load the JavaScript resource after the page has done loading (along with executing the rest of the <code>ga</code> function operations, only on the script onload event (which both ignore error cases and provide asynchronous operation, <strong>the proper-way!</strong>)
</li>
</ul><ul>

btw, its <span style="border-bottom:2px double red">not official</span> (yet...)
</ul>
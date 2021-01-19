<img src="https://icompile.eladkarako.com/_uploads/2017/05/icompile.eladkarako.com_apkmirror_search_url.png" alt="" width="569" height="97" />

<pre>
https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=YOUR_SEARCH_TERM
</pre>

for example:
<a href="https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=whatsapp" target="_blank">https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=whatsapp</a>
or
<a href="https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=youtube" target="_blank">https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=youtube</a>
or
<a href="https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=swiftkey" target="_blank">https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=swiftkey</a>

<hr/>

naturally it would have been better if the website owners were embedding
the following script schema:

<pre><span style='color:#808030; '>&lt;</span>script type<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>application/ld+json</span><span style='color:#800000; '>"</span><span style='color:#808030; '>&gt;</span>
<span style='color:#800080; '>{</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>@context</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span>           <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://schema.org</span><span style='color:#800000; '>"</span>
<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>@type</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span>              <span style='color:#800000; '>"</span><span style='color:#0000e6; '>WebSite</span><span style='color:#800000; '>"</span>
<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span>                <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://www.apkmirror.com/</span><span style='color:#800000; '>"</span>
<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>name</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span>               <span style='color:#800000; '>"</span><span style='color:#0000e6; '>APKMirror - Free APK Downloads</span><span style='color:#800000; '>"</span>
<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>alternateName</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span>      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>Download Free Android APKs #APKPLZ</span><span style='color:#800000; '>"</span>
<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>logo</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span>               <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://www.apkmirror.com/wp-content/themes/APKMirror/images/apple-touch-icon.png</span><span style='color:#800000; '>"</span>
<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>potentialAction</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800080; '>{</span>  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>@type</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>SearchAction</span><span style='color:#800000; '>"</span>
                     <span style='color:#808030; '>,</span>  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>target</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://www.apkmirror.com/?post_type=app_release&amp;searchtype=apk&amp;s={search_term_string}</span><span style='color:#800000; '>"</span>
                     <span style='color:#808030; '>,</span>  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>query-input</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>required name=search_term_string</span><span style='color:#800000; '>"</span>
                     <span style='color:#800080; '>}</span>
<span style='color:#800080; '>}</span>
<span style='color:#808030; '>&lt;</span><span style='color:#808030; '>/</span>script<span style='color:#808030; '>&gt;</span>
</pre>

<hr/>

why it is important to a website to have this "thing" in the main index-page?
1. Desktop browsers (Chrome) will add the website with embedded search into the address-bar,
for example, I have (similar) <code>application/ld+json</code> in <code>icompile.eladkarako.com</code>,
which means I could start typing the URL following by SPACE and get a built-in search from within the browser:

<img src="https://icompile.eladkarako.com/_uploads/2017/05/icompile.eladkarako.com_my_search_feature_in_icompile_and_chrome.png" alt="" width="663" height="120" />

2. it will work pretty well with mobile-browsers as well, saving typing and browsing-time to the website-visitor (which is a good thing).

3. it works well with Google search and other spiders, which will build-up a more efficient index/map of the website.

4. it is pretty much "the standard" (or at least a "best practice") when designing a friendly, browse'able website.


<hr/>

once you've visited a website that has the <code>application/ld+json</code> code inside,
it should add it automatically to your website,
but you may also access that section, quite easily for manual editing:

<img src="https://icompile.eladkarako.com/_uploads/2017/05/icompile.eladkarako.com_my_search_feature_in_icompile_and_chrome_how_to_edit.png" alt="" width="441" height="328" />

<img src="https://icompile.eladkarako.com/_uploads/2017/05/icompile.eladkarako.com_my_search_feature_in_icompile_and_chrome_how_to_edit_manual_edit.png" alt="" width="1046" height="648" />

<hr/>

Here are few more links :)
- <a href="https://developers.google.com/search/docs/data-types/sitelinks-searchbox" target="_blank">https://developers.google.com/search/docs/data-types/sitelinks-searchbox</a>
- <a href="https://schema.org/SearchAction" target="_blank">https://schema.org/SearchAction</a>
- <a href="https://github.com/archon810/apkmirror-public/issues/18#issue-231810436" target="_blank">https://github.com/archon810/apkmirror-public/issues/18#issue-231810436</a>
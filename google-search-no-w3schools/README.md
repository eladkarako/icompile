I've looked everywhere for a nice solution that will remove the ugly unuseful, crappy w3schools results from the Google-search results-page, initially I've used JavaScript to hide it (bookmarklet), then some enhanced JavaScript with Chrome-extension support, but the best thing you can do is don't get any of those w3schools result in the first place,

I've just came up with the most simple solution: exclude the w3school domains!

<!--more-->
<hr/>
You can prevent results from W3Schools from appearing in your search results by using the <code>-site:</code> prefix along with the <code>w3schools.com</code> domain,

But this is quite annoying to type it every time in your Google-search along with your search-query..
..luckily there is a better way.

Follow the instructions below to make every search you do from the address-bar automatically exclude w3school results without you have need to type anything but your search-query!

<ol>
<li>Open <code>chrome://settings/searchEngines</code></li>
<li>Scroll to the bottom and in <code>Other Search Engines</code> click one of the empty slots.
Enter:
  <ul>
    <li>g-no-w3s</li>
    <li>g-no-w3s</li>
    <li><code>https://www.google.com/search?q=<strong style="font-size:14pt;">-site%3A*.w3schools.com+</strong>%s</code>
    <sup>*you can use any domain you'll like to <code>google.co.il</code>, <code>google.uk</code> etc..</sup>
    </li>
   <ul>
</li>
<li>Press [ENTER]</li>
<li>look for a newly created line in same box (might be placed above), then, hover your mouse over the newly created line and click the blue <code>make default</code> button, your line will be added to the top-box.</li>
<li><strong>Done.</strong> 

<img src="https://icompile.eladkarako.com/_uploads/2016/08/icompile.eladkarako.com_remove_w3scool_results_from_google_search_results_page_using_new_google_chrome_search_engine_setting.png" alt="icompile.eladkarako.com_remove_w3scool_results_from_google_search_results_page_using_new_google_chrome_search_engine_setting" width="583" height="76" class="aligncenter size-full wp-image-6101" />

You can search directly from your search/address-bar</li>
</ol>

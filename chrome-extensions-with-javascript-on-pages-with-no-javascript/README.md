Chrome Extension Developers - setTimeout/setInterval Won't Work On Pages With No JS Support!

While javascript will work just fine as general,

everything you put in window/self/top/etc.. and methods from window object such as setTimeout/setInterval will not be executed if the page has no-JavaScript support, this happens if the user has JavaScript disabled in its browser, or if the page has a hard-set policy (by HTTP headers),

But if you'll be smart you could still execute your javascript on 3 page-life-cycle events - start (before content), end (DOMContentLoaded) and idle (after window.onload),

you can include a call to setTimeout/setInterval in your code, in addition to a regular-standard method call,

for your convenient, you can place all your variables and main functions in javascript that loads at the `initial` state in the page's life-cycle,
make sure not to atach it in any way to the window object (for example instead of <code>window.my_function = function(...</code> use simply <code>function my_function(..</code>, 
and it will be available for you to use and reuse in all of the other javascript files, as part of your chrome-extension scope,


this means Chrome WILL ALLOW you to load as much javascript as you want into pages "with no javascript support",
as long you avoid (or just make optional) the use of setInterval/setTimeout and other "hard"-related window functions and attributes.

You can see a full working example on how to make such extension, that will optionally use the setInterval method,
but with basic functionality that will work just fine on pages with no javascript support on my github page
(Just look for any repositories starting with the name `Chrome-Extension-..`).

Here is one example of an extension that uses XMLHTTPRequest (xhr),

<img src="https://icompile.eladkarako.com/_uploads/2016/12/icompile.eladkarako.com_chrome_extension_with_javascript_on_pages_with_no_javascript_sourceforge_direct.png" alt="" width="640" height="400"/>

that works perfectly fine for pages with no javascript, although <strong>I AM</strong> including an improved execution, done with setInterval (that will be executed every 500 milliseconds), I do not relay on it, and do call for the main action on the 3 states that I able to (start ideal and end).



', 'Chrome Extensions With JavaScript
I maintain <a href="http://hosts.eladkarako.com" target="_blank">host.eladkarako.com</a> which is a huge list of bad hostnames,
'till now there are the main adblock list with "block rule" such as:
<code>||friendlyadvertisements.com^</code>

BUT - I've figured I should probably also maintain hiding rules for each hostname,
it is relatively easy, and would benefit users which are getting visual elements such as links and such 
which will still redirect the those bad domain, a, iframes, forms are the most targeted, while iframes would be blocked, and display an error message,
hiding rules, will also make them <code>display:none</code> which will help clean up the pages, even more :)

including href, src, onmousedown, onclick elements will help to benefit users keep their browser safe (less clickjacking!)

I've made a post in icompile.eladkarako.com instead of just adding another AdBlock list because
I wish this decision will get some more buzz through Google (the analytics shows this website gets 20,000 views a day so, in purely statistical manner someone would probably find this idea useful :) )


hiding rules looks like this
<pre>
##[href*="friendlyadvertisements.com"]
##[src*="friendlyadvertisements.com"]
##[onmousedown*="friendlyadvertisements.com"]
##[onmouseup*="friendlyadvertisements.com"]
##[ontouchstart*="friendlyadvertisements.com"]
##[onclick*="friendlyadvertisements.com"]
</pre>

while a-tags may sometimes wrap elements or even be styles themselves into a button (*ahammm* bad practice)
most of UI-frameworks usually uses mouse/touch related events quickly switching the href or opening window with the following "bad" hostname,
by hiding it - no clickjacking!

spread the idea,
if you are the owner of hosts list - get yourself an AdBlock list right away!
use my example at <a href="http://github.com/eladkarako/hosts.eladkarako.com" target="_blank">github.com/eladkarako/hosts.eladkarako.com</a>!
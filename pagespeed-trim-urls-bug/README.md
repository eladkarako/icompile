If you'll be using ModPageSpeed and the 'trim_urls' filter,
there is a big chance your links will be unusable due to an old bug,
that the URL is rewritten with no <code>/</code> prefix.

<img src="https://icompile.eladkarako.com/_uploads/2016/07/icompile.eladkarako.com_pagespeed_bug_of_the_rewrite_of_short_urls_missing_slash_prefix_problem.png" alt="icompile.eladkarako.com_pagespeed_bug_of_the_rewrite_of_short_urls_missing_slash_prefix_problem" width="1018" height="585" />

<!--more-->
<hr/>
Depending on your fallback is, you will probably get thrown to your 404 page.

In-case you run your website in a sub-domain, you will be probably thrown back to the base-domain name,
(Quite common if you write on WordPress, which for the lack of description I describe as "a self-hosted sub-domain, but not a fully self-hosted-domain") - which if you do-not have under your name, might be a really bad news for you (loosing site-visitors).


In my-case at-least I sort-of got-left in the parent-domain..
<img src="https://icompile.eladkarako.com/_uploads/2016/07/icompile.eladkarako.com_pagespeed_bug_of_the_rewrite_of_short_urls_missing_slash_prefix_problem_404_thrown.jpg" alt="icompile.eladkarako.com_pagespeed_bug_of_the_rewrite_of_short_urls_missing_slash_prefix_problem_404_thrown" width="983" height="670" />

<hr/>

How to fix it?
- check if you have a several rewrite-rules on your server-side (<code>.htaccess</code>)
a common one is the fallback to one file (also known as pit-fall), which used a lot in content-engines (such as WordPress)
change this:
<pre><span style='color:#696969; '># BEGIN WordPress</span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>IfModule</span> <span style='color:#0000e6; '>mod_rewrite.c</span><span style='color:#a65700; '>></span>
<span style='color:#800000; font-weight:bold; '>RewriteEngine</span> <span style='color:#074726; '>On</span>
<span style='color:#800000; font-weight:bold; '>RewriteBase</span> /
<span style='color:#800000; font-weight:bold; '>RewriteRule</span> ^index\\.php$ <span style='color:#808030; '>-</span> [L]
<span style='color:#800000; font-weight:bold; '>RewriteCond</span> %{REQUEST_URI}        !pagespeed
<span style='color:#800000; font-weight:bold; '>RewriteCond</span> %{REQUEST_FILENAME}   !<span style='color:#808030; '>-</span>f
<span style='color:#800000; font-weight:bold; '>RewriteCond</span> %{REQUEST_FILENAME}   !<span style='color:#808030; '>-</span>d
<span style='color:#800000; font-weight:bold; '>RewriteRule</span> . /index.php [L]
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>IfModule</span><span style='color:#a65700; '>></span>
<span style='color:#696969; '># END WordPress</span>
</pre>

to this:
<pre><span style="color:#696969; "># BEGIN WordPress</span>
<span style="color:#a65700; ">&lt;</span><span style="color:#800000; font-weight:bold; ">IfModule</span> <span style="color:#0000e6; ">mod_rewrite.c</span><span style="color:#a65700; ">&gt;</span>
<span style="color:#800000; font-weight:bold; ">RewriteEngine</span> <span style="color:#074726; ">On</span>
<span style="color:#800000; font-weight:bold; ">RewriteBase</span> /
<span style="color:#800000; font-weight:bold; ">RewriteRule</span> ^index\\.php$ <span style="color:#808030; ">-</span> [L]
<span style="color:#800000; font-weight:bold; ">RewriteCond</span> %{REQUEST_FILENAME}   !<span style="color:#808030; ">-</span>f
<span style="color:#800000; font-weight:bold; ">RewriteCond</span> %{REQUEST_FILENAME}   !<span style="color:#808030; ">-</span>d
<span style="background:none rgba(178,245,180,.8);color:#696969; ">##don't enable with 'trim_urls' filter!</span>
<span style="background:none rgba(178,245,180,.8);color:#696969; ">##RewriteCond %{REQUEST_URI}        !pagespeed</span>
<span style="color:#800000; font-weight:bold; ">RewriteRule</span> . /index.php [L]
<span style="color:#a65700; ">&lt;/</span><span style="color:#800000; font-weight:bold; ">IfModule</span><span style="color:#a65700; ">&gt;</span>
<span style="color:#696969; "># END WordPress</span>
</pre>

- Links (URL/URI/src/href/..whatever..) are calculated according to <a href="https://www.w3.org/TR/html4/references.html#ref-RFC1808" target="_blank">https://www.w3.org/TR/html4/references.html#ref-RFC1808</a>, 
- Adding a <code>base</code> tag (according to <code>RFC1808</code>) is a good practice anyway,
for example: <code>&#60;base href=&#34;http:&#47;&#47;icompile.eladkarako.com&#47;&#34;&#47;&#62;</code> will support hashtag or partial links, but it still requires the <code>/</code> prefix... :[

- you may use server-side or even client-side JavaScript to rewrite links, adding <code>/</code> prefix to all lacking one
- but it is really not a good practice, and it leaves your system dependable on many variables in which if some will lack functionality 
- for example you are crawled by a web-crawler with no JavaScript support, and all your crawled links leads to 404 page :[ )
- writing a server-side PHP code just to handle a server-based extension bug is not a good practice either, since the system is no longer stable to run itself, and became sluggish (server-side extensions a written in C/C++ for a reason!).


So?
if adding (the the very top of the HEAD section) <code>&#60;base target=&#34;_top&#34; href=&#34;http:&#47;&#47;icompile.eladkarako.com&#47;&#34;&#47;&#62;</code> does not help you in anyway - 
- Don't fix it! Just disable the feature,
- mark-out the <code>ModPagespeedEnableFilters trim_urls</code> line :(



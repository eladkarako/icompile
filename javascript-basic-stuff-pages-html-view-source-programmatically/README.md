There are 2 options   <sub>[ and a workaround, which I will Explain later.. ]</sub>
<!--more-->


<h2>#1. "HTML" From D.O.M</h2>
<pre><code><span class="com">//get HTML from DOM (not really HTML from the server but an interrupted one - the plus is that it is immediate to fetch).</span>
<span class="pun">(</span><span class="kwd">function</span><span class="pun">(){</span>
  <span class="str">"use strict"</span><span class="pun">;</span>

  <span class="kwd">var</span><span class="pln"> d </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">createElement</span><span class="pun">(</span><span class="str">"div"</span><span class="pun">);</span><span class="pln">
  d</span><span class="pun">.</span><span class="pln">style</span><span class="pun">.</span><span class="pln">cssText </span><span class="pun">=</span> <span class="str">"max-width:500px; max-height:200px; background-color:rgba(223,223,223,.7); border:3px solid rgba(0,0,0,.5); padding:5px; margin:10px; overflow-x:hidden; overflow-y:auto; word-break:break-word; font-family:'Courier New',Consolas,Lucida Console,monospace,sans-serif; text-shadow:.3px .3px rgba(0,0,0,.2),-0.3px -0.3px rgba(0,0,0,.2); border-radius:5px; box-shadow:1px 1px 5px rgba(0,0,0,.3),-1px -1px 5px rgba(0,0,0,.3)"</span><span class="pun">;</span><span class="pln">
  d</span><span class="pun">.</span><span class="pln">appendChild</span><span class="pun">(</span><span class="pln">document</span><span class="pun">.</span><span class="pln">createTextNode</span><span class="pun">(</span><span class="pln">document</span><span class="pun">.</span><span class="pln">querySelector</span><span class="pun">(</span><span class="str">'html'</span><span class="pun">).</span><span class="pln">innerHTML</span><span class="pun">));</span><span class="pln">
  document</span><span class="pun">.</span><span class="pln">querySelector</span><span class="pun">(</span><span class="str">'body'</span><span class="pun">).</span><span class="pln">appendChild</span><span class="pun">(</span><span class="pln">d</span><span class="pun">);</span>
<span class="pun">}());</span></code></pre>
this is the 'safe' result, without the <code>&lt;html&gt;</code> wrapping and <code>doctype</code>: <img src="http://i.stack.imgur.com/ZD7KC.png" alt="from DOM" />
<h2>#2. HTML From Server (Through "Self-Ajax")</h2>
<pre><code><span class="com">//get HTML from server, its the real-deal, but requires internet-connection (again...), since its the same-page you are OK to Ajax (domain wise..)</span>
<span class="pun">(</span><span class="kwd">function</span><span class="pun">(){</span>
  <span class="kwd">var</span><span class="pln"> xhr </span><span class="pun">=</span> <span class="kwd">new</span> <span class="typ">XMLHttpRequest</span><span class="pun">();</span><span class="pln">
  xhr</span><span class="pun">.</span><span class="pln">responseType </span><span class="pun">=</span> <span class="str">"text"</span><span class="pun">;</span><span class="pln">
  xhr</span><span class="pun">.</span><span class="pln">onreadystatechange </span><span class="pun">=</span> <span class="kwd">function</span><span class="pun">(</span><span class="pln">e</span><span class="pun">){</span>
    <span class="kwd">var</span><span class="pln"> 
      xhr </span><span class="pun">=</span><span class="pln"> e</span><span class="pun">.</span><span class="pln">target
      </span><span class="pun">,</span><span class="pln"> d </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">createElement</span><span class="pun">(</span><span class="str">"div"</span><span class="pun">)</span>
      <span class="pun">;</span>

    <span class="kwd">if</span><span class="pun">(</span><span class="pln">xhr</span><span class="pun">.</span><span class="pln">DONE </span><span class="pun">!==</span><span class="pln"> xhr</span><span class="pun">.</span><span class="pln">readyState</span><span class="pun">)</span> <span class="kwd">return</span><span class="pun">;</span><span class="pln">

    d</span><span class="pun">.</span><span class="pln">style</span><span class="pun">.</span><span class="pln">cssText </span><span class="pun">=</span> <span class="str">"max-width:500px; max-height:200px; background-color:rgba(223,223,223,.7); border:3px solid rgba(0,0,0,.5); padding:5px; margin:10px; overflow-x:hidden; overflow-y:auto; word-break:break-word; font-family:'Courier New',Consolas,Lucida Console,monospace,sans-serif; text-shadow:.3px .3px rgba(0,0,0,.2),-0.3px -0.3px rgba(0,0,0,.2); border-radius:5px; box-shadow:1px 1px 5px rgba(0,0,0,.3),-1px -1px 5px rgba(0,0,0,.3)"</span><span class="pun">;</span><span class="pln">

    d</span><span class="pun">.</span><span class="pln">appendChild</span><span class="pun">(</span><span class="pln">document</span><span class="pun">.</span><span class="pln">createTextNode</span><span class="pun">(</span><span class="pln">xhr</span><span class="pun">.</span><span class="pln">responseText</span><span class="pun">));</span><span class="pln">
    document</span><span class="pun">.</span><span class="pln">querySelector</span><span class="pun">(</span><span class="str">'body'</span><span class="pun">).</span><span class="pln">appendChild</span><span class="pun">(</span><span class="pln">d</span><span class="pun">);</span>
  <span class="pun">}</span><span class="pln">
  xhr</span><span class="pun">.</span><span class="pln">open</span><span class="pun">(</span><span class="str">"GET"</span><span class="pun">,</span> <span class="typ">String</span><span class="pun">(</span><span class="pln">window</span><span class="pun">.</span><span class="pln">location</span><span class="pun">.</span><span class="pln">href</span><span class="pun">),</span> <span class="kwd">true</span><span class="pun">);</span><span class="pln">
  xhr</span><span class="pun">.</span><span class="pln">send</span><span class="pun">();</span>
<span class="pun">}());</span></code></pre>
<h1>I've ran both in the console, in this current page <sub>(naturally before I've wrote this answer..)</sub></h1>
and this is the side by side result, notice the difference.

<img src="http://i.stack.imgur.com/jaHM0.png" alt="Side By Side" />

notes and stuff..:
<ul>
	<li>you might use the html's <code>outerHTML</code> (but its not always available in every standard DOM)</li>
	<li>ease up your server's load by compiling/rendering the page's source dynamically in client-side using<a href="https://mustache.github.io/" rel="nofollow">mustache</a> or <a href="http://handlebarsjs.com/" rel="nofollow">handlebars</a>.</li>
	<li>you can store the text of the page, before any (most) of the modifications in the <code>localStorage</code>, fork the code above, and make a small (and wonderful) script, place this script in the page's <code>head</code>just before you start modifying the page's source..</li>
</ul>
&nbsp;

my answer available here:
http://stackoverflow.com/a/29131388/257319
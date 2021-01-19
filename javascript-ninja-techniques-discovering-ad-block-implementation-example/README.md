<img src="https://icompile.eladkarako.com/_uploads/2014/10/sprite-main.png" alt="sprite-main" rem-width="116" rem-height="115" class="alignright size-full wp-image-2000" />
Discover if the browser is running any version of *AdBlock*.
<!--more-->


<br/>
place this in your html.
<pre>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span> <span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>afs_ads</span><span style='color:#0000e6; '>"</span><span style='color:#a65700; '>></span><span style='color:#074726; '>&amp;</span><span style='color:#074726; '>nbsp</span><span style='color:#074726; '>;</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
</pre>

<br/>

the discover part should be in a non-blocking DOM-segment, we would like to give AdBlock plugin "a chance" to be loaded and handle all of page-ads.

<br/>

for example:
<pre>
window.discover_adblock = function(){
  setTimeout(function() {
    //
    //  ... here ...
    //
  }, 1000);
}, false);
</pre>

the timeout may be applied when executing the function, which is a better practice,
and thats the way I'm gonn'a use.

<br/>

running the method is done, as a trigger to "window load complete" event.
<pre>
if(!! window.addEventListener){
  window.addEventListener("load", window.discover_adblock, false);
}else{
  window.attachEvent("onload", window.discover_adblock); //IE
}
</pre>

<br/>

<em>b.t.w a more compatible way is:
<small>it will work even in IE4, Mozilla and Netscape..</small>
<pre>
(function(window){
var old = window.onload;
window.onload = function(){
  old.apply(this, arguments);
  window.discover_adblock.apply(this, arguments);
};
}(window));
</pre>
</em>

<br/>

the main problem is how to know if an ad has being blocked.
AdBlock method of removing or hiding element varies based on their browser and version,

while Firefox's AdBlock uses Dom-Removal, Chrome does mostly hiding, but newer versions also avoid modifying the element itself but wrapping it with a hidden container (which evidently hides it..),

have a look <small><em>(4th wall break :) )</em></small> this implementation

<pre>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>head</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>head</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span> <span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>afs_ads</span><span style='color:#0000e6; '>"</span><span style='color:#a65700; '>></span><span style='color:#074726; '>&amp;</span><span style='color:#074726; '>nbsp</span><span style='color:#074726; '>;</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>

<span style='color:#696969; '>&lt;!--</span><span style='color:#696969; '> .....rest of the page..... </span><span style='color:#696969; '>--></span>

<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span>
  window<span style='color:#808030; '>.</span>discover_adblock <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>var</span> target<span style='color:#808030; '>,</span> isBlocked <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>false</span><span style='color:#800080; '>;</span>

    target <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>querySelector<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>.afs_ads</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>//or null..</span>
    realstyle <span style='color:#808030; '>=</span> <span style='color:#808030; '>(</span>window<span style='color:#808030; '>.</span>getComputedStyle<span style='color:#808030; '>)</span> <span style='color:#808030; '>&amp;&amp;</span> window<span style='color:#808030; '>.</span>getComputedStyle<span style='color:#808030; '>(</span>target<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>//or null..</span>
    parent_realstyle <span style='color:#808030; '>=</span> <span style='color:#808030; '>(</span>window<span style='color:#808030; '>.</span>getComputedStyle<span style='color:#808030; '>)</span> <span style='color:#808030; '>&amp;&amp;</span> window<span style='color:#808030; '>.</span>getComputedStyle<span style='color:#808030; '>(</span>target<span style='color:#808030; '>.</span>parentNode<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>//or null..</span>
    isBlocked <span style='color:#808030; '>=</span> <span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>undefined</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> target<span style='color:#808030; '>)</span> <span style='color:#808030; '>||</span>        <span style='color:#696969; '>//Firefox's plugin is a killer</span>
                <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>!</span>target<span style='color:#808030; '>.</span>innerHTML <span style='color:#808030; '>&amp;&amp;</span> target<span style='color:#808030; '>.</span>innerHTML<span style='color:#808030; '>.</span>length <span style='color:#808030; '>===</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>||</span>
                <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>!</span>target<span style='color:#808030; '>.</span>clientHeight <span style='color:#808030; '>&amp;&amp;</span> target<span style='color:#808030; '>.</span>clientHeight <span style='color:#808030; '>===</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>||</span>

                <span style='color:#696969; '>//older AdBlock for Chrome used to hide the element itself.</span>
                <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>!</span>realstyle <span style='color:#808030; '>&amp;&amp;</span> realstyle<span style='color:#808030; '>.</span>height <span style='color:#808030; '>===</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>||</span>
                <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>!</span>realstyle <span style='color:#808030; '>&amp;&amp;</span> realstyle<span style='color:#808030; '>.</span>width <span style='color:#808030; '>===</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>||</span>
                <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>!</span>realstyle <span style='color:#808030; '>&amp;&amp;</span> realstyle<span style='color:#808030; '>.</span>display<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toLowerCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>!==</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>none</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>||</span>
                <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>!</span>realstyle <span style='color:#808030; '>&amp;&amp;</span> realstyle<span style='color:#808030; '>.</span>visibility<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toLowerCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>!==</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>hidden</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span>

                <span style='color:#696969; '>//newer are also (or "only") wrapping the element in a hidden container.</span>
                <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>!</span>parent_realstyle <span style='color:#808030; '>&amp;&amp;</span> parent_realstyle<span style='color:#808030; '>.</span>height <span style='color:#808030; '>===</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>||</span>
                <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>!</span>parent_realstyle <span style='color:#808030; '>&amp;&amp;</span> parent_realstyle<span style='color:#808030; '>.</span>width <span style='color:#808030; '>===</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>||</span>
                <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>!</span>parent_realstyle <span style='color:#808030; '>&amp;&amp;</span> parent_realstyle<span style='color:#808030; '>.</span>display<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toLowerCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>!==</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>none</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>||</span>
                <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#808030; '>!</span>parent_realstyle <span style='color:#808030; '>&amp;&amp;</span> parent_realstyle<span style='color:#808030; '>.</span>visibility<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toLowerCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>!==</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>hidden</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span>
                <span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span>isBlocked <span style='color:#808030; '>===</span> <span style='color:#0f4d75; '>true</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
      console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>adblock note:  an adblock is used.</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span><span style='color:#800000; font-weight:bold; '>else</span><span style='color:#800080; '>{</span>
      console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>adblock note:  an adblock is NOT being used.</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span>
  <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

  <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>window<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>var</span> old <span style='color:#808030; '>=</span> window<span style='color:#808030; '>.</span>onload<span style='color:#800080; '>;</span>
    window<span style='color:#808030; '>.</span>onload <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
      <span style='color:#800000; font-weight:bold; '>var</span> _this <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>,</span> _arguments <span style='color:#808030; '>=</span> <span style='color:#797997; '>arguments</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>//made available along the way..</span>

      old<span style='color:#808030; '>.</span>apply<span style='color:#808030; '>(</span>_this<span style='color:#808030; '>,</span> _arguments<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      window<span style='color:#808030; '>.</span>setTimeout<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
        window<span style='color:#808030; '>.</span>discover_adblock<span style='color:#808030; '>.</span>apply<span style='color:#808030; '>(</span>_this<span style='color:#808030; '>,</span> _arguments<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>1000</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>(</span>window<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#a65700; '>></span>
</pre>


By The Way (#2).
-- someone have already thought about it,
-- the following AdBlock list actually doing some counter fighting and removes the "discover method" in some sites..
it is called Anti-AdBlock-Filters (Adblock Warning Removal List) :) :) :)
<a href="https://easylist-downloads.adblockplus.org/antiadblockfilters.txt" title="https://easylist-downloads.adblockplus.org/antiadblockfilters.txt" target="_blank">https://easylist-downloads.adblockplus.org/antiadblockfilters.txt</a>


if you have any comments feel free to email me (my email is on the top right of the page..)

<img src="https://icompile.eladkarako.com/img/credit.png" />
<br/>

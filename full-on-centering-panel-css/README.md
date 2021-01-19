<blockquote>
might find this inserting:
<a href="https://icompile.eladkarako.com/html5-ninja-centring-container-in-the-middle-of-viewport-with-css3-only-no-javascript/" target="_blank">iCompile: HTML5 Ninja – Centring Container In The Middle Of ViewPort With CSS3 Only, No JavaScript</a> 
</blockquote>


<img src="https://icompile.eladkarako.com/_uploads/2015/03/icompile.eladkarako.com_circle_unknown2.png" alt="icompile.eladkarako.com_circle_unknown2" width="150" height="150" class="alignright size-thumbnail wp-image-2862" />this is intended to be a minimal "total-centering" markup, used for an internal-YouTube extension.
<!--more-->

<hr />

here is the simplified markup, it uses <code>display:table</code> and <code>table-layout: fixed</code> this technique is also known as the <em>CSS-Table</em>:  

<blockquote>
HTML:
<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> panel</span><span style='color:#a65700; '>></span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> section header</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>content</span><span style='color:#a65700; '>></span>Item1<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> section video </span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>content</span><span style='color:#a65700; '>></span>Item2<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> section stream</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>content</span><span style='color:#a65700; '>></span>Item3<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> section footer</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>content</span><span style='color:#a65700; '>></span>Item4<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
</pre>

CSS:
<pre><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#800080; '>{</span><span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>padding</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span><span style='color:#bb7977; font-weight:bold; '>margin</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>}</span>

<span style='color:#696969; '>/* structure */</span>
<span style='color:#808030; '>[</span>panel<span style='color:#808030; '>]</span><span style='color:#800080; '>{</span>
  box-sizing<span style='color:#808030; '>:</span> <span style='color:#008484; '>border-box</span><span style='color:#800080; '>;</span>
  
  <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>display</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>table</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>table-layout</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>fixed</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>border-collapse</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>collapse</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#808030; '>[</span>section<span style='color:#808030; '>]</span><span style='color:#800080; '>{</span>
  <span style='color:#bb7977; font-weight:bold; '>display</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>table-row</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>text-align</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>center</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#808030; '>[</span><span style='color:#074726; '>content</span><span style='color:#808030; '>]</span><span style='color:#800080; '>{</span>
  <span style='color:#bb7977; font-weight:bold; '>display</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>table-cell</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>vertical-align</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>middle</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#696969; '>/* few get custom height, others compensate */</span>
<span style='color:#808030; '>[</span>header<span style='color:#808030; '>]</span><span style='color:#800080; '>{</span><span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>10</span><span style='color:#006600; '>%</span><span style='color:#800080; '>}</span>
<span style='color:#808030; '>[</span>footer<span style='color:#808030; '>]</span><span style='color:#800080; '>{</span><span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>10</span><span style='color:#006600; '>%</span><span style='color:#800080; '>}</span>


<span style='color:#696969; '>/* just style */</span>
<span style='color:#808030; '>[</span>panel<span style='color:#808030; '>]</span>  <span style='color:#800080; '>{</span><span style='color:#bb7977; font-weight:bold; '>border</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>1</span><span style='color:#006600; '>px</span> <span style='color:#074726; '>solid</span> rgba(<span style='color:#008c00; '>166</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>202</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>246</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>.8</span>) <span style='color:#800080; '>}</span>
<span style='color:#808030; '>[</span>section<span style='color:#808030; '>]</span><span style='color:#800080; '>{</span><span style='color:#bb7977; font-weight:bold; '>background</span><span style='color:#808030; '>:</span> rgba(<span style='color:#008c00; '>166</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>202</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>246</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>.5</span>) <span style='color:#074726; '>none</span>  <span style='color:#800080; '>}</span>
<span style='color:#808030; '>[</span><span style='color:#074726; '>content</span><span style='color:#808030; '>]</span><span style='color:#800080; '>{</span><span style='color:#bb7977; font-weight:bold; '>border</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>1</span><span style='color:#006600; '>px</span> <span style='color:#074726; '>solid</span> rgba(<span style='color:#008c00; '>166</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>202</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>246</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>.8</span>) <span style='color:#800080; '>}</span>
</pre>

resulting something like this:
<iframe width="100%" height="300" style="width:100%; height:300px;" src="http://jsfiddle.net/kgf2p5b9/embedded/result,html,css/"></iframe>

<ul>
<li>Full-on centering.</li>
<li>Selective-nodes will get height-set, remaining nodes will compensate.</li>
</ul>

</blockquote>

<hr />



<blockquote>Avoiding use of css-table might be a little weird for "classic-web-designers" (<em>geeks!</em>)
but it is perfectly ok technique to use

on same HTML above using the following CSS:

<pre><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#800080; '>{</span><span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>padding</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span><span style='color:#bb7977; font-weight:bold; '>margin</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span><span style='color:#800080; '>}</span>

<span style='color:#696969; '>/* structure */</span>
<span style='color:#808030; '>[</span>panel<span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>before</span><span style='color:#808030; '>,</span><span style='color:#808030; '>[</span>panel<span style='color:#808030; '>]</span><span style='color:#808030; '>,</span><span style='color:#808030; '>[</span>panel<span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>after</span><span style='color:#800080; '>{</span><span style='color:#bb7977; font-weight:bold; '>padding</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>margin</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>clear</span><span style='color:#808030; '>:</span><span style='color:#074726; '>both</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>content</span><span style='color:#808030; '>:</span><span style='color:#800000; '>'</span><span style='color:#800000; '>'</span><span style='color:#800080; '>}</span>

<span style='color:#808030; '>[</span>panel<span style='color:#808030; '>]</span>  <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>text-align</span><span style='color:#808030; '>:</span><span style='color:#074726; '>center</span> <span style='color:#800080; '>}</span>

<span style='color:#808030; '>[</span><span style='color:#074726; '>content</span><span style='color:#808030; '>]</span><span style='color:#800080; '>{</span> 
  <span style='color:#bb7977; font-weight:bold; '>position</span><span style='color:#808030; '>:</span><span style='color:#074726; '>relative</span><span style='color:#800080; '>;</span> 
  <span style='color:#bb7977; font-weight:bold; '>top</span><span style='color:#808030; '>:</span>calc(<span style='color:#008c00; '>50</span><span style='color:#006600; '>%</span> - 2vmin)<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#696969; '>/* height-set is mandatory for everyone of the sections */</span>
<span style='color:#808030; '>[</span>header<span style='color:#808030; '>]</span> <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>10</span><span style='color:#006600; '>%</span> <span style='color:#800080; '>}</span>
<span style='color:#808030; '>[</span>footer<span style='color:#808030; '>]</span> <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>10</span><span style='color:#006600; '>%</span> <span style='color:#800080; '>}</span>
<span style='color:#808030; '>[</span>video<span style='color:#808030; '>]</span>  <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>40</span><span style='color:#006600; '>%</span> <span style='color:#800080; '>}</span>
<span style='color:#808030; '>[</span>stream<span style='color:#808030; '>]</span> <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>40</span><span style='color:#006600; '>%</span> <span style='color:#800080; '>}</span>


<span style='color:#696969; '>/* just style */</span>
<span style='color:#808030; '>[</span>section<span style='color:#808030; '>]</span><span style='color:#800080; '>{</span>
  <span style='color:#bb7977; font-weight:bold; '>background</span><span style='color:#808030; '>:</span> rgba(<span style='color:#008c00; '>166</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>202</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>246</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>.5</span>) <span style='color:#074726; '>none</span><span style='color:#800080; '>;</span> 
  <span style='color:#bb7977; font-weight:bold; '>border</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>1</span><span style='color:#006600; '>px</span> <span style='color:#074726; '>solid</span> rgba(<span style='color:#008c00; '>166</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>202</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>246</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>.8</span>)<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>


resulting something like this:
<iframe width="100%" height="300" style="width:100%; height:300px;" src="http://jsfiddle.net/vjm8gek5/embedded/result,html,css/"></iframe>

<ul>
<li>Full-on centering, still ON.</li>
<li>May be considered more robust, since it will work even in IE..</li>
<li>Not favored by some puritans that claim 'position' should be avoided..</li>
<li><code>top:calc(50% - 2vmin);</code> is a fix for better line-height</li>
<li>You need to define the <code>height</code> of all the nodes visible, calculating 100% total.</li>
</ul>
</blockquote>



Conclusions: 
There are tens of ways centering and holding data, part from real-HTML table which is neglected due to bad-streamlining with the page layout, most of markups include few layers of containers and a lot of <code>class="... ... ..."</code>, used for both identifying the role and styling the nodes, which is not very readable, nor efficient,
part from that, the above techniques are being, almost, exclusively used, in terms of 'how robust' or 'which one broke first' those two probably has equal chance of holding horizontal-"Table-Like" data.


<hr />
adding note (y2015m04d16h03m32)
generating a more complex pattern with no additional style complexity 
<img src="https://icompile.eladkarako.com/_uploads/2015/03/icompile.eladkarako.com_table_like_complex.png" alt="generating a more complex pattern with no additional style complexity" width="877" height="443" class="size-full wp-image-3058" />

<iframe allowfullscreen="allowfullscreen" seamless="seamless" frameborder="0" width="100%" height="500" style="width:100%; height:500px;" src="http://jsfiddle.net/sepcrwge/embedded/css,html,result/presentation/"></iframe>

or in complete segment:
<pre>
<span style='color:#004a43; '>&lt;!DOCTYPE html></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#274796; '> </span><span style='color:#074726; '>lang</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"en-US"</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>head</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>style</span><span style='color:#a65700; '>></span>
  <span style='color:#800000; font-weight:bold; '>html</span><span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>body</span> <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>box-sizing</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>border-box</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>padding</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>margin</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span>
  
  <span style='color:#696969; '>/* structure */</span>
  <span style='color:#808030; '>[</span>container<span style='color:#808030; '>]</span> <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>box-sizing</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>border-box</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>padding</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>margin</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>display</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>table</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>table-layout</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>fixed</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>border-collapse</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>collapse</span><span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span>
  
  <span style='color:#808030; '>[</span>section<span style='color:#808030; '>]</span> <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>display</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>table-row</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>text-align</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>center</span><span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span>
  
  <span style='color:#808030; '>[</span><span style='color:#074726; '>content</span><span style='color:#808030; '>]</span> <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>display</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>table-cell</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>vertical-align</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>middle</span><span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span>
  
  <span style='color:#696969; '>/* few get custom height, others compensate */</span>
  
  <span style='color:#808030; '>[</span>header<span style='color:#808030; '>]</span> <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>10</span><span style='color:#006600; '>%</span> <span style='color:#800080; '>}</span>
  
  <span style='color:#808030; '>[</span>footer<span style='color:#808030; '>]</span> <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>10</span><span style='color:#006600; '>%</span> <span style='color:#800080; '>}</span>
  
  <span style='color:#696969; '>/* just style */</span>
  <span style='color:#808030; '>[</span>container<span style='color:#808030; '>]</span> <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>border</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>1</span><span style='color:#006600; '>px</span> <span style='color:#074726; '>solid</span> <span style='color:#400000; '>rgba</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>166</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>202</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>246</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>.8</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>}</span>
  
  <span style='color:#808030; '>[</span>section<span style='color:#808030; '>]</span> <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>background</span><span style='color:#808030; '>:</span> <span style='color:#400000; '>rgba</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>166</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>202</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>246</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>.5</span><span style='color:#808030; '>)</span> <span style='color:#074726; '>none</span> <span style='color:#800080; '>}</span>
  
  <span style='color:#808030; '>[</span><span style='color:#074726; '>content</span><span style='color:#808030; '>]</span> <span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>border</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>1</span><span style='color:#006600; '>px</span> <span style='color:#074726; '>solid</span> <span style='color:#400000; '>rgba</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>166</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>202</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>246</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>.8</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>}</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>style</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>head</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> container</span><span style='color:#a65700; '>></span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> section header</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>content</span><span style='color:#a65700; '>></span>Item1<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> section main</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> container</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>content</span><span style='color:#a65700; '>></span>Item2<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>content</span><span style='color:#a65700; '>></span>Item3<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
  <span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> section footer</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>content</span><span style='color:#a65700; '>></span>Item4<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#a65700; '>></span>
</pre>


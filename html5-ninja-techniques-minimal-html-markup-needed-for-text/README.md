<img src="https://icompile.eladkarako.com/_uploads/2015/03/icompile.eladkarako.com_use_minimal_text.jpg" alt="icompile.eladkarako.com_use_minimal_text" width="259" height="194" class="alignright size-full wp-image-2765" />So we want to add some text, and style it,
but wrapping with <code>span</code> requires too much text adding: <strong>opening and closing tags</strong> + <code>class="..."</code> or HTML5's <code>data-*</code>, this all so we can later "find" the node using CSS-Rules or JavaScript and style the <em>hell-out of it</em> :)
<hr />
<blockquote>
The idea is later to find the item, using CSS or JavaScript, in a very efficient way,
as fast as I know, <strong>I'm the first one</strong> ever implemented using this technique.. and in production <sub>(<em>isn't it the idea of every product eventually..?</em>)</sub><sub>.

.. you have to think <em>out of the box</em> for this crazy <em>trick</em> to be seen reasonable to you.. </sub><sub>(<em>and there goes the 4'th wall..</em>)</sub><sub>.
</sub></blockquote>


<ol>
<li>you want a self-closing tag but one that will show you some text..
# first attempt: <code>&lt;img alt=hello/&gt;</code>
skipping the <code>\\"</code> is permitted !!
<iframe width="100%" height="300" style="width:100%; height:300px;" src="http://jsfiddle.net/txp4qv84/embedded/result,html,css/"></iframe>

this works since the <code>src</code> is not specified, so the <code>ALT</code> kicks-in..
but you'll get the native border around which you should disable using <code>border=0</code> attribute..
<strong>but its <em>MORE TEXT</em>, so <em>no-go</em></strong>
</li>

<li>
that pesky border (CSS border is a different one) is there because we use W3C's official <code>ALT</code> attribute, <strong>but we can do better</strong>,
joining some CSS's <code>content</code> and <code>attr()</code> and putting the text in one of the attributes.

the HTML is:
<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>img</span><span style='color:#274796; '> x</span><span style='color:#808030; '>=</span><span style='color:#274796; '>hello</span><span style='color:#a65700; '>></span></pre>
and the CSS is:
<pre><span style='color:#800000; font-weight:bold; '>img</span><span style='color:#800080; '>{</span>
  <span style='color:#bb7977; font-weight:bold; '>content</span><span style='color:#808030; '>:</span><span style='color:#400000; '>attr</span><span style='color:#808030; '>(</span>x<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>font-size</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>30</span><span style='color:#006600; '>pt</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>color</span><span style='color:#808030; '>:</span><span style='color:#008484; '>darkblue</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>border</span><span style='color:#808030; '>:</span><span style='color:#074726; '>none</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span></pre>
but it won't work, since the <code>img</code> tag's text-content does not mean anything (unlike other tags, the <code>img</code> tag is actually just like rendering stuff with JavaScript <code>new Image()</code>)

lets change to something quite different either the <code>:before</code> or <code>:after</code> "area", which technically uses same, still minimal self-closing tag of img, but just as a placeholder.

<em>ooopss...</em> apparently you can only see the <code>img</code> <code>:before</code> if you'll still place an <code>ALT=".."</code> non-empty attribute,
<iframe width="100%" height="300" style="width:100%; height:300px;" src="http://jsfiddle.net/kyqn92jm/embedded/result,html,css/"></iframe>

<em>hmmm..</em> so its not optimal since we've already adding quite a lot of text, and it is becoming a bit more complex than necessary.
</li>

<li>we can do better, using CSS we can cheat and use <code>content="..."</code> and <code>attr()</code> 

<blockquote><sub>which is technically not in the HTML markup, and CSS are far more optimized than HTML, also, loaded parallel and optionally CPU-accelerated. so we're good here..</sub></blockquote>

<img src="https://icompile.eladkarako.com/_uploads/2015/03/icompile.eladkarako.com_i_lv_minimal.jpg" alt="icompile.eladkarako.com_i_lv_minimal" width="284" height="177" class="alignleft size-full wp-image-2766" />
this was the result (works really well..)
first is the html markup: <code> &lt;t x=hello&gt; </code> now the CSS markup which you can include in a separate CSS file 

<pre><span style='color:#696969; '>/* minimal */</span>
t<span style='color:#808030; '>[</span>x<span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>before</span><span style='color:#800080; '>{</span>
    <span style='color:#bb7977; font-weight:bold; '>content</span><span style='color:#808030; '>:</span><span style='color:#400000; '>attr</span><span style='color:#808030; '>(</span>x<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#696969; '>/* optional styling - very specific and easy to use */</span>
t<span style='color:#808030; '>[</span>x<span style='color:#808030; '>=</span>hello<span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>before</span><span style='color:#800080; '>{</span>
  <span style='color:#bb7977; font-weight:bold; '>font-size</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>30</span><span style='color:#006600; '>pt</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#696969; '>/* optional styling - for all "minimal text tags" */</span>
t<span style='color:#808030; '>[</span>x<span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>before</span><span style='color:#800080; '>{</span>
    <span style='color:#bb7977; font-weight:bold; '>margin</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>4</span><span style='color:#006600; '>px</span> <span style='color:#008c00; '>4</span><span style='color:#006600; '>px</span> <span style='color:#008c00; '>4</span><span style='color:#006600; '>px</span> <span style='color:#008c00; '>4</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span>
    <span style='color:#bb7977; font-weight:bold; '>padding</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>4</span><span style='color:#006600; '>px</span> <span style='color:#008c00; '>4</span><span style='color:#006600; '>px</span> <span style='color:#008c00; '>4</span><span style='color:#006600; '>px</span> <span style='color:#008c00; '>4</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span>
    <span style='color:#bb7977; font-weight:bold; '>color</span><span style='color:#808030; '>:</span><span style='color:#008484; '>darkblue</span><span style='color:#800080; '>;</span>
    <span style='color:#bb7977; font-weight:bold; '>background-color</span><span style='color:#808030; '>:</span>lightgray<span style='color:#800080; '>;</span>
    <span style='color:#bb7977; font-weight:bold; '>border</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>1</span><span style='color:#006600; '>px</span> <span style='color:#074726; '>solid</span> <span style='color:#797997; '>purple</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>

here is a little fun with <a href="http://jsfiddle.net/nra1jwjo/" target="_blank">http://jsfiddle.net/nra1jwjo/</a>
<iframe width="100%" height="300" style="width:100%; height:300px;" src="http://jsfiddle.net/nra1jwjo/embedded/result,html,css/"></iframe>

</li>

<li>Fun!</li>

</ol>
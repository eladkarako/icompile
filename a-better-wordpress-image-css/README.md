by default wordpress will used:
<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>a</span><span style='color:#274796; '> </span><span style='color:#074726; '>href</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"https://icompile.eladkarako.com/_uploads/2014/07/2014-07-27_134528.jpg"</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>img</span><span style='color:#274796; '> </span><span style='color:#074726; '>style</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#0000e6; '>"</span><span style='color:#274796; '> </span><span style='color:#074726; '>src</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"https://icompile.eladkarako.com/_uploads/2014/07/2014-07-27_134528.jpg"</span><span style='color:#274796; '> </span><span style='color:#074726; '>alt</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"2014-07-27_134528"</span><span style='color:#274796; '> </span><span style='color:#074726; '>width</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"1389"</span><span style='color:#274796; '> </span><span style='color:#074726; '>height</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"696"</span><span style='color:#274796; '> </span><span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"alignnone size-full wp-image-1646"</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>a</span><span style='color:#a65700; '>></span></pre>

<hr/>

which will be shown like so:

<a href="https://icompile.eladkarako.com/_uploads/2014/07/2014-07-27_134528.jpg"><img style="width:100%" src="https://icompile.eladkarako.com/_uploads/2014/07/2014-07-27_134528.jpg" alt="2014-07-27_134528" width="1389" height="696" class="alignnone size-full wp-image-1646"></a>

<hr/>

by using the given class ".wp-image-1646"
you can generate a much better looking image, one that will fit (CSS) into the container without distorting too much..

<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>style</span><span style='color:#a65700; '> type="text/css"></span>
<span style='color:#808030; '>.</span>wp-image-1646 <span style='color:#800080; '>{</span>
  <span style='color:#696969; '>/* this part changes, depending on the image real width and height, and source (daaa..) */</span>
  <span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>1389</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span> 
  <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>696</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span> 
  <span style='color:#bb7977; font-weight:bold; '>background</span><span style='color:#808030; '>:</span> <span style='color:#400000; '>url</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>"</span><span style='color:#666616; '>http</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>//</span><span style='color:#5555dd; '>icompile.eladkarako.com</span><span style='color:#40015a; '>/_uploads/2014/07/2014-07-27_134528.jpg</span><span style='color:#0000e6; '>"</span><span style='color:#808030; '>)</span> <span style='color:#074726; '>no-repeat</span><span style='color:#800080; '>;</span>

  <span style='color:#696969; '>/* this part is constant. */</span>
  <span style='color:#bb7977; font-weight:bold; '>max-width</span><span style='color:#808030; '>:</span>  <span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>max-height</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span> 
  <span style='color:#bb7977; font-weight:bold; '>overflow</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>hidden</span><span style='color:#800080; '>;</span>
  -webkit-background-size<span style='color:#808030; '>:</span> contain<span style='color:#800080; '>;</span>
     -moz-background-size<span style='color:#808030; '>:</span> contain<span style='color:#800080; '>;</span>
          background-size<span style='color:#808030; '>:</span> contain<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>style</span><span style='color:#a65700; '>></span>

<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>a</span><span style='color:#274796; '> </span><span style='color:#074726; '>href</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"https://icompile.eladkarako.com/_uploads/2014/07/2014-07-27_134528.jpg"</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#274796; '> </span><span style='color:#074726; '>class</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"wp-image-1646"</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>div</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>a</span><span style='color:#a65700; '>></span></pre>
<hr/>

which will be shown like so..

<pre>
<style type="text/css">
.wp-image-1646 {
  /* this part changes, depending on the image real width and height, and source (daaa..) */
  width: 1389px; 
  height: 696px; 
  background: url("https://icompile.eladkarako.com/_uploads/2014/07/2014-07-27_134528.jpg") no-repeat;

  /* this part is constant. */
  max-width:  100%;
  max-height: 100%; 
  overflow: hidden;
  -webkit-background-size: contain;
     -moz-background-size: contain;
          background-size: contain;
}
</style>

<a href="https://icompile.eladkarako.com/_uploads/2014/07/2014-07-27_134528.jpg">
<div class="wp-image-1646"></div>
</a>
</pre>

<hr/>

or better, use shorter inline, which will not required &lt;pre&gt; tags

<h3><pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>a</span><span style='color:#274796; '> </span><span style='color:#074726; '>href</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"https://icompile.eladkarako.com/_uploads/2014/07/2014-08-03_024912.png"</span><span style='color:#274796; '> </span><span style='color:#074726; '>style</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#bb7977; font-weight:bold; '>min-height</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>707</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span><span style='color:#274796; '> </span><span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span><span style='color:#274796; '> </span><span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span><span style='color:#274796; '> </span><span style='color:#bb7977; font-weight:bold; '>background</span><span style='color:#808030; '>:</span><span style='color:#400000; '>url</span><span style='color:#808030; '>(</span><span style='color:#666616; '>http</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>//</span><span style='color:#5555dd; '>icompile.eladkarako.com</span><span style='color:#40015a; '>/_uploads/2014/07/2014-08-03_024912.png</span><span style='color:#808030; '>)</span><span style='color:#274796; '> </span><span style='color:#074726; '>no-repeat</span><span style='color:#800080; '>;</span><span style='color:#274796; '> </span><span style='color:#bb7977; font-weight:bold; '>overflow</span><span style='color:#808030; '>:</span><span style='color:#274796; '> </span><span style='color:#074726; '>hidden</span><span style='color:#800080; '>;</span><span style='color:#274796; '> -webkit-background-size</span><span style='color:#808030; '>:</span><span style='color:#274796; '> contain</span><span style='color:#800080; '>;</span><span style='color:#274796; '> -moz-background-size</span><span style='color:#808030; '>:</span><span style='color:#274796; '> contain</span><span style='color:#800080; '>;</span><span style='color:#274796; '> background-size</span><span style='color:#808030; '>:</span><span style='color:#274796; '> contain</span><span style='color:#800080; '>;</span><span style='color:#274796; '> </span><span style='color:#bb7977; font-weight:bold; '>display</span><span style='color:#808030; '>:</span><span style='color:#074726; '>block</span><span style='color:#800080; '>;</span><span style='color:#0000e6; '>"</span><span style='color:#274796; '> </span><span style='color:#a65700; '>/></span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>a</span><span style='color:#a65700; '>></span></pre></h3>

to make it look like so
<a href="https://icompile.eladkarako.com/_uploads/2014/07/2014-08-03_024912.png" style="min-height:707px; width:100%; height:100%; background:url(https://icompile.eladkarako.com/_uploads/2014/07/2014-08-03_024912.png) no-repeat; overflow: hidden; -webkit-background-size: contain; -moz-background-size: contain; background-size: contain; display:block;" /></a>
<!--more-->


You probably know that <code>&lt;textarea&gt;</code> have <code>.select()</code> method, that could help you easily select all of the textual-content on the element,

<a href="https://icompile.eladkarako.com/making-xda-code-readable-using-javascript-css3/" target="_blank">I've developed *some script* to help users of XDA better view the [code] sections</a>, initially I've used <code>&lt;textarea&gt;</code> elements, since the content of [code] should be used for comments and source-codes,

but oddly-enough I've noticed some users embed HTML segments in the [code] (which translated to <code>&#60;pre&#62;</code>) naturally I've switched to using <code>&#60;pre&#62;</code> to resolved it, but <code>&#60;pre&#62;</code> does not have any native <code>.select()</code> method to select the internal-content.

it is easily implementable.

<pre>HTMLPreElement<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>select <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#696969; '>/* 1. why implement ".select()"?   --- textarea has one, pre doesn't. But I still want to copy */</span>
  <span style='color:#696969; '>/* 2. before calling ".select()"   --- call "window.getSelection().removeAllRanges();" -- avoid "discontinue-ranges" */</span> 
    <span style='color:#800000; font-weight:bold; '>var</span> 
        me <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>this</span>
      <span style='color:#808030; '>,</span> range <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>createRange<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>
      <span style='color:#800080; '>;</span>
    range<span style='color:#808030; '>.</span>selectNodeContents<span style='color:#808030; '>(</span>me<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    document<span style='color:#808030; '>.</span>getSelection<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>addRange<span style='color:#808030; '>(</span>range<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

    <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#0f4d75; '>true</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
</pre>


<!--more-->

Sample code may need more work. Create your own function using unique name, ID, and so forth.

<pre><span style='color:#800000; font-weight:bold; '>var</span> frame <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>getElementById<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>sample-frame</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span>frame<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  <span style='color:#696969; '>// create frame</span>
  frame <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>createElement<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>iframe</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>// iframe (or browser on older Firefox)</span>
  frame<span style='color:#808030; '>.</span>setAttribute<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>id</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>sample-frame</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  frame<span style='color:#808030; '>.</span>setAttribute<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>name</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>sample-frame</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  frame<span style='color:#808030; '>.</span>setAttribute<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>type</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>content</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  frame<span style='color:#808030; '>.</span>setAttribute<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>collapsed</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>true</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  document<span style='color:#808030; '>.</span>getElementById<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>main-window</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span>
    <span style='color:#808030; '>.</span>appendChild<span style='color:#808030; '>(</span>frame<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#696969; '>// or </span>
  <span style='color:#696969; '>// document.documentElement.appendChild(frame);</span>

  <span style='color:#696969; '>// set restrictions as needed</span>
  frame<span style='color:#808030; '>.</span>webNavigation<span style='color:#808030; '>.</span>allowAuth <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>false</span><span style='color:#800080; '>;</span>
  frame<span style='color:#808030; '>.</span>webNavigation<span style='color:#808030; '>.</span>allowImages <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>false</span><span style='color:#800080; '>;</span>
  frame<span style='color:#808030; '>.</span>webNavigation<span style='color:#808030; '>.</span>allowJavascript <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>false</span><span style='color:#800080; '>;</span>
  frame<span style='color:#808030; '>.</span>webNavigation<span style='color:#808030; '>.</span>allowMetaRedirects <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span><span style='color:#800080; '>;</span>
  frame<span style='color:#808030; '>.</span>webNavigation<span style='color:#808030; '>.</span>allowPlugins <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>false</span><span style='color:#800080; '>;</span>
  frame<span style='color:#808030; '>.</span>webNavigation<span style='color:#808030; '>.</span>allowSubframes <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>false</span><span style='color:#800080; '>;</span>

  <span style='color:#696969; '>// listen for load</span>
  frame<span style='color:#808030; '>.</span>addEventListener<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>load</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span>event<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    <span style='color:#696969; '>// the document of the HTML in the DOM</span>
    <span style='color:#800000; font-weight:bold; '>var</span> doc <span style='color:#808030; '>=</span> event<span style='color:#808030; '>.</span>originalTarget<span style='color:#800080; '>;</span>
    <span style='color:#696969; '>// skip blank page or frame</span>
    <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span>doc<span style='color:#808030; '>.</span>location<span style='color:#808030; '>.</span>href <span style='color:#808030; '>==</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>about:blank</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>||</span> doc<span style='color:#808030; '>.</span>defaultView<span style='color:#808030; '>.</span>frameElement<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>return</span><span style='color:#800080; '>;</span>

    <span style='color:#696969; '>// do something with the DOM of doc</span>
    <span style='color:#800000; font-weight:bold; '>alert</span><span style='color:#808030; '>(</span>doc<span style='color:#808030; '>.</span>location<span style='color:#808030; '>.</span>href<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

    <span style='color:#696969; '>// when done remove frame or set location "about:blank"</span>
    <span style='color:#800000; font-weight:bold; '>setTimeout</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
      <span style='color:#800000; font-weight:bold; '>var</span> frame <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>getElementById<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>sample-frame</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      <span style='color:#696969; '>// remove frame</span>
      <span style='color:#696969; '>// frame.destroy(); // if using browser element instead of iframe</span>
      frame<span style='color:#808030; '>.</span>parentNode<span style='color:#808030; '>.</span>removeChild<span style='color:#808030; '>(</span>frame<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      <span style='color:#696969; '>// or set location "about:blank"</span>
      <span style='color:#696969; '>// frame.contentDocument.location.href = "about:blank";</span>
    <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>10</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>true</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>


<span style='color:#696969; '>// load a page</span>
frame<span style='color:#808030; '>.</span>contentDocument<span style='color:#808030; '>.</span>location<span style='color:#808030; '>.</span>href <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.mozilla.org/</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
<span style='color:#696969; '>// or </span>
<span style='color:#696969; '>// frame.webNavigation.loadURI("http://www.mozilla.org/",Components.interfaces.nsIWebNavigation,null,null,null);</span>
</pre>

If you are starting with an HTML string, you can convert it to a data URI and use that to load in the browser element.
<!--more-->


Use advance CSS rules to mark page's external-links, similar to how its done in Wikipedia's pages,

<img src="https://icompile.eladkarako.com/_uploads/2015/01/2015-01-17_060647.png" alt="external links icon in pure CSS description image" rem-width="800" rem-height="167" class="alignnone size-full wp-image-2369" />

<hr />

<pre><span style='color:#696969; '>/* 1. mark all external links (protocol prefix), 2. overwrite with "none" to avoid marking fully-qualified local-addresses.  */</span>

<span style='color:#800000; font-weight:bold; '>a</span><span style='color:#808030; '>[</span><span style='color:#074726; '>href</span>^<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>//</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>after</span><span style='color:#808030; '>,</span>
<span style='color:#800000; font-weight:bold; '>a</span><span style='color:#808030; '>[</span><span style='color:#074726; '>href</span>^<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>after</span><span style='color:#808030; '>,</span>
<span style='color:#800000; font-weight:bold; '>a</span><span style='color:#808030; '>[</span><span style='color:#074726; '>href</span>^<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>after</span> <span style='color:#800080; '>{</span>
  <span style='color:#bb7977; font-weight:bold; '>content</span><span style='color:#808030; '>:</span> <span style='color:#400000; '>url</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>"</span><span style='color:#666616; '>data</span><span style='color:#800080; '>:</span><span style='color:#40015a; '>image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVElEQVR42n3PgQkAIAhEUXdqJ3dqJ3e6IoTPUSQcgj4EQ5IlUiLE0Jil3PECXhcHGBhZ8kg4hwxAu3MZeCGeyFnAXp4hqNQPnt7QL0nADpD6wHccLvnAKksq8iiaAAAAAElFTkSuQmCC</span><span style='color:#0000e6; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>margin</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>0</span> <span style='color:#008c00; '>0</span> <span style='color:#008c00; '>0</span> <span style='color:#008c00; '>4</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#800000; font-weight:bold; '>a</span><span style='color:#808030; '>[</span><span style='color:#074726; '>href</span>^<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>//icompile.eladkarako.com/</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>after</span><span style='color:#808030; '>,</span>
<span style='color:#800000; font-weight:bold; '>a</span><span style='color:#808030; '>[</span><span style='color:#074726; '>href</span>^<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://icompile.eladkarako.com/</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>after</span><span style='color:#808030; '>,</span>
<span style='color:#800000; font-weight:bold; '>a</span><span style='color:#808030; '>[</span><span style='color:#074726; '>href</span>^<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://icompile.eladkarako.com/</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>after</span><span style='color:#800080; '>{</span>
  <span style='color:#bb7977; font-weight:bold; '>content</span><span style='color:#808030; '>:</span> <span style='color:#800000; '>'</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>margin</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>


<hr />


<blockquote>
in my WordPress blog, I add a prefix selector, so only posts will be marked,
and other links on the page will still look intact.
<pre>

.content a[href^="//"]:after,
.content a[href^="http://"]:after,
.content a[href^="https://"]:after {
  content: ......
}
</pre></blockquote>

<hr />

<blockquote>
here is a chance to check it, 
plus the external resources I use:
<a href="//bits.wikimedia.org/static-1.25wmf14/skins/Vector/images/external-link-ltr-icon.png" target="_blank">//bits.wikimedia.org/static-1.25wmf14/skins/Vector/images/external-link-ltr-icon.png</a>
<a href="//bits.wikimedia.org/static-1.25wmf14/skins/Vector/images/external-link-rtl-icon.png" target="_blank">//bits.wikimedia.org/static-1.25wmf14/skins/Vector/images/external-link-rtl-icon.png</a>

as a matter of fact you can also use those few (slightly more transparent, to be less conspicuous..
<a href="https://icompile.eladkarako.com/_uploads/2015/01/external-link-ltr-icon.png"><img src="https://icompile.eladkarako.com/_uploads/2015/01/external-link-ltr-icon.png" alt="external-link-ltr-icon" width="10" height="10" class="alignnone size-full wp-image-2373" /></a>

<a href="https://icompile.eladkarako.com/_uploads/2015/01/external-link-ltr-icon_2.png"><img src="https://icompile.eladkarako.com/_uploads/2015/01/external-link-ltr-icon_2.png" alt="external-link-ltr-icon_2" width="10" height="10" class="alignnone size-full wp-image-2374" /></a>

<a href="https://icompile.eladkarako.com/_uploads/2015/01/external-link-ltr-icon-3.png"><img src="https://icompile.eladkarako.com/_uploads/2015/01/external-link-ltr-icon-3.png" alt="external-link-ltr-icon-3" width="10" height="10" class="alignnone size-full wp-image-2375" /></a>

<a href="https://icompile.eladkarako.com/_uploads/2015/01/external-link-ltr-icon-4.png"><img src="https://icompile.eladkarako.com/_uploads/2015/01/external-link-ltr-icon-4.png" alt="external-link-ltr-icon-4" width="10" height="10" class="alignnone size-full wp-image-2376" /></a>
</blockquote>

<hr />



<blockquote>
Using SVG to draw the form is quite simple as-well:
<pre><span style='color:#004a43; '>&lt;?</span><span style='color:#800000; font-weight:bold; '>xml</span><span style='color:#004a43; '> </span><span style='color:#074726; '>version</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#7d0045; '>1.0</span><span style='color:#0000e6; '>"</span><span style='color:#004a43; '> </span><span style='color:#074726; '>encoding</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>UTF-8</span><span style='color:#0000e6; '>"</span><span style='color:#004a43; '> </span><span style='color:#004a43; '>?></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>svg</span> <span style='color:#666616; '>xmlns</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#666616; '>http</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>//</span><span style='color:#5555dd; '>www.w3.org</span><span style='color:#40015a; '>/2000/svg</span><span style='color:#0000e6; '>"</span> <span style='color:#274796; '>width</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>10</span><span style='color:#0000e6; '>"</span> <span style='color:#274796; '>height</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>10</span><span style='color:#0000e6; '>"</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>g</span> <span style='color:#274796; '>transform</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>translate(-826.429 -698.791)</span><span style='color:#0000e6; '>"</span><span style='color:#a65700; '>></span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>rect</span> <span style='color:#274796; '>width</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>5.982</span><span style='color:#0000e6; '>"</span> <span style='color:#274796; '>height</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>5.982</span><span style='color:#0000e6; '>"</span> <span style='color:#274796; '>x</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>826.929</span><span style='color:#0000e6; '>"</span> <span style='color:#274796; '>y</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>702.309</span><span style='color:#0000e6; '>"</span> <span style='color:#274796; '>fill</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>#fff</span><span style='color:#0000e6; '>"</span> <span style='color:#274796; '>stroke</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>#06c</span><span style='color:#0000e6; '>"</span> <span style='color:#a65700; '>/></span>
        <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>g</span><span style='color:#a65700; '>></span>
            <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>path</span> <span style='color:#274796; '>d</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>M831.194 698.791h5.234v5.391l-1.571 1.545-1.31-1.31-2.725 2.725-2.689-2.689 2.808-2.808-1.311-1.311z</span><span style='color:#0000e6; '>"</span> <span style='color:#274796; '>fill</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>#06f</span><span style='color:#0000e6; '>"</span> <span style='color:#a65700; '>/></span>
            <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>path</span> <span style='color:#274796; '>d</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>M835.424 699.795l.022 4.885-1.817-1.817-2.881 2.881-1.228-1.228 2.881-2.881-1.851-1.851z</span><span style='color:#0000e6; '>"</span> <span style='color:#274796; '>fill</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"</span><span style='color:#0000e6; '>#fff</span><span style='color:#0000e6; '>"</span> <span style='color:#a65700; '>/></span>
        <span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>g</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>g</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>svg</span><span style='color:#a65700; '>></span>
</pre>

<hr />

Here are two ways of embedding the SVG (local as <code>data:image/svg+xml</code> and external)

<pre><span style='color:#808030; '>.</span>foo <span style='color:#800080; '>{</span>

  <span style='color:#bb7977; font-weight:bold; '>background-image</span><span style='color:#808030; '>:</span> -webkit-linear-gradient(<span style='color:#074726; '>transparent</span><span style='color:#808030; '>,</span> <span style='color:#074726; '>transparent</span>)<span style='color:#808030; '>,</span> <span style='color:#400000; '>url</span><span style='color:#808030; '>(</span><span style='color:#666616; '>data</span><span style='color:#800080; '>:</span><span style='color:#40015a; '>image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%3E%3Cg%20transform%3D%22translate%28-826.429%20-698.791%29%22%3E%3Crect%20width%3D%225.982%22%20height%3D%225.982%22%20x%3D%22826.929%22%20y%3D%22702.309%22%20fill%3D%22%23fff%22%20stroke%3D%22%2306c%22%2F%3E%3Cg%3E%3Cpath%20d%3D%22M831.194%20698.791h5.234v5.391l-1.571%201.545-1.31-1.31-2.725%202.725-2.689-2.689%202.808-2.808-1.311-1.311z%22%20fill%3D%22%2306f%22%2F%3E%3Cpath%20d%3D%22M835.424%20699.795l.022%204.885-1.817-1.817-2.881%202.881-1.228-1.228%202.881-2.881-1.851-1.851z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  <span style='color:#bb7977; font-weight:bold; '>background-image</span><span style='color:#808030; '>:</span> -webkit-linear-gradient(<span style='color:#074726; '>transparent</span><span style='color:#808030; '>,</span> <span style='color:#074726; '>transparent</span>)<span style='color:#808030; '>,</span> <span style='color:#400000; '>url</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>//</span><span style='color:#5555dd; '>bits.wikimedia.org</span><span style='color:#40015a; '>/static-1.25wmf14/skins/Vector/images/external-link-ltr-icon.svg</span><span style='color:#800000; font-weight:bold; '>?</span><span style='color:#074726; '>2015-01-07T18:48:20Z</span><span style='color:#808030; '>)</span>!ie<span style='color:#800080; '>;</span>

<span style='color:#800080; '>}</span>
</pre>


</blockquote>




<br />
<!--more-->


<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_external_links.jpg" alt="icompile.eladkarako.com_external_links" width="823" height="130" class="alignnone size-full wp-image-4403" />

I had a nice experiment before, that mimics the icons Wikipedia uses (both Hebrew [RTL] and English [LTR] versions) it even used a base64 of semi-transparent PNG to make it super-compatible with most browsers out there, minimal CSS rules required.

This time avoiding the need to use an embedded image, I've generated a website called <a href="http://umoji.eladkarako.com/" target="_blank">umoji.eladkarako.com</a> (and its <a href="http://www.github.com/eladkarako/umoji.eladkarako.com/" target="_blank">GitHub project</a>) that contain a simple one box with all (most) of Unicode-emojis out-there, making it easy to include them in project (or StackOverflow answers &#x1f44c;) by a simple Copy&&Paste,

This made to following code super easy to style,

essentially YOU are placing an "icon" right after the link (using the ':after' syntax-selector),
the icon is an upward arrow, placed vertically at super-script position,
- not using top or padding or margin to place elements, but native values- is the best practice, naturally..

The entire solution is pure CSS implementation, it uses the 'href' attribute of &lt;a&gt; elements querying about its content, specifically asking only &lt;a&gt; elements that has no content with the string 'eladkarako.com' in it,
naturally there are some links that would considered "not external" for example:
http://example.com?param1=eladkarako.com but in-order to keep the solution simple, this scenario is "absorbable" (meaning we can absorb or "ignore" the few cases..)


<pre><span style='color:#800000; font-weight:bold; '>a</span><span style='color:#808030; '>[</span><span style='color:#074726; '>href</span><span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>not</span><span style='color:#800080; '>(</span><span style='color:#808030; '>[</span><span style='color:#074726; '>href</span><span style='color:#808030; '>*=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>eladkarako.com</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#800080; '>)</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>after</span> <span style='color:#800080; '>{</span>
  <span style='color:#bb7977; font-weight:bold; '>content</span><span style='color:#808030; '>:</span> <span style='color:#800000; '>'</span><span style='font-weight:bolder;color:#0000e6; '>↗</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>position</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>relative</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>color</span><span style='color:#808030; '>:</span> <span style='color:#400000; '>rgba</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>.5</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>font-size</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>8</span><span style='color:#006600; '>pt</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>font-weight</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>bolder</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>vertical-align</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>super</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>

this may be combined with other similar rules such as "download" links, internal links, links to specific sections, log-out links, registration links etc...

you can even modify the cursor while hovering them, to the same image,
but in this case you would either have to create a SVG image (using that unicode-emoji) or copy-paste to an image-editor program such as Paint.net, remove white background, save as png, convert to base64 (optionally) before making the image usable.. 

too long? meh.
<ul>
Use advance CSS rules to give your users a little more information about links, that has the <strong>download</strong> attribute, this is similar to a previous article I've wrote, on how mark page's external-links, similar to how its done in Wikipedia's pages, using CSS3's <a href="http://www.w3.org/TR/CSS21/selector.html#before-and-after" title="http://www.w3.org/TR/CSS21/selector.html#before-and-after"><code>::after</code></a> pseudo-element.

<img src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com__css_ninja_techniques___download_links_icon_in_pure_css.png" alt="icompile.eladkarako.com__css_ninja_techniques___download_links_icon_in_pure_css" width="522" height="147" class="alignnone size-full wp-image-2544" />


first thing is downloading nice "download icon", 
I've used the second download icon from <a href="http://www.flaticon.com/packs/font-awesome" title="http://www.flaticon.com/packs/font-awesome" target="_blank">the Font-Awesome package</a>,

<a href="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com__css_ninja_techniques___download_links_icon_in_pure_css__original_icon_aka_download63.png"><img src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com__css_ninja_techniques___download_links_icon_in_pure_css__original_icon_aka_download63.png" alt="icompile.eladkarako.com__css_ninja_techniques___download_links_icon_in_pure_css__original_icon_aka_download63" class="alignnone size-full wp-image-2546" /> <br /> here is just the png from the package above</a>

edit it (I've used Paint.Net), remove the white background, resize it to about 12px/12px, make it transparent so the background-colors of the page will blend with the image, making it less sharp and more "theme suitable".. I've tuned it down to about 180 of 255 transparency (255 is the "100%").

<a href="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com__css_ninja_techniques___download_links_icon_in_pure_css__modified_icon.png"><img src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com__css_ninja_techniques___download_links_icon_in_pure_css__modified_icon.png" alt="icompile.eladkarako.com__css_ninja_techniques___download_links_icon_in_pure_css__modified_icon" width="13" height="12" class="alignnone size-full wp-image-2547" /> <br /> and here is the just the modified image</a>

convert it to base64 and add the mime-type prefix,
following with inserting it to your main style css file, using the following rule:
<pre>
<span style='color:#800000; font-weight:bold; '>a</span><span style='color:#808030; '>[</span>download<span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>before</span><span style='color:#800080; '>{</span>
  <span style='color:#bb7977; font-weight:bold; '>content</span><span style='color:#808030; '>:</span> <span style='color:#400000; '>url</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>"</span><span style='color:#666616; '>data</span><span style='color:#800080; '>:</span><span style='color:#40015a; '>image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAYAAAC5tzfZAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTFH80I3AAAA6ElEQVQoU7VSwQqCQBBVcNVNXRVJQUEPCvoLRR/SB0T9QNfIEDp1da4e/NHeWsRS1q0Hj5mdN4/ZcdXeURTFQgjRuq5Lvu93VVU5T+k76roWnPMbUrIs65bnuXgoP/B/UxzHazT1pmmSruuE0hTlWdajKNo8OhWkacohHpBOBpWMsUMYhhz5J5qmYbZt75D2oDT0MOyyLGNS/4rnxD1SadjPTsDSHcLrKjifyrJM8UYrcIm9jqruOM5Vk4uqRUnUWjzw1jCM04xGsyaVmEzDMBC+Ho3jOEXN87yz/GV+MUkSQt8UgyC43AH4oj71EqujyQAAAABJRU5ErkJggg==</span><span style='color:#0000e6; '>"</span><span style='color:#808030; '>)</span> <span style='color:#074726; '>center</span> <span style='color:#074726; '>right</span> <span style='color:#074726; '>no-repeat</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>margin</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>0</span> <span style='color:#008c00; '>6</span><span style='color:#006600; '>px</span> <span style='color:#008c00; '>0</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>



<blockquote>a good practice will be to limit the effect of the CSS-rule to a specific part of the page,
for example, for my WordPress, I've set the selector to:
<pre>
<span style='color:#808030; '>.</span>content <span style='color:#808030; '>.</span>posts <span style='color:#800000; font-weight:bold; '>a</span><span style='color:#808030; '>[</span>download<span style='color:#808030; '>]</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>before</span><span style='color:#800080; '>{</span>
</pre>
so only the to the content at the main container will be effected..</blockquote>

</ul>
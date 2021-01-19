<!--more-->


If your website viewers have Skype installed the <em>Skype Internet Explorer Toolbar</em> with wreak havoc on your websites, in case it (<em>Skype's browser-extension</em>) discovers any sort of data which resembles a phone number, it will then edit the HTML around the text to a hyperlink, making it clickable, and when clicked the main Skype application on your PC (or mobile) will open.

Include the following meta tag to prevent this action.
<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>meta</span><span style='color:#274796; '> </span><span style='color:#074726; '>name</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"SKYPE_TOOLBAR"</span><span style='color:#274796; '> </span><span style='color:#074726; '>content</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"SKYPE_TOOLBAR_PARSER_COMPATIBLE"</span><span style='color:#a65700; '>&gt;</span>
</pre>

<blockquote>*Oh and apparently both the name and content are <strong>case-sensitive</strong> (if won't work if you'll use <code>"skype_toolbar"</code>/<code>"skype_toolbar_parser_compatible"</code> :]
Edit:*Also- it is HARD-CODED @Skype in a way you must use <code>meta-name-content</code> and will NOT work if you're to be putting the <code>content</code> before the <code>name</code> :]]
--Edit:**ALSO! - it won't work if you'll to be put a self-closing slash at the end: <code>/&gt</code> you MUST use <code>&gt</code>  :]]]
---Edit:***G.Damn it!!!! it won't work if you put a space before the <code> &gt</code>.... essentially copy the line above :]]]]</blockquote>

<img src="https://icompile.eladkarako.com/_uploads/2016/08/icompile.eladkarako.com_prevent_skype_toolbar_html_modifications.png" alt="icompile.eladkarako.com_prevent_skype_toolbar_html_modifications" width="1228" height="219" class="aligncenter size-full wp-image-6051" />

<strong>... :]]]]]</strong>

...ANYWAY.......

<blockquote>If you DO wish to pre-specify your contact telephone-number to be Skype-compatible (I guess it is useful if you are sort of seller/retailer)
<pre><span style='color:#696969; '>&lt;!-- sphoneid telnr="+972123456789" fileas="firstname lastname" --></span>+<span style='color:#008c00; '>972</span>-<span style='color:#008c00; '>12</span>-<span style='color:#008c00; '>345</span>-<span style='color:#008c00; '>6789</span><span style='color:#696969; '>&lt;!-- sphoneid --></span>
</pre></blockquote>

<blockquote>You <strong>might as well</strong> add the following meta-tag, to <strong>avoid all sort of (other) unintentional ""content-discovering""</strong>..
<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>meta</span><span style='color:#274796; '> </span><span style='color:#074726; '>name</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"format-detection"</span><span style='color:#274796; '> </span><span style='color:#074726; '>content</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"telephone=no,date=no,address=no,email=no,url=no"</span><span style='color:#274796; '> </span><span style='color:#a65700; '>/&gt;</span>
</pre>

(You may customize the limitation by removing telephone/date/address/email/url from the content attribute)</blockquote>

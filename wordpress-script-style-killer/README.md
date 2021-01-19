WordPress loads many scripts and styles, (jQuery core and various-jQuery-plugins are few of the major ones)
in-case you don't really need them, I've wrote a plugin that will "kill" (remove from the HTML, in a very unforgiving way..),
this without the need to dig into the WordPress-API itself.

Track the added script and styles added to your page, by copy&pasting the following code into your template (use any FTP-client for that), just don't forget to remove it after you'll be done with-it.
<!--more-->

<pre>
<span style='color:#696969; '>&lt;!--</span> <span style='font-weight:bolder;color:#5f5035;  '>&lt;?php</span><span style='color:#000000;  '></span>
  <span style='color:#800000;  font-weight:bold; '>global</span><span style='color:#000000;  '> </span><span style='color:#797997;  '>$wp_styles</span><span style='color:#800080;  '>;</span><span style='color:#000000;  '></span>
  <span style='color:#800000;  font-weight:bold; '>global</span><span style='color:#000000;  '> </span><span style='color:#797997;  '>$wp_scripts</span><span style='color:#800080;  '>;</span><span style='color:#000000;  '></span>

  <span style='color:#400000;  '>var_dump</span><span style='color:#808030;  '>(</span><span style='color:#797997;  '>$wp_styles</span><span style='color:#808030;  '>)</span><span style='color:#800080;  '>;</span><span style='color:#000000;  '></span>
  <span style='color:#400000;  '>var_dump</span><span style='color:#808030;  '>(</span><span style='color:#797997;  '>$wp_scripts</span><span style='color:#808030;  '>)</span><span style='color:#800080;  '>;</span><span style='color:#000000;  '></span>
<span style='font-weight:bolder;color:#5f5035;  '>?></span> <span style='color:#696969; '>--&gt;</span> 
</pre>

<img src="https://icompile.eladkarako.com/_uploads/2016/08/icompile.eladkarako.com_page_scripts_and_styles_example1.png" alt="icompile.eladkarako.com_page_scripts_and_styles_example1" width="663" height="587" />

"Killing" scripts and styles of your page is done by commenting them out of the HTML,
meaning:
<code>&lt;script type&equals;&quot;text&sol;javascript&quot; async&equals;&quot;async&quot; src&equals;&quot;&quot;http&colon;&sol;&sol;icompile&period;eladkarako&period;com&sol;wp-content&sol;plugins&sol;wp-cleanfix&sol;wpdk&sol;assets&sol;js&sol;timepicker&sol;jquery&period;timepicker&period;js&quest;ver&equals;1&period;1&period;0&quot;&gt;&lt;&sol;script&gt;</code>
will transform into
<code>&lt;&excl;-- SCRIPT-KILLER&colon;&lbrack;&quot;jquery&quot;&rsqb;&sol;REMOVED&colon;&lbrack;&quot;http&colon;&sol;&sol;icompile&period;eladkarako&period;com&sol;wp-content&sol;plugins&sol;wp-cleanfix&sol;wpdk&sol;assets&sol;js&sol;timepicker&sol;jquery&period;timepicker&period;js&quest;ver&equals;1&period;1&period;0&quot;&rsqb; --&gt;</code>

<img src="https://icompile.eladkarako.com/_uploads/2016/08/icompile.eladkarako.com_page_scripts_and_styles_example_action.png" alt="icompile.eladkarako.com_page_scripts_and_styles_example_action" width="1332" height="655" />

naturally *one* should check the console for errors such as <code>could not find '$'</code> (or <code>.. jQuery'</code>),
but if your wordpress-plugins do not use jQuery, it should be rather safe..

those are the keywords that will trigger the script -or- style removing (with no particular order, ..and it is not case-sensitive)
<ul>
<li>jquery</li>
<li>backbone</li>
<li>prototype</li>
<li>scriptaculous</li>
<li>thickbox</li>
<li>embed</li>
<li>a11</li>
<li>i18n</li>
<li>cleanfix</li>
</ul>


using Google PageSpeed (by Apache's plugin "ModPageSpeed") or <a href="https://github.com/eladkarako/wordpress-plugin-raw-html-manipulation-minifier" target="_blank">this cool minifier plugin for WordPress</a> can remove the comments and make the entire textual content quite small indeed..

have fun!
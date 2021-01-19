<!--more-->
<blockquote>
Since early-days you could have peep 'behind the curtain' on to several-aspects of the Chrome-engine,
plugins were the 3<sup>rd</sup>-party stuff we (as Google dev) needed but didn't really want.

Compatibility usually meant security hazards and messy C++ code interfering with the rendering/parsing engines or other unpopular 'but it works' half baked solutions.

Chrome 57 (you can already have it in latest <em>Chromium</em> and <em>Chrome Canary</em> will no longer have the chrome://plugins page, and remaining flash support will handled using the main-settings, as too the internal-PDF-plugin.

<hr/>
<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_chrome_plugins_alternative1.gif" alt="" width="289" height="487"/>
<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_chrome_plugins_alternative2.gif" alt="" width="502" height="236"/>
<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_chrome_plugins_alternative3.gif" alt="" width="585" height="275"/>
</blockquote>

Known issues that have <strong>not</strong> been addressed yet..
<blockquote>
Since you could actively <strong><a href="https://bugs.chromium.org/p/chromium/issues/detail?id=615738#c17" target="_blank">still load pepper plugins</a></strong> into Chrome, such as Chromium with WidevineCdm, or develop&&test your own-plugins (using <code>&#x0063;&#x0068;&#x0072;&#x006F;&#x006D;&#x0065;&#x002E;&#x0065;&#x0078;&#x0065;&#x0020;&#x002D;&#x002D;&#x0072;&#x0065;&#x0067;&#x0069;&#x0073;&#x0074;&#x0065;&#x0072;&#x002D;&#x0070;&#x0065;&#x0070;&#x0070;&#x0065;&#x0072;&#x002D;&#x0070;&#x006C;&#x0075;&#x0067;&#x0069;&#x006E;&#x0073;&#x003D;&#x0022;&#x0043;&#x003A;&#x005C;&#x0063;&#x006F;&#x0064;&#x0065;&#x005C;&#x0073;&#x0072;&#x0063;&#x005C;&#x0063;&#x0068;&#x0072;&#x006F;&#x006D;&#x0065;&#x005C;&#x0044;&#x0065;&#x0062;&#x0075;&#x0067;&#x005C;&#x0070;&#x0070;&#x0061;&#x0070;&#x0069;&#x005F;&#x0074;&#x0065;&#x0073;&#x0074;&#x0073;&#x002E;&#x0064;&#x006C;&#x006C;&#x0023;&#x0050;&#x0050;&#x0041;&#x0050;&#x0049;&#x0020;&#x0054;&#x0065;&#x0073;&#x0074;&#x0073;&#x0023;&#x0023;&#x0031;&#x002E;&#x0032;&#x002E;&#x0033;&#x003B;&#x0061;&#x0070;&#x0070;&#x006C;&#x0069;&#x0063;&#x0061;&#x0074;&#x0069;&#x006F;&#x006E;&#x002F;&#x0078;&#x002D;&#x0070;&#x0070;&#x0061;&#x0070;&#x0069;&#x002D;&#x0074;&#x0065;&#x0073;&#x0074;&#x0073;&#x0022;&#x0020;&#x002D;&#x002D;&#x0065;&#x006E;&#x0061;&#x0062;&#x006C;&#x0065;&#x002D;&#x0070;&#x0065;&#x0070;&#x0070;&#x0065;&#x0072;&#x002D;&#x0074;&#x0065;&#x0073;&#x0074;&#x0069;&#x006E;&#x0067;</code>- -for example..),
admittedly, we loose some functionality, it might means that the next version will include a dynamic menu added or simply be controlled entirely using command-line switches and will lack the dynamically feature of live enable|disable. Anyway removing of the (most of the) 3<sup>rd</sup>-party plugins' support is high-priority...
..for *some reason*...
</blockquote>


<img src="https://icompile.eladkarako.com/_uploads/2015/01/icompile.eladkarako.com_i_always_follow_the_proper_dress_code.jpg" alt="icompile.eladkarako.com_i_always_follow_the_proper_dress_code" class="alignright size-full wp-image-2421" />Maybe only best used @ the end-point compile-script) to minify/obfuscate your code even more..

point mentioning that those <em>*might*</em> gives you a little <em>street credit</em>, but are considered a really bad practice,
and in no-way you should use those in actual live-code, at least, out of common courtesy for your fellow developers <small>:]</small>

<img src="https://icompile.eladkarako.com/_uploads/2015/01/icompile.eladkarako.com_beautiful_code_animation.gif" alt="icompile.eladkarako.com_beautiful_code_animation" width="396" height="288" class="aligncenter size-full wp-image-2555" />


<blockquote><ul>
<li>
:( <code>x = !!y;</code>
</li>
<li>
:) <code>x = Boolean(y);</code>
</li>
</ul>
</blockquote>

<hr />

<blockquote><ul>
<li>
:( <code>x = +y;</code>
</li>
<li>
:) <code>x = Number(y);</code>
</li>
</ul>
</blockquote>

<hr />

<blockquote><ul>
<li>
:( <code>x = '' + y;</code>
</li>
<li>
:) <code>x = String(y);</code>
</li>
</ul>
</blockquote>

<hr />

<blockquote><ul>
<li>
:( <code>x = ~s.indexOf('.');</code>
</li>
<li>
:) <code>x = s.indexOf('.') !== -1;</code>
</li>
</ul>
</blockquote>

consider reading more about:
- <a href="https://www.npmjs.com/package/jscs" title="JavaScript Code Style" target="_blank">JSCS (JavaScript Code Style)<small>https://www.npmjs.com/package/jscs</small></a>
- <a href="https://developers.google.com/closure/utilities/docs/linter_howto" title="Google JavaScript Linter" target="_blank">GJSLint (Google JavaScript Linter) <small>https://developers.google.com/closure/utilities/docs/linter_howto</small></a>

if you see those abominations,
be a pal, and fix it :)
<!--more-->

A good example for using the following directive, in on WordPress-based platforms,
where, in order to preserve the user-format, a post-processing of the textual content will be applied,
* even if you're working on "Text" mode instead of "Visual", the main issue is breaking the content by "\
" (NEWLINE) and then wrapping each line with &#60;p&#62; element. So there is <em>no-such a thing</em> as "Plain Text", that is- unless you pre-wrap everything you want to keep, with something like this:  <code>&#60;pre&#62;......this will stay the same....&#60;&#47;pre&#62;</code>

<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>style</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#808030; '>[</span><span style='color:#074726; '>dir</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>RTL</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#808030; '>,</span> <span style='color:#808030; '>[</span><span style='color:#074726; '>dir</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>RTL</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>&gt;</span> <span style='color:#808030; '>*</span><span style='color:#800080; '>{</span>
  <span style='color:#bb7977; font-weight:bold; '>direction</span><span style='color:#808030; '>:</span>     <span style='color:#074726; '>rtl</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>text-align</span><span style='color:#808030; '>:</span>    <span style='color:#074726; '>right</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>unicode-bidi</span><span style='color:#808030; '>:</span>  <span style='color:#074726; '>bidi-override</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>style</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>pre</span><span style='color:#274796; '> </span><span style='color:#074726; '>lang</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"he-IL"</span><span style='color:#274796; '> </span><span style='color:#074726; '>language</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Hebrew"</span><span style='color:#274796; '> </span><span style='color:#074726; '>dir</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"RTL"</span><span style='color:#274796; '> </span><span style='color:#074726; '>charset</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"UTF-8"</span><span style='color:#a65700; '>&gt;</span>

<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>pre</span><span style='color:#a65700; '>&gt;</span>
</pre>


- You might need to add <code>!important</code> directive,
if your rules are being overridden by later rules,
- On some cases, even use an inline-style.
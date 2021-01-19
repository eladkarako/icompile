<pre><span style='color:#800000; font-weight:bold; '>function</span> fold<span style='color:#808030; '>(</span><span style='color:#797997; '>input</span><span style='color:#808030; '>,</span> max_line_character_length<span style='color:#808030; '>,</span> fold_character<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>var</span> regex<span style='color:#800080; '>;</span>

  <span style='color:#797997; '>input</span>                      <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>string</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> <span style='color:#797997; '>input</span>                      <span style='color:#800080; '>?</span> <span style='color:#797997; '>input</span>                        <span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
  max_line_character_length  <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>number</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> max_line_character_length  <span style='color:#800080; '>?</span> max_line_character_length    <span style='color:#800080; '>:</span> <span style='color:#008c00; '>10</span><span style='color:#800080; '>;</span>
  fold_character             <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>string</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> fold_character             <span style='color:#800080; '>?</span> fold_character               <span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>

  regex <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>new</span> <span style='color:#797997; '>RegExp</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>(.{</span><span style='color:#800000; '>"</span>  <span style='color:#808030; '>+</span>  <span style='color:#797997; '>String</span><span style='color:#808030; '>(</span>max_line_character_length <span style='color:#808030; '>-</span> fold_character<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#808030; '>)</span>  <span style='color:#808030; '>+</span>  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>})</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>gim</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  
  <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#797997; '>input</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span>regex<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>$1</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> fold_character<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>

running 
<pre>fold<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>aawregawaergarewqagaeragaewrgaewarjuasciji23r4avasdfaba asafdav fdsaewtyaa34a5a42aaa 6a2345aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>20</span><span style='color:#808030; '>)</span>
</pre>

will transform <code>aawregawaergarewqagaeragaewrgaewarjuasciji23r4avasdfaba asafdav fdsaewtyaa34a5a42aaa 6a2345aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"</code> into:

<pre>
aawregawaergarewqag
aeragaewrgaewarjuas
ciji23r4avasdfaba a
safdav fdsaewtyaa34
a5a42aaa 6a2345aaaa
aaaaaaaaaaaaaaaaaaa
aaaaaaaaaa
</pre>

specifying "closing character" - on unix or "original" [unformatted] email template, you might notice that the character before the new-line, is sometimes '<code>=</code>', 
here too, you can specify (instead of default <code>&#92;n</code>) any set of characters:

running 
<pre>fold<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>aawregawaergarewqagaeragaewrgaewarjuasciji23r4avasdfaba asafdav fdsaewtyaa34a5a42aaa 6a2345aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>20</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>=</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span>
</pre>

will transform the text into
<pre>
aawregawaergarewqa=
gaeragaewrgaewarju=
asciji23r4avasdfab=
a asafdav fdsaewty=
aa34a5a42aaa 6a234=
5aaaaaaaaaaaaaaaaa=
aaaaaaaaaaaaaaaa
</pre>

- max length is set to the limit given --- INCLUDING the wrap character! (not including the \
).
- you should specify \
 if you want to wrap the string [otherwise it is just a "separator-function" separating with delimiter every <code>X</code> characters...]


- it should pretty much support every charset, but you might consider transforming the string into byte-string first.

for example this seems to work fine:

<pre>
fold("אאאאאאאאבבבבבבבבגגגגגגדדדדדדדדדדההההההההווווווווו", 10, "=\
")
outputs...
"אאאאאאאא=
בבבבבבבב=
גגגגגגדד=
דדדדדדדד=
הההההההה=
וווווווו=
ו"
</pre>

you can make sure max-character value is less than 256 using <code>unescape(encodeURIComponent("YOUR TEXT HERE"))</code>
...
you better convert stuff before... for example to BASE64, than use the <code>fold</code> function on the ASCII content...

******
b.t.w 
although it works it sure looks weird.. each line will look like <code>&#215;&#215;&#215;&#215;=</code>..
******
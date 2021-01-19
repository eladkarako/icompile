<strong>String</strong> To <strong>Byte-String</strong>.

<blockquote>On a <strong>Byte-String</strong> the maximum value of each character is <code>255</code>,
While standard ASCII strings (such as "abcdef") will stay the same, any <strong>Unicode</strong> <em>(for example)</em> characters will be 'split up' <strong>to a pair</strong> (or triplet or more..) of characters.

For example: <code>א</code> <strong>really is</strong> <code>&bsol;u00D7&bsol;u0090</code> in "byte-string'y" :)</blockquote>

On this first attempt, we'll break the string "א" and glue it to together,
<em>(but the PHP engine will render it, server-side, perfectly back in to the "א" character again..)</em>

<pre><span style='color:#5f5035; background:#ffffe8; '>&lt;?php</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#400000; background:#ffffe8; '>mb_language</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#0000e6; background:#ffffe8; '>"uni"</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '>                            </span><span style='color:#696969; background:#ffffe8; '>/* inner engine to Unicode support */</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#800080; background:#ffffe8; '>@</span><span style='color:#400000; background:#ffffe8; '>mb_internal_encoding</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#0000e6; background:#ffffe8; '>'UTF-8'</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#400000; background:#ffffe8; '>setlocale</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#7d0045; background:#ffffe8; '>LC_ALL</span><span style='color:#808030; background:#ffffe8; '>,</span><span style='color:#0000e6; background:#ffffe8; '>'en_US.UTF-8'</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#400000; background:#ffffe8; '>header</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#0000e6; background:#ffffe8; '>'Content-Type: text/plain;charset=UTF-8'</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#797997; background:#ffffe8; '>$string</span><span style='color:#000000; background:#ffffe8; '>     </span><span style='color:#808030; background:#ffffe8; '>=</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#0000e6; background:#ffffe8; '>'א'</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#797997; background:#ffffe8; '>$byte_array</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#808030; background:#ffffe8; '>=</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#400000; background:#ffffe8; '>unpack</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#0000e6; background:#ffffe8; '>'C*'</span><span style='color:#808030; background:#ffffe8; '>,</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#797997; background:#ffffe8; '>$string</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '>           </span><span style='color:#696969; background:#ffffe8; '>/* byte array (character values)                    [215,144] */</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#797997; background:#ffffe8; '>$char_array</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#808030; background:#ffffe8; '>=</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#400000; background:#ffffe8; '>array_map</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#800000; background:#ffffe8; font-weight:bold; '>function</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#797997; background:#ffffe8; '>$byte</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>{</span><span style='color:#000000; background:#ffffe8; '>       </span><span style='color:#696969; background:#ffffe8; '>/* char array (actual binary-string by character    ['�','�'] */</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#800000; background:#ffffe8; font-weight:bold; '>return</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#400000; background:#ffffe8; '>chr</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#797997; background:#ffffe8; '>$byte</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#800080; background:#ffffe8; '>}</span><span style='color:#808030; background:#ffffe8; '>,</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#797997; background:#ffffe8; '>$byte_array</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#797997; background:#ffffe8; '>$string</span><span style='color:#000000; background:#ffffe8; '>     </span><span style='color:#808030; background:#ffffe8; '>=</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#400000; background:#ffffe8; '>implode</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#0000e6; background:#ffffe8; '>''</span><span style='color:#808030; background:#ffffe8; '>,</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#797997; background:#ffffe8; '>$char_array</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '>        </span><span style='color:#696969; background:#ffffe8; '>/* binary string                                              */</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#400000; background:#ffffe8; '>var_dump</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#797997; background:#ffffe8; '>$string</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#5f5035; background:#ffffe8; '>?></span>
</pre>

<strong>Just for the presentation</strong>, the following "fix" will enable you to show the binary-string, fooling the PHP-engine <em>(thinking it has already assembled it as Unicode-output)</em>:

<pre><span style='color:#5f5035; background:#ffffe8; '>&lt;?php</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#400000; background:#ffffe8; '>mb_language</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#0000e6; background:#ffffe8; '>"uni"</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '>                            </span><span style='color:#696969; background:#ffffe8; '>/* inner engine to Unicode support */</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#800080; background:#ffffe8; '>@</span><span style='color:#400000; background:#ffffe8; '>mb_internal_encoding</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#0000e6; background:#ffffe8; '>'UTF-8'</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#400000; background:#ffffe8; '>setlocale</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#7d0045; background:#ffffe8; '>LC_ALL</span><span style='color:#808030; background:#ffffe8; '>,</span><span style='color:#0000e6; background:#ffffe8; '>'en_US.UTF-8'</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#400000; background:#ffffe8; '>header</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#0000e6; background:#ffffe8; '>'Content-Type: text/plain;charset=UTF-8'</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#797997; background:#ffffe8; '>$string</span><span style='color:#000000; background:#ffffe8; '>     </span><span style='color:#808030; background:#ffffe8; '>=</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#0000e6; background:#ffffe8; '>'א'</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#797997; background:#ffffe8; '>$byte_array</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#808030; background:#ffffe8; '>=</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#400000; background:#ffffe8; '>unpack</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#0000e6; background:#ffffe8; '>'C*'</span><span style='color:#808030; background:#ffffe8; '>,</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#797997; background:#ffffe8; '>$string</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '>           </span><span style='color:#696969; background:#ffffe8; '>/* byte array (character values)                    [215,144] */</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#797997; background:#ffffe8; '>$char_array</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#808030; background:#ffffe8; '>=</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#400000; background:#ffffe8; '>array_map</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#800000; background:#ffffe8; font-weight:bold; '>function</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#797997; background:#ffffe8; '>$byte</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>{</span><span style='color:#000000; background:#ffffe8; '>       </span><span style='color:#696969; background:#ffffe8; '>/* char array (actual binary-string by character    ['�','�'] */</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#800000; background:#ffffe8; font-weight:bold; '>return</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#400000; background:#ffffe8; '>mb_convert_encoding</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#000000; background:#ffffe8; '>  </span><span style='color:#400000; background:#ffffe8; '>chr</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#797997; background:#ffffe8; '>$byte</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#000000; background:#ffffe8; '>  </span><span style='color:#808030; background:#ffffe8; '>,</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#0000e6; background:#ffffe8; '>'UTF-8'</span><span style='color:#808030; background:#ffffe8; '>,</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#0000e6; background:#ffffe8; '>'US-ASCII'</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#800080; background:#ffffe8; '>}</span><span style='color:#808030; background:#ffffe8; '>,</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#797997; background:#ffffe8; '>$byte_array</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#797997; background:#ffffe8; '>$string</span><span style='color:#000000; background:#ffffe8; '>     </span><span style='color:#808030; background:#ffffe8; '>=</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#400000; background:#ffffe8; '>implode</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#0000e6; background:#ffffe8; '>''</span><span style='color:#808030; background:#ffffe8; '>,</span><span style='color:#000000; background:#ffffe8; '> </span><span style='color:#797997; background:#ffffe8; '>$char_array</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '>        </span><span style='color:#696969; background:#ffffe8; '>/* binary string                                              */</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#000000; background:#ffffe8; '>&#xa0;&#xa0;</span><span style='color:#400000; background:#ffffe8; '>var_dump</span><span style='color:#808030; background:#ffffe8; '>(</span><span style='color:#797997; background:#ffffe8; '>$string</span><span style='color:#808030; background:#ffffe8; '>)</span><span style='color:#800080; background:#ffffe8; '>;</span><span style='color:#000000; background:#ffffe8; '></span>
<span style='color:#5f5035; background:#ffffe8; '>?></span>
</pre>

But keep in mind, this is only for viewing stuff,
since it will double the length of every-string (due to additional padding for each character)
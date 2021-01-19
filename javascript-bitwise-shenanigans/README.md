<h1><img class="size-full wp-image-2933 aligncenter" src="https://icompile.eladkarako.com/_uploads/2015/04/icompile.eladkarako.com_shenanigans_bytewise_byte_wise_guy.jpg" alt="icompile.eladkarako.com_shenanigans_bytewise_byte_wise_guy" /></h1>
<h1>JavaScript-Bitwise-Shenanigans</h1>
<a href="https://github.com/eladkarako/JavaScript-Bitwise-Shenanigans" target="_blank">@GitHub</a>

Yeah I &lt;3 Bitewise... String, ArrayBuffer, Uint8Array, Uint16Array, Uint32Array. And Native Implementation That Won't Suck That Much.

plus.. I need it to another client-side compression project,

&nbsp;

from the following code:

<pre>String<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>base64_to_string <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span> <span style='color:#800000; font-weight:bold; '>return</span> window<span style='color:#808030; '>.</span>atob<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>//bonus</span>
String<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>as_base64_string <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span> <span style='color:#800000; font-weight:bold; '>return</span> window<span style='color:#808030; '>.</span>btoa<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>//bonus</span>

<span style='color:#696969; '>/**</span>
<span style='color:#696969; '>&#xa0;* @method as_array_buffer</span>
<span style='color:#696969; '>&#xa0;* read a string (I/O!!!) into an ArrayBuffer, you should choose ''new Uint8Array(.....)'' to view the result...</span>
<span style='color:#696969; '>&#xa0;* @param {function} callback</span>
<span style='color:#696969; '>&#xa0;*/</span>
String<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>as_array_buffer <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span>callback<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>var</span> reader <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>new</span> FileReader<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  reader<span style='color:#808030; '>.</span>onload <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span> callback<span style='color:#808030; '>(</span>reader<span style='color:#808030; '>.</span>result<span style='color:#808030; '>)</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
  reader<span style='color:#808030; '>.</span>readAsArrayBuffer<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>new</span> Blob<span style='color:#808030; '>(</span><span style='color:#808030; '>[</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>]</span><span style='color:#808030; '>,</span> <span style='color:#800080; '>{</span>type<span style='color:#800080; '>:</span> <span style='color:#0000e6; '>'text/plain'</span><span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

<span style='color:#696969; '>/**</span>
<span style='color:#696969; '>&#xa0;* @method as_byte_array</span>
<span style='color:#696969; '>&#xa0;* represent string as array byte, chars with value > 128 will get 2 or 3 cells to represent their's value.</span>
<span style='color:#696969; '>&#xa0;* @note this function is limited by ''charCodeAt'' to chars with codes &lt; 65536. most of higher chars will still have representative (or ''char replacement'') in the &lt; 65536 table.</span>
<span style='color:#696969; '>&#xa0;* @returns {Array}</span>
<span style='color:#696969; '>&#xa0;*/</span>
String<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>as_byte_array <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>var</span> b <span style='color:#808030; '>=</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>split</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>''</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>forEach<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span>c<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    c <span style='color:#808030; '>=</span> c<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>charCodeAt</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

    <span style='color:#808030; '>(</span>c <span style='color:#808030; '>&lt;</span> <span style='color:#008c00; '>128</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>?</span> <span style='color:#808030; '>(</span>b<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span>c<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>:</span>
      <span style='color:#808030; '>(</span>c <span style='color:#808030; '>&lt;</span> <span style='color:#008c00; '>2048</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>?</span> <span style='color:#808030; '>(</span> b<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span>c <span style='color:#808030; '>></span><span style='color:#808030; '>></span> <span style='color:#008c00; '>6</span> <span style='color:#808030; '>|</span> <span style='color:#008c00; '>192</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span> b<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span>c <span style='color:#808030; '>&amp;</span> <span style='color:#008c00; '>63</span> <span style='color:#808030; '>|</span> <span style='color:#008c00; '>128</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>:</span>
        <span style='color:#808030; '>(</span>b<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span>c <span style='color:#808030; '>></span><span style='color:#808030; '>></span> <span style='color:#008c00; '>12</span> <span style='color:#808030; '>|</span> <span style='color:#008c00; '>224</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span> b<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span>c <span style='color:#808030; '>></span><span style='color:#808030; '>></span> <span style='color:#008c00; '>6</span> <span style='color:#808030; '>&amp;</span> <span style='color:#008c00; '>63</span> <span style='color:#808030; '>|</span> <span style='color:#008c00; '>128</span><span style='color:#808030; '>)</span><span style='color:#808030; '>,</span> b<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span>c <span style='color:#808030; '>&amp;</span> <span style='color:#008c00; '>63</span> <span style='color:#808030; '>|</span> <span style='color:#008c00; '>128</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>return</span> b<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

<span style='color:#696969; '>/**</span>
<span style='color:#696969; '>&#xa0;* @method as_unicode_decoded</span>
<span style='color:#696969; '>&#xa0;* turns a string into a string with chars-value of less than 128 (but more chars)</span>
<span style='color:#696969; '>&#xa0;* @example #1:   "א"->([215, 144])-> "[?][?]"</span>
<span style='color:#696969; '>&#xa0;* @returns {string}</span>
<span style='color:#696969; '>&#xa0;*/</span>
String<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>as_unicode_decoded <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  <span style='color:#696969; '>//breaks characters with code > 128 to pairs, then parse the pairs to ''strings''.</span>
  <span style='color:#800000; font-weight:bold; '>return</span> String<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span><span style='color:#808030; '>.</span>apply<span style='color:#808030; '>(</span><span style='color:#0f4d75; '>null</span><span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>as_byte_array<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

<span style='color:#696969; '>/**</span>
<span style='color:#696969; '>&#xa0;* @method as_unicode_encoded</span>
<span style='color:#696969; '>&#xa0;* turns a string into its unicode format collapsing extra chars (but result with chars with value > 128)</span>
<span style='color:#696969; '>&#xa0;* @returns {string}</span>
<span style='color:#696969; '>&#xa0;*/</span>
String<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>as_unicode_encoded <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  <span style='color:#696969; '>//join strings that are pairs of characters with code &lt; 128 to what probably had been their original format</span>

  <span style='color:#800000; font-weight:bold; '>var</span>
    str <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>this</span>
    <span style='color:#808030; '>,</span> sb <span style='color:#808030; '>=</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span>
    <span style='color:#808030; '>,</span> i
    <span style='color:#808030; '>,</span> c
    <span style='color:#800080; '>;</span>

  str <span style='color:#808030; '>=</span> str<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>split</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>''</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>map<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span>c<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>return</span> c<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>charCodeAt</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#808030; '>(</span>i <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> i <span style='color:#808030; '>&lt;</span> str<span style='color:#808030; '>.</span>length<span style='color:#800080; '>;</span> i <span style='color:#808030; '>+=</span> <span style='color:#008c00; '>1</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    c <span style='color:#808030; '>=</span> <span style='color:#808030; '>[</span>str<span style='color:#808030; '>[</span>i<span style='color:#808030; '>]</span> <span style='color:#808030; '>||</span> <span style='color:#0000e6; '>''</span><span style='color:#808030; '>,</span> str<span style='color:#808030; '>[</span>i <span style='color:#808030; '>+</span> <span style='color:#008c00; '>1</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>||</span> <span style='color:#0000e6; '>''</span><span style='color:#808030; '>,</span> str<span style='color:#808030; '>[</span>i <span style='color:#808030; '>+</span> <span style='color:#008c00; '>2</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>||</span> <span style='color:#0000e6; '>''</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>

    <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span>c<span style='color:#808030; '>[</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>&lt;</span> <span style='color:#008c00; '>128</span><span style='color:#808030; '>)</span>
      sb<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span>String<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span><span style='color:#808030; '>(</span>c<span style='color:#808030; '>[</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>else</span> <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span><span style='color:#008c00; '>191</span> <span style='color:#808030; '>&lt;</span> c<span style='color:#808030; '>[</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>&amp;&amp;</span> c<span style='color:#808030; '>[</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>&lt;</span> <span style='color:#008c00; '>224</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
      sb<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span>String<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span><span style='color:#808030; '>(</span><span style='color:#808030; '>(</span><span style='color:#808030; '>(</span>c<span style='color:#808030; '>[</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>&amp;</span> <span style='color:#008c00; '>31</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>&lt;&lt;</span> <span style='color:#008c00; '>6</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>|</span> <span style='color:#808030; '>(</span>c<span style='color:#808030; '>[</span><span style='color:#008c00; '>1</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>&amp;</span> <span style='color:#008c00; '>63</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      i <span style='color:#808030; '>+=</span> <span style='color:#008c00; '>1</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span> <span style='color:#800000; font-weight:bold; '>else</span> <span style='color:#800080; '>{</span>
      sb<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span>String<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span><span style='color:#808030; '>(</span><span style='color:#808030; '>(</span><span style='color:#808030; '>(</span>c<span style='color:#808030; '>[</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>&amp;</span> <span style='color:#008c00; '>15</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>&lt;&lt;</span> <span style='color:#008c00; '>12</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>|</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>(</span>c<span style='color:#808030; '>[</span><span style='color:#008c00; '>1</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>&amp;</span> <span style='color:#008c00; '>63</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>&lt;&lt;</span> <span style='color:#008c00; '>6</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>|</span> <span style='color:#808030; '>(</span>c<span style='color:#808030; '>[</span><span style='color:#008c00; '>2</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>&amp;</span> <span style='color:#008c00; '>63</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
      i <span style='color:#808030; '>+=</span> <span style='color:#008c00; '>2</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span>
  <span style='color:#800080; '>}</span>
  sb <span style='color:#808030; '>=</span> sb<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>''</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>return</span> sb<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
</pre>


<ul class="task-list">
	<li>you can turn <code>"א"</code> (unicode <code>1488</code>) to its slim-bytewise representattive <code>[215, 144]</code> using <code>"א".as_byte_array()</code>.</li>
	<li>you can turn <code>"א"</code> (unicode <code>1488</code>) to its 'ASCII-like' string (all chars-values are &lt; 128): <code>"×"</code> using<code>"א".as_unicode_decoded()</code></li>
</ul>

<hr />

<ul class="task-list">
	<li>you can turn <code>"×"</code> back to <code>"א"</code> using <code>"×".as_unicode_encoded()</code></li>
	<li>you can use some <code>I/O</code> (!!!) and turn <code>"א"</code> to <code>ArrayBuffer</code> to which you can create a <code>view</code> using <code>Uint8Array</code>(prefered), <code>Uint16Array</code>, or <code>Uint32Array</code>, By using</li>
</ul>
<div class="highlight highlight-js">
<pre><span class="pl-s"><span class="pl-pds">"</span>א<span class="pl-pds">"</span></span>.as_array_buffer(<span class="pl-k">function</span>(<span class="pl-smi">array_buffer</span>){
  <span class="pl-en">console</span><span class="pl-c1">.log</span>(  <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(array_buffer)  );
});

<span class="pl-c">//will log:  [215, 144]</span></pre>
</div>

<hr />

<ul class="task-list">
	<li>Due to some limitation of <code>String.prototype.charCodeAt</code> can not process chars with-value &gt; <code>0x10000 (65536)</code> -- the<code>"א".as_array_buffer</code> may be more accurate in the future, since <code>"א".as_array_buffer</code> uses a <code>FileReader</code> to read a unicode-encoded-string as array-buffer, while conventional methods such-as <code>"א".as_unicode_decoded()</code> or<code>"א".as_byte_array</code> will convert the string char-by-char, using some bitewise operations to render the "ASCII-like" result of chars with value &lt; 128. This is a known fact...</li>
	<li>finally the method such as <code>base64_to_string</code> and <code>as_base64_string</code> are wrapping around <code>atob</code> and <code>btoa</code> which I never remember which one does what <em>(seriously w.t.f. are those names??!!)</em></li>
</ul>

<hr />

<ul class="task-list">
	<li>the unicode decoding is more a UTF-8/Unicode break-down, so the base64 encode/decode methods will work on Unicode/UTF-8.</li>
</ul>

<hr />

<ul class="task-list">
	<li><strong>Its all by industry standards so you may convert string around, and they will ALWAYS be compatible with<code>PHP</code> !!!</strong>.</li>
</ul>
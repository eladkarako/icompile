<pre><style>
  pre[code-like]{
    -webkit-text-stroke: .2px rgba(0,0,0,.5);
    background: rgba(245,245,211,.1) none;
    border-radius: 2px;
    border: 1px dashed rgba(214,214,214,.7);
    box-shadow: 1px 1px 1px rgba(0,0,0,.5),  -1px -1px 2px rgba(0,0,0,.2);
    color: #000000;
    font-family: Courier New,monospace;
    line-height: 1.3em;
    margin: 0;
    overflow-x: auto;
    padding: 5px;
    white-space: pre !important;
    word-break: normal !important;
    word-wrap: normal !important;
  }
</style></pre>

The <code>String.fromCodePoint</code> method has been added to the ECMAScript standard in version 6 and may not be supported in all web browsers or environments yet. Use the code below for a polyfill:


<pre><span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#797997; '>String</span><span style='color:#808030; '>.</span>fromCodePoint<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>var</span> defineProperty <span style='color:#808030; '>=</span> <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
      <span style='color:#696969; '>// IE 8 only supports `Object.defineProperty` on DOM elements</span>
      <span style='color:#800000; font-weight:bold; '>try</span> <span style='color:#800080; '>{</span>
        <span style='color:#800000; font-weight:bold; '>var</span> object <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
        <span style='color:#800000; font-weight:bold; '>var</span> $defineProperty <span style='color:#808030; '>=</span> <span style='color:#797997; '>Object</span><span style='color:#808030; '>.</span>defineProperty<span style='color:#800080; '>;</span>
        <span style='color:#800000; font-weight:bold; '>var</span> result <span style='color:#808030; '>=</span> $defineProperty<span style='color:#808030; '>(</span>object<span style='color:#808030; '>,</span> object<span style='color:#808030; '>,</span> object<span style='color:#808030; '>)</span> <span style='color:#808030; '>&amp;&amp;</span> $defineProperty<span style='color:#800080; '>;</span>
      <span style='color:#800080; '>}</span> <span style='color:#800000; font-weight:bold; '>catch</span><span style='color:#808030; '>(</span>error<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span>
      <span style='color:#800000; font-weight:bold; '>return</span> result<span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>var</span> stringFromCharCode <span style='color:#808030; '>=</span> <span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span><span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>var</span> <span style='color:#800000; font-weight:bold; '>floor</span> <span style='color:#808030; '>=</span> <span style='color:#797997; '>Math</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>floor</span><span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>var</span> fromCodePoint <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
      <span style='color:#800000; font-weight:bold; '>var</span> MAX_SIZE <span style='color:#808030; '>=</span> <span style='color:#008000; '>0x4000</span><span style='color:#800080; '>;</span>
      <span style='color:#800000; font-weight:bold; '>var</span> codeUnits <span style='color:#808030; '>=</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
      <span style='color:#800000; font-weight:bold; '>var</span> highSurrogate<span style='color:#800080; '>;</span>
      <span style='color:#800000; font-weight:bold; '>var</span> lowSurrogate<span style='color:#800080; '>;</span>
      <span style='color:#800000; font-weight:bold; '>var</span> <span style='color:#797997; '>index</span> <span style='color:#808030; '>=</span> <span style='color:#808030; '>-</span><span style='color:#008c00; '>1</span><span style='color:#800080; '>;</span>
      <span style='color:#800000; font-weight:bold; '>var</span> <span style='color:#800000; font-weight:bold; '>length</span> <span style='color:#808030; '>=</span> <span style='color:#797997; '>arguments</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#800080; '>;</span>
      <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
        <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800000; '>'</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>
      <span style='color:#800080; '>}</span>
      <span style='color:#800000; font-weight:bold; '>var</span> result <span style='color:#808030; '>=</span> <span style='color:#800000; '>'</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>
      <span style='color:#800000; font-weight:bold; '>while</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>++</span><span style='color:#797997; '>index</span> <span style='color:#808030; '>&lt;</span> <span style='color:#800000; font-weight:bold; '>length</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
        <span style='color:#800000; font-weight:bold; '>var</span> codePoint <span style='color:#808030; '>=</span> <span style='color:#797997; '>Number</span><span style='color:#808030; '>(</span><span style='color:#797997; '>arguments</span><span style='color:#808030; '>[</span><span style='color:#797997; '>index</span><span style='color:#808030; '>]</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span>
          <span style='color:#808030; '>!</span><span style='color:#800000; font-weight:bold; '>isFinite</span><span style='color:#808030; '>(</span>codePoint<span style='color:#808030; '>)</span> <span style='color:#808030; '>||</span>       <span style='color:#696969; '>// `NaN`, `+Infinity`, or `-Infinity`</span>
          codePoint <span style='color:#808030; '>&lt;</span> <span style='color:#008c00; '>0</span> <span style='color:#808030; '>||</span>              <span style='color:#696969; '>// not a valid Unicode code point</span>
          codePoint <span style='color:#808030; '>></span> <span style='color:#008000; '>0x10FFFF</span> <span style='color:#808030; '>||</span>       <span style='color:#696969; '>// not a valid Unicode code point</span>
          <span style='color:#800000; font-weight:bold; '>floor</span><span style='color:#808030; '>(</span>codePoint<span style='color:#808030; '>)</span> <span style='color:#808030; '>!=</span> codePoint <span style='color:#696969; '>// not an integer</span>
        <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
          <span style='color:#800000; font-weight:bold; '>throw</span> RangeError<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>Invalid code point: </span><span style='color:#800000; '>'</span> <span style='color:#808030; '>+</span> codePoint<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        <span style='color:#800080; '>}</span>
        <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span>codePoint <span style='color:#808030; '>&lt;=</span> <span style='color:#008000; '>0xFFFF</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span> <span style='color:#696969; '>// BMP code point</span>
          codeUnits<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span>codePoint<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        <span style='color:#800080; '>}</span> <span style='color:#800000; font-weight:bold; '>else</span> <span style='color:#800080; '>{</span> <span style='color:#696969; '>// Astral code point; split in surrogate halves</span>
          <span style='color:#696969; '>// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae</span>
          codePoint <span style='color:#808030; '>-</span><span style='color:#808030; '>=</span> <span style='color:#008000; '>0x10000</span><span style='color:#800080; '>;</span>
          highSurrogate <span style='color:#808030; '>=</span> <span style='color:#808030; '>(</span>codePoint <span style='color:#808030; '>></span><span style='color:#808030; '>></span> <span style='color:#008c00; '>10</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span> <span style='color:#008000; '>0xD800</span><span style='color:#800080; '>;</span>
          lowSurrogate <span style='color:#808030; '>=</span> <span style='color:#808030; '>(</span>codePoint <span style='color:#808030; '>%</span> <span style='color:#008000; '>0x400</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span> <span style='color:#008000; '>0xDC00</span><span style='color:#800080; '>;</span>
          codeUnits<span style='color:#808030; '>.</span>push<span style='color:#808030; '>(</span>highSurrogate<span style='color:#808030; '>,</span> lowSurrogate<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        <span style='color:#800080; '>}</span>
        <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span><span style='color:#797997; '>index</span> <span style='color:#808030; '>+</span> <span style='color:#008c00; '>1</span> <span style='color:#808030; '>==</span> <span style='color:#800000; font-weight:bold; '>length</span> <span style='color:#808030; '>||</span> codeUnits<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span> <span style='color:#808030; '>></span> MAX_SIZE<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
          result <span style='color:#808030; '>+=</span> stringFromCharCode<span style='color:#808030; '>.</span>apply<span style='color:#808030; '>(</span><span style='color:#0f4d75; '>null</span><span style='color:#808030; '>,</span> codeUnits<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
          codeUnits<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span> <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
        <span style='color:#800080; '>}</span>
      <span style='color:#800080; '>}</span>
      <span style='color:#800000; font-weight:bold; '>return</span> result<span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span>defineProperty<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
      defineProperty<span style='color:#808030; '>(</span><span style='color:#797997; '>String</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>fromCodePoint</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800080; '>{</span>
        <span style='color:#800000; '>'</span><span style='color:#0000e6; '>value</span><span style='color:#800000; '>'</span><span style='color:#800080; '>:</span> fromCodePoint<span style='color:#808030; '>,</span>
        <span style='color:#800000; '>'</span><span style='color:#0000e6; '>configurable</span><span style='color:#800000; '>'</span><span style='color:#800080; '>:</span> <span style='color:#0f4d75; '>true</span><span style='color:#808030; '>,</span>
        <span style='color:#800000; '>'</span><span style='color:#0000e6; '>writable</span><span style='color:#800000; '>'</span><span style='color:#800080; '>:</span> <span style='color:#0f4d75; '>true</span>
      <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span> <span style='color:#800000; font-weight:bold; '>else</span> <span style='color:#800080; '>{</span>
      <span style='color:#797997; '>String</span><span style='color:#808030; '>.</span>fromCodePoint <span style='color:#808030; '>=</span> fromCodePoint<span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>
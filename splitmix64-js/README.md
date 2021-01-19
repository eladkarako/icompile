<a href="http://prng.di.unimi.it/splitmix64.c">http://prng.di.unimi.it/splitmix64.c</a> seamlessly translated into a workable JavaScript code using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"><em>BigInt</em></a> <sup><a href="https://tc39.es/ecma262/#sec-bigint-objects">ecma262 - <em>sec-bigint-objects</em></a></sup>.

<blockquote>BigInt is a built-in object that provides a way to represent whole numbers larger than <code>2<sup>53</sup>-1</code>, which is the largest number JavaScript can reliably represent with the Number primitive. BigInt can be used for arbitrarily large integers.</blockquote>


<code>splitmix64<del>.c</del>.js</code> is used to initialize the state of the random-number generators from <a href="http://prng.di.unimi.it/">http://prng.di.unimi.it/</a>, starting from a 64-bit seed, as <a href="https://dl.acm.org/citation.cfm?doid=1276927.1276928">research has shown</a> that initialization must be performed with a generator radically different in nature from the one initialized to avoid correlation on similar seeds.

<a href="https://gist.github.com/eladkarako/bf3f8a6017bba9b69185e6e7b4757513#file-splitmix64-js">https://gist.github.com/eladkarako/bf3f8a6017bba9b69185e6e7b4757513#file-splitmix64-js</a>

<iframe type="text/html" charset="UTF-8" loading="eager" lazyload="off" importance="high" 
  src="https://icompile.eladkarako.com/_resources/embed_gist.html?gistuser=eladkarako&gistid=bf3f8a6017bba9b69185e6e7b4757513&origin=https%3A%2F%2Ficompile.eladkarako.com&contenteditable=true" 
  referrerpolicy="no-referrer" sandbox="allow-same-origin allow-scripts allow-top-navigation" 
  seamless="false" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" 
  style="height:300px;"
></iframe>


as for <code>BigInt</code> polyfill, (which may require a code-modification), 
see <a href="https://github.com/peterolson/BigInteger.js">https://github.com/peterolson/BigInteger.js</a> and its wrapper <a href="https://github.com/graup/bigint-polyfill">https://github.com/graup/bigint-polyfill</a> or Google's: <a href="https://github.com/GoogleChromeLabs/jsbi/blob/master/README.md">https://github.com/GoogleChromeLabs/jsbi/blob/master/README.md</a>.



<blockquote>JavScript code obfuscation:
- is used for: "reasons"...
- provides some low-level protecting against: straight-forward debugging, hardening listening or program-flow.
- required to: execute fast, limit 'eval' execution, DOM friendly
</blockquote>




<blockquote>in plain terms, JavaScript code obfuscation is a translatable matrix-conversion, that stills allows the D.O.M to "understand" the code, but makes debugging/watching too exhausting for a human.

best practices also covers minimal D.O.M evaluations: since obfuscated code usually executes few other methods for the same plain input, a good obfuscation algorithm adds fewest evaluated phrases as possible, and called 'eval' method only once.</blockquote>





<blockquote>here is a simple example, that uses JavaScript to obfuscated a plain JavaScript code (can be anything really...)

<pre><span style='color:#800000; font-weight:bold; '>function</span> fromE<span style='color:#808030; '>(</span>n<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>var</span> chars <span style='color:#808030; '>=</span> <span style='color:#0000e6; '>'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890'</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>var</span> char<span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span> <span style='color:#808030; '>===</span> n <span style='color:#808030; '>%</span> <span style='color:#008c00; '>311</span><span style='color:#808030; '>)</span> <span style='color:#696969; '>//311 is is a prime-number, it is not normally a multiplication of any ASCII char (maybe long UNICODE.. TODO: choose larger primer)</span>
    char <span style='color:#808030; '>=</span> String<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span><span style='color:#808030; '>(</span>n <span style='color:#808030; '>/</span> <span style='color:#008c00; '>311</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>else</span>
    char <span style='color:#808030; '>=</span> chars<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>substr</span><span style='color:#808030; '>(</span>n<span style='color:#808030; '>,</span><span style='color:#008c00; '>1</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>return</span> char<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#800000; font-weight:bold; '>var</span> phrase <span style='color:#808030; '>=</span> <span style='color:#0000e6; '>'console.log("hello")'</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>var</span> obfuscated_phrase <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>[</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> phrase<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#808030; '>.</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; '>g</span><span style='color:#808030; '>,</span>toE<span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#0f69ff; '>\\,</span><span style='color:#808030; '>$</span><span style='color:#800000; '>/</span><span style='color:#808030; '>,</span><span style='color:#0000e6; '>''</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>]</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>var</span> translated_plain_phrase <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>eval</span><span style='color:#808030; '>(</span>obfuscated_phrase<span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>''</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>


console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>From: </span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> phrase <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\
</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>To: </span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> obfuscated_phrase <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\
</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>Back To: </span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> translated_plain_phrase <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre></blockquote>






<blockquote>it result with the following output in the Console:
<pre>From<span style='color:#555555; '>:</span> 
console<span style='color:#555555; '>.</span><span style='color:#575757; font-weight:bold; '>log</span><span style='color:#555555; '>(</span><span style='color:#2a2a2a; '>"</span><span style='color:#4c4c4c; '>hello</span><span style='color:#2a2a2a; '>"</span><span style='color:#555555; '>)</span>

To<span style='color:#555555; '>:</span> 
<span style='color:#555555; '>[</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>2</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>14</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>13</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>18</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>14</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>11</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>4</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>14306</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>11</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>14</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>6</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>12440</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>10574</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>7</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>4</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>11</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>11</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>14</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>10574</span><span style='color:#555555; '>)</span><span style='color:#555555; '>,</span>fromE<span style='color:#555555; '>(</span><span style='color:#2e2e2e; '>12751</span><span style='color:#555555; '>)</span><span style='color:#555555; '>]</span>

Back To<span style='color:#555555; '>:</span> 
console<span style='color:#555555; '>.</span><span style='color:#575757; font-weight:bold; '>log</span><span style='color:#555555; '>(</span><span style='color:#2a2a2a; '>"</span><span style='color:#4c4c4c; '>hello</span><span style='color:#2a2a2a; '>"</span><span style='color:#555555; '>)</span>
</pre></blockquote>




<blockquote><small>
piping the result from this simple obfuscation matrix <a href="http://closure-compiler.appspot.com/home" title="Closure Compiler Service" target="_blank">into Closure Compiler Service</a> <a href="https://marijnhaverbeke.nl/uglifyjs" title="Online UglifyJS2 Service" target="_blank">or UglifyJS</a> may be interesting to witness, normally both c.compiler and uglifyJS try to "understand" the code by braking it to trees, then parse it using tree-logic permitted-operations resulting smaller trees, then re-parse the trees back to plain code,
so... it will either increase or decrease the complexity of the code using more or fewer transitions, rule-of-thumb is that you should obfuscate your code using three or more chained calls, this will result with a very deep and narrow tree, and UglifyJS or Google Closure-Compiler, will then "work for you" minifying and obfuscating the end-result even more, with minimal, or no-human intervention..</small></blockquote>

<br />
<img src="https://icompile.eladkarako.com/img/credit.png"/>
<br />
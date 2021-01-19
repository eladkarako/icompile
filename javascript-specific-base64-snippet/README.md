<pre>javascript<span style='color:#800080; '>:</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>text<span style='color:#808030; '>,</span> mimetype<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  mimetype <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>null</span> <span style='color:#808030; '>===</span> mimetype <span style='color:#800080; '>?</span> <span style='color:#800000; '>'</span><span style='color:#800000; '>'</span> <span style='color:#800080; '>:</span> mimetype<span style='color:#800080; '>;</span> <span style='color:#696969; '>/* normalize variable value to STRING (in-case of 'prompt' error)               */</span>

  text <span style='color:#808030; '>=</span>  btoa<span style='color:#808030; '>(</span>                                 <span style='color:#696969; '>/* ASCII(or byte string) to BASE64                                              */</span>
            <span style='color:#800000; font-weight:bold; '>unescape</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>encodeURIComponent</span><span style='color:#808030; '>(</span>        <span style='color:#696969; '>/* trick to make 'btoa' safe for Unicode::: converts any string to byte-string. */</span>
              text
            <span style='color:#808030; '>)</span><span style='color:#808030; '>)</span>
          <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  
  text <span style='color:#808030; '>=</span> mimetype <span style='color:#808030; '>+</span> text<span style='color:#800080; '>;</span>

  console<span style='color:#808030; '>.</span>dir<span style='color:#808030; '>(</span>                                  <span style='color:#696969; '>/* non trimmable output                                                         */</span>
    text
  <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

<span style='color:#800080; '>}</span><span style='color:#808030; '>(</span>
  document<span style='color:#808030; '>.</span>querySelector<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>body</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>innerText
<span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>prompt</span><span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>mimetype?</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>data:text/plain;charset=UTF-8;base64,</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span>
<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

<blockquote>This one is VERY SPECIFIC to assist ME in some repeating tasks for one of my web-app(s),
taking a text-based file and converting it to base64 is quite-easy, but includes a lot of steps... (you can see the [c#] base64 console, by searching my-website..)

<strong>But</strong>, by copying the content of a text file (js, html, plain text, etc...) and pasting it to bin.eladkarako.com,
I can run the code above to output the text-only, unescaped-form (unmodified), with full Unicode support, to the console. No need of writing any files :]</blockquote>

<blockquote>I'm using <code>console.dir</code> as an alternative to <code>console.log</code>, since <code>console.log</code> will not trim the output :)</blockquote>


bookmarklet version:
<pre>javascript<span style='color:#800080; '>:</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>text<span style='color:#808030; '>,</span>mimetype<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>mimetype<span style='color:#808030; '>=</span><span style='color:#0f4d75; '>null</span><span style='color:#808030; '>===</span>mimetype<span style='color:#800080; '>?</span><span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span>mimetype<span style='color:#800080; '>;</span>text<span style='color:#808030; '>=</span>btoa<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>unescape</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>encodeURIComponent</span><span style='color:#808030; '>(</span>text<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>text<span style='color:#808030; '>=</span>mimetype<span style='color:#808030; '>+</span>text<span style='color:#800080; '>;</span>console<span style='color:#808030; '>.</span>dir<span style='color:#808030; '>(</span>text<span style='color:#808030; '>)</span><span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>(</span>document<span style='color:#808030; '>.</span>querySelector<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>body</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>innerText<span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>prompt</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>mimetype?</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>data:text/plain;charset=UTF-8;base64,</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

<img src="https://icompile.eladkarako.com/_uploads/2016/08/icompile.eladkarako.com_base64_body_inner_text.png" alt="icompile.eladkarako.com_base64_body_inner_text" width="923" height="377" />
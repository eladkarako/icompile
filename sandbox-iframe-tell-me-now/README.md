How to know if you are running from within an iframe,
which has set to be sandbox'ed - without allowing scripts execution?

essentially you try and fail (an error will still be presented in the console)
to modify a close-related variable, which requires an injection/execute of
a script in the local-scope (self).

the following code, will give you an explicit
yes/no answer, for the script-sandbox state you are currently running from.

It is useful if you're running a JavaScript code, that 
is originated from a Chrome-extension,
with <code>"all_frames": true,</code> set in the <code>content_scripts</code>.

<img src="https://icompile.eladkarako.com/_uploads/2017/07/icompile.eladkarako.com_is_scope_sandboxed.png" alt="" width="1227" height="407" />

<!--more-->

<pre>
<span style='color:#800000; font-weight:bold; '>function</span> is_sandboxed<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>var</span> is_sandbox<span style='color:#800080; '>;</span>

  self<span style='color:#808030; '>.</span>is_sandbox <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>var</span> script      <span style='color:#808030; '>=</span> self<span style='color:#808030; '>.</span>document<span style='color:#808030; '>.</span>createElement<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>script</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  script<span style='color:#808030; '>.</span>appendChild<span style='color:#808030; '>(</span>document<span style='color:#808030; '>.</span>createTextNode<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>self.is_sandbox=false;</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#696969; '>//script.onload, .onerror, .ontimeout will not work..</span>
  <span style='color:#696969; '>//wrapping the next line with try/catch will not work either, and still render an error... but you can't error handle it since error handling is in itself a forbidden usage.</span>
  self<span style='color:#808030; '>.</span>document<span style='color:#808030; '>.</span>documentElement<span style='color:#808030; '>.</span>appendChild<span style='color:#808030; '>(</span>script<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  is_sandbox <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span> <span style='color:#808030; '>===</span> self<span style='color:#808030; '>.</span>is_sandbox<span style='color:#800080; '>;</span> <span style='color:#696969; '>//true, explicit.</span>
  self<span style='color:#808030; '>.</span>is_sandbox <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>undefined</span><span style='color:#800080; '>;</span>           <span style='color:#696969; '>//cleanup.</span>

  <span style='color:#800000; font-weight:bold; '>return</span> is_sandbox<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>

if you want a test environment, you can use this plain
example in <a href="http://bin.eladkarako.com/">bin.eladkarako.com</a>:

<pre>
<span style='color:#004a43; '>&lt;!doctype html></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#274796; '> itemscope</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>""</span><span style='color:#274796; '> itemtype</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"http://schema.org/WebPage"</span><span style='color:#274796; '> </span><span style='color:#074726; '>dir</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"ltr"</span><span style='color:#274796; '> </span><span style='color:#074726; '>lang</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"en-US"</span><span style='color:#274796; '> </span><span style='color:#074726; '>language</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"English"</span><span style='color:#274796; '> </span><span style='color:#074726; '>charset</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"UTF-8"</span><span style='color:#274796; '> encoding</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"UTF-8"</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>head</span><span style='color:#a65700; '>&gt;</span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>meta</span><span style='color:#274796; '> </span><span style='color:#074726; '>http-equiv</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"X-UA-Compatible"</span><span style='color:#274796; '> </span><span style='color:#074726; '>content</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"IE=edge,chrome=1"</span><span style='color:#a65700; '>/></span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>meta</span><span style='color:#274796; '> </span><span style='color:#074726; '>http-equiv</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Content-Type"</span><span style='color:#274796; '>    </span><span style='color:#074726; '>content</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"text/html;charset=UTF-8"</span><span style='color:#a65700; '>/></span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>meta</span><span style='color:#274796; '> </span><span style='color:#074726; '>name</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"fragment"</span><span style='color:#274796; '>              </span><span style='color:#074726; '>content</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"!"</span><span style='color:#a65700; '>/></span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>meta</span><span style='color:#274796; '> </span><span style='color:#074726; '>name</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"viewport"</span><span style='color:#274796; '>              </span><span style='color:#074726; '>content</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"height=device-height,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,width=device-width,minimal-ui"</span><span style='color:#a65700; '>/></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>head</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>iframe</span><span style='color:#274796; '> </span><span style='color:#074726; '>src</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"about:blank"</span><span style='color:#274796; '> </span><span style='color:#074726; '>sandbox</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>""</span><span style='color:#a65700; '>&gt;</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>iframe</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>html</span><span style='color:#a65700; '>&gt;</span>
</pre>

than right click the result (on the right), click "view source",
and switch to the newly-opened tab,
remove the "view-source:" prefix of the URL, and open up chrome's console,
select the scope, for the "about:blank" iframe, and try running the code above.

The code uses the self, to explicitly work with current iframe.


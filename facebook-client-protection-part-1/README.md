I located the Facebook's console buster script using Chrome developer tools. Here is the script with minor changes for readability (some non-crucial parts removed).

<pre><span style='color:#797997; '>Object</span><span style='color:#808030; '>.</span>defineProperty<span style='color:#808030; '>(</span>window<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>console</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800080; '>{</span>
    value<span style='color:#800080; '>:</span> console<span style='color:#808030; '>,</span>
    writable<span style='color:#800080; '>:</span> <span style='color:#0f4d75; '>false</span><span style='color:#808030; '>,</span>
    configurable<span style='color:#800080; '>:</span> <span style='color:#0f4d75; '>false</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

<span style='color:#800000; font-weight:bold; '>var</span> i <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>function</span> showWarningAndThrow<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>!</span>i<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
        <span style='color:#800000; font-weight:bold; '>setTimeout</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
            console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>%cWarning message</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>font: 2em sans-serif; color: yellow; background-color: red;</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>1</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        i <span style='color:#808030; '>=</span> <span style='color:#008c00; '>1</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span>
    <span style='color:#800000; font-weight:bold; '>throw</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>Console is disabled</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#800000; font-weight:bold; '>var</span> l<span style='color:#808030; '>,</span> n <span style='color:#808030; '>=</span> <span style='color:#800080; '>{</span>
        set<span style='color:#800080; '>:</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span>o<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
            l <span style='color:#808030; '>=</span> o<span style='color:#800080; '>;</span>
        <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span>
        get<span style='color:#800080; '>:</span> <span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
            showWarningAndThrow<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
            <span style='color:#800000; font-weight:bold; '>return</span> l<span style='color:#800080; '>;</span>
        <span style='color:#800080; '>}</span>
    <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
<span style='color:#797997; '>Object</span><span style='color:#808030; '>.</span>defineProperty<span style='color:#808030; '>(</span>console<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>_commandLineAPI</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> n<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#797997; '>Object</span><span style='color:#808030; '>.</span>defineProperty<span style='color:#808030; '>(</span>console<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>__commandLineAPI</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> n<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

With this, the console auto-complete fails silently while statements typed in console will fail to execute (the exception will be logged).

References:
<ul>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor">Object.getOwnPropertyDescriptor</a></li>
	<li><a href="https://developers.google.com/chrome-developer-tools/docs/console-api#consolelogobject_object">Chrome's console.log function (for tips on formatting output)</a></li>
</ul>
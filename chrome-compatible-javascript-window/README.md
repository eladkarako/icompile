<!--more-->

<pre><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span> event <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    event<span style='color:#808030; '>.</span>preventDefault<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>var</span> popupURL <span style='color:#808030; '>=</span> event<span style='color:#808030; '>.</span>currentTarget<span style='color:#808030; '>.</span>href<span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>var</span> popupTitle <span style='color:#808030; '>=</span> event<span style='color:#808030; '>.</span>currentTarget<span style='color:#808030; '>.</span>title<span style='color:#800080; '>;</span>
    <span style='color:#696969; '>// open a popup window</span>
    <span style='color:#696969; '>// when it is closed, kick off the tests again</span>
    <span style='color:#800000; font-weight:bold; '>var</span> popupWin <span style='color:#808030; '>=</span> window<span style='color:#808030; '>.</span>open<span style='color:#808030; '>(</span> popupURL<span style='color:#808030; '>,</span> popupTitle<span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>var</span> popupWinTimer<span style='color:#808030; '>=</span> window<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>setInterval</span><span style='color:#808030; '>(</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
        <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> popupWin<span style='color:#808030; '>.</span>closed <span style='color:#808030; '>!==</span> <span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
            window<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>clearInterval</span><span style='color:#808030; '>(</span> popupWinTimer <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
            publicizeConnTestStart<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        <span style='color:#800080; '>}</span>
    <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>500</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>', 'JavaScript Snippet - A Chrome-Compatible
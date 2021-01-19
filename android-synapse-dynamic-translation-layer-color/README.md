<pre><span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>[</span><span style='color:#0000e6; '>[ ! </span><span style='color:#808030; '>-</span><span style='color:#0000e6; '>z $2 </span><span style='color:#808030; '>]</span>]<span style='color:#800080; '>;</span> <span style='color:#800000; font-weight:bold; '>then</span>
    <span style='color:#bb7977; font-weight:bold; '>let</span> <span style='color:#0000e6; '>"</span><span style='color:#797997; '>RC</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>($((16</span><span style='color:#797997; '>$2</span><span style='color:#0000e6; '>)) &amp; 16711680) >> 16"</span><span style='color:#800080; '>;</span>
    <span style='color:#bb7977; font-weight:bold; '>let</span> <span style='color:#0000e6; '>"</span><span style='color:#797997; '>GC</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>($((16</span><span style='color:#797997; '>$2</span><span style='color:#0000e6; '>)) &amp; 65280) >> 8"</span><span style='color:#800080; '>;</span>
    <span style='color:#bb7977; font-weight:bold; '>let</span> <span style='color:#0000e6; '>"</span><span style='color:#797997; '>BC</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>$((16</span><span style='color:#797997; '>$2</span><span style='color:#0000e6; '>)) &amp; 255"</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>fi</span>

<span style='color:#800000; font-weight:bold; '>case</span> <span style='color:#797997; '>$1</span> <span style='color:#800000; font-weight:bold; '>in</span>

scr_red<span style='color:#e34adc; '>)</span>    <span style='color:#800080; '>;</span><span style='color:#800080; '>&amp;</span>
scr_green)  <span style='color:#800080; '>;</span><span style='color:#800080; '>&amp;</span>
scr_blue)   <span style='color:#800080; '>;</span><span style='color:#800080; '>&amp;</span>
scr_yellow) <span style='color:#800080; '>;</span><span style='color:#800080; '>&amp;</span>
scr_cyan)   <span style='color:#800080; '>;</span><span style='color:#800080; '>&amp;</span>
scr_magenta)    <span style='color:#800080; '>;</span><span style='color:#800080; '>&amp;</span>
scr_white)  <span style='color:#800080; '>;</span><span style='color:#800080; '>&amp;</span>
scr_black)
    <span style='color:#797997; '>P</span><span style='color:#808030; '>=</span><span style='color:#40015a; '>/sys/class/misc/mdnie/hook_control</span><span style='color:#40015a; '>/</span>

    <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>[</span><span style='color:#0000e6; '>[ ! </span><span style='color:#808030; '>-</span><span style='color:#0000e6; '>z $2 </span><span style='color:#808030; '>]</span>]<span style='color:#800080; '>;</span> <span style='color:#800000; font-weight:bold; '>then</span>
        <span style='color:#bb7977; font-weight:bold; '>echo</span> <span style='color:#797997; '>$RC</span> <span style='color:#e34adc; '>&gt;</span> <span style='color:#797997; '>$P</span><span style='color:#40015a; '>/</span><span style='color:#797997; '>$1_red</span>
        <span style='color:#bb7977; font-weight:bold; '>echo</span> <span style='color:#797997; '>$GC</span> <span style='color:#e34adc; '>&gt;</span> <span style='color:#797997; '>$P</span><span style='color:#40015a; '>/</span><span style='color:#797997; '>$1_green</span>
        <span style='color:#bb7977; font-weight:bold; '>echo</span> <span style='color:#797997; '>$BC</span> <span style='color:#e34adc; '>&gt;</span> <span style='color:#797997; '>$P</span><span style='color:#40015a; '>/</span><span style='color:#797997; '>$1_blue</span>
    <span style='color:#800000; font-weight:bold; '>fi</span>

    <span style='color:#bb7977; font-weight:bold; '>echo</span> $<span style='color:#800080; '>(</span><span style='color:#bb7977; font-weight:bold; '>printf</span> <span style='color:#0000e6; '>"#%02X%02X%02X</span><span style='color:#0f69ff; '>\
</span><span style='color:#0000e6; '>"</span> $<span style='color:#800080; '>(</span>cat <span style='color:#797997; '>$P</span><span style='color:#40015a; '>/</span><span style='color:#797997; '>$1_red</span><span style='color:#800080; '>)</span> $<span style='color:#800080; '>(</span>cat <span style='color:#797997; '>$P</span><span style='color:#40015a; '>/</span><span style='color:#797997; '>$1_green</span><span style='color:#800080; '>)</span> $<span style='color:#800080; '>(</span>cat <span style='color:#797997; '>$P</span><span style='color:#40015a; '>/</span><span style='color:#797997; '>$1_blue</span><span style='color:#800080; '>)</span><span style='color:#800080; '>)</span>
    <span style='color:#e34adc; '>;;</span>
<span style='color:#800000; font-weight:bold; '>esac</span>
</pre>
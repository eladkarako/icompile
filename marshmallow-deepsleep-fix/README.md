Android 6.0.1 DeepSleep Fix For Samsung Galaxy Note 5 SM-N920C (noblelte)

Should pre-root and execute from TWRP (custom recovery) terminal.
<!--more-->


<pre><span style='color:#696969; '>#!</span><span style='color:#007997; '>/su/bin/sush</span>
<span style='color:#800000; font-weight:bold; '>for</span> i <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#000000; background:#ffffe8; '>`ls </span><span style='color:#40015a; background:#ffffe8; '>/sys/class/scsi_disk</span><span style='color:#40015a; background:#ffffe8; '>/</span><span style='color:#000000; background:#ffffe8; '>`</span><span style='color:#800080; '>;</span> <span style='color:#800000; font-weight:bold; '>do</span>
  cat <span style='color:#40015a; '>/sys/class/scsi_disk</span><span style='color:#40015a; '>/</span><span style='color:#797997; '>$i</span><span style='color:#40015a; '>/write_protect</span> <span style='color:#008c00; '>2</span><span style='color:#e34adc; '>></span><span style='color:#40015a; '>/dev/null</span> <span style='color:#e34adc; '>|</span> grep <span style='color:#008c00; '>1</span> <span style='color:#e34adc; '>></span><span style='color:#40015a; '>/dev/null</span>
  <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>[</span> <span style='color:#797997; '>$?</span> <span style='color:#44aadd; '>-eq</span> <span style='color:#008c00; '>0</span> <span style='color:#808030; '>]</span><span style='color:#800080; '>;</span> <span style='color:#800000; font-weight:bold; '>then</span>
    <span style='color:#bb7977; font-weight:bold; '>echo</span> <span style='color:#0000e6; '>'temporary none'</span> <span style='color:#e34adc; '>></span> <span style='color:#40015a; '>/sys/class/scsi_disk</span><span style='color:#40015a; '>/</span><span style='color:#797997; '>$i</span><span style='color:#40015a; '>/cache_type</span>
  <span style='color:#800000; font-weight:bold; '>fi</span>
<span style='color:#800000; font-weight:bold; '>done</span>
</pre>
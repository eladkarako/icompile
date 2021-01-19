<img src="https://icompile.eladkarako.com/_uploads/2014/10/windows-7-test-mode.png" alt="windows-7-test-mode" class="alignnone size-full wp-image-1964" />
<!--more-->


<br/>

<strong>ON<small> (by Default)</small></strong>
<pre>
bcdedit.exe <span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>set</span> loadoptions DDISABLE_INTEGRITY_CHECKS
bcdedit.exe <span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>set</span> TESTSIGNING <span style='color:#800000; font-weight:bold; '>ON</span>
</pre>

<strong>OFF<small> (for Unsigned Driver Testing or Kernel-Experiments)</small></strong>
<pre>
bcdedit.exe <span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>set</span> loadoptions DENABLE_INTEGRITY_CHECKS
bcdedit.exe <span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>set</span> TESTSIGNING <span style='color:#800000; font-weight:bold; '>OFF</span>
</pre>
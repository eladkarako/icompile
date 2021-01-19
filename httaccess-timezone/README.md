<pre><span style='color:#696969; '>#####################################################</span>
<span style='color:#696969; '># set timezone - "UTC"|"GMT"|"Asia/Jerusalem"|etc.. #</span>
<span style='color:#696969; '>#####################################################</span>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>IfModule</span> <span style='color:#0000e6; '>mod_env.c</span><span style='color:#a65700; '>></span>
  <span style='color:#800000; font-weight:bold; '>SetEnv</span> TZ                <span style='color:#0000e6; '>"Asia/Jerusalem"</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>IfModule</span><span style='color:#a65700; '>></span>

<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>IfModule</span> <span style='color:#0000e6; '>php5_module</span><span style='color:#a65700; '>></span>
  php_value date.timezone  <span style='color:#0000e6; '>"Asia/Jerusalem"</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>IfModule</span><span style='color:#a65700; '>></span>
<span style='color:#696969; '>#####################################################</span>
</pre>
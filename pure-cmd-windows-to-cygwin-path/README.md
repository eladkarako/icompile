<pre><span style='color:#3f7f59; '>@</span><span style='color:#7f0055; font-weight:bold; '>echo off</span>
<span style='color:#7f0055; font-weight:bold; '>rem  </span><span style='color:#3f7f59; '>support UTF-8 names</span>
<span style='color:#7f0055; font-weight:bold; '>chcp</span> 65001
<span style='color:#7f0055; font-weight:bold; '>rem  </span><span style='color:#3f7f59; '>first arg ("~" removes the [\\'\\"] wrapping)</span>
<span style='color:#7f0055; font-weight:bold; '>set</span> CURRENT=%~1
<span style='color:#7f0055; font-weight:bold; '>rem  </span><span style='color:#3f7f59; '>backward-slash to forward-slash</span>
<span style='color:#7f0055; font-weight:bold; '>set</span> CURRENT=%CURRENT:\\=/%
<span style='color:#7f0055; font-weight:bold; '>rem  </span><span style='color:#3f7f59; '>remove ":" after the drive letter</span>
<span style='color:#7f0055; font-weight:bold; '>set</span> CURRENT=%CURRENT::/=/%
<span style='color:#7f0055; font-weight:bold; '>rem  </span><span style='color:#3f7f59; '>adds cygwin-dummy path "/cygdrive/" prefix</span>
<span style='color:#7f0055; font-weight:bold; '>set</span> CURRENT=/cygdrive/%CURRENT%


<span style='color:#7f0055; font-weight:bold; '>rem  </span><span style='color:#3f7f59; '>only output if it is a real folder... (check disabled since we don't care..)</span>
<span style='color:#3f7f59; '>::  IF NOT EXIST %CURRENT%\\NUL ( </span>
<span style='color:#3f7f59; '>::    goto NOT_FOLDER</span>
<span style='color:#3f7f59; '>::  ) </span>

<span style='color:#7f0055; font-weight:bold; '>echo</span><span style='color:#2a00ff; '> %CURRENT%</span>

<span style='color:#3f7f59; '>::  :NOT_FOLDER</span>
</pre>

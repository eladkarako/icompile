<pre><span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>

<span style='color:#e34adc; '>:loop</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;::-------------------------- has argument ?</span>
      <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>[</span><span style='color:#0000e6; '>"%~1"</span><span style='color:#808030; '>]</span><span style='color:#808030; '>=</span><span style='color:#808030; '>=</span><span style='color:#808030; '>[</span><span style='color:#0000e6; '>""</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>(</span>
        <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> done.</span>
        <span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>end</span>
      <span style='color:#808030; '>)</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;::-------------------------- argument exist ?</span>
      <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>not</span> <span style='color:#800000; font-weight:bold; '>exist</span> <span style='color:#008c00; '>%~s1</span> <span style='color:#808030; '>(</span>
        <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> error "%~1" does not exist in file-system.</span>
      <span style='color:#808030; '>)</span> else <span style='color:#808030; '>(</span>
        <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> "%~1" exist</span>
        <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>exist</span> <span style='color:#008c00; '>%~s1</span><span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>NUL</span> <span style='color:#808030; '>(</span>
          <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> "%~1" is a directory</span>
        <span style='color:#808030; '>)</span> else <span style='color:#808030; '>(</span>
          <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> "%~1" is a file! - time to install:</span>
          <span style='color:#800000; font-weight:bold; '>call</span> adb <span style='color:#800000; font-weight:bold; '>install</span> <span style='color:#008c00; '>%~s1</span>
        <span style='color:#808030; '>)</span>
      <span style='color:#808030; '>)</span>
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;::--------------------------</span>
      <span style='color:#800000; font-weight:bold; '>shift</span>
      <span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>loop</span>
      
      
<span style='color:#e34adc; '>:end</span>

<span style='color:#800000; font-weight:bold; '>pause</span>

<span style='color:#696969; '>::: ##########################################################################</span>
<span style='color:#696969; '>::: ##                                                                      ##</span>
<span style='color:#696969; '>::: ##  0. run:   adb devices   - to start the deamon and list your device  ##</span>
<span style='color:#696969; '>::: ##                                                                      ##</span>
<span style='color:#696969; '>::: ##  1. drag&amp;drop ANY amount of files (APK) over this batch files,       ##</span>
<span style='color:#696969; '>::: ##                                                                      ##</span>
<span style='color:#696969; '>::: ##       - it will install them one by one.                             ##</span>
<span style='color:#696969; '>::: ##       - it just checks if file exists.                               ##</span>
<span style='color:#696969; '>::: ##       - it does not checks if it is a valid APK package              ##</span>
<span style='color:#696969; '>::: ##       - it does not checks if package-already-installed              ##</span>
<span style='color:#696969; '>::: ##       - if there is an error you can always press [CTRL]+[C]         ##</span>
<span style='color:#696969; '>::: ##           to stop the script, and continue from the next one,        ##</span>
<span style='color:#696969; '>::: ##           some other time.                                           ##</span>
<span style='color:#696969; '>::: ##       - the file is copied as DOS's 8.3 naming to you                ##</span>
<span style='color:#696969; '>::: ##           don't need to worry about wrapping file names or renaming  ##</span>
<span style='color:#696969; '>::: ##           them, just drag&amp;drop them over this batch.                 ##</span>
<span style='color:#696969; '>::: ##                                                                      ##</span>
<span style='color:#696969; '>::: ##                                   Elad Karako 1/1/2016               ##</span>
<span style='color:#696969; '>::: ##                                   https://icompile.eladkarako.com     ##</span>
<span style='color:#696969; '>::: ##########################################################################</span>
</pre>
also posted on <a href="http://stackoverflow.com/a/34553043/257319" target="_blank">StackOverflow</a>
Install Java7

Download at <a href="http://www.eclipse.org/downloads/index-developer.php" target="_blank">http://www.eclipse.org/<wbr />downloads/index-developer.php</a> (to the time written, Eclipse Kepler version 4.3 M5)
Extract the zip

Edit <em>eclipse.ini  :  </em>here is my <em>eclipse.ini</em> content:
<pre>-<span class="GINGER_SOFATWARE_correct">startup</span>
<span class="GINGER_SOFATWARE_correct">plugins</span>/org<span class="GINGER_SOFATWARE_correct">.</span><span class="GINGER_SOFATWARE_correct">eclipse</span><span class="GINGER_SOFATWARE_correct">.</span>equinox<span class="GINGER_SOFATWARE_correct">.</span>launcher_1<span class="GINGER_SOFATWARE_correct">.</span>3.0<span class="GINGER_SOFATWARE_correct">.</span>v20130125-144918<span class="GINGER_SOFATWARE_correct">.</span>jar
--<span class="GINGER_SOFATWARE_correct">launcher</span><span class="GINGER_SOFATWARE_correct">.</span>library
<span class="GINGER_SOFATWARE_correct">plugins</span>/org<span class="GINGER_SOFATWARE_correct">.</span>eclipse<span class="GINGER_SOFATWARE_correct">.</span>equinox<span class="GINGER_SOFATWARE_correct">.</span>launcher<span class="GINGER_SOFATWARE_correct">.</span>win32<span class="GINGER_SOFATWARE_correct">.</span>win32<span class="GINGER_SOFATWARE_correct">.</span>x86_64_1<span class="GINGER_SOFATWARE_correct">.</span>1.200<span class="GINGER_SOFATWARE_correct">.</span>v20130117-173747
-<span class="GINGER_SOFATWARE_correct">product</span>
org.eclipse.epp.package.jee.product
--launcher.defaultAction
<span class="GINGER_SOFATWARE_correct">openFile</span>
--<span class="GINGER_SOFATWARE_correct">launcher</span><span class="GINGER_SOFATWARE_correct">.</span>XXMaxPermSize
512m
-<span class="GINGER_SOFATWARE_correct">showsplash</span>
<span class="GINGER_SOFATWARE_correct">org</span><span class="GINGER_SOFATWARE_correct">.</span>eclipse<span class="GINGER_SOFATWARE_correct">.</span>platform
--<span class="GINGER_SOFATWARE_correct">launcher</span><span class="GINGER_SOFATWARE_correct">.</span>XXMaxPermSize
512m
--launcher.defaultAction
<span class="GINGER_SOFATWARE_correct">openFile</span>
--<span class="GINGER_SOFATWARE_correct">launcher</span><span class="GINGER_SOFATWARE_correct">.</span><span class="GINGER_SOFATWARE_noSuggestion GINGER_SOFATWARE_correct">appendVmargs</span>
<strong>-<span class="GINGER_SOFATWARE_correct">vmargs</span></strong>
<strong>-XX<span class="GINGER_SOFATWARE_correct">:</span>+UnlockExperimentalVMOptions</strong>
<strong>-XX<span class="GINGER_SOFATWARE_correct">:</span>+UseG1GC</strong>
<strong>-XX<span class="GINGER_SOFATWARE_correct">:</span>ParallelGCThreads=4</strong>
<strong>-XX<span class="GINGER_SOFATWARE_correct">:</span>ConcGCThreads=4</strong>
<strong>-<span class="GINGER_SOFATWARE_noSuggestion GINGER_SOFATWARE_correct">Xnoclassgc</span> </strong>
<strong>-<span class="GINGER_SOFATWARE_correct">Dsun</span><span class="GINGER_SOFATWARE_correct">.</span>java2d<span class="GINGER_SOFATWARE_correct">.</span>opengl=true</strong>
<strong>-<span class="GINGER_SOFATWARE_noSuggestion GINGER_SOFATWARE_correct">Dosgi</span><span class="GINGER_SOFATWARE_correct">.</span>requiredJavaVersion=1<span class="GINGER_SOFATWARE_correct">.</span>7</strong>
<strong>-<span class="GINGER_SOFATWARE_correct">Dhelp</span><span class="GINGER_SOFATWARE_correct">.</span><span class="GINGER_SOFATWARE_correct">lucene</span><span class="GINGER_SOFATWARE_correct">.</span>tokenizer=standard</strong>
<strong>-Xmn2g</strong>
<strong>-Xms4g</strong>
<strong>-Xmx4g</strong>
<strong>-Xss32m</strong>
<strong>-<span class="GINGER_SOFATWARE_noSuggestion GINGER_SOFATWARE_correct">Xverify</span><span class="GINGER_SOFATWARE_correct">:</span>none</strong></pre>
<span class="GINGER_SOFATWARE_correct">set</span> the place of eclipse.exe in environment-settings (ECLIPSE_HOME)
<img class="alignnone size-full wp-image-624" alt="eclipse_3" src="https://icompile.eladkarako.com/_uploads/2013/03/eclipse_3.jpg" width="370" height="180" />

<span class="GINGER_SOFATWARE_correct">add</span> "jetty run" and <a href="http://code.google.com/p/velocity-edit/" target="_blank">Velocity</a> <span class="GINGER_SOFATWARE_correct">suppurt</span>,
and flook (an eclipse-plugin I've made a year ago, shorthand of "file lookup")

<a href="https://github.com/eladkarako/icompile/releases/download/latest/Flook100201207021638.zip">https://github.com/eladkarako/icompile/releases/download/latest/Flook100201207021638.zip</a>


(<a title="http://mir.cr/1T3FQP7A" href="http://mir.cr/1T3FQP7A" target="_blank">mirror#1</a>, <a title="http://uploadmirrors.com/download/1SLZTJWE/Flook100201207021638.zip" href="http://uploadmirrors.com/download/1SLZTJWE/Flook100201207021638.zip" target="_blank">mirror#2</a>)

browse folder:  eclipse/plugins/org.eclipse.platform_4.3.0.v201302041400/       (the _4.3.0.v....  will have another value probably..)

and edit the file <em>splash.bmp </em>in any image-editor client (<em><a title="Paint.NET - Free Software for Digital Photo Editing" href="http://www.getpaint.net/" target="_blank">Paint.Net</a>)</em>

turning my eclipse from this:

<img class="alignnone size-full wp-image-620" alt="eclipse_1" src="https://icompile.eladkarako.com/_uploads/2013/03/eclipse_1.jpg" width="473" height="323" />

to this

<img class="alignnone size-full wp-image-621" alt="eclipse_2" src="https://icompile.eladkarako.com/_uploads/2013/03/eclipse_2.jpg" width="475" height="325" />

&nbsp;

&nbsp;
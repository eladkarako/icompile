<img src="https://icompile.eladkarako.com/_uploads/2013/03/2013-03-31_143114.jpg" alt="2013-03-31_143114" width="357" height="99" class="alignnone size-full wp-image-675" />

<a href="http://www.jetbrains.com/webstorm/" title="WebStorm --- I Use It - ( it is almost as good as Notepad++ )" target="_blank">WebStorm</a> is  <em>java-based-on</em>  execute,
the following tip will make it run better,
<!--more-->

1. upgrade to WebStorm 6 - it is using Java7.

2. add the following Environment-Variable:

name:
<pre>JAVA_OPTS</pre>

value:
<pre>-XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:ParallelGCThreads=2 -XX:ConcGCThreads=2 -server -Dsun.java2d.d3d=true -Dsun.java2d.opengl=false -Dosgi.requiredJavaVersion=1.7 -Dhelp.lucene.tokenizer=standard -Xmn512m -Xms512m -Xmx512m -Xss32m -Xverify:none</pre>

note #1:
the "-server" switch makes the starting a bit slow, but it will make it better running.

note #2:
it works best if you have fast PC. (Windows7, I7 CPU, 16GB-RAM, etc..)

note #3:
since this is global variable-setting, it will also apply to every java-based-on application you'll run,
unless you override it with something else.

note #2:
the settings are similar to the ones in "<a href="https://icompile.eladkarako.com/eclipse-kepler-and-lite-configurations/" target="_blank">Eclipse Kepler and lite configurations</a>" post, but 'liter'.
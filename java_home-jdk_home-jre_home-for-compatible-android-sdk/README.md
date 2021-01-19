<pre><style type="text/css">code{display:inline !important; background-color:rgba(252,255,142,.6) !important;</style></pre>


You need to follow the system-requirements, and install the minimal Java-SDK (JDK) version in-order to support Android SDK development tookit (for example, did you know you can't compile anything if you are using JDK v9 ? :) )...
<!--more-->


&nbsp;

(from <a title="http://developer.android.com/sdk/index.html" href="http://developer.android.com/sdk/index.html" target="_blank">developer.android.com/sdk -&gt; System Req.</a>)
<div class="col-6 reqs">
<h5>Operating Systems</h5>
<ul>
	<li>Windows XP (32-bit), Vista (32- or 64-bit), or Windows 7 (32- or 64-bit)</li>
	<li>Mac OS X 10.8.5 or later</li>
	<li>Linux
<ul>
	<li>64-bit distribution capable of running 32-bit applications</li>
	<li>GNU C Library (glibc) 2.11 or later is required.</li>
	<li>Tested on Ubuntu 12.04, Precise Pangolin</li>
</ul>
</li>
</ul>
</div>
<div class="col-7 reqs">
<h5>Development tools</h5>
<ul>
	<li><a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">JDK 6</a> (JRE alone is not sufficient)</li>
	<li><a href="http://ant.apache.org/">Apache Ant</a> 1.8 or later</li>
	<li><strong>Not</strong> compatible with Gnu Compiler for Java (gcj)</li>
</ul>
<p class="note"><strong>Note:</strong> Some Linux distributions may include JDK 1.4 or Gnu Compiler for Java, both of which are <em>not</em> supported for Android development.</p>

</div>
&nbsp;

&nbsp;

&nbsp;
<ol>
	<li>Download JDK 6.45 x64 (latest)</li>
	<li>Uninstall all java SDK and runtime (start from SDK, then use <a title="https://singularlabs.com/software/javara/" href="https://singularlabs.com/software/javara/" target="_blank">JavaRa</a> and reboot your machine).I've used to have latest (v1.9) but Eclipse+ADT+Android SDK does compile with this version,
so this is the 'latest' that <strong>is</strong> supported.</li>
	<li>Install.</li>
	<li>your pathes should be:
C:\\Program Files\\Java
C:\\Program Files\\Java\\jdk1.6.0_45
C:\\Program Files\\Java\\jdk1.6.0_45\\bin
C:\\Program Files\\Java\\jre6
C:\\Program Files\\Java\\jre6\\binbut thats no good, some problems happens due to usage of PATHs with spaces,
so we will use its equivilent, using "old" 8.3 format.C:\\PROGRA~1\\Java
C:\\PROGRA~1\\Java\\JDK16~1.0_4
C:\\PROGRA~1\\Java\\JDK16~1.0_4\\bin
C:\\PROGRA~1\\Java\\jre6
C:\\PROGRA~1\\Java\\jre6\\bin</li>
	<li>Using the environment variables:</li>
</ol>
<code>JAVA_HOME</code>=<code>C:\\PROGRA~1\\Java\\JDK16~1.0_4</code>
<code>JDK_HOME</code>=<code>C:\\PROGRA~1\\Java\\JDK16~1.0_4</code>
<code>JRE_HOME</code>=<code>C:\\PROGRA~1\\Java\\jre6</code>

<code>PATH</code>=<code><small>....all old PATH stuff...;...;..;</small>C:\\PROGRA~1\\Java\\JDK16~1.0_4\\bin;</code>', 'JAVA_HOME, JDK_HOME
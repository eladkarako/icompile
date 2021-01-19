Java Cryptography Extension (a.k.a JCE), for an unlimited strength jurisdiction policy,
<!--more-->
can be easily installed by replacing the currently existing <code>local_policy.jar</code> and <code>US_export_policy.jar</code>,

With the unrestricted ones you can download from Oracle<sup><a href="http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html" target="_blank">for JDK 7</a></sup>

Where <code>local_policy.jar</code> and <code>US_export_policy.jar</code> are placed:
look for them here:
<ul>
<li><code>%JRE_HOME%\\lib\\security\\</code></li>
<li><code>%JAVA_HOME%\\jre\\lib\\security\\</code></li>
<li><code>C:\\Program Files\\Java\\jdk1.7.0_80\\jre\\lib\\security\\</code> (version may vary)</li>
<li><code>C:\\Program Files\\Java\\jre7\\lib\\security\\</code> (version may vary)</li>
</ul>

<hr/>
fyi..
<blockquote>
set this on your machine, following this example:
<pre>
JAVA_HOME
    C:\\Program Files\\Java\\jdk1.7.0_80
or  C:\\PROGRA~1\\Java\\JDK17~1.0_8\\
</pre>
<pre>
JRE_HOME
    C:\\Program Files\\Java\\jdk1.7.0_80\\jre
or  C:\\PROGRA~1\\Java\\JDK17~1.0_8\\jre
</pre>

also, add C:\\PROGRA~1\\Java\\JDK17~1.0_8\\bin to your PATH
</blockquote>

<hr/>

I've created an archive for most of the JDK-installers and files in <a href="https://github.com/eladkarako/JDK-archive">https://github.com/eladkarako/JDK-archive</a>, 
in includes the policy files:
<a href="https://raw.githubusercontent.com/eladkarako/JDK-archive/master/storage/jce_policy_6.7z">https://raw.githubusercontent.com/eladkarako/JDK-archive/master/storage/jce_policy_6.7z</a>, <a href="https://raw.githubusercontent.com/eladkarako/JDK-archive/master/storage/jce_policy_7.7z">https://raw.githubusercontent.com/eladkarako/JDK-archive/master/storage/jce_policy_7.7z</a> and <a href="https://raw.githubusercontent.com/eladkarako/JDK-archive/master/storage/jce_policy_8.7z">https://raw.githubusercontent.com/eladkarako/JDK-archive/master/storage/jce_policy_8.7z</a>

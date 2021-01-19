Hey, why not running Jetbrains using your JDK? x64? Good!!!
--> Follow those snippets (cmd commands) to run your Jetbrains editors using *your* (or any custom) JDK version, use the x64 version (if your PC supports it..), which will allow you better performances, and will supports even higher memory allocation.
<!--more-->
<pre>IntelliJ</pre>
<pre>
C:\\PROGRA~1\\Java\\JDK18~1.0\\bin\\java.exe "-server" "-Xms128m" "-Xmx512m" "-XX:MaxPermSize=250m" "-XX:ReservedCodeCacheSize=64m" "-ea" "-Dsun.io.useCanonCaches=false" "-Djava.net.preferIPv4Stack=true" "-XX:+UseCodeCacheFlushing" "-XX:+UseConcMarkSweepGC" "-XX:SoftRefLRUPolicyMSPerMB=50" -Djb.vmOptionsFile="C:\\Program Files (x86)\\JetBrains\\IntelliJIDEA\\bin\\\\idea.exe.vmoptions" "-Xbootclasspath/a:C:\\Program Files (x86)\\JetBrains\\IntelliJIDEA\\bin\\\\../lib/boot.jar" -Didea.paths.selector=IntelliJIdea13    -cp "C:\\Program Files (x86)\\JetBrains\\IntelliJIDEA\\bin\\\\..\\lib\\bootstrap.jar;C:\\Program Files (x86)\\JetBrains\\IntelliJIDEA\\bin\\\\..\\lib\\extensions.jar;C:\\Program Files (x86)\\JetBrains\\IntelliJIDEA\\bin\\\\..\\lib\\util.jar;C:\\Program Files (x86)\\JetBrains\\IntelliJIDEA\\bin\\\\..\\lib\\jdom.jar;C:\\Program Files (x86)\\JetBrains\\IntelliJIDEA\\bin\\\\..\\lib\\log4j.jar;C:\\Program Files (x86)\\JetBrains\\IntelliJIDEA\\bin\\\\..\\lib\\trove4j.jar;C:\\Program Files (x86)\\JetBrains\\IntelliJIDEA\\bin\\\\..\\lib\\jna.jar;C:\\Program Files (x86)\\JetBrains\\IntelliJIDEA\\bin\\\\..\\jre\\lib\\tools.jar" com.intellij.idea.Main
</pre>

<pre>WebStorm</pre>
<pre>
C:\\PROGRA~1\\Java\\JDK18~1.0\\bin\\java.exe  "-server" "-Xms128m" "-Xmx512m" "-XX:MaxPermSize=250m" "-XX:ReservedCodeCacheSize=64m" "-ea" "-Dsun.io.useCanonCaches=false" "-Djava.net.preferIPv4Stack=true" "-Djsse.enableSNIExtension=false" "-XX:+UseCodeCacheFlushing" "-XX:+UseConcMarkSweepGC" "-XX:SoftRefLRUPolicyMSPerMB=50" -Djb.vmOptionsFile="C:\\Program Files (x86)\\JetBrains\\WebStorm\\bin\\\\WebStorm.exe.vmoptions" "-Xbootclasspath/a:C:\\Program Files (x86)\\JetBrains\\WebStorm\\bin\\\\../lib/boot.jar" -Didea.paths.selector=WebStorm8  -Didea.platform.prefix=WebStorm -Didea.no.jre.check=true  -cp "C:\\Program Files (x86)\\JetBrains\\WebStorm\\bin\\\\..\\lib\\bootstrap.jar;C:\\Program Files (x86)\\JetBrains\\WebStorm\\bin\\\\..\\lib\\extensions.jar;C:\\Program Files (x86)\\JetBrains\\WebStorm\\bin\\\\..\\lib\\util.jar;C:\\Program Files (x86)\\JetBrains\\WebStorm\\bin\\\\..\\lib\\jdom.jar;C:\\Program Files (x86)\\JetBrains\\WebStorm\\bin\\\\..\\lib\\log4j.jar;C:\\Program Files (x86)\\JetBrains\\WebStorm\\bin\\\\..\\lib\\trove4j.jar;C:\\Program Files (x86)\\JetBrains\\WebStorm\\bin\\\\..\\lib\\jna.jar" com.intellij.idea.Main 
</pre>

also..
add the following environment settings (for the entire machine)
<pre>IDEA_JDK, IDEA_JDK_64, WEBIDE_JDK, PYCHARM_JDK, RUBYMINE_JDK, JDK_HOME, JAVA_HOME</pre>
set the value to
<pre>C:\\Program Files\\Java\\jdk1.8.0</pre>
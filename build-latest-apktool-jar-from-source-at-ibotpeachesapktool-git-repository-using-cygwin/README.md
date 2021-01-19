<ol>
 	<li><code>set JAVA_HOME="C:\\PROGRA~1\\Java\\JDK19~1.0"</code><code></code></li>
 	<li><del datetime="2016-01-12T23:47:17+00:00"><code>git clone --recursive git://github.com/iBotPeaches/Apktool.git</code></del><code>git -c http.sslVerify=false clone --recursive https://github.com/iBotPeaches/Apktool.git</code></li>
 	<li><code>cd Apktool</code></li>
 	<li><code>./gradlew applyPatches</code> - Applies <code>smali</code> patches, creating <code>brut.apktool.smali</code> directory.</li>
 	<li><code>./gradlew build fatJar</code> - Builds Apktool, including final binary.</li>
 	<li><code>./gradlew - Optional - build fatJar Proguard jar too</code></li>
</ol>
After 1-2 minutes you should have a jar file at

<code>./brut.apktool/apktool-cli/build/libs/apktool-xxxxx.jar</code>
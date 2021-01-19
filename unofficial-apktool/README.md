<a href="https://github.com/eladkarako/icompile/releases/download/latest/apktool-cli-all__v2.4.2-d63088-SNAPSHOT.jar.zip">apktool-cli-all__v2.4.2-d63088-SNAPSHOT.jar.zip</a> (November 30, 2020).

<hr/>

Notes: 
<ul>
<li><uses smali and baksmali version <code>2.4.0</code></li>
<li><a href="https://ibotpeaches.github.io/Apktool">https://ibotpeaches.github.io/Apktool</a></li>
<li>Pre clear-up old-framework libs (will be recreated) by deleting the entire folder:  <code>C:\\Users\\<strong>USERNAME</strong>\\apktool\\</code>.</li>
<li>after <a href="https://gist.github.com/eladkarako/2a9fc44d315c34cbeea44cb10c96c2b2#file-git_cleanup_update-cmd">clean and update</a>, use <code>call "gradlew.bat" "build" "shadowJar" -x "test"</code> to quick-build the JAR file <em>without running any pre-tests</em>, then from within the APKTool folder run <code>explorer ".\brut.apktool\apktool-cli\build\libs"</code> to quickly arrive to the location of the newly created JAR. 
The latest version of smali lib is in <code>/smali.properties</code> and the latest version of the baksmali lib is in <code>/baksmali.properties</code> in the JAR root (use 7zip, WinRAR or WinZIP to view the content..). 
The build-version is in <code>/properties/apktool.properties</code>, I usually publish the JAR with the version appended to the end of the filename <code>apktool-cli-lib</code>. 
To use it I usually rename it to simply <code>apktool.jar</code>.
</li>
<li>ApkTool on XDA: <a href="https://forum.xda-developers.com/showthread.php?t=1755243">forum.xda-developers.com/showthread.php?t=1755243</a>
</li>
</ul>

<hr/>

Alternative locations for downloading libs: 
<ul>
<li>smali and baksmali:
<a href="https://bitbucket.org/JesusFreke/smali/downloads/">bitbucket.org/JesusFreke/smali/downloads/</a> (for both) 
<a href="https://repo1.maven.org/maven2/org/smali/smali/">repo1.maven.org/maven2/org/smali/smali/</a> 
<a href="https://repo1.maven.org/maven2/org/smali/baksmali/">repo1.maven.org/maven2/org/smali/baksmali/</a> 
<a href="https://github.com/testwhat/SmaliEx/releases">github.com/testwhat/SmaliEx/releases</a> - an updated MOD that supports multi-dex, includes both, plus <code>oat2dex</code> too. 
</li>
<li>
smali util: <a href="https://repo1.maven.org/maven2/org/smali/util/">repo1.maven.org/maven2/org/smali/util/</a>
</li>
<li>
dexlib2:
<a href="https://repo1.maven.org/maven2/org/smali/dexlib2/">repo1.maven.org/maven2/org/smali/dexlib2/</a>
</li>
<li>
snakeyaml: 
<a href="https://bitbucket.org/asomov/snakeyaml/downloads/?tab=tags">bitbucket.org/asomov/snakeyaml/downloads/?tab=tags</a> 
<a href="https://repo1.maven.org/maven2/org/yaml/snakeyaml/">repo1.maven.org/maven2/org/yaml/snakeyaml/</a> 
</li>
</ul>

Some of my notes about decompiling and recompiling, 
with manual repacking after, to solve an installation error:
<a href="https://gist.github.com/eladkarako/73c1b331b856da8c40d33d1da5daafe7#file-process-of-decompiling-recompiling-apk-with-apktool-and-7zip-zstd-zipalign-keytool-and-jarsigner-txt">https://gist.github.com/eladkarako/73c1b331b856da8c40d33d1da5daafe7#file-process-of-decompiling-recompiling-apk-with-apktool-and-7zip-zstd-zipalign-keytool-and-jarsigner-txt</a> 

<hr/>
Custom build of oat2dex, smali and baksmali can be found in here as well: <a href="https://github.com/eladkarako/oat2dex-SmaliEx-DirtyMod/releases/tag/latest">https://github.com/eladkarako/oat2dex-SmaliEx-DirtyMod/releases/tag/latest</a>.
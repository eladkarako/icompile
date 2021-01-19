Last-updated at: March 02, 2016.

<!--more-->

<ul>
<li>
<strong>dex-tools</strong>-2.1-SNAPSHOT_nightly_201603020519.zip <em>[5.31MB]</em>
<pre>
<a mirror target="_blank" title="ZippyShare" href="http://www76.zippyshare.com/v/Os5e5G7k/file.html">http://www76.zippyshare.com/v/Os5e5G7k/file.html</a>
<a mirror target="_blank" title="SolidFiles" href="http://www.solidfiles.com/d/d24a11a357">http://www.solidfiles.com/d/d24a11a357</a>
<a mirror target="_blank" title="TusFiles" href="https://tusfiles.net/j0pnlq9hdmyx">https://tusfiles.net/j0pnlq9hdmyx</a>
<a mirror target="_blank" title="HugeFiles" href="http://hugefiles.net/5cg4plitsx22">http://hugefiles.net/5cg4plitsx22</a>
<a mirror target="_blank" title="SendMyWay" href="https://www.sendmyway.com/xn87vwalej0u">https://www.sendmyway.com/xn87vwalej0u</a>
<a mirror target="_blank" title="RGhost" href="http://positron.rghost.net/6H46R5mJj">http://positron.rghost.net/6H46R5mJj</a>
<a mirror target="_blank" title="GameFront" href="http://www.gamefront.com/files/25513868/dex-tools-2.1-SNAPSHOT_nightly_201603020519.zip">http://www.gamefront.com/files/25513868/dex-tools-2.1-SNAPSHOT_nightly_201603020519.zip</a>
<a mirror target="_blank" title="SpeedyShare" href="http://www.speedyshare.com/file/DFegu/dex-tools-2.1-SNAPSHOT_nightly_201603020519.zip">http://www.speedyshare.com/file/DFegu/dex-tools-2.1-SNAPSHOT_nightly_201603020519.zip</a>
<a mirror target="_blank" title="FilesFm" href="https://files.fm/u/6e3tpaqr">https://files.fm/u/6e3tpaqr</a>
<a mirror target="_blank" title="UsersCloud" href="https://userscloud.com/svvvuphmbwkg">https://userscloud.com/svvvuphmbwkg</a>
</pre>
</li>
</ul>

<hr />

Following <a href="https://sourceforge.net/p/dex2jar/wiki/BuildFromSource/" target="_blank">https://sourceforge.net/p/dex2jar/wiki/BuildFromSource/</a>,
on Windows 7 x64 / Oracle Java - JDK 1.7.0_80 x64.

Essentially running:
<ol>
<li>git clone .... branch 2.X</li>
<li>git checkout (switch) ... tag 2.1-nightly-26</li>
<li>git merge (2.X) ---- (without commit...)</li>
</ol>
<ol>
<li><pre>git submodule foreach git clean -fdx  && git clean -fdx</pre></li>
<li><pre>git submodule foreach git pull origin master && git pull --recurse-submodules && git submodule update && git submodule update --recursive</pre></li>
<li><pre>gradlew.bat clean distZip</pre></li>
<li><ul>
<li><pre>explorer /select,dex-tools\\build\\distributions\\dex-tools-2.1-SNAPSHOT.zip</pre></li>
</ul></li></ol>

Zip's Content
<pre>
|   d2j-apk-sign.bat
|   d2j-apk-sign.sh
|   d2j-asm-verify.bat
|   d2j-asm-verify.sh
|   d2j-baksmali.bat
|   d2j-baksmali.sh
|   d2j-class-version-switch.bat
|   d2j-class-version-switch.sh
|   d2j-decrypt-string.bat
|   d2j-decrypt-string.sh
|   d2j-dex-recompute-checksum.bat
|   d2j-dex-recompute-checksum.sh
|   d2j-dex-weaver.bat
|   d2j-dex-weaver.sh
|   d2j-dex2jar.bat
|   d2j-dex2jar.sh
|   d2j-dex2smali.bat
|   d2j-dex2smali.sh
|   d2j-jar-access.bat
|   d2j-jar-access.sh
|   d2j-jar-weaver.bat
|   d2j-jar-weaver.sh
|   d2j-jar2dex.bat
|   d2j-jar2dex.sh
|   d2j-jar2jasmin.bat
|   d2j-jar2jasmin.sh
|   d2j-jasmin2jar.bat
|   d2j-jasmin2jar.sh
|   d2j-smali.bat
|   d2j-smali.sh
|   d2j-std-apk.bat
|   d2j-std-apk.sh
|   d2j_invoke.bat
|   d2j_invoke.sh
|   LICENSE.txt
|   NOTICE.txt
|   
+---bin
|       dex-tools
|       dex-tools.bat
|       
\\---lib
        antlr-3.5.2.jar
        antlr-runtime-3.5.2.jar
        antlr4-4.5.jar
        antlr4-runtime-4.5.jar
        asm-debug-all-5.0.3.jar
        d2j-base-cmd-2.1-SNAPSHOT.jar
        d2j-jasmin-2.1-SNAPSHOT.jar
        d2j-smali-2.1-SNAPSHOT.jar
        dex-ir-2.1-SNAPSHOT.jar
        dex-reader-2.1-SNAPSHOT.jar
        dex-reader-api-2.1-SNAPSHOT.jar
        dex-tools-2.1-SNAPSHOT.jar
        dex-translator-2.1-SNAPSHOT.jar
        dex-writer-2.1-SNAPSHOT.jar
        dx-23.0.0.jar
        open-source-license.txt
        org.abego.treelayout.core-1.0.1.jar
        ST4-4.0.8.jar
</pre>
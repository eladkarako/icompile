<div class="post-text">

This answer explains stuff <strong>with examples</strong>.   <sup>ME NO ₩OᴚDS MUCH ᴯᵁᵍᴬ ᴯᵁᵍᴬ &#x1f357;</sup>

&#x1f449; Better Use the 8.3 directory-format. In fact No spaces, ever. &#x1f44d; <img src="http://i.stack.imgur.com/mU3op.jpg" alt="" />

➀ <strong><code>JAVA_HOME</code></strong> - your <strong><em>JDK</em></strong> folder
<code>C:\\Program Files\\Java\\jdk1.6.0_45</code> == <code>C:\\PROGRA~1\\Java\\JDK16~1.0_4</code>
<code>C:\\Program Files\\Java\\jdk1.7.0_71</code> == <code>C:\\PROGRA~1\\Java\\JDK17~1.0_7</code>
<code>C:\\Program Files\\Java\\jdk1.8.0_25</code> == <code>C:\\PROGRA~1\\Java\\JDK18~1.0_2</code>
<code>C:\\Program Files\\Java\\jdk1.9.0</code> == <code>C:\\PROGRA~1\\Java\\JDK19~1.0</code>

➁ <strong><code>JRE_HOME</code></strong>
<code>C:\\Program Files\\Java\\jre6</code> == <code>C:\\PROGRA~1\\Java\\jre6</code>
<code>C:\\Program Files\\Java\\jre7</code> == <code>C:\\PROGRA~1\\Java\\jre7</code>
<code>C:\\Program Files\\Java\\jre1.8.0_25</code> == <code>C:\\PROGRA~1\\Java\\JRE18~1.0_2</code>
<code>C:\\Program Files\\Java\\jre1.9.0</code> == <code>C:\\PROGRA~1\\Java\\JRE19~1.0</code>

➂ <strong>Addition to <code>PATH</code> - best practice!</strong>
USE [WINDOWS]+[R] !!! ➩ <code>C:\\Windows\\system32\\systempropertiesadvanced.exe</code> ➩
add <code>;C:\\ProgramData\\Oracle\\Java\\javapath;</code> to the end of <code>PATH</code> (System Variables not User Variables).
<img src="http://i.stack.imgur.com/cZfXG.jpg" alt="" />
<ul>
 	<li>click OK&#x1f446;, explore to <code>C:\\ProgramData\\Oracle\\Java\\</code> and rename <code>javapath</code> folder (from <code>C:\\ProgramData\\Oracle\\Java\\javapath\\</code>) to <code>javapath_old</code>.</li>
 	<li>create new folder named <code>javapath</code>.</li>
 	<li>start CMD and browse into (the now empty) <code>C:\\ProgramData\\Oracle\\Java\\javapath\\</code>.</li>
 	<li>run to create symbolic links:
❶ <code>ln -s "C:\\Program Files\\Java\\jre7\\bin\\java.exe" java.exe</code>
❷ <code>ln -s "C:\\Program Files\\Java\\jre7\\bin\\javaw.exe" javaw.exe</code>
❸ <code>ln -s "C:\\Program Files\\Java\\jre7\\bin\\javaws.exe" javaws.exe</code>
<img src="http://i.stack.imgur.com/OKz58.jpg" alt="" /></li>
 	<li><strong>*done with <code>PATH</code> and <code>*_HOME</code> stuff (that's for kids &#x1f389;), now **let's have fun with Windows Registry..*</strong>
➃ open up you prefered registry editor (<a href="http://www.torchsoft.com/en/download.html" rel="nofollow">Registry Workshop</a> is the best), browse <code>HKEY_LOCAL_MACHINE\\SOFTWARE\\JavaSoft\\Java Development Kit</code> notice all installed versions are shown as keys, double click <code>CurrentVersion</code> (REG_SZ value) and modify its data to your prefered SDK version, mine is 1.7 (For <a href="http://developer.android.com/sdk/index.html#Requirements" rel="nofollow">Android Studio</a>) <img src="http://i.stack.imgur.com/OQivB.jpg" alt="" /></li>
</ul>
➄ do the same for <code>HKEY_LOCAL_MACHINE\\SOFTWARE\\JavaSoft\\Java Runtime Environment</code> (with <code>CurrentVersion</code>..)<img src="http://i.stack.imgur.com/dbtpe.jpg" alt="" />

➅ close down java-based programs such as eclipse or <a href="https://www.jetbrains.com/idea/" rel="nofollow">IntelliJ</a> ,
Open up task-manager- processes tab, look for <code>explorer.exe</code>, <code>cmd.exe</code> and <code>java(*something*).exe</code> programs, right-click end them (no "End Process-Tree"!), click <code>File</code>➩<code>New Task</code>➩enter <code>explorer.exe</code>
.
<h2><em>&#x1f31f; The changes you've done above were applied successfully&#x1f31f;</em></h2>
<h2>No need to reboot, No need to log-off/on again <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=7994YX29444PA&amp;lc=US&amp;item_name=Elad%20Karako&amp;item_number=stackoverflow%2dcoffee%2dicon&amp;amount=0%2e50&amp;currency_code=USD&amp;bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted" rel="nofollow">☕</a>.</h2>
</div>
<a href="http://stackoverflow.com/questions/27996603/should-i-add-both-java-home-and-jre-home-in-environmental-variable-path/34733232#34733232" target="_blank">also published at stackoverflow</a>
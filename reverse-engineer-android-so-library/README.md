<div class="post-text">
<h3>For minor modifications, <strong>use <a href="http://www.chmaas.handshake.de/delphi/freeware/xvi32/xvi32.htm#download" rel="nofollow">XVI32</a></strong> <em><sub>(<a href="https://www.google.com/search?q=best+and+loved+hex+editors" rel="nofollow">or any Hex-Editor, really... ☕</a>)</sub></em></h3>
You can change text (ASCII/Unicode), search&amp;&amp;replace, etc...
<h1>☞ for best results make sure to work in override-mode, pay close attention on <code>\\0</code> (string-ends).</h1>
<h2>A Real Binary Modifying Scenario <sub>(..tried to made it more <em>generic</em> but...)</sub></h2>
ⓐ given <code>game.apk</code>

ⓑ extract it using: <code>java -jar apktool_2.0.2.jar --verbose d "game.apk"</code> (it will generate a folder under your base folder, let's say it's <code>D:\\</code>).

ⓒ you want to add a <em>language</em> resource (for example <em>Hebrew</em>) to current list: <img src="http://i.stack.imgur.com/aGFXm.jpg" alt="" />

ⓓ you copy one of the <code>plist</code> files, for example: <code>en.plist</code> to <code>he.plist</code> in same directory, and translate the values to your language. <img src="http://i.stack.imgur.com/7lGbO.jpg" alt="" />

ⓔ trying to locate where the resource is being used (the <em>i18 hook</em>..) you look around either manually or using <a href="http://locate32.cogit.net/" rel="nofollow">Locate32</a>'s <code>File contains text</code> feature (yes it works in binary files too) for one of the lanugages for example <code>de.plist</code>
<ul>
	<li>you found that two files having that value: the <code>so</code> binary files..</li>
</ul>
<img src="http://i.stack.imgur.com/ffzkK.jpg" alt="" />

ⓕ you... <sub>(starting to feel like d&amp;d master, dropping scenarios..)</sub> ..open up <a href="http://www.chmaas.handshake.de/delphi/freeware/xvi32/xvi32.htm#download" rel="nofollow">XVI32</a> and and opens the binary <code>libgame.so</code> file w/it <img src="http://i.stack.imgur.com/jqQ2A.jpg" alt="" />
<blockquote><kbd>CTRL</kbd>+<kbd>F</kbd> is your friend, look for combinations that might help you locate blocks of related resource-names (for example "en." "english" - also Unicode and Hex variations)</blockquote>

<hr />

<blockquote>in-order to avoid large modification I'm going to look for language I do not use, and replace the description with my own. this is to avoid <code>insert mode</code> which rarely succeed <sub>☁☔ :/</sub></blockquote>
ⓖ start looking for a language you want to replace with your language (for example <code>de.plist</code>)
<ul>
	<li>there is the <em>beauty</em>: <img src="http://i.stack.imgur.com/9pplU.jpg" alt="" /></li>
</ul>
ⓗ change the <code>d</code> in <code>de.plist</code> to <code>h</code>, and continue searching around.. <img src="http://i.stack.imgur.com/HepEm.jpg" alt="" />

<strong>(easy! right?)</strong>

ⓘ taddamm.. your resource is now <em>"""officially"""</em> binary'tise <em><sub>(is that even a word?)</sub></em>

ⓙ as an alternative go back to <code>....\\localizations</code> remove the <code>it.plist</code> and duplicate <code>he.plist</code> renaming the duplicated to <code>it.plist</code> so either way you'll have your content in the <code>game.apk</code>
<blockquote>ⓘ shows the binary way, while ⓙ uses a resource modification, when used together you can be sure your language is in there :]</blockquote>
ⓚ build your APK back using <code>java -jar apktool_2.0.2.jar --verbose b "D:\\game\\"</code>

ⓛ get your <code>APK</code> from <code>D:\\game\\dist</code>

ⓜ generate <code>keystore</code>: <code>keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000</code> (use any password for example <code>111111</code>, answer the rest with [Enter] and "yes" at the end.)

ⓜ sign your apk: <code>jarsigner.exe -verbose -keystore my-release-key.keystore -storepass 111111 -signedjar "game_signed.apk" "game.apk" alias_name</code>

ⓝ align your apk: <code>zipalign -v 4 "game_signed.apk" "game_signed_and_aligned.apk"</code>

ⓞ install your apk to your phone: <code>apk install "game_signed_and_aligned.apk"</code> your new resource will be shown now, if it isn't just switch to <code>"Italian"</code> which has being modified to be <code>Hebrew</code>...

ⓟ go outside and play ⚽

<em>ⓠ ???</em>

<em>ⓅⓇⓄⒻⒾⓉ!</em>

</div>
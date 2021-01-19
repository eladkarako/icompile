First clean and pull the respository, use: <a href="https://gist.github.com/eladkarako/2a9fc44d315c34cbeea44cb10c96c2b2#file-git_cleanup_update-cmd">https://gist.github.com/eladkarako/2a9fc44d315c34cbeea44cb10c96c2b2#file-git_cleanup_update-cmd</a>

<iframe type="text/html" charset="UTF-8" loading="eager" lazyload="off" importance="high" 
  src="https://icompile.eladkarako.com/_resources/embed_gist.html?gistuser=eladkarako&gistid=2a9fc44d315c34cbeea44cb10c96c2b2&origin=https%3A%2F%2Ficompile.eladkarako.com&contenteditable=true" 
  referrerpolicy="no-referrer" sandbox="allow-same-origin allow-scripts allow-top-navigation" 
  seamless="false" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" 
  style="height:300px;"
></iframe>

You need to pass as an argument the path where you've checked-out the APKTool repository, 
and when asked for branch hit <kbd>ENTER</kbd> to use <code>master</code>. 

Next open CMD, change dir to the APKTool folder and run: <code>call "gradlew.bat" "build" "shadowJar" -x "test"</code> to quick build the JAR (skipping running any tests..).

Finally run: <code>explorer ".\brut.apktool\apktool-cli\build\libs"</code> to quickly get into the place where the newly generated JAR is placed.


See the article <a href="https://icompile.eladkarako.com/unofficial-apktool/">Unofficial ApkTool</a>, 
where you can found a download link for a recently-updated JAR.

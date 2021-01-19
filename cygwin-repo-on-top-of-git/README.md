<ol>
<li>open cygwin</li>
<li><code>mkdir ~/bin</code></li>
<li><code>curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo</code></li>
<li><code>chmod a+x ~/bin/repo</code></li>
<li>edit .bashrc or .bash_profile
appending to the end of it:
<pre>
#Set PATH so it includes user's private bin if it exists
if [ -d "${HOME}/bin" ] ; then
  PATH="${HOME}/bin:${PATH}"
fi
</pre></li>
<li>close/reopen cygwin.</li>
<li>
done
<img src="https://icompile.eladkarako.com/_uploads/2016/02/icompile.eladkarako.com_repo_on_top_of_git_on_cygwin.png" alt="icompile.eladkarako.com_repo_on_top_of_git_on_cygwin" rem-width="746" rem-height="270" class="alignnone size-full wp-image-4717" />
</li>
</ol>


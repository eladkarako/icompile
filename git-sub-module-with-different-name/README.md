removing old one (large letter-case)
<pre>
git rm lib/AsynCallJS && rm .git/modules/lib/AsynCallJS && git submodule lib/AsynCallJS deinit --recursive --force
</pre>

making AsynCallJS to be used in asyncalljs, lower-case folder (for web).
<pre>
cd yet-another-css-beautifier-uglifier 
git submodule add -b master --name asyncalljs https://github.com/eladkarako/AsynCallJS.git lib/asyncalljs


Cloning into 'lib/asyncalljs'...
remote: Counting objects: 103, done.
remote: Compressing objects: 100% (102/102), done.
Receiving objects:  48% (50/103)   d 0 (delta 0), pack-reused 0R
Receiving objects: 100% (103/103), 39.81 KiB | 0 bytes/s, done.
Resolving deltas: 100% (51/51), done.
Checking connectivity... done.
warning: LF will be replaced by CRLF in .gitmodules.
The file will have its original line endings in your working directory.
</pre>
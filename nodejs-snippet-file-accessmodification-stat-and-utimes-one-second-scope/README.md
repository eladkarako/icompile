You might get a high-precision (milliseconds) from the file-<code>stat</code>,
but you have to use a lower-resolution value, for <code>utimes</code>.

It is got to do with internal-linking to the operation-system's libs..

but here is a nice working example for you to play-with,
essentially just reading a file's content and last-modification/last-access times,
and rewrite the file (delete/write new one) with some altered-content,
but restoring the timestamp of the original file.

for this example to work just place a text file named <code>file.txt</code>, with any content, and any timestamp (you can set timestamp manually using variety of programs..), and see that the file with the new content is keeping its timestamp after-all.

<pre>
<span style='color:#696969; '>/* Working With NodeJS' `utimes` and `stat`.*/</span>
<span style='color:#800000; font-weight:bold; '>var</span> fs      <span style='color:#808030; '>=</span> require<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>fs</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span>
   <span style='color:#808030; '>,</span>path    <span style='color:#808030; '>=</span> require<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>path</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span>
   <span style='color:#808030; '>,</span>file    <span style='color:#808030; '>=</span> path<span style='color:#808030; '>.</span>resolve<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>./file.txt</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span>     <span style='color:#696969; '>//will work on every OS (even though it is a "Unix-slash").</span>
   <span style='color:#808030; '>,</span>stat    <span style='color:#808030; '>=</span> fs<span style='color:#808030; '>.</span>lstatSync<span style='color:#808030; '>(</span>file<span style='color:#808030; '>)</span>             <span style='color:#696969; '>//preform any action on symbolic-link itself. (for example unlink, to delete a symbolic-link without following it to delete the actual file)</span>
 <span style='color:#696969; '>//,stat    = fs.statSync(file)              //follow symbolic-link to where it points, file might be placed in another folder!</span>
   <span style='color:#808030; '>,</span>content
   <span style='color:#800080; '>;</span>

content <span style='color:#808030; '>=</span> fs<span style='color:#808030; '>.</span>readFileSync<span style='color:#808030; '>(</span>file<span style='color:#808030; '>,</span> <span style='color:#800080; '>{</span>encoding<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>utf8</span><span style='color:#800000; '>"</span><span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
content <span style='color:#808030; '>=</span> content<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#0000e6; '>foo</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; '>g</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>bar</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\
</span><span style='color:#0000e6; '>Some Junk...</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>

fs<span style='color:#808030; '>.</span>unlinkSync<span style='color:#808030; '>(</span>file<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
fs<span style='color:#808030; '>.</span>writeFileSync<span style='color:#808030; '>(</span>file<span style='color:#808030; '>,</span> content<span style='color:#808030; '>,</span> <span style='color:#800080; '>{</span>encoding<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>utf8</span><span style='color:#800000; '>"</span><span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

fs<span style='color:#808030; '>.</span>utimesSync<span style='color:#808030; '>(</span>file<span style='color:#808030; '>,</span> stat<span style='color:#808030; '>.</span>atime<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>getTime</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>/</span><span style='color:#008c00; '>1000</span><span style='color:#808030; '>,</span> stat<span style='color:#808030; '>.</span>mtime<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>getTime</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>/</span><span style='color:#008c00; '>1000</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>//will restore the access/modification time of the original-file.</span>

<span style='color:#696969; '>/*</span>
<span style='color:#696969; '>.atime                access time</span>
<span style='color:#696969; '>.mtime                modification time</span>
<span style='color:#696969; '>.birthtime || .ctime  creation time     */</span>
</pre>

You can read about this issue on:
<a href="https://github.com/nodejs/node/issues/2069#issuecomment-294596104" target="_blank">https://github.com/nodejs/node/issues/2069#issuecomment-294596104</a>.
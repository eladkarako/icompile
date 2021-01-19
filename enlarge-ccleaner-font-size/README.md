This is a walk-through, that will help you to change (- enlarge) the default font-size of the (wonderful) CCleaner program,
so it will look nice on large-screens, although this can be done globally by setting the operation-system's DPI settings to something like 120%,
the following explanation is better, if you'll will to modify, just, CCleaner - and not your entire system :)

This is kind of a <strong>lite</strong> reverse-engineering. Don't be scared - <strong>YOU CAN DO IT!</strong> + EASILY!

<blockquote>
I've modified the default font-size (<code>8</code>pt) to a much larger/clear <code>14</code>pt. You may choose a different value.

The original:
<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_enlarge_ccleaner_font_size3.png" alt="icompile.eladkarako.com_enlarge_ccleaner_font_size3" width="668" height="396" />

The modified:
<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_enlarge_ccleaner_font_size4.png" alt="icompile.eladkarako.com_enlarge_ccleaner_font_size4" width="678" height="456" />

The modified, using <strong>Hebrew</strong> as default language, it works well- without any additional modifications (affects all languages).
<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_enlarge_ccleaner_font_size5.png" alt="icompile.eladkarako.com_enlarge_ccleaner_font_size5" width="680" height="415"/>
</blockquote>

<!--more-->
<hr/>

How to:
<ol>
<li>
Open <code>CCleaner.exe</code> using <a href="https://en.wikipedia.org/wiki/Resource_Hacker" target="_blank">ResHacker</a>.
</li>
<li>
Go to the DIALOGs section and open up the sub-tree.
<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_enlarge_ccleaner_font_size1.png" alt="icompile.eladkarako.com_enlarge_ccleaner_font_size1" width="722" height="507"/>
</li>
<li>
For each of the "dialogs" you should locate the <code>FONT</code> line,
<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_enlarge_ccleaner_font_size2.png" alt="icompile.eladkarako.com_enlarge_ccleaner_font_size2" width="823" height="297"/>
</li>
<li>
Change the <code>8</code> to something like <code>10</code> (up until <code>14</code> should be fine).
</li>
<li>
Press the compile button, and go to the next "dialog" entry.

  <ul>
    <li>It will take some time, modifying the entire list..</li>
    <li>*In-case the (now edited) dialog-resource preview will fill the entire screen and you can-not see the side-folder-tree, hit the Escape-Key [ESC] to close-down the preview.</li>
  </ul>
</li>
<li>
When you'll finish, click File-- Save, and you're done.
</li>
</ol>

<blockquote>
The original <code>CCleaner.exe</code> will be backed-up in the name <code>CCleaner_original.exe</code>,
So in-case you'll screw up something you can always delete the current <code>CCleaner.exe</code> file, and rename <code>CCleaner_original.exe</code> to <code>CCleaner.exe</code> to edit everything from the clean-start-point. It is a good idea to backup the main exe anyway (by copying..) since every-time you'll save the file the <code>CCleaner_original.exe</code> will be overwritten with the most recent version.
</blockquote>

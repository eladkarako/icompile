Installing a GPU driver often adds some extra items to the desktop's context-menu (a.k.a desktop's right-click menu). <em>you can safely clean (and restore later if needed) those items.</em>
<img class="alignnone size-full wp-image-238" src="https://icompile.eladkarako.com/_uploads/1.gif" width="614" height="355" />
<!--more-->
open the following registry key:
<pre>
HKEY_CLASSES_ROOT\\Directory\\Background\\shellex\\ContextMenuHandlers
</pre>

<em>it should look similar to this:</em>
<img class="alignnone size-full wp-image-240" src="https://icompile.eladkarako.com/_uploads/2.gif" width="520" height="220" />

following simple- export key+delete key, will remove any unwanted items.

1.right click, <strong>00nView</strong> Select Export, and save as .Reg file anywhere (this will backup the menu item).
2. right click again, delete the key.

3. repeat (steps 1-2) as needed, the rule of thumb is that on Windows-XP the only item needed is the one named "<strong>New</strong>", On Vista and Windows7 there are "<strong>Gadgets</strong>", "<strong>New</strong>" and "<strong>Sharing</strong>", any other keys can be removed (and restored later, if needed , by double clicking the exported .Reg file).

<img class="alignnone size-full wp-image-241" src="https://icompile.eladkarako.com/_uploads/3.gif" width="556" height="142" />

a known Intel and NVIDIA keys are <strong>00nView</strong>, <strong>igfxcui</strong> and <strong>NvCplDesktopContext</strong>.

finally:
<img class="alignnone size-full wp-image-242" src="https://icompile.eladkarako.com/_uploads/4.gif" width="256" height="217" />
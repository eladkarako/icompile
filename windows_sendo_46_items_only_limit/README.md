I was emptying the SendTo folder leaving just one item,  
than by multiple copy/paste I've duplicated it about 90 times,  
removing the original one and adding number to the name of the first copy (indexing starting at 1).  

So now that I've got a clear idea how much items the Windows SendTo menu actualy contains,  
I've right-click and item on the desktop, allowing the SendTo-menu (as explorer-extension) to open up,  
I've scrolled to the bottom, and saw that the last item was the one with the number 46 in it.  

<img alt="image shows the sendto folder with about 90 items with consistant numbers in their name of one to about 90, side by side it shows the opened right-click context-menu of the SendTo explorer-extension and it shows that the scrolling ends in the number 46, not allowing to see any more items" src="https://icompile.eladkarako.com/_uploads/icompile.eladkarako.com_windows_sendo_46_items_only_limit.png" title="Windows SendTo 46-Item Limit" />  

I was preforming the test on a Windows 7 virtual-machine,  
that was pretty updated.  

It might be that earlier versions of Windows 7 has no, or larger limit,  
and the limit was changed in-order to reduce the amount of RAM used for processing too much items,  
it seems reasonable to me since I remember an early versions of Windows 7 when I was able to get to the items  
starting with the letter 'x' or 'z' (at the bottom of the list),  
and the list itself hasn't changed too much. But I'm not 100% sure (also sub-folders seems to have stop working..).

<hr/> 

The <code>\shellex\ContextMenuHandlers\SendTo</code>,  
along with its default value of <code>@="{7BA4C740-9E81-11CF-99D3-00AA004AE837}"</code>,  
is added (and can be additionaly added) as a context-menu to a lot of objects in the registry,  
for example adding the SendTo context-menu to a drive and couple of selected drives in 'My Computer' is easy with:  
<pre>
Windows Registry Editor Version 5.00
;adding

[HKEY_CLASSES_ROOT\Drive\shellex\ContextMenuHandlers\Send To]
@="{7BA4C740-9E81-11CF-99D3-00AA004AE837}"

[HKEY_CLASSES_ROOT\Drives\Shellex\ContextMenuHandlers\Send To]
@="{7BA4C740-9E81-11CF-99D3-00AA004AE837}"
</pre>

and cleaning-it up with:  
<pre>
Windows Registry Editor Version 5.00
;cleaning

[-HKEY_CLASSES_ROOT\Drive\shellex\ContextMenuHandlers\Send To]
[-HKEY_CLASSES_ROOT\Drives\Shellex\ContextMenuHandlers\Send To]
</pre>

This makes it easy to send a whole drive-letter as an argument,  
to programs such as 'WinDirStat' (Windows Directory Statistics by Bernhard Seifert - <a href="https://en.wikipedia.org/wiki/WinDirStat">[1]</a>, <a href="https://sourceforge.net/projects/windirstat/">[2]</a>, <a href="https://windirstat.net/download.html">[3]</a>).  

<hr/>

Running <kbd>WIN</kbd>+<kbd>R</kbd>,  
<code>gpedit.msc</code> (or <code>"c:\windows\system32\mmc.exe" "c:\windows\system32\gpedit.msc"</code>)  
does not seems to have anything related (group policies) that can be used.  

<hr/>

I did find some other stuff such this guide to disable ShellEx items (https://www.tenforums.com/tutorials/143627-fix-slow-freezing-right-click-context-menu-windows.html),  
and delaying building the sendto-menu items up until the mouse cursor is over the menu itself to save processing (https://www.tenforums.com/tutorials/69530-send-context-menu-enable-disable-delay-building-windows-10-a.html),  
both should speed up the context-menu a bit.  

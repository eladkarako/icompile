<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_cmd_fonts.png" alt="" width="623" height="479" />

Just make sure you have those (you can google-search them or look for them at <a href="http://fonts.google.com" target="_blank">fonts.google.com</a>, the 'Courier New' font-face should be already installed in your Windows).

feel free to edit/replace/add more,
make sure the fonts are mono-type, use '000...00' as name.

<pre>
Windows Registry Editor Version 5.00

<span style='color:#7f9fbf; font-weight:bold; '>[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Console\\TrueTypeFont]</span>
<span style='color:#0000e6; '>"000"</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Noto Mono"</span>
<span style='color:#0000e6; '>"0000"</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Courier New"</span>
<span style='color:#0000e6; '>"00000"</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Droid Sans Mono"</span>
<span style='color:#0000e6; '>"000000"</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Roboto Mono"</span>
<span style='color:#0000e6; '>"0000000"</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Ubuntu Mono"</span>
</pre>

If you don't know of <strong>name</strong> of the font (it should be exactly right!),
open any program that does some sort of font selection, and allows copy&paste, such as Microsoft-Word or even Notepad2/Notepad++.

Notepad2 has a "default font" selection, which I'm not going to actually change, but just use it to browse-for font-names.

<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_cmd_fonts_get_font_name_notepad2.png" alt="" width="347" height="207" />

the standard control-panel, used by most (simple) does also allow easy copy&paste.
<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_cmd_fonts_get_font_name_notepad2copypaste.png" alt="" width="417" height="272" />', 'Adding 'Noto Mono', 'Courier New', 'Droid Sans Mono', 'Roboto Mono'
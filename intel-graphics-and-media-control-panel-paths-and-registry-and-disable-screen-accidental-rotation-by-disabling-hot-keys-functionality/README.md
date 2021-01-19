<style type="text/css">
.texter {
background: none rgba(243,243,193,.3);
border: 1px solid rgba(243,243,193,.5);
border-radius: 0px;
color: rgba(0,0,0,.4);
display: inline;
margin: 5px 5px 5px 5px;
outline: 1px solid rgba(243,243,193,.5);
overflow-x:hidden;
overflow-y:auto;
padding: 5px;
resize: none;
resize:none;
text-align: center;
text-rendering: geometricPrecision;
vertical-align: middle;
width: 100%;
}
</style>

Path: <textarea class="texter">C:\\Windows\\System32\\GfxUI.exe</textarea> <br/>

Icon: <a href="https://icompile.eladkarako.com/_uploads/2014/11/gfxui.ico"><img src="https://icompile.eladkarako.com/_uploads/2014/11/gfxui.ico" alt="icon" class="alignnone size-full wp-image-2103" /></a> <br/>

Master Registry Placement: <textarea class="texter">HKEY_USERS\\S-1-5-21-1109280521-701145964-1310375388-1000\\Software\\Intel\\Display</textarea> <small>(*replace S-1-.. with your own uuid)</small> <br/>

Disable Hot-Key Functionality <small>(in order to prevent screen rotation on accidental [ALT]+[CTRL]+[LEFT])</small>
<pre>
Windows Registry Editor Version 5.00

[HKEY_USERS\\S-1-5-21-1109280529-701945964-1310375388-1000\\Software\\Intel\\Display\\igfxcui\\HotKeys]
"Enable"=dword:00000000
</pre>
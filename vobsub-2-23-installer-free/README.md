Contains The "Installer/Setup/Registry Free" Files, In A Compressed Format.
Unmodified, Original Files Of VobSub Installer.

technical stuff.
I always misplacing the installer and Windows Vista/7/8+ has problems installing it.

I've analysed the latest available <code>VobSub_2.23.exe</code>,

some exe stuff:
it has <code>File Offset 00003264</code> and <code>Overlay 000A71D0</code>.
reverse engineering showed that it has <code>Installer Nullsoft PiMP Stub</code> header,

so rather than installing and collecting the files from around my PC, I've used my reverse Nullsoft installer script (wrote it when I was 12 years old for d2k2.ollydbg..).

you can use it for VirtualDub video editing as a "normal" (a.k.a not SSA/ASS subtitles embedded).
it is easy as placing the files in the 'plugins' folder and restarting VirtualDub.

You may use some of the files, or run the exe to register the DLL files,
or do it manually.

Files in the package:

<pre>
VobSub_2.23\\
|   DVobSub.ax
|   submux.exe
|   subresync.exe
|   unrar.dll
|   vobsub.dll
|   vobsub.ini
|   vobsub_au.auf
|
+---Docs\\
|       ass-quickref.txt
|       ass-specs.doc
|       dvobsub.txt
|       license.txt
|       readme1st.txt
|       submux.txt
|       subresync.txt
|       supported formats.txt
|       textsub.txt
|       unicode.txt
|       vobsub-auto.txt
|       vobsub.txt
|
\\---Plugins\\
        textsub.vdf
        vobsub_vd.vdf
</pre>

<a href="https://github.com/eladkarako/icompile/releases/download/latest/VobSub_2.23.rar">https://github.com/eladkarako/icompile/releases/download/latest/VobSub_2.23.rar</a>

on VirtualDub:
you can essentially place this folder anywhere, but conventionally copy everything (deflate the folders) into <code>.....path....\\VirtualDub\\plugins\\</code>.
afterwards, you close and open VirtualDub, and (on the top menu) go to <code>video</code> - <code>filters...</code> - click <code>Add...</code> - click <code>Load...</code>, select either <code>textsub.vdf</code> or <code>vobsub_vd.vdf</code>, and continue to load your srt subtitles, etc...
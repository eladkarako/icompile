<blockquote>
ExifTool is a free and open-source software program for reading, writing, and manipulating image, audio, video, and PDF metadata. It is platform independent, available as both a Perl library (Image::ExifTool) and command-line application. ExifTool is commonly incorporated into different types of digital workflows and supports many types of metadata including Exif, IPTC, XMP, JFIF, GeoTIFF, ICC Profile, Photoshop IRB, FlashPix, AFCP and ID3, as well as the manufacturer-specific metadata formats of many digital cameras.
<sub>
- <a href="http://www.sno.phy.queensu.ca/~phil/exiftool/" target="_blank">http://www.sno.phy.queensu.ca/~phil/exiftool/</a>
- <a href="https://en.wikipedia.org/wiki/ExifTool" target="_blank">https://en.wikipedia.org/wiki/ExifTool</a>
- <a href="https://sourceforge.net/projects/exiftool/" target="_blank">https://sourceforge.net/projects/exiftool/</a>
- <a href="https://downloads.sourceforge.net/project/exiftool/exiftool-10.48.zip?r=&ts=1491744058&use_mirror=netix" target="_blank">https://downloads.sourceforge.net/project/exiftool/exiftool-10.48.zip?r=&ts=1491744058&use_mirror=netix</a>
</sub>
</blockquote>



The following example is a batch for Windows operation-system, but it can be easily migrated to any other supported OS, to use it, just mark a bunch of files (any amount! it does not limited to usual batch-queue-limit of <em>9</em>) and drag&drop them over the batch-file.

<em>Plus it will work on <strong>any file</strong>, naturally file-types that are not supported by the ExifTool will be ignored (skipped), so feel free to just use [CTRL]+[A] to select all the files without pin-point-select just the ones you need.. or unsure if they will be supported, if it will, it will.. and if it won't, it won't.. :]</em>

<code>remove_metadata.cmd</code>:
<pre>
<span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>
<span style='color:#e34adc; '>:LOOP</span>
<span style='color:#696969; '>::has argument ?</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>[</span><span style='color:#0000e6; '>"%~1"</span><span style='color:#808030; '>]</span><span style='color:#808030; '>=</span><span style='color:#808030; '>=</span><span style='color:#808030; '>[</span><span style='color:#0000e6; '>""</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>(</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> done.</span>
  <span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>END</span><span style='color:#808030; '>;</span>
<span style='color:#808030; '>)</span>
<span style='color:#696969; '>::argument exist ?</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>not</span> <span style='color:#800000; font-weight:bold; '>exist</span> <span style='color:#008c00; '>%~s1</span> <span style='color:#808030; '>(</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> not exist</span>
  <span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>NEXT</span><span style='color:#808030; '>;</span>
<span style='color:#808030; '>)</span>
<span style='color:#696969; '>::file exist ?</span>
<span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> exist</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>exist</span> <span style='color:#008c00; '>%~s1</span><span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>NUL</span> <span style='color:#808030; '>(</span>
  <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> is a directory</span>
  <span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>NEXT</span><span style='color:#808030; '>;</span>
<span style='color:#808030; '>)</span>
<span style='color:#696969; '>::OK</span>
<span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> is a file</span>

<span style='color:#800000; font-weight:bold; '>set</span> FILE_INPUT<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"%~s1"</span>
<span style='color:#800000; font-weight:bold; '>set</span> FILE_OUTPUT<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"%~d1%~p1%~n1_fixed%~x1"</span>

<span style='color:#800000; font-weight:bold; '>call</span> exiftool <span style='color:#808030; '>-</span>progress <span style='color:#808030; '>-</span>verbose <span style='color:#808030; '>-</span>ignoreMinorErrors <span style='color:#808030; '>-</span>XMPToolkit<span style='color:#808030; '>=</span><span style='color:#0000e6; '>""</span> <span style='color:#808030; '>-</span>all<span style='color:#808030; '>=</span><span style='color:#0000e6; '>""</span> <span style='color:#808030; '>-</span>trailer<span style='color:#808030; '>:</span>all<span style='color:#808030; '>=</span><span style='color:#0000e6; '>""</span> <span style='color:#0000e6; '>"%FILE_INPUT%"</span>


<span style='color:#e34adc; '>:NEXT</span>
<span style='color:#800000; font-weight:bold; '>shift</span>
<span style='color:#800000; font-weight:bold; '>goto </span><span style='color:#e34adc; '>LOOP</span>

<span style='color:#e34adc; '>:END</span>
<span style='color:#800000; font-weight:bold; '>pause</span>
</pre>', 'ExifTool - Ultimate Batch To Remove All Tags, From Infinite List Of Files
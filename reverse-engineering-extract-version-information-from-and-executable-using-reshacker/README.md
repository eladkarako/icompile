For the example I'll choose something I'm using every now and again.. Chromium exe installer

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_exe_info_from_windows_ui.png" alt="icompile.eladkarako.com_exe_info_from_windows_ui" width="614" height="550"/>

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_exe_info_from_reshacker_ui.png" alt="icompile.eladkarako.com_exe_info_from_reshacker_ui" width="1132" height="699"/>

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_exe_info_from_reshack_helpfile.png" alt="icompile.eladkarako.com_exe_info_from_reshack_helpfile" width="713" height="659" />

<blockquote>Working with information dumped in text files is easy,
you can use every GNU exe you'll like (grep, awk, sed) or even feed it NodeJS, <em>see if I'll care ;)</em>
But first you have to <strong>get</strong> it.
...Here is how to.... </blockquote>

<!--more-->
<hr/>

You can choose to extract the resource as <code>plain <em>whatever</em></code> (for example bmp, wav, txt) or as windows-compiled resource (res file).
It is all depend on if you give <code>RC</code> or <code>RES</code> as the output extension.

Since I want to extract the version information (a.k.a <code>VERSIONINFO</code>) I'll use <code>.rc</code>:
<pre>
ResHacker.exe -extract "mini_installer.exe,mini_installer_version_information.rc,VERSIONINFO,1,1033"
</pre>

<blockquote>
I am <strong>VERY specific</strong> on the sub-tree and language,
..well because I can.

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_exe_info_from_reshack_extract_very_specific.png" alt="icompile.eladkarako.com_exe_info_from_reshack_extract_very_specific" width="423" height="205"/>

But,
You might as well ignore and since version-information is (usually) just in plain US-ASCII English, or at least single language it should be OK to just extract everything <code>VERSIONINFO</code>,
To do it, just don't specify the <code>1</code> or <code>1033</code> (in my example above).

<pre>
ResHacker.exe -extract "mini_installer.exe,mini_installer_version_information.rc,VERSIONINFO,,"
</pre>

You <strong>MUST however</strong> still write those <code>,,</code> at the end, since it is part of reshacker's <sup>(ambiguous)</sup> syntax,
<em>(will not work without those <code>,,</code> at the end).</em>
</blockquote>

Reading the "dumped" information (plain text) is quite easy using <strong>any notepad application</strong>.
<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_reshack_read_raw_information.png" alt="icompile.eladkarako.com_reshack_read_raw_information" width="971" height="817" />

<blockquote>p.s.
<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_reshack_read_compiled_resource2.png" alt="icompile.eladkarako.com_reshack_read_compiled_resource2" width="762" height="536" />

Reading the compiled resource is somewhat possible with notpad due to the predictability of the information,
but not really human-readable, unless filtered. you can however feed it to <code>reshacker.exe</code> again, as an input, if you wish to..
<sub>Or compile it yourself using the <a href="https://msdn.microsoft.com/en-us/library/windows/desktop/aa381055(v=vs.85).aspx" target="_blank">RC command <sup>https://msdn.microsoft.com/en-us/library/windows/desktop/aa381055(v=vs.85).aspx</sup></a></sub>
</blockquote>

<hr/>



<blockquote>
Would You like to script-it? 
after you've dumped it to a (for example <code>versioninfo.rc</code>)
use <code>grep</code> and <code>sed</code>, to filter out and leave you just with the version information itself.

<pre>
grep -m 1 "FileVersion" versioninfo.rc | sed -e "s@^.*FileVersion\\", \\"@@g" -e "s@\\"$@@"
</pre>

Would you like to know what other stuff you can extract from the <code>VERSIONINFO</code> block of the file?
Well..
Assuming your target application has implemented the <code>VERSIONINFO</code> block as Microsoft had defined it
There are only a handful of so called attributes you can "query" for, <sub>*Microsoft well-defines only a handful of platforms.</sub>

According to <a href="https://msdn.microsoft.com/en-us/library/windows/desktop/aa381058(v=vs.85).aspx" target="_blank">VERSIONINFO resource
 <sup>https://msdn.microsoft.com/en-us/library/windows/desktop/aa381058(v=vs.85).aspx</sup></a>
Those are (ordered a,b,c,... including the description as is from the msdn link above) 
<pre>
Name	Description
Comments	Additional information that should be displayed for diagnostic purposes.
CompanyName	Company that produced the file?for example, "Microsoft Corporation" or "Standard Microsystems Corporation, Inc." This string is required.
FileDescription	File description to be presented to users. This string may be displayed in a list box when the user is choosing files to install?for example, "Keyboard Driver for AT-Style Keyboards". This string is required.
FileVersion	Version number of the file?for example, "3.10" or "5.00.RC2". This string is required.
InternalName	Internal name of the file, if one exists?for example, a module name if the file is a dynamic-link library. If the file has no internal name, this string should be the original filename, without extension. This string is required.
LegalCopyright	Copyright notices that apply to the file. This should include the full text of all notices, legal symbols, copyright dates, and so on. This string is optional.
LegalTrademarks	Trademarks and registered trademarks that apply to the file. This should include the full text of all notices, legal symbols, trademark numbers, and so on. This string is optional.
OriginalFilename	Original name of the file, not including a path. This information enables an application to determine whether a file has been renamed by a user. The format of the name depends on the file system for which the file was created. This string is required.
PrivateBuild	Information about a private version of the file?for example, "Built by TESTER1 on \\TESTBED". This string should be present only if VS_FF_PRIVATEBUILD is specified in the fileflags parameter of the root block.
ProductName	Name of the product with which the file is distributed. This string is required.
ProductVersion	Version of the product with which the file is distributed?for example, "3.10" or "5.00.RC2". This string is required.
SpecialBuild	Text that indicates how this version of the file differs from the standard version?for example, "Private build for TESTER1 solving mouse problems on M250 and M250E computers". This string should be present only if VS_FF_SPECIALBUILD is specified in the fileflags parameter of the root block.
</pre>

so, for example, one may easily fetch the <code>CompanyName</code> value using the following commands-chain:

<pre>
grep -m 1 "CompanyName" versioninfo.rc | sed -e "s@^.*CompanyName\\", \\"@@g" -e "s@\\"$@@"
</pre>
</blockquote>

<blockquote>
*note that due to grep/sed combination an empty grep match (for example, if <code>CompanyName</code> was not found) will result in an empty string,
- which in this case is 100% valid output for those kind of things, 

naturally if you wish to know if the entry <code>CompanyName</code> is <strong>missing</strong> instead of just <strong>empty</strong>, you should probably query some more, for example wrap the grep value with characters such as apostrophes (<code>'</code>) or even pre-test the grep output before sed'ding. Overkill?
</blockquote>

<blockquote>
The following (simple) batch file will generate a <code>rc</code> file for each exe you'll drag&drop on top of it
(well actually it should even work even if instead of exe you will drag&drop a <code>res</code> file on top of the batch file since I'm not really verifying the content here at all...)

<pre><span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>

<span style='color:#800000; font-weight:bold; '>set</span> FILE_INPUT<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"%~s1"</span>
<span style='color:#800000; font-weight:bold; '>set</span> FILE_OUTPUT<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"%~d1%~p1%~n1_versioninfo.rc"</span>

<span style='color:#800000; font-weight:bold; '>call</span> C<span style='color:#808030; '>:</span><span style='color:#808030; '>\\</span>Software<span style='color:#808030; '>\\</span>ResHack<span style='color:#808030; '>\\</span>RESHAC~<span style='color:#008c00; '>1</span>.EXE <span style='color:#808030; '>-</span>extract <span style='color:#0000e6; '>"%FILE_INPUT%,%FILE_OUTPUT%,VERSIONINFO,,"</span>
</pre>

* fix the path to reshacker exe's path.
* you can read|download resource-hacker from the wiki page <a target="_blank" href="https://en.wikipedia.org/wiki/Resource_Hacker">https://en.wikipedia.org/wiki/Resource_Hacker</a>

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_batch_generate_rc_file.png" alt="icompile.eladkarako.com_batch_generate_rc_file" width="702" height="462"/>
</blockquote>


<hr/>
<blockquote>
Here is a slightly improved batch-file:
<pre><span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>
<span style='color:#800000; font-weight:bold; '>setlocal</span> enableextensions

    <span style='color:#800000; font-weight:bold; '>set</span> FILE_INPUT<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"%~s1"</span>
    <span style='color:#800000; font-weight:bold; '>set</span> FILE_OUTPUT<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"%~d1%~p1%~n1_versioninfo.rc"</span>

<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;::call D:\\DOS\\ResHack\\RESHAC~1.EXE -extract "%FILE_INPUT%,%FILE_OUTPUT%,VERSIONINFO,1,1033"</span>
    <span style='color:#800000; font-weight:bold; '>call</span> D<span style='color:#808030; '>:</span><span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>DOS</span><span style='color:#808030; '>\\</span>ResHack<span style='color:#808030; '>\\</span>RESHAC~<span style='color:#008c00; '>1</span>.EXE <span style='color:#808030; '>-</span>extract <span style='color:#0000e6; '>"%FILE_INPUT%,%FILE_OUTPUT%,VERSIONINFO,,"</span>
    
    <span style='color:#800000; font-weight:bold; '>set</span> QUERY<span style='color:#808030; '>=</span>FileVersion
    <span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#808030; '>/</span>f <span style='color:#0000e6; '>"tokens=*"</span> <span style='color:#797997; '>%%</span>a <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span>'grep <span style='color:#808030; '>-</span>o <span style='color:#0000e6; '>"%QUERY%.*$"</span> <span style='color:#797997; '>%FILE_OUTPUT%</span>  <span style='color:#808030; '>^</span><span style='color:#808030; '>|</span>  sed <span style='color:#808030; '>-</span>e <span style='color:#0000e6; '>"s@.*, @@g"</span> <span style='color:#808030; '>^</span><span style='color:#808030; '>|</span> tr <span style='color:#808030; '>-</span>d <span style='color:#0000e6; '>""</span><span style='color:#0000e6; '>""</span> '<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>set</span> RESULT<span style='color:#808030; '>=</span><span style='color:#797997; '>%%</span>a<span style='color:#808030; '>)</span><span style='color:#808030; '>;</span>
    <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> file</span>'s version is <span style='color:#808030; '>[</span><span style='color:#797997; '>%RESULT%</span><span style='color:#808030; '>]</span>. Cool!

<span style='color:#800000; font-weight:bold; '>endlocal</span>
</pre>
<sub>*again, please set the path to <strong>your</strong> reshack exe.</sub>

That will output 
<pre>
file's version is [56.0.2886.0]. Cool!
</pre>

You'll also may notice that the file is highly modular, in which you may replace the <code>FileVersion</code> with (for example) <code>ProductName</code>...

<pre><span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>
<span style='color:#800000; font-weight:bold; '>setlocal</span> enableextensions

    <span style='color:#800000; font-weight:bold; '>set</span> FILE_INPUT<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"%~s1"</span>
    <span style='color:#800000; font-weight:bold; '>set</span> FILE_OUTPUT<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"%~d1%~p1%~n1_versioninfo.rc"</span>

<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;::call D:\\DOS\\ResHack\\RESHAC~1.EXE -extract "%FILE_INPUT%,%FILE_OUTPUT%,VERSIONINFO,1,1033"</span>
    <span style='color:#800000; font-weight:bold; '>call</span> D<span style='color:#808030; '>:</span><span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>DOS</span><span style='color:#808030; '>\\</span>ResHack<span style='color:#808030; '>\\</span>RESHAC~<span style='color:#008c00; '>1</span>.EXE <span style='color:#808030; '>-</span>extract <span style='color:#0000e6; '>"%FILE_INPUT%,%FILE_OUTPUT%,VERSIONINFO,,"</span>
    
    <span style='color:#800000; font-weight:bold; '>set</span> QUERY<span style='color:#808030; '>=</span>ProductName
    <span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#808030; '>/</span>f <span style='color:#0000e6; '>"tokens=*"</span> <span style='color:#797997; '>%%</span>a <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span>'grep <span style='color:#808030; '>-</span>o <span style='color:#0000e6; '>"%QUERY%.*$"</span> <span style='color:#797997; '>%FILE_OUTPUT%</span>  <span style='color:#808030; '>^</span><span style='color:#808030; '>|</span>  sed <span style='color:#808030; '>-</span>e <span style='color:#0000e6; '>"s@.*, @@g"</span> <span style='color:#808030; '>^</span><span style='color:#808030; '>|</span> tr <span style='color:#808030; '>-</span>d <span style='color:#0000e6; '>""</span><span style='color:#0000e6; '>""</span> '<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>set</span> RESULT<span style='color:#808030; '>=</span><span style='color:#797997; '>%%</span>a<span style='color:#808030; '>)</span><span style='color:#808030; '>;</span>
    <span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '> You are checking [%RESULT%]. Nice.</span>

<span style='color:#800000; font-weight:bold; '>endlocal</span>
</pre>

which will then output:
<pre>
You are checking [ChromiumInstaller]. Nice.
</pre>

but wait! something is wrong! the value of the <code>ProductName</code> is missing a space (should be <code>Chromium Installer</code>) the reason is that replacing the <code>"</code> character is doomed due to Windows' <code>escape</code> hell, you can escape using the <code>^</code> character for the batch (cmd) and <code>\\</code> for the GNU programs, but when included in multiple <code>'</code> and <code>"</code>, there is another way to escape... <code>""""</code>... for the sake of clarity of the script I will handle the only cases where <code>"</code> character and white-space is not an issue, such as version-like numbering.
Windows cmd-shell is nothing like linux, or cygwin, in which escaping is (kind'a) possible.

You are much better writing an application implementing a <code>DLL</code> to read the version-information block, through binary processing, than walking through the Windows-CMD-Escape hell.

Anyway, if <code>"</code> characters are not an issue with the response, you may possible tolerate or process them otherwise (maybe in a separate batch or through cmd-variable-string-manipulation [GOOD GOD!.. <em>amm well it is not THATTTTT BADDDD...</em>] 
but you may still use this one:
<pre>
@echo off
setlocal enableextensions

    set FILE_INPUT="%~s1"
    set FILE_OUTPUT="%~d1%~p1%~n1_versioninfo.rc"

    ::call D:\\DOS\\ResHack\\RESHAC~1.EXE -extract "%FILE_INPUT%,%FILE_OUTPUT%,VERSIONINFO,1,1033"
    call D:\\DOS\\ResHack\\RESHAC~1.EXE -extract "%FILE_INPUT%,%FILE_OUTPUT%,VERSIONINFO,,"
    
    set QUERY=FileVersion
    for /f "tokens=*" %%a in ('grep -o "%QUERY%.*$" %FILE_OUTPUT%  ^|  sed -e "s@.*, @@g") do (set RESULT=%%a);
    echo file's version is [%RESULT%]. Cool!

endlocal
</pre>

Enjoy :)
</blockquote>

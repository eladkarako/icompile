<span style="text-align:center; margin:0; background:none rgba(234,240,77,.3); border-radius:20px; display:inline-block; padding:10px;">Download A 100% No Installer,<br>Completely Portable Unmodified FxCop.</span>

<!--more-->
<hr/>

<blockquote style="border-radius:5px; background:none rgba(214,252,255,.4); font-size:9pt;"><strong>FxCop</strong> is a free static code analysis tool from Microsoft that checks .NET managed code assemblies for conformance to Microsoft's .NET Framework Design Guidelines. Unlike StyleCop, or the Lint programming tool, for the C programming language, <strong>FxCop</strong> analyzes the compiled object code, not the original source code.

It uses CIL parsing, and callgraph analysis to inspect assemblies for more than 200 different possible coding standards violations in the following areas:
  - COM (Interoperability) – rules that detect COM Interop issues.
  - Design – rules that detect potential design flaws. These coding errors typically do not affect the execution of your code.
  - Globalization – rules that detect missing or incorrect usage of information related to globalization and localization.
  - Naming – rules that detect incorrect casing, cross language keyword collisions, and other issues related to the names of types, members, parameters, namespaces, and assemblies.
  - Performance – rules that detect elements in your assemblies that will degrade performance.
  - Security – rules that detect programming elements that leave your assemblies vulnerable to malicious users or code.
  - Usage - rules that detect potential flaws in your assemblies that can affect code execution.
  - Maintainability - rules that detect maintenance issues.
  - Portability - rules that detect portability issues.
  - Reliability- rules that detect correct memory and thread usage.

<strong>FxCop</strong> includes both GUI and command line versions of the tool. Microsoft Visual Studio 2005 and Visual Studio 2008 Team System Development Editions both include a "Code Analysis" feature based on <strong>FxCop</strong>.

For Visual Studio 2010 the corresponding, and slightly enhanced, static code analysis features are included in the Premium and Ultimate editions. <strong>FxCop</strong> 10.0 is included in the Microsoft Windows SDK for Windows 7.

<em><a href="https://en.wikipedia.org/wiki/FxCop" target="_blank">FxCop</a> - Wikipedia.</em>
</blockquote>


I've recently purged everything <em>Visual-Studio .NET</em> related in favour of <a href="http://www.icsharpcode.net/" target="_blank">SharpDevelop</a>, <sup><strong>[which is a wonderful C++/C# editor]</strong></sup>, while <em>configuring things up there</em> I've noticed that FxCopy (which is a part of WinSDK installation) wasn't configured,

<img src="https://icompile.eladkarako.com/_uploads/2016/06/icompile.eladkarako.com_description_of_sharpdevelop_FxCop_settings.gif"/>

While I did downloaded the SDK before But I've figured that it will be much *cooler* to have <em>*just this part*</em> portable as $hit, since I'm already using the portable version of <em>SharpDevelop</em>.

While <a href="https://fxcopinstaller.codeplex.com/" target="_blank">FxCop Installer [codeplex]</a> ripped successfully the installer..
it was still wrapped with the ugly Windows-Installer hell.. <img src="https://icompile.eladkarako.com/_uploads/2016/06/icompile.eladkarako.com_description_of_windows_installer.gif"/>

After I've extracted the HELL of it <em>(let us not discuses my method here&&now..)</em>  I've got a nice clean <a href="https://en.wikipedia.org/wiki/Windows_Installer" target="_blank"><img src="https://icompile.eladkarako.com/_uploads/2016/06/icompile.eladkarako.com_description_of_msi_windows_installer.gif"/>MSI archive</a>  

<blockquote code-like>
<strong>[Download #1 - A Clean MSI installer]</strong>
Size: 2.86MB.
<img src="https://icompile.eladkarako.com/_uploads/2016/06/icompile.eladkarako.com_description_of_FxCop10_setup.gif"/>
<a title="Download FxCop10_setup.zip" target="_blank" rem-href="https://icompile.eladkarako.com/_uploads/2016/06/icompile.eladkarako.com__FxCop10_setup.zip" href="http://q.gs/6965854/fxcop10-setupzip">FxCop10_setup.zip</a>
</blockquote>

The installer above will write the file to their default-location under program-files, and will create shortcuts and such..
<em>so if you are inexperience downloading and extracting the zip, and double-clicking the <code>install.msi</code> will probably be the easier method for you.</em>

If you are a <em>recklessly s.o.b</em> keep reading..

<blockquote style="font-size:10pt;"><strong>EDIT:</strong> actually from my checking <em>[*spoiler*]</em> neither <strong>FxCop</strong> nor <strong>SharpDevelop</strong> (in its portable version) writes any registry values, so it is perfectly safe to continue stripping the installers, and placing the files in any place you'll like to..</blockquote>

..anyway extracting MSI-archive-installer is relatively easy, 
<sub><em>as long you consider the relations between MSI-files, but let us skip this part..</em></sub>

here is what you've came-for..

<blockquote code-like>
<strong>[Download #2 - FxCop 10, No install]</strong>
Size: 2.98MB.
<img src="https://icompile.eladkarako.com/_uploads/2016/06/icompile.eladkarako.com_description_of_FxCop10.gif"/>
<a title="Download FxCop10.zip" target="_blank" rem-href="https://icompile.eladkarako.com/_uploads/2016/06/icompile.eladkarako.com__FxCop10.zip" href="http://q.gs/6965854/fxcop10zip">FxCop10.zip</a>
</blockquote>

I've figured out that both SharpDevelop (in its portable version) and FxCop actually does not write any registry-values, so just grab the *later* zip file, extract it *anywhere* and simply target <img src="https://icompile.eladkarako.com/_uploads/2016/06/icompile.eladkarako.com_description_of_FxCop_exe.gif"/><code>fxcop.exe</code> in any program that requires it.

..or just double-click it, it works just fine :]

Have fun.
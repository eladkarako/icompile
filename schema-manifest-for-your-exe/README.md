<img src="https://icompile.eladkarako.com/_uploads/2017/06/manifest_love.png" alt="" width="200" height="204" />

<!--more-->

<pre>
&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;asmv1:assembly xmlns="urn:schemas-microsoft-com:asm.v2" manifestVersion="1.0"
                xmlns:asmv1="urn:schemas-microsoft-com:asm.v1" 
                xmlns:asmv2="urn:schemas-microsoft-com:asm.v2" 
                xmlns:asmv3="urn:schemas-microsoft-com:asm.v3" 
                xmlns:eladkarakowinsets05="http://schemas.microsoft.com/SMI/2005/WindowsSettings" 
                xmlns:eladkarakowinsets11="http://schemas.microsoft.com/SMI/2011/WindowsSettings" 
                xmlns:eladkarakowinsets11="http://schemas.microsoft.com/SMI/2016/WindowsSettings" 
                xmlns:eladkarakowinsets11="http://schemas.microsoft.com/SMI/2017/WindowsSettings" 
                xmlns:co.v1="urn:schemas-microsoft-com:clickonce.v1" 
                xmlns:co.v2="urn:schemas-microsoft-com:clickonce.v2"
                xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" 
                xmlns:xrml="urn:mpeg:mpeg21:2003:01-REL-R-NS" 
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                xsi:schemaLocation="urn:schemas-microsoft-com:asm.v1 assembly.adaptive.xsd"&gt;
&lt;!-- ------------------------------------------------------------------------------------------------------- --&gt;
  &lt;!-- name:                   choose to either use a 4-places name such as "Microsoft.Windows.Shell.calc" or simply the file-name such as "calc.exe" (Required).
       processorArchitecture:  choose either one of x86,ia64,amd64 you can also place "*" or remove it, but you can also put (similar to "*"): "msil" which means that the application will "try" to run anyway. It is probably better than any other option. (Optional).
       version:                mmmmm.nnnnn.ooooo.ppppp format, 0-65535 inclusive (Required).
       publicKeyToken:         "0000000000000000" or remove it or use a "16 times Hex-letters (range 0-F)", which is the last 8 bytes of the SHA-1 hash of the public key under which the application or assembly is signed. The public key used to sign the catalog must be 2048 bits or greater. Required for all shared side-by-side assemblies, for the application itself (you can always use "0000000000000000" for the application...)  - (optional).
   --&gt;
  &lt;asmv1:assemblyIdentity type="win32" language="neutral" culture="neutral" processorArchitecture="msil"
                          name="myfile.exe" version="1.2.3.4" publicKeyToken="0000000000000000" /&gt; &lt;!--  culture can be "neutral"|"en-us"|...        processorArchitecture *|msil|x86|amd64|ia64|arm (not case specific, optional)  - the safest way is to use "*" both for application and dll. limiting: setting "amd64" means the application will ONLY works for 64-bit AMD processors, setting "ia64" means the application will only works with a 64-bit Intel processor only. not limited values are "*" (prefered) or "msil" Neutral with respect to processor and bits-per-word which is the default for most compiled .Net applications. using "x86" is not restrictive, it allows running on 32-bit Intel processor, either native or in the Windows on Windows (WOW) environment on a 64-bit platform - ammm.... well actually it might be restrictive if you are building for ARM on newer visual-studio versions (12+). --&gt;
&lt;!-- ------------------------------------------------------------------------------------------------------- --&gt;
  &lt;!-- good if the "name" in "assemblyIdentity" is class-like, instead of file-name-like. --&gt;
  &lt;entryPoint&gt;
    &lt;assemblyIdentity language="neutral" culture="neutral" processorArchitecture="msil"
                      name="myfile" version="1.2.3.4"  /&gt;
    &lt;commandLine file="myfile.exe" parameters="" /&gt;
  &lt;/entryPoint&gt;

  &lt;file name="myfile.exe" /&gt;
&lt;!-- ------------------------------------------------------------------------------------------------------- --&gt;
  &lt;asmv1:description asmv2:publisher="Elad Karako"
                     asmv2:product="file-description (myfile.exe)"  
                     asmv2:supportUrl="https://icompile.eladkarako.com/schema-manifest-for-your-exe/"&gt;same file-description from before&lt;/asmv1:description&gt; &lt;!-- can be self closing tag if you don't want to include inside-content for legacy asmv1 --&gt;
&lt;!-- ------------------------------------------------------------------------------------------------------- --&gt;
  &lt;asmv3:application&gt; &lt;!-- see https://msdn.microsoft.com/en-us/library/windows/desktop/aa374191(v=vs.85).aspx --&gt;
    &lt;!-- DPI related --&gt;
    &lt;asmv3:windowsSettings&gt; &lt;eladkarakowinsets05:dpiAware                         &gt;true/PM&lt;/eladkarakowinsets05:dpiAware&gt;                        &lt;/asmv3:windowsSettings&gt;  &lt;!-- screen's DPI aware (legacy) --&gt;
    &lt;asmv3:windowsSettings&gt; &lt;eladkarakowinsets16:dpiAwareness                     &gt;PerMonitorV2,PerMonitor&lt;/eladkarakowinsets16:dpiAwareness&gt;    &lt;/asmv3:windowsSettings&gt;  &lt;!-- screen's DPI aware (new with fallback: "PerMonitorePerV2,PerMonitor" to "PerMonitorV2" to "PerMonitor") --&gt;
    &lt;asmv3:windowsSettings&gt; &lt;eladkarakowinsets17:gdiScaling                       &gt;true&lt;/eladkarakowinsets17:gdiScaling&gt;                         &lt;/asmv3:windowsSettings&gt;  &lt;!-- improve text scaling, adds support for scalling/DPI-awareness for old apps too. --&gt;
    &lt;asmv3:windowsSettings&gt; &lt;eladkarakowinsets11:highResolutionScrollingAware     &gt;false&lt;/eladkarakowinsets11:highResolutionScrollingAware&gt;      &lt;/asmv3:windowsSettings&gt;
    &lt;asmv3:windowsSettings&gt; &lt;eladkarakowinsets11:ultraHighResolutionScrollingAware&gt;false&lt;/eladkarakowinsets11:ultraHighResolutionScrollingAware&gt; &lt;/asmv3:windowsSettings&gt;

    &lt;!-- useful+will not break your app - better keep --&gt;
    &lt;asmv3:windowsSettings&gt; &lt;eladkarakowinsets11:printerDriverIsolation           &gt;true&lt;/eladkarakowinsets11:printerDriverIsolation&gt;             &lt;/asmv3:windowsSettings&gt;  &lt;!-- keep this true, it will make applications more stable if there is any error with printer-driver/spooler. --&gt;
    &lt;asmv3:windowsSettings&gt; &lt;eladkarakowinsets11:disableTheming                   &gt;false&lt;/eladkarakowinsets11:disableTheming&gt;                    &lt;/asmv3:windowsSettings&gt;
    &lt;asmv3:windowsSettings&gt; &lt;eladkarakowinsets11:magicFutureSetting               &gt;false&lt;/eladkarakowinsets11:magicFutureSetting&gt;                &lt;/asmv3:windowsSettings&gt;  &lt;!-- undocumented, since it does absolutly nothing (YEP!) you can make it true/false for now by it may apply a different behavior some other time, so just keep it explicitly false unless you'll like your app to stop working some day.  similar to "forbid publisher future policy yes/no".

    &lt;!-- mostly not very useful, better keep those false.   most malwares have those "true"... :/  --&gt;
    &lt;asmv3:windowsSettings&gt; &lt;eladkarakowinsets11:autoElevate                      &gt;false&lt;/eladkarakowinsets11:autoElevate&gt;                       &lt;/asmv3:windowsSettings&gt;
    &lt;asmv3:windowsSettings&gt; &lt;eladkarakowinsets11:disableWindowFiltering           &gt;false&lt;/eladkarakowinsets11:disableWindowFiltering&gt;            &lt;/asmv3:windowsSettings&gt;  &lt;!-- keep "false", unless this is a remote-desktop or a malware :/ --&gt;
  &lt;/asmv3:application&gt;
&lt;!-- ------------------------------------------------------------------------------------------------------- --&gt;
  &lt;!-- Limit execution to a minimal-version of the Windows operation-system --&gt;
  &lt;dependency&gt;
    &lt;dependentOS&gt;
      &lt;osVersionInfo supportUrl="https://www.microsoft.com/" description="Microsoft Windows Operating System"&gt;
        &lt;os majorVersion="5" minorVersion="1" buildNumber="0" servicePackMajor="0" /&gt; &lt;!-- 4.10=Win98 5.1=WinXP 6.1=Win7 --- https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions --&gt;
      &lt;/osVersionInfo&gt;
    &lt;/dependentOS&gt;
  &lt;/dependency&gt;
&lt;!-- ------------------------------------------------------------------------------------------------------- --&gt;
  &lt;!-- allow support for advanced features for future versions. if not used the max is current os-version. --&gt;
  &lt;compatibility xmlns="urn:schemas-microsoft-com:compatibility.v1"&gt;
    &lt;application&gt;
      &lt;supportedOS Id="{8e0f7a12-bfb3-4fe8-b9a5-48fd50a15a9a}"&gt;&lt;/supportedOS&gt; &lt;!-- Windows 10 and Windows Server 2016      --&gt;
      &lt;supportedOS Id="{1f676c76-80e1-4239-95bb-83d0f6d0da78}"&gt;&lt;/supportedOS&gt; &lt;!-- Windows 8.1 and Windows Server 2012 R2  --&gt;
      &lt;supportedOS Id="{4a2f28e3-53b9-4441-ba9c-d69d4a4a6e38}"&gt;&lt;/supportedOS&gt; &lt;!-- Windows 8 and Windows Server 2012       --&gt;
      &lt;supportedOS Id="{35138b9a-5d96-4fbd-8e2d-a2440225f93a}"&gt;&lt;/supportedOS&gt; &lt;!-- Windows 7 and Windows Server 2008 R2    --&gt;
      &lt;supportedOS Id="{e2011457-1546-43c5-a5fe-008deee3d3f0}"&gt;&lt;/supportedOS&gt; &lt;!-- Windows Vista and Windows Server 2008   --&gt;
    &lt;/application&gt;
  &lt;/compatibility&gt;
&lt;!-- ------------------------------------------------------------------------------------------------------- --&gt;
  &lt;!-- keep this (will allow window-themes in older applications) --&gt;
  &lt;dependency&gt;
    &lt;dependentAssembly dependencyType="preRequisite" allowDelayedBinding="false"&gt;
      &lt;assemblyIdentity type="win32" processorArchitecture="msil" language="neutral"
                        name="Microsoft.Windows.Common-Controls" version="6.0.0.0" publicKeyToken="6595b64144ccf1df"&gt;&lt;/assemblyIdentity&gt;
    &lt;/dependentAssembly&gt;
  &lt;/dependency&gt;
&lt;!-- ------------------------------------------------------------------------------------------------------- --&gt;
  &lt;!-- remove this, unless the app is a C++ applications: get whatever VC-libs from https://github.com/eladkarako/vc-archive/ ,  place in same folder, change version accordingly.   for production:"CRT"/"MFC", for debug optionally change to: "DebugCRT"/"DebugMFC" .  --&gt;
  &lt;dependency&gt;
    &lt;dependentAssembly dependencyType="preRequisite" allowDelayedBinding="false"&gt;
      &lt;assemblyIdentity type="win32" processorArchitecture="msil" language="neutral"
                        name="Microsoft.VC90.CRT" version="9.0.30729.6161" publicKeyToken="1fc8b3b9a1e18e3b"&gt;&lt;/assemblyIdentity&gt;
    &lt;/dependentAssembly&gt;
  &lt;/dependency&gt;

  &lt;dependency&gt;
    &lt;dependentAssembly dependencyType="preRequisite" allowDelayedBinding="false"&gt;
      &lt;assemblyIdentity type="win32" processorArchitecture="*" language="*"
                        name="Microsoft.VC90.MFC" version="9.0.30729.6161" publicKeyToken="1fc8b3b9a1e18e3b"&gt;&lt;/assemblyIdentity&gt;
    &lt;/dependentAssembly&gt;
  &lt;/dependency&gt;
&lt;!-- ------------------------------------------------------------------------------------------------------- --&gt;
  &lt;!-- remove this, example for 'allowDelayedBinding' used for .Net modules to improve loading time. --&gt;
  &lt;dependency&gt;
    &lt;dependentAssembly dependencyType="preRequisite" allowDelayedBinding="true"&gt;
      &lt;assemblyIdentity name="Microsoft.Windows.CommonLanguageRuntime" version="4.0.30319.0" /&gt;
    &lt;/dependentAssembly&gt;
  &lt;/dependency&gt;
&lt;!-- ------------------------------------------------------------------------------------------------------- --&gt;
  &lt;co.v1:useManifestForTrust xmlns="urn:schemas-microsoft-com:asm.v1" /&gt;

  &lt;asmv2:trustInfo&gt;
    &lt;security&gt;
      &lt;asmv3:requestedPrivileges&gt;
        &lt;requestedExecutionLevel level="asInvoker" uiAccess="false" /&gt; &lt;!-- initial request permissions. keep "asInvoker" unless you're a malware.. (requireAdministrator|highestAvailable are preserved for installers and malwares. oneclick-schema only supports starting as "asInvoker"    ---- available values:  asInvoker|requireAdministrator|highestAvailable  -   adding requestedExecutionLevel node will also remove the file/registry-virtualization used for backward-compatibility. --&gt;
      &lt;/asmv3:requestedPrivileges&gt;

      &lt;!-- this whole "applicationRequestMinimum" block can be removed, it should allow running/web-access to local intra-net and web without limitations of the new code-execution limit.. --&gt;
      &lt;applicationRequestMinimum&gt;
        &lt;PermissionSet id="FullTrust" Unrestricted="true" /&gt;
        &lt;defaultAssemblyRequest permissionSetReference="FullTrust" /&gt; &lt;!-- grant access to run as in the "FullTrust security zone". --&gt;
      &lt;/applicationRequestMinimum&gt;
    &lt;/security&gt;
  &lt;/asmv2:trustInfo&gt;
&lt;!-- ------------------------------------------------------------------------------------------------------- --&gt;
&lt;/asmv1:assembly&gt;
&lt;!--
╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ References                                                                                                                    ║
╟───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ "Application Manifests":                                                                                                      ║
║   https://msdn.microsoft.com/en-us/library/windows/desktop/aa374191(v=vs.85).aspx                                             ║
║ "Schema For Your EXE":                                                                                                        ║
║   https://icompile.eladkarako.com/schema-for-your-exe/                                                                         ║
║ "Manifest Generation in Visual Studio":                                                                                       ║
║   https://msdn.microsoft.com/en-us/library/ms235229.aspx                                                                      ║
║ "Targeting your application for Windows"                                                                                      ║
║   https://msdn.microsoft.com/en-us/library/windows/desktop/dn481241(v=vs.85).aspx                                             ║
║ "Manifest File Schema"                                                                                                        ║
║   https://msdn.microsoft.com/en-us/library/windows/desktop/aa375635(v=vs.85).aspx                                             ║
║ "Assembly Manifests"                                                                                                          ║
║   https://msdn.microsoft.com/en-us/library/windows/desktop/aa374219(v=vs.85).aspx                                             ║
║ "ClickOnce Application Manifest"                                                                                              ║
║   https://msdn.microsoft.com/en-us/library/ws1c2fch.aspx                                                                      ║
║ "ProcessorArchitecture Enumeration"                                                                                           ║
║   https://msdn.microsoft.com/en-us/library/system.reflection.processorarchitecture(v=vs.110).aspx                             ║
║ "XAML Namespaces and Namespace Mapping for WPF XAML"                                                                          ║
║   https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/xaml-namespaces-and-namespace-mapping-for-wpf-xaml           ║
║     '..Within the namespace declarations in the root tag of many XAML files,                                                  ║
║        you will see that there are typically two XML namespace declarations.                                                  ║
║        The first declaration maps the overall WPF client / framework XAML namespace as the default:                           ║
║        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"                                                      ║
║        The second declaration maps a separate XAML namespace, mapping it (typically) to the x: prefix.                        ║
║        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"                                                                 ║
║        The relationship between these declarations is that the x: prefix mapping                                              ║
║        supports the intrinsics that are part of the XAML language definition,                                                 ║
║        and WPF is one implementation that uses XAML as a language and defines a vocabulary                                    ║
║        of its objects for XAML. Because the WPF vocabulary's usages will be far more common than                              ║
║        the XAML intrinsics usages, the WPF vocabulary is mapped as the default..'                                             ║
║     so, "xmlns" vs. "prefix:" --- same! xmlns will override/merge/adds (..more powerful) than "prefix:"                       ║
║ "&lt;trustInfo&gt; Element (ClickOnce Application)"                                                                                 ║
║   https://msdn.microsoft.com/en-us/library/6ad1fshk.aspx                                                                      ║
║ "Code Access Security"                                                                                                        ║
║   https://msdn.microsoft.com/en-us/library/930b76w0(v=vs.90).aspx                                                             ║
║   https://msdn.microsoft.com/en-us/library/930b76w0(VS.71).aspx (older for reference..)                                       ║
║ "Writing DPI-Aware Desktop and Win32 Applications"                                                                            ║
║   https://msdn.microsoft.com/en-us/library/windows/desktop/dn469266(v=vs.85).aspx                                             ║
║ "&lt;assemblyIdentity&gt; Element for &lt;runtime&gt;"                                                                                    ║
║   https://docs.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/runtime/assemblyidentity-element-for-runtime   ║
║ "Runtime Settings Schema"                                                                                                     ║
║   https://docs.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/runtime/index                                  ║
║ "&lt;assembly&gt; Element (ClickOnce Deployment)"                                                                                   ║
║   https://msdn.microsoft.com/en-us/library/b44eddkw.aspx                                                                      ║
║ "ClickOnce Deployment Manifest"                                                                                               ║
║   https://msdn.microsoft.com/en-us/library/k26e96zf.aspx                                                                      ║
║ "Publishing ClickOnce Applications"                                                                                           ║
║   https://msdn.microsoft.com/en-us/library/748fh114.aspx                                                                      ║
║ "Troubleshooting C/C++ Isolated Applications and Side-by-side Assemblies"                                                     ║
║   https://msdn.microsoft.com/en-us/library/ms235342.aspx                                                                      ║
║ "Scenarios for Deployment Examples"                                                                                           ║
║   https://msdn.microsoft.com/en-us/library/aa985617(v=vs.90).aspx                                                             ║
╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
--&gt;
</pre>

<a button id="minify_button" title="you can edit above manifest to your-liking, and click minify..." href="javascript:self.minify_manifest();">minify...</a>

<pre>&lt;?xml version="1.0" encoding="utf-8"?&gt;&lt;asmv1:assembly xmlns="urn:schemas-microsoft-com:asm.v2" manifestVersion="1.0" xmlns:asmv1="urn:schemas-microsoft-com:asm.v1" xmlns:asmv2="urn:schemas-microsoft-com:asm.v2" xmlns:asmv3="urn:schemas-microsoft-com:asm.v3" xmlns:eladkarakowinsets05="http://schemas.microsoft.com/SMI/2005/WindowsSettings" xmlns:eladkarakowinsets11="http://schemas.microsoft.com/SMI/2011/WindowsSettings" xmlns:eladkarakowinsets11="http://schemas.microsoft.com/SMI/2016/WindowsSettings" xmlns:eladkarakowinsets11="http://schemas.microsoft.com/SMI/2017/WindowsSettings" xmlns:co.v1="urn:schemas-microsoft-com:clickonce.v1" xmlns:co.v2="urn:schemas-microsoft-com:clickonce.v2" xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" xmlns:xrml="urn:mpeg:mpeg21:2003:01-REL-R-NS" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:schemas-microsoft-com:asm.v1 assembly.adaptive.xsd"&gt;&lt;asmv1:assemblyIdentity type="win32" language="neutral" culture="neutral" processorArchitecture="msil" name="myfile.exe" version="1.2.3.4" publicKeyToken="0000000000000000"/&gt;&lt;entryPoint&gt;&lt;assemblyIdentity language="neutral" culture="neutral" processorArchitecture="msil" name="myfile" version="1.2.3.4"/&gt;&lt;commandLine file="myfile.exe" parameters=""/&gt;&lt;/entryPoint&gt;&lt;file name="myfile.exe"/&gt;&lt;asmv1:description asmv2:publisher="Elad Karako" asmv2:product="file-description (myfile.exe)" asmv2:supportUrl="https://icompile.eladkarako.com/schema-manifest-for-your-exe/"&gt;same file-description from before&lt;/asmv1:description&gt;&lt;asmv3:application&gt;&lt;asmv3:windowsSettings&gt;&lt;eladkarakowinsets05:dpiAware &gt;true/PM&lt;/eladkarakowinsets05:dpiAware&gt;&lt;/asmv3:windowsSettings&gt;&lt;asmv3:windowsSettings&gt;&lt;eladkarakowinsets16:dpiAwareness &gt;PerMonitorV2,PerMonitor&lt;/eladkarakowinsets16:dpiAwareness&gt;&lt;/asmv3:windowsSettings&gt;&lt;asmv3:windowsSettings&gt;&lt;eladkarakowinsets17:gdiScaling &gt;true&lt;/eladkarakowinsets17:gdiScaling&gt;&lt;/asmv3:windowsSettings&gt;&lt;asmv3:windowsSettings&gt;&lt;eladkarakowinsets11:highResolutionScrollingAware &gt;false&lt;/eladkarakowinsets11:highResolutionScrollingAware&gt;&lt;/asmv3:windowsSettings&gt;&lt;asmv3:windowsSettings&gt;&lt;eladkarakowinsets11:ultraHighResolutionScrollingAware&gt;false&lt;/eladkarakowinsets11:ultraHighResolutionScrollingAware&gt;&lt;/asmv3:windowsSettings&gt;&lt;asmv3:windowsSettings&gt;&lt;eladkarakowinsets11:printerDriverIsolation &gt;true&lt;/eladkarakowinsets11:printerDriverIsolation&gt;&lt;/asmv3:windowsSettings&gt;&lt;asmv3:windowsSettings&gt;&lt;eladkarakowinsets11:disableTheming &gt;false&lt;/eladkarakowinsets11:disableTheming&gt;&lt;/asmv3:windowsSettings&gt;&lt;asmv3:windowsSettings&gt;&lt;eladkarakowinsets11:magicFutureSetting &gt;false&lt;/eladkarakowinsets11:magicFutureSetting&gt;&lt;/asmv3:windowsSettings&gt;&lt;asmv3:windowsSettings&gt;&lt;eladkarakowinsets11:autoElevate &gt;false&lt;/eladkarakowinsets11:autoElevate&gt;&lt;/asmv3:windowsSettings&gt;&lt;asmv3:windowsSettings&gt;&lt;eladkarakowinsets11:disableWindowFiltering &gt;false&lt;/eladkarakowinsets11:disableWindowFiltering&gt;&lt;/asmv3:windowsSettings&gt;&lt;/asmv3:application&gt;&lt;dependency&gt;&lt;dependentOS&gt;&lt;osVersionInfo supportUrl="https://www.microsoft.com/" description="Microsoft Windows Operating System"&gt;&lt;os majorVersion="5" minorVersion="1" buildNumber="0" servicePackMajor="0"/&gt;&lt;/osVersionInfo&gt;&lt;/dependentOS&gt;&lt;/dependency&gt;&lt;compatibility xmlns="urn:schemas-microsoft-com:compatibility.v1"&gt;&lt;application&gt;&lt;supportedOS Id="{8e0f7a12-bfb3-4fe8-b9a5-48fd50a15a9a}"&gt;&lt;/supportedOS&gt;&lt;supportedOS Id="{1f676c76-80e1-4239-95bb-83d0f6d0da78}"&gt;&lt;/supportedOS&gt;&lt;supportedOS Id="{4a2f28e3-53b9-4441-ba9c-d69d4a4a6e38}"&gt;&lt;/supportedOS&gt;&lt;supportedOS Id="{35138b9a-5d96-4fbd-8e2d-a2440225f93a}"&gt;&lt;/supportedOS&gt;&lt;supportedOS Id="{e2011457-1546-43c5-a5fe-008deee3d3f0}"&gt;&lt;/supportedOS&gt;&lt;/application&gt;&lt;/compatibility&gt;&lt;dependency&gt;&lt;dependentAssembly dependencyType="preRequisite" allowDelayedBinding="false"&gt;&lt;assemblyIdentity type="win32" processorArchitecture="msil" language="neutral" name="Microsoft.Windows.Common-Controls" version="6.0.0.0" publicKeyToken="6595b64144ccf1df"&gt;&lt;/assemblyIdentity&gt;&lt;/dependentAssembly&gt;&lt;/dependency&gt;&lt;dependency&gt;&lt;dependentAssembly dependencyType="preRequisite" allowDelayedBinding="false"&gt;&lt;assemblyIdentity type="win32" processorArchitecture="msil" language="neutral" name="Microsoft.VC90.CRT" version="9.0.30729.6161" publicKeyToken="1fc8b3b9a1e18e3b"&gt;&lt;/assemblyIdentity&gt;&lt;/dependentAssembly&gt;&lt;/dependency&gt;&lt;dependency&gt;&lt;dependentAssembly dependencyType="preRequisite" allowDelayedBinding="false"&gt;&lt;assemblyIdentity type="win32" processorArchitecture="*" language="*" name="Microsoft.VC90.MFC" version="9.0.30729.6161" publicKeyToken="1fc8b3b9a1e18e3b"&gt;&lt;/assemblyIdentity&gt;&lt;/dependentAssembly&gt;&lt;/dependency&gt;&lt;dependency&gt;&lt;dependentAssembly dependencyType="preRequisite" allowDelayedBinding="true"&gt;&lt;assemblyIdentity name="Microsoft.Windows.CommonLanguageRuntime" version="4.0.30319.0"/&gt;&lt;/dependentAssembly&gt;&lt;/dependency&gt;&lt;co.v1:useManifestForTrust xmlns="urn:schemas-microsoft-com:asm.v1"/&gt;&lt;asmv2:trustInfo&gt;&lt;security&gt;&lt;asmv3:requestedPrivileges&gt;&lt;requestedExecutionLevel level="asInvoker" uiAccess="false"/&gt;&lt;/asmv3:requestedPrivileges&gt;&lt;applicationRequestMinimum&gt;&lt;PermissionSet id="FullTrust" Unrestricted="true"/&gt;&lt;defaultAssemblyRequest permissionSetReference="FullTrust"/&gt;&lt;/applicationRequestMinimum&gt;&lt;/security&gt;&lt;/asmv2:trustInfo&gt;&lt;/asmv1:assembly&gt;</pre>

<hr/>

Using the manifest can be "side-by-side" or embedding it as resource-24 into the exe or dll,
for more information see: <a href="https://icompile.eladkarako.com/compile-schema-manifest-for-exe/">Compile Schema-Manifest For EXE</a>, it includes a trick to update the resources without the need to recompile, or even use any of the official tool.


<pre><script type="text/javascript">
self.minify_manifest = function minify_manifest(){ "use strict";
  var source = document.querySelector('[id^="schema_source"]')
    , target = document.querySelector('[id^="schema_target"]')
    , button = document.querySelector('[id^="minify_button"]')
    , s      = source.innerText
    ;

  if(null === source || null === target || null === button) return;

  while(true){  //remove multiline HTML-comments
    var start,end;
    start = s.indexOf("<!--");
    if(-1 === start) break;
    end = s.indexOf("-->",start)
    if(-1 === end)   break;
    if(end < start)  break;
    s = s.substring(0,start) + s.substring(end+3)
  }
  s = s.replace(/[\\
]+/g  , " ")    //remove new-lines
       .replace(/\\s{2,}/g   , " ")    //repeating whitespace
       .replace(/\\>\\s+\\</g  ,"><")    //whitespace between tags
       .replace(/\\s+\\/\\>/g  ,"/>")    //space before self-closing tag
       .replace(/^\\s+/g     ,  "")    //trim (start)
       .replace(/\\s+$/g     ,  "")    //trim (end)
       ;
  target.innerText = s;
}
</script></pre>



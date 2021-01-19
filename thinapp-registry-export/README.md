Say you want to convert <a href="https://www.vmware.com/products/thinapp.html" target="_blank">VMWare's ThinApp</a> <sub>(formerly known as <em><a href="http://www.vmware.com/company/news/releases/thinstall.html" target="_blank">Thinstall</a></em>)</sub> Registry,
From the sanbox-virtual format (those text files in your <code>capture/project-name</code> folder) To something a human can be easily read, say, a windows registry file.

Why? well.. maybe you've just captured a setup process in-order to check what has been changed on your operation-system.

<blockquote>
A really common reason to use ThinApp without actually building anything at the end, at least among the <em>VM-savvy engineers</em> is for the sake of tracking the changes to the operation-system, in hope of simplifying installations, in cases all you may need is a pair of exe-and-reg files and no need for an overkill of sandboxing an entire application + virtualapp-engine.
~
ThinApp does a very good job of capturing even the deepest registry changes (including those of permission limitation or ones which does not "really exist", such as soft symbolic-linked keys for example under <code>HKEY_USERS</code> (which are common enough).
</blockquote>

<blockquote>
Another way of comparing registry changes including dumping the entire registry (before and after..) and comparing the the <code>.REG</code> files using a program such as <a href="http://www.scootersoftware.com/" target="_blank">BeyondCompare</a>.

A similar method but somehow slightly easier is the usage of <a href="http://www.torchsoft.com/en/rw_information.html" target="_blank">Registry-Workshop</a>, and the "before" and "after" snapshots feature, following the built-in compare-engine which is pretty much a nice wrap around the same thing (above) except using the program's internal-compare engine which also allows to jump-into the inspected values, sync changes, etc...
</blockquote>

So..

I've captured a nice little freeware called <a href="https://www.foxitsoftware.com" target="_blank">foxit PDF</a>
and got the familiar folder structure (before building anything!)

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key1.png" alt="icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key1" width="565" height="318"/>

If you'll have a look <sup>(just a look, don't worry..)</sup>
inside the <code>build.bat</code> batch-file,
You'll see part of the command we'll going to use, which is actually part of creating the virtual-sandbox,
in-particularity- the REGISTRY part:

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key2_batch_look.png" alt="icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key2_batch_look" width="972" height="381"/>

After the hint, it is time for the solution walk-through:

<ol>
<li>
Under your ThinApp folder (same level where you'll find the <img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key3_Setup-Capture_exe.png" alt="Setup Capture.exe file" width="195" height="87" /> create a new folder, named <code>reg_convert</code>.
<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_folder1.png" alt="icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_folder1" width="553" height="428" />
</li>
<li>
Under <code>reg_convert</code> create two folder named <code>in</code> and <code>out</code>
<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_folder2.png" alt="icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_folder2" width="576" height="189"/>
</li>
<li>
Under <code>in</code> folder, copy the <code>Package.ini</code> from your captured-package,
or use this generic, minimal <code>Package.ini</code>

<blockquote>you only need the part related to setup-capture, mostly the versioning of the capturing engine of ThinApp, and the code-page [language] of <code>1033</code> [English] might be useful in-case you have registry keys with foreign-characters, which in this case you might want to have a look at the values of one of your original captured <code>Package.ini</code> files, or Google it.. <code>1037</code> is Hebrew :]</blockquote>

<pre><span style='color:#7f9fbf; font-weight:bold; '>[Compression]</span>
CompressionType<span style='color:#808030; '>=</span>None

<span style='color:#7f9fbf; font-weight:bold; '>[Isolation]</span>
DirectoryIsolationMode<span style='color:#808030; '>=</span>Merged

<span style='color:#7f9fbf; font-weight:bold; '>[BuildOptions]</span>
<span style='color:#696969; '>;-------- Parameters used only during Setup Capture  ----------</span>
AccessDeniedMsg<span style='color:#808030; '>=</span>You are not currently authorized to run this application. Please contact your administrator.
CapturedUsingVersion<span style='color:#808030; '>=</span><span style='color:#008c00; '>5</span>.<span style='color:#008c00; '>1</span>.<span style='color:#008c00; '>0</span>-<span style='color:#008c00; '>2079447</span>
CaptureProcessorArchitecture<span style='color:#808030; '>=</span><span style='color:#008c00; '>0</span>
CapturePlatformVersion<span style='color:#808030; '>=</span><span style='color:#008c00; '>0501</span>
CaptureOSArchitecture<span style='color:#808030; '>=</span><span style='color:#008c00; '>32</span>
CaptureOSMajorVersion<span style='color:#808030; '>=</span><span style='color:#008c00; '>5</span>
CaptureOSMinorVersion<span style='color:#808030; '>=</span><span style='color:#008c00; '>1</span>
CaptureOSSuite<span style='color:#808030; '>=</span><span style='color:#008c00; '>256</span>
CaptureOSProductType<span style='color:#808030; '>=</span><span style='color:#008c00; '>1</span>
CaptureOSCSDVersion<span style='color:#808030; '>=</span>Service Pack <span style='color:#008c00; '>3</span>
CaptureOSProcessorCoreCount<span style='color:#808030; '>=</span><span style='color:#008c00; '>2</span>
CaptureOSRemoteSession<span style='color:#808030; '>=</span><span style='color:#008c00; '>0</span>
CaptureOSVMwareVM<span style='color:#808030; '>=</span><span style='color:#008c00; '>1</span>
OutDir<span style='color:#808030; '>=</span>bin

AnsiCodePage<span style='color:#808030; '>=</span><span style='color:#008c00; '>1255</span>
LocaleIdentifier<span style='color:#808030; '>=</span><span style='color:#008c00; '>1033</span>

AltArchitectureShortcut<span style='color:#808030; '>=</span><span style='color:#008c00; '>0</span>
QualityReportingEnabled<span style='color:#808030; '>=</span><span style='color:#008c00; '>0</span>
</pre>

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_folder3.png" alt="icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_folder3" width="591" height="204"/>
</li>
<li>
Still under the <code>in</code> folder, you should now copy (just) the registry files (<code>.TXT</code>) from your captured project. 

You do not have to copy them all, and you are well encouraged to make them as small and lite as possible by removing values that are not needed. The smaller and fewer they'll be, the faster the entire process will be completed.

For example I'll going to remove the following "keys/values/data" since they are not needed or even related to the package itself, even more than that, those can collide with the operation-system's more recent-values (in-case I'll be building the project later..)
<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_can_make_registry_txt_files_smaller.png" alt="icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_can_make_registry_txt_files_smaller" width="1148" height="503" />
</li>
<li>
At this point, we will generate a virtual-sandbox holding just the registry values (no files), using the <code>vregtool.exe</code> command.
  <ol>
    <li>
    open up CMD and navigate to where you have your <code>vregtool.exe</code>
    (same place you'll have <code>reg_convert</code>).
    <code>cd c:\\.......\\ThinApp\\</code>
    </li>
    <li>
    run <code>vregtool.exe reg_convert\\out\eg.tvr ImportDir reg_convert\\in\\</code>,
    <img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_generate_tvr_of_just_registry_values2.png" alt="icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_generate_tvr_of_just_registry_values2" width="1014" height="133"/>
    You may ignore warnings, or remove any extra-empty lines at the bottom of the txt files,
    It will take few seconds, and you'll find the <code>tvr</code> file under the <code>out</code> folder.
    <img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_generate_tvr_result.png" alt="icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_generate_tvr_result" width="601" height="185"/>
    </li>
  <ol>
</li>
<li>
Almost done, we will, now, extract the actual registry key (in the standard windows format) from the virtual-sandbox, exporting it to the same <code>out</code> folder.

run:<code>vregtool.exe reg_convert\\out\eg.tvr ExportReg reg_convert\\out\egistry.reg</code>
<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_generate_final_registry_key_result.png" alt="icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_generate_final_registry_key_result" width="967" height="94" />
You'll find your result file under the <code>out</code> folder as well as the old <code>tvr</code> file.
<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_generate_final_registry_key_result_in_folder.png" alt="icompile.eladkarako.com_thinapp_thinstall_virtual_registry_tvr_convert_to_reg_key_generate_final_registry_key_result_in_folder" width="592" height="196"/>
</li>
<li>
Done.

naturally a cleanup will be required in-order to use the same method of converting <code>txt</code>-<code>tvr</code>-<code>reg</code>,
remove the <code>txt</code> files under <code>in</code> folder, keep <code>Package.ini</code> file there to be used the next time.
you can safely remove the entire content of the <code>out</code> folder (the <code>reg.tvr</code>, and once you'll be done with it- the <code>registry.reg</code> file).

Naturally a batch file can quite easily be generated,
You can make one to drag&drop the entire captured-folder, allowing automated copy, generating the copying back the result to your captured-project, in same place as the <code>txt</code> files, to keep things organised by project. :)
</li>
</ol>

Hope it helps ! :]

Happy engineering day :]]
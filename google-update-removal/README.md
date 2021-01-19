<em>Instructions For Power-Users.</em>
<!--more-->

copy&paste to a registry file (extension .reg)
follow the instructions in the comment (#4 is to run the file).

<pre>
Windows Registry Editor Version 5.00
<span style='color:#696969; '>;</span>
<span style='color:#696969; '>;-------------------------------------------------------------------------------------------------------------------------------------------------</span>
<span style='color:#696969; '>; 1. open "C:\\Windows\\System32\\Tasks" and delete all file starting with "GoogleUpdateTask......."</span>
<span style='color:#696969; '>;         + "C:\\Windows\\Tasks\\GoogleUpdateTaskMachineCore.job"</span>
<span style='color:#696969; '>;         + "C:\\Windows\\Tasks\\GoogleUpdateTaskMachineUA.job"</span>
<span style='color:#696969; '>;         + "C:\\Windows\\Tasks\\GoogleUpdateTaskUserS-1...........job"</span>

<span style='color:#696969; '>; 2. remove folder and files: "C:\\Users\\Elad\\AppData\\Local\\Google\\Update\\"</span>
<span style='color:#696969; '>;                             "C:\\Program Files\\Google\\Update\\"</span>
<span style='color:#696969; '>;                             "C:\\Program Files (x86)\\Google\\Update\\"</span>
<span style='color:#696969; '>; 3. run CCleaner: registry cleanup.</span>
<span style='color:#696969; '>; 4. run the following file.</span>
<span style='color:#696969; '>; 5. search the registry (letter-case not important) for keys+data+value with: </span>
<span style='color:#696969; '>;      "goopdate", "google update", "googleupdate", "google/update", "google\\update", "google\\\\update", "google.update"</span>
<span style='color:#696969; '>;      *optinal searching for: "OneClick", "igoogle",</span>
<span style='color:#696969; '>;      *more risky (generic) "update3", "GoogleCrashHandler", "psmachine", "psuser" and "Google", and ''looking into''</span>
<span style='color:#696969; '>;-------------------------------------------------------------------------------------------------------------------------------------------------</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\AppID\\GoogleUpdate.exe]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{2F0E2680-9FF5-43C0-B76E-114A56E93598}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{003EB908-0B86-44F8-86F0-B19A7022449C}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{6F8BD55B-E83D-4A47-85BE-81FFA8057A69}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{7DE94008-8AFD-4C70-9728-C6FBFFF6A73E}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{8A1D4361-2C08-4700-A351-3EAA9CBFF5E4}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{9B2340A0-4068-43D6-B404-32E27217859D}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{9D6AA569-9F30-41AD-885A-346685C74928}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{17CB3F3C-A6D3-486B-B044-CBCAE56EC2C0}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{51F9E8EF-59D7-475B-A106-C7EA6F30C119}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{53AA8AFA-807E-4272-87D9-BBA51A9DB376}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{59B55F04-DE14-4BB8-92FF-C4A22EF2E5F4}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{598FE0E5-E02D-465D-9A9D-37974A28FD42}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{022105BD-948A-40C9-AB42-A3300DDF097F}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{22181302-A8A6-4F84-A541-E5CBFC70CC43}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{25461599-633D-42B1-84FB-7CD68D026E53}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{61095308-52CE-433B-9A66-57B9E5835B60}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{A7F1AD6F-5AF8-4ABA-8BC7-EB1D2A42401A}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{AAD4AE2E-D834-46D4-8B09-490FAC9C722B}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{ABC01078-F197-4B0B-ADBC-CFE684B39C82}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{AF8B3E35-A68A-4788-BDDA-76D8AE1C4064}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{B3D28DBD-0DFA-40E4-8071-520767BADC7E}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{BFB16C71-7209-4534-8A47-AD6BABC3A66F}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{C442AC41-9200-4770-8CC0-7CDB4F245C55}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{C3101A8B-0EE1-4612-BFE9-41FFC1A3C19D}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{CB492AF1-2CEF-4E58-BE47-471C77D0C8BA}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{D580254F-5E17-4AE0-9C41-60A0526A8ED6}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{E3C8EDEA-D6E5-49DF-A344-FE31D1F3F412}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{E8CF3E55-F919-49D9-ABC0-948E6CB34B9F}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\CLSID\\{E67BE843-BBBE-4484-95FB-05271AE86750}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Google.OneClickCtrl.9]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Google.OneClickProcessLauncherMachine.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Google.OneClickProcessLauncherMachine]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Google.OneClickProcessLauncherUser.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Google.OneClickProcessLauncherUser]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Google.Update3WebControl.3]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.CoCreateAsync.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.CoCreateAsync]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.CoreClass.1]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.CoreClass]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.CoreMachineClass.1]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.CoreMachineClass]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.CredentialDialogMachine.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.CredentialDialogMachine]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.CredentialDialogUser.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.CredentialDialogUser]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.OnDemandCOMClassMachine.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.OnDemandCOMClassMachine]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.OnDemandCOMClassMachineFallback.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.OnDemandCOMClassMachineFallback]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.OnDemandCOMClassSvc.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.OnDemandCOMClassSvc]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.OnDemandCOMClassUser.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.OnDemandCOMClassUser]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.ProcessLauncher.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.ProcessLauncher]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.Update3COMClassService.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.Update3COMClassService]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.Update3COMClassUser.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.Update3COMClassUser]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.Update3WebMachine.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.Update3WebMachine]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.Update3WebMachineFallback.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.Update3WebMachineFallback]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.Update3WebSvc.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.Update3WebSvc]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.Update3WebUser.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\GoogleUpdate.Update3WebUser]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Installer\\Products\\A089CE062ADB6BC44A720BA745894BAC]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Interface\\{2D363682-561D-4C3A-81C6-F2F82107562A}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Interface\\{5CCCB0EF-7073-4516-8028-4C628D0C8AAB}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Interface\\{6DB17455-4E85-46E7-9D23-E555E4B005AF}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Interface\\{31AC3F11-E5EA-4A85-8A3D-8E095A39C27B}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Interface\\{494B20CF-282E-4BDD-9F5D-B70CB09D351E}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Interface\\{909489C2-85A6-4322-AA56-D25278649D67}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\MIME\\Database\\Content Type\\application/x-vnd.google.oneclickctrl.3]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\MIME\\Database\\Content Type\\application/x-vnd.google.oneclickctrl.9]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\MIME\\Database\\Content Type\\application/x-vnd.google.update3webcontrol.3]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{003EB908-0B86-44F8-86F0-B19A7022449C}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{4EB61BAC-A3B6-4760-9581-655041EF4D69}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{17CB3F3C-A6D3-486B-B044-CBCAE56EC2C0}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{53AA8AFA-807E-4272-87D9-BBA51A9DB376}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{534F5323-3569-4F42-919D-1E1CF93E5BF6}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{9465B4B4-5216-4042-9A2C-754D3BCDC410}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{61095308-52CE-433B-9A66-57B9E5835B60}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{A7F1AD6F-5AF8-4ABA-8BC7-EB1D2A42401A}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{AF8B3E35-A68A-4788-BDDA-76D8AE1C4064}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{C442AC41-9200-4770-8CC0-7CDB4F245C55}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{C3101A8B-0EE1-4612-BFE9-41FFC1A3C19D}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{D580254F-5E17-4AE0-9C41-60A0526A8ED6}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{E3C8EDEA-D6E5-49DF-A344-FE31D1F3F412}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\CLSID\\{E225E692-4B47-4777-9BED-4FD7FE257F0E}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\Interface\\{2D363682-561D-4C3A-81C6-F2F82107562A}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\Interface\\{5CCCB0EF-7073-4516-8028-4C628D0C8AAB}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\Interface\\{5CD52983-9449-11D2-963A-00C04F79ADF0}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\Interface\\{6DB17455-4E85-46E7-9D23-E555E4B005AF}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\Interface\\{31AC3F11-E5EA-4A85-8A3D-8E095A39C27B}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\Interface\\{60ACA18E-54E6-43F8-A1A4-C4176B6C994E}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\Interface\\{60B5A730-ADDF-4436-8CA7-5769E2D1FFA4}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CLASSES_ROOT\\Wow6432Node\\Interface\\{494B20CF-282E-4BDD-9F5D-B70CB09D351E}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\CLSID\\{59B55F04-DE14-4BB8-92FF-C4A22EF2E5F4}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\CLSID\\{71FDCAEA-B6F2-4B6C-A18C-6C85F0E4662F}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\CLSID\\{BADD6576-37E3-4158-B34F-CEBB76B22615}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\CLSID\\{E8CF3E55-F919-49D9-ABC0-948E6CB34B9F}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Google.OneClickCtrl.9]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Google.OneClickProcessLauncherUser.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Google.OneClickProcessLauncherUser]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Google.Update3WebControl.3]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\GoogleUpdate.CredentialDialogUser.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\GoogleUpdate.CredentialDialogUser]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\GoogleUpdate.OnDemandCOMClassUser.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\GoogleUpdate.OnDemandCOMClassUser]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\GoogleUpdate.Update3COMClassUser.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\GoogleUpdate.Update3COMClassUser]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\GoogleUpdate.Update3WebUser.1.0]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\GoogleUpdate.Update3WebUser]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Interface\\{2D363682-561D-4C3A-81C6-F2F82107562A}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Interface\\{6DB17455-4E85-46E7-9D23-E555E4B005AF}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Interface\\{31AC3F11-E5EA-4A85-8A3D-8E095A39C27B}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Interface\\{494B20CF-282E-4BDD-9F5D-B70CB09D351E}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Interface\\{909489C2-85A6-4322-AA56-D25278649D67}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Software\\Microsoft\\Windows\\CurrentVersion\\Deployment\\SideBySide\\2.0\\Components\\clic...exe_4fe91ede9f9bdca3_0001.0003_none_e0b66a25f1dbb47c]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Software\\Microsoft\\Windows\\CurrentVersion\\Deployment\\SideBySide\\2.0\\Components\\goog...app_4fe91ede9f9bdca3_0001.0003_14e64c9d5e3094de]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Software\\Microsoft\\Windows\\CurrentVersion\\Deployment\\SideBySide\\2.0\\Components\\goog...app_4fe91ede9f9bdca3_0001.0003_18dc1d113bbc0fce]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Software\\Microsoft\\Windows\\CurrentVersion\\Deployment\\SideBySide\\2.0\\Components\\goog...app_4fe91ede9f9bdca3_0001.0003_none_93002a789f922f86]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\CLSID\\{2F0E2680-9FF5-43C0-B76E-114A56E93598}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\CLSID\\{51F9E8EF-59D7-475B-A106-C7EA6F30C119}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\CLSID\\{59B55F04-DE14-4BB8-92FF-C4A22EF2E5F4}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\CLSID\\{71FDCAEA-B6F2-4B6C-A18C-6C85F0E4662F}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\CLSID\\{022105BD-948A-40C9-AB42-A3300DDF097F}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\CLSID\\{22181302-A8A6-4F84-A541-E5CBFC70CC43}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\CLSID\\{BADD6576-37E3-4158-B34F-CEBB76B22615}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\CLSID\\{C442AC41-9200-4770-8CC0-7CDB4F245C55}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\CLSID\\{C3101A8B-0EE1-4612-BFE9-41FFC1A3C19D}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\CLSID\\{E8CF3E55-F919-49D9-ABC0-948E6CB34B9F}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\CLSID\\{E67BE843-BBBE-4484-95FB-05271AE86750}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\Interface\\{2D363682-561D-4C3A-81C6-F2F82107562A}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\Interface\\{6DB17455-4E85-46E7-9D23-E555E4B005AF}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\Interface\\{31AC3F11-E5EA-4A85-8A3D-8E095A39C27B}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\Interface\\{494B20CF-282E-4BDD-9F5D-B70CB09D351E}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Classes\\Wow6432Node\\Interface\\{909489C2-85A6-4322-AA56-D25278649D67}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Google\\Update]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Microsoft\\Internet Explorer\\Low Rights\\ElevationPolicy\\{C442AC41-9200-4770-8CC0-7CDB4F245C55}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Microsoft\\Internet Explorer\\Low Rights\\ElevationPolicy\\{C3101A8B-0EE1-4612-BFE9-41FFC1A3C19D}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Ext\\PreApproved\\{C442AC41-9200-4770-8CC0-7CDB4F245C55}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\MozillaPlugins\\@tools.google.com/Google Update;version=3]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_CURRENT_USER\\Software\\MozillaPlugins\\@tools.google.com/Google Update;version=9]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Schedule\\TaskCache\\Tasks\\{24023BB8-1BF3-4722-A195-D6A9F651689A}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Schedule\\TaskCache\\Tasks\\{C6997099-AE46-43B9-B871-458DB859FD19}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Schedule\\TaskCache\\Tree\\GoogleUpdateTaskUserS-1-5-21-1109280529-701945964-1310375388-1000Core]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Installer\\UserData\\S-1-5-18\\Components\\BC5EF9E22E39F304D8F9401405A9FA48]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Installer\\UserData\\S-1-5-18\\Products\\A089CE062ADB6BC44A720BA745894BAC]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\CLSID\\{003EB908-0B86-44F8-86F0-B19A7022449C}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\CLSID\\{17CB3F3C-A6D3-486B-B044-CBCAE56EC2C0}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\CLSID\\{53AA8AFA-807E-4272-87D9-BBA51A9DB376}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\CLSID\\{61095308-52CE-433B-9A66-57B9E5835B60}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\CLSID\\{A7F1AD6F-5AF8-4ABA-8BC7-EB1D2A42401A}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\CLSID\\{AF8B3E35-A68A-4788-BDDA-76D8AE1C4064}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\CLSID\\{D580254F-5E17-4AE0-9C41-60A0526A8ED6}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\Interface\\{3D412914-1C4F-447D-80D2-E7F9BB302B05}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\Interface\\{831F99E1-2250-4065-8975-7408E726825F}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\Interface\\{909489C2-85A6-4322-AA56-D25278649D67}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\Interface\\{B35122D2-0036-4536-AEEA-EEA68E54A460}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\Interface\\{C416C376-AEC5-4443-9D90-BEBA9434763B}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\Interface\\{ef05e46f-6730-40c6-bab1-96f2a8076226}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Classes\\Interface\\{EF028154-CA20-4F73-ACBB-82451B78F1E6}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Google\\Update]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Microsoft\\Internet Explorer\\Low Rights\\ElevationPolicy\\{C442AC41-9200-4770-8CC0-7CDB4F245C55}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Microsoft\\Internet Explorer\\Low Rights\\ElevationPolicy\\{C3101A8B-0EE1-4612-BFE9-41FFC1A3C19D}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\GoogleUpdate.exe]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\{60EC980A-BDA2-4CB6-A427-B07A5498B4CA}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\MozillaPlugins\\@tools.google.com/Google Update;version=3]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\MozillaPlugins\\@tools.google.com/Google Update;version=9]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\services\\gupdate]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\services\\gupdatem]</span>

<span style='color:#696969; '>;those could not be deleted unless taken ownership first + permission.</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Schedule\\TaskCache\\Tasks\\{B22D987B-E80C-49EB-BE79-5160DF337789}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Schedule\\TaskCache\\Tasks\\{BBC1313D-2A86-42FC-881A-3F93E5CBF63D}]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Schedule\\TaskCache\\Tree\\GoogleUpdateTaskUserS-1-5-21-1109280529-701945964-1310375388-1000Core]</span>
<span style='color:#7f9fbf; font-weight:bold; '>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Schedule\\TaskCache\\Tree\\GoogleUpdateTaskUserS-1-5-21-1109280529-701945964-1310375388-1000UA]</span>

<span style='color:#7f9fbf; font-weight:bold; '>[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run]</span>
<span style='color:#0000e6; '>"Google Update"</span><span style='color:#808030; '>=</span>-
</pre>

For your convenient you may download it as a reg file (zip compressed to avoid various warnings and such..)
<a href="https://github.com/eladkarako/icompile/releases/download/latest/google_update_removal_ver20170403_.newer_version._reg.zip">https://github.com/eladkarako/icompile/releases/download/latest/google_update_removal_ver20170403_.newer_version._reg.zip</a>

An older version is also available 
<a href="https://github.com/eladkarako/icompile/releases/download/latest/google_update_removal_ver20161231_.older_version._reg.zip">https://github.com/eladkarako/icompile/releases/download/latest/google_update_removal_ver20161231_.older_version._reg.zip</a>
<img src="https://icompile.eladkarako.com/_uploads/2015/04/icompile.eladkarako.com_lenovo_tp4table_dat_trackpoint_scroll_fix2.gif" alt="icompile.eladkarako.com_lenovo_tp4table_dat_trackpoint_scroll_fix2" width="300" height="213" />

right click your editor's exe file (<code>Notepad++</code>), run as admin, open <code>C:\\Program Files\\Synaptics\\SynTP\\TP4table.dat</code>.

<!--more-->


<blockquote>
But first, apply the following registry patch,
it shown to fix some handling of GTK+ applications.
<pre>
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\\Software\\Synaptics\\SynTPEnh]
"UseScrollCursor"=dword:00000000

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Synaptics\\SynTPEnh]
"UseScrollCursor"=dword:00000000
</pre>
Which will avoid rendering the custom scroll-icon.

also, if you are looking for a simpler solution specific for notepad++,
you can disable some of the GTK+ features of notepad++, using: options-edit settings:
<img src="https://icompile.eladkarako.com/_uploads/2017/05/icompile.eladkarako.com_fix_notepad_plus_plus_using_settings.png" alt="" width="806" height="317" />

sadly it will also remove the nice little scrolling icon <img src="https://icompile.eladkarako.com/_uploads/2017/05/icompile.eladkarako.com_scroll_icon.png" alt="" width="46" height="68" /> (which I kind of like :/ )
</blockquote>


<ol code-like>
<li>
comment-out this line <code>*,*,chrome.exe,*,*,Chrome_RenderWidgetHostHWND,WheelVkey,0,9</code> and add the following just below it: <code>*,*,chrome.exe,*,*,Chrome_RenderWidgetHostHWND,WheelStd,0,9</code>
</li>
<li>add: <code>*,*,*,*,*,PROCEXPL,WheelStd,0,9</code></li>
<li>add: <code>*,*,*,*,*,Scintilla,WheelStd,0,9</code></li>
<li>add: <code>*,*,*,*,*,Notepad2U,WheelStd,0,9</code></li>
<li>add: <code>*,*,*,*,*,Notepad++,WheelStd,0,9</code></li>
<li>add: <code>*,*,*,*,*,SunAwtFrame,WheelStd,0,9</code></li>
<li>add: <code>*,*,*,*,*,SysListView32,WheelStd,0,9</code></li>
<li>add: <code>*,*,*,*,*,SysTreeView32,WheelStd,0,9</code></li>
<li>add: <code>*,*,*,*,*,ToolbarWindow32,WheelStd,0,9</code></li>
<li>add: <code>*,*,*,*,*,TreeListWindowClass,WheelStd,0,9</code></li>
<li>add: <code>*,*,*,*,*,SysTabControl32,WheelStd,0,9</code></li>
<li>add: <code>*,*,*,*,*,TListView,WheelStd,0,9</code></li>
<li>add: <code>*,*,idea.exe,*,*,*,WheelStd,0,9</code></li>
<li>add: <code>*,*,idea64.exe,*,*,*,WheelStd,0,9</code></li>
<li>add: <code>*,*,java.exe,*,*,*,WheelStd,0,9</code></li>
<li>add: <code>*,*,javaw.exe,*,*,*,WheelStd,0,9</code></li>
</ol>

I've put it right on top of the rule-list <img src="https://icompile.eladkarako.com/_uploads/2015/04/icompile.eladkarako.com_lenovo_tp4table_dat_trackpoint_scroll_fix.gif" alt="TP4table.dat with custom rules to fix lenovo scrolling trackpoint" rem-width="609" rem-height="548" class="size-full wp-image-3073" />

Go to Task-scheduler,
select the tree-node "Task Scheduler Library.
select "Synaptics TouchPad Enhancements", normally it would run on the log-on of a user, but we can end-run it manually, avoiding the need to restart the computer or log-off and on again.
right click the line, select end, right click again, select run.


another way is to use task-manager and kill all instances of <code>C:\\Program Files\\Synaptics\\SynTP\\SynTPEnh.exe</code> (kill process tree), following with navigating to <code>C:\\Program Files\\Synaptics\\SynTP</code>, right clicking <code>SynTPEnh.exe</code>, and running as admin.
this method of kill/run also solve scrolling weird behavior after the computer awakes from sleep or restored from hibernation.

the following list explains it..

<pre>
OsName | OsVersion | AppName     | TopClass | ParentClass | WindowClass            | ScrollingType | Pass | Flags         | comment                                | line                                           |
-------|-----------|-------------|----------|-------------|------------------------|---------------|------|---------------|----------------------------------------|-------------------------------------------------
*      | *         | *           | *        | *           | PROCEXPL               | WheelStd      | 1    | 9 (==1+8)     | process explorer                       | *,*,*,*,*,PROCEXPL,WheelStd,0,9
*      | *         | *           | *        | *           | Scintilla              | WheelStd      | 1    | 9 (==1+8)     | notepad2/notepad++                     | *,*,*,*,*,Scintilla,WheelStd,0,9
*      | *         | *           | *        | *           | Notepad2U              | WheelStd      | 1    | 9 (==1+8)     | notepad2                               | *,*,*,*,*,Notepad2U,WheelStd,0,9
*      | *         | *           | *        | *           | Notepad++              | WheelStd      | 1    | 9 (==1+8)     | notepad++                              | *,*,*,*,*,Notepad++,WheelStd,0,9
*      | *         | *           | *        | *           | SunAwtFrame            | WheelStd      | 1    | 9 (==1+8)     | java (for example: jetbrains editor)   | *,*,*,*,*,SunAwtFrame,WheelStd,0,9
*      | *         | *           | *        | *           | SysListView32          | WheelStd      | 1    | 9 (==1+8)     | Windows's component                    | *,*,*,*,*,SysListView32,WheelStd,0,9
*      | *         | *           | *        | *           | SysTreeView32          | WheelStd      | 1    | 9 (==1+8)     | Windows's component                    | *,*,*,*,*,SysTreeView32,WheelStd,0,9
*      | *         | *           | *        | *           | ToolbarWindow32        | WheelStd      | 1    | 9 (==1+8)     | Windows's component                    | *,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*      | *         | *           | *        | *           | TreeListWindowClass    | WheelStd      | 1    | 9 (==1+8)     | Windows's component                    | *,*,*,*,*,TreeListWindowClass,WheelStd,0,9
*      | *         | *           | *        | *           | SysTabControl32        | WheelStd      | 1    | 9 (==1+8)     | Windows's component                    | *,*,*,*,*,SysTabControl32,WheelStd,0,9
*      | *         | idea.exe    | *        | *           | *                      | WheelStd      | 0    | 9 (==1+8)     | Jetbrains IntelliJ                     | *,*,idea.exe,*,*,*,WheelStd,0,9
*      | *         | idea64.exe  | *        | *           | *                      | WheelStd      | 0    | 9 (==1+8)     | Jetbrains IntelliJ                     | *,*,idea64.exe,*,*,*,WheelStd,0,9
*      | *         | java.exe    | *        | *           | *                      | WheelStd      | 0    | 9 (==1+8)     | Java                                   | *,*,java.exe,*,*,*,WheelStd,0,9
*      | *         | javaw.exe   | *        | *           | *                      | WheelStd      | 0    | 9 (==1+8)     | Java                                   | *,*,javaw.exe,*,*,*,WheelStd,0,9
</pre>

according to the (very limited) ""documentation"" at the head of the <code>TP4table.dat</code> file:
<pre>
; Record Format
; OsName,OsVersion,AppName,TopClass,ParentClass,WindowClass,ScrollingType,Pass,Exit
;
; OS Names           : * WIN NT
; WIN OS Versions    : * 95  98    ; NT OS Versions     : * 4   5
; Application Name   : * string
; Top Class Name     : * string
; Parent Class Name  : * string
; WindowClass Name   : * string
; Scrolling Types    : Standard WheelVkey WheelStd TwoParents VkKeys SendInput None
; Pass               : 0 Use 0 to over-ride built-in program logic
;                    : 1 Use 1 when everything else has failed
; Flags              : 0 Don't exit function after match has succeed
;                    : 1 Exit function after match has succeeded
;                    : 2 Special check for FindHorzProc (SB_HORZ) that
;                        requires that the CLIPCHILDREN flag not be set in
;                        a horiz scroll bar window
;                    : One or both of these flags should be specified
;                    : 4 Rule applies to 2 button Trackpoint system
;                    : 8 Rule applies to 3 button Trackpoint system
</pre>

the last part is "EXIT" or "FLAGS" (or "exit flags"..), which is the sum (as in number..) of numbers 0,1,2,4,8.

<blockquote style="rgba(223,210,161,.5);">the program starts by subtracting 8 (if possible, if not it reaches for 4 or 2 or 1) then 4 (if possible, if not it reaches for 2 or 1) then 2 (if possible, if not it reaches for 1) then 1 (if possible).
if subtracting "works" the flag is ON.
the maximum is 15 (0+1+2+4+8).

so the flag <code>13</code> is 8 + 4 + 1 (Rule applies to 3 button Trackpoint system, Rule applies to 2 button Trackpoint system, Exit function after match has succeeded).

and the flag <code>9</code> is 8 + 1 (Rule applies to 3 button Trackpoint system, Exit function after match has succeeded) - this one is the most common flag combination.
</blockquote>



<pre>
C:\\Program Files\\Synaptics
|   
\\---SynTP
        InstNT.exe
        SmbDrv.ini
        Syn2FingerHScrolling.wmv
        Syn2FingerHScrollingNB_win8.wmv
        Syn2FingerScrolling.wmv
        Syn2FingerScrollingNB_win8.wmv
        Syn3FingerFlick.wmv
        Syn3FingerPress.wmv
        Syn4FingerFlick.wmv
        Syn4FingerFlick_win8.wmv
        SynChiralHScrolling.wmv
        SynChiralRotate.wmv
        SynChiralScrolling.wmv
        SynCntxt.rtf
        SynCoverGesture.wmv
        SynISDLL.dll
        SynLinearHScrolling.wmv
        SynLinearScrolling.wmv
        SynMomentum.wmv
        SynMood.exe
        SynPinchZoom.wmv
        SynPivotRotate.wmv
        SynTPCOM.dll
        SynTPCpl.dll
        SynTPEnh.exe
        SynTPHelper.exe
        SynTPLpr.exe
        SynTPRes.dll
        SynTwistRotate.wmv
        SynUnst.ini
        SynZMetr.exe
        TP4-A123.GIF
        TP4-ASR.GIF
        TP4-HEAD.GIF
        TP4-I.JPG
        TP4-IMG.JPG
        TP4-ISR.JPG
        TP4-MG.GIF
        TP4-NOTE.GIF
        TP4-SC.GIF
        TP4Scrol-win8.htm
        TP4SCROL.CSS
        TP4Scrol.htm
        TP4Sc_BR-win8.htm
        TP4Sc_BR.htm
        TP4Sc_CH-win8.htm
        TP4Sc_CH.htm
        TP4Sc_DK-win8.htm
        TP4Sc_DK.htm
        TP4Sc_FI-win8.htm
        TP4Sc_FI.htm
        TP4Sc_FR-win8.htm
        TP4Sc_FR.htm
        TP4Sc_GR-win8.htm
        TP4Sc_GR.htm
        TP4Sc_IT-win8.htm
        TP4Sc_IT.htm
        TP4Sc_JP-win8.htm
        TP4Sc_JP.htm
        TP4Sc_NL-win8.htm
        TP4Sc_NL.htm
        TP4Sc_NO-win8.htm
        TP4Sc_NO.htm
        TP4Sc_RU-win8.htm
        TP4Sc_RU.htm
        TP4Sc_SE-win8.htm
        TP4Sc_SE.htm
        TP4Sc_SP-win8.htm
        TP4Sc_SP.htm
        TP4Sc_TW-win8.htm
        TP4Sc_TW.htm
        TP4Sc_TZ-win8.htm
        TP4Sc_TZ.htm
        TP4table.dat
        Tutorial.exe
</pre>

<a download="Synaptics.rar" rel="nofollow" href="https://icompile.eladkarako.com/_uploads/2015/04/Synaptics.rar">Synaptics.rar (11.80MB)</a>

<hr />

Nov.2015 Update:
+ Win8/10 classes to scroll start-menu too.
+ Notepad++ classes.
+ system tabs and tree classes.
+ Mozilla classes.
+ Java dialogs and stuff will help send correct scroll signal to java programs.
+ "Android Studio" (based on IntelliJ IDEA) by execute name.

<pre>
; Record Format
; OsName,OsVersion,AppName,TopClass,ParentClass,WindowClass,ScrollingType,
; Pass,Exit
;
; OS Names           : * WIN NT
; WIN OS Versions    : * 95  98    ; NT OS Versions     : * 4   5
; Application Name   : * string
; Top Class Name     : * string
; Parent Class Name  : * string
; WindowClass Name   : * string
; Scrolling Types    : Standard WheelVkey WheelStd TwoParents VkKeys SendInput None
; Pass               : 0 Use 0 to over-ride built-in program logic
;                    : 1 Use 1 when everything else has failed
; Flags              : 0 Don't exit function after match has succeed
;                    : 1 Exit function after match has succeeded
;                    : 2 Special check for FindHorzProc (SB_HORZ) that
;                        requires that the CLIPCHILDREN flag not be set in
;                        a horiz scroll bar window
;                    : One or both of these flags should be specified
;                    : 4 Rule applies to 2 button Trackpoint system
;                    : 8 Rule applies to 3 button Trackpoint system
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Pass 0 rules (These rules run first)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;;;;----https://icompile.eladkarako.com/lenovo-trackpoint-scroll-fix/
*,*,*,*,*,BaseBar,WheelStd,0,9
*,*,*,*,*,Chrome_RenderWidgetHostHWND,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin_0,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin_1,WheelStd,0,9
*,*,*,*,*,dockingManager,WheelStd,0,9
*,*,*,*,*,MenuSite,WheelStd,0,9
*,*,*,*,*,MozillaDropShadowWindowClass,WheelStd,0,9
*,*,*,*,*,MozillaWindowClass,WheelStd,0,9
*,*,*,*,*,msctls_statusbar32,WheelStd,0,9
*,*,*,*,*,Notepad++ [Administrator],WheelStd,0,9
*,*,*,*,*,Notepad++,WheelStd,0,9
*,*,*,*,*,Notepad2U,WheelStd,0,9
*,*,*,*,*,PROCEXPL,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,Scintilla,WheelStd,0,9
*,*,*,*,*,ScrollBar,WheelStd,0,9
*,*,*,*,*,Shell_TrayWnd,WheelStd,0,9
*,*,*,*,*,ShellTabWindowClass,WheelStd,0,9
*,*,*,*,*,splitterContainer,WheelStd,0,9
*,*,*,*,*,SunAwtDialog,WheelStd,0,9
*,*,*,*,*,SunAwtFrame,WheelStd,0,9
*,*,*,*,*,SysListView32,WheelStd,0,9
*,*,*,*,*,SysPager,WheelStd,0,9
*,*,*,*,*,SysTabControl32,WheelStd,0,9
*,*,*,*,*,SysTreeView32,WheelStd,0,9
*,*,*,*,*,TListView,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,TreeListWindowClass,WheelStd,0,9
*,*,idea.exe,*,*,*,WheelStd,0,9
*,*,idea64.exe,*,*,*,WheelStd,0,9
*,*,studio.exe,*,*,*,WheelStd,0,9
*,*,studio64.exe,*,*,*,WheelStd,0,9
*,*,java.exe,*,*,*,WheelStd,0,9
*,*,javaw.exe,*,*,*,WheelStd,0,9
;;;;;;



; Windows IE3 patch for 2 button systems
*,*,iexplore.exe,*,Shell DocObject View,HTML_Internet Explorer,Standard,0,5

; Windows IE4 patch for 2 button systems
;*,*,explorer.exe,*,*,Internet Explorer_Server,VkKeys,0,5

; Windows IE8
*,*,iexplore.exe,*,*,Internet Explorer_Server,WheelStd,0,9

; Google Chrome
;;;;;;;*,*,chrome.exe,*,*,Chrome_RenderWidgetHostHWND,WheelVkey,0,9
*,*,chrome.exe,*,*,Chrome_RenderWidgetHostHWND,WheelStd,0,9

; Outlook Express patch for 2 button systems
*,*,msimn.exe,*,*,Internet Explorer_Server,VkKeys,0,5

; Adobe Acrobat
*,*,acrord32.exe,*,AVL_AVView,AVL_AVView,TwoParents,0,14
*,*,acrobat.exe,*,AVL_AVView,AVL_AVView,TwoParents,0,14

; PowerPoint File Open
*,*,powerpnt.exe,PP97FrameClass,Snake List,OpenListView,Standard,0,13

; PowerPoint 2000
*,*,powerpnt.exe,PP9FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP9FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP9FrameClass,#32770,ScrollBar,StandardP,0,12

; PowerPoint XP
*,*,powerpnt.exe,PP10FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP10FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP10FrameClass,#32770,ScrollBar,StandardP,0,12

; PowerPoint 2003
*,*,powerpnt.exe,PP11FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP11FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP11FrameClass,#32770,ScrollBar,StandardP,0,12

; PowerPoint 2007
*,*,powerpnt.exe,PP12FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP12FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP12FrameClass,#32770,ScrollBar,StandardP,0,12

; MS Publisher 2000
;*,*,mspub.exe,,MSWinPub,*,WheelStd,0,9
;*,*,mspub.exe,,,MSWinPub,WheelStd,0,9

; Netscape 6
*,*,netscp6.exe,*,*,MozillaWindowClass,WheelVkey,0,9

; Netscape 8.1.2
*,*,netscape.exe,*,NS_AE_WindowClass,NS_AE_WindowClass,WheelVkey,0,9

; Mozilla Firefox
*,*,firefox.exe,*,*,MozillaWindowClass,WheelVkey,0,9

; Hwp 2002 
*,*,hwp.exe,HwpMainFrameWnd,*,HwpMainEditWnd,WheelStd,0,9
NT,4,*,HwpMainFrameWnd,*,HwpMainEditWnd,WheelStd,0,9

; Exceed
*,*,exceed.exe,*,*,*,WheelP,0,9

; Outlook 2003 HTML format
*,*,outlook.exe,*,AfxWndW,*,WheelStd,0,9

; Outlook 2003
*,*,outlook.exe,rctrl_renwnd32,NativeHWNDHost,NetUIHWND,WheelStd,0,9

; Outlook 2002 HTML format
*,*,outlook.exe,*,AfxWndA,*,WheelStd,0,9

; Outlook Express 6.0 when launched from IE
*,*,iexplore.exe,ATH_Note,##MimeEdit_Server,Internet Explorer_Server,WheelStd,0,9

; Outlook 2000
*,*,outlook.exe,*,AfxWnd,*,WheelStd,0,9
*,*,outlook.exe,*,rctrl_renwnd32,*,WheelStd,0,9
*,*,outlook.exe,rctrl_renwnd32,SysListView32,AfxWnd,WheelStd,0,9

; Win98/Win2k explorer left side window
*,*,explorer.exe,CabinetWClass,SHELLDLL_DefView,Internet Explorer_Server,VkKeys,0,9
; WinXP explorer left side window
NT,5,explorer.exe,CabinetWClass,DUIViewWndClassName,DirectUIHWND,WheelStd,0,9

; FrontPage 2000 views
*,*,frontpg.exe,FrontPageExplorerWindow40,AfxWnd42,SysListView32,WheelStd,0,9

; Opera web browser
*,*,opera.exe,*,*,*,WheelStd,0,9

; Google Picasa
*,*,picasa2.exe,*,*,*,WheelStd,0,9

; OpenOffice.org
*,*,soffice.bin,*,*,*,WheelStd,0,9

; Windows Mail
*,*,WinMail.exe,*,*,*,WheelStd,0,9

; Corel Quattro Pro
*,*,QPW.exe,*,*,*,WheelVkey,0,9

; VMWare
*,*,vmware.exe,*,*,MKSEmbedded,SendInput,0,9

; VMWare-VMX
*,*,vmware-vmx.exe,*,*,MKSEmbedded,SendInput,0,9

; VMware Player
*,*,vmplayer.exe,*,*,*,WheelStd,0,9

; Windows Live Mail
*,*,wlmail.exe,*,*,*,WheelVkey,0,9

; Remote Desktop
*,*,mstsc.exe,*,*,*,WheelStd,0,9

; Windows XP Mode
*,*,VMWindow.exe,*,*,*,WheelStd,0,9

; Google Picasa
*,*,picasa3.exe,*,*,*,WheelStd,0,9

; Yahoo Messenger
*,*,YahooMessenger.exe,*,*,Internet Explorer_Server,WheelStd,0,9

; iTunes
*,*,iTunes.exe,*,*,*,WheelStd,0,9

; Access 2007
*,*,MSACCESS.exe,*,*,*,WheelStd,0,9

; Help Panel
*,*,HELPPANE.exe,*,*,*,WheelStd,0,9

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Pass 1 rules (These rules run last)
;
; If no scrolling method was found with the builtin logic, then
; these rules are checked.
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; Outlook Express patch for 3 button systems
WIN,*,msimn.exe,*,*,SysTreeView32,WheelStd,1,9
WIN,*,msimn.exe,*,*,SysListView32,WheelStd,1,9
WIN,*,msimn.exe,*,*,Internet Explorer_Server,Standard,1,9
NT,*,msimn.exe,*,*,SysTreeView32,WheelStd,1,9
NT,*,msimn.exe,*,*,SysListView32,WheelStd,1,9
NT,*,msimn.exe,*,*,Internet Explorer_Server,Standard,1,9

; Lotus Notes patch for both 2 and 3 button systems
*,*,nlnotes.exe,NOTES,SCCVIEWER,SCCDISPLAY,Standard,1,13

; SashWDE
*,*,sashwde.exe,*,*,WDEEditor,Standard,1,13

; Add/Remove Programs (Windows 2000)
NT,5,mshta.exe,*,*,Internet Explorer_Server,Standard,1,9

; Add/Remove Programs (Windows XP)
NT,5,rundll32.exe,*,NativeHWNDHost,DirectUIHWND,WheelStd,1,9

; Winamp
*,*,winamp.exe,*,*,Winamp PE,WheelStd,1,9

; Setup guide
*,*,iexplore.exe,IEFrame,Internet Explorer_TridentDlgFrame,Internet Explorer_Server,WheelStd,1,9

; MSAccess
*,*,msaccess.exe,OMain,ODataPage,Internet Explorer_Server,WheelStd,1,9

; Java support
*,*,java.exe,*,*,*,WheelStd,1,9
*,*,javaw.exe,*,*,*,WheelStd,1,9

; Eudora
*,*,eudora.exe,EudoraMainWindow,AfxFrameOrView42,Internet Explorer_Server,WheelStd,0,9
*,*,eudora.exe,EudoraMainWindow,AfxFrameOrView70,Internet Explorer_Server,WheelStd,0,9
*,*,eudora.exe,*,EudoraMainWindow,MDIClient,WheelVkey,0,9

; Windows 7 Personalization settings
*,*,Explorer.exe,CabinetWClass,XBabyHost,DirectUIHWND,WheelP,0,9

[AutoScrollTable]

; AUTO SCROLL TABLE  AUTO SCROLL TABLE  AUTO SCROLL TABLE
; AUTO SCROLL TABLE  AUTO SCROLL TABLE  AUTO SCROLL TABLE
; AUTO SCROLL TABLE  AUTO SCROLL TABLE  AUTO SCROLL TABLE

; List the Auto scrolling records under the [AutoScrollTable] section
; Record Format
; OsName,OsVersion,AppName,AppVersion,ScrollMethod
;
; OS Names            : * WIN NT
; WIN OS Versions     : * 95  98    ; NT OS Versions     : * 4   5
; Application Name    : * string
; Application Version : * or x.x.x.x
; ScrollMethod        : standard or smooth

*,*,iexplore.exe,*,smooth
*,*,winword.exe,*,smooth
*,*,outlook.exe,*,smooth
*,*,excel.exe,*,smooth
*,*,msimn.exe,*,smooth
*,*,cnext.exe,*,smooth

[MB3HINT ICON]
; List the Applications that scrolling icon will not be shown
; Record Format
; AppName,Classname

; Application Name    : * string
; Window Classname    : * string

*,HwndWrapper
*,MKSEmbedded
*,MozillaWindowClass
*,NS_AE_WindowClass


</pre>


<hr />

Jan.2016 Update:
+ Notepad++ classes.
+ Win7 start menu classes.
+ "Android Studio" (based on IntelliJ IDEA) by classes.

<pre>
; Record Format
; OsName,OsVersion,AppName,TopClass,ParentClass,WindowClass,ScrollingType,
; Pass,Exit
;
; OS Names           : * WIN NT
; WIN OS Versions    : * 95  98    ; NT OS Versions     : * 4   5
; Application Name   : * string
; Top Class Name     : * string
; Parent Class Name  : * string
; WindowClass Name   : * string
; Scrolling Types    : Standard WheelVkey WheelStd TwoParents VkKeys SendInput None
; Pass               : 0 Use 0 to over-ride built-in program logic
;                    : 1 Use 1 when everything else has failed
; Flags              : 0 Don't exit function after match has succeed
;                    : 1 Exit function after match has succeeded
;                    : 2 Special check for FindHorzProc (SB_HORZ) that
;                        requires that the CLIPCHILDREN flag not be set in
;                        a horiz scroll bar window
;                    : One or both of these flags should be specified
;                    : 4 Rule applies to 2 button Trackpoint system
;                    : 8 Rule applies to 3 button Trackpoint system
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Pass 0 rules (These rules run first)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;;;;----https://icompile.eladkarako.com/lenovo-trackpoint-scroll-fix/
*,*,*,*,*,BaseBar,WheelStd,0,9
*,*,*,*,*,Chrome_RenderWidgetHostHWND,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin_0,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin_1,WheelStd,0,9
*,*,*,*,*,dockingManager,WheelStd,0,9
*,*,*,*,*,MenuSite,WheelStd,0,9
*,*,*,*,*,MozillaDropShadowWindowClass,WheelStd,0,9
*,*,*,*,*,MozillaWindowClass,WheelStd,0,9
*,*,*,*,*,msctls_statusbar32,WheelStd,0,9
*,*,*,*,*,Notepad++ [Administrator],WheelStd,0,9
*,*,*,*,*,Notepad++,WheelStd,0,9
*,*,*,*,*,Notepad2U,WheelStd,0,9
*,*,*,*,*,PROCEXPL,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,Scintilla,WheelStd,0,9
*,*,*,*,*,ScrollBar,WheelStd,0,9
*,*,*,*,*,Shell_TrayWnd,WheelStd,0,9
*,*,*,*,*,ShellTabWindowClass,WheelStd,0,9
*,*,*,*,*,splitterContainer,WheelStd,0,9
*,*,*,*,*,SunAwtDialog,WheelStd,0,9
*,*,*,*,*,SunAwtFrame,WheelStd,0,9
*,*,*,*,*,SysListView32,WheelStd,0,9
*,*,*,*,*,SysPager,WheelStd,0,9
*,*,*,*,*,SysTabControl32,WheelStd,0,9
*,*,*,*,*,SysTreeView32,WheelStd,0,9
*,*,*,*,*,TListView,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,TreeListWindowClass,WheelStd,0,9
*,*,*,*,*,dockingManager,WheelStd,0,9
*,*,*,*,*,nsdockspliter,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,#32770,WheelStd,0,9
*,*,*,*,*,Scintilla,WheelStd,0,9
*,*,*,*,*,splitterContainer,WheelStd,0,9
*,*,*,*,*,wespliter,WheelStd,0,9
*,*,*,*,*,wedockspliter,WheelStd,0,9
*,*,*,*,*,msctls_statusbar32,WheelStd,0,9
*,*,*,*,*,SysTabControl32,WheelStd,0,9
*,*,*,*,*,Button,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,ComboBox,WheelStd,0,9
*,*,*,*,*,DATETIMEPICKEX,WheelStd,0,9
*,*,*,*,*,Edit,WheelStd,0,9
*,*,*,*,*,Static,WheelStd,0,9
*,*,*,*,*,msctls_updown32,WheelStd,0,9
*,*,*,*,*,ComboBoxEx32,WheelStd,0,9
*,*,*,*,*,SysListView32,WheelStd,0,9
*,*,*,*,*,SysHeader32,WheelStd,0,9
*,*,*,*,*,msctls_statusbar32,WheelStd,0,9
*,*,*,*,*,SysTabControl32,WheelStd,0,9
*,*,*,*,*,CabinetWClass,WheelStd,0,9
*,*,*,*,*,BrowserFrameGripperClass,WheelStd,0,9
*,*,*,*,*,WorkerW,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,TravelBand,WheelStd,0,9
*,*,*,*,*,msctls_progress32,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,DirectUIHWND,WheelStd,0,9
*,*,*,*,*,SearchEditBoxWrapperClass,WheelStd,0,9
*,*,*,*,*,UniversalSearchBand,WheelStd,0,9
*,*,*,*,*,DUIViewWndClassName,WheelStd,0,9
*,*,*,*,*,DirectUIHWND,WheelStd,0,9
*,*,*,*,*,CtrlNotifySink,WheelStd,0,9
*,*,*,*,*,NamespaceTreeControl,WheelStd,0,9
*,*,*,*,*,SHELLDLL_DefView,WheelStd,0,9
*,*,*,*,*,DirectUIHWND,WheelStd,0,9
*,*,*,*,*,ScrollBar,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,Progman,WheelStd,0,9
*,*,*,*,*,SHELLDLL_DefView,WheelStd,0,9
*,*,*,*,*,SysListView32,WheelStd,0,9
*,*,*,*,*,SysHeader32,WheelStd,0,9
*,*,idea.exe,*,*,*,WheelStd,0,9
*,*,idea64.exe,*,*,*,WheelStd,0,9
*,*,studio.exe,*,*,*,WheelStd,0,9
*,*,studio64.exe,*,*,*,WheelStd,0,9
*,*,java.exe,*,*,*,WheelStd,0,9
*,*,javaw.exe,*,*,*,WheelStd,0,9
;;;;;;



; Windows IE3 patch for 2 button systems
*,*,iexplore.exe,*,Shell DocObject View,HTML_Internet Explorer,Standard,0,5

; Windows IE4 patch for 2 button systems
;*,*,explorer.exe,*,*,Internet Explorer_Server,VkKeys,0,5

; Windows IE8
*,*,iexplore.exe,*,*,Internet Explorer_Server,WheelStd,0,9

; Google Chrome
;;;;;;;*,*,chrome.exe,*,*,Chrome_RenderWidgetHostHWND,WheelVkey,0,9
*,*,chrome.exe,*,*,Chrome_RenderWidgetHostHWND,WheelStd,0,9

; Outlook Express patch for 2 button systems
*,*,msimn.exe,*,*,Internet Explorer_Server,VkKeys,0,5

; Adobe Acrobat
*,*,acrord32.exe,*,AVL_AVView,AVL_AVView,TwoParents,0,14
*,*,acrobat.exe,*,AVL_AVView,AVL_AVView,TwoParents,0,14

; PowerPoint File Open
*,*,powerpnt.exe,PP97FrameClass,Snake List,OpenListView,Standard,0,13

; PowerPoint 2000
*,*,powerpnt.exe,PP9FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP9FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP9FrameClass,#32770,ScrollBar,StandardP,0,12

; PowerPoint XP
*,*,powerpnt.exe,PP10FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP10FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP10FrameClass,#32770,ScrollBar,StandardP,0,12

; PowerPoint 2003
*,*,powerpnt.exe,PP11FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP11FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP11FrameClass,#32770,ScrollBar,StandardP,0,12

; PowerPoint 2007
*,*,powerpnt.exe,PP12FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP12FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP12FrameClass,#32770,ScrollBar,StandardP,0,12

; MS Publisher 2000
;*,*,mspub.exe,,MSWinPub,*,WheelStd,0,9
;*,*,mspub.exe,,,MSWinPub,WheelStd,0,9

; Netscape 6
*,*,netscp6.exe,*,*,MozillaWindowClass,WheelVkey,0,9

; Netscape 8.1.2
*,*,netscape.exe,*,NS_AE_WindowClass,NS_AE_WindowClass,WheelVkey,0,9

; Mozilla Firefox
*,*,firefox.exe,*,*,MozillaWindowClass,WheelVkey,0,9

; Hwp 2002 
*,*,hwp.exe,HwpMainFrameWnd,*,HwpMainEditWnd,WheelStd,0,9
NT,4,*,HwpMainFrameWnd,*,HwpMainEditWnd,WheelStd,0,9

; Exceed
*,*,exceed.exe,*,*,*,WheelP,0,9

; Outlook 2003 HTML format
*,*,outlook.exe,*,AfxWndW,*,WheelStd,0,9

; Outlook 2003
*,*,outlook.exe,rctrl_renwnd32,NativeHWNDHost,NetUIHWND,WheelStd,0,9

; Outlook 2002 HTML format
*,*,outlook.exe,*,AfxWndA,*,WheelStd,0,9

; Outlook Express 6.0 when launched from IE
*,*,iexplore.exe,ATH_Note,##MimeEdit_Server,Internet Explorer_Server,WheelStd,0,9

; Outlook 2000
*,*,outlook.exe,*,AfxWnd,*,WheelStd,0,9
*,*,outlook.exe,*,rctrl_renwnd32,*,WheelStd,0,9
*,*,outlook.exe,rctrl_renwnd32,SysListView32,AfxWnd,WheelStd,0,9

; Win98/Win2k explorer left side window
*,*,explorer.exe,CabinetWClass,SHELLDLL_DefView,Internet Explorer_Server,VkKeys,0,9
; WinXP explorer left side window
NT,5,explorer.exe,CabinetWClass,DUIViewWndClassName,DirectUIHWND,WheelStd,0,9

; FrontPage 2000 views
*,*,frontpg.exe,FrontPageExplorerWindow40,AfxWnd42,SysListView32,WheelStd,0,9

; Opera web browser
*,*,opera.exe,*,*,*,WheelStd,0,9

; Google Picasa
*,*,picasa2.exe,*,*,*,WheelStd,0,9

; OpenOffice.org
*,*,soffice.bin,*,*,*,WheelStd,0,9

; Windows Mail
*,*,WinMail.exe,*,*,*,WheelStd,0,9

; Corel Quattro Pro
*,*,QPW.exe,*,*,*,WheelVkey,0,9

; VMWare
*,*,vmware.exe,*,*,MKSEmbedded,SendInput,0,9

; VMWare-VMX
*,*,vmware-vmx.exe,*,*,MKSEmbedded,SendInput,0,9

; VMware Player
*,*,vmplayer.exe,*,*,*,WheelStd,0,9

; Windows Live Mail
*,*,wlmail.exe,*,*,*,WheelVkey,0,9

; Remote Desktop
*,*,mstsc.exe,*,*,*,WheelStd,0,9

; Windows XP Mode
*,*,VMWindow.exe,*,*,*,WheelStd,0,9

; Google Picasa
*,*,picasa3.exe,*,*,*,WheelStd,0,9

; Yahoo Messenger
*,*,YahooMessenger.exe,*,*,Internet Explorer_Server,WheelStd,0,9

; iTunes
*,*,iTunes.exe,*,*,*,WheelStd,0,9

; Access 2007
*,*,MSACCESS.exe,*,*,*,WheelStd,0,9

; Help Panel
*,*,HELPPANE.exe,*,*,*,WheelStd,0,9

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Pass 1 rules (These rules run last)
;
; If no scrolling method was found with the builtin logic, then
; these rules are checked.
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; Outlook Express patch for 3 button systems
WIN,*,msimn.exe,*,*,SysTreeView32,WheelStd,1,9
WIN,*,msimn.exe,*,*,SysListView32,WheelStd,1,9
WIN,*,msimn.exe,*,*,Internet Explorer_Server,Standard,1,9
NT,*,msimn.exe,*,*,SysTreeView32,WheelStd,1,9
NT,*,msimn.exe,*,*,SysListView32,WheelStd,1,9
NT,*,msimn.exe,*,*,Internet Explorer_Server,Standard,1,9

; Lotus Notes patch for both 2 and 3 button systems
*,*,nlnotes.exe,NOTES,SCCVIEWER,SCCDISPLAY,Standard,1,13

; SashWDE
*,*,sashwde.exe,*,*,WDEEditor,Standard,1,13

; Add/Remove Programs (Windows 2000)
NT,5,mshta.exe,*,*,Internet Explorer_Server,Standard,1,9

; Add/Remove Programs (Windows XP)
NT,5,rundll32.exe,*,NativeHWNDHost,DirectUIHWND,WheelStd,1,9

; Winamp
*,*,winamp.exe,*,*,Winamp PE,WheelStd,1,9

; Setup guide
*,*,iexplore.exe,IEFrame,Internet Explorer_TridentDlgFrame,Internet Explorer_Server,WheelStd,1,9

; MSAccess
*,*,msaccess.exe,OMain,ODataPage,Internet Explorer_Server,WheelStd,1,9

; Java support
*,*,java.exe,*,*,*,WheelStd,1,9
*,*,javaw.exe,*,*,*,WheelStd,1,9

; Eudora
*,*,eudora.exe,EudoraMainWindow,AfxFrameOrView42,Internet Explorer_Server,WheelStd,0,9
*,*,eudora.exe,EudoraMainWindow,AfxFrameOrView70,Internet Explorer_Server,WheelStd,0,9
*,*,eudora.exe,*,EudoraMainWindow,MDIClient,WheelVkey,0,9

; Windows 7 Personalization settings
*,*,Explorer.exe,CabinetWClass,XBabyHost,DirectUIHWND,WheelP,0,9

[AutoScrollTable]

; AUTO SCROLL TABLE  AUTO SCROLL TABLE  AUTO SCROLL TABLE
; AUTO SCROLL TABLE  AUTO SCROLL TABLE  AUTO SCROLL TABLE
; AUTO SCROLL TABLE  AUTO SCROLL TABLE  AUTO SCROLL TABLE

; List the Auto scrolling records under the [AutoScrollTable] section
; Record Format
; OsName,OsVersion,AppName,AppVersion,ScrollMethod
;
; OS Names            : * WIN NT
; WIN OS Versions     : * 95  98    ; NT OS Versions     : * 4   5
; Application Name    : * string
; Application Version : * or x.x.x.x
; ScrollMethod        : standard or smooth

*,*,iexplore.exe,*,smooth
*,*,winword.exe,*,smooth
*,*,outlook.exe,*,smooth
*,*,excel.exe,*,smooth
*,*,msimn.exe,*,smooth
*,*,cnext.exe,*,smooth

[MB3HINT ICON]
; List the Applications that scrolling icon will not be shown
; Record Format
; AppName,Classname

; Application Name    : * string
; Window Classname    : * string

*,HwndWrapper
*,MKSEmbedded
*,MozillaWindowClass
*,NS_AE_WindowClass

</pre>


<hr />

Jan 21, 2016: I would like to scroll more suff, such as edit boxes (input, textarea all directions, processexplorer, chrome...)
<pre>
; Record Format
; OsName,OsVersion,AppName,TopClass,ParentClass,WindowClass,ScrollingType,
; Pass,Exit
;
; OS Names           : * WIN NT
; WIN OS Versions    : * 95  98    ; NT OS Versions     : * 4   5
; Application Name   : * string
; Top Class Name     : * string
; Parent Class Name  : * string
; WindowClass Name   : * string
; Scrolling Types    : Standard WheelVkey WheelStd TwoParents VkKeys SendInput None
; Pass               : 0 Use 0 to over-ride built-in program logic
;                    : 1 Use 1 when everything else has failed
; Flags              : 0 Don't exit function after match has succeed
;                    : 1 Exit function after match has succeeded
;                    : 2 Special check for FindHorzProc (SB_HORZ) that
;                        requires that the CLIPCHILDREN flag not be set in
;                        a horiz scroll bar window
;                    : One or both of these flags should be specified
;                    : 4 Rule applies to 2 button Trackpoint system
;                    : 8 Rule applies to 3 button Trackpoint system
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Pass 0 rules (These rules run first)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;;;;----https://icompile.eladkarako.com/lenovo-trackpoint-scroll-fix/
*,*,*,*,*,BaseBar,WheelStd,0,9
*,*,*,*,*,Chrome_RenderWidgetHostHWND,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin_0,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin_1,WheelStd,0,9
*,*,*,*,*,dockingManager,WheelStd,0,9
*,*,*,*,*,MenuSite,WheelStd,0,9
*,*,*,*,*,MozillaDropShadowWindowClass,WheelStd,0,9
*,*,*,*,*,MozillaWindowClass,WheelStd,0,9
*,*,*,*,*,msctls_statusbar32,WheelStd,0,9
*,*,*,*,*,Notepad++ [Administrator],WheelStd,0,9
*,*,*,*,*,Notepad++,WheelStd,0,9
*,*,*,*,*,Notepad2U,WheelStd,0,9
*,*,*,*,*,PROCEXPL,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,Scintilla,WheelStd,0,9
*,*,*,*,*,ScrollBar,WheelStd,0,9
*,*,*,*,*,Shell_TrayWnd,WheelStd,0,9
*,*,*,*,*,ShellTabWindowClass,WheelStd,0,9
*,*,*,*,*,splitterContainer,WheelStd,0,9
*,*,*,*,*,SunAwtDialog,WheelStd,0,9
*,*,*,*,*,SunAwtFrame,WheelStd,0,9
*,*,*,*,*,SysListView32,WheelStd,0,9
*,*,*,*,*,SysPager,WheelStd,0,9
*,*,*,*,*,SysTabControl32,WheelStd,0,9
*,*,*,*,*,SysTreeView32,WheelStd,0,9
*,*,*,*,*,TListView,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,TreeListWindowClass,WheelStd,0,9
*,*,*,*,*,dockingManager,WheelStd,0,9
*,*,*,*,*,nsdockspliter,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,#32770,WheelStd,0,9
*,*,*,*,*,Scintilla,WheelStd,0,9
*,*,*,*,*,splitterContainer,WheelStd,0,9
*,*,*,*,*,wespliter,WheelStd,0,9
*,*,*,*,*,wedockspliter,WheelStd,0,9
*,*,*,*,*,msctls_statusbar32,WheelStd,0,9
*,*,*,*,*,SysTabControl32,WheelStd,0,9
*,*,*,*,*,Button,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,ComboBox,WheelStd,0,9
*,*,*,*,*,DATETIMEPICKEX,WheelStd,0,9
*,*,*,*,*,Edit,WheelStd,0,9
*,*,*,*,*,Static,WheelStd,0,9
*,*,*,*,*,msctls_updown32,WheelStd,0,9
*,*,*,*,*,ComboBoxEx32,WheelStd,0,9
*,*,*,*,*,SysListView32,WheelStd,0,9
*,*,*,*,*,SysHeader32,WheelStd,0,9
*,*,*,*,*,msctls_statusbar32,WheelStd,0,9
*,*,*,*,*,SysTabControl32,WheelStd,0,9
*,*,*,*,*,CabinetWClass,WheelStd,0,9
*,*,*,*,*,BrowserFrameGripperClass,WheelStd,0,9
*,*,*,*,*,WorkerW,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,TravelBand,WheelStd,0,9
*,*,*,*,*,msctls_progress32,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,DirectUIHWND,WheelStd,0,9
*,*,*,*,*,SearchEditBoxWrapperClass,WheelStd,0,9
*,*,*,*,*,UniversalSearchBand,WheelStd,0,9
*,*,*,*,*,DUIViewWndClassName,WheelStd,0,9
*,*,*,*,*,DirectUIHWND,WheelStd,0,9
*,*,*,*,*,CtrlNotifySink,WheelStd,0,9
*,*,*,*,*,NamespaceTreeControl,WheelStd,0,9
*,*,*,*,*,SHELLDLL_DefView,WheelStd,0,9
*,*,*,*,*,DirectUIHWND,WheelStd,0,9
*,*,*,*,*,ScrollBar,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,Progman,WheelStd,0,9
*,*,*,*,*,SHELLDLL_DefView,WheelStd,0,9
*,*,*,*,*,SysListView32,WheelStd,0,9
*,*,*,*,*,SysHeader32,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,CpuGraphClass,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,SysListView32,WheelStd,0,9
*,*,*,*,*,SysHeader32,WheelStd,0,9
*,*,*,*,*,TreeListWindowClass,WheelStd,0,9
*,*,*,*,*,ScrollBar,WheelStd,0,9
*,*,*,*,*,msctls_statusbar32,WheelStd,0,9
*,*,*,*,*,Internet Explorer_Hidden,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,SysPager,WheelStd,0,9
*,*,*,*,*,#32770,WheelStd,0,9
*,*,*,*,*,TrayShowDesktopButtonWClass,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin_1,WheelStd,0,9
*,*,*,*,*,SysTabControl32,WheelStd,0,9
*,*,*,*,*,Static,WheelStd,0,9
*,*,*,*,*,Edit,WheelStd,0,9
*,*,idea.exe,*,*,*,WheelStd,0,9
*,*,idea64.exe,*,*,*,WheelStd,0,9
*,*,studio.exe,*,*,*,WheelStd,0,9
*,*,studio64.exe,*,*,*,WheelStd,0,9
*,*,java.exe,*,*,*,WheelStd,0,9
*,*,javaw.exe,*,*,*,WheelStd,0,9
;;;;;;



; Windows IE3 patch for 2 button systems
*,*,iexplore.exe,*,Shell DocObject View,HTML_Internet Explorer,Standard,0,5

; Windows IE4 patch for 2 button systems
;*,*,explorer.exe,*,*,Internet Explorer_Server,VkKeys,0,5

; Windows IE8
*,*,iexplore.exe,*,*,Internet Explorer_Server,WheelStd,0,9

; Google Chrome
;;;;;;;*,*,chrome.exe,*,*,Chrome_RenderWidgetHostHWND,WheelVkey,0,9
*,*,chrome.exe,*,*,Chrome_RenderWidgetHostHWND,WheelStd,0,9

; Outlook Express patch for 2 button systems
*,*,msimn.exe,*,*,Internet Explorer_Server,VkKeys,0,5

; Adobe Acrobat
*,*,acrord32.exe,*,AVL_AVView,AVL_AVView,TwoParents,0,14
*,*,acrobat.exe,*,AVL_AVView,AVL_AVView,TwoParents,0,14

; PowerPoint File Open
*,*,powerpnt.exe,PP97FrameClass,Snake List,OpenListView,Standard,0,13

; PowerPoint 2000
*,*,powerpnt.exe,PP9FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP9FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP9FrameClass,#32770,ScrollBar,StandardP,0,12

; PowerPoint XP
*,*,powerpnt.exe,PP10FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP10FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP10FrameClass,#32770,ScrollBar,StandardP,0,12

; PowerPoint 2003
*,*,powerpnt.exe,PP11FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP11FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP11FrameClass,#32770,ScrollBar,StandardP,0,12

; PowerPoint 2007
*,*,powerpnt.exe,PP12FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP12FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP12FrameClass,#32770,ScrollBar,StandardP,0,12

; MS Publisher 2000
;*,*,mspub.exe,,MSWinPub,*,WheelStd,0,9
;*,*,mspub.exe,,,MSWinPub,WheelStd,0,9

; Netscape 6
*,*,netscp6.exe,*,*,MozillaWindowClass,WheelVkey,0,9

; Netscape 8.1.2
*,*,netscape.exe,*,NS_AE_WindowClass,NS_AE_WindowClass,WheelVkey,0,9

; Mozilla Firefox
*,*,firefox.exe,*,*,MozillaWindowClass,WheelVkey,0,9

; Hwp 2002 
*,*,hwp.exe,HwpMainFrameWnd,*,HwpMainEditWnd,WheelStd,0,9
NT,4,*,HwpMainFrameWnd,*,HwpMainEditWnd,WheelStd,0,9

; Exceed
*,*,exceed.exe,*,*,*,WheelP,0,9

; Outlook 2003 HTML format
*,*,outlook.exe,*,AfxWndW,*,WheelStd,0,9

; Outlook 2003
*,*,outlook.exe,rctrl_renwnd32,NativeHWNDHost,NetUIHWND,WheelStd,0,9

; Outlook 2002 HTML format
*,*,outlook.exe,*,AfxWndA,*,WheelStd,0,9

; Outlook Express 6.0 when launched from IE
*,*,iexplore.exe,ATH_Note,##MimeEdit_Server,Internet Explorer_Server,WheelStd,0,9

; Outlook 2000
*,*,outlook.exe,*,AfxWnd,*,WheelStd,0,9
*,*,outlook.exe,*,rctrl_renwnd32,*,WheelStd,0,9
*,*,outlook.exe,rctrl_renwnd32,SysListView32,AfxWnd,WheelStd,0,9

; Win98/Win2k explorer left side window
*,*,explorer.exe,CabinetWClass,SHELLDLL_DefView,Internet Explorer_Server,VkKeys,0,9
; WinXP explorer left side window
NT,5,explorer.exe,CabinetWClass,DUIViewWndClassName,DirectUIHWND,WheelStd,0,9

; FrontPage 2000 views
*,*,frontpg.exe,FrontPageExplorerWindow40,AfxWnd42,SysListView32,WheelStd,0,9

; Opera web browser
*,*,opera.exe,*,*,*,WheelStd,0,9

; Google Picasa
*,*,picasa2.exe,*,*,*,WheelStd,0,9

; OpenOffice.org
*,*,soffice.bin,*,*,*,WheelStd,0,9

; Windows Mail
*,*,WinMail.exe,*,*,*,WheelStd,0,9

; Corel Quattro Pro
*,*,QPW.exe,*,*,*,WheelVkey,0,9

; VMWare
*,*,vmware.exe,*,*,MKSEmbedded,SendInput,0,9

; VMWare-VMX
*,*,vmware-vmx.exe,*,*,MKSEmbedded,SendInput,0,9

; VMware Player
*,*,vmplayer.exe,*,*,*,WheelStd,0,9

; Windows Live Mail
*,*,wlmail.exe,*,*,*,WheelVkey,0,9

; Remote Desktop
*,*,mstsc.exe,*,*,*,WheelStd,0,9

; Windows XP Mode
*,*,VMWindow.exe,*,*,*,WheelStd,0,9

; Google Picasa
*,*,picasa3.exe,*,*,*,WheelStd,0,9

; Yahoo Messenger
*,*,YahooMessenger.exe,*,*,Internet Explorer_Server,WheelStd,0,9

; iTunes
*,*,iTunes.exe,*,*,*,WheelStd,0,9

; Access 2007
*,*,MSACCESS.exe,*,*,*,WheelStd,0,9

; Help Panel
*,*,HELPPANE.exe,*,*,*,WheelStd,0,9

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Pass 1 rules (These rules run last)
;
; If no scrolling method was found with the builtin logic, then
; these rules are checked.
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; Outlook Express patch for 3 button systems
WIN,*,msimn.exe,*,*,SysTreeView32,WheelStd,1,9
WIN,*,msimn.exe,*,*,SysListView32,WheelStd,1,9
WIN,*,msimn.exe,*,*,Internet Explorer_Server,Standard,1,9
NT,*,msimn.exe,*,*,SysTreeView32,WheelStd,1,9
NT,*,msimn.exe,*,*,SysListView32,WheelStd,1,9
NT,*,msimn.exe,*,*,Internet Explorer_Server,Standard,1,9

; Lotus Notes patch for both 2 and 3 button systems
*,*,nlnotes.exe,NOTES,SCCVIEWER,SCCDISPLAY,Standard,1,13

; SashWDE
*,*,sashwde.exe,*,*,WDEEditor,Standard,1,13

; Add/Remove Programs (Windows 2000)
NT,5,mshta.exe,*,*,Internet Explorer_Server,Standard,1,9

; Add/Remove Programs (Windows XP)
NT,5,rundll32.exe,*,NativeHWNDHost,DirectUIHWND,WheelStd,1,9

; Winamp
*,*,winamp.exe,*,*,Winamp PE,WheelStd,1,9

; Setup guide
*,*,iexplore.exe,IEFrame,Internet Explorer_TridentDlgFrame,Internet Explorer_Server,WheelStd,1,9

; MSAccess
*,*,msaccess.exe,OMain,ODataPage,Internet Explorer_Server,WheelStd,1,9

; Java support
*,*,java.exe,*,*,*,WheelStd,1,9
*,*,javaw.exe,*,*,*,WheelStd,1,9

; Eudora
*,*,eudora.exe,EudoraMainWindow,AfxFrameOrView42,Internet Explorer_Server,WheelStd,0,9
*,*,eudora.exe,EudoraMainWindow,AfxFrameOrView70,Internet Explorer_Server,WheelStd,0,9
*,*,eudora.exe,*,EudoraMainWindow,MDIClient,WheelVkey,0,9

; Windows 7 Personalization settings
*,*,Explorer.exe,CabinetWClass,XBabyHost,DirectUIHWND,WheelP,0,9

[AutoScrollTable]

; AUTO SCROLL TABLE  AUTO SCROLL TABLE  AUTO SCROLL TABLE
; AUTO SCROLL TABLE  AUTO SCROLL TABLE  AUTO SCROLL TABLE
; AUTO SCROLL TABLE  AUTO SCROLL TABLE  AUTO SCROLL TABLE

; List the Auto scrolling records under the [AutoScrollTable] section
; Record Format
; OsName,OsVersion,AppName,AppVersion,ScrollMethod
;
; OS Names            : * WIN NT
; WIN OS Versions     : * 95  98    ; NT OS Versions     : * 4   5
; Application Name    : * string
; Application Version : * or x.x.x.x
; ScrollMethod        : standard or smooth

*,*,iexplore.exe,*,smooth
*,*,winword.exe,*,smooth
*,*,outlook.exe,*,smooth
*,*,excel.exe,*,smooth
*,*,msimn.exe,*,smooth
*,*,cnext.exe,*,smooth

[MB3HINT ICON]
; List the Applications that scrolling icon will not be shown
; Record Format
; AppName,Classname

; Application Name    : * string
; Window Classname    : * string

*,HwndWrapper
*,MKSEmbedded
*,MozillaWindowClass
*,NS_AE_WindowClass

</pre>

<hr/>


<blockquote>
May 15<sup>th</sup>, 2017.

Here is an update with vmware's frame, including some older entries that now has some characters escaped and enclosed with inverted-commas, which might help to scroll Notepad++ (I suspect that the <code>+</code> character is the cause of the problems..)
<pre>
; Record Format
; OsName,OsVersion,AppName,TopClass,ParentClass,WindowClass,ScrollingType,
; Pass,Exit
;
; OS Names           : * WIN NT
; WIN OS Versions    : * 95  98    ; NT OS Versions     : * 4   5
; Application Name   : * string
; Top Class Name     : * string
; Parent Class Name  : * string
; WindowClass Name   : * string
; Scrolling Types    : Standard WheelVkey WheelStd TwoParents VkKeys SendInput None
; Pass               : 0 Use 0 to over-ride built-in program logic
;                    : 1 Use 1 when everything else has failed
; Flags              : 0 Don't exit function after match has succeed
;                    : 1 Exit function after match has succeeded
;                    : 2 Special check for FindHorzProc (SB_HORZ) that
;                        requires that the CLIPCHILDREN flag not be set in
;                        a horiz scroll bar window
;                    : One or both of these flags should be specified
;                    : 4 Rule applies to 2 button Trackpoint system
;                    : 8 Rule applies to 3 button Trackpoint system
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Pass 0 rules (These rules run first)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;;;;----https://icompile.eladkarako.com/lenovo-trackpoint-scroll-fix/
*,*,*,*,*,BaseBar,WheelStd,0,9
*,*,*,*,*,Chrome_RenderWidgetHostHWND,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin_0,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin_1,WheelStd,0,9
*,*,*,*,*,dockingManager,WheelStd,0,9
*,*,*,*,*,MenuSite,WheelStd,0,9
*,*,*,*,*,MozillaDropShadowWindowClass,WheelStd,0,9
*,*,*,*,*,MozillaWindowClass,WheelStd,0,9
*,*,*,*,*,msctls_statusbar32,WheelStd,0,9
*,*,*,*,*,Notepad++ [Administrator],WheelStd,0,9
*,*,*,*,*,Notepad++,WheelStd,0,9
*,*,*,*,*,Notepad2U,WheelStd,0,9
*,*,*,*,*,PROCEXPL,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,Scintilla,WheelStd,0,9
*,*,*,*,*,ScrollBar,WheelStd,0,9
*,*,*,*,*,Shell_TrayWnd,WheelStd,0,9
*,*,*,*,*,ShellTabWindowClass,WheelStd,0,9
*,*,*,*,*,splitterContainer,WheelStd,0,9
*,*,*,*,*,SunAwtDialog,WheelStd,0,9
*,*,*,*,*,SunAwtFrame,WheelStd,0,9
*,*,*,*,*,SysListView32,WheelStd,0,9
*,*,*,*,*,SysPager,WheelStd,0,9
*,*,*,*,*,SysTabControl32,WheelStd,0,9
*,*,*,*,*,SysTreeView32,WheelStd,0,9
*,*,*,*,*,TListView,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,TreeListWindowClass,WheelStd,0,9
*,*,*,*,*,dockingManager,WheelStd,0,9
*,*,*,*,*,nsdockspliter,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,#32770,WheelStd,0,9
*,*,*,*,*,Scintilla,WheelStd,0,9
*,*,*,*,*,splitterContainer,WheelStd,0,9
*,*,*,*,*,wespliter,WheelStd,0,9
*,*,*,*,*,wedockspliter,WheelStd,0,9
*,*,*,*,*,msctls_statusbar32,WheelStd,0,9
*,*,*,*,*,SysTabControl32,WheelStd,0,9
*,*,*,*,*,Button,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,ComboBox,WheelStd,0,9
*,*,*,*,*,DATETIMEPICKEX,WheelStd,0,9
*,*,*,*,*,Edit,WheelStd,0,9
*,*,*,*,*,Static,WheelStd,0,9
*,*,*,*,*,msctls_updown32,WheelStd,0,9
*,*,*,*,*,ComboBoxEx32,WheelStd,0,9
*,*,*,*,*,SysListView32,WheelStd,0,9
*,*,*,*,*,SysHeader32,WheelStd,0,9
*,*,*,*,*,msctls_statusbar32,WheelStd,0,9
*,*,*,*,*,SysTabControl32,WheelStd,0,9
*,*,*,*,*,CabinetWClass,WheelStd,0,9
*,*,*,*,*,BrowserFrameGripperClass,WheelStd,0,9
*,*,*,*,*,WorkerW,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,TravelBand,WheelStd,0,9
*,*,*,*,*,msctls_progress32,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,DirectUIHWND,WheelStd,0,9
*,*,*,*,*,SearchEditBoxWrapperClass,WheelStd,0,9
*,*,*,*,*,UniversalSearchBand,WheelStd,0,9
*,*,*,*,*,DUIViewWndClassName,WheelStd,0,9
*,*,*,*,*,DirectUIHWND,WheelStd,0,9
*,*,*,*,*,CtrlNotifySink,WheelStd,0,9
*,*,*,*,*,NamespaceTreeControl,WheelStd,0,9
*,*,*,*,*,SHELLDLL_DefView,WheelStd,0,9
*,*,*,*,*,DirectUIHWND,WheelStd,0,9
*,*,*,*,*,ScrollBar,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,Progman,WheelStd,0,9
*,*,*,*,*,SHELLDLL_DefView,WheelStd,0,9
*,*,*,*,*,SysListView32,WheelStd,0,9
*,*,*,*,*,SysHeader32,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,CpuGraphClass,WheelStd,0,9
*,*,*,*,*,ToolbarWindow32,WheelStd,0,9
*,*,*,*,*,SysListView32,WheelStd,0,9
*,*,*,*,*,SysHeader32,WheelStd,0,9
*,*,*,*,*,TreeListWindowClass,WheelStd,0,9
*,*,*,*,*,ScrollBar,WheelStd,0,9
*,*,*,*,*,msctls_statusbar32,WheelStd,0,9
*,*,*,*,*,Internet Explorer_Hidden,WheelStd,0,9
*,*,*,*,*,ReBarWindow32,WheelStd,0,9
*,*,*,*,*,SysPager,WheelStd,0,9
*,*,*,*,*,#32770,WheelStd,0,9
*,*,*,*,*,TrayShowDesktopButtonWClass,WheelStd,0,9
*,*,*,*,*,Chrome_WidgetWin_1,WheelStd,0,9
*,*,*,*,*,SysTabControl32,WheelStd,0,9
*,*,*,*,*,Static,WheelStd,0,9
*,*,*,*,*,Edit,WheelStd,0,9
*,*,idea.exe,*,*,*,WheelStd,0,9
*,*,idea64.exe,*,*,*,WheelStd,0,9
*,*,studio.exe,*,*,*,WheelStd,0,9
*,*,studio64.exe,*,*,*,WheelStd,0,9
*,*,java.exe,*,*,*,WheelStd,0,9
*,*,javaw.exe,*,*,*,WheelStd,0,9
*,*,vmware.exe,*,*,*,WheelStd,0,9
;;;;;;



; Windows IE3 patch for 2 button systems
*,*,iexplore.exe,*,Shell DocObject View,HTML_Internet Explorer,Standard,0,5

; Windows IE4 patch for 2 button systems
;*,*,explorer.exe,*,*,Internet Explorer_Server,VkKeys,0,5

; Windows IE8
*,*,iexplore.exe,*,*,Internet Explorer_Server,WheelStd,0,9

; Google Chrome
;;;;;;;*,*,chrome.exe,*,*,Chrome_RenderWidgetHostHWND,WheelVkey,0,9
*,*,chrome.exe,*,*,Chrome_RenderWidgetHostHWND,WheelStd,0,9

; Outlook Express patch for 2 button systems
*,*,msimn.exe,*,*,Internet Explorer_Server,VkKeys,0,5

; Adobe Acrobat
*,*,acrord32.exe,*,AVL_AVView,AVL_AVView,TwoParents,0,14
*,*,acrobat.exe,*,AVL_AVView,AVL_AVView,TwoParents,0,14

; PowerPoint File Open
*,*,powerpnt.exe,PP97FrameClass,Snake List,OpenListView,Standard,0,13

; PowerPoint 2000
*,*,powerpnt.exe,PP9FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP9FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP9FrameClass,#32770,ScrollBar,StandardP,0,12

; PowerPoint XP
*,*,powerpnt.exe,PP10FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP10FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP10FrameClass,#32770,ScrollBar,StandardP,0,12

; PowerPoint 2003
*,*,powerpnt.exe,PP11FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP11FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP11FrameClass,#32770,ScrollBar,StandardP,0,12

; PowerPoint 2007
*,*,powerpnt.exe,PP12FrameClass,Snake List,OpenListView,Standard,0,13
*,*,powerpnt.exe,PP12FrameClass,mdiClass,paneClassDC,TwoParentsP,0,12
*,*,powerpnt.exe,PP12FrameClass,#32770,ScrollBar,StandardP,0,12

; MS Publisher 2000
;*,*,mspub.exe,,MSWinPub,*,WheelStd,0,9
;*,*,mspub.exe,,,MSWinPub,WheelStd,0,9

; Netscape 6
*,*,netscp6.exe,*,*,MozillaWindowClass,WheelVkey,0,9

; Netscape 8.1.2
*,*,netscape.exe,*,NS_AE_WindowClass,NS_AE_WindowClass,WheelVkey,0,9

; Mozilla Firefox
*,*,firefox.exe,*,*,MozillaWindowClass,WheelVkey,0,9

; Hwp 2002 
*,*,hwp.exe,HwpMainFrameWnd,*,HwpMainEditWnd,WheelStd,0,9
NT,4,*,HwpMainFrameWnd,*,HwpMainEditWnd,WheelStd,0,9

; Exceed
*,*,exceed.exe,*,*,*,WheelP,0,9

; Outlook 2003 HTML format
*,*,outlook.exe,*,AfxWndW,*,WheelStd,0,9

; Outlook 2003
*,*,outlook.exe,rctrl_renwnd32,NativeHWNDHost,NetUIHWND,WheelStd,0,9

; Outlook 2002 HTML format
*,*,outlook.exe,*,AfxWndA,*,WheelStd,0,9

; Outlook Express 6.0 when launched from IE
*,*,iexplore.exe,ATH_Note,##MimeEdit_Server,Internet Explorer_Server,WheelStd,0,9

; Outlook 2000
*,*,outlook.exe,*,AfxWnd,*,WheelStd,0,9
*,*,outlook.exe,*,rctrl_renwnd32,*,WheelStd,0,9
*,*,outlook.exe,rctrl_renwnd32,SysListView32,AfxWnd,WheelStd,0,9

; Win98/Win2k explorer left side window
*,*,explorer.exe,CabinetWClass,SHELLDLL_DefView,Internet Explorer_Server,VkKeys,0,9
; WinXP explorer left side window
NT,5,explorer.exe,CabinetWClass,DUIViewWndClassName,DirectUIHWND,WheelStd,0,9

; FrontPage 2000 views
*,*,frontpg.exe,FrontPageExplorerWindow40,AfxWnd42,SysListView32,WheelStd,0,9

; Opera web browser
*,*,opera.exe,*,*,*,WheelStd,0,9

; Google Picasa
*,*,picasa2.exe,*,*,*,WheelStd,0,9

; OpenOffice.org
*,*,soffice.bin,*,*,*,WheelStd,0,9

; Windows Mail
*,*,WinMail.exe,*,*,*,WheelStd,0,9

; Corel Quattro Pro
*,*,QPW.exe,*,*,*,WheelVkey,0,9

; VMWare
*,*,vmware.exe,*,*,MKSEmbedded,SendInput,0,9

; VMWare-VMX
*,*,vmware-vmx.exe,*,*,MKSEmbedded,SendInput,0,9

; VMware Player
*,*,vmplayer.exe,*,*,*,WheelStd,0,9

; Windows Live Mail
*,*,wlmail.exe,*,*,*,WheelVkey,0,9

; Remote Desktop
*,*,mstsc.exe,*,*,*,WheelStd,0,9

; Windows XP Mode
*,*,VMWindow.exe,*,*,*,WheelStd,0,9

; Google Picasa
*,*,picasa3.exe,*,*,*,WheelStd,0,9

; Yahoo Messenger
*,*,YahooMessenger.exe,*,*,Internet Explorer_Server,WheelStd,0,9

; iTunes
*,*,iTunes.exe,*,*,*,WheelStd,0,9

; Access 2007
*,*,MSACCESS.exe,*,*,*,WheelStd,0,9

; Help Panel
*,*,HELPPANE.exe,*,*,*,WheelStd,0,9

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Pass 1 rules (These rules run last)
;
; If no scrolling method was found with the builtin logic, then
; these rules are checked.
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; Outlook Express patch for 3 button systems
WIN,*,msimn.exe,*,*,SysTreeView32,WheelStd,1,9
WIN,*,msimn.exe,*,*,SysListView32,WheelStd,1,9
WIN,*,msimn.exe,*,*,Internet Explorer_Server,Standard,1,9
NT,*,msimn.exe,*,*,SysTreeView32,WheelStd,1,9
NT,*,msimn.exe,*,*,SysListView32,WheelStd,1,9
NT,*,msimn.exe,*,*,Internet Explorer_Server,Standard,1,9

; Lotus Notes patch for both 2 and 3 button systems
*,*,nlnotes.exe,NOTES,SCCVIEWER,SCCDISPLAY,Standard,1,13

; SashWDE
*,*,sashwde.exe,*,*,WDEEditor,Standard,1,13

; Add/Remove Programs (Windows 2000)
NT,5,mshta.exe,*,*,Internet Explorer_Server,Standard,1,9

; Add/Remove Programs (Windows XP)
NT,5,rundll32.exe,*,NativeHWNDHost,DirectUIHWND,WheelStd,1,9

; Winamp
*,*,winamp.exe,*,*,Winamp PE,WheelStd,1,9

; Setup guide
*,*,iexplore.exe,IEFrame,Internet Explorer_TridentDlgFrame,Internet Explorer_Server,WheelStd,1,9

; MSAccess
*,*,msaccess.exe,OMain,ODataPage,Internet Explorer_Server,WheelStd,1,9

; Java support
*,*,java.exe,*,*,*,WheelStd,1,9
*,*,javaw.exe,*,*,*,WheelStd,1,9

; Eudora
*,*,eudora.exe,EudoraMainWindow,AfxFrameOrView42,Internet Explorer_Server,WheelStd,0,9
*,*,eudora.exe,EudoraMainWindow,AfxFrameOrView70,Internet Explorer_Server,WheelStd,0,9
*,*,eudora.exe,*,EudoraMainWindow,MDIClient,WheelVkey,0,9

; Windows 7 Personalization settings
*,*,Explorer.exe,CabinetWClass,XBabyHost,DirectUIHWND,WheelP,0,9

[AutoScrollTable]

; AUTO SCROLL TABLE  AUTO SCROLL TABLE  AUTO SCROLL TABLE
; AUTO SCROLL TABLE  AUTO SCROLL TABLE  AUTO SCROLL TABLE
; AUTO SCROLL TABLE  AUTO SCROLL TABLE  AUTO SCROLL TABLE

; List the Auto scrolling records under the [AutoScrollTable] section
; Record Format
; OsName,OsVersion,AppName,AppVersion,ScrollMethod
;
; OS Names            : * WIN NT
; WIN OS Versions     : * 95  98    ; NT OS Versions     : * 4   5
; Application Name    : * string
; Application Version : * or x.x.x.x
; ScrollMethod        : standard or smooth

*,*,iexplore.exe,*,smooth
*,*,winword.exe,*,smooth
*,*,outlook.exe,*,smooth
*,*,excel.exe,*,smooth
*,*,msimn.exe,*,smooth
*,*,cnext.exe,*,smooth

[MB3HINT ICON]
; List the Applications that scrolling icon will not be shown
; Record Format
; AppName,Classname

; Application Name    : * string
; Window Classname    : * string

*,HwndWrapper
*,MKSEmbedded
*,MozillaWindowClass
*,NS_AE_WindowClass


</pre>
</blockquote>


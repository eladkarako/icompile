Add this to the <code>.htaccess</code> at your website's root.
It will make sure binary files are 
- fully supported on parallel and multi-download managers.
- explicit download-supported on older browsers.
- not sniffed for type (first few bytes).
- have proper name addition to <code>Content-Disposition</code>, even long names are supported.

the rule below includes a lot of extension
mostly I've extracted from 7Zip, WinRAR, WinZip, Adobe Audition and UltraISO.

it also prevents files from being executed from your website,
on client's desktop or mobile phone, especially XPI (Firefox extension) and CRX (Chrome extension)
which won't be jumping warnings from the browser (so you can finally host them safely).

naturally don't expand the rule below to web-extensions such as PHP, HTM, HTML, swf or JS otherwise your website file will suddenly be downloaded instead of being parsed..

old file-extensions such as vbs are recommended to being added, again this adds security measure, to prevent script execution (mostly from Internet-Explorer users) on their desktops.

<pre><style type="text/css" media="all">
  /* make [tohtml.com]'s PRE-tag look and scroll better */
  pre[code-like]{
    color: #000000;
    background: #ffffff;
    overflow-x: auto;
    word-wrap: normal !important;
    word-break: normal !important;
    white-space: pre !important;
    border: 1px dashed rgba(214,214,214,.7);
    padding: 5px;
    margin: 0;
    border-radius: 2px;
  }
</style></pre>

<pre><span style='color:#808030; '>&lt;</span>FilesMatch <span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\\.</span><span style='color:#0000e6; '>(?i:000|001|002|7z|7zip|ace|aif|ape|arj|ashdisc|au|avi|b5i|b5t|b64|b6i|b6t|bat|bhx|bif|bin|bwi|bwt|bz2|bzip|bzip2|c2d|cab|ccd|cda|cdi|cel|cif|cmd|command|cpio|cpx|cue|daa|dao|db|dbl|deb|dmg|dvd|dwd|fat|fcd|fla|flac|flp|gi|gz|gzip|hfs|hqx|iff|ima|img|iso|isz|jar|lcs|lha|lzh|lzma|m4a|mac|mdf|mds|mim|mp</span><span style='color:#0f69ff; '>\\+</span><span style='color:#0000e6; '>|mp</span><span style='color:#0f69ff; '>\\+</span><span style='color:#0f69ff; '>\\+</span><span style='color:#0000e6; '>|mp1|mp2|mp3|mp4|mpc|mpg|mpp|ncd|nrg|ntfs|off|p2i|pcm|pdi|pxi|rar|raw|reg|rif|rpm|sam|smp|snd|sql|sql3|sqlite|squashfs|svx|swm|tao|tar|tar</span><span style='color:#0f69ff; '>\\.</span><span style='color:#0000e6; '>md5|taz|tbz|tbz2|tgz|timg|tpz|txz|tz|uif|uue|vbs|vc4|vhd|voc|vox|wav|wim|wma|xar|xmd|xmf|xpi|xz|z|zip|zipx)$</span><span style='color:#800000; '>"</span><span style='color:#808030; '>></span>

<span style='color:#004a43; '>#</span><span style='color:#808030; '>#</span><span style='color:#004a43; '>optional </span><span style='color:#808030; '>-</span><span style='color:#004a43; '> will force download</span><span style='color:#808030; '>,</span><span style='color:#004a43; '> but will also make HTML5 resources for audio</span><span style='color:#808030; '>/</span><span style='color:#004a43; '>video not</span><span style='color:#808030; '>-</span><span style='color:#004a43; '>work no older browsers</span><span style='color:#808030; '>.</span>
<span style='color:#004a43; '>#</span><span style='color:#004a43; '>  </span><span style='color:#808030; '>&lt;</span><span style='color:#004a43; '>IfModule mod_mime</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>c</span><span style='color:#808030; '>></span><span style='color:#004a43; '> </span>
<span style='color:#004a43; '>#</span><span style='color:#004a43; '>    ForceType application</span><span style='color:#808030; '>/</span><span style='color:#004a43; '>octet</span><span style='color:#808030; '>-</span><span style='color:#004a43; '>stream</span>
<span style='color:#004a43; '>#</span><span style='color:#004a43; '>  </span><span style='color:#808030; '>&lt;</span><span style='color:#808030; '>/</span><span style='color:#004a43; '>IfModule</span><span style='color:#808030; '>></span>
<span style='color:#004a43; '>#</span><span style='color:#808030; '>#</span>

  <span style='color:#808030; '>&lt;</span>IfModule mod_headers<span style='color:#808030; '>.</span>c<span style='color:#808030; '>></span> 
<span style='color:#004a43; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#004a43; '>#</span><span style='color:#808030; '>#</span><span style='color:#004a43; '>fix a bug in old GoDaddy servers</span><span style='color:#808030; '>.</span>
    Header unset X<span style='color:#808030; '>-</span>Content<span style='color:#808030; '>-</span>Type<span style='color:#808030; '>-</span>Options
    Header unset Content<span style='color:#808030; '>-</span>Disposition

<span style='color:#004a43; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#004a43; '>#</span><span style='color:#808030; '>#</span><span style='color:#004a43; '>prevent mimetype sniffing </span><span style='color:#808030; '>(</span><span style='color:#004a43; '>first few bytes can determine that a file should be opened in browser</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>
    Header set X<span style='color:#808030; '>-</span>Content<span style='color:#808030; '>-</span>Type<span style='color:#808030; '>-</span>Options <span style='color:#800000; '>"</span><span style='color:#0000e6; '>nosniff</span><span style='color:#800000; '>"</span>

<span style='color:#004a43; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#004a43; '>#</span><span style='color:#808030; '>#</span><span style='color:#004a43; '>extract filename</span><span style='color:#808030; '>,</span><span style='color:#004a43; '> apply to proper </span><span style='color:#808030; '>(</span><span style='color:#004a43; '>for example</span><span style='color:#808030; '>)</span><span style='color:#004a43; '> Content</span><span style='color:#808030; '>-</span><span style='color:#004a43; '>Disposition</span><span style='color:#808030; '>:</span><span style='color:#004a43; '> attachment</span><span style='color:#808030; '>;</span><span style='color:#004a43; '> file</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>my music.mp3</span><span style='color:#800000; '>"</span>
    SetEnvIf Request_URI <span style='color:#800000; '>"</span><span style='color:#0000e6; '>^.*/([^/]*)$</span><span style='color:#800000; '>"</span> FILENAME<span style='color:#808030; '>=</span>$<span style='color:#008c00; '>1</span>
    Header set <span style='color:#800000; '>"</span><span style='color:#0000e6; '>Content-Disposition</span><span style='color:#800000; '>"</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>attachment;filename=</span><span style='color:#0f69ff; '>\\"</span><span style='color:#0000e6; '>%{FILENAME}e</span><span style='color:#0f69ff; '>\\"</span><span style='color:#800000; '>"</span>
    UnsetEnv FILENAME
  <span style='color:#808030; '>&lt;</span><span style='color:#808030; '>/</span>IfModule<span style='color:#808030; '>></span>

<span style='color:#808030; '>&lt;</span><span style='color:#808030; '>/</span>FilesMatch<span style='color:#808030; '>></span>
</pre>
Either do it manually,
or add few "include" items to your CCleaner configuration-file.

first let's break the profile-location for each of the operating-systems supported (Windows XP, Windows 7 and later, MacOS and Linux based - not including ChromeOS)
<pre>
Windows (XP, 7 and later..)
C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\
C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\
C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\
C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\
C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\
C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\
C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\
C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\

Mac OS X:
~/Library/Application Support/Google/Chrome Canary/
~/Library/Application Support/Google/Chrome SxS/
~/Library/Application Support/Google/Chrome/

Linux:
~/.config/google-chrome/

</pre>

the folder-location you should empty-recursively or (simply delete the entire folder - it will be regenerated on next Chrome run) - sorry for the slash direction, on Mac/Linux just switch <code>\\</code> to <code>/</code>  :)
<pre>
\\Crash Reports\\
\\Crashpad\\
\\Default\\Application Cache\\
\\Default\\Cache\\
\\Default\\File System\\
\\Default\\GPUCache\\
\\Default\\IndexedDB\\
\\Default\\Local Storage\\
\\Default\\Media Cache\\
\\Default\\Pepper Data\\
\\Default\\Service Worker\\ScriptCache\\
\\Default\\Session Storage\\
\\ShaderCache\\
</pre>

You probably want to switch from <code>Elad</code> to your user-name,
here is an example on how it should look inside (for example) ccleaner.ini file:
<code>Include8=PATH|C:&#92;Documents and Settings&#92;Elad&#92;Local Settings&#92;Application Data&#92;Chromium&#92;User Data&#92;Default&#92;Cache&#92;|*.*|RECURSE</code>


feel free to run the following code in your console,
to generate a proper list which you can add to your CCleaner (or any batch file for example..)

when copy&paste don't forget to 
  -  change your user-name to something other than 'Elad', unless your name is 'Elad' too, in which case - this is awesome!! (you can send me email to say hello)
  -  remove the prefix and suffix of <code>"</code> chars from console :)
  -  make sure the start_from is indeed starting from first-new index inline, 
     this is tricky since ccleaner.ini is not sorted nicely, so you better drop its content into EditPlus and sort it by "numeric value",
     quickly find which one is the last line starting with "IncludeXXXXX=" the start_from should be this index plus one,
     for example if your last "IncludeXX" line is <code>Include41=PATH|C:&#92;Users&#92;Elad&#92;AppData&#92;Roaming&#92;Macromedia&#92;Flash Player&#92;#SharedObjects|*.*|RECURSE</code> - change the start index from <code>15</code> to <code>42</code><code> :)

<pre>
(function(result, profile_location__folders, to_wipe__folders, user_name, start_from){
  /* normalize */
  user_name = user_name.replace(/[\\\\\\/]+/g,'');
  profile_location__folders = profile_location__folders.map(function(s){ return s.replace('Elad', user_name); });

  result = [];

  profile_location__folders.forEach(function(profile_location__folder){
    to_wipe__folders.forEach(function(to_wipe__folder){
      result.push(profile_location__folder + '\\\\' + to_wipe__folder);
    });
  });

  result = result.map(function(item, index){
    //for example   Include42=PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Default\\IndexedDB|*.*|RECURSE
    return 'Include' + String(start_from + index) + '=PATH|' + item + '\\\\' + '|*.*|RECURSE';
  });
  
  result = result.join('\
'); /* make into a long list-like string */
  
  console.log(
    result
  );
  
  return result
  
}(
    null
  ,
    [
        'C:\\\\Documents and Settings\\\\Elad\\\\Local Settings\\\\Application Data\\\\Chromium\\\\User Data'
      , 'C:\\\\Documents and Settings\\\\Elad\\\\Local Settings\\\\Application Data\\\\Google\\\\Chrome Canary\\\\User Data'
      , 'C:\\\\Documents and Settings\\\\Elad\\\\Local Settings\\\\Application Data\\\\Google\\\\Chrome SxS\\\\User Data'
      , 'C:\\\\Documents and Settings\\\\Elad\\\\Local Settings\\\\Application Data\\\\Google\\\\Chrome\\\\User Data'
      , 'C:\\\\Users\\\\Elad\\\\AppData\\\\Local\\\\Chromium\\\\User Data'
      , 'C:\\\\Users\\\\Elad\\\\AppData\\\\Local\\\\Google\\\\Chrome Canary\\\\User Data'
      , 'C:\\\\Users\\\\Elad\\\\AppData\\\\Local\\\\Google\\\\Chrome SxS\\\\User Data'
      , 'C:\\\\Users\\\\Elad\\\\AppData\\\\Local\\\\Google\\\\Chrome\\\\User Data'
    ]
  ,
    [
        'Crash Reports'
      , 'Crashpad'
      , 'Default\\\\Application Cache'
      , 'Default\\\\Cache'
      , 'Default\\\\File System'
      , 'Default\\\\GPUCache'
      , 'Default\\\\IndexedDB'
      , 'Default\\\\Local Storage'
      , 'Default\\\\Media Cache'
      , 'Default\\\\Pepper Data'
      , 'Default\\\\Service Worker\\\\ScriptCache'
      , 'Default\\\\Session Storage'
      , 'ShaderCache'
    ]
  ,
    "Elad"
  ,
    15
));
</pre>


which will generate about 118 items:
<pre>
Include15PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Crash Reports\\|*.*|RECURSE
Include16PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Crashpad\\|*.*|RECURSE
Include17PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Default\\Application Cache\\|*.*|RECURSE
Include18PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Default\\Cache\\|*.*|RECURSE
Include19PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Default\\File System\\|*.*|RECURSE
Include20PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Default\\GPUCache\\|*.*|RECURSE
Include21PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Default\\IndexedDB\\|*.*|RECURSE
Include22PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Default\\Local Storage\\|*.*|RECURSE
Include23PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Default\\Media Cache\\|*.*|RECURSE
Include24PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Default\\Pepper Data\\|*.*|RECURSE
Include25PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Default\\Service Worker\\ScriptCache\\|*.*|RECURSE
Include26PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\Default\\Session Storage\\|*.*|RECURSE
Include27PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Chromium\\User Data\\ShaderCache\\|*.*|RECURSE
Include28PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\Crash Reports\\|*.*|RECURSE
Include29PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\Crashpad\\|*.*|RECURSE
Include30PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\Default\\Application Cache\\|*.*|RECURSE
Include31PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\Default\\Cache\\|*.*|RECURSE
Include32PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\Default\\File System\\|*.*|RECURSE
Include33PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\Default\\GPUCache\\|*.*|RECURSE
Include34PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\Default\\IndexedDB\\|*.*|RECURSE
Include35PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\Default\\Local Storage\\|*.*|RECURSE
Include36PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\Default\\Media Cache\\|*.*|RECURSE
Include37PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\Default\\Pepper Data\\|*.*|RECURSE
Include38PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\Default\\Service Worker\\ScriptCache\\|*.*|RECURSE
Include39PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\Default\\Session Storage\\|*.*|RECURSE
Include40PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome Canary\\User Data\\ShaderCache\\|*.*|RECURSE
Include41PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\Crash Reports\\|*.*|RECURSE
Include42PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\Crashpad\\|*.*|RECURSE
Include43PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\Default\\Application Cache\\|*.*|RECURSE
Include44PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\Default\\Cache\\|*.*|RECURSE
Include45PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\Default\\File System\\|*.*|RECURSE
Include46PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\Default\\GPUCache\\|*.*|RECURSE
Include47PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\Default\\IndexedDB\\|*.*|RECURSE
Include48PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\Default\\Local Storage\\|*.*|RECURSE
Include49PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\Default\\Media Cache\\|*.*|RECURSE
Include50PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\Default\\Pepper Data\\|*.*|RECURSE
Include51PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\Default\\Service Worker\\ScriptCache\\|*.*|RECURSE
Include52PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\Default\\Session Storage\\|*.*|RECURSE
Include53PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome SxS\\User Data\\ShaderCache\\|*.*|RECURSE
Include54PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\Crash Reports\\|*.*|RECURSE
Include55PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\Crashpad\\|*.*|RECURSE
Include56PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\Default\\Application Cache\\|*.*|RECURSE
Include57PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\Default\\Cache\\|*.*|RECURSE
Include58PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\Default\\File System\\|*.*|RECURSE
Include59PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\Default\\GPUCache\\|*.*|RECURSE
Include60PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\Default\\IndexedDB\\|*.*|RECURSE
Include61PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\Default\\Local Storage\\|*.*|RECURSE
Include62PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\Default\\Media Cache\\|*.*|RECURSE
Include63PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\Default\\Pepper Data\\|*.*|RECURSE
Include64PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\Default\\Service Worker\\ScriptCache\\|*.*|RECURSE
Include65PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\Default\\Session Storage\\|*.*|RECURSE
Include66PATH|C:\\Documents and Settings\\Elad\\Local Settings\\Application Data\\Google\\Chrome\\User Data\\ShaderCache\\|*.*|RECURSE
Include67PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Crash Reports\\|*.*|RECURSE
Include68PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Crashpad\\|*.*|RECURSE
Include69PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Default\\Application Cache\\|*.*|RECURSE
Include70PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Default\\Cache\\|*.*|RECURSE
Include71PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Default\\File System\\|*.*|RECURSE
Include72PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Default\\GPUCache\\|*.*|RECURSE
Include73PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Default\\IndexedDB\\|*.*|RECURSE
Include74PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Default\\Local Storage\\|*.*|RECURSE
Include75PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Default\\Media Cache\\|*.*|RECURSE
Include76PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Default\\Pepper Data\\|*.*|RECURSE
Include77PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Default\\Service Worker\\ScriptCache\\|*.*|RECURSE
Include78PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\Default\\Session Storage\\|*.*|RECURSE
Include79PATH|C:\\Users\\Elad\\AppData\\Local\\Chromium\\User Data\\ShaderCache\\|*.*|RECURSE
Include80PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\Crash Reports\\|*.*|RECURSE
Include81PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\Crashpad\\|*.*|RECURSE
Include82PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\Default\\Application Cache\\|*.*|RECURSE
Include83PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\Default\\Cache\\|*.*|RECURSE
Include84PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\Default\\File System\\|*.*|RECURSE
Include85PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\Default\\GPUCache\\|*.*|RECURSE
Include86PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\Default\\IndexedDB\\|*.*|RECURSE
Include87PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\Default\\Local Storage\\|*.*|RECURSE
Include88PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\Default\\Media Cache\\|*.*|RECURSE
Include89PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\Default\\Pepper Data\\|*.*|RECURSE
Include90PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\Default\\Service Worker\\ScriptCache\\|*.*|RECURSE
Include91PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\Default\\Session Storage\\|*.*|RECURSE
Include92PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome Canary\\User Data\\ShaderCache\\|*.*|RECURSE
Include93PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\Crash Reports\\|*.*|RECURSE
Include94PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\Crashpad\\|*.*|RECURSE
Include95PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\Default\\Application Cache\\|*.*|RECURSE
Include96PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\Default\\Cache\\|*.*|RECURSE
Include97PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\Default\\File System\\|*.*|RECURSE
Include98PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\Default\\GPUCache\\|*.*|RECURSE
Include99PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\Default\\IndexedDB\\|*.*|RECURSE
Include100PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\Default\\Local Storage\\|*.*|RECURSE
Include101PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\Default\\Media Cache\\|*.*|RECURSE
Include102PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\Default\\Pepper Data\\|*.*|RECURSE
Include103PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\Default\\Service Worker\\ScriptCache\\|*.*|RECURSE
Include104PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\Default\\Session Storage\\|*.*|RECURSE
Include105PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome SxS\\User Data\\ShaderCache\\|*.*|RECURSE
Include106PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\Crash Reports\\|*.*|RECURSE
Include107PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\Crashpad\\|*.*|RECURSE
Include108PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Application Cache\\|*.*|RECURSE
Include109PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cache\\|*.*|RECURSE
Include110PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\File System\\|*.*|RECURSE
Include111PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\GPUCache\\|*.*|RECURSE
Include112PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\IndexedDB\\|*.*|RECURSE
Include113PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Storage\\|*.*|RECURSE
Include114PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Media Cache\\|*.*|RECURSE
Include115PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Pepper Data\\|*.*|RECURSE
Include116PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Service Worker\\ScriptCache\\|*.*|RECURSE
Include117PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Session Storage\\|*.*|RECURSE
Include118PATH|C:\\Users\\Elad\\AppData\\Local\\Google\\Chrome\\User Data\\ShaderCache\\|*.*|RECURSE
</pre>

naturally you won't need all of them,
but you might do!

especially since:
 - Chromium, Chrome and Chrome Canary can live in same computer quite happily :]
 - folders that won't exist would simply be skipped,
 - you might use the portable ccleaner version, where you might want to move the installation around few computers (on DiskOnKey or network location for example)
   --- in this case you might even want to re-run the script for each user-name used (including Admin/Administrator/other.. accounts)
 - better not use those fancy </code><code>%Profile%</code> and other current profile shortcuts, the web is filled with stories about cases where CCleaner has emptied the entire hard-drive or user accounts (desktop and all!!!) because of "won't fix" bug that (apparently still exist in newer versions).
   --- so don't take a change and only use direct-folder names...
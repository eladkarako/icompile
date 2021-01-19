<img src="https://icompile.eladkarako.com/_uploads/2013/01/recentmodfile.jpg" alt="" title="recentmodfile" width="151" height="159" class="alignnone size-full wp-image-585" />

I am using this one, along with selenium, and an automated screen-capture programs I've made in C#,
to write screenshots of tests to Apache hdocs folder, so it will be available as a page resource.
my program does not overrides the image name, it keeps couple of screenshots in a folder and the php snippet attached here, selects the 3 (can be more) of the last modified files,
puts a nice string in a format suitable for the later usage in page's JS code,
for example, to be used in a roller or something..

<pre>
<?php
function getListOfNewestFiles($folder,$maxAmountOfFiles) {
    if($maxAmountOfFiles == 0) return( "[]" );

     $files = array();

     foreach (scandir($folder) as $file) {
         $path = $folder . DIRECTORY_SEPARATOR . $file;
         if (is_dir($path)) continue;                                       // do not count folders. only files.
         if (pathinfo($path, PATHINFO_EXTENSION) != "jpg") continue;        // include only jpg files
         $files[filemtime($path)] = $path;                                  
     }
     krsort($files);

     $arr = array_slice($files, 0, $maxAmountOfFiles);                      // return the first newest file's path as array
     return "[\\"" . implode("\\", \\"",$arr) . "\\"]";                         // return only a path and name as a string
}
print_r(getListOfNewestFiles(".",1));
?>
</pre>
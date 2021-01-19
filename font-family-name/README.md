<!--more-->

use cygwin with <code>fc-scan --format="%{family}_%{style}" c:/windows/fonts/8514fix.fon</code> to get <code>Fixedsys_Regular</code> which you can append the file-extension <code>fon</code> to, to get a valid full file-name <code>Fixedsys_Regular.fon</code>.

copy the required ttf/otf/fon/... font-files to another folder, and pass through them,
rename the entire folder so you'll end-up with a folder filled with font-files which are recognisable by name.

You can script it all together or use <code>otfinfo</code> (<code>otfinfo --help</code> for details) as an alternative.


Find cygwin's <code>otfinfo</code> and <code>fc-scan</code> under <code>/usr/bin/</code>.

You can provide all the cygwin dependencies and run the exe from CMD shell under windows.
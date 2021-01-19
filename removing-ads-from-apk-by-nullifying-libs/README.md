Walking-through the main-program-smali-code, 
and commenting-out calls to ads-methods, or switching if-conditions, 
requires some understanding of the code, and manual-work, 
since there are various ways and location a 'call to an ad' can be manifested in the code, 

this means the process as explained in <a href="https://icompile.eladkarako.com/removing-ads-from-apk">https://icompile.eladkarako.com/removing-ads-from-apk</a> can not be automated.

there is another way, 
and (as far as I can tell) I am the first-one that came-up with that alternative, 
nullifying the actual methods, not in the main-program's smali, 
but in the lib. that is used.

For example, 
if the main-program calls for a method named <code>showAd</code> in <code>com/google/gms/ads</code>, 
instead of commenting-out that <code>invoke</code>, 
I will empty-out the content of the method <code>showAd</code>, leaving just the function signature (function name), 

There few "rule" that helped this process be semi-automated (I'll explain later about process-automation), 
first, I don't want to modify functions that returns a value of any kind, 
so modification will only be done on VOID-methods (this way you don't need to understand the type of objects and the way it is used in the program life-cycle - no digging into logic), 
next - no modifying <code>abstract</code> methods since there isn't much of a point modifying that anyway..

To modify that VOID-methods we need to keep the function name ("signature") any lines including <code>.locals</code> (or <code>.registers</code>) and that's it!

emptying up VOID-methods can still break the code, 
but it usually won't...

the basic idea of emptying-up VOID-methods in the lib.s is that, 
it won't require digging up in various locations in the actual main-program smali-code, 
the main-program can still execute (<code>invoke</code>) a call to that method, 
but it won't initialize anything, 
plus, private methods, used internally in the lib. itself will act the same (calling, ending, with nothing actualy done).


<a href="https://github.com/eladkarako/smali_void_method_nullifier">https://github.com/eladkarako/smali_void_method_nullifier</a>


Automating the nullify'ication process requires nothing-more than reading a file's content, 
some string-manipulations, and writing it back.

I've wrapped the functionality in a small NodeJS-client script, 
and few Windows batch-files, one to backup the original file to a <code>.bak</code>-file, 
and one to allow unlimited-parallel executions of the first-batch file using <code>start cmd /c "..."</code> trick, 
similar to one used in:
<a href="https://icompile.eladkarako.com/ffmpeg-fixes-your-everything/">https://icompile.eladkarako.com/ffmpeg-fixes-your-everything/</a>.


parallel-execution batch-file supports drag&amp;drop of multiple files, 
it is not limited but usually it is best to keep it under 50 files at a time, due to files-path-length limits.

A nice way to gather just the files is to use Locate32, and look for smali-files, 
dragging and dropping ~50-100 files at a time on the parallel-execution batch file, 
then updating the database of locate32 (again) and looking for the '.bak' files, and deleting them.

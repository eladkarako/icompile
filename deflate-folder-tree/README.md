This is a CMD (BATCH) script to flat a folder tree,
all files will be moved to the root.
<pre>
for /r %%e in (*.*) do move "%%e" .\\
</pre>

working recursively, a user interaction would be needed when ever two files with the same name exist in the root, also you might wanna use <strong>attrib</strong> to remove all <strong>hidden</strong> and <strong>system</strong> attributes because CMD does not behave well with does on.

proper way to make it work: put the script into a bank cmd (or bat) file,
put it in the root folder and run it, you can modify it to work without user interaction.
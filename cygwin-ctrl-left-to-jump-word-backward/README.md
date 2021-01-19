It is time again to fix (or modify) some of the core *nix based characteristics to make you *unix OS a little like Windows (spit to the left in disgust right.... now.)

look for <code>~/.inputrc</code> and add those binds to the very-end of the file (add new line afterwards).

<pre>
# mappings for Ctrl-left-arrow and Ctrl-right-arrow for cursor word-wise moving.
"\\e[1;5C": forward-word
"\\e[1;5D": backward-word
"\\e[5C": forward-word
"\\e[5D": backward-word
"\\e\\e[C": forward-word
"\\e\\e[D": backward-word

</pre>

<strong><em>this will work on Cygwin and OSX as well as every Linux/Unix/*nix...</em></strong>
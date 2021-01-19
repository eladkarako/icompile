1. javascript replace stores sub-strings as in the length of the string you are searching.
2. requirement: make a CSS minifier (a.k.a uglify algorithm) that will be more efficient then replace. and prove it.


I.draft solution
1. use 'replace' to understand the plain problem:
<pre>
var cssunbeautifier = function (rawcss) {
    'use strict';
    var s = rawcss;

    s = s.replace(/\
/ig, '');
    s = s.replace(/\\s*:\\s*/ig, ':');
    s = s.replace(/\\s*\\,\\s*/ig, ',');
    s = s.replace(/\\s*\\{\\s*/ig, '{');
    s = s.replace(/\\s*\\}\\s*/ig, '}');
    s = s.replace(/\\s*\\;\\s*/ig, ';');

    return (s);
};
</pre>

problem: replace evaluates as new regular expression, storing sequences are done 6 times,
plain calculation (without integrating parser engines, etc..)- since using the /g switch is searching all the
input, -----: o(6n).
memory complexity: string replace is returning a string and saving a string in variable, old reference is GC(flushed..) and new reference stores ~~ same amount or less.
worst case there are no replacements and the same input size is returning again, -------: o(6n).
simplicity: high.


second solution:
look at the string as array of chars.
prepare second empty array to hold the minified-string result.

while walking over the array: think: if "you" (the current char) are 'space', then on some cases, we (as the storing mechanism as storage area) overlook/ignore <strong>it</strong> and continue to the next char.
this covers the previous spaces, limit them to single space on some cases, or none in other cases.
asking again, but this time or the forward char, "if I (the current char) am "space", then on some cases we can overlook or ignore <strong>it</strong>.

for example:
forward "delete":
space and then '{' - we do nothing
but: '}' and then space - we don't include the space.

backward "delete":
space and then space - we do not include the first space.


here is the combined example of the second draft,

<pre>
a = "  .exampleClass .secondClass {   background-color :   blue ; }  ".split('');
b=[];
for(var i=0; i<a.length; i++){
    //forward space delete --- look backward
    if(  (a[i]===' ') && 
         ( (a[i-1]===' ') || (a[i-1]===';') || (a[i-1]===':') || 
           (a[i-1]==='{') || (a[i-1]==='}') )  ) continue;

    //backward space delete --- look forward
    if(  (a[i]===' ') && 
         ( (a[i+1]===' ') || (a[i+1]===';') || (a[i+1]===':') || 
           (a[i+1]==='{') || (a[i+1]==='}') )  ) continue;
           
    b.push(a[i]);
}
b.join('');
</pre>

the result will be ".exampleClass .secondClass{background-color:blue;}"



third solution,
removing the "if" usage is usually effective consider the total length,
and the fact the "if" conditions are breaking the code.

we will walk the same amount of steps as before, the algorithm has not changed,
but by skipping the conditions and comparing boolean values, the code is rendering using simpler set-of "tools",
if before we've had:
<pre>for, length, ifx2, [indexer in array],  &&, ||, continuex2, push, joinx1 and return.</pre>
now we have         
<pre>for, length, [indexer in array], &&, ||, push, joinx1 and return.</pre>
which means parsing is faster/simpler.

here is the example, doing the same as before, but better:
<pre>
a = "  .exampleClass .secondClass {   background-color :   blue ; }  ".split('');
b = [];
for (var i = 0; i < a.length; i++)
    " " === a[i] && 
    (" " === a[i - 1] || ";" === a[i - 1] || ":" === a[i - 1] || "{" === a[i - 1] || "}" === a[i - 1]) 

    || " " === a[i] && 
    (" " === a[i + 1] || ";" === a[i + 1] || ":" === a[i + 1] || "{" === a[i + 1] || "}" === a[i + 1])
    
    || b.push(a[i]);
</pre>



how not to continue:
you might be thinking that joining the "checking for a series of spaces" might be an even better idea (or faster),
but in fact it is hardly the case- by increasing the amount of "tools" or "native-methods" you are using (like concat, join or simply putting [] inside an array thus implicitly define a new array (for example), the parser need to use,
and comparing string and not "single letter string" (a.k.a char.) -- (there is a difference!)
for example by 
<pre>
......
    for (var i = 0; i < a.length; i++)
    var s = [].concat(a[i - 1],a[i],a[i + 1]).join('');
    (s === "   " || s===";  " || s===":  ") || b.push(a[i])
......
</pre>

this is naturally wrong, since by asking each time on 2 chars- each time, we are 'wasting' computation,
both in memory complexity, where now each temp. storage holds 3 letters char, and both in algorithm complexity.

  
  

a fully working example can be found in my <a href="http://work.eladkarako.com/demo" title="http://work.eladkarako.com/demo" target="_blank">work.eladkarako.com/demo</a> site,
in the page <a href="http://work.eladkarako.com/demo/css_beautifier.html" title="http://work.eladkarako.com/demo/css_beautifier.html" target="_blank">http://work.eladkarako.com/demo/css_beautifier.html</a>. 

   
the code is available in my github, <a href="https://github.com/eladkarako/Hyper-Efficient-CSS-Beautifier" title="https://github.com/eladkarako/Hyper-Efficient-CSS-Beautifier" target="_blank">https://github.com/eladkarako/Hyper-Efficient-CSS-Beautifier</a>
exist along with the beautifier algorithm, which is also, very efficient.
   
    
  
  
extra something:

you might want to minify multi-lines too (and space between... etc..)
the following example is using a scope of method, it can be used,
by calling <em>cssUnBeautifier</em> with the value field of textarea (for example)
<pre>
var cssUnBeautifier = function(rawcss) {
   'use strict';
    var a = rawcss.split(''), s=[];
    for (var i = 0; i < a.length; i++)
        "\
" === a[i]

        ||
        " " === a[i] && 
        (" " === a[i - 1] || ";" === a[i - 1] || ":" === a[i - 1] || "{" === a[i - 1] || "}" === a[i - 1]) 

        || 
        " " === a[i] && 
        (" " === a[i + 1] || ";" === a[i + 1] || ":" === a[i + 1] || "{" === a[i + 1] || "}" === a[i + 1]) 
        
        || s.push(a[i]);

   return( s.join('') );
};
</pre>', 'CSS minifier
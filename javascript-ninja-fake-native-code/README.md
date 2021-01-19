The magic is really just using styles to mimic the style used by Chrome's console output.

console.log("%cfunction " + "%ctoString() { [native code] }", "font-style:italic; color:rgb(180,42,158);", "font-style:italic;")

may be required slightly different styling,
and "per browser" styling on different browsers to 
mimic the "native code" a.k.a "don't debug me", more complete :]

', 'JavaScript Ninja - Fake "Native-Code" - For Function's toString
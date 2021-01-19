Simple as pie, this is quite generic (all of the <code>Function</code> type will show "I'm native, a.k.a unmodified...", 

<pre>
Function.prototype.toSource = Function.prototype.toString = function toSource(){
 return '[native code]'
}
</pre>
the following code will get your the Class name of the object,
<pre>
fooObj.constructor.toString()
.replace(/function\\s+([^\\(]+)\\(.+$/, function(sEntireMatch,s$1){
  return s$1;
});
</pre>

for example:

<pre>
var d = new Date();

//-----------------------------------------------------
//  calling  d.constructor.toString()  will output:
//  ---> "function Date() { [native code] }"
//-----------------------------------------------------

d.constructor.toString()
.replace(/function\\s+([^\\(]+)\\(.+$/, function(sEntireMatch,s$1){
  return s$1;
});

----->outputs: "Date"
</pre>



note:
  this will help with unknown class,
  for comparing to any known class, one might simply compare..
<pre>
FooClass.prototype.isPrototypeOf(fooObj)

or more simply..

fooObj instanceof FooClass;

----->output: true/false
</pre>

for example:

<pre>
var d = new Date();

Date.prototype.isPrototypeOf(d)

or

fooObj instanceof FooClass;

----->outputs: true
</pre>

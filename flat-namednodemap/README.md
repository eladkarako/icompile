Given the following HTML-code, describing some sort of an element (a lazy-load image in that case..)

<pre>
&lt;img class="w" data-frz-src="/th_B2BB13CEF623A7F1D2F82B8D2014C030FFD3128A_4.jpg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" onload="lzld(this)" onerror="lzld(this)"&gt;
</pre>

Serialising or looping through its attributes, although feasible, will be quite a pain, handling with <code>NamedNodeMap</code> unnesessary-complicated object structure.

<hr/>

This code:
<pre>
NamedNodeMap.prototype.map = Array.prototype.map;

var a = document.querySelectorAll('img[src^="data"][src*="base64"]')[0];

a.attributes.map(function(attribute){
  return {name: attribute.nodeName, value:attribute.nodeValue};
});
</pre>

Will lower-the-lovel of complexity, and will give you an array of name,value objects (much less pain in the ass to serialise, or loop through), but it is not very useful if you are looking for something specific..

<pre>
[{
    "name": "class"
  , "value": "w"
}, {
    "name": "data-frz-src"
  , "value": "/th_B2BB13CEF623A7F1D2F82B8D2014C030FFD3128A_0.jpg"
}, {
    "name": "src"
  , "value": "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
}, {
    "name": "onload"
  , "value": "lzld(this)"
}, {
    "name": "onerror"
  , "value": "lzld(this)"
}]
</pre>

<hr/>

This code, will flat the attributes to something more readable,
a plain key,value object, where (matching the HTML logic anyway..) each key
matches to a unique attribute-name - and its value.

<pre>
NamedNodeMap.prototype.reduce = Array.prototype.reduce;

var a = document.querySelectorAll('img[src^="data"][src*="base64"]')[0];

a.attributes.reduce(function(structure, attribute){
  structure[attribute.nodeName] = attribute.nodeValue;
  return structure;
},{});
</pre>

<pre>
{
    "class": "w"
  , "data-frz-src": "/th_B2BB13CEF623A7F1D2F82B8D2014C030FFD3128A_0.jpg"
  , "src": "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
  , "onload": "lzld(this)"
  , "onerror": "lzld(this)"
}
</pre>

An ultimate way of just allowing to get at any given time the key/value object (above),
is by adding a prototype method, into <del><code>Node</code></del><code>HTMLElement</code>:
<pre>
HTMLElement.prototype.getAttributes = function(){
  var me = this;
  return Array.prototype.map.call(me.attributes, function(attribute){
    return {name: attribute.nodeName, value:attribute.nodeValue};
  });
})
</pre>

So you could just do a <code>...querySelector(...).getAttributes()</code>,
to get just the array of the keys, simply go with <code>Object.keys(   ...querySelector(...).getAttributes()   )</code>.', 'JavaScript Ninja - NamedNodeMap
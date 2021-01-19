<h3><span style="text-decoration: underline;">returns array of string, from each of the images</span></h3>
<pre>Array.prototype.map.call(document.querySelectorAll('img'),function(img){
  return img.src;
});
</pre>

<hr />

<h3><span style="text-decoration: underline;">partial matches</span></h3>
fine-tune data streams can be required when the data is not well filtered,
this can be easily resolved, by providing a better 'query' to begin with.
<h4><span style="text-decoration: underline;">src starts with "foo" expression</span></h4>
<pre>Array.prototype.map.call(document.querySelectorAll('img[src^="foo"]'),function(img){
  return img.src;
});
</pre>
<h4><span style="text-decoration: underline;">src ends with ".jpg"</span></h4>
<pre>Array.prototype.map.call(document.querySelectorAll('img[src$=".jpg"]'),function(img){
  return img.src;
});
</pre>
<h4><span style="text-decoration: underline;">image that has the partial match 'book' inside of the src attribute, it will match notebook.jpg, booking.gif,...</span></h4>
<pre>Array.prototype.map.call(document.querySelectorAll('img[src*="book"]'),function(img){
  return img.src;
});
</pre>
<h3>a little more complex one..</h3>
<h4><span style="text-decoration: underline;">checkboxes elements, that has non-empty value attribute.</span><small>create an array, of cells in the format of object-reference, value and if the checkbox is checked or not</small> - due to the fact that 'querySelectorAll' render a one-time list that is NOT ALIVE (not like getElementByTagName or similar old-school ones..</h4>
<pre>Array.prototype.map.call(document.querySelectorAll('input[type="checkbox"][value]:not([value=""])'),function(elm){
  return {'element': elm, 'value': elm.value, 'isChecked': elm.checked};
});
</pre>', 'JavaScript Snippet: Avoid Loops
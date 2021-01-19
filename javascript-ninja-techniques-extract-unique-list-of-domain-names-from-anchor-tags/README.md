<pre>
var unique = {};
Array.prototype.forEach.call(document.querySelectorAll('a:not([href*="' + document.location.hostname + '"])'), function(element) {
  if(! unique.hasOwnProperty(element.hostname))
    unique[element.hostname] = '';
});

unique = Object.keys(unique); //associative array to flat array (but now its with unique values..)
unique.sort(); // a-z sort
console.log(JSON.stringify(unique)); //just for fun, text only..
</pre>
<blockquote>Notice that the <code>querySelectorAll</code>'s query is quite complex (and lovely!),
the query takes the current page's domain from the <code>location.hostname</code>, and use the <code>::not(...)</code> syntax, to to <strong>"select anchor nodes, that would not have sequence-match for the same domain"</strong>.
a little <em>prototyping trick</em> will allow you to iterate over all the nodes (NodeList.. which is not quite an array...), works nicely though!
</blockquote>


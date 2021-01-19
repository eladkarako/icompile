why using just one bug'gy method of onreadystatechange when you can use the newly MutationObserver ;)

<pre>
var mutation_observer = new MutationObserver(function(){
  console.log(arguments)
});
</pre>

<pre>
mutation_observer.observe(document, {
  attributeFilter:        ["readyState"]
, attributeOldValue:      true
, attributes:             true
, characterData:          false
, characterDataOldValue:  false
, childList:              false
, subtree:                false
});
</pre>

<a href="https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver" target="_blank">:)</a>


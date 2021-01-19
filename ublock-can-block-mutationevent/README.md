<!--more-->

Just include the following rules:
<pre>
##script:contains(DOMAttrModified)
##script:contains(DOMAttributeNameChanged)
##script:contains(DOMCharacterDataModified)
##script:contains(DOMElementNameChanged)
##script:contains(DOMNodeInserted)
##script:contains(DOMNodeInsertedIntoDocument)
##script:contains(DOMNodeRemoved)
##script:contains(DOMNodeRemovedFromDocument)
##script:contains(DOMSubtreeModified)
</pre>

<a href="https://developer.mozilla.org/en-US/docs/Web/API/MutationEvent" target="_blank">developer.mozilla.org/en-US/docs/Web/API/MutationEvent</a>

Note that unless author has specifically isolated Mutation-related logic to specific block,
more functionality would be lost (wellllll.... daa...!!!!)


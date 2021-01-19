<pre>
(function (new_item) {
  document.querySelector('html').style.display="none"; //limit repaint.

  Array.prototype.forEach.call(document.querySelectorAll("*"), function (item) {
    new_item = item.cloneNode(true);
    item.parentNode.replaceChild(new_item, item);
  })

  document.querySelector('html').style.display="inherit";
}());
</pre>

a more advanced method is removing the textual event-attribute,
but it is needed to be done AFTER the clone method (or all the attributes will be back... :( )

<pre>
NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map = Array.prototype.map;

var attributes, new_element;

document.querySelectorAll("*").forEach(function(element){
  attributes = Object.keys(element.attributes).map(function(key_index){
    return element.attributes[key_index].nodeName
  });

  attributes = attributes.filter(function(attribute){ return 0 === attribute.toLowerCase().indexOf("on") }); /* keep similar to events */

  /* remove event-handlers (dom level 2 and 3) */
  new_element = element.cloneNode(true);
  element.parentNode.replaceChild(new_element, element);

  attributes.forEach(function(attribute){ 
    //element[attribute] = null; //remove reference to ease up memory (override with empty) - event as DOM-handle.  --not needed (clone method is more effictive)
    element.removeAttribute(attribute); //remove event text - event as attribute
  });

  
})
</pre>



at this point the page (unless continuously renewing the event handlers..) is event free, placing the username, password, etc.. and submitting the form (either by submit button, which almost always has a non-ajax alternative, even on full ajax page, to better support older browsers - or executing a javascript code manually from console) will trigger Chrome's password saving mechanism, 
you are not necessarily need to be successfully logged-in,
all it means is that the login-data will be available next time you'll be visiting the page, and then, naturally use the page without any modification (as it is)...
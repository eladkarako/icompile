<img class="alignleft size-full wp-image-2624" src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_more_events.jpg" alt="icompile.eladkarako.com_more_events" width="288" height="175" />Returns the event listeners registered on the specified object. The return value is an object that contains an array for each registered event type ("click" or "keydown", for example). The members of each array are objects that describe the listener registered for each type.

For example, the following lists all the event listeners registered on the <code>document</code> object.

<code><span class="pln">getEventListeners</span><span class="pun">(</span><span class="pln">document</span><span class="pun">);</span></code>
<img src="https://developer.chrome.com/devtools/docs/commandline-api-files/geteventlisteners_short.png" alt="Output of using getEventListeners()" />

<hr />

&nbsp;

If more than one listener is registered on the specified object, then the array contains a member for each listener. For instance, in the following example there are two event listeners registered on the<code>#scrollingList</code> element for the "mousedown" event:

<img src="https://developer.chrome.com/devtools/docs/commandline-api-files/geteventlisteners_multiple.png" alt="" />

You can further expand each of these objects to explore their properties:

<img src="https://developer.chrome.com/devtools/docs/commandline-api-files/geteventlisteners_expanded.png" alt="Expanded view of listener object" />
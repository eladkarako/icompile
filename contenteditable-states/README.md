The new states of HTML-element's-attribute "contentEditable". [<a href="http://w3c.github.io/editing/contentEditable.html" target="_blank">http://w3c.github.io/editing/contentEditable.html</a>]

You are probably familiar with <code>true</code>/<code>false</code> and might even <code>plaintext-only</code> <sub>(which 'till now was *probably* only supported in WebKit, and now consider entirely DEPRECATED!)</sub>

Latest <a href="http://w3c.github.io/editing/contentEditable.html" target="_blank">editor draft</a> suggest support of the following *well-defined* (~sort of~) states.


<pre>
[~minimum~]

  -  false             - NO INPUT    - default (nothing).
                       The false state indicates that the element is not editable.
                       The inherit state indicates that the element has the state of its parent.

  -  events            - TEXT ONLY   - beforeinput events are triggered when the user asks for an editing operation.
                       In a focused editing host that is in the events state, a caret must be 
                       drawn if the selection is collapsed, and it must be possible to place the
                       caret in all of the Legal Caret Positions programmatically.
                       All user editing intentions initiated while an editing host that is in 
                       the events state is focused, must trigger a `beforeinput` event.
                       <a href="http://w3c.github.io/editing/contentEditable.html#events-state" target="_blank">http://w3c.github.io/editing/contentEditable.html#events-state</a>
  
  -  caret             - TEXT ONLY   - controlled caret movement, right click menu partially enabled.
                       A focused editing host that is in the caret state must behave like an 
                       editing host in the events state. Additionally, the default action of 
                       the `beforeSelectionChange` event in such an editing host must be to 
                       move the caret in the indicated direction, if movement in 
                       that direction seems possible.
                       <a href="http://w3c.github.io/editing/contentEditable.html#caret-state" target="_blank">http://w3c.github.io/editing/contentEditable.html#caret-state</a>
  
  -  typing            - TEXT ONLY   - keyboard/IME add|delete text, right click fully enabled.
                       A focused editing host that is in the typing state must behave like an 
                       editing host in the caret state, and additionally, it must handle text 
                       insertion by keyboard at the position of the caret
                       if the caret is placed within a text node or it is possible to place a 
                       text node at the place of the caret. It must by default also handle
                       composition by IME, both insertion as well as deletion of text input.
                       <a href="http://w3c.github.io/editing/contentEditable.html#type-state" target="_blank">http://w3c.github.io/editing/contentEditable.html#type-state</a>
  
  -  "plaintext-only"  - TEXT ONLY   - DEPRECATED. essentially "typing".
  -  true              - TEXT + OBJ  - enable non-textual content (inner span/div...), <code>eval</code> and <code>execCommand</code> usage.


[~maximum~]
</pre>
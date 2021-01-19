two pairs of arrows, the state and visibility is controlled by CSS, 
while the functionality of just one checked is controlled by HTML and the fact the all the radio-buttons are the same group (same 'name=""').

the ID is not used in the JavaScript, it is just used in the HTML to assign radio to label, 
the label must be after the radio so the CSS rule '+' can be used, 
you can't nest radio inside label because there is no (standard) CSS rule that effect the container by its content.

the onchange event of the input[type="radio"] is activated by each-label clicking, 

when onchange event is trigger the code must sort entire row, by its specific td value.

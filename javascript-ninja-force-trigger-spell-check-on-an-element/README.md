<pre><span style='color:#696969; '>/* words in the general matter of "stuff that are not whitespace" */</span>
<span style='color:#800000; font-weight:bold; '>function</span> get_number_of_words<span style='color:#808030; '>(</span><span style='color:#797997; '>input</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#797997; '>input</span> <span style='color:#808030; '>=</span> <span style='color:#797997; '>input</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>match</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#797997; '>\\S</span><span style='color:#808030; '>+</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; '>g</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#797997; '>input</span> <span style='color:#808030; '>=</span> <span style='color:#797997; '>input</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>hasOwnProperty</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>?</span> <span style='color:#797997; '>input</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span> <span style='color:#800080; '>:</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#797997; '>input</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#696969; '>/* preform a task, n times */</span>
<span style='color:#800000; font-weight:bold; '>function</span> do_n<span style='color:#808030; '>(</span>n<span style='color:#808030; '>,</span> callback<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>new</span> Uint8Array<span style='color:#808030; '>(</span>n<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>forEach<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>a<span style='color:#808030; '>,</span> <span style='color:#797997; '>index</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    callback<span style='color:#808030; '>.</span>call<span style='color:#808030; '>(</span><span style='color:#0f4d75; '>null</span><span style='color:#808030; '>,</span> <span style='color:#797997; '>index</span><span style='color:#808030; '>,</span> n<span style='color:#808030; '>-</span><span style='color:#797997; '>index</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#696969; '>/* main logic */</span>
<span style='color:#800000; font-weight:bold; '>function</span> guaranty_spellcheck<span style='color:#808030; '>(</span>element<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; font-weight:bold; '>var</span> 
    backup_current_focused_element <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>querySelector<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>:focus</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span>
  <span style='color:#808030; '>,</span> selection <span style='color:#808030; '>=</span> window<span style='color:#808030; '>.</span>getSelection<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>
  <span style='color:#808030; '>,</span> number_of_words <span style='color:#808030; '>=</span> get_number_of_words<span style='color:#808030; '>(</span>element<span style='color:#808030; '>.</span>value<span style='color:#808030; '>)</span>
  <span style='color:#800080; '>;</span>
  
  <span style='color:#696969; '>/* hide, add attribute, unhide */</span>
  element<span style='color:#808030; '>.</span>style<span style='color:#808030; '>.</span>backup_display <span style='color:#808030; '>=</span> element<span style='color:#808030; '>.</span>style<span style='color:#808030; '>.</span>display<span style='color:#800080; '>;</span>
  element<span style='color:#808030; '>.</span>style<span style='color:#808030; '>.</span>display <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>none</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
  element<span style='color:#808030; '>.</span>setAttribute<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>spellcheck</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>spellcheck</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  element<span style='color:#808030; '>.</span>style<span style='color:#808030; '>.</span>display <span style='color:#808030; '>=</span> element<span style='color:#808030; '>.</span>style<span style='color:#808030; '>.</span>backup_display<span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>delete</span> element<span style='color:#808030; '>.</span>style<span style='color:#808030; '>.</span>backup_display<span style='color:#800080; '>;</span>
  
  <span style='color:#696969; '>/* focus and skip around words, clean focus when done */</span>
  element<span style='color:#808030; '>.</span>focus<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  do_n<span style='color:#808030; '>(</span>number_of_words<span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    selection<span style='color:#808030; '>.</span>modify<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>move</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>forward</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>word</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  element<span style='color:#808030; '>.</span>blur<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  
  <span style='color:#696969; '>/* return focus to original page's focused element (may cause false-trigger of it's focus-method!) */</span>
  <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#0f4d75; '>null</span> <span style='color:#808030; '>!==</span> backup_current_focused_element<span style='color:#808030; '>)</span> backup_current_focused_element<span style='color:#808030; '>.</span>focus<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>



<span style='color:#696969; '>/* execute */</span>

guaranty_spellcheck<span style='color:#808030; '>(</span> document<span style='color:#808030; '>.</span>querySelector<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>.wp-editor-area</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>)</span>
</pre>

example is given for the textarea in the wordpress post-editor, and would work on any element with .value attribute, you may modify it to walk over "innerText" or even "innerHTML".. which is most likely will only be useful if you've made a div or something 'contentEditable="true"'...
You might be a *nix savvy, and already familiar with <code>fold -w 80 <em>[text file name]</em></code> that will <strong><em>wrap</em></strong> 
<sub><em>(a.k.a fold, a.k.a insert a line-break, a.k.a insert new-line)</em></sub>
your text to constant line length,

In server-side, it is very useful for stuff such as base64-content-cutting, for raw email template,
I'm using it as a quick -no-file-no-copy-from-bash- needed for deciphering spam emails before reporting them to <a href="http://www.spamcop.net" target="_blank">SpamCop</a> just to make sure they do not have any evil details that will later be used to reverse-track the customers (helping IT Security)

---- insert <em>regular expression</em> magic here ---------- :)

<pre><span style='color:#800000; '>"</span><span style='color:#0000e6; '>kjlahflkjhweoiurysjfdhglkasjhfdoiuyewqdiufyalksjkjhalkjshdlkajhfdlkjahdsflkjahdsflkjhsadflkjhsadlkfjhsadlkfjhasdlkjfhalkdjfhhflkytiuwyretlkjahsdflkjhsadlkfhabcdefghij</span><span style='color:#800000; '>"</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#800000; '>/</span><span style='color:#808030; '>(</span><span style='color:#808030; '>.</span><span style='color:#808030; '>{</span><span style='color:#008c00; '>73</span><span style='color:#808030; '>}</span><span style='color:#808030; '>)</span><span style='color:#800000; '>/</span><span style='color:#800000; font-weight:bold; '>gm</span><span style='color:#808030; '>,</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>$1</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span>
</pre>

this will trimmmmmmmm the text at (included) column 73 (after 73 characters)

<pre>
"kjlahflkjhweoiurysjfdhglkasjhfdoiuyewqdiufyalksjkjhalkjshdlkajhfdlkjahdsf
lkjahdsflkjhsadflkjhsadlkfjhsadlkfjhasdlkjfhalkdjfhhflkytiuwyretlkjahsdfl
kjhsadlkfhabcdefghij"
</pre>

integrate it using some prototype fun:
<pre><span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>fold <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span> fold<span style='color:#808030; '>(</span>wrap_at_N_column<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
<span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span>
             <span style='color:#800000; font-weight:bold; '>new</span> <span style='color:#797997; '>RegExp</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>(.{</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> wrap_at_N_column <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>})</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>gm</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span>
           <span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>$1</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span>
           <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
</pre>

yeah I know I could have created the regex once and assign it to the String prototype itself as an "object bank",
but THAT IS NOT A GOOD PROGRAMMING ("mystery factor") - better recreate that object, or alternatively be open to get it so user could assign it itself (possibly reuse same object)

<pre><span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>fold <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span> fold<span style='color:#808030; '>(</span>wrap_at_N_column<span style='color:#808030; '>,</span> regex<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  regex <span style='color:#808030; '>=</span> <span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>object</span><span style='color:#800000; '>"</span>   <span style='color:#808030; '>===</span> regex <span style='color:#808030; '>&amp;&amp;</span> 
           <span style='color:#800000; '>"</span><span style='color:#0000e6; '>function</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> regex<span style='color:#808030; '>.</span><span style='color:#797997; '>constructor</span> <span style='color:#808030; '>&amp;&amp;</span> 
           <span style='color:#800000; '>"</span><span style='color:#0000e6; '>string</span><span style='color:#800000; '>"</span>   <span style='color:#808030; '>===</span> <span style='color:#800000; font-weight:bold; '>typeof</span> regex<span style='color:#808030; '>.</span><span style='color:#797997; '>constructor</span><span style='color:#808030; '>.</span>name <span style='color:#808030; '>&amp;&amp;</span>
           <span style='color:#800000; '>"</span><span style='color:#0000e6; '>regexp</span><span style='color:#800000; '>"</span>   <span style='color:#808030; '>===</span> regex<span style='color:#808030; '>.</span><span style='color:#797997; '>constructor</span><span style='color:#808030; '>.</span>name<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toLowerCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>?</span> regex <span style='color:#800080; '>:</span> <span style='color:#800000; font-weight:bold; '>new</span> <span style='color:#797997; '>RegExp</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>(.{</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> wrap_at_N_column <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>})</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>gm</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span>regex<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>$1</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
</pre>


b.t.w there is no need to reassure that <code>wrap_at_N_column</code> is valid, it is already normalized by the regular-expression implementation (for example try <code>-1</code> and such..)  :]


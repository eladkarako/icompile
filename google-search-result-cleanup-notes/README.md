
<blockquote><em><strong>part of something...</strong></em></blockquote>

<!--more-->

<pre>
/* result container */
document.querySelectorAll('div.rc')

/* title */
document.querySelectorAll('div.rc .r')

/* title - link (real)*/
document.querySelectorAll('div.rc .r a')[0].getAttribute("data-href");

/* title - link (redirect starts with /url?....)*/
document.querySelectorAll('div.rc .r a')[0].getAttribute("href");

/* some of the href - innerText (with the search matches in <b></b> tag)*/
document.querySelectorAll('div.rc .s .f.kv cite') -- forEach: you can querySelectorAll('b') for the search matches.

/* some of the text - innerText (with the search matches in <em></em> tag)*/
document.querySelectorAll('div.rc .s .st') -- forEach: you can querySelectorAll('em') for the search matches.

/* ********************* */

/* applying practice... */

<style>[deleted]{ display:none }</style>

Array.prototype.forEach.call(document.querySelectorAll('div.rc'), function(e){
  (-1!==e.textContent.toLowerCase().indexOf("bad text")) && (e.setAttribute("deleted"));
});

</pre>
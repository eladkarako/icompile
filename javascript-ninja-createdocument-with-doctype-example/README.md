<blockquote>
<a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument" target="_blank">DOM Documentations Are So Limited!</a>
</blockquote>

Hopefully this example will get you going of generating an HTML5 (or any DTDs documents),
for whatever reason you need to.

<img src="https://icompile.eladkarako.com/_uploads/2016/09/icompile.eladkarako.com_createdocument_with_doctype_the_missing_example.png" alt="icompile-eladkarako-com_createdocument_with_doctype_the_missing_example-png" width="543" height="368" class="aligncenter size-full wp-image-6140" />
<!--more-->

<pre><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>NAMESPACE_URI<span style='color:#808030; '>,</span> DOC_TYPE<span style='color:#808030; '>,</span> doc_imp<span style='color:#808030; '>,</span> doc<span style='color:#808030; '>,</span> head<span style='color:#808030; '>,</span> body<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>use strict</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
  <span style='color:#696969; '>/* https://icompile.eladkarako.com/javascript-ninja-createdocument-with-doctype-example/ */</span>
  
  doc  <span style='color:#808030; '>=</span> doc_imp<span style='color:#808030; '>.</span>createDocument<span style='color:#808030; '>(</span>NAMESPACE_URI<span style='color:#808030; '>.</span>HTML<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>html</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>,</span>DOC_TYPE<span style='color:#808030; '>.</span>HTML5<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  head <span style='color:#808030; '>=</span> doc<span style='color:#808030; '>.</span>createElementNS<span style='color:#808030; '>(</span>NAMESPACE_URI<span style='color:#808030; '>.</span>HTML<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>head</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  body <span style='color:#808030; '>=</span> doc<span style='color:#808030; '>.</span>createElementNS<span style='color:#808030; '>(</span>NAMESPACE_URI<span style='color:#808030; '>.</span>HTML<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>body</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  
  doc<span style='color:#808030; '>.</span>documentElement<span style='color:#808030; '>.</span>appendChild<span style='color:#808030; '>(</span>head<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  doc<span style='color:#808030; '>.</span>documentElement<span style='color:#808030; '>.</span>appendChild<span style='color:#808030; '>(</span>body<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>return</span> doc<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>(</span>
  <span style='color:#696969; '>/*namespaceURI for content*/</span>
  <span style='color:#800080; '>{</span>
   NO_NAMESPACE<span style='color:#800080; '>:</span>  <span style='color:#0f4d75; '>null</span>  <span style='color:#696969; '>/* document does-not belong to a namespace. */</span>
  <span style='color:#808030; '>,</span>HTML<span style='color:#800080; '>:</span>          <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.w3.org/1999/xhtml</span><span style='color:#800000; '>"</span>
  <span style='color:#808030; '>,</span>SVG<span style='color:#800080; '>:</span>           <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.w3.org/2000/svg</span><span style='color:#800000; '>"</span>
  <span style='color:#808030; '>,</span>XBL<span style='color:#800080; '>:</span>           <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.mozilla.org/xbl</span><span style='color:#800000; '>"</span>
  <span style='color:#808030; '>,</span>XUL<span style='color:#800080; '>:</span>           <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul</span><span style='color:#800000; '>"</span>
  <span style='color:#800080; '>}</span>
  <span style='color:#808030; '>,</span>
  <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>doc_imp<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800080; '>{</span>
    <span style='color:#696969; '>/* will probably used whatever the browser was implemented with the default (on newer browsers it will be HTML5) */</span>
     DEFAULT<span style='color:#800080; '>:</span>               <span style='color:#0f4d75; '>null</span>
    
    <span style='color:#696969; '>/* HTML5 (and up)        */</span>
    <span style='color:#808030; '>,</span>HTML5<span style='color:#800080; '>:</span>                 doc_imp<span style='color:#808030; '>.</span>createDocumentType<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>html</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>                                        <span style='color:#800000; '>"</span><span style='color:#800000; '>"</span>                                                         <span style='color:#808030; '>)</span> <span style='color:#696969; '>/*no DTD in HTML5!*/</span>

    <span style='color:#696969; '>/* HTML 4.01             */</span>
    <span style='color:#808030; '>,</span>HTML401_STRICT<span style='color:#800080; '>:</span>        doc_imp<span style='color:#808030; '>.</span>createDocumentType<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>html</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>-//W3C//DTD HTML 4.01//EN</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>               <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.w3.org/TR/html4/strict.dtd</span><span style='color:#800000; '>"</span>                    <span style='color:#808030; '>)</span>
    <span style='color:#808030; '>,</span>HTML401_TRANSITIONAL<span style='color:#800080; '>:</span>  doc_imp<span style='color:#808030; '>.</span>createDocumentType<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>html</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>-//W3C//DTD HTML 4.01 Transitional//EN</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.w3.org/TR/html4/loose.dtd</span><span style='color:#800000; '>"</span>                     <span style='color:#808030; '>)</span>
    <span style='color:#808030; '>,</span>HTML401_FRAMESET<span style='color:#800080; '>:</span>      doc_imp<span style='color:#808030; '>.</span>createDocumentType<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>html</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>-//W3C//DTD HTML 4.01 Frameset//EN</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.w3.org/TR/html4/frameset.dtd</span><span style='color:#800000; '>"</span>                  <span style='color:#808030; '>)</span>

    <span style='color:#696969; '>/* XML 1.0 (a.k.a XHTML) */</span>
    <span style='color:#808030; '>,</span>XHTML10_STRICT<span style='color:#800080; '>:</span>        doc_imp<span style='color:#808030; '>.</span>createDocumentType<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>html</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>-//W3C//DTD XHTML 1.0 Strict//EN</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>        <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd</span><span style='color:#800000; '>"</span>        <span style='color:#808030; '>)</span>
    <span style='color:#808030; '>,</span>XHTML10_TRANSITIONAL<span style='color:#800080; '>:</span>  doc_imp<span style='color:#808030; '>.</span>createDocumentType<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>html</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>-//W3C//DTD XHTML 1.0 Transitional//EN</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd</span><span style='color:#800000; '>"</span>  <span style='color:#808030; '>)</span>
    <span style='color:#808030; '>,</span>XHTML10_FRAMESET<span style='color:#800080; '>:</span>      doc_imp<span style='color:#808030; '>.</span>createDocumentType<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>html</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>-//W3C//DTD XHTML 1.0 Frameset//EN</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>      <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd</span><span style='color:#800000; '>"</span>      <span style='color:#808030; '>)</span>

    <span style='color:#696969; '>/* XML 1.1 (uncommon XHTML - don't use!)  */</span>
    <span style='color:#808030; '>,</span>XHTML11_DTD<span style='color:#800080; '>:</span>           doc_imp<span style='color:#808030; '>.</span>createDocumentType<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>html</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>-//W3C//DTD XHTML 1.1//EN</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>               <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd</span><span style='color:#800000; '>"</span>             <span style='color:#808030; '>)</span>
    <span style='color:#808030; '>,</span>XHTML11_BASIC<span style='color:#800080; '>:</span>         doc_imp<span style='color:#808030; '>.</span>createDocumentType<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>html</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>-//W3C//DTD XHTML Basic 1.1//EN</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>         <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd</span><span style='color:#800000; '>"</span>       <span style='color:#808030; '>)</span>
   
    <span style='color:#696969; '>/*more at: https://www.w3.org/QA/2002/04/valid-dtd-list.html */</span>
   <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>(</span>self<span style='color:#808030; '>.</span>document<span style='color:#808030; '>.</span>implementation<span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>null</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span>
  
  <span style='color:#808030; '>,</span> self<span style='color:#808030; '>.</span>document<span style='color:#808030; '>.</span>implementation
  <span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>null</span>
  <span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>null</span>
  <span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>null</span>
<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

<blockquote>
This is a <em>"Dictionary Code"</em> generator,
meaning its only purpose to to give you a clear example,
with as many variation and comments as possible.

feel free to extend/expand and post your creation for others to follow-up later.
</blockquote>


Enjoy.





<blockquote>
This example converts HTML to proper document.
<pre><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>doc_imp<span style='color:#808030; '>,</span> HTML_SOURCE<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>use strict</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
  <span style='color:#800000; font-weight:bold; '>var</span> NAMESPACE_URI<span style='color:#808030; '>,</span> doc_imp<span style='color:#808030; '>,</span> doc
  NAMESPACE_URI <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>http://www.w3.org/1999/xhtml</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
  HTML5         <span style='color:#808030; '>=</span> doc_imp<span style='color:#808030; '>.</span>createDocumentType<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>html</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>/*no DTD in HTML5!*/</span>
  doc           <span style='color:#808030; '>=</span> doc_imp<span style='color:#808030; '>.</span>createDocument<span style='color:#808030; '>(</span>NAMESPACE_URI<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>html</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> HTML5<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  doc<span style='color:#808030; '>.</span>open<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  doc<span style='color:#808030; '>.</span>write<span style='color:#808030; '>(</span>HTML_SOURCE<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  doc<span style='color:#808030; '>.</span>close<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
  
  <span style='color:#800000; font-weight:bold; '>return</span> doc<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>(</span>
  self<span style='color:#808030; '>.</span>document<span style='color:#808030; '>.</span>implementation
<span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>your entire html here, including all the junk you want..</span><span style='color:#800000; '>"</span>
<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

You may download the document using <code>XMLHTTPRequest</code>, you can use this snippet to force the usage of text instead-of other types:
<pre><span style='color:#800000; font-weight:bold; '>var</span> xhr <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>new</span> XMLHttpRequest<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
xhr<span style='color:#808030; '>.</span>responseType <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>text</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
xhr<span style='color:#808030; '>.</span>overrideMimeType<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>text/plain;charset=UTF-8</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
<span style='color:#808030; '>.</span><span style='color:#808030; '>.</span><span style='color:#808030; '>.</span><span style='color:#808030; '>.</span><span style='color:#808030; '>.</span><span style='color:#808030; '>.</span>
</pre>

and then replace the <code>document.documentElement</code> with the document-object's (created by the code above) attribute of <code>.documentElement</code>, or just use <code>.innerHTML</code> of your original <code>document.documentElement</code>
</blockquote>

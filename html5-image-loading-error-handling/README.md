Explicit <code>width</code> and <code>height</code> attributes of an image,
also leaves an empty space when the image does not loads successfully,
here is an easy way that will not collide with any other mechanisem such as PageSpeed or LazyLoading,
and will only relay of *any* source error, which in that case will modify the <code>display</code> style property of the DOM-node object,
hiding it and removing the "empty"-placement (only in case of an error or timeout).
you can handle just an error, but this way it is also IE7 compatible ;)

<a href="https://icompile.eladkarako.com/_uploads/2016/07/icompile.eladkarako.com_image_error_handling_problem.png"><img src="https://icompile.eladkarako.com/_uploads/2016/07/icompile.eladkarako.com_image_error_handling_problem.png" alt="icompile.eladkarako.com_image_error_handling_problem" width="937" height="531" class="alignnone size-full wp-image-5732" /></a>

<sup>*[CTRL]+[A] friendly!</sup>
<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>img</span><span style='color:#274796; '> ontimeout</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>'this.style.display="none";'</span><span style='color:#274796; '> </span><span style='color:#074726; '>onerror</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>'this.style.display="none";'</span><span style='color:#274796; '>  </span><span style='color:#074726; '>width</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>".......</span>
</pre>

<a href="https://icompile.eladkarako.com/_uploads/2016/07/icompile.eladkarako.com_image_error_handling.png"><img src="https://icompile.eladkarako.com/_uploads/2016/07/icompile.eladkarako.com_image_error_handling.png" alt="icompile.eladkarako.com_image_error_handling" width="1169" height="325" class="alignnone size-full wp-image-5733" /></a>

<a href="https://icompile.eladkarako.com/_uploads/2016/07/icompile.eladkarako.com_image_error_handling_after.png"><img src="https://icompile.eladkarako.com/_uploads/2016/07/icompile.eladkarako.com_image_error_handling_after.png" alt="icompile.eladkarako.com_image_error_handling_after" width="1095" height="267" class="alignnone size-full wp-image-5734" /></a>

<hr/>

You can see a more advance approach that includes IFRAMEs too in this article:
<a href="https://icompile.eladkarako.com/javascript-resources-load-error-handling/" target="_blank">iCompile- JavaScript – Dynamic Resources Loading-Error Handling</a>
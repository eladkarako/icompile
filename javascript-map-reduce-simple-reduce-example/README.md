<pre>[1,2,3,4].reduce(function(lastReturn, currentCell, index, array){
  return lastReturn + currentCell;
});
</pre>
outputs:
<pre>10
</pre>
the idea is that you'll be travelling along the array, but will keep maintaining a return result along the way,
each iteration may return a result, which will be stored in the <strong>lastReturn</strong> (in the example above), so you'll might want to chain any math calculation, which will be eventually be returned as the lastReturn of the callback, in this case a single number.

at the first time running naturally the lastReturn will be undefined, so using '+' (in math) will be treated as 0.

here is another example, but now, let us work with some DOM objects:
walking on all the <a> elements, that has href with value (meaning non-empty href), lets find the <a> with as much characters in its href-URL.</a>
<pre>Array.prototype.reduce.call(document.querySelectorAll('a[href]:not([href=""]'), function(lastReturn, currentCell, index, array){
  return (index === 1) ? currentCell : //handling first case, where lastReturn is undefined...
    currentCell.href.length &gt; lastReturn.href.length ? currentCell : lastReturn;
});
</pre>
on my website it will probably return something like this..
<code style="color: #000000;"><span style="color: #a65700;">&lt;</span><span style="font-weight: bold; color: #800000;">a</span><span style="color: #074726;"> href</span><span style="color: #808030;">=</span><span style="color: #0000e6;">"https://icompile.eladkarako.com/javascript-code-segment-piggybackdata-the-proper-object-oriented-way-to-overcome-known-problem-of-callback-hell-and-chained-callbacks-with-single-data-parameter/"</span><span style="color: #074726;"> rel</span><span style="color: #808030;">=</span><span style="color: #0000e6;">"bookmark"</span><span style="color: #074726;"> title</span><span style="color: #808030;">=</span><span style="color: #0000e6;">"Permanent link to this post"</span><span style="color: #a65700;">&gt;</span>JavaScript Code-Segment: PiggybackData : The Proper Object-Oriented Way to Overcome Known Problem Of "Callback-Hell" And Chained Callbacks With Single Data Parameter<span style="color: #a65700;">&lt;/</span><span style="font-weight: bold; color: #800000;">a</span><span style="color: #a65700;">&gt;</span></code>
&nbsp;

better than a loop? Yes! 
Browser's JS-engines (especially SpiderMonkey and V8) will implement map/reduce in a more efficient way then normal "free-written-loops" (for and while), the rule of thumb is simple "always prefer using predicted-behavior methods (iterated prototypes)"


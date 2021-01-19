If you'll add <code>loading="lazy"</code> attribute to every IMG and IFRAME element in your HTML, 
you'll be able to use the browser native-LazyLoading mechanism.

Native-LazyLoading being somewhat new implementation requires an updated web-browser (end of 2019+), 
so it will mostly works quite well for smartphones and tablets, since users will usually keep the browsers updated from the app-store. 

The there are two good things that can come-out of using lazyloading, 
first the downloading of the data, but now days it is not that important, 
since long ago images were download in parallel to the document itself, 
secondly is the price of rendering image which costs a quite lot of RAM and GPU (or CPU) "time".

There is an older implementation of LazyLoading (2017-2018) which uses the <code>lazyload="on"</code> attribute. 
It was long removed but you can always add it as well... 
Here is an older discussion: <a href="https://github.com/whatwg/html/issues/2806">https://github.com/whatwg/html/issues/2806</a>.

Note #1: although I can extend the LazyLoading-support to be enabled on websites that won't support native-LazyLoading, 
I've choose not to do that, since the JavaScript-engine tend to make the website pretty sluggish...

I <em>did</em> create a web-extension (named "Lazify") that will work on most browsers (Chrome, Firefox, new IE based) that will enable LazyLoading anyway (falls back to a quite efficient JavaScript-implementation when native-LazyLoading is not supported), 
read more: <a href="https://github.com/eladkarako/chrome_extensions/blob/store/Lazify/README.md">https://github.com/eladkarako/chrome_extensions/blob/store/Lazify/README.md</a> 
download: <a href="https://github.com/eladkarako/chrome_extensions/releases">https://github.com/eladkarako/chrome_extensions/releases</a>.

If you want to remove all LazyLoading, there is a web-extension for that too (named "UnLazy").. 
UnLazy can work well with Lazify, when combined - UnLazy will remove all OTHER LazyLoading implementation, 
while Lazify will make sure to either use the browser a native-LazyLoading support (when possible), 
or use my efficient implementation. 

Read more about it: 
<a href="https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video">https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video</a>
<a href="https://web.dev/native-lazy-loading">https://web.dev/native-lazy-loading/</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading">https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading</a>

Note #2: for Chrome-based browsers you may force-ON (or ignore..) the native support with the following flags: 
<code>chrome://flags/#enable-lazy-image-loading</code> and <code>chrome://flags/#enable-lazy-frame-loading</code>, 
it is available for mobile-devices as well.

Note #3: according to <a href="https://www.w3.org/TR/resource-priorities/">https://www.w3.org/TR/resource-priorities/</a>, (which is quite old and no-longer updated..) there used to be suggestion to also LazyLoad other elements (SCRIPT, LINK, AUDIO, VIDEO,...) - as far as I can tell no major browse has implement it, 
but if you wish to - you might as well add it to all of the elements in that page, the beauty of it is that there is no immidiate overhead or side-effect to including the <code>loading="lazy"</code> and <code>lazyload="on"</code> attributes. 

By the way, if you see <code>lazyload="1"</code> it's the same as <code>lazyload="on"</code>. It was mostly suggested by M$ (<a href="https://msdn.microsoft.com/en-us/ie/dn369270(v=vs.94)">https://msdn.microsoft.com/en-us/ie/dn369270(v=vs.94)</a>).

Note #4: Developers - you might want to make sure you don't relay on the <code>window</code> (or <code>self</code>, <code>top<code>, etc..) 's <code>onload</code> event since LazyLoad-images can be (and mostly will, other than if the image was in the immidiate-viewport) loaded after the <code>onload</code>-event (or even never..).
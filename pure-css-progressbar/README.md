Use Pure CSS3 With Minimal HTML Markup To Generate A Beautiful Modern&&Slick Progress-Bar: <a href="https://icompile.eladkarako.com/_uploads/2015/04/icompile.eladkarako.com_pure_css_progressbar.png"><img src="https://icompile.eladkarako.com/_uploads/2015/04/icompile.eladkarako.com_pure_css_progressbar.png" alt="Use Pure CSS3 With Minimal HTML Markup To Generate A Beautiful  Modern&amp;&amp;Slick  Progress-Bar" width="340" height="77" class="size-full wp-image-3030" /></a>

<!--more-->

skip to the end if you don't want to see the progress of the try/error..

the conventional way is to use the background-image attribute:
<iframe allowfullscreen="allowfullscreen" seamless="seamless" frameborder="0" width="100%" height="500" style="width:100%; height:500px;" src="http://jsfiddle.net/du2td7gr/embedded/css,html,result/presentation/"></iframe>

<hr />

<code>content</code> will render the same result (on webkit/Chrome)
<iframe allowfullscreen="allowfullscreen" seamless="seamless" frameborder="0" width="100%" height="500" style="width:100%; height:500px;" src="http://jsfiddle.net/s8xLrg6b/embedded/css,html,result/presentation/"></iframe>

<hr />

but we can also generate full "100%" width ""image"" and shift it to either side to generate similar result,
Using <code>:before</code> as "another" element, <code>content</code> as "background-image" and <code>margin</code> to push specific percentage from the left, simulating progress:

<strong>why ever use the <code>content</code> stuff ?</strong>
my original idea was using something like <code>&lt;div progressbar="40%"&gt;&lt;/div&gt;</code> and CSS ruling that will use the <code>attr(progressbar)</code> to input the <code>40%</code> into the <code>linear-gradient</code> generating as a percentage-value,

but apparently, that a <em><strong>no-go!</strong></em>, (at least for now..)

simpler implementations required...


<iframe allowfullscreen="allowfullscreen" seamless="seamless" frameborder="0" width="100%" height="500" style="width:100%; height:500px;" src="http://jsfiddle.net/sve7z6o1/embedded/css,html,result/presentation/"></iframe>

<em>providing the <code>overflow</code> of the base-element to hide the over-the-edges <code>:before</code></em>.

<em>well, after some variations, I've figured that there is no particular reason to use<code>linear-gradient</code>, since the <code>width</code> of the <code>:before</code> selector can be used to simulate the progressbar value shift..
</em>

<hr />

<blockquote style="background-color:rgba(255,255,160,.8);">
workaround.
<ul>
<li>
in a perfect world: using attr() to set the 'width'->  '[progressbar]:before{ width:attr(progressbar) }'
**SIGN** that won't work... :(
</li>
<li>the annoyance:   attr() works ok for 'content' but not for other stuff (fill, width, ...)</li>
<li>the workaround:       use progressbar value as a ""CSS id"" :( </li>
</ul>

here is the result:
<iframe allowfullscreen="allowfullscreen" seamless="seamless" frameborder="0" width="100%" height="600" style="width:100%; height:600px;" src="http://jsfiddle.net/6y12ef6m/embedded/css,html,result/presentation/"></iframe>
</blockquote>


so...
<strong>100% CSS,
Single Element (the :before does not count...),
minimal HTML code (CSS part does not count...)
...you still need to use JavaScript to change the values,
...or generate the page with the specific value,
but, still the CSS does its optimization, and (optionally) GPU pre-rendering..
</strong>

<img src="https://icompile.eladkarako.com/img/credit.png" style="width: 60%;"/>


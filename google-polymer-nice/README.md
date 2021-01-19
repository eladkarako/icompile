<img class="alignnone size-full wp-image-1363" src="https://icompile.eladkarako.com/_uploads/2014/07/2014-07-09_213551.jpg" alt="2014-07-09_213551" width="523" height="396" />

took 12 minutes to learn (Really Lovely!)
and 30 seconds to figure out that:
- its faster then ExtJS.
- better approach thn AngularJS (<a title="http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/" href="http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/" target="_blank">I can Shadow-DOM biAAAtch</a>)

Polymer layers..
<img class="alignnone wp-image-1362 " src="https://icompile.eladkarako.com/_uploads/2014/07/Ksn6s.png" alt="Ksn6s" width="506" height="403" />

hands-on time?
-YES!
-just for clarification, here is my implementation of new element,
both in AngularJS and Polymer.

creating a nice rendering-directive
<img class="alignnone size-full wp-image-1361" src="https://icompile.eladkarako.com/_uploads/2014/07/2014-07-09_221815.jpg" alt="2014-07-09_221815" width="513" height="46" />

which will be translated into:
<code><span style="color: #a65700;">&lt;</span><span style="color: #800000; font-weight: bold;">img</span><span style="color: #074726;">src</span><span style="color: #808030;">=</span><span style="color: #0000e6;">"https://www.gravatar.com/avatar/4879031fc142c87da9fde565fb4ea8fe.png"</span><span style="color: #a65700;">&gt;</span></code>

as you know (or not..) every user in gravatar.com has a globally accepted image (mostly formatted mime-type of image/png..) that is the MD5 of its email.. Polymer Does MD5!!

Polymer uses "polyfills"
<code><span style="color: #a65700;">&lt;</span><span style="color: #5f5035;">polymer-element</span><span style="color: #074726;">name</span><span style="color: #808030;">=</span><span style="color: #0000e6;">"user-gravatar"</span><span style="color: #274796;"> attributes</span><span style="color: #808030;">=</span><span style="color: #0000e6;">"email"</span><span style="color: #a65700;">&gt;</span>
<span style="color: #a65700;">&lt;</span><span style="color: #5f5035;">template</span><span style="color: #a65700;">&gt;</span>
<span style="color: #a65700;">&lt;</span><span style="color: #800000; font-weight: bold;">img</span><span style="color: #074726;">src</span><span style="color: #808030;">=</span><span style="color: #0000e6;">"https://secure.gravatar.com/avatar/{{gid}}"</span><span style="color: #a65700;">/&gt;</span>
<span style="color: #a65700;">&lt;/</span><span style="color: #5f5035;">template</span><span style="color: #a65700;">&gt;</span>
<span style="color: #a65700;">&lt;</span><span style="color: #800000; font-weight: bold;">script</span><span style="color: #a65700;">&gt;</span>
Polymer<span style="color: #808030;">(</span><span style="color: #0000e6;">'user-gravatar'</span><span style="color: #808030;">,</span> <span style="color: #800080;">{</span>
ready<span style="color: #800080;">:</span> <span style="color: #800000; font-weight: bold;">function</span><span style="color: #808030;">(</span><span style="color: #808030;">)</span> <span style="color: #800080;">{</span>
<span style="color: #800000; font-weight: bold;">this</span><span style="color: #808030;">.</span>gid <span style="color: #808030;">=</span> md5<span style="color: #808030;">(</span><span style="color: #800000; font-weight: bold;">this</span><span style="color: #808030;">.</span>email<span style="color: #808030;">)</span><span style="color: #800080;">;</span>
<span style="color: #800080;">}</span>
<span style="color: #800080;">}</span><span style="color: #808030;">)</span><span style="color: #800080;">;</span>
<span style="color: #a65700;">&lt;/</span><span style="color: #800000; font-weight: bold;">script</span><span style="color: #a65700;">&gt;</span>
<span style="color: #a65700;">&lt;/</span><span style="color: #5f5035;">polymer</span><span style="color: #a65700;">&gt;</span></code>

AngularJS approach is different..
<code>app<span style="color: #008c00;">.</span>directive('user-gravatar', ['md5', function() {
return {
restrict: 'E',
link: function(scope, element, attrs) {
scope<span style="color: #008c00;">.</span>gid = md5(attrs<span style="color: #008c00;">.</span>email);
},
template: '<span style="color: #a65700;">&lt;</span><span style="color: #800000; font-weight: bold;">img</span><span style="color: #074726;">src</span><span style="color: #808030;">=</span><span style="color: #0000e6;">"https://gravatar.com/avatar/{{gid}}"</span><span style="color: #a65700;">/&gt;</span>'
};
});</code>

its high level API, directive instead of shadow-DOM, which means, well nothing really to lamers..

&nbsp;

<iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/HKrYfrAzqFA?rel=0&amp;showinfo=0&amp;showads=0" frameborder="0" allowfullscreen></iframe>

<iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/yRbOSdAe_JU?rel=0&amp;showinfo=0&amp;showads=0" frameborder="0" allowfullscreen></iframe>

<iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/8OJ7ih8EE7s?rel=0&amp;showinfo=0&amp;showads=0" frameborder="0" allowfullscreen></iframe>

Angular and Ember, Polymer is behind you, and its for dev.s like me who like building things bottom/up instead of using higher-(lamer)-API.
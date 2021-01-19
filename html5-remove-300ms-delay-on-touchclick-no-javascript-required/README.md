<ol>
<li>
Include a viewport tag in the <code>&ltHEAD&gt;</code> with specific width definition.
You may specify a minimal-one: <code>&lt;meta name="viewport" content="width=device-width"/&gt;</code>
or a bit more complex one with initial-scale: <code>&lt;meta name="viewport" content="height=device-height,width=device-width,initial-scale=1.0,minimum-scale=1.0,minimal-ui"/&gt;</code> (you may forbid zooming/re-scale by also adding <code>,user-scalable=no</code> which will slightly improve overall performances and rendering speed).
</li>
<li>
Second *thing* is to instruct the page to disable <code>double-tap</code> gesture, it is an official technique, recommended by <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action" target="_blank">Mozilla</a>/<a href="https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away" target="_blank">Google</a>.
<pre>
<span style='color:#696969; '>/*`manipulation`</span>
<span style='color:#696969; '>&#xa0;* Enable panning and pinch zoom gestures, </span>
<span style='color:#696969; '>&#xa0;* but disable additional non-standard gestures</span>
<span style='color:#696969; '>&#xa0;* such as double-tap to zoom. Disabling double-tap </span>
<span style='color:#696969; '>&#xa0;* to zoom removes the need for browsers to delay </span>
<span style='color:#696969; '>&#xa0;* the generation of click events</span>
<span style='color:#696969; '>&#xa0;* when the user taps the screen. This is an alias </span>
<span style='color:#696969; '>&#xa0;* for "pan-x pan-y pinch-zoom"</span>
<span style='color:#696969; '>&#xa0;* (which, for compatibility, is itself still valid).</span>
<span style='color:#696969; '>&#xa0;*/</span>
<span style='color:#800000; font-weight:bold; '>html</span><span style='color:#800080; '>{</span>
  touch-action<span style='color:#808030; '>:</span> pan-x pan-y pinch-zoom<span style='color:#800080; '>;</span>
  touch-action<span style='color:#808030; '>:</span> manipulation<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>
</pre>

The above rule will be compatible with all the browsers you can think of (yes IE too), and will not require setting any onclick/ontouchstart/ontouchend/etc.. hooking events, neither halt event-bubbling.

As always with those html-set-rules, you better put the rule-block pretty early in-your CSS-file, you you may have an option to override the <code>touch-action</code> rule with a different value to a specific node, a good place is probably right-after the 'css-clear/zero code' at the start of the file.
</li>
</ol>

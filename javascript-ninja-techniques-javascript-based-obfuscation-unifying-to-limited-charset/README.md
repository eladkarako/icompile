<img src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_javascript_obfuscation_limited_charset.jpg" alt="icompile.eladkarako.com_javascript_obfuscation_limited_charset" width="223" height="147" class="alignright size-full wp-image-2643" />this one is quite nice to play with <em>(my obfuscation algorithms can be found around the <a rel="unfollow" href="http://www.google.com/search?q=karako+obfuscation+algorithm" title="Google Search" target="_blank">internet for some-time now</a> :) )</em>
<code id="target_for_javascript_obfuscation_limited_charset"></code>
<script>
document.querySelector('#target_for_javascript_obfuscation_limited_charset').innerHTML=decodeURIComponent("%24%3D~%5B%5D%3B%0A%24%3D%7B___%3A%2B%2B%24%2C%24%24%24%24%3A(!%5B%5D%2B%22%22)%5B%24%5D%2C__%24%3A%2B%2B%24%2C%24_%24_%3A(!%5B%5D%2B%22%22)%5B%24%5D%2C_%24_%3A%2B%2B%24%2C%24_%24%24%3A(%7B%7D%2B%22%22)%5B%24%5D%2C%24%24_%24%3A(%24%5B%24%5D%2B%22%22)%5B%24%5D%2C_%24%24%3A%2B%2B%24%2C%24%24%24_%3A(!%22%22%2B%22%22)%5B%24%5D%2C%24__%3A%2B%2B%24%2C%24_%24%3A%2B%2B%24%2C%24%24__%3A(%7B%7D%2B%22%22)%5B%24%5D%2C%24%24_%3A%2B%2B%24%2C%24%24%24%3A%2B%2B%24%2C%24___%3A%2B%2B%24%2C%24__%24%3A%2B%2B%24%7D%3B%0A%0A%24.%24_%3D(%24.%24_%3D%24%2B%22%22)%5B%24.%24_%24%5D%2B(%24._%24%3D%24.%24_%5B%24.__%24%5D)%2B(%24.%24%24%3D(%24.%24%2B%22%22)%5B%24.__%24%5D)%2B((!%24)%2B%22%22)%5B%24._%24%24%5D%2B(%24.__%3D%24.%24_%5B%24.%24%24_%5D)%2B(%24.%24%3D(!%22%22%2B%22%22)%5B%24.__%24%5D)%2B(%24._%3D(!%22%22%2B%22%22)%5B%24._%24_%5D)%2B%24.%24_%5B%24.%24_%24%5D%2B%24.__%2B%24._%24%2B%24.%24%3B%0A%24.%24%24%3D%24.%24%2B(!%22%22%2B%22%22)%5B%24._%24%24%5D%2B%24.__%2B%24._%2B%24.%24%2B%24.%24%24%3B%0A%24.%24%3D(%24.___)%5B%24.%24_%5D%5B%24.%24_%5D%3B%0A%0A%24.%24(%24.%24(%24.%24%24%2B%22%5C%22%22%2B%24.%24%24_%24%2B%24._%24%2B%24.%24%24__%2B%24._%2B%22%5C%5C%22%2B%24.__%24%2B%24.%24_%24%2B%24.%24_%24%2B%24.%24%24%24_%2B%22%5C%5C%22%2B%24.__%24%2B%24.%24_%24%2B%24.%24%24_%2B%24.__%2B%22.%5C%5C%22%2B%24.__%24%2B%24.%24%24_%2B%24.%24%24%24%2B%22%5C%5C%22%2B%24.__%24%2B%24.%24%24_%2B%24._%24_%2B%22%5C%5C%22%2B%24.__%24%2B%24.%24_%24%2B%24.__%24%2B%24.__%2B%24.%24%24%24_%2B%22(%5C%5C%5C%22%5C%5C%22%2B%24.__%24%2B%24.__%24%2B%24.___%2B%24.%24%24%24_%2B(!%5B%5D%2B%22%22)%5B%24._%24_%5D%2B(!%5B%5D%2B%22%22)%5B%24._%24_%5D%2B%24._%24%2B%22%2C%20%5C%5C%22%2B%24.__%24%2B%24.%24%24_%2B%24.%24%24%24%2B%24._%24%2B%22%5C%5C%22%2B%24.__%24%2B%24.%24%24_%2B%24._%24_%2B(!%5B%5D%2B%22%22)%5B%24._%24_%5D%2B%24.%24%24_%24%2B%22!%5C%5C%5C%22)%5C%5C%22%2B%24.%24%24%24%2B%24._%24%24%2B%22%5C%22%22)())()%3B%0A");
</script>

the idea is based on known strings returned by the JavaScript engine,
and making use of it, AS STRING, here is a snippet ;)
<code>
~[]       -1
~{}       -1
~~[]      0
![]+""    false
!![]+""   true
!""       true
-1[-1]    NaN
[].$      undefined
</code>

a word of warning, it drives <em>Google-Closure-Compiler</em> totally <em><span title="means..nuts..">Off the trolley</span></em>..

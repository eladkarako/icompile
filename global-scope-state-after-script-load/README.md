Using the latest jQuery 2 git

<pre>
var old = {};
for(var a in window){
  old[a] = window[a];
}

var s = document.createElement("script");
s.type = "application/javascript";
s.src="http://code.jquery.com/jquery-git.js";
s.onload = function(){
  setTimeout(function(){
    for(var a in window) (false === old.hasOwnProperty(a)) && console.log(a, window[a]);
  }, 30);
};
document.body.appendChild(s);
</pre>

will output
<a href="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_global_scope_diff_after_script_load_2016-01-22_170946.jpg" rel="attachment wp-att-4460"><img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_global_scope_diff_after_script_load_2016-01-22_170946.jpg" alt="icompile.eladkarako.com_global_scope_diff_after_script_load_2016-01-22_170946" width="1369" height="318" class="alignnone size-full wp-image-4460" /></a>
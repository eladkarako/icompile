On Chrome/Chromium-based browsers,
Blocked Google-Analytics requests will be answered with an embedded-(BASE64)-content.

<img src="https://icompile.eladkarako.com/_uploads/2016/05/icompile.eladkarako.com_you_cant_really_adblock_google-analytics_on_chrome_response_headers.gif" alt="icompile.eladkarako.com_you_cant_really_adblock_google-analytics_on_chrome_response_headers"/>

The BASE64 content:
<pre>KGZ1bmN0aW9uKCkgewoJLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzLwoJdmFyIG5vb3BmbiA9IGZ1bmN0aW9uKCkgewoJCTsKCX07Cgl2YXIgbm9vcG51bGxmbiA9IGZ1bmN0aW9uKCkgewoJCXJldHVybiBudWxsOwoJfTsKCS8vCgl2YXIgVHJhY2tlciA9IGZ1bmN0aW9uKCkgewoJCTsKCX07Cgl2YXIgcCA9IFRyYWNrZXIucHJvdG90eXBlOwoJcC5nZXQgPSBub29wZm47CglwLnNldCA9IG5vb3BmbjsKCXAuc2VuZCA9IG5vb3BmbjsKCS8vCgl2YXIgZ2FOYW1lID0gd2luZG93Lkdvb2dsZUFuYWx5dGljc09iamVjdCB8fCAnZ2EnOwoJdmFyIGdhID0gZnVuY3Rpb24oKSB7CgkJdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7CgkJaWYgKCBsZW4gPT09IDAgKSB7CgkJCXJldHVybjsKCQl9CgkJdmFyIGYgPSBhcmd1bWVudHNbbGVuLTFdOwoJCWlmICggdHlwZW9mIGYgIT09ICdvYmplY3QnIHx8IGYgPT09IG51bGwgfHwgdHlwZW9mIGYuaGl0Q2FsbGJhY2sgIT09ICdmdW5jdGlvbicgKSB7CgkJCXJldHVybjsKCQl9CgkJdHJ5IHsKCQkJZi5oaXRDYWxsYmFjaygpOwoJCX0gY2F0Y2ggKGV4KSB7CgkJfQoJfTsKCWdhLmNyZWF0ZSA9IGZ1bmN0aW9uKCkgewoJCXJldHVybiBuZXcgVHJhY2tlcigpOwoJfTsKCWdhLmdldEJ5TmFtZSA9IG5vb3BudWxsZm47CglnYS5nZXRBbGwgPSBmdW5jdGlvbigpIHsKCQlyZXR1cm4gW107Cgl9OwoJZ2EucmVtb3ZlID0gbm9vcGZuOwoJd2luZG93W2dhTmFtZV0gPSBnYTsKfSkoKTs=</pre>

Is:
<pre><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
	<span style='color:#696969; '>// https://developers.google.com/analytics/devguides/collection/analyticsjs/</span>
	<span style='color:#800000; font-weight:bold; '>var</span> noopfn <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
		<span style='color:#800080; '>;</span>
	<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
	<span style='color:#800000; font-weight:bold; '>var</span> noopnullfn <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
		<span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#0f4d75; '>null</span><span style='color:#800080; '>;</span>
	<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
	<span style='color:#696969; '>//</span>
	<span style='color:#800000; font-weight:bold; '>var</span> Tracker <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
		<span style='color:#800080; '>;</span>
	<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
	<span style='color:#800000; font-weight:bold; '>var</span> p <span style='color:#808030; '>=</span> Tracker<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#800080; '>;</span>
	p<span style='color:#808030; '>.</span>get <span style='color:#808030; '>=</span> noopfn<span style='color:#800080; '>;</span>
	p<span style='color:#808030; '>.</span>set <span style='color:#808030; '>=</span> noopfn<span style='color:#800080; '>;</span>
	p<span style='color:#808030; '>.</span>send <span style='color:#808030; '>=</span> noopfn<span style='color:#800080; '>;</span>
	<span style='color:#696969; '>//</span>
	<span style='color:#800000; font-weight:bold; '>var</span> gaName <span style='color:#808030; '>=</span> window<span style='color:#808030; '>.</span>GoogleAnalyticsObject <span style='color:#808030; '>||</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>ga</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>
	<span style='color:#800000; font-weight:bold; '>var</span> ga <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
		<span style='color:#800000; font-weight:bold; '>var</span> len <span style='color:#808030; '>=</span> <span style='color:#797997; '>arguments</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#800080; '>;</span>
		<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> len <span style='color:#808030; '>===</span> <span style='color:#008c00; '>0</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
			<span style='color:#800000; font-weight:bold; '>return</span><span style='color:#800080; '>;</span>
		<span style='color:#800080; '>}</span>
		<span style='color:#800000; font-weight:bold; '>var</span> f <span style='color:#808030; '>=</span> <span style='color:#797997; '>arguments</span><span style='color:#808030; '>[</span>len<span style='color:#808030; '>-</span><span style='color:#008c00; '>1</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
		<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> <span style='color:#800000; font-weight:bold; '>typeof</span> f <span style='color:#808030; '>!==</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>object</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>||</span> f <span style='color:#808030; '>===</span> <span style='color:#0f4d75; '>null</span> <span style='color:#808030; '>||</span> <span style='color:#800000; font-weight:bold; '>typeof</span> f<span style='color:#808030; '>.</span>hitCallback <span style='color:#808030; '>!==</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>function</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
			<span style='color:#800000; font-weight:bold; '>return</span><span style='color:#800080; '>;</span>
		<span style='color:#800080; '>}</span>
		<span style='color:#800000; font-weight:bold; '>try</span> <span style='color:#800080; '>{</span>
			f<span style='color:#808030; '>.</span>hitCallback<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
		<span style='color:#800080; '>}</span> <span style='color:#800000; font-weight:bold; '>catch</span> <span style='color:#808030; '>(</span>ex<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
		<span style='color:#800080; '>}</span>
	<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
	ga<span style='color:#808030; '>.</span>create <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
		<span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800000; font-weight:bold; '>new</span> Tracker<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
	<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
	ga<span style='color:#808030; '>.</span>getByName <span style='color:#808030; '>=</span> noopnullfn<span style='color:#800080; '>;</span>
	ga<span style='color:#808030; '>.</span>getAll <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
		<span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#808030; '>[</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
	<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
	ga<span style='color:#808030; '>.</span>remove <span style='color:#808030; '>=</span> noopfn<span style='color:#800080; '>;</span>
	window<span style='color:#808030; '>[</span>gaName<span style='color:#808030; '>]</span> <span style='color:#808030; '>=</span> ga<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

Like it? Hate it?

It does not matter. It is there!


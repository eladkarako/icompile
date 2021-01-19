<pre><span style='color:#696969; '>/**</span>
<span style='color:#696969; '>&#xa0;* WordPress inline HTML embed</span>
<span style='color:#696969; '>&#xa0;*</span>
<span style='color:#696969; '>&#xa0;* @since 4.4.0</span>
<span style='color:#696969; '>&#xa0;*</span>
<span style='color:#696969; '>&#xa0;* This file cannot have ampersands in it. This is to ensure</span>
<span style='color:#696969; '>&#xa0;* it can be embedded in older versions of WordPress.</span>
<span style='color:#696969; '>&#xa0;* See https://core.trac.wordpress.org/changeset/35708.</span>
<span style='color:#696969; '>&#xa0;*/</span>
<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span> window<span style='color:#808030; '>,</span> document <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
	<span style='color:#800000; '>'</span><span style='color:#0000e6; '>use strict</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>

	<span style='color:#800000; font-weight:bold; '>var</span> supportedBrowser <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>false</span><span style='color:#808030; '>,</span>
		loaded <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>false</span><span style='color:#800080; '>;</span>

		<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> document<span style='color:#808030; '>.</span>querySelector <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
			<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> window<span style='color:#808030; '>.</span>addEventListener <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
				supportedBrowser <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span><span style='color:#800080; '>;</span>
			<span style='color:#800080; '>}</span>
		<span style='color:#800080; '>}</span>

	window<span style='color:#808030; '>.</span>wp <span style='color:#808030; '>=</span> window<span style='color:#808030; '>.</span>wp <span style='color:#808030; '>||</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

	<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> <span style='color:#808030; '>!</span><span style='color:#808030; '>!</span> window<span style='color:#808030; '>.</span>wp<span style='color:#808030; '>.</span>receiveEmbedMessage <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
		<span style='color:#800000; font-weight:bold; '>return</span><span style='color:#800080; '>;</span>
	<span style='color:#800080; '>}</span>

	window<span style='color:#808030; '>.</span>wp<span style='color:#808030; '>.</span>receiveEmbedMessage <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span> e <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
		<span style='color:#800000; font-weight:bold; '>var</span> data <span style='color:#808030; '>=</span> e<span style='color:#808030; '>.</span>data<span style='color:#800080; '>;</span>
		<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> <span style='color:#808030; '>!</span> <span style='color:#808030; '>(</span> data<span style='color:#808030; '>.</span>secret <span style='color:#808030; '>||</span> data<span style='color:#808030; '>.</span>message <span style='color:#808030; '>||</span> data<span style='color:#808030; '>.</span>value <span style='color:#808030; '>)</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
			<span style='color:#800000; font-weight:bold; '>return</span><span style='color:#800080; '>;</span>
		<span style='color:#800080; '>}</span>

		<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span><span style='color:#0000e6; '> </span><span style='color:#800000; '>/</span><span style='color:#808030; '>[</span><span style='color:#808030; '>^</span><span style='color:#0000e6; '>a</span><span style='color:#808030; '>-</span><span style='color:#0000e6; '>zA</span><span style='color:#808030; '>-</span><span style='color:#0000e6; '>Z0</span><span style='color:#808030; '>-</span><span style='color:#0000e6; '>9</span><span style='color:#808030; '>]</span><span style='color:#800000; '>/</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>test</span><span style='color:#808030; '>(</span> data<span style='color:#808030; '>.</span>secret <span style='color:#808030; '>)</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
			<span style='color:#800000; font-weight:bold; '>return</span><span style='color:#800080; '>;</span>
		<span style='color:#800080; '>}</span>

		<span style='color:#800000; font-weight:bold; '>var</span> iframes <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>querySelectorAll<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>iframe[data-secret="</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>+</span> data<span style='color:#808030; '>.</span>secret <span style='color:#808030; '>+</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>"]</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>
			blockquotes <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>querySelectorAll<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>blockquote[data-secret="</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>+</span> data<span style='color:#808030; '>.</span>secret <span style='color:#808030; '>+</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>"]</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>
			i<span style='color:#808030; '>,</span> <span style='color:#797997; '>source</span><span style='color:#808030; '>,</span> height<span style='color:#808030; '>,</span> sourceURL<span style='color:#808030; '>,</span> targetURL<span style='color:#800080; '>;</span>

		<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#808030; '>(</span> i <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> i <span style='color:#808030; '>&lt;</span> blockquotes<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#800080; '>;</span> i<span style='color:#808030; '>++</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
			blockquotes<span style='color:#808030; '>[</span> i <span style='color:#808030; '>]</span><span style='color:#808030; '>.</span>style<span style='color:#808030; '>.</span>display <span style='color:#808030; '>=</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>none</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>
		<span style='color:#800080; '>}</span>

		<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#808030; '>(</span> i <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> i <span style='color:#808030; '>&lt;</span> iframes<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#800080; '>;</span> i<span style='color:#808030; '>++</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
			<span style='color:#797997; '>source</span> <span style='color:#808030; '>=</span> iframes<span style='color:#808030; '>[</span> i <span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>

			<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> e<span style='color:#808030; '>.</span><span style='color:#797997; '>source</span> <span style='color:#808030; '>!==</span> <span style='color:#797997; '>source</span><span style='color:#808030; '>.</span>contentWindow <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
				<span style='color:#800000; font-weight:bold; '>continue</span><span style='color:#800080; '>;</span>
			<span style='color:#800080; '>}</span>

			<span style='color:#797997; '>source</span><span style='color:#808030; '>.</span>removeAttribute<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>style</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

			<span style='color:#696969; '>/* Resize the iframe on request. */</span>
			<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>height</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>===</span> data<span style='color:#808030; '>.</span>message <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
				height <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>parseInt</span><span style='color:#808030; '>(</span> data<span style='color:#808030; '>.</span>value<span style='color:#808030; '>,</span> <span style='color:#008c00; '>10</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
				<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> height <span style='color:#808030; '>></span> <span style='color:#008c00; '>1000</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
					height <span style='color:#808030; '>=</span> <span style='color:#008c00; '>1000</span><span style='color:#800080; '>;</span>
				<span style='color:#800080; '>}</span> <span style='color:#800000; font-weight:bold; '>else</span> <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> <span style='color:#808030; '>~</span><span style='color:#808030; '>~</span>height <span style='color:#808030; '>&lt;</span> <span style='color:#008c00; '>200</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
					height <span style='color:#808030; '>=</span> <span style='color:#008c00; '>200</span><span style='color:#800080; '>;</span>
				<span style='color:#800080; '>}</span>

				<span style='color:#797997; '>source</span><span style='color:#808030; '>.</span>height <span style='color:#808030; '>=</span> height<span style='color:#800080; '>;</span>
			<span style='color:#800080; '>}</span>

			<span style='color:#696969; '>/* Link to a specific URL on request. */</span>
			<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>link</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>===</span> data<span style='color:#808030; '>.</span>message <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
				sourceURL <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>createElement<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>a</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
				targetURL <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>createElement<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>a</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

				sourceURL<span style='color:#808030; '>.</span>href <span style='color:#808030; '>=</span> <span style='color:#797997; '>source</span><span style='color:#808030; '>.</span>getAttribute<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>src</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
				targetURL<span style='color:#808030; '>.</span>href <span style='color:#808030; '>=</span> data<span style='color:#808030; '>.</span>value<span style='color:#800080; '>;</span>

				<span style='color:#696969; '>/* Only continue if link hostname matches iframe's hostname. */</span>
				<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> targetURL<span style='color:#808030; '>.</span>host <span style='color:#808030; '>===</span> sourceURL<span style='color:#808030; '>.</span>host <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
					<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> document<span style='color:#808030; '>.</span>activeElement <span style='color:#808030; '>===</span> <span style='color:#797997; '>source</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
						window<span style='color:#808030; '>.</span>top<span style='color:#808030; '>.</span>location<span style='color:#808030; '>.</span>href <span style='color:#808030; '>=</span> data<span style='color:#808030; '>.</span>value<span style='color:#800080; '>;</span>
					<span style='color:#800080; '>}</span>
				<span style='color:#800080; '>}</span>
			<span style='color:#800080; '>}</span>
		<span style='color:#800080; '>}</span>
	<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

	<span style='color:#800000; font-weight:bold; '>function</span> onLoad<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
		<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> loaded <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
			<span style='color:#800000; font-weight:bold; '>return</span><span style='color:#800080; '>;</span>
		<span style='color:#800080; '>}</span>

		loaded <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>true</span><span style='color:#800080; '>;</span>

		<span style='color:#800000; font-weight:bold; '>var</span> isIE10 <span style='color:#808030; '>=</span> <span style='color:#808030; '>-</span><span style='color:#008c00; '>1</span> <span style='color:#808030; '>!==</span> navigator<span style='color:#808030; '>.</span>appVersion<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>indexOf</span><span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>MSIE 10</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>
			isIE11 <span style='color:#808030; '>=</span> <span style='color:#808030; '>!</span><span style='color:#808030; '>!</span>navigator<span style='color:#808030; '>.</span>userAgent<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>match</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '> </span><span style='color:#800000; '>/</span><span style='color:#0000e6; '>Trident</span><span style='color:#808030; '>.</span><span style='color:#808030; '>*</span><span style='color:#0000e6; '>rv:11</span><span style='color:#0f69ff; '>\\.</span><span style='color:#800000; '>/</span> <span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>
			iframes <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>querySelectorAll<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>iframe.wp-embedded-content</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>)</span><span style='color:#808030; '>,</span>
			iframeClone<span style='color:#808030; '>,</span> i<span style='color:#808030; '>,</span> <span style='color:#797997; '>source</span><span style='color:#808030; '>,</span> secret<span style='color:#800080; '>;</span>

		<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#808030; '>(</span> i <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span> i <span style='color:#808030; '>&lt;</span> iframes<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>length</span><span style='color:#800080; '>;</span> i<span style='color:#808030; '>++</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
			<span style='color:#797997; '>source</span> <span style='color:#808030; '>=</span> iframes<span style='color:#808030; '>[</span> i <span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>

			<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> <span style='color:#797997; '>source</span><span style='color:#808030; '>.</span>getAttribute<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>data-secret</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>)</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
				<span style='color:#800000; font-weight:bold; '>continue</span><span style='color:#800080; '>;</span>
			<span style='color:#800080; '>}</span>

			<span style='color:#696969; '>/* Add secret to iframe */</span>
			secret <span style='color:#808030; '>=</span> <span style='color:#797997; '>Math</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>random</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toString</span><span style='color:#808030; '>(</span> <span style='color:#008c00; '>36</span> <span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>substr</span><span style='color:#808030; '>(</span> <span style='color:#008c00; '>2</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>10</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
			<span style='color:#797997; '>source</span><span style='color:#808030; '>.</span>src <span style='color:#808030; '>+=</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>#?secret=</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>+</span> secret<span style='color:#800080; '>;</span>
			<span style='color:#797997; '>source</span><span style='color:#808030; '>.</span>setAttribute<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>data-secret</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> secret <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

			<span style='color:#696969; '>/* Remove security attribute from iframes in IE10 and IE11. */</span>
			<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> <span style='color:#808030; '>(</span> isIE10 <span style='color:#808030; '>||</span> isIE11 <span style='color:#808030; '>)</span> <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
				iframeClone <span style='color:#808030; '>=</span> <span style='color:#797997; '>source</span><span style='color:#808030; '>.</span>cloneNode<span style='color:#808030; '>(</span> <span style='color:#0f4d75; '>true</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
				iframeClone<span style='color:#808030; '>.</span>removeAttribute<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>security</span><span style='color:#800000; '>'</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
				<span style='color:#797997; '>source</span><span style='color:#808030; '>.</span>parentNode<span style='color:#808030; '>.</span>replaceChild<span style='color:#808030; '>(</span> iframeClone<span style='color:#808030; '>,</span> <span style='color:#797997; '>source</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
			<span style='color:#800080; '>}</span>
		<span style='color:#800080; '>}</span>
	<span style='color:#800080; '>}</span>

	<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span> supportedBrowser <span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
		window<span style='color:#808030; '>.</span>addEventListener<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>message</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> window<span style='color:#808030; '>.</span>wp<span style='color:#808030; '>.</span>receiveEmbedMessage<span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
		document<span style='color:#808030; '>.</span>addEventListener<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>DOMContentLoaded</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> onLoad<span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
		window<span style='color:#808030; '>.</span>addEventListener<span style='color:#808030; '>(</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>load</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> onLoad<span style='color:#808030; '>,</span> <span style='color:#0f4d75; '>false</span> <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
	<span style='color:#800080; '>}</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>(</span> window<span style='color:#808030; '>,</span> document <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>
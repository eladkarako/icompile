Have a look a the repository of the example (real case) page: <a href="https://github.com/eladkarako/umoji" target="_blank">https://github.com/eladkarako/umoji</a>.

This is an example of a page with a nice amount of Unicode Emoji, it weights ~97KB,
which means the page will <strong>load</strong> after about 1.5 seconds when hosted on a fast server <sup><a href="https://github.com/eladkarako/umoji" target="_blank">https://github.com/eladkarako/umoji</a></sup> and will load in about 4 seconds on a slower hosting <sup><a href="http://umoji.eladkarako.com" target="_blank">http://umoji.eladkarako.com</a></sup>,
To this loading time we, sadly, <strong>have to add the rendering time</strong> which differ on each client, but roughly its about 0.5 of a second more,

While "loading.. is loading.." meaning we can (should not) display partial page,
in order to prevent jumpiness or scrolling issues,
- while the tab waits for text-DOMReady (but before the complete page rendering) we can show an announcement, of "loading state".

1. prepare a super small (2KB max) image (GIF works well)
<img src="https://icompile.eladkarako.com/_uploads/2016/12/icompile.eladkarako.com_loading_image.gif" alt="loading image example" width="320" height="180" />

<!--more-->
2. encode it to base64, since it MUST load synchronously, with the page, then place the base64-image as background-image of the HTML (CSS).

here is an example that will spread the image to the page quite well..

<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>style</span><span style='color:#a65700; '>&gt;</span>
 <span style='color:#800000; font-weight:bold; '>html</span><span style='color:#800080; '>{</span>
    <span style='color:#bb7977; font-weight:bold; '>background</span><span style='color:#808030; '>:</span>      <span style='color:#400000; '>url</span><span style='color:#808030; '>(</span><span style='color:#666616; '>data</span><span style='color:#800080; '>:</span><span style='color:#40015a; '>image/gif;base64,R0lGODlhQAG0APEAANLS0sjIyKWlpURERCH5BAQAAAAAIf8LSW1hZ2VNYWdpY2sOZ2FtbWE9MC40NTQ1NDUALAAAAABAAbQAAAL+hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NTTtwjX3dIJAtEFC9lZ3NwC0+wGuuvZZ+vsAusMvOJu+eDq9Lr5af8B6fPv+vnrl7ufahMYhg4Dd8AfU1XFBOAEGG5gBWXIbQTMb+YhszlBM30YLEdyEnfLwmcSGAjiBOoiwZwWVKQSwpuHynEsJNdgNgbuPZ89vGnTBlLtwpziZQgg/n1JQAtCm5qE8BBKDac6VUAztzHrjJFWtWnVgNpPMapyrar2LFrUWAlCqEtkgZ9FNwc2Tbt2yxetsKp6qDtub4miU87ifiiwrYrY1L2AFksXcE212cWPFin1oxZ05AFKJnkA1Gf3YKOOZSvXdLYwsZAKnPqBInt8NrT/Rq1rl1k7RdOfXcjDwN19acVGDhxjynDvR9ljlgniWBGraY/AFapG9bY/Aetrd0xqCj4x66EfyB4nbUnieNQGVdDY7fZ7d/uq9b6Nn++NYvn9p8dVjGj3jKdaNBV+Mh6Bp5cJkH4HKXSfjgc/ElJFwbBGJI4YGv0WfgYR0uiI1z8EV4H4koqTiAYRtqlKEBXgloIoMOxGbbhwU6yGKN2DwWYk4K7rgfcj+2F6NVKL5mXIgVLoZWTTv5qA5+KxpZJYcpWtkikjwuMKOUTgKQI3tP2kjlbUteueZYacL2X5rBfUmWhVi6qZ9nYdopJ3/XAMknl9VlOKWXW6oWqKAsDkRjeCdOeCiZQUqa6JlHEplfm3NG+kBokoUYlzdtRkkoYEO2yVlnj4pYZJ8DJsmlmn7iqSqalv7Z46d0ejqqrq2uVyqdb7gXX5weskn+qbC8Aissq5km29+sTSYqZrMaJunVVZMym+KymJbIYqrojehotHduNya3zw6LbQKxbQvtad5qaWu8KL3VaJ6XouprpvnSuy9q1t5Jq7o66ovsrVkivDDA4HL55mBbcZemrE/CdvG0QSXxW20ef+xVc+6aybDF9gZs8MMKN1zuwQqLC6HDuLbJsr1UAlrvEKZZDBmZkJUkW3w/z/oSjlFFrOiFDFe88cn+IkTxtwnrbBq6o62189TOeubqAd/Mq3B3WRO9J7XpArEzWtpihi9hvM18YZlAIe31yakWSjRhpIIKXlxIpK2AUJtJTBlY7qYsD969ugs2w/6Jtfah+cr7FrI91/EAOKRYXVfmQuSq5NfWJp+Ms61CxrwoghlNjlDkOQeROdOmN+idS3XGaTjEhzfecs0rV2lsyqKuWRSsYBCV6pvJS5BXFM0jjhxnJw1v3/LgxEBs3ddTkb2M20/B+/ddgHe5+EJwY33U5jvfjdpOW7++EXIHH38T8wdafv0/3D+7/kvwfy//SeF+1BMg+H4GPwMqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxSjeoQAAOw==</span><span style='color:#808030; '>)</span> <span style='color:#008c00; '>#</span><span style='color:#008000; '>D3D3D3</span> <span style='color:#074726; '>no-repeat</span> <span style='color:#074726; '>center</span> <span style='color:#074726; '>center</span> <span style='color:#074726; '>content-box</span><span style='color:#800080; '>;</span>
    <span style='color:#bb7977; font-weight:bold; '>background-size</span><span style='color:#808030; '>:</span> contain<span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>style</span><span style='color:#a65700; '>&gt;</span>
</pre>

3. finally, place an additional style tag, displaying the body and overriding the html-background-image to none, at the bottom of the HTML-source, just before the closing-of BODY tag, when the page will complete the text-loading, the last style-tag will be changing the look of the page, overriding the previous rules (no JavaScript needed!).
<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>style</span><span style='color:#a65700; '> media="all" type="text/css"></span><span style='color:#800000; font-weight:bold; '>body</span><span style='color:#800080; '>{</span><span style='color:#bb7977; font-weight:bold; '>display</span><span style='color:#808030; '>:</span><span style='color:#074726; '>block</span> <span style='color:#800000; font-weight:bold; '>!important</span><span style='color:#800080; '>;</span><span style='color:#800080; '>}</span> <span style='color:#800000; font-weight:bold; '>html</span><span style='color:#800080; '>{</span><span style='color:#bb7977; font-weight:bold; '>background-image</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>none</span> <span style='color:#800000; font-weight:bold; '>!important</span><span style='color:#800080; '>;</span><span style='color:#800080; '>}</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>style</span><span style='color:#a65700; '>&gt;</span>
</pre>

4. done.

<hr/>

See complete code example here (completetly self contained..)
<a href="https://github.com/eladkarako/umoji/blob/master/index.html" target="_blank">https://github.com/eladkarako/umoji/blob/master/index.html</a>
and running example on here: <a href="https://eladkarako.github.io/umoji/" target="_blank">https://eladkarako.github.io/umoji/</a>
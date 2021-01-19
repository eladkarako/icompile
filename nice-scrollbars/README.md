Those bulky scrollbars with the useless 'arrows'
are mostly the cause of large-font in compare to a low(er) screen-resolution.

<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_nice_scroll_usually_it_is_very_bulky.png" alt="" width="623" height="240"/>

The up/down arrows are mostly useless now-days anyway,
since it requires pin-point accuracy with the mouse,
which <em>in most cases</em> is not essential- 
- and it is far more <em>fun</em> to just drag away the <em>middle-thingy</em> anyhow..

<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_nice_scroll_maxed_out.png" alt="" width="280" height="390"/>

<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_nice_scroll_hover.png" alt="" width="299" height="409"/>

<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_nice_scroll_active.png" alt="" width="314" height="397"/>

If you're a page designer, HTML5 developer,
consider this minimal set of CSS3 rules to make your end result look far better:
The scrollbar will have constant dimensions, and will allow more efficient scrolling.

<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_nice_textbox_less_bulky.png" alt="" width="922" height="367"/>

<!--more-->

<pre>
 <span style='color:#800080; '>::</span>-webkit-scrollbar
<span style='color:#808030; '>,</span><span style='color:#800080; '>::</span>-webkit-scrollbar<span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>horizontal</span>
<span style='color:#808030; '>,</span><span style='color:#800080; '>::</span>-webkit-scrollbar-thumb
<span style='color:#808030; '>,</span><span style='color:#800080; '>::</span>-webkit-scrollbar-button<span style='color:#800080; '>{</span>
  <span style='color:#bb7977; font-weight:bold; '>box-sizing</span><span style='color:#808030; '>:</span>        <span style='color:#074726; '>border-box</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>background-clip</span><span style='color:#808030; '>:</span>   <span style='color:#074726; '>border-box</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>outline</span><span style='color:#808030; '>:</span>           <span style='color:#074726; '>none</span> <span style='color:#074726; '>transparent</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>border</span><span style='color:#808030; '>:</span>            <span style='color:#074726; '>none</span> <span style='color:#074726; '>transparent</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>padding</span><span style='color:#808030; '>:</span>           <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>margin</span><span style='color:#808030; '>:</span>            <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
  <span style='color:#bb7977; font-weight:bold; '>overflow</span><span style='color:#808030; '>:</span>          <span style='color:#074726; '>hidden</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span>

<span style='color:#800080; '>::</span>-webkit-scrollbar-button<span style='color:#800080; '>{</span>       <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>    <span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>             <span style='color:#800080; '>}</span>
<span style='color:#800080; '>::</span>-webkit-scrollbar<span style='color:#800080; '>{</span>              <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span><span style='color:#008c00; '>20</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span>          <span style='color:#800080; '>}</span>
<span style='color:#800080; '>::</span>-webkit-scrollbar<span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>horizontal</span><span style='color:#800080; '>{</span>   <span style='color:#bb7977; font-weight:bold; '>height</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>20</span><span style='color:#006600; '>px</span><span style='color:#800080; '>;</span> <span style='color:#bb7977; font-weight:bold; '>width</span><span style='color:#808030; '>:</span> <span style='color:#008c00; '>100</span><span style='color:#006600; '>%</span><span style='color:#800080; '>;</span>         <span style='color:#800080; '>}</span>

<span style='color:#800080; '>::</span>-webkit-scrollbar-thumb<span style='color:#800080; '>{</span>        <span style='color:#bb7977; font-weight:bold; '>background</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>none</span> <span style='color:#400000; '>rgba</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>.15</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>  <span style='color:#800080; '>}</span>
<span style='color:#800080; '>::</span>-webkit-scrollbar-thumb<span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>hover</span><span style='color:#800080; '>{</span>  <span style='color:#bb7977; font-weight:bold; '>background</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>none</span> <span style='color:#400000; '>rgba</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>.3</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>   <span style='color:#800080; '>}</span>
<span style='color:#800080; '>::</span>-webkit-scrollbar-thumb<span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>active</span><span style='color:#800080; '>{</span> <span style='color:#bb7977; font-weight:bold; '>background</span><span style='color:#808030; '>:</span> <span style='color:#074726; '>none</span> <span style='color:#400000; '>rgba</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>.4</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>   <span style='color:#800080; '>}</span>
</pre>

<hr/>

<blockquote>
*We* use a version of it on Google Online-Apps regularly,
it gives a really professional look&&feel.
It also looks <em>/kind-of/</em> similar to native scrollbars used in Android/iOS,
so it looks *better* (seamlessly) when designing/embedding an app, which is HTML-based (a.k.a <em>hybrid app</em>).
It does uses CSS-pseudo-element which means it would probably not work on old versions of Chrome (or any browser you'll suite it to using the CSS-vendor-prefixes), but it will always fallback safely to the default definition and design.. :]

- read more about it in here: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar</a>
</blockquote>



<strong>A live example:</strong>
<sub>scroll around and feel free to right click the iframe and inspect the code.</sub>

<iframe style="width:80%;height:300px;" allowfullscreen="true" frameborder="0" marginheight="0" marginwidth="0" referrerpolicy="unsafe-url" scrolling="yes" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation" seamless="false" target="" src="data:text/html;charset=UTF-8;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGl0ZW1zY29wZT0iIiBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvV2ViUGFnZSIgZGlyPSJsdHIiIGxhbmc9ImVuLVVTIiBsYW5ndWFnZT0iRW5nbGlzaCIgY2hhcnNldD0iVVRGLTgiIGVuY29kaW5nPSJVVEYtOCI+CjxoZWFkPgogIDxtZXRhIGh0dHAtZXF1aXY9IlgtVUEtQ29tcGF0aWJsZSIgY29udGVudD0iSUU9ZWRnZSxjaHJvbWU9MSIvPgogIDxtZXRhIGh0dHAtZXF1aXY9IkNvbnRlbnQtVHlwZSIgICAgY29udGVudD0idGV4dC9odG1sO2NoYXJzZXQ9VVRGLTgiLz4KICA8bWV0YSBuYW1lPSJmcmFnbWVudCIgICAgICAgICAgICAgIGNvbnRlbnQ9IiEiLz4KICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgICAgICAgICAgICAgIGNvbnRlbnQ9ImhlaWdodD1kZXZpY2UtaGVpZ2h0LGluaXRpYWwtc2NhbGU9MS4wLG1heGltdW0tc2NhbGU9MS4wLG1pbmltdW0tc2NhbGU9MS4wLHVzZXItc2NhbGFibGU9bm8sd2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltYWwtdWkiLz4KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiIG1lZGlhPSJhbGwiPgovKjwhW0NEQVRBWyovCkBjaGFyc2V0ICJVVEYtOCI7CkBuYW1lc3BhY2UgImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiOwoKKnsKICBib3gtc2l6aW5nOiAgICAgICAgYm9yZGVyLWJveDsKICBiYWNrZ3JvdW5kLWNsaXA6ICAgYm9yZGVyLWJveDsKICBvdXRsaW5lOiAgICAgICAgICAgbm9uZSB0cmFuc3BhcmVudDsKICBib3JkZXI6ICAgICAgICAgICAgbm9uZSB0cmFuc3BhcmVudDsKICBwYWRkaW5nOiAgICAgICAgICAgMDsKICBtYXJnaW46ICAgICAgICAgICAgMDsKICB0ZXh0LXNpemUtYWRqdXN0OiAgYXV0bzsKfQoKaHRtbHsKICBoZWlnaHQ6ICAgICAgICAgICAgNDAwJTsKICB3aWR0aDogICAgICAgICAgICAgNDAwJTsKICBvdmVyZmxvdzogICAgICAgICAgc2Nyb2xsOwogIGZvbnQ6ICAgICAgICAgICAgICAyMHB0ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTsKfQoKYm9keXsKICBoZWlnaHQ6ICAgICAgICAgICAgMTAwJTsKICB3aWR0aDogICAgICAgICAgICAgMTAwJTsKICBvdmVyZmxvdzogICAgICAgICAgaGlkZGVuOwogIGJhY2tncm91bmQ6ICAgICAgICBub25lIGxpZ2h0Ymx1ZTsKfQoKIDo6LXdlYmtpdC1zY3JvbGxiYXIKLDo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbAosOjotd2Via2l0LXNjcm9sbGJhci10aHVtYgosOjotd2Via2l0LXNjcm9sbGJhci1idXR0b257CiAgYm94LXNpemluZzogICAgICAgIGJvcmRlci1ib3g7CiAgYmFja2dyb3VuZC1jbGlwOiAgIGJvcmRlci1ib3g7CiAgb3V0bGluZTogICAgICAgICAgIG5vbmUgdHJhbnNwYXJlbnQ7CiAgYm9yZGVyOiAgICAgICAgICAgIG5vbmUgdHJhbnNwYXJlbnQ7CiAgcGFkZGluZzogICAgICAgICAgIDA7CiAgbWFyZ2luOiAgICAgICAgICAgIDA7CiAgb3ZlcmZsb3c6ICAgICAgICAgIGhpZGRlbjsKfQoKOjotd2Via2l0LXNjcm9sbGJhci1idXR0b257ICAgICAgIGhlaWdodDogMDsgICAgd2lkdGg6MDsgICAgICAgICAgICAgfQo6Oi13ZWJraXQtc2Nyb2xsYmFyeyAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyB3aWR0aDoyMHB4OyAgICAgICAgICB9Cjo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbHsgICBoZWlnaHQ6IDIwcHg7IHdpZHRoOiAxMDAlOyAgICAgICAgIH0KCjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7ICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJnYmEoMCwwLDAsLjE1KTsgIH0KOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcnsgIGJhY2tncm91bmQ6IG5vbmUgcmdiYSgwLDAsMCwuMyk7ICAgfQo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZXsgYmFja2dyb3VuZDogbm9uZSByZ2JhKDAsMCwwLC40KTsgICB9CgovKl1dPiovCjwvc3R5bGU+CjwvaGVhZD4KPGJvZHk+PC9ib2R5Pgo8L2h0bWw+"></iframe>

I find the above, minimal and suitable for all of the cases.

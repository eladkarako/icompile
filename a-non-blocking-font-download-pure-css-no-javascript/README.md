Custom font-face are fun,
..I guess...

But when not allowing several alternatives of font-families (sans, sans-serif, etc.. are considered a "low-priority" but perfectly fine alternatives!), not using the "local(...)" syntax to allow sorter times, by loading a locally installed fonts from the OS, and pretty much limiting the page to use an external font-file,
The time the page will take until first-paint event might take few SECONDS(!)

There are few tricks that the browser will try to apply,
just to avoid all this waiting though..

You can avoid that "blocking" time,
by explicitly allow the browser to display the page as is,
and "swap" (official term..) ..which means update the page
once the external font-file will be downloaded.

You can do this (for web-developers) by adding <code>font-display:swap;</code> to your <code>@font-face</code> loading block part in your page's CSS file.

<pre>
@font-face {
  font-family: ExampleFont;
  src: url(/path/to/fonts/examplefont.woff) format('woff'),
       url(/path/to/fonts/examplefont.eot) format('eot');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
</pre>


And if you're already *there*- you might be able
to tweak things to load the page much faster,
for example when using a common font-family.

<pre>
&lt;style type="text/css" media="all"&gt;
@font-face{
  font-family:  'Tahoma';
  font-weight:  400;
  font-style:   normal;
  font-display: swap;
  
  src: local('Tahoma')
      ,local('tahoma')
      ,local('tahoma.ttf')
      ,url(fonts/tahoma.eot?#iefix)   format('embedded-opentype')
      ,url(fonts/tahoma.woff)         format('woff')
      ,url(fonts/tahoma.ttf)          format('truetype')
      ;
}

/* normalise inheritage of font-family and stuff (for textarea and such..)
 a,abbr,acronym,address,applet,big,blockquote,body
,button,caption,cite,code,dd,del,dfn,div,dl,dt,em
,fieldset,font,form,h1,h2,h3,h4,h5,h6,html,iframe
,input,ins,kbd,label,legend,li,object,ol,p,pre,q,s
,samp,select,small,span,strike,strong,sub,sup,table
,tbody,td,textarea,tfoot,th,thead,tr,tt,ul,var{
  font:                   inherit;
  font-family:            inherit;
  font-style:             inherit;
  font-size:              inherit;
  font-weight:            inherit;

  font-display:           inherit;
  font-size-adjust:       inherit;
  font-stretch:           inherit;
}

/* the "actual magic" */
html{
  font-family: 'Tahoma', sans-serif;
}

/* are we having fun yet?? */
&lt;/style&gt;
</pre>

<hr/>

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display" target="_blank">-reference...</a>', 'A Non-Blocking Font-Download - Pure CSS
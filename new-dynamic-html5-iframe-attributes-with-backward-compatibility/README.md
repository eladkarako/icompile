<small><a href="http://www.w3.org/TR/html-markup/iframe.html" title="http://www.w3.org/TR/html-markup/iframe.html" target="_blank">http://www.w3.org/TR/html-markup/iframe.html</a></small>

Old + HTML5 attributes.

<pre>
<iframe src="http://hosts.eladkarako.com/" 
 <!--[if !IE]><!--> allowtransparency="true" <!--<![endif]-->  
 <!--[if IE]>       allowTransparency="true" <![endif]--> 
 readonly="readonly" 
 frameborder="0" 
 marginheight="0" 
 marginwidth="0" 
 allowfullscreen="allowfullscreen" 
 sandbox="allow-forms allow-scripts allow-top-navigation allow-same-origin" 
 width="100%" 
 height="300" 
 scrolling="no" 
 seamless="seamless" 
 style="background:rgba(255,255,255,0); background:transparent; border:0 none transparent; padding:0; overflow:hidden;" 
></iframe>
</pre>

Setting &lt;IFRAME&gt; attributes programmatically.
<pre><!--[if IE]><script>window.is_ie=true;</script><![endif]-->
<iframe id="sample_iframe_dynamic"></iframe>

<script>
(function(window,document){
var 
  i = document.getElementById("sample_iframe_dynamic"),
  att,
  fnSet = function(hAtt){
    for(att in hAtt)
      if(hAtt.hasOwnProperty(att))
        i.setAttribute(att, hAtt[att]);
  };

fnSet({
 "width"             : "100%",               //
 "height"            : "500",                //
 "vspace"            : "0",                  //
 "hspace"            : "0",                  //
 "sandbox"           : "allow-forms allow-scripts allow-top-navigation allow-same-origin",
 "seamless"          : "seamless",           //
 "readonly"          : "readonly",           //
 "scrolling"         : "no",                 //
 "marginwidth"       : "0",                  //
 "marginheight"      : "0",                  //
 "frameborder"       : "0",                  //
 "allowfullscreen"   : "allowfullscreen",    //
 "allowtransparency" : "true"                //
});

fnSet({
 "frameBorder"       : "0",                  //ie or old
 "allowFullscreen"   : "allowfullscreen",    //ie or old
 "allowTransparency" : "true"                //ie or old
});

fnSet({ 
 'data-is-ie': (!!window.is_ie) ? "true" : "false"
});

i.style.cssText   = "";
i.style.cssText  += "padding:                              0; ";
i.style.cssText  += "min-height:                       500px; ";
i.style.cssText  += "max-height:                       500px; ";
i.style.cssText  += "overflow:                        hidden; ";
i.style.cssText  += "background:                 transparent; ";
i.style.cssText  += "border:              0 none transparent; ";
i.style.cssText  += "height:             calc(100% - (10px)); ";
i.style.cssText  += "height:        -moz-calc(100% - (10px)); ";
i.style.cssText  += "height:     -webkit-calc(100% - (10px)); ";

i.style.cssText  += "border-radius:                      10%; ";
i.style.cssText  += "box-shadow:  3px 3px 3px rgba(0,0,0,.4); ";

i.src="http://hosts.eladkarako.com/";

}(window,document));
</script>

</pre>


<em>demo:</em>

<pre>
<!--[if IE]><script>window.is_ie=true;</script><![endif]-->
<iframe id="sample_iframe_dynamic"></iframe>

<script>
(function(window,document){
var 
  i = document.getElementById("sample_iframe_dynamic"),
  att,
  fnSet = function(hAtt){
    for(att in hAtt)
      if(hAtt.hasOwnProperty(att))
        i.setAttribute(att, hAtt[att]);
  };

fnSet({
 "width"             : "100%",               //
 "height"            : "500",                //
 "vspace"            : "0",                  //
 "hspace"            : "0",                  //
 "sandbox"           : "allow-forms allow-scripts allow-top-navigation allow-same-origin",
 "seamless"          : "seamless",           //
 "readonly"          : "readonly",           //
 "scrolling"         : "no",                 //
 "marginwidth"       : "0",                  //
 "marginheight"      : "0",                  //
 "frameborder"       : "0",                  //
 "allowfullscreen"   : "allowfullscreen",    //
 "allowtransparency" : "true"                //
});

fnSet({
 "frameBorder"       : "0",                  //ie or old
 "allowFullscreen"   : "allowfullscreen",    //ie or old
 "allowTransparency" : "true"                //ie or old
});

fnSet({ 
 'data-is-ie': (!!window.is_ie) ? "true" : "false"
});

i.style.cssText   = "";
i.style.cssText  += "padding:                              0; ";
i.style.cssText  += "min-height:                       500px; ";
i.style.cssText  += "max-height:                       500px; ";
i.style.cssText  += "overflow:                        hidden; ";
i.style.cssText  += "background:                 transparent; ";
i.style.cssText  += "border:              0 none transparent; ";
i.style.cssText  += "height:             calc(100% - (10px)); ";
i.style.cssText  += "height:        -moz-calc(100% - (10px)); ";
i.style.cssText  += "height:     -webkit-calc(100% - (10px)); ";

i.style.cssText  += "border-radius:                      10%; ";
i.style.cssText  += "box-shadow:  3px 3px 3px rgba(0,0,0,.4); ";

i.src="http://hosts.eladkarako.com/";

}(window,document));
</script>

</pre>

<a href="https://icompile.eladkarako.com/_uploads/2014/09/2014-09-26_012046.gif"><img src="https://icompile.eladkarako.com/_uploads/2014/09/2014-09-26_012046.gif" alt="2014-09-26_012046" width="300" height="31" class="alignnone size-medium wp-image-1797" /></a>

 
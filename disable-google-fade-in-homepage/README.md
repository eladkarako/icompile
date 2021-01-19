Here is a nifty useful little greasemonkey script,
<pre>
// ==UserScript==
// @name          Disable Google Fade-in Homepage
// @namespace     https://icompile.eladkarako.com/
// @homepage	  https://icompile.eladkarako.com/
// @description   Disable Google's Home-Page Taking So Long To Be Fully Shown.
// @include       http://www.google.*/
// @include       http://www.google.*/webhp*
// @version       d28.m07.y2010
// ==/UserScript==
window.addEventListener("load", function () {
    var a = document.createElement("style");
    a.type = "text/css";
    a.innerHTML = "#fctr,#ghead,#pmocntr,#sbl,#tba,#tbe,.fade,.gbh { opacity: 1 !important; filter:alpha(opacity=100) !important; }";
    document.getElementsByTagName("head")[0].appendChild(a);
}, false);

//.user.js
</pre>

slightly modifying the script taken from <a href="http://googlesystem.blogspot.com">http://googlesystem.blogspot.com</a> to enable it faster loading.

how to use it properly:
you can copy&paste it into a file named <strong>Disable Google Fade-in Homepage.user.js</strong> and then drag&drop it over chrome/firefox browser.
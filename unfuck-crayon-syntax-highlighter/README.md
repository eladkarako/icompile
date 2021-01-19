Crayon-Syntax-Highlighter is a horrible (horrible!) piece of code.

The following code will convert it into a lovely,
JavaScript-free and easy-to-copy container.

<!--more-->
<pre>
NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map     = Array.prototype.map;

document.querySelectorAll('div[id^="crayon-"][class*="crayon"]').forEach(function(element){
  var container = document.createElement("pre");
  container.innerText = element.querySelectorAll('div.crayon-line').map(function(line){ return line.innerText; }).join("\
");
  
  element.parentElement.replaceChild(container, element);
});
</pre>

<img src="https://icompile.eladkarako.com/_uploads/2017/06/icompile.eladkarako.com_unfuck_crayonsyntaxhighlighter_before.png" alt="" width="900" height="297"/>

<img src="https://icompile.eladkarako.com/_uploads/2017/06/icompile.eladkarako.com_unfuck_crayonsyntaxhighlighter_after.png" alt="" width="900" height="372"/>

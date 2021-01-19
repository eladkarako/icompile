<!--more-->

You might want to use an automatic replacer (JavaScript),
see here in a more updated article: <a href="https://icompile.eladkarako.com/javascript-character-encoderreplacer-for-unicode-and-common-characters-to-html-entity/" target="_blank"><em>JavaScript Character Encoder/Replacer For Unicode And Common-Characters To HTML-Entity</em></a>

<pre>
{ "\\t":  "&amp;#9;"
, "\
":  "&amp;#10;"
, "\\v":  "&amp;#11;"
, " ":   "&amp;#32;"
, "&amp;":   "&amp;amp;"
, "'":   "&amp;apos;"
, "*":   "&amp;ast;"
, "\\\\":  "&amp;bsol;"
, "•":   "&amp;bull;"
, "ˆ":   "&amp;circ;"
, ":":   "&amp;colon;"
, ",":   "&amp;comma;"
, "@":   "&amp;commat;"
, "©":   "&amp;copy;"
, "₪":   "&amp;curren;"
, "°":   "&amp;deg;"
, "$":   "&amp;dollar;"
, "=":   "&amp;equals;"
, "`":   "&amp;grave;"
, "&gt;":   "&amp;gt;"
, "^":   "&amp;Hat;"
, "{":   "&amp;lbrace;"
, "[":   "&amp;lbrack;"
, "_":   "&amp;lowbar;"
, "(":   "&amp;lpar;"
, "&lt;":   "&amp;lt;"
, "-":   "&amp;minus;"
, "#":   "&amp;num;"
, "%":   "&amp;percnt;"
, ".":   "&amp;period;"
, "+":   "&amp;plus;"
, "?":   "&amp;quest;"
, "\\"":  "&amp;quot;"
, "}":   "&amp;rcub;"
, "®":   "&amp;reg;"
, ")":   "&amp;rpar;"
, "]":   "&amp;rsqb;"
, ";":   "&amp;semi;"
, "~":   "&amp;sim;"
, "\\/":  "&amp;sol;"
, "™":   "&amp;trade;"
, "|":   "&amp;vert;"
}
</pre>

note that <code>&amp;curren;</code> is a generic markup, and will change in display depending on the operation-system's configuration (usually on M$ Window you will get your currency symbol when copy&pasting it around Notepad and such, for specific currency (EURO, and such..) look in <a href="http://umoji.eladkarako.com" target="_blank">umoji.eladkarako.com</a>


<hr />

now..
I can modify the bookmarklet <a title="Everything to HTML-Entity Bookmarklet" href="https://icompile.eladkarako.com/everything-to-html-entity-bookmarklet/" target="_blank">at the article I've wrote some time ago</a>, 
and make sure my "favorite few" are more verbose-format:
<a download="encoding_format.js" title="https://icompile.eladkarako.com/_uploads/2016/04/encoding_format.js" href="https://icompile.eladkarako.com/_uploads/2016/04/encoding_format.js"">https://icompile.eladkarako.com/_uploads/2016/04/encoding_format.js</a> [1.17KB]

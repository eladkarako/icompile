<pre>
sources = JSON.stringify(sources, null, 2)
              .replace(/,[\r\n] /g, "\r\n ,")
              
JSON.stringify(sources, null, 2)
    .replace(/,[\r\n] /g, "\n ,")
    .replace(/ *(,( +))/g,"$2,")


JSON.stringify(text, null, 2)
    .replace(/,[\r\n] /g, "\r\n ,")
    .replace(/ *(,( +))/g,"$2,")
</pre>

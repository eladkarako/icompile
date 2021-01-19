Given the following JSON:
<pre>
{
  "@context":           "http://schema.org"
, "@type":              "WebSite"
, "url":                "https://icompile.eladkarako.com/"
, "name":               "Elad Karako Computer Science Corner"
, "alternateName":      "iCompile Is A Tech-Personal Blog Written By Elad Karako ☕︎"
, "logo":               "https://icompile.eladkarako.com/img/apple-touch-icon.png"
, "potentialAction": {  "@type": "SearchAction"
                     ,  "target": "https://icompile.eladkarako.com/?s={search_term_string}"
                     ,  "query-input": "required name=search_term_string"
                     }
}
</pre>

<ol>
<li>First, store the raw string somewhere, for example, get it from a textarea (its <code>value</code>),
say you've put it into a variable named <code>CONTENT</code>.</li>
<li>Next, remove all line-feed/break characters for safe/compatibility with the JSON parsing method we'll use next.
Simply use: <code>CONTENT = CONTENT.replace(/[\\
]+/g," ");</code> (replacing things with SPACE is safer than removing them...)
You'll end up with one-line:
<pre>
'{   "@context":           "http://schema.org" , "@type":              "WebSite" , "url":                "https://icompile.eladkarako.com/" , "name":               "Elad Karako Computer Science Corner" , "alternateName":      "iCompile Is A Tech-Personal Blog Written By Elad Karako ☕︎" , "logo":               "https://icompile.eladkarako.com/img/apple-touch-icon.png" , "potentialAction": {  "@type": "SearchAction"                      ,  "target": "https://icompile.eladkarako.com/?s={search_term_string}"                      ,  "query-input": "required name=search_term_string"                      } }'
</pre>
</li>
<li>
Use 
<pre>CONTENT = JSON.parse('{   "@context":           "http://schema.org" , "@type":              "WebSite" , "url":                "https://icompile.eladkarako.com/" , "name":               "Elad Karako Computer Science Corner" , "alternateName":      "iCompile Is A Tech-Personal Blog Written By Elad Karako ☕︎" , "logo":               "https://icompile.eladkarako.com/img/apple-touch-icon.png" , "potentialAction": {  "@type": "SearchAction"                      ,  "target": "https://icompile.eladkarako.com/?s={search_term_string}"                      ,  "query-input": "required name=search_term_string"                      } }');</pre>
which will convert it to a javascript-object.
</li>
<li>
And finally use something like <code>CONTENT = JSON.stringify(CONTENT, null, 0);</code>, to get the string.
You'll end up with something like:
<pre>
'{"@context":"http://schema.org","@type":"WebSite","url":"https://icompile.eladkarako.com/","name":"Elad Karako Computer Science Corner","alternateName":"iCompile Is A Tech-Personal Blog Written By Elad Karako ☕︎","logo":"https://icompile.eladkarako.com/img/apple-touch-icon.png","potentialAction":{"@type":"SearchAction","target":"https://icompile.eladkarako.com/?s={search_term_string}","query-input":"required name=search_term_string"}}'
</pre>
</li>
<li>DONE!
..Enjoy!!!
</li>
</ol>', 'JavaScript Ninja - Minify JSON
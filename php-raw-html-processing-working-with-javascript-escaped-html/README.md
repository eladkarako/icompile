I'm using some big-a$$ HTML from the source-code of a local-webpage,
I've dumped it to <a href="https://eladkarako.com/old/__work/demo/encodeuricomponent_decodeuricomponent.html" title="https://eladkarako.com/old/__work/demo/encodeuricomponent_decodeuricomponent.html" target="_blank">https://eladkarako.com/old/__work/demo/encodeuricomponent_decodeuricomponent.html</a>,
and now I can store it without any problem, wrapped with \\" chars (not \\' !!!).

storing the string as its original form, with UTF-8 support:
<pre>
  $content = "...HTML...";
  $content = html_entity_decode(
               preg_replace("/%u([0-9a-f]{3,4})/i", "&#x\\\\1;", urldecode($content)
             ), null, "UTF-8");
var_dump($content);

</pre>
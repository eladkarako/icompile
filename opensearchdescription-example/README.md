<img src="https://icompile.eladkarako.com/_uploads/2017/04/icompile.eladkarako.com_opensearchdescription.png" alt="" width="725" height="501"/>

<sub>Using Wikipedia As A <em>Generic Example</em>.</sub>

on the main page specify the OpenSearchDescription resource like so:
<pre>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>link</span><span style='color:#274796; '> </span><span style='color:#074726; '>rel</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"search"</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"application/opensearchdescription+xml"</span><span style='color:#274796; '> </span><span style='color:#074726; '>href</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"/w/opensearch_desc.php"</span><span style='color:#274796; '> </span><span style='color:#074726; '>title</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Wikipedia (en)"</span><span style='color:#a65700; '>/></span>
</pre>

<hr/>

Next you'll need to serve the actual content:
<pre>
<span style='color:#004a43; '>&lt;?</span><span style='color:#800000; font-weight:bold; '>xml</span><span style='color:#004a43; '> </span><span style='color:#074726; '>version</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#7d0045; '>1.0</span><span style='color:#800000; '>"</span><span style='color:#004a43; '>?></span>
<span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>OpenSearchDescription</span> <span style='color:#666616; '>xmlns</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#666616; '>http</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>//</span><span style='color:#5555dd; '>a9.com</span><span style='color:#40015a; '>/-/spec/opensearch/1.1/</span><span style='color:#800000; '>"</span> <span style='color:#666616; '>xmlns</span><span style='color:#800080; '>:</span><span style='color:#074726; '>moz</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#666616; '>http</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>//</span><span style='color:#5555dd; '>www.mozilla.org</span><span style='color:#40015a; '>/2006/browser/search/</span><span style='color:#800000; '>"</span><span style='color:#a65700; '>&gt;</span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>ShortName</span><span style='color:#a65700; '>&gt;</span>Wikipedia (en)<span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>ShortName</span><span style='color:#a65700; '>&gt;</span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>Description</span><span style='color:#a65700; '>&gt;</span>Wikipedia (en)<span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>Description</span><span style='color:#a65700; '>&gt;</span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>Image</span> <span style='color:#274796; '>height</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>16</span><span style='color:#800000; '>"</span> <span style='color:#274796; '>width</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>16</span><span style='color:#800000; '>"</span> <span style='color:#274796; '>type</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>image/x-icon</span><span style='color:#800000; '>"</span><span style='color:#a65700; '>&gt;</span>https://en.wikipedia.org/static/favicon/wikipedia.ico<span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>Image</span><span style='color:#a65700; '>&gt;</span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>Url</span> <span style='color:#274796; '>type</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>text/html</span><span style='color:#800000; '>"</span> <span style='color:#274796; '>method</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>get</span><span style='color:#800000; '>"</span> <span style='color:#274796; '>template</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://en.wikipedia.org/w/index.php?title=Special:Search</span><span style='color:#074726; '>&amp;</span><span style='color:#074726; '>amp</span><span style='color:#074726; '>;</span><span style='color:#0000e6; '>search={searchTerms}</span><span style='color:#800000; '>"</span> <span style='color:#a65700; '>/></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>Url</span> <span style='color:#274796; '>type</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>application/x-suggestions+json</span><span style='color:#800000; '>"</span> <span style='color:#274796; '>method</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>get</span><span style='color:#800000; '>"</span> <span style='color:#274796; '>template</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://en.wikipedia.org/w/api.php?action=opensearch</span><span style='color:#074726; '>&amp;</span><span style='color:#074726; '>amp</span><span style='color:#074726; '>;</span><span style='color:#0000e6; '>search={searchTerms}</span><span style='color:#074726; '>&amp;</span><span style='color:#074726; '>amp</span><span style='color:#074726; '>;</span><span style='color:#0000e6; '>namespace=0</span><span style='color:#800000; '>"</span> <span style='color:#a65700; '>/></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>Url</span> <span style='color:#274796; '>type</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>application/x-suggestions+xml</span><span style='color:#800000; '>"</span> <span style='color:#274796; '>method</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>get</span><span style='color:#800000; '>"</span> <span style='color:#274796; '>template</span><span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://en.wikipedia.org/w/api.php?action=opensearch</span><span style='color:#074726; '>&amp;</span><span style='color:#074726; '>amp</span><span style='color:#074726; '>;</span><span style='color:#0000e6; '>format=xml</span><span style='color:#074726; '>&amp;</span><span style='color:#074726; '>amp</span><span style='color:#074726; '>;</span><span style='color:#0000e6; '>search={searchTerms}</span><span style='color:#074726; '>&amp;</span><span style='color:#074726; '>amp</span><span style='color:#074726; '>;</span><span style='color:#0000e6; '>namespace=0</span><span style='color:#800000; '>"</span> <span style='color:#a65700; '>/></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#666616; '>moz</span><span style='color:#800080; '>:</span><span style='color:#5f5035; '>SearchForm</span><span style='color:#a65700; '>&gt;</span>https://en.wikipedia.org/wiki/Special:Search<span style='color:#a65700; '>&lt;/</span><span style='color:#666616; '>moz</span><span style='color:#800080; '>:</span><span style='color:#5f5035; '>SearchForm</span><span style='color:#a65700; '>&gt;</span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>OpenSearchDescription</span><span style='color:#a65700; '>&gt;</span>
</pre>

<hr/>

You can serve the textual-content in any way you'll like to,
writing it dynamically using PHP or serving it from a static-file (better).

But you <strong>should</strong> serve it using the proper mimetype of <code>&#x0061;&#x0070;&#x0070;&#x006C;&#x0069;&#x0063;&#x0061;&#x0074;&#x0069;&#x006F;&#x006E;&#x002F;&#x006F;&#x0070;&#x0065;&#x006E;&#x0073;&#x0065;&#x0061;&#x0072;&#x0063;&#x0068;&#x0064;&#x0065;&#x0073;&#x0063;&#x0072;&#x0069;&#x0070;&#x0074;&#x0069;&#x006F;&#x006E;&#x002B;&#x0078;&#x006D;&#x006C;</code>
(although it is, in-fact technically a XML content, and would be probably fine to be served as <code>text/xml</code> too).

<hr/>

*People* often use PHP (Wikipedia does..) since it provides a simpler way to control the header for the content-type of the OpenSearchDescription,
which is not really an official-IANA mimetype for a file<sup><a href="https://www.iana.org/assignments/link-relations/link-relations.xml" target="_blank">[1]</a> <a href="http://www.opensearch.org/Specifications/OpenSearch/1.1" target="_blank">[2]</a></sup>, which means there is not a registered extension which is linked to the OpenSearchDescription mimetype,

So.. by using a simple PHP script:
<pre>
<span style='color:#5f5035;'>&lt;?php</span><span style='color:#000000;'></span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>'Content-Type: application/opensearchdescription+xml;charset=UTF-8'</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span><span style='color:#000000;'></span>
&#xa0;&#xa0;(.....echo the XML textual-content....)
<span style='color:#5f5035;'>?&gt;</span>
</pre>

You'll kind-of solve it. Badly.

<hr/>
If you're running APACHE you far-better place your the XML textual-content in a Unicode/UTF-8 encoded file,
somewhere in your server, for example- at your website-root or at the same level as the <code>index.html</code> file.
Name it <code>something.opensearchdescription</code>, the file name does not actually matter.

In your <code>.htaccess</code> file (which should be placed on the same level, and not deeper in the folder-hirarcty, so it will be effective)-
- add the following lines:
<pre>
<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>FilesMatch</span> <span style='color:#0000e6; '>"\\.(?i:opensearchdescription)$"</span><span style='color:#a65700; '>&gt;</span>
  <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>ifModule</span> <span style='color:#0000e6; '>mod_headers.c</span><span style='color:#a65700; '>&gt;</span>
    <span style='color:#800000; font-weight:bold; '>Header</span> <span style='color:#074726; '>set</span> Content<span style='color:#808030; '>-</span>Type <span style='color:#0000e6; '>"application/opensearchdescription+xml;charset=UTF-8"</span>
  &lt;/IfModule<span style='color:#a65700; '>&gt;</span>
&lt;/FilesMatch<span style='color:#a65700; '>&gt;</span>
</pre>
  

You can use <code>cURL --user-agent <span style='color:#0000e6; '>"</span><span style='color:#40015a; '>Mozila/Chrome</span><span style='color:#0000e6; '>"</span> --url <span style='color:#0000e6; '>"http:</span><span style='color:#40015a; '>/</span><span style='color:#40015a; '>/path-to-your-something.opensearchdescription/something.opensearchdescription</span><span style='color:#0000e6; '>"</span> --verbose</code> to verify the header does come-back as part of the response-headers.

<hr/>

Files with that extension will be served with this <code>Content-Type</code> header.

Done, Enjoy  :]

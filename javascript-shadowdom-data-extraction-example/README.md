Here is an example on how to extract domain-sibling (sub-domains) from VirusTotal new website, 
which has a lot of shadow-dom $h!t!!!

(You first need to navigate the the proper segments).

<pre>
NodeList.prototype.map = Array.prototype.map;
document
.querySelector('vt-graph-app').shadowRoot
.querySelector('vt-drawer').shadowRoot
.querySelector('vt-drawer-node-list').shadowRoot
.querySelectorAll('.node-info')
.map(function(e){return e.innerText;})
.sort()
.join("\r\n")
;
</pre>

<a href="https://gist.github.com/eladkarako/58f86692efb95b88006675ba7b7adb8b#file-extract-domain-sibling-sub-domains-from-virustotal-new-website-a-lot-of-shadow-dom-h-t-js">https://gist.github.com/eladkarako/58f86692efb95b88006675ba7b7adb8b#file-extract-domain-sibling-sub-domains-from-virustotal-new-website-a-lot-of-shadow-dom-h-t-js</a>

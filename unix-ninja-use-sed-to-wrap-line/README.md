<code>echo &#39;hello&#39; | sed -e &#39;s@^&#92;(.*&#92;)$@&#92;&#34;&#92;1&#92;&#34;@g&#39;</code>

output: <code>"hello"</code>

notice the <code>@</code> separator replacing the <code>\\</code> or <code>/</code> separator you most probably use, sed actually does not specify the mandatory separator use, so along you keep the rules, every "outside of the A-B-C" character would work just fine..
also, it which helps to make the the entire thing more nice and organised :)

naturally file processing would be a little different,
by downloading the <a href="http://www.gnu.org/software/parallel/" target="_blank">GNU parallel</a> or using the <a title="https://github.com/eladkarako/parallel-for-cygwin" href="https://github.com/eladkarako/parallel-for-cygwin" target="_blank">pre-"built" parallel perl script I've already made</a> <sub>(for people that the word "compile" makes them a little unease)</sub>

<code>cat &#60;your_file_name&#62; | parallel --pipe sed -e &#39;s@^&#92;(.*&#92;)$@&#92;&#34;&#92;1&#92;&#34;@g&#39; &#62; output.txt</code>

you can specify <code>-k</code> if you want the output to be same order.. (will make things slower..)
<code>cat &#60;your_file_name&#62; | parallel --pipe -k  sed -e &#39;s@^&#92;(.*&#92;)$@&#92;&#34;&#92;1&#92;&#34;@g&#39; &#62; output.txt</code>

let's leave that <code>-k</code> switch outside for now,
and <strong>speed up stuff a little</strong> by pre-specifying that you <strong>won't use anything COOLER THAN Unicode ;)</strong>

<code>LC_ALL=C cat &#60;your_file_name&#62; | LC_ALL=C parallel --pipe sed -e &#39;s@^&#92;(.*&#92;)$@&#92;&#34;&#92;1&#92;&#34;@g&#39; &#62; output.txt</code>




<h4>nice little trick isn't?</h4>

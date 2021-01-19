Hello Readers! some time ago I've made a nice little <a href="https://github.com/eladkarako/youtube_downloader.git" target="_blank">Git repository named YouTube Downloader</a> having most of raw resources I've gathered around which may be useful if you are intereseted in in-depth-understanding of the the <a href="https://developers.google.com/youtube/js_api_reference" target="_blank">YouTube JavaScript Player API Reference</a>

(which is a nice mental leap towards making an hybrid (Android) APP or using the more challenging <a href="https://developers.google.com/youtube/android/player/" target="_blank">YouTube Android Player API</a> or just making a bookmarklet or even yet another youtube downloader website/extension [please don't!] ;) )

anyway..
..here is what you are really in for:

<pre>
sources = (function(sources, tmp){
  return sources.split(',').map(function(source){
    tmp = {};
    source.split('&').forEach(function(part){
      part = part.split('=');
      tmp[ part[0] ] = decodeURIComponent( part[1] );
    });
    return tmp;
  });
}(
  ytplayer.config.args.url_encoded_fmt_stream_map
, []
));
</pre>

and now for a pro tip, a <strong>zero-effort JSON beautifier</strong> <em>formatting trick</em>:

<pre>
console.log(JSON.stringify(
sources
, null, 2));
</pre>

<hr />

hey! it's probably even works with most of embedded youtube plugin, since it uses almost no dependencies by the very raw YouTube-Player "API/SDK" (which YouTube itself uses...)

..give it a try on <a href="https://www.youtube-nocookie.com/embed/huDv2Az3URQ?rel=0&amp;showinfo=0&amp;showads=0" target="_blank">this lovely video</a>:

<iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/huDv2Az3URQ?rel=0&amp;showinfo=0&amp;showads=0" frameborder="0" allowfullscreen></iframe>

:)


<hr />
<em><strong>edit: </strong></em>Tip: <a href="http://stackoverflow.com/a/11065631" target="_blank">ǡre yoǘ ȃ coʍʍʌ-ϝiɍst Nåƶɨ</a>? (*cough* *cough* me?)
this will ease your O.C.D.:
<pre>
sources = JSON.stringify(sources, null, 2).replace(/,\
 /g, "\
 ,")
</pre>
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_javascript_comma_first_2016-01-31_011351.jpg" alt="icompile.eladkarako.com_javascript_comma_first_2016-01-31_011351" width="547" height="345" class="alignnone size-full wp-image-4526" />

or <strong>BETTER YET</strong>:
<pre>
sources = JSON.stringify(sources, null, 2).replace(/,\
 /g, "\
 ,").replace(/ *(,(\\ +))/g,"$2,")
</pre>
<sub><em>who does not love a little bit of JavaScript RegEx backtrace replacing :)</em></sub>

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_javascript_comma_first_better_format_2016-01-31_011351.jpg" alt="icompile.eladkarako.com_javascript_comma_first_better_format_2016-01-31_011351" width="623" height="343" class="alignnone size-full wp-image-4527" />

Oh yeah! comma-first bliss ;)
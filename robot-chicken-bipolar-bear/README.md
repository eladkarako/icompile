<blockquote>
<img src="https://icompile.eladkarako.com/_uploads/2014/11/thumbnail_4004255806221133014.jpg" alt="bipolar-bear" rem-width="423" rem-height="323" class="aligncenter size-full wp-image-2030" />


<strong>Scientists</strong>:
<ul>
<li>The escaped animal is a polar bear with the ability to survive in the Arctic and Antarctic.</li>
<li>It exhibits massive mood swings like that of a manic-depressive,</li>
<li>and has equal sexual desires for both males and females.</li>
</ul>

<strong>Army Guy</strong>:
<ul>
<li>Dear god, are you suggesting what I think you're suggesting?</li>
</ul>

<strong>Scientists</strong>:
<ul>
<li>That's right.. - </li>
<li>A bi-polar, bipolar, - bi polar bear.</li>
</ul>

<strong>Army Guy</strong>:
<ul>
<li>That is very stupid..</li>
</ul>

<iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/xnw4f2T9lZw?rel=0&amp;showinfo=0&amp;showads=0" frameborder="0" allowfullscreen></iframe>
</blockquote>

<a href="https://github.com/eladkarako/icompile/releases/download/latest/bipolar_bear_rc_ep127-708_009_AS_HD_ascom_logo_720p.mp4">https://github.com/eladkarako/icompile/releases/download/latest/bipolar_bear_rc_ep127-708_009_AS_HD_ascom_logo_720p.mp4</a>

<hr/>

Robot Chicken (by adultswim.com) is a sketch-like comedy TV-show made with action-figures using stop-motion and a funny voice-over, usually filled with pun-games, which are the type of comedy that make me laugh the most :))

Original website: <a href="http://www.adultswim.com/videos/robot-chicken/bipolar-bear">http://www.adultswim.com/videos/robot-chicken/bipolar-bear</a>

and running the following code, will add a <code style="display:inline;">download button</code>,
<small>it just uses the video-url from the page's internal-source code, and isn't decrypting or breaking stuff or anything.. its publicly accessible (just don't use it in any evil doing sort..)</small>

<pre>
(function(window,document, info){
  "use strict";

    window.setTimeout(function(){     //execute a non-blocker

      info.link.href = info.vid_href;
      info.link.download = info.vid_downloadfilename;
      info.link.title = info.link.title
                          .replace("##TITLE_FULL##", info.vid_title_full)
                          .replace("##VID_TYPE##", info.vid_type)
                          .replace("##VID_DURATION##", (~~info.vid_duration))
                        ;

      info.placement.insertBefore(info.link, info.placement.firstElementChild);

    }, 200);

  }(window,document, {"_":""
    ,'placement':             document.querySelector("#video-player-object-wrapper")
    ,'placement_first':       document.querySelector("#video-player-object-wrapper").firstElementChild
    ,'link':                  (function(){
                                 var a       = document.createElement('a');
                                 a.target    = "_self";
                                 a.rel       = "nofollow";
                                 a.className = "download_button";
                                 a.title     = "Click To Download \\"##TITLE_FULL##\\" (##VID_TYPE##: ##VID_DURATION## Seconds)";
                                 a.appendChild(document.createTextNode("Download"));
                                 return a;
                              }())
    ,'style':                  (function(){
                                 var s  = document.createElement('style');
                                 s.type = "text/css";
                                 s.appendChild(document.createTextNode(
                                 '.download_button{background-color:rgba(255,183,57,.8);border:3px solid rgba(255,183,57,.3);border-radius:10px;box-shadow:2px 2px 2px rgba(255,255,255,.3);cursor:pointer;display:block;height:30px;height:100% !important;margin:0px 0px 10px 0px;max-width:100px;outline:1px rgba(255,255,255,.3);text-align:center;transition:all .3s ease-in-out;-webkit-font-smoothing:subpixel-antialiased;}'
                               + '.download_button:hover{background-color:rgba(255,237,142,.8);border:3px solid rgba(255,237,142,.3);}'
                                 ));
                                 document.getElementsByTagName("body")[0].appendChild(s); //already add this to the document (parsed into stylesheet)
                                 return s; //unneeded..
                              }())
    ,'vid_href':              bootstrappedData.slugged_video.segments[0].assets[0].url
    ,'vid_downloadfilename':  encodeURI((bootstrappedData.slugged_video.collection_title + " - " + bootstrappedData.slugged_video.title + " - " + bootstrappedData.slugged_video.description).replace("\
","").replace("\
","").replace(".","")) + ".flv"
    ,'vid_title_full':        (bootstrappedData.slugged_video.collection_title + " - " + bootstrappedData.slugged_video.title + " - " + bootstrappedData.slugged_video.description).replace("\
","").replace("\
","").replace(".","")
    ,'vid_duration':          bootstrappedData.slugged_video.segments[0].assets[0].duration
    ,'vid_type':              bootstrappedData.slugged_video.segments[0].assets[0].mime_type
 })
);
</pre>

q: what is so interesting about this code ?
a: well..
<ul>
<li>while the main logic is in the "big" anonymous method,</li>
<li>most of the minor work preparing the elements, or data, is done before the main-method executes,</li>
<li>kept to the minimal, the memory used is quickly disposed once its logically unneeded.</li>
<li>code uses a unique technique I've made and refined over the time, of not using <code style="display:inline;">var</code> statements overall in the main method <small>(pre-preparing..)</small>.</li>
<li>another concept is avoiding moving a long-list of arguments to the method, and using a data-structure such as json-like object to pass a static-data, variables, etc.. where they order is not important,</li>
<li>this way maintenance is easy <strong>adding, or removing ""arguments""- does not required "Function Signature (a.k.a Header) Change - Function looks the same.</strong> <br />
:)</li>

<img src="https://icompile.eladkarako.com/_uploads/2014/11/2014-11-01_183051.jpg" alt="2014-11-01_183051" rem-width="423" rem-height="140" class="aligncenter size-full wp-image-2044" />

<br />

<img src="https://icompile.eladkarako.com/img/credit.png" />
<br />
</ul>
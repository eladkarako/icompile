An Easy Web-Design, Uncomplicated Table'Like Flowing Data-Organizer.

<pre>
/* size */
.ttable, .ttable:before, .ttable:after, .ttable.clear, .ttable.clear:before, .ttable.clear:after{
  content:       "";
  clear:         both;
  padding:       0px;
  margin:        0px;
  width:         100%;
}
.ttable div{ 
  float:         left;
  display:       inline;
  margin-right:  5px;
  margin-bottom: 5px;
}

.ttable div:last-child { margin-right: 0; }

/* style */
.ttable div{
  border:            1px solid black;
  padding-left:      10px;
  padding-right:     10px;
  background-color:  rgba(237,237,214,.4);
}
</pre>

<pre>
<div class="ttable">
  <b class="clear"></b>
  <div>This is column 1</div>
  <div>This is column 2</div>
  <div>This is column 3</div>
  <div>This is column 4</div>
  <div>This is column 5</div>
  <div>This is column 6</div>
  <b class="clear"></b>
</div>
</pre>

<hr/>

several width cases:
<a href="https://icompile.eladkarako.com/_uploads/2014/09/2014-09-27_134303.gif"><img src="https://icompile.eladkarako.com/_uploads/2014/09/2014-09-27_134303.gif" alt="2014-09-27_134303" width="216" height="223" class="alignnone size-full wp-image-1896" /></a>

<a href="https://icompile.eladkarako.com/_uploads/2014/09/2014-09-27_134136.gif"><img src="https://icompile.eladkarako.com/_uploads/2014/09/2014-09-27_134136.gif" alt="2014-09-27_134136" width="300" height="57" class="alignnone size-medium wp-image-1897" /></a>

<a href="https://icompile.eladkarako.com/_uploads/2014/09/2014-09-27_134114.gif"><img src="https://icompile.eladkarako.com/_uploads/2014/09/2014-09-27_134114.gif" alt="2014-09-27_134114" width="300" height="47" class="alignnone size-medium wp-image-1898" /></a>

<hr/>

jsfiddle playground:
<iframe src="http://jsfiddle.net/km3szuh3/embedded/result/"></iframe>

<br/>
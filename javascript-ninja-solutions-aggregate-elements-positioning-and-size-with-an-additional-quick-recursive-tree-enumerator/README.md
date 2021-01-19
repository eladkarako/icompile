Quickly get current, and entire tree line ('till BODY) size and position metrics,
this include
<ul>
<li>
page offsets relative to global window.
</li>
<li>
document-element offset relative to container.
</li>
<li>
scroll metrics.
</li>
<li>
native width, height.
</li>
<li>
wrapping borders width. 
</li>
<li>
element vs. page scroll data.
</li>
<li>
new bounding wrap borders size and position
</li>
</ul>

- get entire root to BODY calculated with above data,
easily referenced to the (live) DOM-element at any time.

<a href="https://icompile.eladkarako.com/_uploads/2014/09/2014-09-27_152842.jpg"><img src="https://icompile.eladkarako.com/_uploads/2014/09/2014-09-27_152842.jpg" alt="2014-09-27_152842" width="1352" height="601" style="max-width: 620px; max-height: 275px;" class="alignnone size-full wp-image-1901" /></a>

<a href="https://icompile.eladkarako.com/_uploads/2014/09/2014-09-27_153930.jpg"><img src="https://icompile.eladkarako.com/_uploads/2014/09/2014-09-27_153930.jpg" alt="2014-09-27_153930" width="456" height="562" class="alignnone size-full wp-image-1904" /></a>

<pre>
var 
  getAboveElement = function(element, arr){
    arr = arr || [];

    arr.push(element);
    
    if(element.offsetParent === null)
      return arr;
    
    arr = getAboveElement(element.offsetParent, arr);
    
    return arr;
  },
  getPositionData = function(element){
    var 
      style = document.defaultView.getComputedStyle(element),
      bcrct = element.getBoundingClientRect();
    return {
      '0_': {
        'element': element
      },
      '1_native': {
        width: style.width,
        height: style.height
      },
      '2_borders_width':{
          top: style.borderTopWidth,
          bottom: style.borderBottomWidth,
          left: style.borderLeftWidth,
          right: style.borderRightWidth
      },
      '3_scroll': {
        top: element.scrollTop,
        left: element.scrollLeft,
        width: element.scrollWidth,
        height: element.scrollHeight
      },
      '4_bounding_client_rectangle':{
        top: bcrct.top,
        left: bcrct.left,
        width: bcrct.width,
        height: bcrct.height,
        bottom: bcrct.bottom,
        right: bcrct.right
      },
      '5_document_element_client': {
       top: document.documentElement.clientTop,
       left: document.documentElement.clientLeft,
       width: document.documentElement.clientWidth,
       height: document.documentElement.clientHeight
      },
      '6_window_page':{
        x: window.pageXOffset,
        y: window.pageYOffset
      }
    };
  },
  getPositionTree = function(element){
    var element_tree = getAboveElement(element);
    return Array.prototype.map.call(element_tree, function(element){
      return getPositionData(element);
    });
  }
  ;
</pre>
<pre>

//300x150

function true_random(fn_callback){

document.body.innerHTML="<style>canvas{background:green none;width:100%;height:100%}</style><canvas></canvas>";
var ctx = document.body.querySelector('canvas').getContext('2d');

//clear
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

[
  'http://images.opentopia.com/cams/16150/big.jpg'
, 'http://images.opentopia.com/cams/16143/big.jpg'
, 'http://images.opentopia.com/cams/16553/big.jpg'
, 'http://images.opentopia.com/cams/16432/big.jpg'
, 'http://images.opentopia.com/cams/16465/big.jpg'
].forEach(function(url,index,array){
img = new Image();
img.onload = function(){
  ctx.globalAlpha = .3;
  ctx.drawImage(this, 0,0, ctx.canvas.width, ctx.canvas.height);
  console.log(arguments,this,index,array);

  if(index === (array.length - 1)){    //all done

    window.true_random_result = 

      //option #1 is numbers, using the RGBA values of each pixel the 'A' is usually 211.
      Array.prototype.join.call(ctx.getImageData(0,0,ctx.canvas.width,ctx.canvas.height).data,'');

      //option #2 is 0-9,a-f hexadecimal numbers, using the BASE64 of the PNG image enumeration of the image.
      ctx.canvas.toDataImage("image/png").toLowerCase().replace('data:image/png;base64,','').replace(/[\\=,g-z,\\/,\\+]+/ig,'');

      //option #3 is 0-9 numbers, using the BASE64 of the PNG image enumeration of the image.
      ctx.canvas.toDataImage("image/png").toLowerCase().replace('data:image/png;base64,','').replace(/[\\=,a-z,\\/,\\+]+/ig,'');

 
    fn_callback.call(window,           //calling the callback
      window.true_random_result;
    );
    
  }
};
img.type="image/jpeg";
//img.src=url;
img.crossOrigin="Anonymous";
img.src="http://fetch.eladkarako.com?content_type=image/jpg&url=" + url; //it sends "allow all domains" header, otherwise the canvas is "tainted" and we can not export any information from it.
});
</pre>
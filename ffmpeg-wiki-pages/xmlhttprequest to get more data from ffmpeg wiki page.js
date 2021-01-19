"use strict";
var data = {};   //1. init. data from DOM (https://trac.ffmpeg.org/wiki/RecentChanges/).
                 //2. updated - with verbosed-title (from each page, via XMLHTTPRequest).

NodeList.prototype.map = Array.prototype.map;

function get(url, onsuccess, onerror){
  var xhr = new XMLHttpRequest();
  xhr.onerror   = function(ev){xhr.onerror=undefined; xhr.ontimeout=undefined; xhr.onreadystatechange=undefined; onerror(ev,xhr,url);}; //error (official HTTP error - mostly timeout).
  xhr.ontimeout = function(ev){xhr.onerror=undefined; xhr.ontimeout=undefined; xhr.onreadystatechange=undefined; onerror(ev,xhr,url);}; //error (official HTTP error - mostly timeout).
  xhr.onreadystatechange = function(ev){
    if(XMLHttpRequest.DONE !== xhr.readyState){               return;}  //wait for the next-time onreadystatechange will be triggered.
    xhr.onerror            = undefined;
    xhr.ontimeout          = undefined;
    xhr.onreadystatechange = undefined;
    if(xhr.status <  200){               onerror(ev,xhr,url); return;}  //error (response is not functional).
    if(xhr.status >= 400){               onerror(ev,xhr,url); return;}  //error (official HTTP error - mostly 404 not found).
    if(null === xhr.response){           onerror(ev,xhr,url); return;}  //error (can not create DOM).
    onsuccess(ev,xhr,url);                                              //success.
  };
  xhr.responseType    = "document";
  xhr.timeout         = 20 * 1000;        //timeout at 20 seconds.
  xhr.withCredentials = false;    //no need to send-cookies.
  xhr.overrideMimeType("text/html;charset=UTF-8");
  xhr.open("GET", url, true);
  xhr.send();
}


//fill out availble data
document.querySelectorAll('div[id="wikipage"] h3+ul > li > a')
        .forEach(function(a){
           data[encodeURIComponent(url)] = {title:{"short": a.innerText.trim(), "long":""}};
        });

//-----------------------------------------

get(data[1].url, function(ev,xhr,url){
  data[encodeURIComponent(url)]["title"]["long"] = xhr.response.querySelector("title") || "";
  console.log(arguments);
});


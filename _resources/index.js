"use strict";

NodeList.prototype.forEach = Array.prototype.forEach;

function message_handler(event){
  var query = 'iframe[src*="gistuser=###GISTUSER###"][src*="gistid=###GISTID###"]';
  
  if("https://icompile.eladkarako.com" !== event.origin) return;
  if("undefined" === typeof event.data)                  return;
  if("undefined" === typeof event.data.gistuser)         return;  //specific item.
  if("undefined" === typeof event.data.gistid)           return;  //specific item.
  if("undefined" === typeof event.data.height)           return;  //specific item.
  
  console.log("[INFO] recived message embed_gist.html with proper height of the content:", event);

  query = query.replace(/###GISTUSER###/,event.data.gistuser).replace(/###GISTID###/,event.data.gistid);
  
  document.querySelectorAll(query)
          .forEach(function(element){
            console.log("[INFO] setting height ", event.data.height, " to element ", element);
            element.style.height = event.data.height;
            console.log("[INFO] done.");
          });
  
}
self.addEventListener("message", message_handler, false);



function get_script(src, crossorigin_value){
  var script = self.document.createElement("script");
  script.setAttribute("defer"       , "defer");             //https://www.w3.org/TR/REC-html40/interact/scripts.html#adef-defer
  script.setAttribute("async"       , "async");             //https://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#attr-script-async
  script.setAttribute("crossorigin" , "anonymous");         //[anonymous (default)|use-credentials (if cross-domain cookies needs another domain access)] https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin
  script.setAttribute("type"        , "text/javascript");   //prefered over "application/javascript" for legacy compatibility.
  script.setAttribute("charset"     , "UTF-8");             //allow reading Unicode-characters (will not break characters to "binary-string").
  script.setAttribute("loading"     , "eager");             //avoid native lazy-loading from delay-loading this script (new)
  script.setAttribute("lazyload"    , "off");               //avoid native lazy-loading from delay-loading this script (old)
  script.setAttribute("src"         , src);                 //
  return script;
}


function load_last(){
  var body = self.document.querySelector("body")
     ,script
     ;

  //--------------------------------------------------------------------Google analytics (newest v4). Note: uses same JavaScript-structure as v3, but uses a different partner-id (website owner property id).
  //task-queue "engine".
  self["dataLayer"] = self["dataLayer"] || [];
  self["gtag"]      = function gtag(){self["dataLayer"].push(arguments);};
  //add "tasks", can be done before loading analytics-javascript.
  self["gtag"]("js", new Date());
  self["gtag"]("config", "G-M28VNCZS3P");
  script = get_script("https://www.googletagmanager.com/gtag/js?id=G-M28VNCZS3P");
  body.appendChild(script);
  //-------------------------------------------------------------------------------------------
  
/*
  //--------------------------------------------------------------------Google analytics (new v3)
  //task-queue "engine".
  self["dataLayer"] = self["dataLayer"] || [];
  self["gtag"]      = function gtag(){self["dataLayer"].push(arguments);};
  //add "tasks", can be done before loading analytics-javascript.
  self["gtag"]("js", new Date());
  self["gtag"]("config", "UA-149765434-1");
  script = get_script("https://www.googletagmanager.com/gtag/js?id=UA-149765434-1");
  body.appendChild(script);
  //-------------------------------------------------------------------------------------------
*/


/*
  //--------------------------------------------------------------------Google analytics (older v2)
  //task-queue "engine".
  self["ga"] = self["ga"] || function(){
                               self["ga"]["q"] = self["ga"]["q"] || [];
                               self["ga"]["q"].push(arguments);
                             };
  self["ga"]["l"] = (new Date()).getTime();
  //add "tasks", can be done before loading analytics-javascript.
  self["ga"]("create", "UA-149765434-1", "auto");
  self["ga"]("require", "displayfeatures");
//self["ga"]("require", "linkid", "linkid.js");
//self["ga"]("set", "&uid", "<?php print($_SESSION['uniqueID']); ?>");  //used in PHP, you create UUID based on member-login (same UUID for each logged-on user, which is better then random-UUID generated by JavaScript-side for each visitor by client-side cookie).
  self["ga"]("send", "pageview");
  script = get_script("https://www.google-analytics.com/analytics.js?id=UA-149765434-1");
  body.appendChild(script);
  //-------------------------------------------------------------------------------------------
*/


/*
  //--------------------------------------------------------------------Google analytics (even older v1)
  //task-queue "engine".
  self["_gaq"] = self["_gaq"] || [];
  self["_gaq"].push(["_setAccount", "UA-149765434-1"]);
  self["_gaq"].push(["_trackPageview"]);
  script = get_script("https://ssl.google-analytics.com/ga.js?id=UA-149765434-1");
  body.appendChild(script);
  //-------------------------------------------------------------------------------------------
*/


  //--------------------------------------------------------------------comment system by utteranc.es .
  script = get_script("https://utteranc.es/client.js");
  script.setAttribute("repo"        , "eladkarako/icompile");
  script.setAttribute("issue-term"  , "pathname");
  script.setAttribute("theme"       , "github-light");
  body.appendChild(script);
  //-----------------------------------------------------------------------------------------------
}


self.onload = load_last;  //load all javascript related files at the end of Window-OnLoad (after dom-ready and images were loaded).


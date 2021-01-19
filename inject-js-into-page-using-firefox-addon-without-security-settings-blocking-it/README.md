you should download the js file as test using XMLHTTP request,
and then getting the document object, creating a javascript object,
then appending a text node as the javascript object,
the text-node's content is the text content you've downloaded using the XMLHTTPRequest,
don't forget to run the JS functions because you can't access that JS again once you've injected it,

so you are creating
<script>
   function starter(){
      abc();
      ...
   }
   function abc(){
   ....
   }
   functions...
   more functions....


<strong>   starter();</strong>
</script>



here is a more useable example:
i am also storing the content in one of the preferences so I can cross get it when the website is down

        try{
            /* Mozilla Service:  Prepare about:config's Preference */       //Can use: prefs.setCharPref("lastJsContent","hello1");  //can use: alert( prefs.getCharPref("lastJsContent") );
            var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
            prefs = prefs.getBranch("extensions.widgetfinder.");


            /* Mozilla Service:  Download the Remote JS TEXT-CONTENT - this is a gentle approach - no JS push */
            var req2 = Components.classes["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance(Components.interfaces.nsIXMLHttpRequest);  
            req2.addEventListener("progress"    , function (){}, false);
            req2.addEventListener("error"       , function (){}, false);
            req2.addEventListener("load"        , function (oEvent){  if(req2.responseText && req2.responseText.length > 10){ prefs.setCharPref("lastJsContent", req2.responseText);  /*alert("textscript successfully fetched from remote location and set to local preferece:\
\
" + req2.responseText);*/ } }, false);
            req2.open("GET", "http:/www.someurl.com/myAddon.js" , true);
            req2.send(null);  
        }catch(e){ alert(e); }
', 'inject js into page using firefox addon
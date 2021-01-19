it is a pretty much what jQuery does, slightly improved (and without using jQuery).
<pre>
function document_ready(callback){
  function completed(){
    document.removeEventListener("DOMContentLoaded", completed, false);
    self.removeEventListener("load", completed, false);
    self.setTimeout(function(){ callback(); },10);  //timeout helps to execute in a semi-async way.
  }
  
  if("loading" !== document.readyState){    //interactive or complete
    completed();
    return;
  }
  else{                                     //loading
    document.addEventListener("DOMContentLoaded", completed, false);  //Use the handy event callback.
    self.addEventListener("load", completed, false);                  //A fallback to window.onload, that will always work.
  }
}
</pre>
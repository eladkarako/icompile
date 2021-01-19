<a href="http://stackoverflow.com/a/34953602/257319" target="_blank">Some one asked on StackOverflow</a> about loading few scripts,
where in two or more, a global-variable (a variable under global-scope)
is being rewritten (overridden),

it is usually addressed by requiring different versions of same framework (jQuery 1.7.2, 1.8.3),
or different frameworks that uses same global variable and overriding each other (jQuery, mootools, native DOM - and 'window.$' variable).

the problem usually resolved in a bad-way, by timing,
or moving &lt;script&gt; tags one another the other, and writing BIG COMMENTS in the HTML such as "DO NOT MOVE! WILL BREAK PAGE".


loading scripts asynchronously is a great thing,
but when they share a common resource, issues comes up..

<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com__what_is_the_matrix_javascript.png" alt="icompile.eladkarako.com__what_is_the_matrix_javascript" rem-width="742" rem-height="326" />

trying to avoid DOM's state of flux, requires some amount of control, literal meaning synchronous (linear "loading && handling")

<h3>entering- <strong>"callback hell".</strong></h3>
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_callback_hell.gif" alt="icompile.eladkarako.com_callback_hell" rem-width="396" rem-height="288" />

there is not-much of an elegance in ANYTHING similar to this structure,
no, not even using promises or rewriting the functions outside, <em>(silly reader..)</em>.

but points will be given for the most shortest and readable "callback hell" blocks.

<blockquote>
code attached,
expand it, modify it as needed,
essentially it will provide a sensible, NOT a page position or time delay related loading,
and cleanup too, which is important.
<hr />
two options of execution provided,
you can use it like this <code>load(URL, {success:success_function, fail:fail_function, anyway:anyway_function});</code>
 - everything is optional (..also, awesome <img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_lego.png" alt="icompile.eladkarako.com_lego" width="40" height="43" />)
 - success will 
</blockquote>

<pre>
(function(window, document, body, empty_function){
  "use strict";

  /* ****** *
   *  lib   *
   * ****** */
  //adds a very useful function to &lt;script&gt; elements - in an unblocking way, remove themself from the DOM (their content and variables will still be kept in pages memory)
  HTMLScriptElement.prototype.self_remove = function self_remove(){ /* HTMLScriptElement &lt; - HTMLElement &lt;- Element &lt;- Node */
    var me = this;
    if(null === me.parentNode) return false;
    setTimeout(function(){ me.parentNode.removeChild(me) }, 10);
    return true
  };

  
  function load(url, callbacks){
    var script, success, fail, anyway;

    callbacks = "object" === typeof callbacks         ? callbacks         : {};              /* normalize */
    success = "function" === typeof callbacks.success ? callbacks.success : empty_function;  /* normalize */
    fail    = "function" === typeof callbacks.fail    ? callbacks.fail    : empty_function;  /* normalize */
    anyway  = "function" === typeof callbacks.anyway  ? callbacks.anyway  : empty_function;  /* normalize */

    script = document.createElement("script"); /* no native attributes (.defer/.src/.type) + don't use .type at all, due to unexpected (non-unified) JavaScript parser optimisations (webkit!) */
    script.setAttribute("defer", "defer"); 
    script.setAttribute("src", url);

    script.onload  = function(){
                       var args = arguments;
                       setTimeout(function(){ anyway.apply(args);  },10);
                       setTimeout(function(){ success.apply(args); },10);
                       script.self_remove();
                     };

    script.onerror = function(){
                       var args = arguments;
                       setTimeout(function(){ anyway.apply(args);  },10);
                       setTimeout(function(){ fail.apply(args);    },10);
                       script.self_remove();
                     };

    setTimeout(function(){   body.appendChild(script)   }, 10);
    
    return true; //returning true (always..) is a trick to help with chaining few 'load' calls together.
  }
  
  /* ****** *
   *  main  *
   * ****** */

  /* **************************************** *
   * Loading multiple jQuery versions         *
   *   - versions are separated.              *
   *   - DOM kept relatively at clean-state   *
   *                                          *
   *   can either use OPTION #1 or OPTION #2  *
   * **************************************** */

  /* OPTION #1 - linear loading - END STATUS: "everyone succeed, or die". */
    load("https://code.jquery.com/jquery-1.7.2.js",{success: function(){
      window.jq172 = jQuery.noConflict(true);
      console.log("successfully loaded jQuery ver", window.jq172.fn.jquery);
      try{ delete window.jQuery || delete window.$ }catch(err){} //cleanup

      load("https://code.jquery.com/jquery-1.8.3.js",{success: function(){
        window.jq183 = jQuery.noConflict(true);
        console.log("successfully loaded jQuery ver", window.jq183.fn.jquery);
        try{ delete window.jQuery || delete window.$ }catch(err){} //cleanup

        load("https://code.jquery.com/jquery-git.js?latest2",{success: function(){
          window.jq_latest = jQuery.noConflict(true);
        console.log("successfully loaded jQuery ver", window.jq_latest.fn.jquery);
        try{ delete window.jQuery || delete window.$ }catch(err){} //cleanup

        /* ****************************** *
         *  welcome to callback hell      *
         *  please place your code here.  *
         *  regards,                      *
         *       Elad Karako ;)           *
         * ****************************** */

        }}); //jQuery-latest success
      }}); //jQuery-1.8.3 success
    }}); //jQuery-1.7.2 success


  /* OPTION #2 - linear loading - END STATUS: "ignore failures, and just continue anyway". */
  /* */
    load("https://code.jquery.com/jquery-1.7.2.js",{anyway: function(){
      if(jQuery){
        window.jq172 = jQuery.noConflict(true);
        console.log("successfully loaded jQuery ver", window.jq172.fn.jquery);
        try{ delete window.jQuery || delete window.$ }catch(err){} //cleanup
      }

      load("https://code.jquery.com/jquery__bad_url___.js",{success: function(){
        if(jQuery){
          window.jq183 = jQuery.noConflict(true);
          console.log("successfully loaded jQuery ver", window.jq183.fn.jquery);
          try{ delete window.jQuery || delete window.$ }catch(err){} //cleanup
        }

        load("https://code.jquery.com/jquery-git.js?latest2",{success: function(){
          if(jQuery){
            window.jq_latest = jQuery.noConflict(true);
            console.log("successfully loaded jQuery ver", window.jq_latest.fn.jquery);
            try{ delete window.jQuery || delete window.$ }catch(err){} //cleanup

            /* ****************************** *
             *  welcome to callback hell      *
             *  please place your code here.  *
             *  regards,                      *
             *       Elad Karako ;)           *
             * ****************************** */
          }

        }}); //jQuery-latest anyway
      }}); //jQuery-1.8.3 anyway
    }}); //jQuery-1.7.2 anyway


}(
  window
, document
, document.querySelector("body")
, function(){ return true }
));
</pre>

OPTION #1 will output something like this:
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_multiple_jquery_loading_2016-01-22_192538.jpg" alt="icompile.eladkarako.com_multiple_jquery_loading_2016-01-22_192538" rem-width="982" rem-height="97" />

and you can see the (painful, but necessary) famous waterfall..
<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_multiple_jquery_loading_waterfall_2016-01-22_194838.jpg" alt="icompile.eladkarako.com_multiple_jquery_loading_waterfall_2016-01-22_194838" rem-width="796" rem-height="312" />

the better alternative: host your javascript files, make sure to PRE EDIT THEM,
make each of the namespace unique, or specific global-scope target, in short, don't share a static-resource between asynchronous calls, otherwise you'll have to sync the calls, do you want to implement threaded-execution lock/sync into JavaScript?

- The correct answer is "nope!" ;)


<img src="https://icompile.eladkarako.com/_uploads/2016/01/icompile.eladkarako.com_xzibit_meme__callback_hell.jpg" alt="icompile.eladkarako.com_xzibit_meme__callback_hell" rem-width="763" rem-height="501"/>
(JavaScript - Controllable)
<pre>
  /**
   * this is a proper object-oriented way to resolve a problem known as (or derived from..) "callback hell", 
   * essentially this allows information to be added to a simple string, while still maintaining its original functionality.
   * @type {{}}
   * @author icompile.eladkarako.com
   */
  String.prototype.piggybackData = {};

</pre>


at any point you can store data in a string and pass it along the callback,
<pre>
  /**
   * @param {function(string)?} callback
   */
var action = function(callback){
  var str = "hi";
  
  str.piggybackData.date = new Date();
  str.piggybackData.isTrue = true;
  str.piggybackData.hello = "world";

  callback(str);
};
</pre>

and extract it at any time later,
<pre>
action(function(strContent){
  var 
    date = strContent.date,
    isTrue = strContent.isTrue,
    hello = strContent.hello;
});
</pre>


in short: JavaScript. Rocks!

p.s.
nodeJs too..


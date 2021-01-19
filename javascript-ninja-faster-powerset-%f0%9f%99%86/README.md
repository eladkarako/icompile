<pre>
function get_a_power_set(){
      /* normalize input. before calling 'get_a_power_set' you can set 'get_a_power_set.initial_set' to be an array and 'get_a_power_set.is_beautify' to 'true' to get beautified output.
  var   feed = (1 === arguments.length) ? Array.prototype.slice.call(arguments,-1).pop() : arguments
      , initial_set = ("object"  !== typeof this.initial_set || -1 === this.initial_set.constructor.name.toLowerCase().indexOf("array")) ? [ [] ] : this.initial_set;
      , is_beautify = ("boolean" !== typeof this.is_beautify                                                                           ) ? false  : this.is_beautify;
  

  /* calculate */
  feed =  Array.prototype.reduce.call(feed, function (progression_set, current_item) {
    initial_set = [current_item]; /* re-use to store current item-variation */
    
    return progression_set.reduce(function (progression_set, current_item) {
      return progression_set.push(current_item.concat(initial_set)), progression_set
    }, progression_set)
    
  }, initial_set)

  
  /* beautified output (optional) */
  feed = (true === is_beautify) ? 
                                  JSON.stringify(feed, null, 2).replace(/,\
 /g, "\
 ,").replace(/ *(,(\\ +))/g,"$2,") : 
                                  initial_feed;

  /* output */
  return feed;
}
</pre>

<pre>
get_a_power_set(["a","b"],"c")
</pre>
        --> will calculate the power-set of <code>'[ ["a","b"], "c" ]'</code>

<pre>
get_a_power_set("a")
</pre>
        --> will calculate the power-set of <code>'  "a"             '</code>

<pre>
get_a_power_set.is_beautify = true;
get_a_power_set(["a"])
</pre>
               
  --> will output:
<pre>
        "[
          []
         ,[
            "a"
          ]
        ]"
</pre>

<pre>
get_a_power_set.is_beautify = true;
get_a_power_set.initial_set = [];
get_a_power_set(["a"])
</pre>

  --> will output (almost) the same result --- without the "empty-group-set".
<pre>
        "[
         ,[
            "a"
          ]
        ]"
</pre>
<!--more-->

<pre>
  function repeat_it(anything, amount){                                              /* returns an array of repeated-anything */
    return (new Array(amount)).join(',').split(',').map(function(){ return anything });
  }
</pre>

<pre>
[].concat([100,20,40],repeat_it("a",10))

->  [100, 20, 40, "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]
</pre>

<pre>
[].concat([100,20,40],repeat_it(0,30))

->  [100, 20, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
</pre>

<pre>
JSON.stringify([].concat([100,20,40],repeat_it({"hello":"world"},3)))

->  "[100,20,40,{"hello":"world"},{"hello":"world"},{"hello":"world"}]"
</pre>
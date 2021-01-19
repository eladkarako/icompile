<img src="https://icompile.eladkarako.com/_uploads/2014/10/statistics-and-probability.jpg" alt="statistics-and-probability-560x560" width="300" height="300" class="alignright size-medium wp-image-1941" />

While normall dice toss will give you <img src="https://icompile.eladkarako.com/_uploads/2014/10/CodeCogsEqn-1.gif" alt="1partn" width="11" height="37" class="alignnone size-full wp-image-1943" /> <small>where <em>n</em> is the number of sides-of the dice.</small>

this is an equal chance of each of the sides to come in <em>1</em> toss.

there are few easy ways of modifying a toss-result, using some of JavaScript's native Math functions, such as modulus (<em>%</em>) and power (<em>Math.pow</em>), there are, naturally other that will work just as well, essentially once should choose a set of functions that will increase or modify the numeric value in a non-linear 'way', Math.pow is a good example since it may work exponentially, combined with modulus operation to keep the value 'in-range' we can <em>play</em> with JavaScript's pseudo-random implementation to make some *cool variations of good old dice-toss..

<small>*:cool? well.. if you're a math-geek like me.. :) </small>
<!--more-->



<br/>

let us get some nice code going, the following uses:
<ul>
<li> <em>r(...)</em> - plain Math.random() wrapped.</li>
<li> <em>r_modulu_half(...)</em> - throwing the result using maximum is max/2.</li>
<li> <em>r_modulu_unknownrandom(...)</em> - mod a random base (new maximum will be (max-1) ).</li>
<li> <em>r_modulu_unknownrandom_modulu_unknownrandom(...)</em> - nothing exciting but feeding a random result into another, this will lower the maximum possible result.</li>
<li> <em>r_pow_e_modulu_max</em> and <em>r_pow_r_modulu_max</em> are playing with 'power' and 'e', where e is in the Exponentiation's base and then in the exponent, handling fractions is recommended (exponentiation result might be better fitted to the idea by normalizing it some more, such as multiplying with 1000 and then do some fancy '%' to trim it down..).
</ul>

next I (as.. this code) runs few virtual-dice-toss and collecting the result,
collecting some statistic by comparing it with the average expected by linear dice-toss.


<pre>
var arr = [];
var r = function(max){
  return Math.abs(~~(Math.random()*max));
};
var r_modulu_half = function(max){
  return Math.abs(r(max) % (max/2));
};
var r_modulu_unknownrandom = function(max){
  return Math.abs(r(max) % r(max));
};
var r_modulu_unknownrandom_modulu_unknownrandom = function(max){
  return Math.abs(r(max) % r(r(max)));
};
var r_pow_e_modulu_max = function(max){
  return Math.abs(~~(Math.pow(r(max),Math.E))) % max;
};
var r_pow_r_modulu_max = function(max){
  return Math.abs(~~(Math.pow(Math.E,r(max)))) % max;
};



var a;
var max = 30;
var roll = 999999;
var avg = ~~(roll / max);
var arr_statistics = [];

//fill
for(var i=0; i<roll; i+=1){
  //a = r(max);  //linear.
  //a = r_modulu_half(max); //module half of max value
  //a = r_modulu_unknownrandom(max); //modulu of unknown random
  //a = r_modulu_unknownrandom_modulu_unknownrandom(max); //continues 2 random operations.
  //a = r_pow_e_modulu_max(max);
  a = r_modulu_unknownrandom(r_pow_r_modulu_max(max));
  arr[a] = (arr[a] || 0) + 1;
}

//statistics jumps
for(var i=0; i<max; i+=1){
  arr_statistics[i] = ((arr[i]||0)/avg)*100;
  arr_statistics[i] = arr_statistics[i].toFixed(2) + "%";
}

console.log("rendered result",arr, "diff from expected avg",arr_statistics);
</pre>

the above code variation uses the JavaScript pseudo-random in a variation that renders a result that 'favored' the first cells.

<img src="https://icompile.eladkarako.com/_uploads/2014/10/rand.png" alt="rand" width="612" height="299" class="alignnone size-full wp-image-1938" />
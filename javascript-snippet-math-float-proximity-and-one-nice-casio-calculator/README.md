You may have come with too, while working with floats.

run the following command-line, in Google-Chrome's developer-tools console:
<pre>
var num = 34.1234;
</pre>

now preform any slightly variation such as <code style="display:inline !important;">Math.floor</code> or <code style="display:inline !important;">~~</code>,
that require re-evaluating the float,
<pre>
var num,
fraction;

num = 34.1234;
fraction = parseFloat(num - (~~num));

//assuming this will have 0.1234
//..right?
</pre>

in fact you will see the following output
<pre>
0.12339999999999662
</pre>

naturally OK with us.. since its practically the same...
<h3>...or is it?</h3>

lets work with our original set of numbers using a little trick..

<pre>
var num,
fraction,
fractionLength;

num = 34.1234;
fraction = parseFloat(num - (~~num));  //not fixed yet..

fractionLength = num.toString().split(".")[1].length; //===4 (number of decimal places after '.')

fraction = fraction.toFixed(fractionLength)); //almost fixed ---> "0.1234"
fraction = parseFloat(fraction); //yep. done..
</pre>

or better yet..

<pre>
var floatParts = function(num){
  var 
    fractionLength = num.toString().split(".")[1].length,
    fraction = num - (~~num);

  fraction = parseFloat(fraction.toFixed(fractionLength));

  return [~~num, fraction];
};


-------> floatParts(34.1234);
-------> [34, 0.1234]
</pre>


this naturally is not really needed, the amount of proximity is practically the same,
the reason floats in JavaScript (in Chrome) will look like this, is due to the way they are being hold in memory,
which makes the JavaScript parser treat them in so-and-so amount of bits, rather then rounding everytime,
every arithmetic operation on floats, will leave them rounded down in the least-significant digit.

casio calculator does that too, but they are providing nicer bit round-up since forever,
hey if I'm talking Casio, how about this lovely Casio fx-115v "Super-FX"
<img src="https://icompile.eladkarako.com/_uploads/2014/07/casio-fx-115v-super-fx.jpg" alt="casio fx-115v super-fx" width="167" height="324" class="alignnone size-full wp-image-1468" />

amm.. 
anyhow.. its probably something to bring it up at my next meeting @Google..


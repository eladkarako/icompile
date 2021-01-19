<h3>This is the parallel of PHP to one of JavaScript's most usable work-in design-pattern</h3>

<h4>self-called, with arguments, anonymous method are commonly used to /block/ a code-segment, 
<small>(/block/ as in "put something in a code-block" and not to block something...)</small>
this essentially keeps your code builds as a smaller building blocks, rather then a one continues code-block.</h4>

As a coding design pattern I've highly recommend to use,
I've already converted tens of modules to the following writing-pattern,
and all of my clients practically fell-in love with this new pattern, mostly accepted it as company standards.

<pre>
var 
  external_variable1 = ... ,
  external_variable2 = ... ,
  ...

var result = (function(variable1, variable2, ...){
  ...
  ...
  return ...
}(external_variable1, external_variable2, ...));
</pre>

here is the parallel of PHP's universe:


<pre>
$external_variable1 = ... ,
$external_variable2 = ... ,
  ...

$result = call_user_func_array(function($variable1, $variable2, ...){
  ...
  ...
  return ...
}, array($external_variable1, $external_variable2, ...));
</pre>



<h3>lovely how those too play nicely together <small>P.S. this is no coincidence those pattern are cross-languages-similar!</small></h3>
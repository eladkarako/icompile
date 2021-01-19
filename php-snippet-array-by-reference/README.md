
<pre>
<?php

/**
 * @param array  $array by-reference
 * @param string $key
 * @param mixed  $value
 * @return mixed
 */
function set_and_return(&$array, $key, $value) {
  $array[ $key ] = $value;

  return $value;
}

$arr = array();
$arr['hello'] = "world";

echo "before:";
var_dump($arr);

set_and_return($arr, 'foo', 'bar');

echo "after:";
var_dump($arr);
?>
</pre>


before:<pre>
<b>array</b> <i>(size=1)</i>
  'hello' <font color='#888a85'>=&gt;</font> <small>string</small> <font color='#cc0000'>'world'</font> <i>(length=5)</i>
</pre>after:<pre>
<b>array</b> <i>(size=2)</i>
  'hello' <font color='#888a85'>=&gt;</font> <small>string</small> <font color='#cc0000'>'world'</font> <i>(length=5)</i>
  'foo' <font color='#888a85'>=&gt;</font> <small>string</small> <font color='#cc0000'>'bar'</font> <i>(length=3)</i>
</pre>
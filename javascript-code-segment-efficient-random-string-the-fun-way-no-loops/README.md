<pre>
  /** random string, uses math base 23 which has few letter in it too. no loops!
   *  @return {string}
   *  @author eladkarako@gmail.com
   *  @license MIT
   */
  fn.random = function() {
    return 'EK' + Math.floor(9999 + Math.random() * 9999).toString(23);
  };

  /** using unix-time as a number, adding the milliseconds at start to make the number varies a lot (otherwise it will look too similar..) 
   *  then parsed as int only to be converted to base 36 (which has some letters in it no loops!
   *  @return {string}
   *  @author eladkarako@gmail.com
   *  @license MIT
   */
  fn.random2 = function() {
    var d = new Date();
    d = (d.getMilliseconds() + '.' + d.getTime()).replace('.', '');
    return 'EK' + parseInt(d, 10).toString(36);
  };
 
</pre>


there is the old/new way of dealing with it (Google uses it in the latest Analytics)
<pre>
1 * new Date();
</pre>
which is just a shortcut for 
<pre>
(new Date()).getTime();
</pre>

its perfectly usable if all you want is to make your request somewhat unique (meaning "not cache-able")

', 'JavaScript Code-Segment: efficient random string
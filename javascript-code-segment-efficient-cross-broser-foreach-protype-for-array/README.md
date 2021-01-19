<pre>
  /**
   @param {function(Node, number, Array)} callback
   @param {Object?} thisObject - optional this-object.
   @return {void}
   */
  Array.prototype.forEach = Array.prototype.forEach || function(callback, thisObject) {
    var
      i, len = this.length || 0;

    if("function" !== typeof callback) throw new TypeError('1st arg not function');

    for (i = 0; i < len; i += 1) {
      i in this && callback.call(thisObject, this[i], i, this);
    }
  };
 
</pre>
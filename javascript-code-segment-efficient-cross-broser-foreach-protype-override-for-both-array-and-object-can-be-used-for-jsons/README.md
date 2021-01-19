<pre>
  /**
   * doForEach array
   * @param {function(*, number, Array)} callback :: (value, index, array)
   * @param {Object?} thisScopeObject - optional.
   * @return {number}
   * @author eladkarako@gmail.com 
   */
  Array.prototype.doForEach = function(callback, thisScopeObject) {
    var i, len = this.length || 0;
    if ("function" !== typeof callback) {
      throw new TypeError('1st should be a function');
    }

    for (i = 0; i < len; i += 1) {
      i in this && callback.call(thisScopeObject, this[i], i, this);
    }
  };

  /**
   * doForEach object
   * @param {function(string, *, number, Object)} callback :: (key, value, index, object)
   * @param {Object?} thisScopeObject - optional.
   * @return {number}
   * @author eladkarako@gmail.com
   */
  Object.prototype.doForEach = function(callback, thisScopeObject) {
    var key, index = 0;
    if ("function" !== typeof callback) {
      throw new TypeError('1st should be a function');
    }

    for (key in this) {
      if (this.hasOwnProperty(key)) {
        callback.call(thisScopeObject, key, this[key], index, this);
        index += 1;
      }
    }
  };
 
</pre>
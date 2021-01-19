<pre>
/**
   * efficient cross-broser alternative to 'hasAttribute'
   * @param {string} attribute
   * @return {boolean}
   */
  Object.prototype.has = function(attribute) {
    return ("string" !== typeof attribute) ? false :

      this.attributes ? this.attributes.hasOwnProperty ? this.attributes.hasOwnProperty(attribute) : attribute in this.attributes
        :
        this.hasOwnProperty ? this.hasOwnProperty(attribute) : attribute in this;
  };
 
</pre>
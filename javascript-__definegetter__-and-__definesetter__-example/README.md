<pre>
/*
 * innerText
 *	Implement innerText for browsers that do not have it.
 */
if (typeof HTMLElement !== "undefined" && HTMLElement.prototype) {
  HTMLElement.prototype.__defineGetter__("innerText", function () {
    var rng = this.ownerDocument.createRange();
    rng.selectNodeContents(this);
    return rng.toString();
  });
  HTMLElement.prototype.__defineSetter__("innerText", function (text) {
    var parsed = document.createTextNode(text);
    this.innerHTML = "";
    this.appendChild(parsed);
  });
}
</pre>
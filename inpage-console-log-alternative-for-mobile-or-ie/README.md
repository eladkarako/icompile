Internet-Explorer and Native mobile-devices are often a very desirable||required platform to be testing, but due to product design, the console.log is not very viewable (in cases of very old Internet-Explorer browser, it might not even exist..)

the following code, injected at any point (preferably at the very top of the HEAD tag-element) will supply a viewable alternative for, say, Android 2.2 native-browser pages..

oh, and naturally, the code still keeps the existing functionality of console.log and console.error..

<pre>
(function (window, document) {
  var oldconlog, oldconerr,
      emptyFn = function () {
      },
      all2str = function (m, n, l, e, g) {
        if ("string" === typeof m) {
          return m;
        }
        if ("undefined" !== JSON) {
          return JSON.stringify(m);
        }

        e = [];
        l = function (c, f, h, k, b, a, d, g) {
          if ("object" !== typeof c) {
            return false;
          }
          "undefined" === typeof k && (k = "FIRST PARENT OBJECT");
          e.push(c);
          g = 1 > e.length ? emptyFn : function (b, a) {
            for (a = 0; a <= e.length; a += 1) {
              if (c[b] === e[a]) {
                return true;
              }
            }
            return false;
          };
          d = "";
          "undefined" === typeof f && (f = 1);
          "undefined" === typeof h && (h = f);
          for (b = 0; b <= f; b += 1) {
            d += " ";
          }
          b = "{ \
";
          for (a in c) {
            "object" !== typeof c[a] ? ("string" === typeof c[a] && (c[a] = "'" + c[a].toString() + "'"), "boolean" === typeof c[a] && (c[a] = c[a].toString() + " (boolean)"), b += d + a + " : " + c[a].toString(), b += "\
") : b += g(a) ? d + a + " : " + k + " (prevent loop)\
" : d + a + " : " + l(c[a], f + h, h, k);
          }
          h != f && (b += d);
          return b += "} \
";
        };
        g = l(m, n);
        e = [];
        return g;
      };

  window.console = window.console || {};
  window.console.log = window.console.log || emptyFn;
  window.console.error = window.console.error || emptyFn;

  oldconlog = window.console.log;
  oldconerr = window.console.error;

  (function () {
    var container, prelog, preerr;

    container = document.getElementById('__conlogerr') || (function () {
      var container = document.createElement('div');
      container.setAttribute('id', '__conlogerr');
      container.style.cssText = "width:90%; position:absolute; top:5000px; color:#00FF27; background-color:#5D5D5D; border:1px solid black; box-shadow:5px 5px 2px #888888; padding: 5px 5px 5px 5px; margin: 10px;";

      document.getElementsByTagName('body')[0].appendChild(container); //document.getElementsByTagName('body')[0].insertBefore(container, null);

      return container;
    }());

    prelog = document.getElementById('__conlog') || (function () {
      var prelog = document.createElement('pre');
      prelog.setAttribute('id', '__conlog');
      prelog.style.cssText = "word-break: break-all; word-wrap: break-word; width:99%;";
      container.appendChild(document.createTextNode('console.log:'));
      container.appendChild(prelog);
      return prelog;
    }());

    preerr = document.getElementById('__conerr') || (function () {
      var preerr = document.createElement('pre');
      preerr.setAttribute('id', '__conerr');
      preerr.style.cssText = "word-break: break-all; word-wrap: break-word;";
      container.appendChild(document.createTextNode('console.error:'));
      container.appendChild(preerr);
      return preerr;
    }());

  }());


  //context-switch
  window.console.log = function (msg) {

    if ("function" === typeof oldconlog) { //trigger old console.log
      oldconlog.apply(this, arguments);
    } else if ("object" === typeof oldconlog) { //IE fix
      oldconlog(msg);
    }

    document.getElementById('__conlog').appendChild(document.createTextNode(all2str(msg)));
    document.getElementById('__conlog').appendChild(document.createTextNode('\
---\
'));
  };

  window.console.error = function (obj, msg) {
    if ("function" === typeof oldconerr) { //trigger old console.error
      oldconerr.apply(this, arguments);
    } else if ("object" === typeof oldconerr) { //IE fix
      oldconerr(msg);
    }

    document.getElementById('__conerr').appendChild(document.createTextNode(all2str(obj)));
    document.getElementById('__conerr').appendChild(document.createTextNode('\
---\
'));

    document.getElementById('__conerr').appendChild(document.createTextNode(all2str(msg)));
    document.getElementById('__conerr').appendChild(document.createTextNode('\
---\
'));
  };

}(window, document));
</pre>


::edit #2 July 7th, 2014 :: handle IE console.log and console.error are objects not functions, handle obj2str (now called all2str) to handle conversion of everything to text. 
::edit #1 June 1st, 2014.
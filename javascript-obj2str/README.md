<pre>
  var obj2str = function (m, n, l, e, g) {
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
</pre>
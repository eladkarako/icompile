assigning a shift key, one needs to click the first (or any) checkbox, holding the shift key and clicking the next (in a few) will check (on or off) the checkboxes in middle.

the script underneath can be loaded into a .user.js file to be use in Firefox (greasemonkey) or Chrome (also Chromium) Browsers.

<pre>
// ==UserScript==
// @name           Mass Checkboxes Handler
// @description    Handle Multiple Checkboxes Clicking With Ease. Click The First, Hold [SHIFT] and Click The Last, All Checkboxes That Are In Range Would Be Checked/UnChecked Too. Easy And Fast! Compatible With Chrome and Firefox.
// @namespace      https://icompile.eladkarako.com/
// @homepage       https://icompile.eladkarako.com/
// @include        http://*
// @include        https://*
// @include        file:///*
// @exclude        http://*mail.google*/*
// @exclude        https://*mail.google*/*
// @version        d02.m06.y2010
// ==/UserScript==
window.addEventListener("load", function () {
    function j(a) {
        return a == "html" ? "http://www.w3.org/1999/xhtml" : null
    }

    function g(a) {
        var c = a.target;
        if (c.tagName.toUpperCase() == "INPUT" && c.type == "checkbox" && (a.button == 0 || a.keyCode == 32)) {
            if (a.shiftKey && e) {
                a = e;
                var d, b, f, h = document.evaluate(document.documentElement.namespaceURI ? "//html:input[@type='checkbox']" : "//input[@type='checkbox']", document, j, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                for (d = 0; b = h.snapshotItem(d); ++d) {
                    if (b == c) {
                        f = a;
                        break
                    }
                    if (b == a) {
                        f = c;
                        break
                    }
                }
                for (; b = h.snapshotItem(d); ++d) {
                    if (b != a && b != c && b.checked != a.checked) {
                        var i = document.createEvent("MouseEvents");
                        i.initEvent("click", true, false);
                        b.dispatchEvent(i)
                    }
                    if (b == f) break
                }
            }
            e = c
        }
    }
    var e = null;
    document.documentElement.addEventListener("keyup", g, true);
    document.documentElement.addEventListener("click", g, true)
}(), false);

//.user.js
</pre>
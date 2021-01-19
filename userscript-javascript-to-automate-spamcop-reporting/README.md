<img src="https://icompile.eladkarako.com/_uploads/Untitled1.png" alt="SpamCop Send-Reports Automator GreaseMonkey UserScript JavaScript By Elad Karako" title="SpamCop Send-Reports Automator" width="323" height="118" class="alignnone size-full wp-image-408" />

SpamCop is a great service to be assign to, basically, you forward any of your Spam using Outlook or MailWasher for example, and SpamCop Service is taking care to alert the supplier of the email hosting, hoping to stop the distributing of another spam anytime soon...

if you ever visit the SpamCop website you've notice you have to click through all the spam you've got, at least two clicks and wait for the loading of the next "report page". My UserScript, to be used with the GreaseMonkey framework, will do the reporting automatically.

in order to use it you will need:
Chrome|Chromium|Firefox (with GreaseMonkey installed).

<pre>
// ==UserScript==
// @name            SpamCop Send-Reports Automator
// @namespace       https://icompile.eladkarako.com
// @homepage	    https://icompile.eladkarako.com
// @description     All The Reports Would Be Send For You, Automaticly, One By One, No Clicking Needed. Significantly FASTER(!!) then Other SpamCop Scripts! Chrome & Firefox Compatibility
// @include         http://www.spamcop.net/
// @include         http://www.spamcop.net/sc*
// @include         http://members.spamcop.net/sc*
// @version         y2011.m03.d14
// ==/UserScript==

window.addEventListener("load", (function () {
    if (window.location.href == "http://www.spamcop.net/") {
        for (var astart, rx = /spamcop\\.net\\/sc\\?id\\=/, i = 0; i < document.links.length; i++) if (rx.test(document.links[i].href)) window.location = document.links[i].href;
    } else {
        var a = document.getElementsByName("sendreport");
        if (a.length == 1) {
            a[0].submit();
        } else {
            a = "sc?id=";
            if (a != null) {
                a = a.toLowerCase();
                for (var c = document.links, b = 0; b < c.length; ++b) if (c[b].innerHTML && c[b].innerHTML.toLowerCase().indexOf(a) != -1 || c[b].href.toLowerCase().indexOf(a) != -1) location.href = function (d) {
                    d = d.replace(/&/g, "&amp;");
                    return d.replace(/"/g, "&quot;")
                }(c[b].href)
            }
        }
    }
})(), false);

//.user.js
</pre>

Copy&Paste to a blank document, Save As "SpamCopAuto.user.js", then Drag&Drop over your browser to install it. use can remove it later using the GreaseMonkey panel (in Firefox) or the extension panel in Chrome|Chromium
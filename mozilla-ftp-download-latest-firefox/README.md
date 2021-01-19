<img src="https://icompile.eladkarako.com/_uploads/2017/03/latest_firefox_aurora.png" alt="" width="498" height="316"/>

<!--more-->

Latest <sup><em>(~sort of~ "nightly")</em></sup> Firefox Developer Edition, Code-Name `Aurora`
<a href="https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-aurora/" target="_blank">https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-aurora/</a>

<sup>This is the <strong>full</strong> offline-installer, not the `installer-stub` you get from the <a href="https://www.mozilla.org/en-US/firefox/developer/" target="_blank">official website</a>.</sup>

<hr/>

Latest Nightly-Build <sup><em>from trunk</em></sup> Firefox
<a href="https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central/" target="_blank">https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central/</a>

You can download a localised <sup><em>(or "locali<strong>z</strong>ed".. if you're an American..)</em></sup> language-specific version on <a href="https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-aurora-l10n/" target="_blank">https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-aurora-l10n/</a>.

<hr/>

Latest Beta
<a href="https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-beta-l10n/" target="_blank">https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-beta-l10n/</a>

It seems that there is no generic package so you must choose one of the localised-packages,
for example <a href="https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-beta-l10n/firefox-47.0.en-GB.win64.installer.exe" target="_blank">https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-beta-l10n/firefox-47.0.en-GB.win64.installer.exe</a> or <a href="https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-beta-l10n/firefox-47.0.en-GB.win64.zip" target="_blank">https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-beta-l10n/firefox-47.0.en-GB.win64.zip</a>

<hr/>

You may also <a href="https://www.mozilla.org/en-US/firefox/organizations/faq/" target="_blank">download ESR (extended support release) for latest or not-so latest versions of Firefox</a>, which is mostly useful if you don't want to keep updating the core-browser's version a lot..
Version 45: <a href="https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-esr45-l10n/" target="_blank">https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-esr45-l10n/</a>
And version 52: <a href="https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-esr52-l10n/" target="_blank">https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-esr52-l10n/</a>

<sub>Here too, you must choose a localised-download..</sub>

<hr/>

Browser <a href="https://ftp.mozilla.org/pub/firefox/nightly/" target="_blank">https://ftp.mozilla.org/pub/firefox/nightly/</a> for "by date" downloads or any other variation of Firefox you may download, in-full.

<hr/>

If you need any help finding the correct links for your Windows-x64 PC,
just run the following query, and you'll get the download link:
<code>document.querySelector('a[href*="firefox-"][href*="win64"][href$=".zip"]:not([href*=".tests"]):not([href*="symbols"])').href</code>

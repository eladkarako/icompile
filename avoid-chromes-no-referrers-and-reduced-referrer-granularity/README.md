Do not use <code>--no-referrers</code> and <code>--reduced-referrer-granularity</code> command-line switches with <code>chrome.exe</code> (neither Google-Chrome nor Chromium).

There is an old bug that will f**k up the rendering AND the network engines,
and that will render some websites useless/ non-reactive.

- Mostly those whom are using ajax-login/dynamic (in DOM) cookie updates.

<em>You CAN (<strong>and should</strong>) use the <code>chrome://flags/#reduced-referrer-granularity</code> flag instead.</em>

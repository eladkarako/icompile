You might came across several articles suggesting "top X Chrome tricks for faster browsing the web" (replace X with foo number of sort..) <sup><a href="http://www.howtogeek.com/howto/the-geek-blog/increase-google-chromes-omnibox-popup-suggestion-count-with-an-undocumented-switch" target="_blank">example</a></sup>
<!--more-->
<hr/>
This much wanted feature was cut sort after it was discovered to survived long after its due date as an experiment, it was later quickly removed, as this story tells: <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=374319" target="_blank">https://bugs.chromium.org/p/chromium/issues/detail?id=374319</a>

*Ha! You got to love reading between the lines there :|

Anyway, still a (so much) wanted feature, you can see the modifications to the source, if you've got *what we need* you might as-well patch things up and commit it to our Chromium-tree (after testing it yourself naturally..)

<a href="https://src.chromium.org/viewvc/chrome?revision=47482&view=revision" target="_blank">https://src.chromium.org/viewvc/chrome?revision=47482&view=revision</a>
<a href="https://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/chrome_switches.cc?r1=47482&r2=47481" target="_blank">https://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/chrome_switches.cc?r1=47482&r2=47481</a>
<a href="https://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/chrome_switches.h?r1=47482&r2=47481" target="_blank">https://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/chrome_switches.h?r1=47482&r2=47481</a>

"ping" the team <strong>or me</strong> ,for <em>credit where credit's due</em>.', 'Increase Onmibox Suggestions? Nope
This might bug you when typing:

<img src="https://icompile.eladkarako.com/_uploads/2017/05/info_1.gif" alt="" width="700" height="500"/>

<img src="https://icompile.eladkarako.com/_uploads/2017/05/icompile.eladkarako.com_google_accounts_non_standard_placeholder-1.png" alt="" width="412" height="279"/>

Since its transition up/down is not perfect,
and it covers the real, native, input element.

If you're having <a href="https://chrome.google.com/webstore/detail/cjpalhdlnbpafiamejdnhcphjbkeiagm" target="_blank">uBlock origin</a>, simply add the rule:
<code>google.com##input[type^="password"] + div[jsname][aria-hidden]</code>

Notes:
- perfectly safe.
- due to a parsing bug don't use <code>[type="password"]</code> but partial-match (<code>*</code>,<code>^</code> or <code>$</code>).
- you can make it as generic as you'll like:
-- <code>google.com##input + [jsname][aria-hidden]</code> to fix it for other input types
-- <code>google.com##input + [aria-hidden]</code>
or even <code>##input + [aria-hidden]</code> will do just fine, since <em>aria-hidden</em> are purely informational, so they can be safely be hidden (<code>display:none</code> as is..) or even totally removed!

<hr/>

<blockquote style="font-size:18pt;">
In-fact, <strong>scratch that!</strong>.

The elements are still buggy and focus-stealing unless removed from the DOM,
which sadly can not be done with uBlock/AdBlock (those will simply just hide it..)

You better download the Google Chrome-extension:
<a href="https://chrome.google.com/webstore/detail/dhgdpjkcnjbcdlhlmlogepplbicplmdm" target="_blank">https://chrome.google.com/webstore/detail/dhgdpjkcnjbcdlhlmlogepplbicplmdm</a>
</blockquote>

', 'Google Accounts
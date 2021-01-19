<img src="https://icompile.eladkarako.com/_uploads/2017/03/icompile.eladkarako.com_chrome_chromium_password_import_export_new_feature.png" alt="" width="256" height="256" />

Adding new feature to Chromium lately,
currently you can only activate it through the *super-secret-hidden* flags page..

..Here is how:
<!--more-->


Go to <code>chrome://flags/#password-import-export</code>,
Switch to "enabled" and restart the browser.

Then go to <code>chrome://settings/passwords</code> and you'll see two buttons,
import and export,

You can export the existing password as a CSV to your desktop,
edit/add etc..

the format is simple, here is an example:
<pre>name,url,username,password
accounts.google.com,https://accounts.google.com/signin,email@gmail.com,"my_pass_has_some_weird_$h!t'^`in/it.."
foo.eladkarako.com,https://eladkarako.com,username,simple_password

</pre>

<blockquote>
You can use ASCII/UTF-8/Unicode encoded text-file,
if your password has some weird characters in it wrap it with <code>"</code>, if your password has <code>"</code> characters in it, escape them by <code>\\"</code>. Simple passwords you can just put there..
</blockquote>

<blockquote>
As for the name, you can choose anything, the url can be as specific or as simple as you need, putting a very specific path will limit the password to only be used for the current url, or urls based on the current url with any additions to the path, arguments or hash component of the url,
choosing simple, or even only a hostname as the url will means that the password will be applied to a wider range of matches, all based on the current baseline of the current url.
</blockquote>

<em>And as always you will be asked your OS-login password before you can view or export your passwords.</em>


Also, the really awesome part is that it will sync with your account,
Try activating <code>chrome://flags/#affiliation-based-matching</code> for using all the password with Android too!

', 'Finally - An Option To Import And Export Passwords
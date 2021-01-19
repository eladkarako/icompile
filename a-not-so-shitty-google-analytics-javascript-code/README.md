<img class="alignright size-full wp-image-2502" src="https://icompile.eladkarako.com/_uploads/2014/06/icompile.eladkarako.com__a_not_so_htty_google_analytics_javascript_code.png" alt="icompile.eladkarako.com__a_not_so_htty_google_analytics_javascript_code" />

There are some new stuff running at Google,
making Analytics better then ever,
however, the javascript code raised a lot of eyebrows due to its complexity,

oh and the help-page for the user-visitors contains some UTF-8 weird stuff added by mistake to the code..

here is a "not so $h!tty stuff" that will not @#$ up your page, its broken down to 3 &lt;script&gt;
tags, that should be placed in the very end of the document, just before the closing body tag (&lt;/body&gt;).

as a bonus there is an example on how to use the unique user-id featured (essentially everything new is here you can use the Analytics)

it contains a PHP-part (written at the top of the PHP file), following with the JavaScript part, 
that uses the session-information written by the PHP-tag, into the JavaScript, at the end of the PHP-file (end of the HTML part).

<a href="https://gist.github.com/eladkarako/be5641f24538ede155cae3fb28aea8af#file-a-not-so-shitty-google-analytics-javascript-code-php">https://gist.github.com/eladkarako/be5641f24538ede155cae3fb28aea8af#file-a-not-so-shitty-google-analytics-javascript-code-php</a>

<iframe type="text/html" charset="UTF-8" loading="eager" lazyload="off" importance="high" 
  src="https://icompile.eladkarako.com/_resources/embed_gist.html?gistuser=eladkarako&gistid=be5641f24538ede155cae3fb28aea8af&origin=https%3A%2F%2Ficompile.eladkarako.com" 
  referrerpolicy="no-referrer" sandbox="allow-same-origin allow-scripts allow-top-navigation" 
  seamless="false" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" 
  style="height:300px;"
></iframe>



extract your values (<code>UA-THE_CODE_FROM_GOOGLE-1<code> and <code>THE_DETAIL_FROM_GOOGLE<code>) from your original Google-Analytics code-snippet,
your visitors will have an additional cookie, maintaining their identity on your website, this is 100% maintained by PHP, you can also use any PHP variable such as wordpress login name, or even a variation of the guest IP or any other detail you would like to track, and put it instead of the session-id, but, this is the easiest way.

note: 
while processing the code I've came across some weird UTF-8 characters that were breaking my page,
this was due to I was copying&pasting it from Google-support, into my page, 
solution was using Notepad++ to convert the PHP file to UTF-8, then the symbols were visible, and I've just deleted them, saved and uploaded the PHP file as binary through FTP.

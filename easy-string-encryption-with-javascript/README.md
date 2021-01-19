<ul>
  <li>
    Keeping <em>some</em> data in your JavaScript source, is unavoidable,
    it is best to keep it at-least, somewhat obfuscated.
  </li>
  <li>
    Here is a <strong>simple</strong> string encrypt/decrypt function.
  </li>
  <li>
    <em>First</em> run the <strong>function</strong> with your <strong>plain-text</strong>, to encrypt it.
    Next, store both the <strong>function</strong> and the <strong>encrypted text</strong> in your source-code.
    Need the plain-text again?
    Run the <strong>function again</strong>, but this time: on your <strong>encrypted text</strong>!
    to get the <strong>plain-text</strong> back.
  </li>
  <li>
    The function is added to the String <code>prototype</code> for an easy access.
  </li>
  <li>
    <span style="font-size:18pt; text-decoration:underline;">The Code:</span>

    <a title="https://gist.github.com/eladkarako/738ff6791dd2e44baeb5787851f874d5" href="https://gist.github.com/eladkarako/738ff6791dd2e44baeb5787851f874d5">https://gist.github.com/eladkarako/738ff6791dd2e44baeb5787851f874d5</a>

    <iframe type="text/html" charset="UTF-8" loading="eager" lazyload="off" importance="high" 
      src="https://icompile.eladkarako.com/_resources/embed_gist.html?gistuser=eladkarako&gistid=738ff6791dd2e44baeb5787851f874d5&origin=https%3A%2F%2Ficompile.eladkarako.com" 
      referrerpolicy="no-referrer" sandbox="allow-same-origin allow-scripts allow-top-navigation" 
      seamless="false" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" 
      style="height:300px;"
    ></iframe>
  </li>
  <li>
    <span style="font-size:18pt; text-decoration:underline;">Examples:</span>
    <ul>
      <li>
        <code><span style='color:#800000; '>"</span><span style='color:#0000e6; '>hello</span><span style='color:#800000; '>"</span><span style='color:#808030; '>.</span>crypt_symmetric<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span></code><br/>
        will result with <code>ehaab</code>.
      </li>
      <li>
        <code><span style='color:#800000; '>"</span><span style='color:#0000e6; '>שָלוֹם</span><span style='color:#800000; '>"</span><span style='color:#808030; '>.</span>crypt_symmetric<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span></code><br/>
        will result with <code>&#x05E4;&#x05B5;&#x05D1;&#x05D8;&#x05B4;&#x05D0;</code>.
      </li>
    </ul>

    <hr/>

    Optionally keep your characters in the ASCII range,
    by <code>.normalise_to_ascii()</code> and bring them back 
    to Unicode using <code>.normalise_to_unicode()</code>.
    
    The explanation <strong>"why it is required?"</strong> is a bit long,
    so it is up to you if it is needed or not.

    <sub>Basically, since <code>XOR</code> creates a little character-shift,<br/>You might end up with a "control-character", that might make your code looks ugly,<br/>at this case you can always use <code>"YOUR_STRING".crypt_symmetric().normalise_to_ascii()</code> and <code>btoa</code>,<br/>to keep it as a BASE64 string,<br/>  followed by <code>atob</code> and <code>"YOUR_STRING".normalise_to_unicode().crypt_symmetric()</code> to restore it :]</sub>
  </li>
  <li>
    Yes. The <em>same</em> function acts as an <em>ecryptor and as a decryptor</em>.
    It uses a very simple <em>symmetric-encryption</em> using <strong>XOR</strong> and a <strong>key</strong>,
    which by default is <code>13</code>, but you may, <em>optionally, provide your own key</em> (number).
  </li>
  <li>
    You are provided with some-what longer function,
    to help you visualise the steps, and simplified your understanding.
    Feel free to modify, minify the base structure to make it more/less complex to your needs... :]
    <ul><li>Best to keep it simple though.</li></ul>
  </li>
</ul>

also available on this gist:



<hr/>


How to use it as a bookmarklet (to put your password into the correct input-element, to save you some typing).
<img src="https://icompile.eladkarako.com/_uploads/2017/06/icompile.eladkarako.com_javascript_string_enc_dec_used_in_google_new_login.png" alt="" width="646" height="561"  />

let us assume your password is: <code>password</code>,
now you can create a bookmarklet with the encrypted password, that will put the decrypted value, right inside the correct input-element, ready for you to press the <code>next</code> button.

first step is generate the password:
<pre>
<span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>norm_to_ascii<span style='color:#808030; '>=</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800000; font-weight:bold; '>unescape</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>encodeURIComponent</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
<span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>norm_to_unicode<span style='color:#808030; '>=</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800000; font-weight:bold; '>decodeURIComponent</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>escape</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
<span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#797997; '>prototype</span><span style='color:#808030; '>.</span>crypt_sym<span style='color:#808030; '>=</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>k<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#797997; '>String</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>fromCharCode</span><span style='color:#808030; '>.</span>apply<span style='color:#808030; '>(</span><span style='color:#0f4d75; '>undefined</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>split</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>map<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>c<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>return</span> c<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>charCodeAt</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span><span style='color:#808030; '>^</span><span style='color:#808030; '>(</span>k<span style='color:#808030; '>||</span><span style='color:#008c00; '>13</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

<span style='color:#696969; '>//do this manually</span>
btoa<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>password</span><span style='color:#800000; '>"</span><span style='color:#808030; '>.</span>norm_to_ascii<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>crypt_sym<span style='color:#808030; '>(</span><span style='color:#008c00; '>1111</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>norm_to_ascii<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>
we'll get: <code>fWx+fnpif2k=</code>.

next is to make the minimalist, ad-hoc, bookmarklet:

<pre>
javascript:(function(){top.document.querySelector('input[name="password"]').value=String.fromCharCode.apply(null,unescape(encodeURIComponent(atob("fWx+fnpif2k="))).split("").map(function(c){return c.charCodeAt(0)^13}));return true}());
</pre>

You can me things more readable if you want to duplicate the same bookmarklet for other websites:
<pre>
javascript:(function(e,v,k){e.value=String.fromCharCode.apply(null,unescape(encodeURIComponent(atob(v))).split("").map(function(c){return c.charCodeAt(0)^k}));return true;}(top.document.querySelector('input[name="password"]'),"fWx+fnpif2k=",13));
</pre>

this way you can change the selector query, the encrypted password, and the key from "outside" the main function :]

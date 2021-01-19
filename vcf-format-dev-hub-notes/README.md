Following some insights from the post <a href="https://icompile.eladkarako.com/vcf-format-android-phone-book-export-import-example-using-long-list-of-junkspam-phone-numbers/" target="_blank"><em>VCF Format - Android Phone Book Export Import - Example Using Long List Of Junk/Spam Phone Numbers</em></a>
<!--more-->


<hr />

- Downloading VCF using &#60;a&#62; element:
-- attribute "download" set to desired name ("contacts.vcf")
-- attribute "type" set to mimetype + charset --- <code>&#34;text&#47;vcard; charset=UTF-8&#34;</code>
-- attribute "href" set to data-mimetype (again) + charset (again) + base64 data unicode-decoded (byte string encoded to base64) --- <code>&#34;data:text&#47;vcard; charset=UTF-8; base64,&#34; + btoa(unescape(encodeURIComponent(source)))</code>

<hr />

<div box-like>
- Apparently Android 5.1.1/Android 6.1.1 WILL NOT support importing a contact with more than ~~400 phone-numbers- So I've removed the 'natural' form of phone-numbers in favor of the '+972' prefix. which is about ~~370 phone numbers and fully supported by all OS..
</div>

<hr />

- name encoding
plain English can be encoded like so
<pre>
N:last;first;;;
FN:first last
</pre>
plain Hebrew (for example) Unicode characters are natively supported as is, just put a <code>charset</code> for mentioning the content's charset (is not called encoding)
<pre>
N;CHARSET=UTF-8:last;first;;;
FN;CHARSET=UTF-8:first last
</pre>

<hr />

for stuff like street/address etc.. where <code>\
</code> or other weird $hit might be present, it is better to use another way- called "<a rel="unfollow" href="https://en.wikipedia.org/wiki/Quoted-printable" target="_blank">Quoted-Printable</a>" which is more or less the decoded-unicode character value (where a letter is composed of "at most" n numbers, valued maximum 255 each)

<hr />

this JavaScript code will transform "הרצליה" to "=D7=94=D7=A8=D7=A6=D7=9C=D7=99=D7=94"

<pre><span style='color:#800000; '>"</span><span style='color:#0000e6; '>=</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> <span style='color:#800000; font-weight:bold; '>unescape</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>encodeURIComponent</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>הרצליה</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>split</span><span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>map<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>c<span style='color:#808030; '>)</span><span style='color:#800080; '>{</span> <span style='color:#800000; font-weight:bold; '>return</span> c<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>charCodeAt</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toString</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>16</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>toUpperCase</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>\\=</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span>
</pre>

<hr />

so for example here are the 3 variations:
1st
<pre>
ADR;WORK;CHARSET=UTF-8:;;street;city;;;
</pre>

2nd
<pre>
ADR;WORK;CHARSET=UTF-8:;;רחוב המדע 4;הרצליה פיתוח;;;
</pre>

3rd
<pre>
ADR;WORK;CHARSET=UTF-8;ENCODING=QUOTED-PRINTABLE:;;=D7=A8=D7=97=D7=95=D7=91 =D7=94=D7=9E=D7=93=D7=
=A2 4;=D7=94=D7=A8=D7=A6=D7=9C=D7=99=D7=94 =D7=A4=D7=99=D7=AA=D7=95=D7=97;;
</pre>

<hr />

Since ever since Android 2.3 Unicode is pretty-much safe to use, the 2nd option is prefered (for simple inputs..)
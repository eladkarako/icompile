<!--more-->

Put this code at the top of your CSS file, just after the "zero/clear/init" part.

<pre>
<span style='color:#800000; font-weight:bold; '>html</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>input</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>textarea</span><span style='color:#800080; '>{</span>  <span style='color:#bb7977; font-weight:bold; '>font-family</span><span style='color:#808030; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Noto Sans</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Roboto</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#074726; '>sans-serif</span><span style='color:#800080; '>;</span>                    <span style='color:#800080; '>}</span>
<span style='color:#800000; font-weight:bold; '>pre</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>code</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>kbd</span><span style='color:#800080; '>{</span>         <span style='color:#bb7977; font-weight:bold; '>font-family</span><span style='color:#808030; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Noto Mono</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Roboto Mono</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Courier New</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#074726; '>monospace</span><span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span>
</pre>

And go through your other styles and try to reduce the amount of repeating rules,
for example, change 'font' to 'font-size' since we've already defined the 'font-family' ;]

<hr/>
Handling dual Hebrew/English content:
<pre>
<span style='color:#800000; font-weight:bold; '>html</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>input</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>textarea</span><span style='color:#800080; '>{</span>  <span style='color:#bb7977; font-weight:bold; '>font-family</span><span style='color:#808030; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Noto Sans</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Roboto</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#074726; '>sans-serif</span><span style='color:#800080; '>;</span>  <span style='color:#800080; '>}</span>

 <span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>lang</span><span style='color:#800080; '>(</span><span style='color:#074726; '>he</span><span style='color:#800080; '>)</span><span style='color:#808030; '>,</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>lang</span>(he-IL)
<span style='color:#808030; '>,</span><span style='color:#808030; '>[</span><span style='color:#074726; '>lang</span><span style='color:#808030; '>^=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>hebrew</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#808030; '>,</span><span style='color:#808030; '>[</span><span style='color:#074726; '>lang</span><span style='color:#808030; '>^=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>Hebrew</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>
<span style='color:#808030; '>,</span><span style='color:#808030; '>[</span><span style='color:#074726; '>language</span><span style='color:#808030; '>^=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>hebrew</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#808030; '>,</span><span style='color:#808030; '>[</span><span style='color:#074726; '>language</span><span style='color:#808030; '>^=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>Hebrew</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>
<span style='color:#808030; '>,</span><span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>lang</span>(he-iw)<span style='color:#808030; '>,</span><span style='color:#808030; '>[</span><span style='color:#074726; '>lang</span><span style='color:#808030; '>^=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>iw</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#808030; '>,</span><span style='color:#808030; '>[</span><span style='color:#074726; '>lang</span><span style='color:#808030; '>^=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>IW</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span> <span style='color:#696969; '>/*old Hebrew definition was 'iw' instead of 'he' (still IS in 'IE'&lt;9)*/</span>
<span style='color:#800080; '>{</span>  <span style='color:#696969; '>/*when the content is unambiguously-specified to Hebrew, *respect it*, and prefer a variation of Hebrew-font first (but still including the default ones.. later...) */</span>
  <span style='color:#bb7977; font-weight:bold; '>font-family</span><span style='color:#808030; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Noto Sans Hebrew</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Open Sans Hebrew</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Tahoma</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Adobe Hebrew</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Alef</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Noto Sans</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Roboto</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#074726; '>sans-serif</span><span style='color:#800080; '>;</span>                    <span style='color:#800080; '>}</span>
<span style='color:#800080; '>}</span>

<span style='color:#800000; font-weight:bold; '>pre</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>code</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>kbd</span><span style='color:#800080; '>{</span>         <span style='color:#bb7977; font-weight:bold; '>font-family</span><span style='color:#808030; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Noto Mono</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Roboto Mono</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Courier New</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#074726; '>monospace</span><span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span>
</pre>

The addition, added above, specify the 'preferred' order to be used (with fallback).

Note that <code>Note Sans</code> has the glyphs for Hebrew-letters, but browsers handles language-relation to fonts differently from operation-systems, so while your Windows7 wont be picky and if you'll set the <code>Note Sans</code> as the global-default font (for example) and will show you file-names containing Hebrew with no particular issue, Chrome will *quirk up* and use the the default system font-family unless you've specified it ahead using a CSS-rule,
which usually means <code>David</code>, <code>Times New Roman</code> or other known font-families will be used.

The code-above will prioritise the use of the Hebrew variation of some known fonts such as <code>Noto Sans</code>, which will *absolutely* help the identification-engine to handle multiple languages, while still keeping a decent unified design and readability.

<em>This mechanisem can be automatise using <a href="https://chrome.google.com/webstore/detail/caclkomlalccbpcdllchkeecicepbmbm" target="_blank">Advanced Font Settings</a> but I do not recommend using it because it is quite cr^ppy and will load a lot of junk Javascript into every page you'll browse!</em>

<hr/>
the problem with the above code, is that mix-language-sentences where you have English and Hebrew content are, still, shown using the Noto font for English and the 'David' font-family (default on my PC) for the Hebrew content.

Cleaning up and slightly modifying the CSS code, will solve it:
<pre>
<span style='color:#800000; font-weight:bold; '>html</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>input</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>textarea</span><span style='color:#800080; '>{</span>                       <span style='color:#bb7977; font-weight:bold; '>font-family</span><span style='color:#808030; '>:</span>  <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Noto Sans Hebrew</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Noto Sans</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Roboto</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#074726; '>sans-serif</span><span style='color:#800080; '>;</span>  <span style='color:#800080; '>}</span>  <span style='color:#696969; '>/* English or Hebrew/English mixed-content.      */</span>
<span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>lang</span><span style='color:#800080; '>(</span><span style='color:#074726; '>he</span><span style='color:#800080; '>)</span>         <span style='color:#808030; '>,</span> <span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>lang</span>(he-IL)     <span style='color:#808030; '>,</span>  <span style='color:#800080; '>:</span><span style='color:#800000; font-weight:bold; '>lang</span><span style='color:#800080; '>(</span><span style='color:#074726; '>iw</span><span style='color:#800080; '>)</span>                                                                   <span style='color:#696969; '>/* When browser identify a Hebrew-only content.  */</span>
<span style='color:#808030; '>,</span><span style='color:#808030; '>[</span><span style='color:#074726; '>lang</span><span style='color:#808030; '>^=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>he</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>     <span style='color:#808030; '>,</span> <span style='color:#808030; '>[</span><span style='color:#074726; '>lang</span><span style='color:#808030; '>^=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>He</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>     <span style='color:#808030; '>,</span>  <span style='color:#808030; '>[</span><span style='color:#074726; '>lang</span><span style='color:#808030; '>^=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>iw</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>
<span style='color:#808030; '>,</span><span style='color:#808030; '>[</span><span style='color:#074726; '>language</span><span style='color:#808030; '>^=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>he</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>,</span> <span style='color:#808030; '>[</span><span style='color:#074726; '>language</span><span style='color:#808030; '>^=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>He</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span> <span style='color:#808030; '>,</span>  <span style='color:#808030; '>[</span><span style='color:#074726; '>language</span><span style='color:#808030; '>^=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>iw</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#800080; '>{</span>
                                           <span style='color:#bb7977; font-weight:bold; '>font-family</span><span style='color:#808030; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Noto Sans Hebrew</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Open Sans Hebrew</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Adobe Hebrew</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Tahoma</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Alef</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Noto Sans</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Roboto</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#074726; '>sans-serif</span><span style='color:#800080; '>;</span>  <span style='color:#800080; '>}</span>
<span style='color:#800000; font-weight:bold; '>pre</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>code</span><span style='color:#808030; '>,</span><span style='color:#800000; font-weight:bold; '>kbd</span><span style='color:#800080; '>{</span>                              <span style='color:#bb7977; font-weight:bold; '>font-family</span><span style='color:#808030; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Courier New</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>Noto Mono</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#074726; '>monospace</span><span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span>
</pre>

In this case the Hebrew content will always be shown using the provided glyphs found in the font-file, and the fallback will use if any of the letter-glyphs are missing, granted, not a perfect solution,
and Noto has so many variations:
<pre>
Noto Sans Armenian
Noto Sans Avestan
Noto Sans Balinese
Noto Sans Bamum
Noto Sans Batak
Noto Sans Bengali
Noto Sans Brahmi
Noto Sans Buginese
Noto Sans Buhid
Noto Sans Canadian Aboriginal
Noto Sans Carian
Noto Sans Cham
Noto Sans Cherokee
Noto Sans CJK JP
Noto Sans CJK KR
Noto Sans CJK SC
Noto Sans CJK TC
Noto Sans Coptic
Noto Sans Cuneiform
Noto Sans Cypriot
Noto Sans Deseret
Noto Sans Devanagari
Noto Sans Egyptian Hieroglyphs
Noto Sans Ethiopic
Noto Sans Georgian
Noto Sans Glagolitic
Noto Sans Gothic
Noto Sans Gujarati
Noto Sans Gurmukhi
Noto Sans Hanunoo
Noto Sans Hebrew
Noto Sans Imperial Aramaic
Noto Sans Inscriptional Pahlavi
Noto Sans Inscriptional Parthian
Noto Sans Javanese
Noto Sans JP
Noto Sans Kaithi
Noto Sans Kannada
Noto Sans Kayah Li
Noto Sans Kharoshthi
Noto Sans Khmer
Noto Sans KR
Noto Sans Lao
Noto Sans Lepcha
Noto Sans Limbu
Noto Sans Linear B
Noto Sans Lisu
Noto Sans Lycian
Noto Sans Lydian
Noto Sans Malayalam
Noto Sans Mandaic
Noto Sans Meetei Mayek
Noto Sans Mongolian
Noto Sans Myanmar
Noto Sans New Tai Lue
Noto Sans NKo
Noto Sans Ogham
Noto Sans Ol Chiki
Noto Sans Old
Noto Sans Old Persian
Noto Sans Old South Arabian
Noto Sans Old Turkic
Noto Sans Oriya
Noto Sans Osmanya
Noto Sans Phags Pa
Noto Sans Phoenician
Noto Sans Rejang
Noto Sans Runic
Noto Sans Samaritan
Noto Sans Saurashtra
Noto Sans SC
Noto Sans Shavian
Noto Sans Sinhala
Noto Sans Sundanese
Noto Sans Syloti Nagri
Noto Sans Symbols
Noto Sans Syriac Eastern
Noto Sans Syriac Estrangela
Noto Sans Syriac Western
Noto Sans Tagalog
Noto Sans Tagbanwa
Noto Sans Tai Le
Noto Sans Tai Tham
Noto Sans Tai Viet
Noto Sans Tamil
Noto Sans TC
Noto Sans Telugu
Noto Sans Thaana
Noto Sans Thai
Noto Sans Tibetan
Noto Sans Tifinagh
Noto Sans Ugaritic
Noto Sans Vai
Noto Sans Yi
</pre>

So by this logic you'll have to put all those variation in-front of the actual 'Noto Sans', to have a truly  multilingual mixed languages maybe you'll need to have something like this:
<pre>
html,input,textarea{
  font-family: 'Noto Sans Armenian', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Batak', 'Noto Sans Bengali', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Cham', 'Noto Sans Cherokee', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Deseret', 'Noto Sans Devanagari', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Ethiopic', 'Noto Sans Georgian', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Gujarati', 'Noto Sans Gurmukhi', 'Noto Sans Hanunoo', 'Noto Sans Hebrew', 'Noto Sans Imperial Aramaic', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans JP', 'Noto Sans Kaithi', 'Noto Sans Kannada', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer', 'Noto Sans KR', 'Noto Sans Lao', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Malayalam', 'Noto Sans Mandaic', 'Noto Sans Meetei Mayek', 'Noto Sans Mongolian', 'Noto Sans Myanmar', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old', 'Noto Sans Old Persian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Oriya', 'Noto Sans Osmanya', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans SC', 'Noto Sans Shavian', 'Noto Sans Sinhala', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Symbols', 'Noto Sans Syriac Eastern', 'Noto Sans Syriac Estrangela', 'Noto Sans Syriac Western', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Tai Viet', 'Noto Sans Tamil', 'Noto Sans TC', 'Noto Sans Telugu', 'Noto Sans Thaana', 'Noto Sans Thai', 'Noto Sans Tibetan', 'Noto Sans Tifinagh', 'Noto Sans Ugaritic', 'Noto Sans Vai', 'Noto Sans Yi', 'Noto Sans , sans-serif;
}  
</pre>

naturally I won't recommend it (other than to satisfy your inner-experimentalist-developer),
so this will probably suite you better:
<pre>
html,input,textarea{ font-family:  'Noto Sans Hebrew', 'Noto Sans', 'Roboto', sans-serif;  }
pre,code,kbd{        font-family: 'Courier New', 'Noto Mono', monospace;                   }
</pre>

or this:
<sub>(optionally unmark the Hebrew-only part if you want to be very specific/correct display in old browsers)</sub>
<pre>
html,input,textarea{  font-family:  'Noto Sans Hebrew', 'Noto Sans', 'Roboto', sans-serif;  }  /* English or Hebrew/English mixed-content.      */
pre,code,kbd{         font-family:  'Courier New', 'Noto Mono', monospace;                  }
/* Hebrew-only content. *//*
:lang(he),:lang(he-IL),:lang(iw),[lang^="he"],[lang^="He"],[lang^="iw"],[language^="he"],[language^="He"],[language^="iw"]{
                      font-family:  'Noto Sans Hebrew', 'Open Sans Hebrew', 'Adobe Hebrew', 'Tahoma', 'Alef', 'Noto Sans', 'Roboto', sans-serif;
}
*/                                           
</pre>
if you have any other mixed-content that isn't displayed correctly (Arabic, Russian, ...) just add its variation to the list, in-front of 'Noto Sans' one, and you should be fine.. :]

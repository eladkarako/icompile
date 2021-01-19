<pre><style>code{background-color:rgba(255,251,204,.6) !important;display:inline !important;padding: 2px 5px 3px 5px !important;margin: 1px 3px 1px 2px !important;}</style></pre>

One of the header being sent in a request done by standard (new-age) browsers is the <code>Accept-Language</code>, which derive from the definition of the languages-settings in the browser, its quite reliable, usually used to specify what your preferred language should be, in-case the target page support multi-lingual content,
its also used in Google-Translate, while browsing a language different from your own set.
<br/>

most common is the 'en', 'en-US' and 'en_US', those do not have actual difference, unless the user have installed a specific MUI of Windows, or a non-default versions of Chrome or Firefox, those <code>en*</code> "default" will be send.
<br/>

Both Firefox and Chrome (and Chrome based-on) browsers will also support regional/different language builds, which other then provide native-language front, will also alter the sent requests to specify that the currently used language is <strong>"more important"</strong> then the other (usually the <code>en</code> will still be sent).
the quality of "stronger" vs. "weaker" measured by the <strong><code>q=___</code></strong> added to each of the languages reported.

<br/>

for example my Google-Chrome browser, will send 'English' and also 'Hebrew':
<img src="https://icompile.eladkarako.com/_uploads/2014/07/2014-07-19_2312481.jpg" alt="2014-07-19_2312481" width="471" height="108" class="alignnone size-full wp-image-1566" />
<br/>
On Google Chrome, I've navigated to <code>chrome://settings/languages</code> page,
and set those values (in that order..)

<img style="width:100%;" src="https://icompile.eladkarako.com/_uploads/2014/07/2014-07-19_232957.jpg" alt="2014-07-19_232957" width="686" height="309" class="alignnone size-full wp-image-1562" />


As can be seen, the evaluation is same as in the request, the higher the number, the higher the priority.

<br/>

On client-side, many statistics-collecting products such as Google-Analytics will use the very same value (derived from browser's settings) by accessing <code>navigator.language</code> value <small>(or <code>window.navigator.userLanguage</code> on IE)</small>

On server-side PHP, do the same by accessing <code>$SERVER['HTTP_ACCEPT_LANGUAGE']</code> and parsing the string <small>for example:</small> <code>en,en-US;q=0.8,he;q=0.6</code> into something useful, probably an array that is ordered by the <code>q=</code> value,
<br/>
although as a rule-of-thumb this is not really necessary, since the standard is to send the first-used language first, simply cut out the first cell and return it.

<br/>

the following also provides a fallback.
<pre>
$languages_header = isset($_SERVER['HTTP_ACCEPT_LANGUAGE']) ? $_SERVER['HTTP_ACCEPT_LANGUAGE'] : 'en_US';
$languages_header = explode(',', $languages_header);
echo $languages_header[0]
</pre>

<br/>

I <strong>did</strong> made a small collection of supported languages, there is <strong>three</strong> formats that are being used as part of the <strong>i18n</strong> standard.
<ol>
<li>regional underscore - <code>en_US</code></li>
<li>regional hyphen - <code>en-US</code></li>
<li>non regional - <code>en</code> <small>(...Note that I've made those names.. so don't try Google it around..)</small>
</ol>

<br/>

the following list might come-in handy, since group [1] and [2] (regional) provided more information, the list is sorted a-z, in those 3 groups <small>(in the order above, first is regional underscore, regional hyphen then non regional)</small>

I'm using the PHP's array format..

<small><pre>
$languages_supported = array('af_ZA', 'ar_AE', 'ar_BH', 'ar_DZ', 'ar_EG', 'ar_IQ', 'ar_JO', 'ar_KW', 'ar_LB', 'ar_LY', 'ar_MA', 'ar_OM', 'ar_QA', 'ar_SA', 'ar_SY', 'ar_TN', 'ar_YE', 'az_AZ', 'az_IR', 'be_BY', 'bg_BG', 'bn_BD', 'bn_IN', 'bs_BA', 'ca_AD', 'ca_ES', 'ca_FR', 'ca_IT', 'cs_CZ', 'cy_GB', 'da_dk', 'da_DK', 'de_at', 'de_AT', 'de_ch', 'de_CH', 'de_de', 'de_DE', 'de_LI', 'de_LU', 'dv_MV', 'el_gr', 'el_GR', 'en_au', 'en_AU', 'en_BZ', 'en_ca', 'en_CA', 'en_CB', 'en_gb', 'en_GB', 'en_IE', 'en_in', 'en_JM', 'en_NZ', 'en_PH', 'en_sg', 'en_TT', 'en_us', 'en_US', 'en_ZA', 'en_ZW', 'es_419', 'es_ar', 'es_AR', 'es_BO', 'es_cl', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_es', 'es_ES', 'es_GT', 'es_HN', 'es_LA', 'es_mx', 'es_MX', 'es_NI', 'es_PA', 'es_pe', 'es_PE', 'es_PR', 'es_PY', 'es_SV', 'es_UY', 'es_VE', 'et_EE', 'eu_ES', 'fa_AF', 'fa_IR', 'fi_fi', 'fi_FI', 'fo_FO', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_fr', 'fr_FR', 'fr_FX', 'fr_LU', 'fr_MC', 'fy_NL', 'gl_ES', 'gu_IN', 'he_il', 'he_IL', 'hi_IN', 'hr_BA', 'hr_HR', 'hu_hu', 'hu_HU', 'hy_AM', 'id_ID', 'is_IS', 'it_CH', 'it_it', 'it_IT', 'ja_jp', 'ja_JP', 'jv_ID', 'ka_GE', 'kk_KZ', 'km_KH', 'kn_IN', 'ko_kr', 'ko_KR', 'kok_IN', 'ky_KG', 'lt_LT', 'lv_LV', 'mi_NZ', 'mk_MK', 'ml_IN', 'mn_MN', 'mr_IN', 'mr_MR', 'ms_BN', 'ms_MY', 'mt_MT', 'my_MM', 'nb_NO', 'nl_BE', 'nl_nl', 'nl_NL', 'nn_NO', 'no_NO', 'ns_ZA', 'pa_IN', 'pl_pl', 'pl_PL', 'ps_AR', 'pt_br', 'pt_BR', 'pt_pt', 'pt_PT', 'qu_BO', 'qu_EC', 'qu_PE', 'ro_RO', 'ru_ru', 'ru_RU', 'ru_UA', 'sa_IN', 'se_FI', 'se_NO', 'se_SE', 'si_LK', 'sk_SK', 'sl_SI', 'sq_AL', 'sr_BA', 'sr_SP', 'sr_YU', 'su_ID', 'sv_FI', 'sv_se', 'sv_SE', 'sw_KE', 'syr_SY', 'ta_IN', 'ta_LK', 'te_IN', 'th_th', 'th_TH', 'tl_PH', 'tn_ZA', 'to_ID', 'tr_tr', 'tr_TR', 'tt_RU', 'ug_CN', 'uk_UA', 'ur_PK', 'uz_UZ', 'vi_VI', 'vi_VN', 'xh_ZA', 'zh_cn', 'zh_CN', 'zh_hk', 'zh_HK', 'zh_MO', 'zh_SG', 'zh_tw', 'zh_TW', 'zu_ZA', 'af-ZA', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-OM', 'ar-QA', 'ar-SA', 'ar-SY', 'ar-TN', 'ar-YE', 'az-AZ', 'be-BY', 'bg-BG', 'bs-BA', 'ca-ES', 'cs-CZ', 'cy-GB', 'da-dk', 'da-DK', 'de-at', 'de-AT', 'de-ch', 'de-CH', 'de-de', 'de-DE', 'de-LI', 'de-LU', 'dv-MV', 'el-gr', 'el-GR', 'en-au', 'en-AU', 'en-BZ', 'en-ca', 'en-CA', 'en-CB', 'en-gb', 'en-GB', 'en-IE', 'en-in', 'en-JM', 'en-NZ', 'en-PH', 'en-sg', 'en-TT', 'en-us', 'en-US', 'en-ZA', 'en-ZW', 'es-419', 'es-ar', 'es-AR', 'es-BO', 'es-cl', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-es', 'es-ES', 'es-GT', 'es-HN', 'es-mx', 'es-MX', 'es-NI', 'es-PA', 'es-pe', 'es-PE', 'es-PR', 'es-PY', 'es-SV', 'es-UY', 'es-VE', 'et-EE', 'eu-ES', 'fa-IR', 'fi-fi', 'fi-FI', 'fo-FO', 'fr-BE', 'fr-CA', 'fr-CH', 'fr-fr', 'fr-FR', 'fr-LU', 'fr-MC', 'gl-ES', 'gu-IN', 'he-il', 'he-IL', 'hi-IN', 'hr-BA', 'hr-HR', 'hu-hu', 'hu-HU', 'hy-AM', 'id-ID', 'is-IS', 'it-CH', 'it-it', 'it-IT', 'ja-jp', 'ja-JP', 'ka-GE', 'kk-KZ', 'kn-IN', 'kok-IN', 'ko-kr', 'ko-KR', 'ky-KG', 'lt-LT', 'lv-LV', 'mi-NZ', 'mk-MK', 'mn-MN', 'mr-IN', 'ms-BN', 'ms-MY', 'mt-MT', 'nb-NO', 'nl-BE', 'nl-nl', 'nl-NL', 'nn-NO', 'ns-ZA', 'pa-IN', 'pl-pl', 'pl-PL', 'ps-AR', 'pt-br', 'pt-BR', 'pt-pt', 'pt-PT', 'qu-BO', 'qu-EC', 'qu-PE', 'ro-RO', 'ru-ru', 'ru-RU', 'sa-IN', 'se-FI', 'se-NO', 'se-SE', 'sk-SK', 'sl-SI', 'sq-AL', 'sr-BA', 'sr-SP', 'sv-FI', 'sv-se', 'sv-SE', 'sw-KE', 'syr-SY', 'ta-IN', 'te-IN', 'th-th', 'th-TH', 'tl-PH', 'tn-ZA', 'tr-tr', 'tr-TR', 'tt-RU', 'uk-UA', 'ur-PK', 'uz-UZ', 'vi-VN', 'xh-ZA', 'zh-cn', 'zh-CN', 'zh-hk', 'zh-HK', 'zh-MO', 'zh-SG', 'zh-tw', 'zh-TW', 'zu-ZA', 'ab', 'af', 'am', 'an', 'ang', 'ar', 'as', 'ast', 'ay', 'az', 'be', 'bem', 'bg', 'bi', 'bn', 'bo', 'br', 'bs', 'byn', 'ca', 'co', 'crh', 'cs', 'csb', 'cv', 'cy', 'cz', 'da', 'de', 'dk', 'dv', 'dz', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fil', 'fo', 'fr', 'frp', 'fur', 'fy', 'ga', 'gd', 'gez', 'gl', 'gn', 'gu', 'gv', 'ha', 'he', 'hi', 'hne', 'hr', 'ht', 'hu', 'hy', 'ia', 'id', 'ig', 'io', 'is', 'it', 'ja', 'jv', 'ka', 'kab', 'kk', 'km', 'kn', 'ko', 'kok', 'ks', 'ku', 'kw', 'ky', 'la', 'lb', 'lg', 'li', 'ln', 'lo', 'lt', 'lv', 'mai', 'mg', 'mi', 'mk', 'ml', 'mn', 'mr', 'ms', 'mt', 'mus', 'my', 'na', 'nb', 'nds', 'ne', 'new', 'ng', 'nl', 'nn', 'no', 'nr', 'ns', 'nso', 'oc', 'or', 'os', 'pa', 'pl', 'pms', 'ps', 'pt', 'qu', 'rm', 'ro', 'ru', 'rw', 'sa', 'sc', 'sd', 'se', 'si', 'sk', 'sl', 'sm', 'so', 'sp', 'sq', 'sr', 'st', 'su', 'sv', 'sw', 'syr', 'ta', 'te', 'tg', 'th', 'ti', 'tig', 'tk', 'tl', 'tlh', 'tn', 'to', 'tr', 'ts', 'tt', 'ug', 'uk', 'ur', 'uz', 've', 'vi', 'wa', 'wal', 'wo', 'xh', 'yi', 'yo', 'zh', 'zu');
</pre></small>



Just in-case we would like to break the <code>Accept-Language</code> string, I've wrote a nice way of doing it..
<pre>
$all_languages_eval = array();

foreach($languages_header as $language_header){
  $language_name = preg_replace('/([^;]+);.*$/', '${1}', $language_header); //extract actuall language string

  $language_significance = preg_replace('/^[^q]*q=([^\\,]+)*$/', '${1}', $language_header);      //extract evaluation as string
  $language_significance = is_numeric($language_significance) ? floatval($language_significance) : 1.0; //parse evaluation, if no q=__ (first language is like "1"), then we will use 1.0

  $all_languages_eval[ $language_name ] = $language_significance;
}

array_multisort($all_languages_eval, SORT_DESC , SORT_NATURAL);//SORT_DESC: higher-value is on top (vs. SORT_ASC).

var_dump($all_languages_eval);
</pre>

languages without value specification are (by definition) have q=1 (and usually put ahead as the main language to be using).
<br/>

you'll be parsing the string into an associative array using 'language string' as key, and its proper float-significance as value, then its a matter of applying some <code>array_multisort</code> with <code>SORT_DESC</code> flag to really make usage of the fact we've parsed so much...
<strong>But Heck! You Can't Put A Price-Tag On Accuracy!!</strong><small> (well.. actually.. you really can.. nevermind..)</small>

well.. our example from before: <code>en,en-US;q=0.8,he;q=0.6</code> will be show this output:
<img src="https://icompile.eladkarako.com/_uploads/2014/07/2014-07-20_003053.jpg" alt="2014-07-20_003053" width="414" height="166" class="alignnone size-full wp-image-1571" />

<br/>
naturally you may take the first element's key name, which is the "higher" value language, which you should be using to determine the user's language.

<br/>

to get back just the array of languages ordered by most significant to least <code>$arr = array_keys($all_languages_eval);</code> <small>will output en,en-US,he</small>, for just the string of the first one <code>array_keys($all_languages_eval)[0]</code> its OK to address specific cell since we've got fallback to "en", <small>which is also the native result: en</small>
', 'PHP Snippet - Accept-Language HTTP header, Browser Settings
<blockquote>
There are plenty of "Bad-Buyers" websites,
for sellers to be adding to their "ignore list",
but not much of (if any) "bad seller" lists,

<hr/>

From time to time you hear of a seller that sends partial-delivery,
Or even avoid sending anything at all (especially if you place a very small order),
After two or three months when you'll send them a message,
They will act *all "surprised"* and if you are lucky you might get your money back,
that is, if they will bothered to answer you at all, 
and it wasn't too long until you've opened a case with either eBay/PayPal.

why wouldn't you just avoid that scenario at all?
apparently my other article <em><a href="https://icompile.eladkarako.com/crowd-wisdom-ebay-enhancements/" target="_blank">JavaScript Ninja – Crowd Wisdom eBay Enhancements</a></em> was so popular, that I've actually got address by few of my blog-readers,
sharing some 'horror'-stories about recent purchases,
We've had a new idea:

<strong>A seller blacklist</strong>
</blockquote>

<!--more-->
<hr/>

<strong>Nasty s.o.b sellers list:</strong>
<pre>
1stangeleyes
5starsvipstore
7-39158
12deeping
47st.photo
51buyworld
168come
av-rf
babastoreong
beautyzz2009
benjeans2015
bessky_store
best4noone
bib-queen
bitb99
boss7321
btlife
buyincoins_au
cagoqra
cherrystore2012
clickkey
craftmentools
cskwin2015
elec-mall
elgb16
fashion-trench
fashionwomensale
flyingtiger0104
fmdinis
gelivable.2u
good4deal999
gracefulvara
green-the-world
guoqca0
haoadp123
happygreenshopteam
happyness8966
healthnbeautyexpress
herminidixo0
horse3109
iluckydog
incellworldukltd
jinbostore
jinshan2013
kingsing6688
koala-bear-au 
lovelyhome2015
mhestore2009
misszhou2013
misszt1983
my_dream1960
nihaomayun
olyhome
onedot1
onsalezone2012
past-prices
phoenix1900
roseforyou_nice
sale4women
service2worldwide
shuli8882012
smartphonestation
sseariver2009
starsmile5
stungun112
sunnyshop06
tiger.vzu
tinaforyou
toquedarte
traveleroutdoor
vovotrade_top
wholesaleuk
yur1924
zysysy2012
</pre>

<blockquote>
apparently you <strong>CAN block</strong> sellers, but it requires some accessing to eBay advance-search,
any copy-pasting a long-list of bad-sellers with an "exclude" category. Too complex for everyday use.
</blockquote>

<strong>Here comes the JavaScript Magic :]</strong>
 
<pre>
javascript:(function(window, document, search_for, ignore_from, search_url, blacklist_sellers) {
  if("" === search_for || null === search_for) return undefined;                  /* no query - quit */
  ignore_from = ("" === ignore_from || null === ignore_from) ? "" : ignore_from;  /* normalize input */
  
  /* clear up tab's content first */
  window.stop(), document.execCommand("Stop"), document.clear(), document.close(), document.open(), document.close();
  
  blacklist_sellers = encodeURIComponent( blacklist_sellers.join(",") );
  search_for        = encodeURIComponent(search_for);
  ignore_from       = encodeURIComponent(ignore_from);
  search_url        = search_url.replace("##BLACKLIST_SELLERS##", blacklist_sellers)
                                .replace("##SEARCH_FOR##",        search_for)
                                .replace("##IGNORE_FROM##",       ignore_from)
                                ;
  /* apply URL change */
  window.location.assign(search_url)

}(
  top
,
  top.document
,
  prompt("Search For..", "good")
,
  prompt("Ignore From\
(for 2 or more use a comma)", "bad,ugly")
,
  "http://www.ebay.com/sch/i.html?_in_kw=1&_sacat=0&_udlo=&_udhi=&LH_BIN=1&LH_ItemCondition=3&_ftrt=901&_ftrv=1&_sabdlo=&_sabdhi=&_samilow=&_samihi=&_stpos=&_sargn=-1%26saslc%3D1&_salic=1&_fss=1&_fsradio=%26LH_SpecificSeller%3D1&_saslop=2&_sop=12&_dmd=1&_sadis=15&_ipg=200&_sasl=##BLACKLIST_SELLERS##&_nkw=##SEARCH_FOR##&_ex_kw=##IGNORE_FROM##"
,
["1stangeleyes"
,"5starsvipstore"
,"7-39158"
,"12deeping"
,"47st.photo"
,"51buyworld"
,"168come"
,"av-rf"
,"babastoreong"
,"beautyzz2009"
,"benjeans2015"
,"bessky_store"
,"best4noone"
,"bib-queen"
,"bitb99"
,"boss7321"
,"btlife"
,"buyincoins_au"
,"cagoqra"
,"cherrystore2012"
,"clickkey"
,"craftmentools"
,"cskwin2015"
,"elec-mall"
,"elgb16"
,"fashion-trench"
,"fashionwomensale"
,"flyingtiger0104"
,"fmdinis"
,"gelivable.2u"
,"good4deal999"
,"gracefulvara"
,"green-the-world"
,"guoqca0"
,"haoadp123"
,"happygreenshopteam"
,"happyness8966"
,"healthnbeautyexpress"
,"herminidixo0"
,"horse3109"
,"iluckydog"
,"incellworldukltd"
,"jinbostore"
,"jinshan2013"
,"kingsing6688"
,"koala-bear-au "
,"lovelyhome2015"
,"mhestore2009"
,"misszhou2013"
,"misszt1983"
,"my_dream1960"
,"nihaomayun"
,"olyhome"
,"onedot1"
,"onsalezone2012"
,"past-prices"
,"phoenix1900"
,"roseforyou_nice"
,"sale4women"
,"service2worldwide"
,"shuli8882012"
,"smartphonestation"
,"sseariver2009"
,"starsmile5"
,"stungun112"
,"sunnyshop06"
,"tiger.vzu"
,"tinaforyou"
,"toquedarte"
,"traveleroutdoor"
,"vovotrade_top"
,"wholesaleuk"
,"yur1924"
,"zysysy2012"
]
));
</pre>

and- a bookmarklet version that you can made into a clickable button,

<pre>
javascript:(function(window,document,search_for,ignore_from,search_url,blacklist_sellers){if(""===search_for||null===search_for)return undefined;ignore_from=""===ignore_from||null===ignore_from?"":ignore_from;window.stop(),document.execCommand("Stop"),document.clear(),document.close(),document.open(),document.close();blacklist_sellers=encodeURIComponent(blacklist_sellers.join(","));search_for=encodeURIComponent(search_for);ignore_from=encodeURIComponent(ignore_from);search_url=search_url.replace("##BLACKLIST_SELLERS##",blacklist_sellers).replace("##SEARCH_FOR##",search_for).replace("##IGNORE_FROM##",ignore_from);window.location.assign(search_url)}(top,top.document,prompt("Search For..","good"),prompt("Ignore From\
(for 2 or more use a comma)","bad,ugly"),"http://www.ebay.com/sch/i.html?_in_kw=1&_sacat=0&_udlo=&_udhi=&LH_BIN=1&LH_ItemCondition=3&_ftrt=901&_ftrv=1&_sabdlo=&_sabdhi=&_samilow=&_samihi=&_stpos=&_sargn=-1%26saslc%3D1&_salic=1&_fss=1&_fsradio=%26LH_SpecificSeller%3D1&_saslop=2&_sop=12&_dmd=1&_sadis=15&_ipg=200&_sasl=##BLACKLIST_SELLERS##&_nkw=##SEARCH_FOR##&_ex_kw=##IGNORE_FROM##",["1stangeleyes","5starsvipstore","7-39158","12deeping","47st.photo","51buyworld","168come","av-rf","babastoreong","beautyzz2009","benjeans2015","bessky_store","best4noone","bib-queen","bitb99","boss7321","btlife","buyincoins_au","cagoqra","cherrystore2012","clickkey","craftmentools","cskwin2015","elec-mall","elgb16","fashion-trench","fashionwomensale","flyingtiger0104","fmdinis","gelivable.2u","good4deal999","gracefulvara","green-the-world","guoqca0","haoadp123","happygreenshopteam","happyness8966","healthnbeautyexpress","herminidixo0","horse3109","iluckydog","incellworldukltd","jinbostore","jinshan2013","kingsing6688","koala-bear-au ","lovelyhome2015","mhestore2009","misszhou2013","misszt1983","my_dream1960","nihaomayun","olyhome","onedot1","onsalezone2012","past-prices","phoenix1900","roseforyou_nice","sale4women","service2worldwide","shuli8882012","smartphonestation","sseariver2009","starsmile5","stungun112","sunnyshop06","tiger.vzu","tinaforyou","toquedarte","traveleroutdoor","vovotrade_top","wholesaleuk","yur1924","zysysy2012"]));
</pre>


What it does?
- asks you for your search term,
- asks you for "ignore from" - words (you can include infinite amount of phrases, separated by comma)

the script above combines a list of <strong>bad sellers</strong> with your entered data,
and execute a search, instead of you, entering the whole thing by hand.

<em><strong>Hope it help :]</strong></em>

<hr/>

You may also find it useful to add those to the buyer block-list:
<a href="http://offer.ebay.com/ws/eBayISAPI.dll?BidderBlockLogin">http://offer.ebay.com/ws/eBayISAPI.dll?BidderBlockLogin</a>
it is comma-separated (no space and no new-line needed), and you can maintain total of up until 5,000 entries..

"use strict";


const  FS                 = require("fs")
      ,PATH               = require("path")
      ,URL                = require("url")
      ,BEAUTIFY           = function(text){ return JSON.stringify(text, null, 2).replace(/\r/gm,"").replace(/,\n /g, "\r\n ,").replace(/ *(,( +))/g,"$2,"); }
      ,NATURAL_COMPARE    = function(a,b){var ax=[],bx=[];NATURAL_COMPARE.modifier=NATURAL_COMPARE.modifier||function(x){return x};a=NATURAL_COMPARE.modifier(a);b=NATURAL_COMPARE.modifier(b);a=String(a);b=String(b);a.replace(/(\d+)|(\D+)/g,function(_,$1,$2){ax.push([$1||Infinity,$2||""])});b.replace(/(\d+)|(\D+)/g,function(_,$1,$2){bx.push([$1||Infinity,$2||""])});while(ax.length&&bx.length){var an,bn,nn;an=ax.shift();bn=bx.shift();nn=an[0]-bn[0]||an[1].localeCompare(bn[1]);if(0!==nn)return nn}return ax.length-bx.length}
      ,RESOLVE            = function(path){ //normalize to Unix-slash (will work on Windows too).
                             path = path.replace(/\"/g,"").replace(/[\\\/]+/g,"/");
                             path = PATH.resolve(path).replace(/\\+/g,"/").replace(/\\+$/g,""); 
                             return path;
                            }
      ,FOLDER_ROOT        = RESOLVE(process.cwd() + "/../")
      ,set_time_exe       = RESOLVE(FOLDER_ROOT + "/_resources/set_time/set_time.exe")
      ,exec_file          = require("child_process").execFile //.execFileSync //run in async (background might still run...)

      ,TEMPLATE_ARTICLE   = FS.readFileSync(RESOLVE(FOLDER_ROOT + "/_resources/template_article.html"),{encoding:"utf8"}).replace(/\r/gm, "").replace(/\n/gm, "\r\n")
      ,TEMPLATE_PAGE      = FS.readFileSync(RESOLVE(FOLDER_ROOT + "/_resources/template_page.html"),   {encoding:"utf8"}).replace(/\r/gm, "").replace(/\n/gm, "\r\n")
      ,DATE_TO_ID         = function(date){return String(date.getTime()).split("").reverse().join("");}                        //reversing the timestamp string is still unique (to the timestamp) and visually looks a result with more entropy.
      ,TEXT_TO_DATE_UTC   = function(text){   //consider input UTC===GMT+0 Zulu timezone.
                              var date;
                              text = text.replace(/[\:\-\ ]/g, ",").split(",").map(function(s){return Number(s);});
                              text[1] = text[1] - 1;  //fix month?
                              
                              date = new Date(Date.UTC.apply(null, text));
                              return date;
                            }
      ,TEXT_PROTECT       = function(s){return "###PRETECTED_START###" + Buffer.from(s, "UTF-8").toString("base64") + "###PRETECTED_END###";}
      ,TEXT_RESTORE       = function(s){
                              s = s.replace("###PRETECTED_START###", "").replace("###PRETECTED_END###", "");
                              return Buffer.from(s, "base64").toString("UTF-8");
                            }
      ,KEYWORDS_DEFAULT   = ["eladkarako", "eladkarakomod", "icompile", "Elad Karako", "Karako Elad", "אלעד קרקו", "קרקו אלעד", "קרקו"]
      ;

var    ARTICLES           = FS.readdirSync(FOLDER_ROOT, {encoding:"utf8"})
                              .filter(function(path){return (false === /^(\.|_)/i.test(path)); })    //ignore some files and folders.  .git, _resources, _uploads  starts with '.' or '_' .
                              .filter(function(path){                                                           //keep only folders ("article-containers")
                                 var path_full = RESOLVE(FOLDER_ROOT + "/" + path);
                                 return true === FS.lstatSync(path_full).isDirectory()
                               })
                              .map(function(path){  //parse basic date and text content into an object.
                                var path_full = RESOLVE(FOLDER_ROOT + "/" + path)
                                   ,article   = JSON.parse(  FS.readFileSync(path_full + "/_data.json",{encoding:"utf8"})  )
                                   ;
                                article.path_full                = path_full;
                                article.post_content             = FS.readFileSync(path_full + "/README.md",{encoding:"utf8"});   //full-content of the README.md
                                article.post_date_parsed_utc     = TEXT_TO_DATE_UTC( article.post_date_gmt     );
                                article.post_modified_parsed_utc = TEXT_TO_DATE_UTC( article.post_modified_gmt );
                                article.ID                       = DATE_TO_ID(article.post_date_parsed_utc);  //override any existing ID, with the 'created-timestamp' date (with slight manipulation to visually look like it has more-entropy).
                                return article;
                              })
      ,latest_article
      ;


//------------------------------------------------------------------------------------


//re-arrange articles by their creation-date (birth-date).
NATURAL_COMPARE.modifier = function(article){
//return article.post_date_parsed_utc.getTime();
  return article.post_modified_parsed_utc.getTime();
}
ARTICLES = ARTICLES.sort(NATURAL_COMPARE);
NATURAL_COMPARE.modifier = undefined; //cleanup


//------------------------------------------------------------------------------------


latest_article = ARTICLES[ ARTICLES.length - 1 ];


//------------------------------------------------------------------------------------


//(re)apply creation(birth) and modification dates to folder for easier sorting in the operation-system, optional and does not effect the JavaScript-code at all.
ARTICLES.forEach(function(article){
  var btime = article.post_date_parsed_utc.getTime()             //time: created (birth time)
     ,mtime = article.post_modified_parsed_utc.getTime()         //time: last-modified 
   //,atime
     ; 

  btime = (btime / 1000).toFixed(0);    //convert javascript datetime to unix-datetime, and string.
  mtime = (mtime / 1000).toFixed(0);    //convert javascript datetime to unix-datetime, and string.
  
  exec_file(set_time_exe
          ,["--target"                 , article.path_full
           ,"--set-time-creation"      , btime
           ,"--set-time-last-modified" , mtime
         //,"--verbose"
          ]
          ,{"timeout"      : 10 * 1000
         //,"encoding"    : "utf8"
           ,"windowsHide" : true
           ,"shell"       : false
           }
          );
});


//------------------------------------------------------------------------------------


//content fixing - normalize to standard '"
ARTICLES.map(function(article){
  article.post_content = article.post_content
                                .replace(/[،、]/gm, ",")
                                .replace(/[‘’‛′׳`´]+/gm, "'")
                                .replace(/[“”″‴〃״]+/gm, '"')
                                ;
                               //normalize newline-feed to <br/>
/*
  article.post_content = article.post_content
                                .replace(/\r/gm, "")
                                .replace(/\n/gm, "\r\n")  //used to be "<br/>\r\n" but it kept modifying PRE containers, which is not good... this way I need to make sure the README.md has the proper <br/>-marks (if needed) --- for now simply show as is.
                                ;
*/

  //add <br/> before new-line characters, but first protect element which their internal-content should not be changed (PRE,STYLE,SCRIPT,TEXTAREA), after the adding of '<br/>', the protected-unmodified-content is restored to where it has been in the text.
  article.post_content = article.post_content //adds <br/> without modifying PRE, SCRIPT, STYLE, TEXTAREA, IFRAME internal-content by first "backing them up" and then "restoring them".
                                //-----------------------------------------------------------------------flaten
                                .replace(/\r+/gm,"").replace(/\n/g,"####N####") //flaten the content to make the following regex-expressions work.
                                
                                //-----------------------------------------------------------------------protect
                                .replace(/\<pre[^\<]+\<\/pre\>/mgi                          , TEXT_PROTECT)
                                .replace(/\<style[^\<]+\<\/style\>/mgi                      , TEXT_PROTECT)
                                .replace(/\<script[^\<]+\<\/script\>/mgi                    , TEXT_PROTECT)
                                .replace(/\<textarea[^\<]+\<\/textarea\>/mgi                , TEXT_PROTECT)
                                .replace(/\<iframe[^\<]+\<\/iframe\>/mgi                    , TEXT_PROTECT)

                                //-----------------------------------------------------------------------unflaten just the unprotected text to add <br/>
                                .replace(/####N####/gm, "\r\n")                           
                                //-----------------------------------------------------------------------modify
                                .replace(/\r\n/gm, "<br/>\r\n")         //add '<br/>' before each new-line.
                                .replace(/\<br\/\>\<br\/\>/gm, "<br/>") //fix for articles already having '<br/>'.
                                //-----------------------------------------------------------------------restore
                                .replace(/###PRETECTED_START###[^\#]+###PRETECTED_END###/gm , TEXT_RESTORE)

                                //-----------------------------------------------------------------------unflaten protected text with simply EOL characters but no <br/>
                                .replace(/####N####/gm, "\r\n")                           
                                ;


  //adding browser-native lazy-loading for IMG and IFRAME-elements. not that I care about net-traffic, this website is static, it is served by GitHub-CDN that can deal with that, this is just good-practice to reduce memory-consumption (RAM) on mobile-devices. I don't use JavaScript for custom-lazyloading solution it makes the page sluggish.  https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
  article.post_content = article.post_content
                                .replace(/\<img/mgi,    '<img loading="lazy" lazyload="on" ')
                                .replace(/\<iframe/mgi, '<iframe loading="lazy" lazyload="on" ')
                                ;


  return article;
});


//------------------------------------------------------------------------------------


//generate (and store in article-object) a 'scrape' which is a cut-section of the full article, the end-part was marked by markers by the author of the article at the point he/she thought it's a good idea to cut the article. 
ARTICLES.map(function(article){
  article.post_content_scrape  =  article.post_content.substr(0, article.post_content.indexOf('<span id=\"more-') )
                               || article.post_content.substr(0, article.post_content.indexOf('<!--more')         )
                               || article.post_content.substr(0, article.post_content.indexOf('<!--MORE')         )
                               || article.post_content.substr(0, article.post_content.indexOf('<!-- more')        )
                               || article.post_content.substr(0, article.post_content.indexOf('<!-- MORE')        )
                               || ""
                               ;
  return article;
});


//------------------------------------------------------------------------------------


ARTICLES.forEach(function(article){ //generate keywords based on article content and title, and constants.
  article.keywords = (article.post_title + " " + article.post_content)
                     .replace(/[\r\n]+/gm," ")       //one-line
                     .replace(/[\r\n]+/g, " ")       //one-line
                     .replace(/loading\=\"lazy\"/g, " ")  //HTML purge - special case
                     .replace(/lazyload\=\"on\"/g, " ")   //HTML purge - special case
                     .replace(/[^a-zא-ת]+/igm," ")   //keep only letters.
                     .toLowerCase()
                     .trim()
                     .replace(/\s+/g, ",")                             //whitespace to comma.
                     .split(",")
                     .reduce(function(carry, current, index, array){   //unique keywords
                       carry[current] = "";
                       return (array.length === index + 1) ? Object.keys(carry) : carry;
                     },{})
                     .filter(function(s){return s.length > 3})         //keep long words (4+ chars).
                     .filter(function(s){return s.length < 12})        //ignore too long words (9+ chars).
                     /*
                     */
                     .filter(function(s){                              //ignore some words
                       return (-1 === ["a","able","about","above","absolute","absolutely","according","accordingly","across","actual","actually","added","additio","addition","additional","additionally","adjacent","admitted","admittedly","after","afterwards","aga","agai","again","against","ai","ain","albeit","aligncenter","alignleft","alignright","all","allow","allows","almost","alone","along","alongside","already","also","alternative","alternatively","although","altogether","always","am","amid","among","amongst","an","analysis","and","another","any","anybody","anyhow","anyone","anything","anyway","anyways","anywhere","apart","appear","appreciate","appropriate","are","aren","around","as","aside","ask","asking","associat","associated","at","attentio","attention","autoplay","available","away","awful","awfully","background","balance","be","became","because","become","becomes","becoming","bee","been","before","beforehand","beg","begi","begin","behind","being","believe","below","benea","beneath","beside","besides","best","better","betwee","between","beyond","blockquote","bo","body","both","brief","but","by","c","ca","came","can","cannot","cant","case","cause","causes","center","certa","certai","certain","certainly","changes","characters","charset","chief","chiefly","circumstances","clarify","class","clear","clearly","closing","co","com","come","comes","comparative","comparatively","compare","compariso","comparison","compelling","concerning","conclude","conclusio","conclusion","conditio","condition","consequence","consequent","consequently","consider","considered","considering","conta","contai","contain","containing","contains","contrary","contrast","converse","conversely","corresponding","correspondingly","could","couldn","coupl","coupled","course","current","currently","d","de","definite","definitely","delay","demonstrate","describ","described","despite","detail","did","didn","different","differently","differing","distance","div","do","does","doesn","doing","don","done","doubt","dow","down","downwards","due","during","e","each","edu","effect","eg","eigh","eight","eighteen","eighteenth","eighth","eightie","eightieth","eighty","either","eleven","eleventh","else","elsewhere","embed","emphasize","empty","en","encrypted","end","enough","entire","entirely","enumerate","equal","equally","especial","especially","essence","et","etc","eve","even","event","eventual","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","ex","exact","exactly","example","except","expla","explai","explain","explicit","explicitly","express","expressly","fact","far","fashio","fashion","fear","few","fif","fifteen","fifteenth","fifth","fifths","fiftie","fiftieth","fifty","final","finally","first","firstly","five","follow","followed","following","follows","for","foreground","foremost","former","formerly","forth","forthwi","forthwith","fortie","fortieth","forty","four","fourteen","fourteenth","fourth","fourths","frameborder","frequent","frequently","from","front","full","further","furthermore","general","generally","get","gets","getting","give","given","gives","go","goes","going","gone","got","gotte","gotten","grant","granted","greetings","gyroscope","had","hadn","half","hand","happens","happy","hard","hardly","has","hasn","have","haven","having","he","head","height","hello","help","hence","hencefor","henceforth","her","here","hereafter","hereby","herei","herein","hereupo","hereupon","hers","herself","hi","him","himself","his","hither","hope","hopeful","hopefully","how","howbeit","however","href","http","https","hundred","hundredth","hundredths","i","identical","identically","ie","if","iframe","ignor","ignored","illustratio","illustration","immediate","immediately","important","importantly","in","inasmuch","inc","including","inde","indeed","indicat","indicate","indicated","indicates","inner","insofar","instance","instant","instantly","instead","intentio","intention","into","inward","is","isn","it","its","itself","just","keep","keeps","kept","key","know","known","knows","la","large","last","lastly","late","lately","later","latter","latterly","lazy","lazyload","least","left","less","lest","let","light","lik","like","liked","likely","likewise","link","little","ll","load","loading","long","look","looking","looks","ltd","m","ma","mai","main","mainly","manner","many","marginheight","marginwidth","marked","markedly","matter","may","maybe","me","mea","mean","means","meantime","meanwhile","mentio","mention","mere","merely","middle","might","million","millionth","mind","mo","moment","mon","more","moreover","most","mostly","much","must","my","myself","name","namely","nd","ne","near","nearby","nearly","necessary","need","needs","negative","neither","never","nevertheless","new","next","nin","nine","nineteen","nineteenth","ninetie","ninetieth","ninety","ninth","no","nobody","nocookie","non","none","nonetheless","noone","nor","normal","normally","not","notab","notably","noted","nothing","notwithstanding","novel","now","nowhere","nutshell","o","obvious","obviously","occasional","occasionally","of","off","ofte","often","oh","ok","okay","old","on","once","one","ones","only","onto","opposite","or","order","ordinari","ordinarily","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","overlook","overlooked","ow","owing","own","part","particular","particularly","per","perhaps","plac","place","placed","please","plus","point","points","positive","positively","possible","practice","pre","present","presently","presumab","presumably","previous","previously","prior","probab","probably","proof","provid","provided","provides","purpose","put","quarter","quarters","que","quick","quickly","quite","qv","rather","rd","re","real","reality","realize","really","reaso","reason","reasonab","reasonably","regarding","regardless","regards","relative","relatively","remember","remembered","repeat","respective","respectively","result","right","ru","run","s","sad","said","same","saw","say","saying","says","second","secondly","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sensible","sent","serious","seriously","seve","seven","seventeen","seventeenth","seventh","seventie","seventieth","seventy","several","shall","she","short","shortly","should","shouldn","show","shown","side","significant","significantly","similar","similarly","since","six","sixteen","sixteenth","sixth","sixths","sixtie","sixtieth","sixty","so","some","somebody","somehow","someone","something","sometime","sometimes","somewhat","somewhere","soo","soon","sooner","sorry","span","speaking","specifi","specifical","specifically","specified","specify","specifying","spite","src","st","still","straightaway","string","style","sub","subsequent","subsequently","such","sudde","sudden","suddenly","sum","summarise","summarize","summary","sup","sure","surely","surprising","surprisingly","t","take","taken","tell","ten","tends","tenth","tenths","text","th","tha","than","thank","thanks","thanx","that","thats","the","their","theirs","them","themselves","then","thence","theory","there","thereafter","thereby","therefore","therei","therein","theres","thereupo","thereupon","these","they","thing","things","think","third","thirdly","thirds","thirteen","thirteenth","thirtie","thirtieth","thirty","this","thorough","thoroughly","those","though","thousand","thousandth","three","through","throughout","thru","thus","till","time","to","together","toke","token","too","took","toward","towards","tri","tried","tries","tru","true","truly","try","trying","twelf","twelfth","twelve","twentie","twentieth","twenty","twice","two","u","ultimate","ultimately","un","und","under","undoubted","undoubtedly","unfortunate","unfortunately","unique","uniquely","unless","unlike","unlikely","unquestionab","unquestionably","until","unto","up","uploads","upo","upon","us","use","used","useful","uses","using","usual","usually","value","values","various","ve","very","via","view","viz","vs","want","wants","was","wasn","watch","way","we","welcome","well","went","were","weren","what","whatever","whe","when","whence","whenever","where","whereafter","whereas","whereby","wherei","wherein","whereupo","whereupon","wherever","whether","which","while","whither","who","whoever","whole","whom","whose","why","wi","width","will","willing","wish","with","withi","within","without","wo","won","wonder","word","words","would","wouldn","www","yes","yet","you","your","yours","yourself","yourselves","zero"].indexOf(s))
                     })
                     .filter(function(s){                              //those will be added later, but they might be extracted if they were in the article, so in here we're going to remove them.
                       return (-1 === KEYWORDS_DEFAULT.indexOf(s))
                     })
                     .sort(NATURAL_COMPARE)                            //make list a-z sorted naturally.
                     ;
    
});



//------------------------------------------------------------------------------------



ARTICLES.forEach(function(article, index){ //generate article README.md (simplified index.html ...) and index.html (with head)
  var index_first     = 0
     ,index_previous  = (index - 1 + ARTICLES.length) % ARTICLES.length
     ,index_next      = (index + 1) % ARTICLES.length
     ,index_last      = ARTICLES.length - 1
     ,html = TEMPLATE_PAGE
              .replace(/###ARTICLES###/gm              , TEMPLATE_ARTICLE)    //join templates.
              .replace(/###CONTENT###/                 , article.post_content)
              .replace(/###ID###/gm                    , article.ID)
              .replace(/###TITLE###/gm                 , article.post_title)
              .replace(/###MODIFIED###/gm              , article.post_modified_parsed_utc.toISOString().replace(/\.000Z/, "+00:00"))
              .replace(/###MODIFIED_FORMATTED###/gm    , article.post_modified_parsed_utc.toUTCString())
              .replace(/###KEYWORDS###/gm              , article.keywords.concat(KEYWORDS_DEFAULT).join(","))
              .replace(/###URL###/gm                   , "https://icompile.eladkarako.com/" + article.post_name)
              .replace(/###CREATED###/gm               , article.post_date_parsed_utc.toISOString().replace(/\.000Z/, "+00:00"))

              .replace(/###FIRST###/gm                 , "https://icompile.eladkarako.com/" + ARTICLES[index_first].post_name)
              .replace(/###PREVIOUS###/gm              , "https://icompile.eladkarako.com/" + ARTICLES[index_previous].post_name)
              .replace(/###NEXT###/gm                  , "https://icompile.eladkarako.com/" + ARTICLES[index_next].post_name)
              .replace(/###LAST###/gm                  , "https://icompile.eladkarako.com/" + ARTICLES[index_last].post_name)
     ;

  //get next articles (loop if it gets the end of the list) (-- previously 'recommanded/related articles')
  var NEXTARTICLES_TEMPLATE   = '<tr><td><a itemprop="relatedLink" href="###HREF1###">###TITLE1###</a></td><td><a itemprop="relatedLink" href="###HREF2###">###TITLE2###</a></td></tr>'
     ,NEXTARTICLES_PAIRAMOUNT = 8  // 8 pairs is a total of 16 "next articles".
     ,NEXTARTICLES_TEXT       = []
     ,nextarticles_index      = 0
     ;
  for(nextarticles_index=0; nextarticles_index<NEXTARTICLES_PAIRAMOUNT; nextarticles_index+=1){
    var article1 = ARTICLES[ (index + 2 * nextarticles_index + 1) % ARTICLES.length ]
       ,article2 = ARTICLES[ (index + 2 * nextarticles_index + 2) % ARTICLES.length ]
       ,nextarticles_line_text = NEXTARTICLES_TEMPLATE
                                   .replace(/###HREF1###/,  "https://icompile.eladkarako.com/" + article1.post_name)
                                   .replace(/###HREF2###/,  "https://icompile.eladkarako.com/" + article2.post_name)
                                   .replace(/###TITLE1###/, article1.post_title)
                                   .replace(/###TITLE2###/, article2.post_title)
       ;
    NEXTARTICLES_TEXT.push( nextarticles_line_text );
  }
  
  NEXTARTICLES_TEXT = "  " + NEXTARTICLES_TEXT.join("\r\n" + "        ");

  html = html.replace(/###NEXTARTICLES###/, NEXTARTICLES_TEXT);


  FS.writeFileSync(article.path_full + "/index.html",  html, {flag:"w", encoding:"utf8"}); //full HTML-markup wrapping to the simple article-HTML.
});


//------------------------------------------------------------------------------------


//write the README.md for the whole project, its just an index with titles and dates (no content).
var page_articles, html;

page_articles = [].concat(
                    "<table>"
                   ,"  <thead>"
                   ,"    <tr><td>#</td><td>Article</td><td>Last-Modified</td></tr>"
                   ,"  </thead>"
                   ,"  <tbody>"
                   ,ARTICLES.map(function(article, index){
                      return "    <tr><td>##NUMBER##</td><td>##ARTICLE##</td><td>##DATE_MODIFIED##</td></tr>"
                             .replace(/##NUMBER##/,       ("0000" + String(index+1)).substr(-4)                                              )
                             .replace(/##ARTICLE##/,      '<a href="' + article.post_name + '/">' + article.post_title + "</a>"    )
                             .replace(/##DATE_MODIFIED##/, article.post_modified_parsed_utc.toUTCString()                                )
                             ;
                    })
                   ,"  </tbody>"
                   ,"</table>"
                   ).join("\r\n");

html = TEMPLATE_PAGE  //global for the entire page.
        .replace(/###ARTICLES###/, page_articles) //its main body.
        .replace(/###TITLE###/gm                 , "iCompile - A Blog By Elad Karako")
        .replace(/###MODIFIED###/gm              , latest_article.post_modified_parsed_utc.toISOString().replace(/\.000Z/, "+00:00"))
        .replace(/###CREATED###/gm               , latest_article.post_date_parsed_utc.toISOString().replace(/\.000Z/, "+00:00"))
        .replace(/###KEYWORDS###/gm              , "blog,icompile,eladkarako,eladkarakomod,computer-science,mathematics,tech")
        .replace(/###URL###/gm                   , "https://icompile.eladkarako.com/")

        .replace(/###FIRST###/gm                 , "https://icompile.eladkarako.com/" + ARTICLES[0].post_name)
        .replace(/###PREVIOUS###/gm              , "https://icompile.eladkarako.com/" + ARTICLES[ARTICLES.length - 1].post_name)
        .replace(/###NEXT###/gm                  , "https://icompile.eladkarako.com/" + ARTICLES[0].post_name)
        .replace(/###LAST###/gm                  , "https://icompile.eladkarako.com/" + ARTICLES[ARTICLES.length - 1].post_name)
        + "<hr/>" //main-page needs an extra <hr/> since only the article-page includes <hr/> between articles but the main-page has no articles, so this <hr/> helps to show the bottom of the page (before the comment-system).
       ;


FS.writeFileSync(FOLDER_ROOT + "/README.md",  page_articles, {flag:"w", encoding:"utf8"});
FS.writeFileSync(FOLDER_ROOT + "/index.html", html, {flag:"w", encoding:"utf8"}); //with additional wrapping to the basic HTML-markup.


//------------------------------------------------------------------------------------

var sitemap = [].concat(
                    '<?xml version="1.0" encoding="UTF-8"?>'
                   ,'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
                   ,ARTICLES.map(function(article, index){
                      return  ["  <url>"
                              ,"    <loc>###URL###</loc>"
                              ,"    <lastmod>###MODIFIED###</lastmod>"
                              ,"    <changefreq>monthly</changefreq>"
                              ,"  </url>"
                              ].join("\r\n")
                              .replace(/###URL###/,       "https://icompile.eladkarako.com/" + article.post_name)
                              .replace(/###MODIFIED###/,  article.post_modified_parsed_utc.toISOString().replace(/\.000Z/, "+00:00"))
                   })
                   ,["  <url>"
                    ,"    <loc>https://icompile.eladkarako.com/</loc>"
                    ,"    <lastmod>###MODIFIED###</lastmod>"
                    ,"    <changefreq>daily</changefreq>"
                    ,"  </url>"
                    ].join("\r\n")
                     .replace(/###MODIFIED###/,  latest_article.post_modified_parsed_utc.toISOString().replace(/\.000Z/, "+00:00"))
                   ,"</urlset>"
                   ).join("\r\n")
                   + "\r\n"
                   ;

FS.writeFileSync(FOLDER_ROOT + "/sitemap.xml", sitemap, {flag:"w", encoding:"utf8"}); //with additional wrapping to the basic HTML-markup.





//------------------------------------------------------------------------------------


//debug
//FS.writeFileSync(FOLDER_ROOT + "/articles.json", BEAUTIFY(ARTICLES), {flag:"w", encoding:"utf8"}); //overwrite
//console.error("writing all article's-data into: " + FOLDER_ROOT + "/articles.json");




//      ,ARGS            = process.argv.filter(function(s){return false === /node\.exe/i.test(s) && false === /index\.js/i.test(s);})
//      ,FILE            = path_resolve(ARGS[0])
//      ,FILE_PARTS      = PATH.parse(FILE)
//      ,FILE_OUT        = path_resolve(FILE_PARTS.dir + "/" + FILE_PARTS.name + "_resolved" + "__using_" + WAY_OF_RESOLVING + FILE_PARTS.ext)
/*

var   content         = FS.readFileSync(FILE,{encoding:"utf8"})
     ;

//    FS.writeFileSync(FILE_OUT, content, {flag:"w", encoding:"utf8"}); //overwrite




     ,ENUMERATE_FILES = function(path){
                          path = RESOLVE(path);   //normalize path.
                          return FS.readdirSync(path, {encoding:"utf8"})                                        //array of RELATIVE sub-paths.
                                   .map(function(sub_path){ return path + "/" + sub_path;                  })   //make fully-qualified paths.
                                   .filter(function(path){  return (true === FS.lstatSync(path).isFile()); })   //keep actual-files (ignore non-files or pointers).
                                   .sort(NATURAL_COMPARE)
                        }
     ;

//------------------------------------------------------------------------------------------------------------

console.log( ENUMERATE_FILES("./") );

process.exitCode = 0;
process.exit();






function readdir(path){
  path = resolve(path);

  if(true === FS.lstatSync(path).isFile()){   //lstat is considering os-links as actual-files instead of pointers to other files or folders.
    files.push(path);
    return;
  }
  
  FS.readdirSync(path, {encoding:"utf8"})                       //array of relative sub-paths.
    .map(function(sub_path){ return path + "/" + sub_path; })   //explicit set full-path, without it 'resolve' will use the base-path of the script.
    .forEach(readdir)                                           //recursive call.
    ;
}

*/
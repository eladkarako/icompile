"use strict";


const  FS                 = require("fs")
      ,PATH               = require("path")
      ,UTIMES             = require("./utimes/node_modules/@ronomon/utimes")
      ,URL                = require("url")
      ,BEAUTIFY           = function(text){ return JSON.stringify(text, null, 2).replace(/,[\r\n] /g, "\r\n ,").replace(/ *(,( +))/g,"$2,"); }
      ,NATURAL_COMPARE    = function(a,b){var ax=[],bx=[];NATURAL_COMPARE.modifier=NATURAL_COMPARE.modifier||function(x){return x};a=NATURAL_COMPARE.modifier(a);b=NATURAL_COMPARE.modifier(b);a=String(a);b=String(b);a.replace(/(\d+)|(\D+)/g,function(_,$1,$2){ax.push([$1||Infinity,$2||""])});b.replace(/(\d+)|(\D+)/g,function(_,$1,$2){bx.push([$1||Infinity,$2||""])});while(ax.length&&bx.length){var an,bn,nn;an=ax.shift();bn=bx.shift();nn=an[0]-bn[0]||an[1].localeCompare(bn[1]);if(0!==nn)return nn}return ax.length-bx.length}
      ,RESOLVE            = function(path){ //normalize to Unix-slash (will work on Windows too).
                             path = path.replace(/\"/g,"").replace(/[\\\/]+/g,"/");
                             path = PATH.resolve(path).replace(/\\+/g,"/").replace(/\\+$/g,""); 
                             return path;
                            }
      ,FOLDER_ROOT        = RESOLVE(process.cwd() + "/../")

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
      ,KEYWORDS_DEFAULT   = ["eladkarako", "eladkarakomod", "icompile"]
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
  var btime = article.post_date_parsed_utc.getTime()     //time: created (birth time)
     ,mtime = article.post_modified_parsed_utc.getTime() //time: last-modified 
     ,atime = undefined                                       //time: last-accessed (undefined ==== don't change existing value).
     ; 
  UTIMES.utimes(article.path_full, btime, mtime, atime
               ,function(){
                  //console.log("done setting times for [" + article.path_full + "]");
               });
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
  article.post_content = article.post_content
                                .replace(/\r/gm, "")
                                .replace(/\n/gm, "\r\n")  //used to be "<br/>\r\n" but it kept modifying PRE containers, which is not good... this way I need to make sure the README.md has the proper <br/>-marks (if needed) --- for now simply show as is.
                                ;

  //add <br/> before new-line characters, but first protect element which their internal-content should not be changed (PRE,STYLE,SCRIPT,TEXTAREA), after the adding of '<br/>', the protected-unmodified-content is restored to where it has been in the text.
  article.post_content = article.post_content //adds <br/> without modifying PRE, SCRIPT, STYLE, TEXTAREA internal-content by first "backing them up" and then "restoring them".
                                //-----------------------------------------------------------------------protect
                                .replace(/\<pre[^\<]+\<\/pre\>/mgi                          , TEXT_PROTECT)
                                .replace(/\<style[^\<]+\<\/style\>/mgi                      , TEXT_PROTECT)
                                .replace(/\<script[^\<]+\<\/script\>/mgi                    , TEXT_PROTECT)
                                .replace(/\<textarea[^\<]+\<\/textarea\>/mgi                , TEXT_PROTECT)
                                //-----------------------------------------------------------------------modify
                                .replace(/\r\n/gm, "<br/>\r\n")         //add '<br/>' before each new-line.
                                .replace(/\<br\/\>\<br\/\>/gm, "<br/>") //fix for articles already having '<br/>'.
                                //-----------------------------------------------------------------------restore
                                .replace(/###PRETECTED_START###[^\#]+###PRETECTED_END###/gm , TEXT_RESTORE);
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
  article.keywords = (article.post_title + " " + KEYWORDS_DEFAULT.join(" ") + " " + article.post_content)
                     .replace(/[\r\n]+/gm," ")       //one-line
                     .replace(/[\r\n]+/g, " ")       //one-line
                     .replace(/[^a-z]+/ig," ")       //keep only words.
                     .toLowerCase()
                     .trim()
                     .replace(/\s+/g, ",")                             //whitespace to comma.
                     .split(",")
                     .reduce(function(carry, current, index, array){   //unique keywords
                       carry[current] = "";
                       return (array.length === index + 1) ? Object.keys(carry) : carry;
                     },{})
                     .filter(function(s){return s.length > 3})         //keep 4+-letter words.
                     .filter(function(s){                              //ignore some words
                       return (-1 === ["best","both","from","give","have","having","height","href","http","https","string","text","than","that","then","they","this","values","where","which","while","whom","width","with","would"].indexOf(s))
                     })
                     .sort(NATURAL_COMPARE)                            //make list a-z sorted naturally.
                     ;
    
});


//------------------------------------------------------------------------------------

//add for each article an array of related articles

ARTICLES.forEach(function(article, index_article){ //generate keywords based on article content and title, and constants.
  var matchings = [];

  ARTICLES.forEach(function(candidate, index_candidate){
    var matched;
    
    if(index_candidate === index_article) return;                     //compare article to other (not itself).

    matched = {};
    matched.article          = candidate;
    matched.keywords_matched = candidate.keywords
                                       .filter(function(keyword_candidate){
                                          return (-1 === KEYWORDS_DEFAULT.indexOf(keyword_candidate)) //ignored keywords that appears in the global-keywords.
                                        })
                                       .filter(function(keyword_candidate){
                                          return (-1 !== article.keywords.indexOf(keyword_candidate)) //one of the candidate-keywords appears in the article-keywords.
                                        })
                                       ;
    
    if(matched.keywords_matched.length > 0){
      matchings.push(matched)
    }
  });

  
  //sort matchings by the one having the most mutual-keywords to one with lest.
  NATURAL_COMPARE.modifier = function(matching){return matching.keywords_matched.length;};
  matchings.sort(NATURAL_COMPARE)
          .reverse()
          ;
  NATURAL_COMPARE.modifier = undefined; //cleanup


  article.matchings = matchings;
});

  
//------------------------------------------------------------------------------------


ARTICLES.forEach(function(article){ //generate article README.md (simplified index.html ...) and index.html (with head)
  var html = TEMPLATE_PAGE
              .replace(/###ARTICLES###/gm              , TEMPLATE_ARTICLE)    //join templates.
              .replace(/###CONTENT###/                 , article.post_content)
              .replace(/###ID###/gm                    , article.ID)
              .replace(/###TITLE###/gm                 , article.post_title)
              .replace(/###MODIFIED###/gm              , article.post_modified_parsed_utc.toISOString())
              .replace(/###MODIFIED_FORMATTED###/gm    , article.post_modified_parsed_utc.toUTCString())
              .replace(/###KEYWORDS###/gm              , article.keywords.join(","))
              .replace(/###URL###/gm                   , "https://icompile.eladkarako.com/" + article.post_name)
              .replace(/###CREATED###/gm               , article.post_date_parsed_utc.toISOString())
              
              //related-articles
              .replace(/###RELATED1###/gm              , '<a href="###HREF###" title="###RELATED_KEYWORDS###">###TITLE###</a>'
                                                         .replace("###HREF###"             , "https://icompile.eladkarako.com/" + article.matchings[0].article.post_name  )
                                                         .replace("###RELATED_KEYWORDS###" , article.matchings[0].keywords_matched.join(",")                              )
                                                         .replace("###TITLE###"            , article.matchings[0].article.post_title                                      )
                                                         )
              .replace(/###RELATED2###/gm              , '<a href="###HREF###" title="###RELATED_KEYWORDS###">###TITLE###</a>'
                                                         .replace("###HREF###"             , "https://icompile.eladkarako.com/" + article.matchings[1].article.post_name  )
                                                         .replace("###RELATED_KEYWORDS###" , article.matchings[1].keywords_matched.join(",")                              )
                                                         .replace("###TITLE###"            , article.matchings[1].article.post_title                                      )
                                                         )
              .replace(/###RELATED3###/gm              , '<a href="###HREF###" title="###RELATED_KEYWORDS###">###TITLE###</a>'
                                                         .replace("###HREF###"             , "https://icompile.eladkarako.com/" + article.matchings[2].article.post_name  )
                                                         .replace("###RELATED_KEYWORDS###" , article.matchings[2].keywords_matched.join(",")                              )
                                                         .replace("###TITLE###"            , article.matchings[2].article.post_title                                      )
                                                         )
              .replace(/###RELATED4###/gm              , '<a href="###HREF###" title="###RELATED_KEYWORDS###">###TITLE###</a>'
                                                         .replace("###HREF###"             , "https://icompile.eladkarako.com/" + article.matchings[3].article.post_name  )
                                                         .replace("###RELATED_KEYWORDS###" , article.matchings[3].keywords_matched.join(",")                              )
                                                         .replace("###TITLE###"            , article.matchings[3].article.post_title                                      )
                                                         )
              .replace(/###RELATED5###/gm              , '<a href="###HREF###" title="###RELATED_KEYWORDS###">###TITLE###</a>'
                                                         .replace("###HREF###"             , "https://icompile.eladkarako.com/" + article.matchings[4].article.post_name  )
                                                         .replace("###RELATED_KEYWORDS###" , article.matchings[4].keywords_matched.join(",")                              )
                                                         .replace("###TITLE###"            , article.matchings[4].article.post_title                                      )
                                                         )
              .replace(/###RELATED6###/gm              , '<a href="###HREF###" title="###RELATED_KEYWORDS###">###TITLE###</a>'
                                                         .replace("###HREF###"             , "https://icompile.eladkarako.com/" + article.matchings[5].article.post_name  )
                                                         .replace("###RELATED_KEYWORDS###" , article.matchings[5].keywords_matched.join(",")                              )
                                                         .replace("###TITLE###"            , article.matchings[5].article.post_title                                      )
                                                         )
              .replace(/###RELATED7###/gm              , '<a href="###HREF###" title="###RELATED_KEYWORDS###">###TITLE###</a>'
                                                         .replace("###HREF###"             , "https://icompile.eladkarako.com/" + article.matchings[6].article.post_name  )
                                                         .replace("###RELATED_KEYWORDS###" , article.matchings[6].keywords_matched.join(",")                              )
                                                         .replace("###TITLE###"            , article.matchings[6].article.post_title                                      )
                                                         )
              .replace(/###RELATED8###/gm              , '<a href="###HREF###" title="###RELATED_KEYWORDS###">###TITLE###</a>'
                                                         .replace("###HREF###"             , "https://icompile.eladkarako.com/" + article.matchings[7].article.post_name  )
                                                         .replace("###RELATED_KEYWORDS###" , article.matchings[7].keywords_matched.join(",")                              )
                                                         .replace("###TITLE###"            , article.matchings[7].article.post_title                                      )
                                                         )
                                                         
              ;
  
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
        .replace(/###MODIFIED###/gm              , latest_article.post_modified_parsed_utc.toISOString())
        .replace(/###CREATED###/gm               , latest_article.post_date_parsed_utc.toISOString())
        .replace(/###KEYWORDS###/gm              , "blog,icompile,eladkarako,eladkarakomod,computer-science,mathematics,tech")
        .replace(/###URL###/gm                   , "https://icompile.eladkarako.com/")
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
                              ,"    <changefreq>yearly</changefreq>"
                              ,"  </url>"
                              ].join("\r\n")
                              .replace(/###URL###/,       "https://icompile.eladkarako.com/" + article.post_name)
                              .replace(/###MODIFIED###/,  article.post_modified_parsed_utc.toISOString().replace(/\.000Z/, "+00:00"))
                   })
                   ,["  <url>"
                    ,"    <loc>https://icompile.eladkarako.com/</loc>"
                    ,"    <lastmod>###MODIFIED###</lastmod>"
                    ,"    <changefreq>monthly</changefreq>"
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
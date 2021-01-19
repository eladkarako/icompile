"use strict";


const  FS                 = require("fs")
      ,PATH               = require("path")
      ,BEAUTIFY           = function(text){ return JSON.stringify(text, null, 2).replace(/,[\r\n] /g, "\r\n ,").replace(/ *(,( +))/g,"$2,"); }
      ,NATURAL_COMPARE    = function(a,b){var ax=[],bx=[];NATURAL_COMPARE.modifier=NATURAL_COMPARE.modifier||function(x){return x};a=NATURAL_COMPARE.modifier(a);b=NATURAL_COMPARE.modifier(b);a=String(a);b=String(b);a.replace(/(\d+)|(\D+)/g,function(_,$1,$2){ax.push([$1||Infinity,$2||""])});b.replace(/(\d+)|(\D+)/g,function(_,$1,$2){bx.push([$1||Infinity,$2||""])});while(ax.length&&bx.length){var an,bn,nn;an=ax.shift();bn=bx.shift();nn=an[0]-bn[0]||an[1].localeCompare(bn[1]);if(0!==nn)return nn}return ax.length-bx.length}
      ,RESOLVE            = function(path){ //normalize to Unix-slash (will work on Windows too).
                             path = path.replace(/\"/g,"").replace(/[\\\/]+/g,"/");
                             path = PATH.resolve(path).replace(/\\+/g,"/").replace(/\\+$/g,""); 
                             return path;
                            }
      ,FOLDER_ROOT        = RESOLVE(process.cwd())
      ,FILE               = FS.readFileSync(RESOLVE(FOLDER_ROOT + "/published.sql"),{encoding:"utf8"}).replace(/\r/gm, "")
      ,LINES              = FILE.split("\n")
      ;

var keep = ["ID", "post_name", "post_title", "post_date_gmt", "post_modified_gmt", "post_status", "comment_status", "post_type", "post_content"]

var keys = '(`ID`, `post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_password`, `post_name`, `to_ping`, `pinged`, `post_modified`, `post_modified_gmt`, `post_content_filtered`, `post_parent`, `guid`, `menu_order`, `post_type`, `post_mime_type`, `comment_count`) VALUES'
           .replace(/^\((.+)\) VALUES$/, "$1")
           .replace(/\`/gm, "")
           .split(", ")
           ;
var articles = [];
LINES.forEach(function(line){
  var article = {}
     ,values = line
               .replace(/^\(/, "")
               .replace(/,$/,  "")
               .replace(/\)$/, "")
               .split(", ")
     ,tmp1
     ,tmp2
     ;
  //cut array, removing "known to not include ', '-string parts" such as ID, post_title,...  --- leaving just the post_content (by elimination), 
  tmp1 = values.splice(0,4);
  tmp2 = values.splice(-18);
  values = values.join(", ");
  values = [].concat(tmp1, values, tmp2);


  if(keys.length !== values.length){
    //line not formatted properly with the same amount of keys
    FS.appendFileSync(FOLDER_ROOT + "/_not_included.sql", line + "\r\n", {encoding:"utf8"}); //write the post_content to file
    return;
  }
  
  keys.forEach(function(key, index){
    if(-1 === keep.indexOf(key)) return;      //skip data I don't need.

    article[key] = values[index]
                   .replace(/(^\'|\'$)/g, "")  //remove ' wrapping
                   .replace(/\\r/g, "\r")       //sql unescape \r
                   .replace(/\\n/g, "\n")       //sql unescape \n
                   .replace(/\'\'/g, "'")       //sql unescape '' to '
                   ;    
  });
  
  //re-create the object with keys in specific order.
  var tmp = {};
  keep.forEach(function(key){
    tmp[key] = article[key];
  });
  article = tmp;
  
  articles.push(article);
});



articles.forEach(function(article){
  var path_full = RESOLVE(FOLDER_ROOT + "/" + article.post_name);
  if(false === FS.existsSync(path_full)) FS.mkdirSync(path_full); //create folder

  FS.writeFileSync(path_full + "/README.md", article.post_content, {flag:"w", encoding:"utf8"}); //write the post_content to file
  delete article.post_content;
  FS.writeFileSync(path_full + "/_data.json", BEAUTIFY(article),   {flag:"w", encoding:"utf8"}); //write the post's related-data to file.
})

(function(ENTITY_TABLE, ENTITY_REGX, tmp){
  function encode_http_entity(s){
    return s.replace(ENTITY_REGX, function(c){
             return ENTITY_TABLE.hasOwnProperty(c) ? ENTITY_TABLE[c] : c;
           })
           .replace(/[\u00A0-\u9999]/gim, function (c) {
             return '&#' + c.charCodeAt(0) + ';'
           });
  }
  
  tmp = prompt("? to HTML-Entity:", "<div>?Lik? A ?o??? ©®</div>");
  tmp = encode_http_entity(tmp);
  prompt("output:", tmp);

  return true;
}(
  /[\t\n\v\ \&\'\*\\\•\ˆ\:\,\@\©\¤\°\$\=\`\>\^\{\[\_\(\<\-\#\%\.\+\?\"\}\®\)\]\;\~\/\™\|]/gm
, {"\t":"&#9;","\n":"&#10;","\x0B":"&#11;"," ":"&#32;","&":"&amp;","'":"&apos;","*":"&ast;","\\":"&bsol;","\u2022":"&bull;","\u02c6":"&circ;",":":"&colon;",",":"&comma;","@":"&commat;","\u00a9":"&copy;","\u20aa":"&curren;","\u00b0":"&deg;","$":"&dollar;","=":"&equals;","`":"&grave;",">":"&gt;","^":"&Hat;","{":"&lbrace;","[":"&lbrack;","_":"&lowbar;","(":"&lpar;","<":"&lt;","-":"&minus;","#":"&num;","%":"&percnt;",".":"&period;","+":"&plus;","?":"&quest;",'"':"&quot;","}":"&rcub;","\u00ae":"&reg;",")":"&rpar;","]":"&rsqb;",";":"&semi;","~":"&sim;","/":"&sol;","\u2122":"&trade;","|":"&vert;"}
, null
));
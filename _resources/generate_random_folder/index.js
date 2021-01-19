"use strict";

const FS            = require("fs")
     ,PATH          = require("path")
     ,resolve       = function(path){ //normalize to Unix-slash (will work on Windows too).
                        path = path.replace(/\"/g,"");        //remove wrapping.   '-character is allowed.
                        path = path.replace(/\\+/g,"/");      //pre-resolve back-slash to forward-slash (windows style to linux style)
                        path = PATH.resolve(path);            //resolve to as much qualified path as possible
                        path = path.replace(/\\+/g,"/");      //back-slash to forward-slash (windows style to linux style)
                        path = path.replace(/\/\/+/g,"/");    //unify to one slash
                        path = path.replace(/\/+$/g,"");      //no end slash
                        return path;
                      }
     ,ARGS          = process.argv.filter(function(s){return false === /node\.exe/i.test(s) && process.mainModule.filename !== s;})
     ,BASE          = resolve(ARGS[0])
     ,NAME_RANDOM   = Math.random().toString(16) + Math.random().toString(16) + Math.random().toString(16) + Math.random().toString(16)
                      .replace(/\./g, "")
     ;

console.log(
  NAME_RANDOM
);
/*
*/
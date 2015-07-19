"use strict";

var sloc = require("sloc");
const PROCESS_KEY = "SLOC";

const options = {};

//TODO support for multiple
module.exports = {
  key : PROCESS_KEY,
  run : function run(files) {

  var processedFiles = [] ;

  try {
    processedFiles = files.map(file => ({
      name : file.name,
      data : sloc(file.data,"js",options)
    }));
  } catch(e){
    console.error(e,file);
  }



  var out = {
    files : processedFiles,
    total : processedFiles.reduce(function(total,file){

      Object.keys(file.data).forEach(key=>{
        if(!total[key]) {
          total[key] = 0;
        }
        total[key] += file.data[key];
      });
      return total;
    },{})
  };

   return out;
  }
}
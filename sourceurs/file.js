"use strict";

const fs = require("fs");
const glob = require("glob");
const path = require("path");

const options = {ignore:"node_modules/**"};

module.exports = function(sources) {

  console.log("Source ",sources);

  return new Promise(function(resolve,reject){
    resolve(glob.sync(sources, options).map(input));
  });
}


/**
Prend un fichier ou une liste de fichiers et retourne
les datas associées
@return [{
  name : String,
  data : String
}]
*/
function input(fileName) {
  var filePath = path.resolve(fileName);
  return {
    name : fileName,
    path : filePath,
    data : fs.readFileSync(filePath).toString()
  };

}
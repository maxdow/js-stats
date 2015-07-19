"use strict";
const fs = require("fs");

const output = "out.json";

module.exports = function(dataObject) {
  //console.log("Reporter JSON",util.inspect(dataObject, false, null));
  fs.writeFile(output, JSON.stringify(dataObject,null," "), function(err) {
      if(err) {
          return console.log(err);
      }
  });
}
var testfile2 = require("./testfile2.js");

/**
Ceci est un commentaire
*/
function blabla() {
  return "je suis une fonction qui dit coucou"
}

console.log("Start !...") ;

var testme = "123",
  testmeagain = "456",
  whatyousay = "789" ;

if(testme === "123") {
  if(testmeagain === "456") {
    if(whatyousay === "789") {
      console.log(blabla());
    }
  }
}

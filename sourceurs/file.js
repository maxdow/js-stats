"use strict";

module.exports = function(args) {
  return input(args)
}


/**
Prend un fichier ou une liste de fichiers et retourne
les datas associées
*/
function input(args) {
  return fs.readFileSync(args).toString();
}
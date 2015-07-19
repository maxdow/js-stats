"use strict";

/**
# Use case :

Un fichier de base :
  Stats sur le fichier
  -> analyse les dépendances



Sourceur => Accumulateur
                  => Processeur(s)
                  => Rapporteur

##Sourceur

##Accumulateur

lance l'analyse et gere s'il y a des dépendances à résoudre

( option auto ou interactive )
Si fichier seul, demande , si glob analyse complete
exlcude node_modules ( juste le nom )


##Processeurs
Retourne une clé par processeur avec les données correspondantes


##Raporteurs
Genere une sortie suivant les données

##Options
parseur


##Modules
File stats ( sloc )
Quality
Git
TODO


// Preprocc ?
*/

const sourceur = require("./sourceurs/file.js");
const accumulateur = require("./accumulator.js");
const processors = [require("./processeurs/sloc.process.js")];
const reporters = [require("./rapporteurs/json.reporter.js")];

var input = "tests/*.js";

sourceur(input)
.then((data) => accumulateur(processors,data))
.then((data) => {
  reporters.forEach(reporter => reporter(data));
});

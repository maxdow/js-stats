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

*/

const sourceur = require("./sourceurs/file.js");


function run() {
  var input = [] ; // liste noms fichiers



}

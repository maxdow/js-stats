"use strict";


module.exports = function accumulator(processors,data) {

    var processors = processors.map(register);

    return new Promise(function(resolve,reject){
      resolve(run(processors, data));
    });

    //TODO resultat moyen , api pour accès possible par les process

  }



function run(processors, data) {
  console.log("Run...");
  return processors.reduce((acc,processor) => {
    console.log("->",processor.key)
      acc[processor.key] = processor.run(data);
      return acc;
    },{});

}


/**
  Initialise  les processeurs
*/
function register(processor){
/** TODO
test si c'est un fichier -> utilise comme processor
sinon essaye de require dans le dossier processeurs
*/
return processor;

}


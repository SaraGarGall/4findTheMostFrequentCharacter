function countCharacters(stringRequested) {
  
  for (i = 0; i < stringRequested.length; i++) {
    console.log('inside of the first for loop');
    console.log('initialCharacter:', stringRequested[i]);
    let sum = 0;
    let maxAmount = 0;

    for (j = 0; j < stringRequested.length; j++) {
      console.log('inside of the second for loop');
    
      if (stringRequested[i] === stringRequested[j]) {
        sum += 1;
        console.log('characterCompared:', stringRequested[j], sum);
      } else {
        sum += 0;
      }
    }
    // como poner como el nombre de la variable el valor de stringRequested[i]?
    // y despues como atribuirle a esa variab;e el valor de sum?
    let character = sum;
    console.log(stringRequested[i], sum, "characterSum:", character);
  }
  
}

module.exports = { countCharacters };


/*Encontrar la forma de almacenar la letra con el sum correspondiente*/
/*Despues comparar y si el sum de la letra actual es menor que el que esta almacenado, entonces 
se pasa a la siguiente. Si es igual o mayor, se almacena como la mas frecuente por ahora*/ 
/*4)	Find the Most Frequent Character: Write a program that finds the most frequent character in a given string.*/

const prompt = require('prompt-sync')();
const utility = require('./utility');

let stringRequested = prompt(
  'Enter the word for which you would like to know the most frequent character: '
);

console.log('You entered: ', stringRequested);

utility.countCharacters(stringRequested);

// IDEAS DE COMO RESOLVERLO

// 1. Iterar por cada letra de la palabra.
    // HOW: Quizas usando algun tipo de loop
    // para inspirarme: 
    /* for (const value of iterator) {
       /*const source = [1, 2, 3];

        const iterator = source[Symbol.iterator]();

        for (const value of iterator) {
          console.log(value);
          if (value === 1) {
          break;
          }
        console.log('This string will not be logged.');
       }*/

// 2. Crear un key o una variable con el valor de esa letra.
    // HOW: destructuring? and for in loop??

// 3. Comprobar cuantas veces esta esa letra en la palabra.
    // 3.1 La letra objetivo se compara con el resto de las letras de la palabra.
    // Si es igual se suma 1.
    // Si no es igual se suma 0 o se continua.
// 4. Comprobar los valores de cada letra y elegir el mas alto.
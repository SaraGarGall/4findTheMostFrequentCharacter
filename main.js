/*4)	Find the Most Frequent Character: Write a program that finds the most frequent character in a given string.*/

const prompt = require('prompt-sync')();
const utility = require('./utility');

let stringRequested = prompt(
  'Enter the word for which you would like to know the most frequent character: '
);

console.log('You entered: ', stringRequested);

utility.countCharacters(stringRequested);
//Count how many times is the character in the word
        // Elegir cada letra con For loop y de alguna forma hacerla un key o una variable
            //Maybe using destructuring? and for in loop??
        // For loop with if statement (si la letra es igual a la siguiente sumar
        // +1 al sum, dejar sum y pasar al siguiente)
//Compared them to choose the largest
//Return the character with the largest number

/*4)	Find the Most Frequent Character: Write a program that finds the most frequent character in a given string.*/

const prompt = require('prompt-sync')();
const utility = require('./utility');

let stringRequested = prompt(
  'Enter the word for which you would like to know the most frequent character: '
);

console.log('You entered: ', stringRequested);

utility.countCharacters(stringRequested);

console.log(
  'The most frequent character in',
  stringRequested,
  'is:',
  moreFrequentCharacter
);
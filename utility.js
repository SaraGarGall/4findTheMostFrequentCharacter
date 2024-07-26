function countCharacters(stringRequested) {
  let sum = 0;
  let positionInWord = 0;

  for (i = 0; i < stringRequested.length; i++) {
    console.log('inside of the first for loop');

    let character = stringRequested[i];

    console.log(stringRequested[i], positionInWord);

    for (i = 0; i < stringRequested.length; i++) {
      if (character === stringRequested[positionInWord]) {
        sum += 1;
        console.log(character, sum);
        continue;
      } else {
        sum += 0;
      }
    
      const obj = { character: sum };
      console.log(obj);
    }
  }
  positionInWord += 1;
}

module.exports = { countCharacters };
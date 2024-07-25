function countCharacters(stringRequested) {
  let sum = 0;
  let positionInWord = 0;

  for (i = 0; i < stringRequested.length; i++) {
    console.log("inside loop");
    
    let character = stringRequested[i];
    
    console.log(stringRequested[i], character, positionInWord);

    if (character === stringRequested[positionInWord]) {
      sum += 1;
      positionInWord += 1;
      console.log(character, sum);
      continue;
    }
    continue;
  }
}

module.exports = { countCharacters };

//for loop dentro de for loop
function countCharacters(stringRequested) {
  let result = {};
  //let repetitions = 0;
  let moreFrequentCharacter = 0;

  for(i = 0; i < stringRequested.length; i++){
    let key = stringRequested[i];
    if (result[key]){
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  }

  for (const key in result) {
    let repetitions;
    // El error esta en el if statement
    if (result[key] > repetitions) {
      repetitions = result[key];
      console.log('repetitions in if statement', repetitions);
      moreFrequentCharacter = result['key'];
      console.log(
        'moreFrequentCharacter in if statement',
        moreFrequentCharacter
      );
    }
  }

console.log('the result is:', result);
console.log("The most frequent character in", stringRequested, "is:", moreFrequentCharacter);

  return moreFrequentCharacter;
}
module.exports = { countCharacters };
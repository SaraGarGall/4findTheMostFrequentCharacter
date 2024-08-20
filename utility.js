function countCharacters(stringRequested) {
  let result = {};
  let moreFrequentCharacter = 0;
  let repetitions;

  for(i = 0; i < stringRequested.length; i++){
    let key = stringRequested[i];
    if (result[key]){
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  }

// Hay un problema en este for loop:

  for(const key in result){
    if (result[key] > repetitions) {
      repetitions = result[key];
      moreFrequentCharacter = result["key"];
    }
  }
console.log('the result is:', result);
console.log("The most frequent character in", stringRequested, "is:", moreFrequentCharacter);

  return moreFrequentCharacter;
}
module.exports = { countCharacters };
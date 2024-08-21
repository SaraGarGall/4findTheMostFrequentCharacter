function countCharacters(stringRequested) {
  let result = {};
  let moreFrequentCharacter = 0;
  let repetitions = 0;

  for (i = 0; i < stringRequested.length; i++) {
    let key = stringRequested[i];
    if (result[key]) {
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  }

  for (const key in result) {
    if (result[key] > repetitions) {
      repetitions = result[key];
      moreFrequentCharacter = key;
    }
  }

  return moreFrequentCharacter;
}
module.exports = { countCharacters };

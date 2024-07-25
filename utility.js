function countCharacters(stringRequested) {
  console.log(stringRequested);

  for (const character of stringRequested) {
    let [0] = [character];
    if(character){
      [character] += 1;
      console.log([character], character);
    } continue;
  }
}

module.exports = {countCharacters};
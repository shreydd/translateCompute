var readlineSync = require('readline-sync');

console.log('enter phrase');

var phrase = readlineSync.question();

phrase = phrase.split(' ');
// console.log('split of string' + phrase)

const isAlphabetic = (str) => {
  return /^[a-zA-Z,!.?]+$/.test(str);
}

for(i in phrase){
  //check if the word is longer than 3 characters
  if(phrase[i].length > 2){
    //check if it contains only alphabets
    if(isAlphabetic(phrase[i])){
      let wordTemp = phrase[i];
      wordTemp += '-';
      // use first letter and add -erb at the end
      wordTemp += wordTemp[0]+'erb';
      // remove first letter
      wordTemp = wordTemp.slice(1);
      // move special symbols
      for(j in wordTemp) {
        if( /^[,!.?]$/.test(wordTemp[j]) ) {
          let tempSymbol = wordTemp[j];
          wordTemp = wordTemp.replace(wordTemp[j], '');
          wordTemp += tempSymbol;
        }
      }
      phrase[i] = wordTemp;
    }
  }
}

phrase = phrase.join(' ');
console.log('the translation:'+ phrase);
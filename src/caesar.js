function caesar(input, shift, encode = true) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const returnArr = [];
  //splits input string into individual characters that populate the input array
  let inputArray = input.toLowerCase().split("");
  //splits alphabet string into individual characters that populate the alphabet array
  let alphabetArray = alphabet.toLowerCase().split("");
  //if shift is an invalid value or missing, returns false
  if (shift == 0 || shift > 25 || shift < -25 || !shift) {
    return false;
  }
  if (encode == true) {
    //matches each input character with one from the alphabet array
    for (let i = 0; i < inputArray.length; i++) {
      if (alphabetArray.includes(inputArray[i])) {
        let selectedLetter = alphabetArray.find(
          (letter) => letter === inputArray[i]
        );
        //if a match is found, shifts the index appropriately to match the encoded alphabet
        for (z = 0; z < alphabetArray.length; z++) {
          if (selectedLetter === alphabetArray[z]) {
            //positive shift: subtracts length of alphabet array to cycle back the alphabet
            if (z + shift >= alphabetArray.length) {
              let totalShift = z + shift - alphabetArray.length;
              returnArr.push(alphabetArray[totalShift]);
              //negative shift: adds length of alphabet array to cycle back the alphabet
            } else if (z + shift <= 0) {
              let totalShift = z + shift + alphabetArray.length;
              returnArr.push(alphabetArray[totalShift]);
            }
            returnArr.push(alphabetArray[z + shift]);
          }
        }
      } else {
        returnArr.push(inputArray[i]);
      }
    }
  }
  if (encode == false) {
    //if a match is found, shifts the index appropriately to match the decoded alphabet
    for (let i = 0; i < inputArray.length; i++) {
      let selectedLetter = alphabetArray.find(
        (letter) => letter === inputArray[i]
      );
      if (!selectedLetter) {
        returnArr.push(inputArray[i]);
      }
      for (z = 0; z < alphabetArray.length; z++) {
        if (alphabetArray.includes(inputArray[i])) {
          if (selectedLetter === alphabetArray[z]) {
            //negative shift: adds length of alphabet array to cycle back the alphabet
            if (z - shift >= alphabetArray.length) {
              let totalShift = z - shift - alphabetArray.length;
              returnArr.push(alphabetArray[totalShift]);
              //positive shift: subtracts length of alphabet array to cycle back the alphabet
            } else if (z - shift <= 0) {
              let totalShift = z - shift + alphabetArray.length;
              returnArr.push(alphabetArray[totalShift]);
            }
            returnArr.push(alphabetArray[z - shift]);
          }
        }
      }
    }
  }
  return returnArr.join("");
}

module.exports = caesar;

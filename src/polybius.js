function polybius(input, encode = true) {
  const returnArr = [];
  const toDecodeArr = [];
  //splits input string into individual characters that populate the input array
  const inputArr = input.toLowerCase().split("");
  const alphabet = "aflqvbgmrwchnsxdijotyekpuz";
  //splits alphabet string into individual characters that populate the alphabet array
  const alphabetArr = alphabet.toLowerCase().split("");
  const idxArr = [];

  //creating array of indexes that are at the same position in the array as are the letters in the alphabet array
  for (let i = 0; i < alphabetArr.length - 1; i++) {
    let idx = i + 1;
    if (i < 5) {
      idxArr.push(`1${idx}`);
    } else if (i < 10) {
      idxArr.push(`2${idx - 5}`);
    } else if (i < 15) {
      idxArr.push(`3${idx - 10}`);
    } else if (i < 20) {
      idxArr.push(`4${idx - 15}`);
      if (idx == 17) {
        idxArr.push(`4${idx - 15}`);
      }
    } else {
      idxArr.push(`5${idx - 20}`);
    }
  }
  if (encode == true) {
    for (let z = 0; z < inputArr.length; z++) {
      //adds space to the resulting string if it reads a space in the input
      if (inputArr[z] == " ") {
        returnArr.push(" ");
      }
      //cycles through the input characters and searches a match with the alphabet array for each character
      if (alphabetArr.includes(inputArr[z])) {
        let selectedLetter = alphabetArr.find(
          (letter) => letter === inputArr[z]
        );
        //if the found character matches a character in the alphabet array then adds the resulting character to the returned string
        for (let x = 0; x < alphabetArr.length; x++) {
          if (selectedLetter === alphabetArr[x]) {
            returnArr.push(idxArr[x]);
          }
        }
      }
    }
  }
  if (encode == false) {
    //removes spaces from the input and checks if the number of numbers is even: if not, returns false
    if (!Number.isInteger(input.replace(" ", "").length / 2)) {
      return false;
    }
    //cycles through the input array and searches for number pairs. if it finds a number pair, then it will push the number pair into the to-decode-array. if it finds a space, it will push the space into the to-decode-array
    for (let x = 0; x < inputArr.length; x++) {
      if (Number.isInteger(parseInt(inputArr[x]))) {
        toDecodeArr.push(`${inputArr[x]}${inputArr[x + 1]}`);
        x++;
        //if input starts with a space, then it will output a space to the to-decode-array
      } else if (inputArr[x] == 0) {
        toDecodeArr.push(" ");
      }
    }
    //adds spaces into the returning array
    for (let selected in toDecodeArr) {
      if (toDecodeArr[selected] == " ") {
        returnArr.push(toDecodeArr[selected]);
      }
      //adds appropriate characters to the returning array by matching the number pairs to the index array which will return the appropriate character at the same indexes in the alphabet array
      for (let idx in idxArr) {
        if (
          idxArr[idx] == toDecodeArr[selected] &&
          toDecodeArr[selected] !== "42"
        ) {
          returnArr.push(alphabetArr[idx]);
          //adds '(i/j)' to returning array and removes duplicate
        } else if (
          idxArr[idx] == toDecodeArr[selected] &&
          toDecodeArr[selected] == "42" &&
          idxArr[parseInt(idx) + 1] !== "42"
        ) {
          returnArr.push(`(i/j)`);
          //skips if space since already added
        } else if (toDecodeArr[selected] == " ") {
        }
      }
    }
  }
  return returnArr.join("");
}

module.exports = polybius;

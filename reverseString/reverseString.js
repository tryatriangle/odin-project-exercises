const reverseString = function(stringForReversal) {

    let splitString = stringForReversal.split("");

    let reverseArray = splitString.reverse();
  
    let joinArray = reverseArray.join("");
  
    return joinArray;

}

module.exports = reverseString

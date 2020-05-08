const repeatString = function repeat(theString, noOfTimes){

  if (noOfTimes < 0) return "ERROR";

  let string = "";

  for (let i = 0; i < noOfTimes; i++) {

    string += theString;
  }
  return string;
  }



module.exports = repeatString

const leapYears = function confirmLeap(userYear){

    let testYearFour = (userYear % 4)
  
    let testYearHundred = (userYear % 100)
  
    let testYearFourHundred = (userYear % 400)
  
  
    if (testYearFour == 0 && testYearHundred == 0 && testYearFourHundred > 0) {
    yeahNo = false;
  }
  
    else if (testYearFour > 0){
      yeahNo = false;
    }
  
    else {
      yeahNo = true;
    }
  
  
    return (yeahNo);
    
  }

module.exports = leapYears

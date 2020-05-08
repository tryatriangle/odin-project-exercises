const ftoc = function fahToCel(fahrenheit){
  celsius = ((fahrenheit - 32)*5 / 9);
  roundedC = Math.round(celsius * 10) / 10;
  return(roundedC);
}

const ctof = function celToFah(celsius){
  fahrenheit =  ((celsius / 5)*9 + 32);
  roundedF = Math.round(fahrenheit * 10) / 10;
  return(roundedF); 
}

module.exports = {
  ftoc,
  ctof
}

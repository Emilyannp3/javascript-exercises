function convertToCelsius(degrees){
  let newCelsius = (degrees - 32) * (5/9);
  return newCelsius = Math.round(newCelsius * 10 ) / 10;
}
convertToCelsius();

function convertToFahrenheit(degrees){
  let newFahrenheit = (degrees * (9/5) + 32);
  return newFahrenheit = Math.round(newFahrenheit * 10) / 10 ;
}
convertToFahrenheit();

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

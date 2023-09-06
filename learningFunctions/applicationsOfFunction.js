function celciusToFahrenheit (temperature) {
  return 1.8 * temperature + 32;
}

function fahrenheitToCelcius (temperature) {
  return (temperature - 32) / 1.8;
}

function kelvinToCelcius (temperature) {
  return temperature - 273.15;
}

function celciusToKelvin (temperature) {
  return temperature + 273.15;
}

function kelvinToFahrenheit (temperature) {
  return celciusToFahrenheit(kelvinToCelcius(temperature));
}

function fahrenheitToKelvin (temperature) {
  return celciusToKelvin(fahrenheitToCelcius(temperature));
}


function convertTemperature (temperature, sourceunit, targetunit) {
  let functionToCall = sourceunit + "-" + targetunit;
  switch (functionToCall) {
    case "CELCIUS-FAHRENHEIT" : return celciusToFahrenheit(temperature);
    case "FAHRENHEIT-CELCIUS" : return fahrenheitToCelcius(temperature);
    case "CELCIUS-KELVIN" : return celciusToKelvin(temperature);
    case "KELVIN-CELCIUS" : return kelvinToCelcius(temperature);
    case "KELVIN-FAHRENHEIT" : return kelvinToFahrenheit(temperature);
    case "FAHRENHEIT-KELVIN" : return fahrenheitToKelvin(temperature);
    default : return undefined;
  }
}

//console.log(convertTemperature(0, "CELCIUS", "KELVIN"));

function assertTest (expected, actual) {
  return (expected == actual ? "test-passed" : "test-failed");
}


function runtest () {
  console.log(" Fahrenheit To Kelvin "  + assertTest(273.15, fahrenheitToKelvin(32)));
  console.log(assertTest(32, kelvinToFahrenheit(273.15), " Kelvin To Fahrenheit "));
  console.log(assertTest(-459.67, kelvinToFahrenheit(0), " Kelvin To Fahrenheit "));
  console.log(assertTest(273.15, kelvinToCelcius(32), " Kelvin To Celcius "));
  console.log(assertTest(273.15, celciusToKelvin (32), " Celcius To Kelvin "));
  console.log(assertTest(273.15, fahrenheitToCelcius (32), " Fahrenheit To Celcius "));
  console.log(assertTest(273.15, celciusToFahrenheit(32), " Celcius To Fahrenheit "));

}

runtest()
console.log(fahrenheitToKelvin(0));


function celciusToFahrenheit(temperature){
  return 1.8 * temperature + 32;
}

function fahrenheitToCelcius(temperature){
  return (temperature - 32) / 1.8;
}

function kelvinToCelcius(temperature){
  return temperature - 273.15;
}

function celciusToKelvin(temperature){
  return temperature + 273.15;
}

function kelvinToFahrenheit(temperature){
  return 1.8 * (temperature - 273.15) + 32;
}

function fahrenheitToKelvin(temperature){
  return ((temperature - 32) / 1.8) + 273.15;
}


function convertTemperature(temperature, sourceunit, targetunit){
  let functionToCall = sourceunit + "-" + targetunit;
  switch(functionToCall) {
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

function assertingTest(expected, actual, testMessage){
  return (expected == actual ? testMessage + "test-passed" : testMessage + "test-failed");
}


function runtest(){
  (console.log(assertingTest(273.15, fahrenheitToKelvin(32), " Fahrenheit To Kelvin ")));
  (console.log(assertingTest(32, kelvinToFahrenheit(273.15), " Kelvin To Fahrenheit ")));
  (console.log(assertingTest(273.15, kelvinToCelcius(32), " Kelvin To Celcius ")));
  (console.log(assertingTest(273.15, celciusToKelvin (32), " Celcius To Kelvin ")));
  (console.log(assertingTest(273.15, fahrenheitToCelcius (32), " Fahrenheit To Celcius ")));
  (console.log(assertingTest(273.15, celciusToFahrenheit(32), "Celcius To Fahrenheit ")));

}

//runtest()


function power(x,e){
  return Math.pow(x,e);
}

function squareRoot(a){
  return Math.sqrt(a);
}

function distanceBtwTwoCoordinates(x1, y1, x2, y2){
  return squareRoot(power((x2 - x1), 2) + power((y2 - y1), 2))
}

//compact function for distance between two coordinates
//function distanceBtwTwoCoordinates(x1, y1, x2, y2){
//	return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
//}

//console.log(distanceBtwTwoCoordinates(0, 0, 5, 12))



function ifPointInsideACircle(xCoordinate, yCoordinate, x, y, radius){
  return (radius >= distanceBtwTwoCoordinates(xCoordinate, yCoordinate, x, y)); 
}

//console.log(ifPointInsideACircle(3, 4, 2, 4, 7));

function simpleInterest(principle, rateOfInterest, time) {
  return (principle * rateOfInterest * time) / 100;
}

//console.log(simpleInterest(1000, 10, 1));

function compoundInterest(principalAmount, rateOfInterest, numberOfCompoundingPeriods, time ){
  return principalAmount * ( Math.pow((1 + rateOfInterest/(100 * numberOfCompoundingPeriods)), numberOfCompoundingPeriods * time)) - principalAmount;
}

// A=p(1+r/100n)^nt

//console.log(compoundInterest(600, 4, 3, 1));

function maxOfTwo(num1, num2) {
  return 	Math.max(num1, num2);
}

//console.log(maxOfTwo(3,7));

function maxOfThree(number1, number2, number3) {
  return maxOfTwo(number1, maxOfTwo(number2, number3));
}

//console.log(maxOfThree(-3,8,0));

function fibonacci(nTerm) {
  if (nTerm == 1){
    return 0;
  } else if(nTerm == 2) {
    return 1;
  }
  return fibonacci(nTerm - 1) + fibonacci(nTerm - 2);
}

//console.log(fibonacci(8));


function factorial (number) {
  if (number <= 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

//console.log(factorial(0));

function averageOfFive (number1, number2, number3, number4, number5 ) {
  return (number1 + number2 + number3 + number4 + number5) / 5;
}

//console.log(averageOfFive(2, 5, 1, 9, 3));



function isNumberEven (number) {
  return number % 2 == 0;
}

//console.log(isNumberEven(-8));

function isNumberOdd (number) {
  return number % 2 != 0;
}

//console.log(isNumberOdd(2));

function isDivisibile (divident, divisor) {
  return divident % divisor == 0 ;
};

//console.log(isDivisibile(4,3));

function isNumberPrime (number) {
  let noOfFactor = 0;
  for (divisor = 1; divisor <= number; ++divisor) {
    if (isDivisibile(number, divisor) == true) {
      noOfFactor+=1;
    }
  }
  if (noOfFactor > 2) {
    return false;
  } else {
    return true;	
  }
};

//console.log(isNumberPrime(13));

function nThPrimeNumber (n) {
  let currentPrime = 0;
  for (number=2; number  ; ++number){
    if (isNumberPrime(number) == true) {
      currentPrime+=1;
      if (currentPrime == n) {
        return number;
      }
    }
  }
}

console.log(nThPrimeNumber(1000000));

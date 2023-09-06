function add (x,y) {
  return x + y;
}

function subtraction (a,b) {
  return a - b;
}

function multiplication (a,b) {
  return a * b;
}

function division (x,y) {
  return x / y;
} 

//console.log(add(6,3));
//console.log(subtraction(6,3));
//console.log(multiplication(6,3));
//console.log(division(6,3));

function sumOfNNaturalNum (n) {
  if (n == 1) {
    return 1;
  } 
  return n + sumOfNNaturalNum (n - 1);
}

console.log(sumOfNNaturalNum(6));

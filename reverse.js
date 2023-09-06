const number = 440006;
let reverseNumber = 0;
let remainder = 0;
let numberToRevese = number;

while (numberToRevese > 0){
  remainder = numberToRevese % 10;
  reverseNumber = reverseNumber * 10 + remainder;
  numberToRevese = (Math.floor(numberToRevese / 10));
}

console.log(reverseNumber)


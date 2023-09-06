const a = +process.argv[2];
const b = +process.argv[3];

const add = function(a, b) {
  return a + b;
}
console.log(add(a, b));


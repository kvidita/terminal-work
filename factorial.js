// considering calculateFactorial accepts only positive numbers

const calculateFactorial = function(num) {
	let factorial = 1;
	for (let count = num; count > 0; count--) {
		factorial = factorial * count;
	}
	return factorial;
}

const main = function() {
	const args = process.argv;
	const number = toNumber(args[2]); 
	console.log(calculateFactorial(number));
}

const toNumber = function(string) {
	return +string;
}

main();


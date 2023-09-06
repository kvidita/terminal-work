function isPrime (number) {
	const threshold = Math.round(Math.sqrt(number));
	let current = 2;
	if ( number == 2 ) {
		return true;
	}
	while (current <= threshold) {
		if (number % current == 0) {
			return false;
		}
		current++;
	}
	return true;
}

function nthPrime (nthTerm) {

}

function main () {
}

main();

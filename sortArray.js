const sortArray = function(arr) {
	const array = arr;
	for (let count = 0; count < array.length; count++) {
		for (let index = 0; index < array.length; index++) {
			if (array[index] < array[index + 1]) {
				const	swapingNum = array[index];
				array[index] = array[index + 1];
				array[index + 1] = swapingNum;
			}
		}
	}
	return array;
}

console.log(sortArray([7,3,9,5,2,0]))

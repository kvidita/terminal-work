//working but not much convenient
//for (let i = 1; i <= 30; i++) {
//	let	message = i;
//	message = (message % 15 == 0 ? "fizz bizz" : message );
//	message = (message % 5 == 0 ? "bizz" : message );
//	message = (message % 3 == 0 ? "fizz" : message );
//	console.log(message);
//}


for(let i = 1; i <= 30; i++) {
	let	message = i;

	if(message % 15 == 0 ) {
		message = "fizzbizz"
	} else if(message % 5 == 0) {
		message = "bizz"
	} else if(message % 3 == 0) {
		message = "fizz"
	}

	console.log(message);
}


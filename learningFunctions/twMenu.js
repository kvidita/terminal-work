function concatinate(a, b, c, d, e, f, g) {
	const comma=", ";
	return a + comma + b + comma + c + comma + d + comma + e + comma + f + comma + g;
}

function twMenu (day) {
	const gravy1 = "daal";
	const gravy2 = "paneer";
	const gravy3 = "rajama";
	const gravy4 = "sambhar";
	const gravy5 = "chole";
	const salad = "salad";
	const rice1 = "plain rice";
	const rice2 = "fried rice";
	const curd = "curd";
	const buttermilk = "buttermilk";

	switch (day) {
		case "monday" : return concatinate(gravy1,  gravy4,  rice1,  rice2,  salad,  curd,  buttermilk);
		case "tuesday" : return concatinate(gravy2,  gravy4,  rice1,  rice2,  salad,  curd,  buttermilk);
		case "wednesday" : return concatinate(gravy3,  gravy4,  rice1,  rice2,  salad,  curd,  buttermilk);
		case "thursday" : return concatinate(gravy5,  gravy4,  rice1,  rice2,  salad,  curd,  buttermilk);
		case "friday" : return concatinate(gravy2,  gravy4,  rice1,  rice2,  salad,  curd,  buttermilk);
		case "saturday" : return concatinate(gravy3,  gravy4,  rice1,  rice2,  salad,  curd,  buttermilk);
		case "sunday" : return "no food for today...!!!";
		default : return "wrong entry";
	}
}
console.log(1,twMenu("monday"));
console.log(2,twMenu("tuesday"));
console.log(3,twMenu("wednesday"));
console.log(4,twMenu("thursday"));
console.log(5,twMenu("friday"));
console.log(6,twMenu("saturday"));
console.log(7,twMenu("sunday"));
console.log(8,twMenu("tuxesday"));

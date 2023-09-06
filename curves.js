//const cordinateX = 10;
//const cordinateY = 10;
//centreX = 0;
//centreY = 0;
//radius = 10;
//
//for(let y = -10; y <= cordinateY; y++) {
//	let row = "";
//	for(let x = -10; x <= cordinateX; x++) {
//		const	distance = Math.floor(Math.sqrt(((centreX - x) ** 2) + ((centreY - y) ** 2)));
//		if(distance == radius) {
//			row = row + "**";
//		} else {
//			row = row + "  "
//		}
//	}
//	console.log(row);
//}


const cordinateX = 10;
const cordinateY = 10;
centreX = 0;
centreY = 0;
radius = 10;

for(let y = -10; y <= cordinateY; y++) {
	let row = "";
	for(let x = -10; x <= cordinateX; x++) {
		const	distance = Math.floor(Math.sqrt(((centreX - x) ** 2) + ((centreY - y) ** 2)));
		if(distance == radius) {
			row = row + "**";
		} else {
			row = row + "  "
		}
	}
	console.log(row);
}

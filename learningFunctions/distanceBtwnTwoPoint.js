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



function ifPointInsideACircle(x, y){
  const radius=5;
  xCoordinate=0;
  yCoordinate=0;
  return (radius >= distanceBtwTwoCoordinates(xCoordinate, yCoordinate, x, y)) ? "point lies inside the circle" : "point lies outside the circle";
}

console.log(ifPointInsideACircle(2, 4));


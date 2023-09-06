//----------------------------------asserting-test--------------------------------------------

const assertTest = function(expected, actual, text) {

	const passed = "🟢 ";
	const failed = "🔴 ";
	const	actualExpectedMessage = "\n\tExpected: " + expected + "\n" + "\tActual: " + actual;

	const result = (expected === actual) ?	passed + text : failed + text + actualExpectedMessage;
	console.log(result);
}
//--------------------------------summary---------------------------------------------------------




// -------------------------------requirement-1---------------------------------------------------
const drawGrid = function(width, depth) {
	let grid = "";
	const symbol = "*";
	const newLine = "\n";
	for (let row = 0; row < depth; row++) {
		grid = grid + symbol.repeat(width) + newLine;
	};
	return grid;
};

const testDrawGrid = function() {
	const headLine = "testing draw grid";
	console.log("\t\t\t" + headLine);
	console.log("\t\t\t" + "-".repeat(headLine.length));
	assertTest("", drawGrid(0,0), "for depth and width to be 0 ");
	assertTest("*\n", drawGrid(1,1), "for depth and width to be 1");
	assertTest("**\n", drawGrid(2,1), "for depth and width to be 2 and 1 respectively");
	assertTest("*\n*\n", drawGrid(1,2), "for depth and width to be 1 and 2 respectively");
	assertTest("**\n**\n", drawGrid(2,2), "for depth and width to be 2");
	assertTest("*****\n*****\n*****\n", drawGrid(5,3), "for depth and width to be 3 and 5 respectively");
	console.log("\n");
}



//----------------------------requirement-2----------------------------------------------------


const hollowRectangle= function(width, depth) {
	let voidRectangle = "";
	closingLines = "*".repeat(width) + "\n";
	if (depth === 1){
		return closingLines;
	}
	for (let row = 1; row <= depth - 2; row++) {
		voidRectangle = voidRectangle + "*" + " ".repeat(width - 2) + "*" + "\n";
	}
	return closingLines + voidRectangle + closingLines;
}

const testRectangleBoundary = function() {
	const headLine = "testing rectangle boundary";
	console.log("\t\t\t" + headLine);
	console.log("\t\t\t" + "-".repeat(headLine.length));
	assertTest("\n\n", hollowRectangle(0,0), "for depth and width to be 0");
	assertTest("*\n", hollowRectangle(1,1), "for depth and width to be 1");
	assertTest("**\n**\n", hollowRectangle(2,2), "for depth and width to be 2");
	assertTest("*\n*\n", hollowRectangle(1,2), "for depth and width to be 2 and 1 respectively");
	assertTest("**\n", hollowRectangle(2,1), "for depth and width to be 1 and 2 respectively");
	assertTest("*****\n*   *\n*   *\n*****\n", hollowRectangle(5,4), "for depth and width to be 4 and 5");
	console.log("\n");
}



// ----------------------------------requirement-3---------------------------------------------

const alternatePattern = function(width, depth) {
	let pattern = "";
	const patternType1 = "-";
	const patternType2 = "*";
	for (let row = 1; row <= depth; row++){
		if (row % 2 === 0) {
			pattern = pattern + patternType2.repeat(width) + "\n";
		} else {
			pattern = pattern + patternType1.repeat(width) + "\n";
		}
	}
	return pattern;
}

const testForAlternatePattern = function() {
	const headLine = "test for alternate pattern";
	console.log("\t\t\t" + headLine);
	console.log("\t\t\t" + "-".repeat(headLine.length))
	assertTest("", alternatePattern(0,0), "for zero lines")
	assertTest("-\n", alternatePattern(1,1), "for one line and one occurance");
	assertTest("-\n*\n", alternatePattern(1,2), "for two lines and one occurance");
	assertTest("--\n", alternatePattern(2,1), "for one line and two occurance")
	assertTest("--------\n********\n--------\n********\n", alternatePattern(8,4), "for four lines and eight occurance")
}



// ------------------------------requirement-4------------------------------------------------


const drawNNumberOfGrid = function(width, depth, r) {
	let nGrid = "";
	for (let row = 0; row < depth; row++) {
		nGrid = nGrid + ("*".repeat(width) + " ").repeat(r) + "\n";
	};
	return nGrid;
};


const testDrawNNumberOfGrid = function() {
	const headLine = "testing drawing n number of grid";
	console.log("\t\t\t" + headLine);
	console.log("\t\t\t" + "-".repeat(headLine.length))
	assertTest("\n\n" , drawNNumberOfGrid(2,2,0), "for zero number of grid")
	assertTest("** \n** \n", drawNNumberOfGrid(2,2,1), "for one number of grid")
	assertTest("** ** \n** ** \n", drawNNumberOfGrid(2,2,2), "for two grid")
	assertTest("** ** ** ** \n** ** ** ** \n", drawNNumberOfGrid(2,2,4), "for four grids")
}



// --------------------------------requirement-5----------------------------------------------



const triangle = function(lines) {
	let trianglePattern = "";
	for (let currentLine = 1; currentLine <= lines; currentLine++) {
		trianglePattern = trianglePattern + "*".repeat(currentLine) + "\n";	
	}
	return trianglePattern;
}


const testTriangle = function() {
	const headLine = "testing triangle";
	console.log("\t\t\t" + headLine);
	console.log("\t\t\t" + "-".repeat(headLine.length))
	assertTest("", triangle(0), "for zero length");
	assertTest("*\n", triangle(1), "for one length");
	assertTest("*\n**\n", triangle(2), "for two length");
	assertTest("*\n**\n***\n****\n*****\n", triangle(5), "for five lines");
}



//--------------------------------requirement-6------------------------------------------------


const triangleAtRight = function(lines) {
	let trianglePattern = "";
	for (let currentLine = 1; currentLine <= lines; currentLine++) {
		trianglePattern = trianglePattern + " ".repeat(lines - currentLine) + "*".repeat(currentLine) + "\n";	
	}
	return trianglePattern;
}

const testTriangleAtRigjht = function() {
	const headLine = "testing triangle at righti";
	console.log("\t\t\t" + headLine);
	console.log("\t\t\t" + "-".repeat(headLine.length))
	assertTest("", triangleAtRight(0), "for zero line");
	assertTest("*\n", triangleAtRight(1), "for one line");
	assertTest(" *\n**\n", triangleAtRight(2), "for two lines");
	assertTest("   *\n  **\n ***\n****\n", triangleAtRight(4), "for eight lines");
	assertTest("", triangleAtRight(-1), "for negative input");
}



// -----------------------------------requirement-7-------------------------------------------

const diamondPattern = function(n) {
	let dimension = n;
	const spaces = " ";
	const symbol = "*";
	const newLine = "\n";
	let diamondShape = symbol.repeat(n) + newLine;

	for (let count = 1; count < (n+1)/2; count++) {
		const nextLine = spaces.repeat(count) + symbol.repeat(dimension - 2) + newLine;
		dimension = dimension - 2;
		diamondShape = nextLine + diamondShape + nextLine; 
	}

	return diamondShape;
}


const testDiamondPattern = function() {
	const headLine = "testing diamond pattern";
	console.log("\t\t\t" + headLine);
	console.log("\t\t\t" + "-".repeat(headLine.length))
	assertTest("\n", diamondPattern(0), "for zero lines diamond should be empty");
	assertTest("*\n", diamondPattern(1), "for one line diamond should have one star");
	assertTest(" *\n***\n *\n", diamondPattern(3), "for three lines");
	assertTest("  *\n ***\n*****\n ***\n  *\n", diamondPattern(5), "for five lines");
}


// --------------------------------------requirement-8-------------------------------------------

const arrayEquality = function(array1, array2) {
	for (let count = 0; count < array1.length; count++) {
		if (array1[count] !== array2[count]) {
			return false;
		}
	}
	return true;
}

console.log(arrayEquality([1, 2], [1, 2]))

const generateArray = function(length, element) {
	let array = [];
	for (let count = 0; count < length; count++) {
		array.push(element);
	}
	return array;
}



const generateRectangle = function(width, height, character) {
	const rectangleRow =	generateArray(width, character);
	rectangle = generateArray(height, rectangleRow);
	return rectangle;
}


const testRectangle = function() {
	assertTest("", generateRectangle(0, 0, "*"), "for zero coulmn and row")
	assertTest("*", generateRectangle(1, 1, "*"), "for one coulmn and row")
	assertTest("*,*,*,*", generateRectangle(1, 4, "*").toString(), "for one coulmn and four row")
	assertTest("*,*,*", generateRectangle(3, 1, "*").toString(), "for three coulmn and one row")
	assertTest("*,*,*,*,*,*,*,*,*", generateRectangle(3, 3, "*").toString(), "for three coulmn and row")
}



const hollowLine = function(length, character) {
	const space = " ";
	let hollowRow = [];
	if (length === 1) {
		return hollowRow.push(character);
	}
	hollowRow.push(character)
	for (let count = 0; count < (length - 2); count++) {
		hollowRow.push(space);
	}

	hollowRow.push(character);
	return hollowRow
}

const generateHollowRectangle = function(width, height, character) {
	let rectangle = "";
	let hollowRectangle = [];
	const closingLine = generateArray(width, character);
	hollowRectangle.push(closingLine);
	if (height === 1) {
		return hollowRectangle;
	}
	for (let count = 0; count < (height - 2); count++) {
		hollowRectangle.push(hollowLine(width, character));
	}
	hollowRectangle.push(closingLine);
}

const patternFromArray = function(width, height, array) {
	let string = "";
	for (let count =0; count < width; count++) {
		for (let row = 0; row < height; height++) {
			string = string + array[count][row];
		}
		console.log(string);
		string = "";
	}
}

patternFromArray(3, 3, [['*','*','*'],['*','*','*'],['*','*','*']])

// console.log(generateHollowRectangle(3, 3, "*"))


const testHollowRectangle = function() {
	assertTest("*,*,*,*", generateHollowRectangle(2, 2, "*").toString(), "for two row and two columns")
	assertTest("*,*,*,*, ,*,*,*,*", generateHollowRectangle(3, 3, "*").toString(), "for three row and three columns")
	assertTest("*", generateHollowRectangle(1, 1, "*").toString(), "for one row and one columns")
}

//---------------------------------------Function-Calling----------------------------------------

const functionCall = function() {
	// testDiamondPattern();
	// testTriangleAtRigjht();
	// testTriangle();
	// testDrawNNumberOfGrid();
	// testForAlternatePattern();
	// testRectangleBoundary();
	testDrawGrid();
	testRectangle();
	testHollowRectangle();
}

functionCall();


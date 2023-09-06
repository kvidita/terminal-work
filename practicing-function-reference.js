const add = function(a, b) {
  return a + b;
}

const sub = function(a, b) {
  return a - b;
}

const mul = function(a, b) {
  return a * b;
}

const operations = {
  "add": add,
  "sub": sub,
  "mul": mul
}

const evaluate = function(operator, operand1, operand2) {
  return operations[operator](operand1, operand2);
}

const loud = function(text) {
  return text.toUpperCase();
}

const withDashes = function(text) {
  return "-----" + text + "-----";
}

const plain = function(text) {
  return text;
}

const underlined = function(text) {
  return text + "\n" + "-".repeat(text.length);
}

const styles = {
  "loud": loud,
  "withDashes": withDashes,
  "plain": plain,
  "underlined": underlined
}

const greet = function(text, style) {
  return styles[style](text);
}

const isContinous = function(string1, string2) {
  return string1[string1.length - 1] === string2[0];
}

const greaterThan = function(number1, number2) {
  return number1 > number2;
}

const smallerThan = function(number1, number2) {
  return number1 < number2;
}

const differsBy = function(number1, number2, difference) {
  return number2 - number1 === difference;
}

const isMultipleBy = function(number1, number2, ratio) {
  return number2/number1 === ratio;
}

const isEveryItemRelated = function(list, relation) {
  for(let count = 0; count < list.length - 1; count++) {
    if(!relation(list[count], list[count + 1])) {
      return false;
    }
  }

  return true;
};

const isEveryElementRelated = function(list, relation, comparedBy) {
  for(let count = 0; count < list.length - 1; count++) {
    if(!relation(list[count], list[count + 1], comparedBy)) {
      return false;
    }
  }

  return true;
};

const doubleNumber = function(number) {
  return number * 2;
};

const convertStringToNumber = function(string) {
  return +string;
};

const deformArrayElements = function(list, deformation) {
  const deformedList = [];
  for (let count = 0; count < list.length; count++) {
    deformedList.push(deformation(list[count]));
  }
  return deformedList;
};

const doubleElements = function(list) {
  return deformArrayElements(list, doubleNumber);
};

const toNumber = function(list) {
  return deformArrayElements(list, convertStringToNumber);
};


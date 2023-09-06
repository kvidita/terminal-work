const isEven = function(number) {
  return number % 2 === 0;
}

const isOdd = function(number) {
  return number % 2 !== 0;
}

const add = function(a, b) {
  return a + b;
}

const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];

const getShortestLength = function(list1, list2) {
  return list1.length > list2.length ? list2.length : list1.length;
}

const zip = function(list1, list2) {
  zipLength = getShortestLength(list1, list2);
  return list1.slice(0, zipLength).map(function(element, index) {
    return ([element, list2[index]]);
  });
}

const chunk = function(context, element) {
  if(context.length === 0) {
    context.push([]);
  }

  if(context[context.length - 1] === chunkSize) {
    context.push(context[context.length - 1].slice(chunkSize - overlap));
  }

  return context[context.length - 1].push(element);
}

/*
input = ([1, 2, 3, 4, 5], 2)
output = [[1, 2], [3, 4]]
step 1- []                - c-[[]] e-1, i-0
step 2- [1]               - c-[[1]] e-2, i-1
step 3- [1,2]             - c-[[1,2]] e-3, i-2
step 4- [1,2], [3]        - c-[[1,2],[3]] e-4 i-3
step 5- [1,2], [3,4]      - c-[[1,2],[3,4]] e-5, i-4
step 6- [1,2], [3,4], [5] - c-[[1,2],[3,4],[5]]

array.reduce(chunk,[])
 */


const chunk = function(context, element){
  if(context.length === 0){
    context.push([]);
  }

  if(context[context.length - 1].length === chunkSize) {
    context.push([]);
  }

  context[context.length - 1].push(element);

  return context;
}

const chunk = function(list, size) {
  const chunkSize = size;
  return list.reduce( function(context, element){
    if(context.length === 0) {
      context.push([]);
    }

    let lastChunk = context[context.length - 1];

    if(chunkSize === 0) {
      lastChunk.push(element);
      return context;
    }

    if(lastChunk.length === chunkSize) {
      context.push([]);
    }

    lastChunk = context[context.length - 1];
    lastChunk.push(element);

    return context;
  }, []);
}

const chunk = function(context, element, index) {
  if(index % chunkSize === 0) {
    context.push([]);
  }

  context[context.length - 1].push(element);

  return context;
}

chunkSize = 2;
number = [1, 2, 3, 4, 5, 6];

const updatefrequency = function(context, element) {
  if(context[element] === undefined) {
    context[element] = 0;
  } 
  context[element] += 1;

  return context;
}

const frequency = function(string) {
  const list = string.split("");
  return list.reduce(updatefrequency, {});
};

const updateScorecard = function(scorecard, over) {
  return over.reduce(function(scorecard, delivery){
    return scorecard[delivery] += 1;
  }, scorecard);
}

const add = function(a, b) {
  return typeof(b) === 'number' ? a + b : a;
}

const calculateTotal = function(over){
  return over.reduce(add, 0);
}

const updateScorecard = function(scorecard, over) {
  for(const delivery of over) {
    scorecard[delivery] += 1;
  }
  scorecard.totalRun += calculateTotal(over);
  return scorecard;
}

const updateSummary = function(scorecard) {
  return {
    totalRun: scorecard.totalRun + scorecard.NB + scorecard.WB,
    fours: scorecard[4],
    sixes: scorecard[6],
    wickets: scorecard.W,
    extras: scorecard.NB + scorecard.WB,
    noBall: scorecard.NB,
  }
}

const inningSummary = function(overs) {
  let scorecard = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 6: 0, totalRun: 0, overTotal: 0, W: 0, NB: 0, WB: 0}
  scorecard = overs.reduce(updateScorecard, scorecard);
  return updateSummary(scorecard);
}

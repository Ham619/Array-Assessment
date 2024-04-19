const reduce = require("./reduce");

const items = [1, 2, 3, 4, 5];

function sum(acc, num) {
  return acc + num;
}

const total = reduce(items, sum, 0);
console.log(total); 

const totalWithoutStartingValue = reduce(items, sum);
console.log(totalWithoutStartingValue)
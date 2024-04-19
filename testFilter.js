const filter = require("./filter");

const items = [1, 2, 3, 4, 5];

function isGreaterThan3(num) {
  return num > 3;
}

const greaterThan3 = filter(items, isGreaterThan3);
console.log(greaterThan3); 

const allNumbers = filter(items, (num) => num<=3);
console.log(allNumbers);
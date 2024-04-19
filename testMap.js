const map = require("./map");

const items = [1, 2, 3, 4, 5];

function double(item) {
  return item * 2;
}

const doubledItems = map(items, double);
console.log(doubledItems);
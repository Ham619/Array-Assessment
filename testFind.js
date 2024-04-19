const find = require("./find");

const items = [1, 2, 3, 4, 5];

function isEven(num) {
  return num % 2 === 0;
}

const firstEven = find(items, isEven);
console.log(firstEven); 

const noEvens = [1, 3, 5];
const findEvenInNoEvens = find(noEvens, isEven);
console.log(findEvenInNoEvens);
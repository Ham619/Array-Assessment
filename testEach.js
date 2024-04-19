const each  = require('./each.js')

const items = [1, 2, 3, 4, 5];

function logItem(item, index) {
  console.log(`Item: ${item}, Index: ${index}`);
}

each(items, logItem);
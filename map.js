function map(elements, cb) {
    const newArray = [];
  
    for (let i = 0; i < elements.length; i++) {
      const transformedElement = cb(elements[i], i);
      newArray.push(transformedElement);
    }
  return newArray;
}

module.exports = map;
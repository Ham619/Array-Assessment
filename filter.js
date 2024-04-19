function filter(elements, cb) {
    const filteredArray = [];
  
    for (let i = 0; i < elements.length; i++) {
      
        if (cb(elements[i], i)) {
        filteredArray.push(elements[i]);
      }
    }
  return filteredArray;
}

module.exports = filter;

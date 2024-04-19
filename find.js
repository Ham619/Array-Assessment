function find(elements, cb) {
    for (let i = 0; i < elements.length; i++) {
      
      if (cb(elements[i], i)) {
        return elements[i];
      }
    }
    return undefined;
}

module.exports = find;
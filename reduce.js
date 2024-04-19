function reduce(elements, cb, startingValue) {
    
    let accumulator = startingValue !== undefined ? startingValue : elements[0];

    for (let i = startingValue !== undefined ? 1 : 0; i < elements.length; i++) {
      accumulator = cb(accumulator, elements[i]);
    }
    return accumulator;
}

module.exports = reduce;
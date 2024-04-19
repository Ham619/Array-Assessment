function flatten(elements) {
    const flattenedArray = [];
  
    for (let element of elements) {
      
      if (Array.isArray(element)) {
        flattenedArray.push(...flatten(element));
      } else {
        flattenedArray.push(element);
      }
    }
  
    return flattenedArray;
}

module.exports = flatten;
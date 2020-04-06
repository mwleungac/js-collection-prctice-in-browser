'use strict';

function collectSameElements(collectionA, collectionB) {
    let result = [];
      collectionA.forEach(element => {
    if (collectionB.includes(element)) {
      result.push(element);
    }
  });
  return result;
}

'use strict';

function collectSameElements(collectionA, collectionB) {
  let same_elements = [];
  collectionA.forEach(element => {
    if (collectionB.includes(element)) {
      same_elements.push(element);
    }
  });
  return same_elements;
}

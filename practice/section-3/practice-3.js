'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = countSameElements(collectionA);
  
  let objectValue = objectB.value;
  collectionC.forEach(element => {
    let elementKey = element.key;
    if (objectValue.includes(elementKey)) {
      element.count -= parseInt(element.count/3);
    }
  });
  return collectionC;
}


function countSameElements(collection) {
  let sameElements = [];
  collection.forEach(element => {
    let existingObj = sameElements.find(({ key }) => key === element);
    if (!existingObj) {
      sameElements.push({ key: element, count: 1 });
    } else {
      existingObj.count++;
    }
  });
  return sameElements;
}

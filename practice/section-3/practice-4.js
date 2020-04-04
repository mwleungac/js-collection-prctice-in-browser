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
	let object = Split(element);
    let existingObj = sameElements.find(({ key }) => object.key === key);
    if (!existingObj) {
      sameElements.push(object);
    } else {
      existingObj.count++;
    }
  });
  return sameElements;
}

function Split(element) {
  let key = element;
  let count = 1;
  if (element.includes('-')) {
    [key, count] = element.split('-');
  }
  return { key: key, count: parseInt(count) };
}

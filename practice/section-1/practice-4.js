'use strict';

function collectSameElements(collectionA, objectB) {
	var result = [];
	for (var i = 0; i < collectionA.length; i++)
	{
		for (var n = 0; n < collectionB.value.length; n++)
		{
			if (collectionB.value[n].includes(collectionA[i].key[0]))
			{
				result.push(collectionA[i].key[0]);
			}
		}
	}
	return result;

}

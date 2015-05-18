// Find Last Index
var findLastIndex = function(array, predicate) {
	var result = -1;

	for (var i = array.length - 1; i >= 0; i--) {
		if (predicate(array[i]) && result === -1) {
			result = i;
		}
	}

	return result;
};

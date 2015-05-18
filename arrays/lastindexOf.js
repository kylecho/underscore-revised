// Last IndexOf
var lastIndexOf = function(array, value) {
	var result = -1;

	for (var i = array.length - 1; i >= 0; i--) {
		if (array[i] === value && result === -1) {
			result = i;
		}
	}

	return result;
};

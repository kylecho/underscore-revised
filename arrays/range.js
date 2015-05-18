// Range
var range = function(args) {
	var result = [];

	if (arguments.length === 1) {
		for (var i = 0; i < arguments[0]; i++) {
			result[i] = i;
		}
	} else if (arguments.length === 2) {
		for (var i = arguments[0]; i < arguments[1]; i++) {
			result.push(i);
		}
	} else if (arguments.length === 3) {
		if (arguments[0] > arguments[1] && 0 > arguments[2]) {
			for (var i = arguments[0]; i > arguments[1]; i += arguments[2]) {
				result.push(i);
			}
		} else {
			for (var i = arguments[0]; i < arguments[1]; i += arguments[2]) {
				result.push(i);
			}
		}
	}

	return result;
};

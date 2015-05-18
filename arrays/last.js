// Last
var last = function(array) {
	if (arguments.length < 2) {
		return array[array.length - 1];
	} else {
		return array.slice(array.length - arguments[1], array.length);
	}
};

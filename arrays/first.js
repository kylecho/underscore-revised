// First
var first = function(array) {
	if (arguments.length < 2) {
		return array[0];
	} else {
		return array.slice(0, arguments[1]);
	}
};

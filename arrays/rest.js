// Rest
var rest = function(array) {
	if (arguments.length < 2) {
		return array.slice(1, array.length);
	} else {
		return array.slice(arguments[1], array.length);
	}
};

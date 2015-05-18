// Initial
var initial = function(array) {
	if (arguments.length < 2) {
		return array.slice(0, array.length - 1);
	} else {
		return array.slice(0, array.length - arguments[1]);
	}
};

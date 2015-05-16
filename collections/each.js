// Hard code
var each = function(list, iteratee) {
	if (Array.isArray(list)) {
		for (var i = 0; i < list.length; i++) {
			iteratee(list[i], i, list);
		}
	} else if (list.constructor === Object) {
		for (var key in list) {
			iteratee(list[key], key, list);
		}
	}
};

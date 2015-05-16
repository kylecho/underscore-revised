// Hard code
var map = function(list, iteratee) {
	var result = [];
	if (Array.isArray(list)) {
		for (var i = 0; i < list.length; i++) {
			result.push(iteratee(list[i]), i, list);
		}
	} else if (list.constructor === Object) {
		for (var key in list) {
			result.push(iteratee(list[key], key, list));
		}
	}
	return result;
};

// Functional style
var map = function(list, iteratee) {
	var result = [];
	_.each(list, function(element, index){
		result.push(iteratee(element, index, list));
	});
	return result;
};

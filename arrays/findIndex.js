// Find Index
var findIndex = function(array, predicate) {
	var result = -1;

	_.each(array, function(elem, index){
		if (predicate(elem) && result === -1) {
			result = index;
		}
	});

	return result;
};

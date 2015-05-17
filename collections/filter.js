// Filter
var filter = function(list, predicate) {
	var result = [];
	
	_.each(list, function(elem){
		if (predicate(elem)) {
			result.push(elem);
		}
	})

	return result;
};

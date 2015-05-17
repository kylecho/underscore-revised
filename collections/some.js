// Some
var some = function(list, predicate) {
	var result = false;

	_.each(list, function(elem){
		if (predicate(elem)) {
			result = true;
		}
	});

	return result;
};

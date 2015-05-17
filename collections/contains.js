// Contains
var contains = function(list, value) {
	var result = false;

	_.each(list, function(elem){
		if (elem === value) {
			result = true;
		}
	});

	return result;
};

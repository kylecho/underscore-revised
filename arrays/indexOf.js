// IndexOf
var indexOf = function(array, value) {
	var result = -1;

	_.each(array, function(elem, index){
		if (elem === value && result === -1) {
			result = index;
		}
	});

	return result;
};

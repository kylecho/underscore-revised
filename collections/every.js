// Every
var every = function(list, predicate) {
	var result = true;
	
	_.each(list, function(elem){
		if (!predicate(elem)) {
			result = false;
		}
	});

	return result;
};

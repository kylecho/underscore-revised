// Find
var find = function(list, predicate) {
	var found;

	_.each(list, function(elem){
		if (!found && predicate(elem)) {
			return found = elem;
		}
	});

	return found;
};

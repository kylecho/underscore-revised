// Partition
var partition = function(array, predicate) {
	var result = [[],[]];

	_.each(array, function(elem){
		if (predicate(elem)) {
			result[0].push(elem);
		} else {
			result[1].push(elem);
		}
	});

	return result;
};

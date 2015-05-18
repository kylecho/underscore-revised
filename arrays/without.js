// Without
var without = function(array) {
	var values = Array.prototype.slice.call(arguments).slice(1);
	var output = [];

	_.each(array, function(elem){
		if (!(_.some(values, function(val){ return elem === val; }))) {
			output.push(elem);
		}
	});

	return output;
};

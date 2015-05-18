// Uniq
var uniq = function(array) {
	var output = [];

	_.each(array, function(elem){
		if (output.indexOf(elem) == -1) {
			output.push(elem);
		}
	});

	return output;
};

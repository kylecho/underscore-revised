// Union
var union = function(args) {
	var arrays = Array.prototype.slice.call(arguments).slice();
	var output = [];

	var myArr = _.reduce(arrays, function(memo, elem){
		return memo.concat(elem);
	});

	_.each(myArr, function(e){
		if (output.indexOf(e) == -1) {
			output.push(e);
		}
	});

	return output;
};

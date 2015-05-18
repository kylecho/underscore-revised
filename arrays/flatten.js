// Flatten
var flatten = function flatten(array) {
	if (arguments[1] === true) {
		return _.reduce(array, function(memo, elem){
			return memo.concat(elem);
		}, []);
	} else if (_.some(array, function(e){return Array.isArray(e)})) {
		return flatten(_.reduce(array, function(memo, elem){
			return memo.concat(elem);
		}, []));
	} else {
		return array;
	}
};

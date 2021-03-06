// Reduce
var reduce = function(list, iteratee, memo) {
	var memoUndefined = arguments.length < 3;
	_.each(list, function(elem, index, list){
		if (memoUndefined) {
			memoUndefined = false;
			memo = elem;
		} else {
			memo = iteratee(memo, elem, index, list);
		}
	});
	return memo;
};

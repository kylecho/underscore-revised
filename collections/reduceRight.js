// Reduce Right
var reduceRight = function(list, iteratee, memo) {
	list = list.reverse();
	var memoUndefined = arguments.length < 3;
	_.each(list, function(elem, index){
		if (memoUndefined) {
			memoUndefined = false;
			memo = elem;
		} else {
			memo = iteratee(memo, elem, index, list);
		}
	});
	return memo;
};

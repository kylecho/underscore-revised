// After
var after = function(count, callback) {
	var innerCount = 0;

	return function(){
		if (innerCount < count) {
			innerCount++;
		} else {
			return callback();
		}
	};

};

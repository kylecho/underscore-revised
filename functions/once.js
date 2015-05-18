// Once
var once = function(callback) {
	var called = false;
	return function(){
		if (!called) {
			called = true;
			return callback();
		} else {
			return false;
		}
	};
};

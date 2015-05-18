// Throttle
var throttle = function(callback, wait) {
	var called = false;
	return function(){
		if (!called) {
			called = true;
			setTimeout(function(){ called = false; }, wait);
			return callback();
		} else {
			return console.log('Wait period has not passed yet.');
		}
	};
};

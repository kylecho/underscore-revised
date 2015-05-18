// Before
var before = function(count, callback) {
	var innerCount = count;
	return function(){
		if (count > 0) {
			count--;
			return callback();
		} else {
			console.log('Maximum call has reached. Ask for a raise.');
		}
	};	
};

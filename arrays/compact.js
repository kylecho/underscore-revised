// Compact
var compact = function(array) {
	var result = [];
	
	_.each(array, function(e){
		if (!(e == false || e == null || e == 0 || e == "" || e == undefined || e == NaN)) {
			result.push(e);
		}
	});
	
	return result;
};

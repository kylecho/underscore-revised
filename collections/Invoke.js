// Invoke
var invoke = function(list, methodName) {
	var result = [];
	
	_.each(list, function(elem){
		result.push(elem[methodName].call(elem));
	});

	return result;
};

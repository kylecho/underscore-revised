// Extend
var extend = function(destination, source) {
	var sources = Array.prototype.slice.call(arguments).slice(1);

	_.each(sources, function(obj){
		_.each(obj, function(value, key){
			destination[key] = value;
		});
	});

	return destination;
};

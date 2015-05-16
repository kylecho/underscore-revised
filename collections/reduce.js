// Explicit style
var reduce = function(list, iteratee, initial) {
	// Array
	if (Array.isArray(list)) {
		var start;
		if (arguments.length === 3) {
			start = initial;
			for (var i = 0; i < list.length; i++) {
				start = iteratee(start, list[i], i);
			}
		} else {
			start = list[0];
			for (var i = 1; i < list.length; i++) {
				start = iteratee(start, list[i], i);
			}
		}
	}
	// Object
	if (list.constructor === Object) {
		var start;
		if (arguments.length === 3) {
			start = initial;
			for (var key in list) {
				start = iteratee(start, list[key], key);
			}
		} else {
			start = list[Object.keys(list)[0]]; // Object.keys({one: 1, two: 2, three: 3}) returns ["one", "two", "three"]
			delete list[Object.keys(list)[0]];	// Delete the first property to avoid duplication
			for (var key in list) {
				start = iteratee(start, list[key], key);
			}
		}
	}
	return start;
};

// Functional style
var reduce = function(list, iteratee, initial) {
	var start;
	if (Array.isArray(list)) {
		if (arguments.length === 3) {
			start = initial;
			_.each(list, function(element, index, array){
				start = iteratee(start, element, index);
			});
		} else {
			start = list[0];
			list.shift(); // Delete the first element to avoid duplication
			_.each(list, function(element, index, list){
				start = iteratee(start, element, index);
			});
		}
	} else if (list.constructor === Object) {
		if (arguments.length === 3) {
			start = initial;
			_.each(list, function(element, key, list){
				start = iteratee(start, element, key);
			});
		} else {
			start = list[Object.keys(list)[0]];
			delete list[Object.keys(list)[0]]; // Delete the first property to avoid duplication
			_.each(list, function(element, key, list){
				start = iteratee(start, element, key);
			});
		}
	}
	return start;
};
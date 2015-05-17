// Size
var size = function(list) {
	if (Array.isArray(list)) {
		return list.length;
	} else {
		var count = 0;
		for (var key in list) {
			count++;
		}
	}
	return count;
};

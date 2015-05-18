// Compose
var compose = function(callback1, callback2) {
	return function(callback3) {
		return callback1(callback2(callback3));
	}
};

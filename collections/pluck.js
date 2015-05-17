// Pluck
var pluck = function(list, propertyName) {
	return _.map(list, function(elem){
		return elem[propertyName];
	});
};

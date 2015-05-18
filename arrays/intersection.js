// Intersection
var contains = function(list, value) {
  var result = false;
  _.each(list, function(elem){
    if (elem === value) {
      result = true;
    }
  });
  return result;
};

var intersection = function(array) {
  var result = [];
  var argsLength = arguments.length;
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (_.contains(result, item)) continue;
    for (var j = 1; j < argsLength; j++) {
      if (!_.contains(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }
  return result;
};

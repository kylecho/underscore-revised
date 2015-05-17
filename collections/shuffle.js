// Shuffle
var shuffle = function(list) {
	var rand;
	var index = 0;
	var randomized = [];

	_.each(list, function(elem){
		rand = Math.floor(Math.random() * index++);
		randomized[index - 1] = randomized[rand];
		randomized[rand] = elem;
	});

	return randomized;
};

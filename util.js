var util = {
	copy : function(obj) {
		return JSON.parse(JSON.stringify(obj));
	},
	/**
	http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
	 * Shuffles array in place.
	 * @param {Array} a items The array containing the items.
	 */
	shuffle : function (a) {
		var j, x, i;
		for (i = a.length; i; i--) {
			j = Math.floor(Math.random() * i);
			x = a[i - 1];
			a[i - 1] = a[j];
			a[j] = x;
		}
	},

	getRandomIndex : function (len, n) {
		var result = new Array(n);
		var choices = new Array(len);
			for (var i=0; i < len; i++) {
				choices[i] = i;
			}
		if (n > len) {
			throw new RangeError("getRandom: more elements taken than available");
		}
		while (n--) {
			var x = Math.floor(Math.random() * choices.length);
			result[n] = choices[x];
			choices.splice(x, 1);
		}
		return result;
	}
};

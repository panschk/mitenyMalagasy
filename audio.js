var AUDIO_LIST = [
"iray", "roa", "telo", "efatra", "dimy", "enina", "fito", "valo", "sivy", "folo",
"mena", "maintso", "manga", "mavo", "fotsy", "mainty", "volon-tany", "mavokely",
"salama", "veloma", "misaotra", "azafady", "tonga soa", "tafandriamandry", "tsisy fisaorana", "soava dia", "mazotoa homana",
"karoty", "Ovy", "tongolo gasy", "tongolo maintso", "voatabia", "baranjely", "konkombra", "korzety", "voatavo", "holatra", "salady"

];

var audio = {
	path : function(word) {
		if (AUDIO_LIST.indexOf(word) > -1) {
			// thats how regex looks in JS: - strip all non alphanumeric
			word = word.replace(/[^0-9a-zA-Z]/gi, '');
			word = word.toLowerCase();
			return "sound/"+word+".mp3";
		} else {
			return false;
		}
	},
	exists : function(word) {
		if (AUDIO_LIST.indexOf(word) > -1) {
			return true;
		} else {
			return false;
		}
	},
	play : function(word) {
		if (audio.path(word)) {
			var audioObj = new Audio(audio.path(word));
			audioObj.play();
		}
	}
};


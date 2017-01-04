var AUDIO_LIST = ["mena", "maintso"];

var audio = {
	path : function(word) {
		if (AUDIO_LIST.indexOf(word) > -1) {
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
		var audioObj = new Audio(audio.path(word));
		audioObj.play();
	}
};


var ALL_LEVELS=true;
var INDEX_MYWORDS=-1;
var INDEX_RANDOM=-2;
var LIST_MASTERED="LIST_MASTERED";
var LIST_LEARNING="LIST_LEARNING";
/*jshint sub:true */
/* ['de'] is better written in dot notation*/
/*global data,angular,util,audio,languages,Lockr,translate*/ 
var app = angular.module('mitenyMain', []);
app.controller('Main', ['$scope','$http', function Main($scope, $http) {
	this.isactive = 'menu';
	this.check = function() {
		return $scope.game.checkAnswer(this);
	};
	this.startList = function(lvl) {
		this.isactive = 'list';
		$scope.game = new ListWords();
		this.initAnyGame(lvl);
	};
	this.initAnyGame = function(lvl) {
		if (lvl === INDEX_MYWORDS) {
			$scope.game.initW(this.myWordSelection);
		} else if (lvl === INDEX_RANDOM) {
			$scope.game.initRandom();
		} else {
			$scope.game.init(lvl);
		}
	};
	
	this.startGame = function(lvl) {
		$scope.p.currentgame = {"levelId" : lvl, "type" : "game"};
		this.isactive = 'game';
		$scope.game = new Game();
		this.initAnyGame(lvl);
	};
	this.start1of4 = function(lvl) {
		$scope.p.currentgame = {"levelId" : lvl, "type" : "1of4"};
		this.isactive = '1of4';
		$scope.game = new MultipleChoiceGame();
		this.initAnyGame(lvl);
	};
	this.startMemory = function(lvl) {
		$scope.p.currentgame = {"levelId" : lvl, "type" : "memory"};
		this.isactive = 'memory';
		$scope.game = new Memory();
		this.initAnyGame(lvl);
	};
	this.startPicture = function(lvl) {
		$scope.p.currentgame = {"levelId" : lvl, "type" : "picture"};
		this.isactive = 'picturegame';
		$scope.game = new PictureGame();
		this.initAnyGame(lvl);
	};
	this.startListenGame = function(lvl) {
		$scope.p.currentgame = {"levelId" : lvl, "type" : "listen"};
		this.isactive = 'listen';
		$scope.game = new ListenGame();
		this.initAnyGame(lvl);
	};
	this.startSentenceGame = function(lvl) {
		$scope.p.currentgame = {"levelId" : lvl, "type" : "sentence"};
		this.isactive = 'sentence';
		$scope.game = new SentenceGame();
		this.initAnyGame(lvl);
	};
	this.isDisabled = function(lvlIndex) {
		if (ALL_LEVELS){
			return false;
		}
		return p.progress<lvlIndex;
	};
	this.gameClass = function() {
		if ($scope.game) {
			return $scope.game.cssClass;
		}
	};
	
	this.selectAnswer = function(choice) {
		$scope.game.selectAnswer(choice, this);
	};
	this.guess = function(event) {
		$scope.game.guess(event, this);
	};
	this.mainMenu = function() {
		this.isactive = 'menu';
	};
	this.levels = function() {
		return data;
	};
	this.doShow = function(levelId, levelType) {
		// list is active for all types
		var typeMatch = true;
		if (levelType) {
			if (levelType === 'listen') {
				return false;
			}
			typeMatch = data[levelId].type===levelType;
		}
		
		var langOkay = data[levelId][l1()] && data[levelId][l2()];
		return typeMatch && langOkay;
	};
	this.doShowListenGame = function(levelId) {
		var typeMatch = data[levelId].type==='listen';
		if (!typeMatch) {
			if (data[levelId].speech && data[levelId].speech.indexOf(l2()) !== -1) {
				return true;
			}
		}
		var langOkay = data[levelId][l2()];
		return typeMatch && langOkay;
	};
	/*this.send = function(game) {
		if (window.confirm("Wirklich senden?")) {
			var url = 'http://www.panschk.de/mitenyMalagasy/getFeedback.php?auth=mm&id=';
			url = url + game.levelId + "&content="+JSON.stringify(game.good);
			$http.post(url, game);
		}
	};*/
	this.newList = function(startVal) {
		var name = window.prompt(text("enter_name_list"), startVal);
		if (name) {
			if (p.myWords.keys.includes(name)) {
				window.alert(text("name_exists"));
				this.newList(name);
				return;
			}
			p.myWords.keys.push(name);
			p.myWords.l1.push(l1());
			p.myWords.l2.push(l2());
			p.myWords.words.push({de:[], en:[], fr:[], mg:[]});
			this.myWordSelection = name;
			save();
		}
	};
	this.addToList = function(answer, question, listName) {
		var index = p.myWords.keys.indexOf(listName);
		p.myWords.words[index][l1()].push(question);
		p.myWords.words[index][l2()].push(answer);
		save();
	};
	this.removeFromList = function(w1, w2, listName, game) {
		var words = p.myWords.getWords(listName);
		var l1pos = words[l1()].indexOf(w1);
		var l2pos = words[l2()].indexOf(w2);
		if (l1pos > -1 && l1pos === l2pos) {
			words[l1()].splice(l1pos, 1);
			words[l2()].splice(l2pos, 1);
		}
		save();
		game.initW(listName);
	};
	this.getWordSize = function(listName) {
		var words = p.myWords.getWords(listName);
		if (words) {
			return words[l1()].length;
		}
		return -1;
	};
	this.getButtonStyle = function(levelId, levelType) {
		if (p.completedLevels && p.completedLevels[l2()] && p.completedLevels[l2()][levelId] && p.completedLevels[l2()][levelId][levelType]) {
			return p.completedLevels[l2()][levelId][levelType];
		}
		return "";
	};
	this.countWordsInList = function(listName) {
		var list = p.progressLists[listName];
		return list.length;
	};
	this.refreshScope = function() {
		$scope.$apply();
	};
	$scope.data=data;
	$scope.p = p;
	$scope.audio=audio;
	$scope.text=text;
	$scope.languages=languages;
	$scope.save=save;
	$scope.l1 = l1;
	$scope.l2 = l2;
	$scope.text2 = text2;

}]);

app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width) {
        scope.dialogStyle.width = attrs.width;
		}
      if (attrs.height) {
        scope.dialogStyle.height = attrs.height;
		}
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});
app.controller('ModalController', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
}]);

var Game = function() {
	this.type = "game";
	this.MIN_LENGTH = 1;
	this.index		=	0;
	this.answer		= "";
	this.words		= {};
	this.errors		= 0;
	this.buttonModel = {};
	this.prevIndex = 0;
	this.cssClass = "gameClass0";
	this.init = function(lvlId) {
		this.levelId = lvlId;
		// copy is a deep clone, see util.js
		this.words = util.copy(data[lvlId]);
		this.startup();
	};
	this.initW = function(listName) {
		this.words = util.copy(p.myWords.getWords(listName));
		this.listName = listName;
		this.startup();
	};
	this.initRandom = function() {
		this.words = get10RandomWords();
		this.startup();
	};
	this.startup = function() {
		this.next(false);
		this.errors = 0;
		this.total = this.words[l2()].length;
	};
	this.getTotal = function() {
		return this.total;
	};
	this.getDone = function() {
		return this.total - this.words[l2()].length;
	};
	this.getQuestion = function() {
		return this.words[l1()][this.index];
	};
	this.next = function(wasCorrect, controller) {
		if (wasCorrect) {
			this.cssClass = "gameClass1";
			var f = function(game, controller) {
				return function() {
					game.cssClass = "gameClass0";
					controller.refreshScope();
				};
			};
			setTimeout(f(this, controller), 50); 
			this.words[l2()].splice(this.index, 1);
			if (this.words[l1()]) {
				this.words[l1()].splice(this.index, 1);
			}
			if (this.words[l2()].length < this.MIN_LENGTH) {
				success(this);
				controller.mainMenu();
				return;
			}
		}
		var lengthArray = this.words[l2()].length;
		this.prevIndex = this.index;
		this.index = parseInt(Math.random()*lengthArray, 10);
		this.answer = "";
		this.generatePossibleAnswers();
		this.customNext(wasCorrect);
	};
	this.generatePossibleAnswers = function () { // empty
	};
	this.customNext = function (wasCorrect) {
		this.buttonModel = this.generateButtons();
	};
	
	this.checkAnswer = function(controller) {
		var correctAnswer = this.getCorrectAnswer();
		var possibleAnswers = correctAnswer.split("/");
		for (var i = 0; i < possibleAnswers.length; i++) {
			var possibleAnswer = possibleAnswers[i].trim();
			var startOfComment = possibleAnswer.indexOf("(");
			if (startOfComment > -1) {
				possibleAnswer = possibleAnswer.slice(0, startOfComment).trim(); 
			}
			if (this.answer.toUpperCase().trim() === possibleAnswer.toUpperCase()) {
				this.correctGuess(controller, possibleAnswer);
				return;
			}
		}
		this.wrongGuess(controller);
	};

	this.getCorrectAnswer = function() {
		return this.words[l2()][this.index];
	};

	this.correctGuess = function(controller, word) {
		this.playAfterCorrectGuess(word);
		this.next(true, controller);
	};
	this.playAfterCorrectGuess = function(word) {
		if (p && !p.sound) {
			return;
		}
		audio.play(word);
	};
	this.wrongGuess = function(controller) {
		window.alert( text("wrong") + " " + this.getQuestion() +" ==> "+ this.getCorrectAnswer());
		this.errors++;
		this.next(false, controller);
	};
	this.generateButtons = function() {
		var word = this.getCorrectAnswer();
		var wordArray = word.split("");
		util.shuffle(wordArray);
		var letters = [];
		for (var i = 0; i < wordArray.length; i++) {
			letters.push({text: wordArray[i], isActive: true});
		}
		return letters;
	};
	this.addLetter = function(letter) {
		this.answer = this.answer + letter.text;
		letter.isActive = false;
	};
	this.deleteLetter = function() {
		var deletedLetter = this.answer.slice(this.answer.length - 1);
		this.answer = this.answer.slice(0, -1);
		for (var i = 0; i < this.buttonModel.length; i++) {
			if (this.buttonModel[i].text === deletedLetter && !this.buttonModel[i].isActive) {
				this.buttonModel[i].isActive = true;
				break;
			}
		}
	};
	
};

var MultipleChoiceGame = function() {
	this.type = "1of4";
	this.MIN_LENGTH			= 4;
	this.possibleAnswers	= [1,2,3,4];
	this.generatePossibleAnswers	=	function() {
		var indexList = util.getRandomIndex(this.words[l2()].length, this.MIN_LENGTH);
		var randomOfFour = Math.floor(Math.random() * indexList.length);
		this.possibleAnswers = indexList;
		this.index = indexList[randomOfFour];
	};
	
	this.getPossibleAnswer	=	function(choice) {
		var idx = this.possibleAnswers[choice];
		return this.words[l2()][idx];
	};
	this.selectAnswer = function(choice, controller) {
		var idx = this.possibleAnswers[choice];
		var word = this.words[l2()][this.index];
		if (idx === this.index) {
			this.correctGuess(controller, word);
		} else {
			this.wrongGuess(controller);
		}
	};
	this.getTotal = function() {
		return this.total - 3;
	};

};
MultipleChoiceGame.prototype = new Game();

var ListWords = function() {
	
	this.init = function(lvlId) {
		this.levelId = lvlId;
		this.data = data[lvlId];
	};
	this.initW = function(listName) {
		this.data = p.myWords.getWords(listName);
		this.levelId = INDEX_MYWORDS;
		this.listName = listName;
	};
	this.initRandom = function() {
		this.data = get10RandomWords();
		this.levelId = INDEX_RANDOM;
	};

	this.show = function() {
		return this.data;
	};
};

var Memory = function() {
	this.type = "memory";
	this.init = function(lvlId) {
		this.turnedCards = [];
		this.cards = new Array(16);
		var indexSel = util.getRandomIndex(data[lvlId][l2()].length, 8);
		for (var i=0; i < indexSel.length; i++) {
			var wordL2 = data[lvlId][l2()][indexSel[i]];
			var wordL1 = data[lvlId][l1()][indexSel[i]];

			this.cards[i*2] = {index:indexSel[i], value:wordL2, lang:"l2",clazz:'hidden',textSize:Math.min(100, 700/Math.pow(wordL2.length, 0.9))};
			this.cards[i*2 + 1] = {index:indexSel[i], value:wordL1,lang:"l1",clazz:'hidden',textSize:Math.min(100, 700/Math.pow(wordL1.length, 0.9))};
		}
		util.shuffle(this.cards);
	};
	this.turn = function(index, controller) {
		if (this.turnedCards.length > 1) {
			this.cards.forEach(function(card) {
				if (card.clazz==='shown') {
					card.clazz='hidden';
				}
			});
			this.turnedCards = [];
		}
		this.turnedCards.push(index);
		this.cards[index].clazz="shown";
		if (this.turnedCards.length === 2) {
			var c1 = this.cards[this.turnedCards[0]];
			var c2 = this.cards[this.turnedCards[1]];
			
			if (c1.index===c2.index) {
				c1.clazz='done';
				c2.clazz='done';
				this.checkAllTurned(controller);
			}
		}
	};
	this.checkAllTurned = function(controller){
		for (var i = 0; i < this.cards.length; i++) {
			var card = this.cards[i];
			if (card.clazz !== 'done') {
				return;
			}
		}
		success(this);
		controller.mainMenu();
		
	};
};

var PictureGame = function() {
	this.type = "picture";
	this.answer		= "";
	this.words		= {};
	this.superInit = this.init;
	this.init = function(lvlId) {
		this.superInit(lvlId);
		/*this.levelId = lvlId;
		// copy is a deep clone, see util.js
		this.words = util.copy(data[lvlId]);
		this.next(false);
		this.errors = 0;
		this.total = this.words[l2()].length;*/
	};
	
	this.getQuestion = function() {
		return this.words[l2()][this.index];
	};
	this.guess = function(event, controller) {
		var coordinates = this.words.coordinates[this.index];
		var x = event.offsetX;
		var y = event.offsetY;
		if (coordinates[0] <= x && coordinates[1] <= y && coordinates[0] + coordinates[2] >= x && coordinates[1] + coordinates[3] >= y ) {
			this.next(true, controller);
		} else {
			this.errors++;
		}
	};
	this.customNext = function (wasCorrect) {
		if (wasCorrect) {
			this.words.coordinates.splice(this.prevIndex, 1);
		}
	};
	

};
PictureGame.prototype = new Game();


var ListenGame = function() {
	this.type = "listen";
	this.answer		= "";
	this.words		= {};
	this.getQuestion = function() {
		return "";
	};
	this.playSpeech = function() {
		audio.play(this.getCorrectAnswer());
	};
	this.customNext = function (wasCorrect) {
		this.buttonModel = this.generateButtons();
		if (p.sound) {
			this.playSpeech();
		}
	};
	// we already play the next word, so don't play the previous one
	this.playAfterCorrectGuess = function() {
		// do nothing
	};

};
ListenGame.prototype = new Game();

var SentenceGame = function() {
	this.type = "sentence";
	this.generateButtons = function() {
		var word = this.getCorrectAnswer();
		var wordArray = word.split(" ");
		util.shuffle(wordArray);
		var letters = [];
		for (var i = 0; i < wordArray.length; i++) {
			letters.push({text: wordArray[i] + " ", isActive: true});
		}
		return letters;
	};
	this.deleteLetter = function() {
		
		var prevSpace = this.answer.slice(0, -1).lastIndexOf(" ");
		var deletedWord = this.answer.slice(prevSpace + 1);
		this.answer = this.answer.slice(0, - deletedWord.length);
		for (var i = 0; i < this.buttonModel.length; i++) {
			if (this.buttonModel[i].text === deletedWord && !this.buttonModel[i].isActive) {
				this.buttonModel[i].isActive = true;
				break;
			}
		}
	};
	this.cleanText = function(word) {
		return word.text.toLowerCase().replace(/\?|\.|\,/g, "");
	};
	
};
SentenceGame.prototype = new Game();

var load = function() {
	var gs = Lockr.get("miteny_p");
	if (!gs) {
		gs = initialP;
	}
	if (!gs.myWords) {
		gs.myWords = {keys : [], words : [], l1 : [], l2 : []};
	}
	if (!gs.progressLists) {
		gs.progressLists = {LIST_MASTERED : [], LIST_LEARNING : []};
	}
	if (!gs.progressLists.containsWord) {
		gs.progressLists.containsWord = function(listName, word) {
			var list = gs.progressLists[listName];
			for (var i = 0; i < list.length; i++) {
				if (list[i].mg === word.mg && list[i].de === word.de && list[i].fr === word.fr && list[i].en === word.en) {
					return list[i];
				}
			}
			return false;
		};
	}
	if (!gs.progressLists.updateStats) {
		gs.progressLists.updateStats = function(word, isCorrect) {
			var mastered = gs.progressLists.containsWord(LIST_MASTERED, word);
			if (mastered) {
				if (isCorrect) {
					mastered.correct=mastered.correct+1;
					mastered.streak=mastered.streak+1;
				} else {
					mastered.wrong = mastered.wrong + 1;
					mastered.streak = 0;
				}
			} else {
				var learning = gs.progressLists.containsWord(LIST_LEARNING, word);
				if (learning) {
					if (isCorrect) {
						mastered.correct=mastered.correct+1;
						mastered.streak=mastered.streak+1;
					} else {
						mastered.wrong = mastered.wrong + 1;
						mastered.streak = 0;
					}
				}
				
			}
		};
	}
	
	
	gs.myWords.getWords = function(word) {
		var index = gs.myWords.keys.indexOf(word);
		return gs.myWords.words[index];
	};
	
	return gs;
};
var save = function() {
	Lockr.set("miteny_p", p);
};


var initialP = {
	progress : 1,
	currentgame : {},
	language	: 'de',
	languageToLearn	: 'mg',
	completedLevels : {
		mg : {},
		de : {},
		fr : {},
		en : {}
	},
	sound: true,
	hideMyWords: false
};

var success = function(game) {
	if (p.progress === p.currentgame.levelId) {
		p.progress = p.progress + 1;
	}
	if (!p.completedLevels) {
		p.completedLevels = {};
	}
	if (!p.completedLevels[l2()]) {
		p.completedLevels[l2()] = {};
	}
	if (!p.completedLevels[l2()][p.currentgame.levelId]) {
		p.completedLevels[l2()][p.currentgame.levelId] = {};
	}
	if (!p.completedLevels[l2()][p.currentgame.levelId][game.type]) {
		p.completedLevels[l2()][p.currentgame.levelId][game.type] = "SUCCESS";
	}
	if (game.errors === 0) {
		p.completedLevels[l2()][p.currentgame.levelId][game.type] = "PERFECT";
	}
	window.alert(text("good_job"));
	save();
};
var text = function(t) {
	return translate(t, p.language);
};
var text2 = function(t) {
	return translate(t, p.languageToLearn);
};
var l1 = function() {
	if (p && p.language && p.language.code) {
		var result = p.language.code;
		return result;
	}
	return 'de';
};
var l2 = function() {
	if (p && p.languageToLearn && p.languageToLearn.code) {
		var result = p.languageToLearn.code;
		return result;
	}
	return 'mg';
};
var get10RandomWords = function() {
	var indices = util.getRandomIndex(COMPLETE_WORDS.length, 10);
	var randomWords = {name:{de:"Zufällig", mg:"??"},de:[], mg:[]};
	for (var i = 0; i < indices.length; i++) {
		randomWords.mg[i] = COMPLETE_WORDS[indices[i]][0];
		randomWords.de[i] = COMPLETE_WORDS[indices[i]][1];
	}
	return randomWords;
};
var p = load();
window.onbeforeunload = function() { return true; };

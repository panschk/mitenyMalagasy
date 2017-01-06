ALL_LEVELS=true;
/*jshint sub:true */
/* ['de'] is better written in dot notation*/
/*global data,angular,util*/ 
var app = angular.module('mitenyMain', []);
app.controller('Main', ['$scope','$http', function Main($scope, $http) {
	this.isactive = 'menu';
	this.check = function() {
		return $scope.game.checkAnswer(this);
	};
	this.startList = function(lvl) {
		this.isactive = 'list';
		$scope.game = new ListWords();
		$scope.game.init(lvl);
	};
	this.startGame = function(lvl) {
		$scope.p.currentgame = {"levelId" : lvl, "type" : "game"};
		this.isactive = 'game';
		$scope.game = new Game();
		$scope.game.init(lvl);
	};
	this.start1of4 = function(lvl) {
		$scope.p.currentgame = {"levelId" : lvl, "type" : "1of4"};
		this.isactive = '1of4';
		$scope.game = new MultipleChoiceGame();
		$scope.game.init(lvl);
	};
	this.startMemory = function(lvl) {
		$scope.p.currentgame = {"levelId" : lvl, "type" : "memory"};
		this.isactive = 'memory';
		$scope.game = new Memory();
		$scope.game.init(lvl);
	};
	this.startPicture = function(lvl) {
		$scope.p.currentgame = {"levelId" : lvl, "type" : "picture"};
		this.isactive = 'picturegame';
		$scope.game = new PictureGame();
		$scope.game.init(lvl);
	};
	this.startListenGame = function(lvl) {
		$scope.p.currentgame = {"levelId" : lvl, "type" : "listen"};
		this.isactive = 'listen';
		$scope.game = new ListenGame();
		$scope.game.init(lvl);
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
	}
	
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
		/*var levelList = [];
		data.forEach(function(entry) {
			if (entry[l1()] && entry[l2()]) {
				levelList.push(entry);
			}
		});
		return levelList;
		*/
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
			if (data[levelId].speech && data[levelId].speech.indexOf(l2()) != -1) {
				return true;
			}
		}
		var langOkay = data[levelId][l2()];
		return typeMatch && langOkay;
	};
	this.mark = function() {
		if (!p.marked) {
			p.marked = [];
		}
		var game = $scope.game;
		p.marked.push(l1() +"|"+ l2() + "|" + game.levelId + "|" + game.getQuestion() + "|" + game.getCorrectAnswer());
		save();
	};
	this.startShowMarks = function() {
		this.isactive = 'marks';
	};
	this.showMarks = function() {
		return JSON.stringify(p.marked)
	};
	this.send = function(game) {
		var url = 'http://www.panschk.de/mitenyMalagasy/getFeedback.php?id=';
		url = url + game.levelId + "&content="+JSON.stringify(game.good);
		$http.post(url, game);

	};
	this.getButtonStyle = function(levelId, levelType) {
		if (p.completedLevels && p.completedLevels[l2()] && p.completedLevels[l2()][levelId] && p.completedLevels[l2()][levelId][levelType]) {
			return p.completedLevels[l2()][levelId][levelType];
		}
		return "";
	};
	this.refreshScope = function() {
		$scope.$apply();
	}
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
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
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
	this.cssClass = "gameClass0";
	this.init = function(lvlId) {
		this.levelId = lvlId;
		// copy is a deep clone, see util.js
		this.words = util.copy(data[lvlId]);
		this.next(false);
		this.errors = 0;
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
				}
			}
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

		if (this.answer.toUpperCase() === this.getCorrectAnswer().toUpperCase()) {
			this.correctGuess(controller);
		} else {
			this.wrongGuess(controller);
		}
	};

	this.getCorrectAnswer = function() {
		return this.words[l2()][this.index];
	};

	this.correctGuess = function(controller) {
		this.next(true, controller);
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
		if (idx === this.index) {
			this.correctGuess(controller);
		} else {
			this.wrongGuess(controller);
		}
	};

};
MultipleChoiceGame.prototype = new Game();

var ListWords = function() {
	// temporary to give feedback
	this.good = [];
	this.init = function(lvlId) {
		this.levelId = lvlId;
		for (var i = 0; i < data[this.levelId][l2()].length; i++) {
			this.good[i] = false;
		}
	};
	this.show = function() {
		return data[this.levelId];
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
	this.init = function(lvlId) {
		this.levelId = lvlId;
		// copy is a deep clone, see util.js
		this.words = util.copy(data[lvlId]);
		this.next(false);
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
			this.words.coordinates.splice(this.index, 1);
		}
	};
	

}
PictureGame.prototype = new Game();


var ListenGame = function() {
	this.type = "listen";
	this.answer		= "";
	this.words		= {};
	this.init = function(lvlId) {
		this.levelId = lvlId;
		// copy is a deep clone, see util.js
		this.words = util.copy(data[lvlId]);
		this.next(false);
	};
	this.getQuestion = function() {
		return "";
	};
	this.playSpeech = function() {
		audio.play(this.getCorrectAnswer())
	};
	this.customNext = function (wasCorrect) {
		this.buttonModel = this.generateButtons();
		this.playSpeech();
	};

}
ListenGame.prototype = new Game();

var load = function() {
	var gs = Lockr.get("miteny_p");
	if (!gs) {
		gs = initialP;
	}
	return gs;
}
var save = function() {
	Lockr.set("miteny_p", p);
}


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
	}
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

var p = load();

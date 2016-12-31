ALL_LEVELS=true;
/*jshint sub:true */
/* ['de'] is better written in dot notation*/
/*global data,angular,util*/ 
var app = angular.module('mitenyMain', []);
app.controller('Main', ['$scope', function Main($scope) {
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
		$scope.p.currentgame = (lvl * 3) + 2;
		this.isactive = 'game';
		$scope.game = new Game();
		$scope.game.init(lvl);
	};
	this.start1of4 = function(lvl) {
		$scope.p.currentgame = (lvl * 3) + 1;
		this.isactive = '1of4';
		$scope.game = new MultipleChoiceGame();
		$scope.game.init(lvl);
	};
	this.startMemory = function(lvl) {
		$scope.p.currentgame = (lvl * 3) + 3;
		this.isactive = 'memory';
		$scope.game = new Memory();
		$scope.game.init(lvl);
	};
	this.startPicture = function(lvl) {
		$scope.p.currentgame = (lvl * 3) + 3;
		this.isactive = 'picturegame';
		$scope.game = new PictureGame();
		$scope.game.init(lvl);
	};
	this.isDisabled = function(lvlIndex) {
		if (ALL_LEVELS){
			return false;
		}
		return p.progress<lvlIndex;
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
		var levelList = [];
		data.forEach(function(entry) {
			if (entry[l1()] && entry[l2()]) {
				levelList.push(entry);
			}
		});
		return levelList;
	};
	$scope.data=data;
	$scope.p = p;
	$scope.text=text;
	$scope.languages=languages;
	$scope.save=save;
	$scope.l1 = l1;
	$scope.l2 = l2;

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
	this.MIN_LENGTH = 1;
	this.index		=	0;
	this.answer		= "";
	this.words		= {};
	this.init = function(lvlId) {
		this.levelId = lvlId;
		// copy is a deep clone, see util.js
		this.words = util.copy(data[lvlId]);
		this.next(false);
	};

	this.getQuestion = function() {
		return this.words[l1()][this.index];
	};
	this.next = function(wasCorrect, controller) {
		if (wasCorrect) { 
			this.words[l2()].splice(this.index, 1);
			this.words[l1()].splice(this.index, 1);
			this.customNext();
			if (this.words[l2()].length < this.MIN_LENGTH) {
				window.alert(text("good_job"));
				success();
				controller.mainMenu();
				return;
			}
		}
		var lengthArray = this.words[l2()].length;
		this.index = parseInt(Math.random()*lengthArray, 10);
		this.answer = "";
		this.generatePossibleAnswers();
	};
	this.generatePossibleAnswers = function () { // empty
	};
	this.customNext = function () { // empty
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
		this.next(false, controller);
	};
};

var MultipleChoiceGame = function() {
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
	
	this.init = function(lvlId) {
		this.levelId = lvlId;
	};
	this.show = function() {
		return data[this.levelId];
	};
};

var Memory = function() {
	this.init = function(lvlId) {
		this.turnedCards = [];
		this.cards = new Array(16);
		var indexSel = util.getRandomIndex(data[lvlId][l2()].length, 8);
		for (var i=0; i < indexSel.length; i++) {
			this.cards[i*2] = {index:indexSel[i], value:data[lvlId][l2()][indexSel[i]], lang:"l2",clazz:'hidden'};
			this.cards[i*2 + 1] = {index:indexSel[i], value:data[lvlId][l1()][indexSel[i]],lang:"l1",clazz:'hidden'};
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
		window.alert("Level geschafft!");
		success();
		controller.mainMenu();
		
	};
};

var PictureGame = function() {
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
		}
	};
	this.customNext = function () {
		this.words.coordinates.splice(this.index, 1);
	};
	

}
PictureGame.prototype = new Game();

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
	currentgame : 0,
	language	: 'de'
};

var success = function() {
	if (p.progress === p.currentgame) {
		p.progress = p.progress + 1;
	}
	save();
};
var text = function(t) {
	return translate(t, p.language);
};
var l1 = function() {
	var result = p.language.code;
	if (result) {
		return result;
	}
	return 'de';
};
var l2 = function() {
	var result = p.languageToLearn.code;
	if (result) {
		return result;
	}
	return 'mg';
};

var p = load();

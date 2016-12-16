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
	
	
	this.selectAnswer = function(choice) {
		$scope.game.selectAnswer(choice, this);
	};
	this.mainMenu = function() {
		this.isactive = 'menu';
	};
	$scope.data=data;
	$scope.p = p;
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
		return this.words['de'][this.index];
	};
	this.next = function(wasCorrect, controller) {
		if (wasCorrect) { 
			this.words.mg.splice(this.index, 1);
			this.words.de.splice(this.index, 1);
			if (this.words.mg.length < this.MIN_LENGTH) {
				window.alert("Level geschafft!");
				success();
				controller.mainMenu();
				return;
			}
		}
		var lengthArray = this.words['mg'].length;
		this.index = parseInt(Math.random()*lengthArray, 10);
		this.answer = "";
		this.generatePossibleAnswers();
	};
	this.generatePossibleAnswers = function () { // empty
	};
	this.checkAnswer = function(controller) {

		if (this.answer.toUpperCase() === this.getCorrectAnswer().toUpperCase()) {
			this.correctGuess(controller);
		} else {
			this.wrongGuess(controller);
		}
	};

	this.getCorrectAnswer = function() {
		return this.words['mg'][this.index];
	};

	this.correctGuess = function(controller) {
		this.next(true, controller);
	};
	this.wrongGuess = function(controller) {
		window.alert("Falsch. "+ this.getQuestion() +" ==> "+ this.getCorrectAnswer());
		this.next(false, controller);
	};
};

var MultipleChoiceGame = function() {
	this.MIN_LENGTH			= 4;
	this.possibleAnswers	= [1,2,3,4];
	this.generatePossibleAnswers	=	function() {
		var indexList = util.getRandomIndex(this.words['mg'].length, this.MIN_LENGTH);
		var randomOfFour = Math.floor(Math.random() * indexList.length);
		this.possibleAnswers = indexList;
		this.index = indexList[randomOfFour];
	};
	
	this.getPossibleAnswer	=	function(choice) {
		var idx = this.possibleAnswers[choice];
		return this.words['mg'][idx];
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
	this.init = function(lvlName) {
		this.turnedCards = [];
		this.cards = new Array(16);
		var indexSel = util.getRandomIndex(data[lvlName]['mg'].length, 8);
		for (var i=0; i < indexSel.length; i++) {
			this.cards[i*2] = {index:indexSel[i], value:data[lvlName]['mg'][indexSel[i]], lang:'mg',clazz:'hidden'};
			this.cards[i*2 + 1] = {index:indexSel[i], value:data[lvlName]['de'][indexSel[i]],lang:'de',clazz:'hidden'};
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



var p = {
	progress : 3,
	currentgame : 0
};

var success = function() {
	if (p.progress === p.currentgame) {
		p.progress = p.progress + 1;
	}
};


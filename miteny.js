var app = angular.module('mitenyMain', []);
app.controller('Main', ['$scope', function Main($scope) {
	this.isactive = 'menu';
	$scope.game = game;
	$scope.game.Game("numbers")
	
	this.check = function check() {
		return $scope.game.checkAnswer()
	};
	this.state = function state(item) {
		if (this.isactive == item) {
			return "block";
		} else {
			return "none";
		}
	}
	this.startGame = function startGame(lvl) {
		this.isactive = 'game'
		$scope.game.Game(lvl)
	}
	this.mainMenu = function mainMenu() {
		this.isactive = 'menu'
	}
	$scope.game.next()
	$scope.data=data
}]);
var game = {
	levelName	:	"",
	index		:	0,
	answer		: "",
	start		: function start() {
		
	},
	Game		:function Game(lvlName) {
		this.levelName = lvlName
	},
	getQuestion : function getQuestion() {
		return data[this.levelName]['de'][this.index];
	},
	next		:function next() {
		var lengthArray = data[this.levelName]['mg'].length;
		this.index = parseInt(Math.random()*lengthArray, 10);
		this.answer = "";
	},
	checkAnswer : function checkAnswerF() {

		if (this.answer.toUpperCase() == this.getCorrectAnswer().toUpperCase()) {
			this.correctGuess()
		} else {
			this.wrongGuess()
		}
	},
	
	getCorrectAnswer : function getCorrectAnswer() {
		return data[this.levelName]['mg'][this.index]
	},

	correctGuess : function correctGuess() {
		this.next()
	},
	wrongGuess : function wrongGuess() {
		alert("Falsch. "+ this.getQuestion() +" ==> "+ this.getCorrectAnswer());
		this.next()
	}
	
}

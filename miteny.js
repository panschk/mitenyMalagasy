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
	this.start1of4 = function start1of4(lvl) {
		this.isactive = '1of4'
		$scope.game.Game(lvl)
	}
	this.selectAnswer = function selectAnswer(choice) {
	    var idx = $scope.game.possibleAnswers[choice];
		if (idx == $scope.game.index) {
			$scope.game.correctGuess()
		} else {
			$scope.game.wrongGuess()
		}
		$scope.game.next()
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
	possibleAnswers	: [1,2,3,4],
	Game		:function Game(lvlName) {
		this.levelName = lvlName
		this.next()
	},
	getQuestion : function getQuestion() {
		return data[this.levelName]['de'][this.index];
	},
	next		:function next() {
		var lengthArray = data[this.levelName]['mg'].length;
		this.index = parseInt(Math.random()*lengthArray, 10);
		this.answer = "";
		this.generatePossibleAnswers();
	},
	checkAnswer : function checkAnswer() {

		if (this.answer.toUpperCase() == this.getCorrectAnswer().toUpperCase()) {
			this.correctGuess()
		} else {
			this.wrongGuess()
		}
	},
	getPossibleAnswer	:	function getPossibleAnswer(choice) {
		var idx = this.possibleAnswers[choice]
		return data[this.levelName]['mg'][idx];
	},
	
	generatePossibleAnswers	:	function generatePossibleAnswers() {
		var indexList = getRandomIndex(data[this.levelName]['mg'].length, 4);
		var randomOfFour = Math.floor(Math.random() * indexList.length);
		this.possibleAnswers = indexList;
		this.index = indexList[randomOfFour];
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
	
function getRandomIndex(len, n) {
    var result = new Array(n),
        choices = new Array(len);
		for (var i=0; i < len; i++) {
			choices[i] = i
		}
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * choices.length);
        result[n] = choices[x];
        choices.splice(x, 1);
    }
    return result;
}

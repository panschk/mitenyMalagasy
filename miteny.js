var app = angular.module('mitenyMain', []);
app.controller('Main', ['$scope', function Main($scope) {
	this.isactive = 'menu';

	this.check = function() {
		return $scope.game.checkAnswer()
	};
	this.startList = function(lvl) {
		this.isactive = 'list'
		$scope.game = new ListWords()
		$scope.game.init(lvl)
	}
	this.startGame = function(lvl) {
		this.isactive = 'game'
		$scope.game = new Game()
		$scope.game.init(lvl)
	}
	this.start1of4 = function(lvl) {
		this.isactive = '1of4'
		$scope.game = new MultipleChoiceGame()
		$scope.game.init(lvl)
	}
	
	
	this.selectAnswer = function(choice) {
		$scope.game.selectAnswer(choice)
	}
	this.mainMenu = function() {
		this.isactive = 'menu'
	}
	$scope.data=data
}]);
var Game = function() {
	levelName	=	""
	index		=	0
	answer		= ""
	this.init = function(lvlName) {
		this.levelName = lvlName
		this.next()
	}

	this.getQuestion = function() {
		return data[this.levelName]['de'][this.index];
	}
	this.next = function() {
		var lengthArray = data[this.levelName]['mg'].length;
		this.index = parseInt(Math.random()*lengthArray, 10);
		this.answer = "";
		this.generatePossibleAnswers();
	}
	
	this.checkAnswer = function() {

		if (this.answer.toUpperCase() == this.getCorrectAnswer().toUpperCase()) {
			this.correctGuess()
		} else {
			this.wrongGuess()
		}
	}

	this.getCorrectAnswer = function() {
		return data[this.levelName]['mg'][this.index]
	}

	this.correctGuess = function() {
		this.next()
	}
	this.wrongGuess = function() {
		alert("Falsch. "+ this.getQuestion() +" ==> "+ this.getCorrectAnswer());
		this.next()
	}
}

var MultipleChoiceGame = function() {
	possibleAnswers	= [1,2,3,4]
	this.generatePossibleAnswers	=	function() {
		var indexList = getRandomIndex(data[this.levelName]['mg'].length, 4);
		var randomOfFour = Math.floor(Math.random() * indexList.length);
		this.possibleAnswers = indexList;
		this.index = indexList[randomOfFour];
	}
	
	this.getPossibleAnswer	=	function(choice) {
		var idx = this.possibleAnswers[choice]
		return data[this.levelName]['mg'][idx];
	}
	this.selectAnswer = function(choice) {
		var idx = this.possibleAnswers[choice];
		if (idx == this.index) {
			this.correctGuess()
		} else {
			this.wrongGuess()
		}
		this.next()
	}
}
MultipleChoiceGame.prototype = new Game();

var ListWords = function() {
	
	this.init = function(lvlName) {
		this.levelName = lvlName
	}
	this.show = function() {
		return data[this.levelName]
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

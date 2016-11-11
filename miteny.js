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
	this.startMemory = function(lvl) {
		this.isactive = 'memory'
		$scope.game = new Memory()
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

var Memory = function() {
	this.init = function(lvlName) {
		this.turnedCards = []
		this.cards = new Array(16)
		var indexSel = getRandomIndex(data[lvlName]['mg'].length, 8)
		for (var i=0; i < indexSel.length; i++) {
			this.cards[i*2] = {index:indexSel[i], value:data[lvlName]['mg'][indexSel[i]], lang:'mg',class:'hidden'}
			this.cards[i*2 + 1] = {index:indexSel[i], value:data[lvlName]['de'][indexSel[i]],lang:'de',class:'hidden'}
		}
		shuffle(this.cards)
	}
	this.turn = function(index) {
		if (this.turnedCards.length > 1) {
			this.cards.forEach(function(card) {
				if (card.class=='shown') {
					card.class='hidden'
				}
			})
			this.turnedCards = [];
		}
		this.turnedCards.push(index);
		this.cards[index].class="shown";
		if (this.turnedCards.length == 2) {
			var c1 = this.cards[this.turnedCards[0]]
			var c2 = this.cards[this.turnedCards[1]]
			
			if (c1.index===c2.index) {
				c1.class='done';
				c2.class='done';
			}
		}
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

/**
http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

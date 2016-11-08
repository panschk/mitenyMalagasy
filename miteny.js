var app = angular.module('mitenyMain', ['mitenyUtil']);
app.controller('Main', ['checkAnswer', '$scope', function Main(checkAnswer, $scope) {
	this.isactive = false;
	$scope.getQuestion = function getQuestion() {
		return data['numbers']['de'][index]
	}
	this.check = function check() {
		return checkAnswer.checkAnswerF($scope.answer, $scope)
	};
	this.gameState = function gameState() {
		if (this.isactive) {
			return "block";
		} else {
			return "none";
		}
	}
	this.startGame = function startGame() {
		this.isactive = true;
	}
	newRandomQuestion($scope);
}]);
angular.module('mitenyUtil', [])
.factory('checkAnswer', function() {

	
	var checkAnswerF = function checkAnswerF(guess, $scope) {

		if (guess.toUpperCase() == getCorrectAnswer().toUpperCase()) {
			correctGuess($scope)
		} else {
			wrongGuess($scope)
		}
	}
	return {
		checkAnswerF : checkAnswerF
	};
	
});

function newRandomQuestion($scope) {
	index = parseInt(Math.random()*10, 10)
	$scope.answer = ""
}
function getCorrectAnswer() {
	return data['numbers']['mg'][index]
}

function correctGuess($scope) {
	newRandomQuestion($scope);
}
function wrongGuess($scope) {
	alert("Falsch. "+ $scope.getQuestion() +" ==> "+ getCorrectAnswer());
	newRandomQuestion($scope);
}
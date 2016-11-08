var app = angular.module('mitenyMain', ['mitenyUtil']);
app.controller('Main', ['checkAnswer', '$scope', function Main(checkAnswer, $scope) {
	this.getQuestion = function getQuestion() {
		return data['numbers']['de'][index]
	}
	this.check = function check() {
		console.log($scope)
		return checkAnswer.checkAnswerF($scope.answer, $scope)
  };
  
	newRandomQuestion($scope);
}]);
angular.module('mitenyUtil', [])
.factory('checkAnswer', function() {

	
	var checkAnswerF = function checkAnswerF(guess, $scope) {

		if (guess.toUpperCase() == getCorrectAnswer().toUpperCase()) {
			correctGuess($scope)
			return "Richtig!"
		} else {
			return "Falsch";
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

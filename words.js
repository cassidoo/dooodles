function getRandomWord(jsonWords) {
    var words = JSON.parse(jsonWords);

    var MAX_LENGTH = 10;
    var wordLength = Math.floor(Math.random() * MAX_LENGTH) + 1;
    var wordIndex = Math.floor(Math.random() * words[wordLength].length) + 1;

    var word = words[wordLength][wordIndex];
}

function checkIfCorrect(guessedword, actualword)
{
	return guessedword.toUpperCase() === actualword.toUpperCase();
}

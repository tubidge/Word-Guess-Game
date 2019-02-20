// Array of ______ for computer to choose from
var computerChoices = ["one", "two", "three", "four", "five"];

// Variables to hold number of wins, losses, guesses left, and letters guessed
var currentWord = undefined;
var guessesRemaining = 10;
var lettersGuessed  = [];
var wins = 0;
var losses = 0;
// Variables holding reference to HTML elements
var currentWordSpace = document.getElementById("current-word");
var guessesRemainingText = document.getElementById("guesses-remaining");
var lettersGuessedText = document.getElementById("letters-guessed");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");

// Variable to choose computer guess on page load
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Computer Guess: " + computerGuess);

// User's guess is captured and made lower case
document.onkeyup = function() {
    var userGuess = event.key.toLowerCase();
    console.log("User Guess: " + userGuess);
// Push user guess to lettersGuessed
    lettersGuessed.push(" " + userGuess);
// Update new lettersGuessed to page
    lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;

// Check if userGuess is correct
// If so, display letter in correct location in currentWord


};
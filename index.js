var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

// Set up vars
var wordGuess = document.getElementById('word-to-guess')
var remainingGuesses = document.getElementById('remaining-guesses')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')
var incorrectLetters = document.getElementById('incorrect-letters')
var previousWord = document.getElementById('previous-word')

var wins = 0
var losses = 0
var guesses = 10
remainingGuesses.textContent = guesses

// Pick random word
var word = words[Math.floor(Math.random() * words.length)];
console.log(word)

// Change to underscores
var letters = []
for( i = 0; i < word.length; i++) {
    letters[i] = "_";
}
wordGuess.textContent = letters.join('');

// Access keypress
document.body.onkeyup = function(e) {
  console.log(e.key)
  // Display incorrect letters
  if (word.indexOf(e.key) == -1) {
    incorrectLetters.textContent += e.key
    // Manipulate guesses
    guesses --
    remainingGuesses.textContent = guesses
  } else {
    // Display correct letters
    for (var i = 0; i < word.length; i++){
      if(word[i] == e.key) {
        letters[i] = e.key;
      }
    }
    wordGuess.innerHTML = letters.join('');
  }
    // New word if word guessed correctly
    if (letters.join('') === word) {
      // Manipulate wins
      winsEl.textContent ++;
      // Display previous word
      previousWord.textContent = word;
      // Reset guesses
      guesses = 10
    }
    // New word when out of guesses
    if (guesses == 0) {
      // Reset incorrect letters
      incorrectLetters.textContent = ''
      // Manipulate losses
      lossesEl.textContent ++;
      // Display previous word
      previousWord.textContent = word;
      // Reset guesses
      guesses = 10
     }
}

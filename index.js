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


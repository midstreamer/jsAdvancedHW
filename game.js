//Random word is selected and exported
var wordsToGuess = ["Plate", "Turkey", "Sucker", "Backpack", "Books", "Computers", "Ipad", "Sunglasses", "Rockets", "Astros", "Texans"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;
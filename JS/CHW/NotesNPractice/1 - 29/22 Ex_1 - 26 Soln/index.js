// guess the correct number
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("enter a number between 1 and 10");
let turns = 1;
while (userGuess != randomNumber) {
  if (userGuess < randomNumber) {
    userGuess = prompt("your guess was low. Try again");
  } else {
    userGuess = prompt("your guess was high. Try again");
  }
  turns++;
}
let score = 10 - turns;
console.log(
  `Congratulation! you have guessed the number in ${turns} turns. Your score is ${score} and the guessed number is ${userGuess}`
);

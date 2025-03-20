/**
 * The Snake-Water-Gun game is similar to Rock-Paper-Scissors:

Rules:
Snake vs. Water: Snake drinks the Water → Snake wins
Snake vs. Gun: Gun kills the Snake → Gun wins
Water vs. Gun: Water rusts the Gun → Water wins
If both players choose the same option, it’s a draw.
JavaScript Implementation
This implementation will:

Get a random choice for the computer.
Prompt the player to enter their choice.
Determine the winner and log the result.
 */

function getRandomChoice() {
  const choices = ["snake", "water", "gun"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  }

  if (
    (playerChoice === "snake" && computerChoice === "water") ||
    (playerChoice === "water" && computerChoice === "gun") ||
    (playerChoice === "gun" && computerChoice === "snake")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function playGame() {
  const playerChoice = prompt(
    "Enter your choice: snake, water, or gun"
  ).toLowerCase();

  // Validate player choice
  if (!["snake", "water", "gun"].includes(playerChoice)) {
    console.log("Invalid choice. Please enter 'snake', 'water', or 'gun'.");
    return;
  }

  const computerChoice = getRandomChoice();
  console.log(`You chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  const result = determineWinner(playerChoice, computerChoice);
  console.log(result);
}

// Start the game
playGame();

/**
 * Explanation
getRandomChoice: Generates a random choice for the computer from the options.
determineWinner: Takes both the player’s choice and the computer’s choice to determine who wins based on the rules.
playGame:
Prompts the player to enter their choice.
Validates the input to ensure it’s one of the allowed options (snake, water, or gun).
Calls getRandomChoice to get the computer’s choice.
Calls determineWinner to get the game result and logs it.
Each time playGame() is called, the game will:

Prompt the user for input.
Log both choices.
Display the result of the round.
 */

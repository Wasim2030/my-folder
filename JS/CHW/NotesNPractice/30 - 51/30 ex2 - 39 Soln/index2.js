/**
 * Snake water gun
 * snake and water = sanke wins
 * sanke and gun = gun wins
 * water and gun = water wins
 * same option = match draw
 */

function randomChoice() {
  const choices = ["snake", "water", "gun"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let generatedRandomNo = randomChoice;

// console.log(generatedRandomNo());

// let userChoice = prompt("enter sanke or water or gun");

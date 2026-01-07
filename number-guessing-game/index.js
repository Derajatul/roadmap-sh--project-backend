#!/usr/bin/env node
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
let maxChance = 0;
const randomNum = String(Math.floor(Math.random() * 100) + 1);

console.log(
  "Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chance to guess the correct number.\n\nPlease select the difficulty level:"
);

console.log(
  "Please select the difficulty level: \n1. Easy (10 chance)\n2. Medium (5 chance)\n3. Hard (3 chance)"
);

const choice = await rl.question("Enter your choice: ");

if (choice === "1") {
  console.log("Great! You have selected the Easy level.");
  maxChance = 10;
} else if (choice === "2") {
  console.log("Great! You have selected the Medium level.");
  maxChance = 5;
} else if (choice === "3") {
  console.log("Great! You have selected the Hard level.");
  maxChance = 3;
} else {
  console.log("Invalid choice. Please select a valid option.");
}

console.log("Let's start the game!");

for (let i = 0; i < maxChance; i++) {
  const guess = await rl.question("Guess the number: ");

  if (guess === randomNum) {
    console.log(
      "Congratulations! You guessed the number in",
      i + 1,
      "attempts."
    );
    rl.close();
    break;
  } else {
    console.log(
      `incorrect! The number is ${
        guess < randomNum ? "greater" : "less"
      } than ${guess}.`
    );
  }
}

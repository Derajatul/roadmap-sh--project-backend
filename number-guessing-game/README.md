# Number Guessing Game CLI

A simple and interactive command-line interface (CLI) game where you have to guess a randomly generated number between 1 and 100. This project is part of the [roadmap.sh](https://roadmap.sh/projects/number-guessing-game) backend projects.

## Features

- **Random Number Generation**: A random number between 1 and 100 is generated for each game.
- **Difficulty Levels**: Choose from three difficulty levels:
  - **Easy**: 10 chances
  - **Medium**: 5 chances
  - **Hard**: 3 chances
- **Interactive Feedback**: Hints provided after each incorrect guess (e.g., "The number is greater than your guess").
- **Playable via CLI**: Entirely terminal-based experience.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Navigate to the project directory:

   ```bash
   cd number-guessing-game
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Usage

You can run the game using `node index.js`.

```bash
node index.js
```

### How to Play

1. Upon starting, شما select a difficulty level (1, 2, or 3).
2. Start guessing the number!
3. The game will tell you if the secret number is higher or lower than your guess.
4. Try to find the number within the allotted chances based on your chosen difficulty.

## Example Output

```text
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chance to guess the correct number.

Please select the difficulty level:
1. Easy (10 chance)
2. Medium (5 chance)
3. Hard (3 chance)

Enter your choice: 2
Great! You have selected the Medium level.
Let's start the game!

Guess the number: 50
incorrect! The number is greater than 50.

Guess the number: 75
incorrect! The number is less than 75.

Guess the number: 63
Congratulations! You guessed the number in 3 attempts.
```

## License

This project is licensed under the ISC License.

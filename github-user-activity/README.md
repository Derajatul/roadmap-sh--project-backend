# GitHub User Activity CLI

A simple CLI tool to fetch and display the recent activity of a GitHub user.

## Features

- Fetches recent events for a given GitHub username.
- Supports activity types like Push, Issues, Star (Watch), Fork, and Create.
- Displays timestamps and readable action descriptions.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Setup

1. Navigate to the project directory:
   ```bash
   cd github-user-activity
   ```
2. (Optional) Initialize npm if needed, though this project currently uses native `fetch` and has no external dependencies:
   ```bash
   npm install
   ```

## Usage

Run the script using Node.js and provide a GitHub username as an argument:

```bash
node index.js <username>
```

### Example

```bash
node index.js octocat
```

Output:

```text
2023-10-27T12:00:00Z - Pushed 1 commit to octocat/Spoon-Knife
2023-10-26T15:30:00Z - Starred octocat/Spoon-Knife
```

## License

ISC

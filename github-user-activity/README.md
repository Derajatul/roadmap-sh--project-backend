# GitHub User Activity CLI

A simple Command-Line Interface (CLI) to fetch and display the recent activity of a GitHub user. This project is part of the [roadmap.sh](https://roadmap.sh/projects/github-user-activity) challenges.

## Features

- Fetches recent events for a given GitHub username from the GitHub API.
- Supports activity types:
  - **PushEvent**: Logs when a user pushes to a repository.
  - **CreateEvent**: Logs when a user creates a branch or tag.
  - **DeleteEvent**: Logs when a user deletes a branch or tag.
- Simplified output for quick status checking.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended for native `fetch` support).

## Setup

1. Navigate to the project directory:

   ```bash
   cd github-user-activity
   ```

2. (Optional) Link the command locally:
   ```bash
   npm link
   ```

## Usage

You can run the script directly with Node or use the linked command.

### Using Node

```bash
node index.js <username>
```

### Using Linked Command

If you ran `npm link`, you can use:

```bash
github-activity <username>
```

### Example

```bash
github-activity octocat
```

**Output:**

```text
Pushed to octocat/Spoon-Knife
Created branch master
Another event
```

## License

ISC

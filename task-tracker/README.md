# Task Tracker CLI

A simple Command-Line Interface (CLI) to track your tasks and manage your to-do list. This project is part of the [roadmap.sh](https://roadmap.sh/projects/task-tracker) challenges.

## Features

- Add, Update, and Delete tasks.
- Mark tasks as "in-progress" or "done".
- List all tasks or filter by status (`todo`, `in-progress`, `done`).
- Persistence using a local JSON file.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/)

## Installation

1. Navigate to the project directory:

   ```bash
   cd task-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

You can run the tool using `node index.js` or use the linked command `task-cli`.

### Commands

| Command                 | Description                                          |
| :---------------------- | :--------------------------------------------------- |
| `add <task>`            | Add a new task                                       |
| `update <id> <task>`    | Update task description by ID                        |
| `delete <id>`           | Delete a task by ID                                  |
| `mark-in-progress <id>` | Mark a task as in-progress                           |
| `mark-done <id>`        | Mark a task as done                                  |
| `list-tasks`            | List all tasks                                       |
| `list <status>`         | List tasks by status (`todo`, `in-progress`, `done`) |

### Examples

**Adding a task:**

```bash
node index.js add "Buy groceries"
# Output: Task added successfully (ID: 1712345678901)
```

**Listing all tasks:**

```bash
node index.js list-tasks
```

**Updating a task:**

```bash
node index.js update 1712345678901 "Buy groceries and milk"
```

**Marking a task as done:**

```bash
node index.js mark-done 1712345678901
```

**Listing tasks with status "done":**

```bash
node index.js list done
```

## Data Storage

Tasks are stored in a `tasks.json` file in the project directory.

## License

ISC

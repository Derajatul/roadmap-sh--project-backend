# Expense Tracker CLI

A simple and efficient command-line interface (CLI) application to track and manage your daily expenses. This project is part of the [roadmap.sh](https://roadmap.sh/backend/projects/expense-tracker) backend projects.

## Features

- **Add Expenses**: Quickly record an expense with a description and amount.
- **List All Expenses**: View all your recorded expenses in a clean CSV-like format.
- **Summary**: Get a total summary of all expenses or filter by a specific month.
- **Delete Expenses**: Remove an expense accurately using its unique ID.
- **Data Persistence**: All data is stored locally in an `expenses.json` file.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Navigate to the project directory:

   ```bash
   cd expense-tracker
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Usage

You can run the application using `node index.js` followed by the command and options.

### 1. Add an Expense

```bash
node index.js add --description "Lunch at Warung" --amount 25000
```

### 2. List All Expenses

```bash
node index.js list
```

### 3. View Summary

To see the total of all expenses:

```bash
node index.js summary
```

To see the summary for a specific month (1-12):

```bash
node index.js summary --month 1
```

### 4. Delete an Expense

```bash
node index.js delete --id 1736130000000
```

## Data Storage

The application stores your data in a file named `expenses.json` within the project folder. This file is automatically created when you add your first expense.

## License

This project is licensed under the ISC License.

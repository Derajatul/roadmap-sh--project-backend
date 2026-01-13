# Roadmap.sh Backend Projects

This repository contains a collection of backend projects and CLI tools as part of the [roadmap.sh](https://roadmap.sh/backend) challenges. Each project is contained within its own directory and focused on a specific task or API integration.

## Projects

### 1. GitHub User Activity CLI

A command-line interface to fetch and display the recent activity of a GitHub user.

- **Location:** `./github-user-activity`
- **Roadmap.sh Project:** [GitHub User Activity](https://roadmap.sh/projects/github-user-activity)
- **Tech Stack:** Node.js
- **Key Features:** Fetches event data from the GitHub API and formats it for terminal output.

### 2. TMDB CLI Tool

A CLI tool to fetch movie information (popular, now playing, top rated, etc.) from The Movie Database (TMDB) API.

- **Location:** `./tmdb-cli-tool`
- **Roadmap.sh Project:** [TMDB CLI Tool](https://roadmap.sh/projects/tmdb-cli)
- **Tech Stack:** Node.js, Commander, Dotenv
- **Key Features:** Supports various query types using command-line arguments and handles API authentication via environment variables.

### 3. Task Tracker CLI

A CLI tool to track your tasks and manage your to-do list.

- **Location:** `./task-tracker`
- **Roadmap.sh Project:** [Task Tracker](https://roadmap.sh/projects/task-tracker)
- **Tech Stack:** Node.js, Commander
- **Key Features:** Supports adding, updating, deleting, and marking tasks as "in-progress" or "done". Lists tasks by status.

### 4. Expense Tracker CLI

A command-line interface to track and manage your daily expenses.

- **Location:** `./expense-tracker`
- **Roadmap.sh Project:** [Expense Tracker](https://roadmap.sh/projects/expense-tracker)
- **Tech Stack:** Node.js, Commander
- **Key Features:** Add expenses, list all records, summary total or by month, and delete entries by ID.

### 5. Number Guessing Game CLI

A simple interactive game to guess a random number between 1 and 100 with different difficulty levels.

- **Location:** `./number-guessing-game`
- **Roadmap.sh Project:** [Number Guessing Game](https://roadmap.sh/projects/number-guessing-game)
- **Tech Stack:** Node.js
- **Key Features:** Multiple difficulty levels, random number generation, and interactive terminal feedback.

### 6. Unit Converter (Web)

A modern web application to convert various units of length, weight, and temperature.

- **Location:** `./unit-converter`
- **Roadmap.sh Project:** [Unit Converter](https://roadmap.sh/projects/unit-converter)
- **Tech Stack:** HTML, CSS, JavaScript
- **Key Features:** Real-time conversion, dynamic UI updates, and multiple unit support.

### 7. Personal Blog (Web)

A simple blog application with an admin interface for managing articles.

- **Location:** `./personal-blog`
- **Roadmap.sh Project:** [Personal Blog](https://roadmap.sh/projects/personal-blog)
- **Tech Stack:** Node.js, Express, EJS
- **Key Features:** View articles, admin panel for CRUD operations, and persistent storage using JSON.

### 8. Weather API

A backend service that fetches and caches weather data using Redis.

- **Location:** `./weather-api`
- **Roadmap.sh Project:** [Weather API](https://roadmap.sh/projects/weather-api-wrapper-service)
- **Tech Stack:** Node.js, Express, Redis
- **Key Features:** Redis caching, error handling, and Visual Crossing API integration.

### 9. Blogging Platform API

A robust backend for a blogging platform with MySQL and Docker support.

- **Location:** `./blogging-platform-api`
- **Roadmap.sh Project:** [Blogging Platform API](https://roadmap.sh/projects/blogging-platform-api)
- **Tech Stack:** Node.js, Express, MySQL, Docker
- **Key Features:** CRUD operations, MySQL JSON columns, Docker orchestration, and Adminer integration.

### 10. GitHub Trending CLI

A CLI tool to discover trending repositories on GitHub.

- **Location:** `./github-trending-cli`
- **Roadmap.sh Project:** [GitHub Trending CLI](https://roadmap.sh/projects/github-trending-cli) (Custom based on GitHub Search API)
- **Tech Stack:** Node.js, Commander
- **Key Features:** Filter by duration (day/week/month/year), limit results, and displays repo stats.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Derajatul/roadmap-sh--project-backend.git
   cd roadmap-sh--project-backend
   ```

2. **Run a specific project:**
   Navigate into the desired project directory and follow the instructions in its respective `README.md`.

   Example for TMDB CLI:

   ```bash
   cd tmdb-cli-tool
   npm install
   # Follow setup instructions in tmdb-cli-tool/README.md
   ```

## Author

- [Derajatul](https://github.com/Derajatul)

## License

ISC

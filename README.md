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

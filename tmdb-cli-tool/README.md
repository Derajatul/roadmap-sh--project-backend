# TMDB CLI Tool

A simple Command-Line Interface (CLI) tool that allows you to fetch movie information from [The Movie Database (TMDB)](https://www.themoviedb.org/). This tool can retrieve popular, now playing, top-rated, and upcoming movies directly from your terminal.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

You will also need a TMDB API Key. You can get one by creating an account on the [TMDB website](https://www.themoviedb.org/documentation/api).

## Setup Instructions

1. **Clone or navigate to the project directory:**

   ```bash
   cd tmdb-cli-tool
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory (if it doesn't exist) and add your TMDB API Key:
   ```env
   TMDB_API_KEY=your_api_key_here
   ```

## Usage

You can run the tool using `node` or by linking it to your system.

### Running with Node

```bash
node index.js --type popular
```

### Linking the Command (Optional)

To use the `tmdb-app` command globally or locally without `node index.js`, run:

```bash
npm link
```

Then you can use:

```bash
tmdb-app --type popular
```

## Commands and Options

The tool uses the `--type` (or `-t`) option to specify the category of movies you want to fetch.

| Option Value | Description                                            |
| :----------- | :----------------------------------------------------- |
| `popular`    | Fetches the most popular movies currently on TMDB.     |
| `playing`    | Fetches movies currently playing in theaters.          |
| `top`        | Fetches the highest-rated movies of all time.          |
| `upcoming`   | Fetches movies that are scheduled to be released soon. |

### Examples

**Fetch Popular Movies:**

```bash
node index.js --type popular
```

**Fetch Top Rated Movies:**

```bash
node index.js --type top
```

## License

This project is licensed under the ISC License.

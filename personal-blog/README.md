# Personal Blog

A simple web-based personal blog application built with Node.js, Express, and EJS. This project allows users to view blog articles and provides an admin interface for managing blog content.

This project is part of the [roadmap.sh](https://roadmap.sh/projects/personal-blog) backend challenges.

## Features

- **Home Page**: Displays a list of all blog articles.
- **Article Details**: View the full content of a specific blog post.
- **Admin Panel**: A dedicated interface to manage blog posts.
- **CRUD Operations**:
  - **Create**: Add new blog articles.
  - **Update**: Edit existing articles (title and content).
  - **Delete**: Remove articles from the blog.
- **Local Storage**: Uses a simple `blogs.json` file to store blog data.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend Template**: EJS (Embedded JavaScript templates)
- **Styling**: Vanilla CSS

## Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager).

## Getting Started

1. **Navigate to the project directory**:

   ```bash
   cd personal-blog
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the server**:

   ```bash
   npm start
   ```

4. **Access the application**:
   - Open your browser and go to `http://localhost:3000` to view the blog.
   - Go to `http://localhost:3000/admin` to access the administration panel.

## Project Structure

- `index.js`: The main entry point of the application.
- `route/`: Contains route definitions for main pages, admin, and new posts.
- `controllers/`: Logic for handling requests.
- `views/`: EJS templates for rendering HTML.
- `public/`: Static files like CSS.
- `blogs.json`: The local data store for blog articles.

## License

ISC

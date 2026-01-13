# Blogging Platform API

A robust backend for a blogging platform built with **Node.js**, **Express**, and **MySQL**. This project is fully containerized using **Docker** and includes **Adminer** for easy database management.

Project details: [roadmap.sh - Blogging Platform API](https://roadmap.sh/projects/blogging-platform-api)

## Features

- **CRUD Operations**: Create, Read, Update, and Delete blog posts.
- **JSON Support**: Modern MySQL JSON column for tags.
- **Dockerized**: Easy setup for application and database.
- **Hot Reloading**: Enabled with `nodemon` and Docker volumes (optimized for Windows).
- **Adminer**: Web-based database management tool.
- **Formatted Responses**: Standardized JSON response format.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed.

## Getting Started

### 1. Environment Configuration

Create a `.env` file in the root directory (or copy from `.env.example` if available):

```env
PORT=3000
DB_HOST=db
DB_USER=root
DB_PASSWORD=password
DB_NAME=blogging_db
DB_PORT=3306
MYSQL_ROOT_PASSWORD=password
MYSQL_DATABASE=blogging_db
```

### 2. Run with Docker

Execute this command to start the application and database:

```bash
docker-compose up --build
```

- **API Interface**: `http://localhost:3000`
- **Database Manager (Adminer)**: `http://localhost:8080`

### 3. Resetting Database (Optional)

If you change the `init.sql` schema and want to reset the database:

```bash
docker-compose down -v
docker-compose up
```

## API Endpoints

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/api/posts`     | Get all posts        |
| GET    | `/api/posts/:id` | Get post by ID       |
| POST   | `/api/posts`     | Create new post      |
| PUT    | `/api/posts/:id` | Update existing post |
| DELETE | `/api/posts/:id` | Delete a post        |

### Example Request Body (POST/PUT)

```json
{
  "title": "My Awesome Post",
  "content": "This is the content...",
  "category": "Tech",
  "tags": ["NodeJS", "Docker", "MySQL"]
}
```

## Project Structure

- `src/app.js`: Express app setup and middleware.
- `src/server.js`: Server entry point and DB connection test.
- `src/config/`: Database configuration (MySQL Pool).
- `src/controllers/`: Business logic for API endpoints.
- `src/routes/`: Route definitions.
- `init.sql`: Initial database schema.
- `docker-compose.yml`: Docker orchestration.

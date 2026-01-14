# Todo List API

A robust backend for a Todo List application with PostgreSQL and Docker support. This project provides a RESTful API for managing users and their todo items, featuring authentication and persistent storage.

## Features

- **User Authentication**: Register and Login functionality using JSON Web Tokens (JWT) and password hashing with Argon2.
- **Todo Management**: CRUD operations for todo items (Create, Read, Update, Delete).
- **Persistent Storage**: Data is stored in a PostgreSQL database.
- **Dockerized Environment**: Fully containerized application and database using Docker Compose.
- **Database GUI**: Includes Adminer for easy database management via a web interface.
- **Unique IDs**: Uses UUID v4 for all primary keys.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Containerization**: Docker & Docker Compose
- **Authentication**: JWT & Argon2
- **Utilities**: `pg` (Postgres client), `dotenv`, `uuid`

## Getting Started

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Installation & Setup

1. **Clone the repository** (if you haven't already):

   ```bash
   git clone https://github.com/Derajatul/roadmap-sh--project-backend.git
   cd roadmap-sh--project-backend/todo-list-api
   ```

2. **Configure Environment Variables**:
   Copy `.env.example` to `.env` and adjust the values if necessary (though the defaults work with the provided Docker setup).

   ```bash
   cp .env.example .env
   ```

3. **Run the application using Docker Compose**:
   ```bash
   docker-compose up --build
   ```
   This will start:
   - The Node.js API on `http://localhost:3000`
   - PostgreSQL on `localhost:5433` (internal `5432`)
   - Adminer on `http://localhost:8080`

### Database Management

You can access the database via Adminer at `http://localhost:8080`.

- **System**: PostgreSQL
- **Server**: `db`
- **Username**: `postgres` (as defined in `.env`)
- **Password**: `postgres`
- **Database**: `todo_db`

## API Endpoints

### Authentication

- `POST /api/register` - Create a new user account.
- `POST /api/login` - Authenticate a user and receive a JWT.

### Todos (Requires Authorization Header)

- `GET /api/todos` - Get all todos for the authenticated user.
- `POST /api/todo` - Create a new todo item.
- `PUT /api/todo/:id` - Update an existing todo item (title, description, completion status).
- `DELETE /api/todo/:id` - Delete a todo item.

_Note: All Todo endpoints require a `Authorization: Bearer <your_token>` header._

---

Roadmap.sh Project: [Todo List API](https://roadmap.sh/projects/todo-list-api)

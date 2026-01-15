import express from "express";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import { v4 as uuidv4 } from "uuid";
import pool from "../db.js";

const route = express.Router();

route.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //   if username or email already exists
  if (
    (
      await pool.query(
        "SELECT * FROM users WHERE username = $1 OR email = $2",
        [username, email]
      )
    ).rows.length > 0
  ) {
    return res
      .status(400)
      .json({ message: "Username or email already exists" });
  }

  const hashedPassword = await argon2.hash(password);

  const newUser = {
    id: uuidv4(),
    username,
    email,
    password: hashedPassword,
  };

  await pool.query(
    "INSERT INTO users (id, username, email, password) VALUES ($1, $2, $3, $4)",
    [newUser.id, newUser.username, newUser.email, newUser.password]
  );

  const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    token,
  });
});

route.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);

  if (user.rows.length === 0) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const validPassword = await argon2.verify(user.rows[0].password, password);

  if (!validPassword) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    token,
  });
});

route.get("/api/todos", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await pool.query("SELECT * FROM users WHERE id = $1", [
    decoded.id,
  ]);
  const todos = await pool.query("SELECT * FROM todos WHERE user_id = $1", [
    user.rows[0].id,
  ]);
  res.status(200).json({
    success: true,
    message: "Todos fetched successfully",
    todos: todos.rows,
  });
});

route.post("/api/todo", async (req, res) => {
  const { title, description } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await pool.query("SELECT * FROM users WHERE id = $1", [
    decoded.id,
  ]);
  const newTodo = {
    id: uuidv4(),
    user_id: user.rows[0].id,
    title,
    description,
    completed: false,
  };
  await pool.query(
    "INSERT INTO todos (id, user_id, title, description, completed) VALUES ($1, $2, $3, $4, $5)",
    [
      newTodo.id,
      newTodo.user_id,
      newTodo.title,
      newTodo.description,
      newTodo.completed,
    ]
  );
  res.status(201).json({
    success: true,
    message: "Todo created successfully",
    todo: newTodo,
  });
});

route.put("/api/todo/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await pool.query("SELECT * FROM users WHERE id = $1", [
    decoded.id,
  ]);
  const todo = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
  if (todo.rows.length === 0) {
    return res.status(400).json({ message: "Todo not found" });
  }
  await pool.query(
    "UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4",
    [title, description, completed, id]
  );
  res.status(200).json({
    success: true,
    message: "Todo updated successfully",
    todo: {
      id,
      title,
      description,
      completed,
    },
  });
});

route.delete("/api/todo/:id", async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await pool.query("SELECT * FROM users WHERE id = $1", [
    decoded.id,
  ]);
  const todo = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
  if (todo.rows.length === 0) {
    return res.status(400).json({ message: "Todo not found" });
  }
  await pool.query("DELETE FROM todos WHERE id = $1", [id]);
  res.status(200).json({
    success: true,
    message: "Todo deleted successfully",
  });
});

export default route;

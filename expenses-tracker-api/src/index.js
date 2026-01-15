// const express = require("express");
import express from "express";
import prisma from "./db.js";
import argon2 from "argon2";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

app.use(express.json());

// Basic health check route
app.get("/", (req, res) => {
  res.json({ message: "Expenses Tracker API with Prisma is running" });
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    // if username already exists
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // generate jwt token

    const hashedPassword = await argon2.hash(password);

    const newUser = await prisma.user.create({
      data: {
        id: uuidv4(),
        username: username,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(201).json({
      message: "User created successfully",
      token: token,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const verifyPassword = await argon2.verify(user.password, password);

    if (!verifyPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .json({ message: "User logged in successfully", token });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

// get all expenses
app.get("/expenses", authMiddleware, async (req, res) => {
  try {
    const expenses = await prisma.expense.findMany({
      where: { userId: req.user.id },
    });
    return res.json(expenses);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

// create expense
app.post("/expenses", authMiddleware, async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    const expense = await prisma.expense.create({
      data: { title, amount, category, userId: req.user.id },
    });
    return res.status(201).json(expense);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

// update expense
app.put("/expenses/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, amount, category } = req.body;
    const expense = await prisma.expense.findFirst({
      where: { id, userId: req.user.id },
    });
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    const updatedExpense = await prisma.expense.update({
      where: { id },
      data: { title, amount, category },
    });
    return res.json(updatedExpense);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

// delete expense
app.delete("/expenses/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await prisma.expense.findFirst({
      where: { id, userId: req.user.id },
    });
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    const deletedExpense = await prisma.expense.delete({
      where: { id },
    });
    return res.json(deletedExpense);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

// Test DB connection route with Prisma
app.get("/db-test", async (req, res) => {
  try {
    // Attempt to count expenses as a simple query test
    const count = await prisma.expense.count();
    res.json({
      message: "Prisma connection successful",
      expenseCount: count,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Prisma connection failed", error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

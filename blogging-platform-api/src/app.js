const express = require("express");
const app = express();

app.use(express.json());

// Routes
const postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Blogging Platform API" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

module.exports = app;

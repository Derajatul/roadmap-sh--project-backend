const pool = require("../config/db");

exports.getAllPosts = (req, res) => {
  pool.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      message: "Posts retrieved successfully",
      data: results,
    });
  });
};

exports.createPost = (req, res) => {
  const { title, content, category, tags } = req.body;
  pool.query(
    "INSERT INTO posts (title, content, category, tags) VALUES (?, ?, ?, ?)",
    [title, content, category, JSON.stringify(tags)],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({
        success: true,
        message: "Post created successfully",
        data: { id: results.insertId, title, content, category, tags },
      });
    }
  );
};

exports.updatePost = (req, res) => {
  const { title, content, category, tags } = req.body;
  pool.query(
    "UPDATE posts SET title = ?, content = ?, category = ?, tags = ? WHERE id = ?",
    [title, content, category, JSON.stringify(tags), req.params.id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        success: true,
        message: "Post updated successfully",
        data: { id: req.params.id, title, content, category, tags },
      });
    }
  );
};

exports.deletePost = (req, res) => {
  pool.query(
    "DELETE FROM posts WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ success: true, message: "Post deleted successfully" });
    }
  );
};

exports.getPostById = (req, res) => {
  pool.query(
    "SELECT * FROM posts WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        success: true,
        message: "Post retrieved successfully",
        data: results[0],
      });
    }
  );
};

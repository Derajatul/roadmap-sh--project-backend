import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const adminRoute = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

adminRoute.get("/admin", (req, res) => {
  const blogs = fs.readFileSync(path.join(__dirname, "../blogs.json"));
  res.render("admin", {
    blogs: JSON.parse(blogs),
  });
});

adminRoute.get("/edit/:id", (req, res) => {
  const blogs = fs.readFileSync(path.join(__dirname, "../blogs.json"));
  const blog = JSON.parse(blogs).find((blog) => blog.id == req.params.id);
  res.render("edit", {
    blog,
  });
});

adminRoute.post("/edit/:id", async (req, res) => {
  const filePath = path.join(__dirname, "../blogs.json");

  const blogsRaw = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(blogsRaw);

  const blogIndex = blogs.findIndex((blog) => blog.id == req.params.id);

  if (blogIndex === -1) {
    return res.status(404).send("Blog tidak ditemukan");
  }

  blogs[blogIndex].title = req.body.title;
  blogs[blogIndex].content = req.body.content;

  fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2));

  res.redirect("/admin");
});

adminRoute.delete("/delete/:id", async (req, res) => {
  const filePath = path.join(__dirname, "../blogs.json");

  const blogsRaw = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(blogsRaw);

  const blogIndex = blogs.findIndex((blog) => blog.id == req.params.id);

  if (blogIndex === -1) {
    return res.status(404).send("Blog tidak ditemukan");
  }

  blogs.splice(blogIndex, 1);

  fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2));

  res.redirect("/admin");
});

export default adminRoute;

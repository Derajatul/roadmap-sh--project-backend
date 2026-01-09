import express from "express";
import fs from "fs/promises";

const newRoute = express.Router();

newRoute.get("/new", (req, res) => {
  res.render("new");
});

newRoute.post("/new", async (req, res) => {
  const { title, content } = req.body;

  const jsons = await fs.readFile("./blogs.json", "utf-8");
  const blogs = JSON.parse(jsons);

  const newBlog = {
    id: Date.now(),
    title,
    content,
  };

  blogs.push(newBlog);

  await fs.writeFile("./blogs.json", JSON.stringify(blogs, null, 2));

  res.redirect("/admin");
});

export default newRoute;

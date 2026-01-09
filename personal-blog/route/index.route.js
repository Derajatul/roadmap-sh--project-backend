import express from "express";
import indexController from "../controllers/index.controller.js";
import fs from "fs/promises";

const router = express.Router();

router.get("/", indexController);

router.get("/articles/:id", async (req, res) => {
  const blogsRaw = JSON.parse(await fs.readFile("./blogs.json", "utf-8"));
  console.log(blogsRaw);
  const blog = blogsRaw.find((blog) => blog.id == req.params.id);
  console.log(blog);
  res.render("article", {
    blog,
  });
});

export default router;

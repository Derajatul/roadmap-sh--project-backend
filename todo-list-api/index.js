import express from "express";
import dotenv from "dotenv";
import route from "./route/index.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(route);

app.get("/", (req, res) => {
  res.send("Hello World with PostgreSQL!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

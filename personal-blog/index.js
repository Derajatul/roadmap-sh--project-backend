import express from "express";
import router from "./route/index.route.js";
import path from "path";
import newRoute from "./route/new.route.js";
import adminRoute from "./route/admin.route.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use("/", router);
app.use("/", adminRoute);
app.use("/", newRoute);

app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});

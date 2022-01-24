import { Router } from "express";
import {
  renderTasks,
  createTask,
  renderTaskedit,
  deleteTask,
  editTask,
  toggleDone,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.get("/about", function (req, res) {
  res.render("about");
});

router.get("/edit/:id", editTask);

router.post("/tasks/add", createTask);

router.post("/edit/:id", renderTaskedit);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toggleDone);
export default router;

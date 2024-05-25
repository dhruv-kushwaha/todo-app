import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  searchTodos,
  updateTask,
} from "../controllers/taskController";

const router = express.Router();

router.route("/tasks").get(getAllTasks).post(createTask);
router.route("/tasks/search").get(searchTodos);
router.route("/tasks/:id").get(getTask).put(updateTask).delete(deleteTask);

export { router };

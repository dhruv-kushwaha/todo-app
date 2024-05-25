import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { tasksDB } from "../data/todos";
import {
  CreateTaskSchema,
  IFullTaskType,
  UpdateTaskSchema,
} from "../schema/taskSchema";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";

export const getAllTasks = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const tasks = tasksDB;

  res.status(200).json({
    status: "success",
    results: tasks.length,
    data: {
      data: tasks,
    },
  });
});

export const getTask = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const taskId = req.params.id;
  // console.log(taskId);
  if (!uuidValidate(taskId)) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Task ID",
    });
  }

  const task = tasksDB.filter((task) => task.id === taskId);

  if (task.length === 0) {
    return res.status(404).json({
      status: "fail",
      message: "No task exists with this ID",
    });
  }

  return res.status(200).json({
    status: "success",
    data: {
      data: task[0],
    },
  });
};

export const createTask = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body;
  const parseResult = CreateTaskSchema.safeParse(body);
  // console.log(body);
  if (!parseResult.success) {
    // console.log(parseResult.error);
    return res.status(400).json({
      status: "fail",
      message: "Invalid Task Body",
    });
  }

  const newTask = {
    ...parseResult.data,
    id: uuidv4(),
    dueDate: new Date(parseResult.data.dueDate),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  tasksDB.push(newTask);

  return res.status(201).json({
    status: "success",
    data: {
      data: newTask,
    },
  });
};

export const updateTask = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const taskId = req.params.id;
  if (!uuidValidate(taskId)) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Task ID",
    });
  }

  const body = req.body;
  console.log(body);
  const parseResult = UpdateTaskSchema.safeParse(body);
  if (!parseResult.success) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Task Body",
    });
  }

  let updatedTask;

  // tasksDB.forEach((task) => {
  //   if (task.id === taskId) {
  //     task = { ...task, ...parseResult.data };
  //     updatedTask = task;
  //   }
  // });

  // return res.status(200).json({
  //   status: "success",
  //   data: {
  //     data: updatedTask,
  //   },
  // });
  const taskIndex = tasksDB.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasksDB[taskIndex] = {
      ...tasksDB[taskIndex],
      ...parseResult.data,
      // dueDate: new Date(parseResult.data.dueDate ?? tasksDB[taskIndex].dueDate),

      // dueDate: tasksDB[taskIndex].dueDate === parsedResult.data.dueDate ?,
      updatedAt: new Date(),
    };
    updatedTask = tasksDB[taskIndex];

    return res.status(200).json({
      status: "success",
      data: {
        data: updatedTask,
      },
    });
  } else {
    return res.status(404).json({
      status: "fail",
      message: "No task exists with this ID",
    });
  }
};

export const deleteTask = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const taskId = req.params.id;
  if (!uuidValidate(taskId)) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Task ID",
    });
  }

  const taskIndex = tasksDB.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasksDB.splice(taskIndex, 1);
  }
  // tasksDB = tasksDB.filter((task) => task.id !== taskId);

  res.status(204).json({
    status: "success",
  });
};

export const searchTodos = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const searchQuery = (req.query.search as string).toLowerCase();
  const wordsToBeSearched = searchQuery.split("%20%");

  let result: IFullTaskType[] = [] as IFullTaskType[];

  for (let idx = 0; idx < tasksDB.length; idx++) {
    for (let wordIdx = 0; wordIdx < wordsToBeSearched.length; wordIdx++) {
      const title = tasksDB[idx].title.toLowerCase();
      if (title.includes(wordsToBeSearched[wordIdx])) {
        result.push(tasksDB[idx]);
        break;
      }
    }
  }

  return res.status(200).json({
    status: "success",
    data: {
      data: result,
    },
  });
};

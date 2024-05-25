import axios from "axios";
import { URL } from "./global";
import {
  ICreateTodoType,
  IFullTodoType,
  IUpdateTodoType,
} from "@/schema/todoSchema";

interface getAllTodosResponse {
  status: string;
  data: {
    data: IFullTodoType[];
  };
}

export async function getAllTodos() {
  try {
    const res = await axios.get<getAllTodosResponse>(`${URL}/tasks`);

    console.log(res);
    return res.data.data.data;
  } catch (err) {
    console.log(err);
    throw new Error("Todos could not be loaded.");
  }
}

interface createTodosResponse {
  status: string;
  data: {
    data: IFullTodoType;
  };
}

export async function createTodo(todo: ICreateTodoType) {
  try {
    const res = await axios.post<createTodosResponse>(`${URL}/tasks`, todo);

    console.log(res);
    return res.data.data.data;
  } catch (err) {
    console.log(err);
    throw new Error("Todo could not be created.");
  }
}

export async function deleteTodo(todoId: string) {
  try {
    await axios.delete(`${URL}/tasks/${todoId}`);
  } catch (err) {
    console.log(err);
    throw new Error("Todo could not be deleted");
  }
}

export async function getTodo(todoId: string) {
  try {
    const res = await axios.get<createTodosResponse>(`${URL}/tasks/${todoId}`);

    console.log(res);
    return res.data.data.data;
  } catch (err) {
    console.log(err);
    throw new Error("Todo could not be loaded");
  }
}

export async function updateTodo(todo: IUpdateTodoType) {
  try {
    const res = await axios.put<createTodosResponse>(
      `${URL}/tasks/${todo.id}`,
      todo,
    );

    console.log(res);
    return res.data.data.data;
  } catch (err) {
    console.log(err);
    throw new Error("Todo could not be created.");
  }
}

export async function searchTodos(searchQuery: string) {
  try {
    const res = await axios.get<getAllTodosResponse>(
      `${URL}/tasks/search?search=${searchQuery}`,
    );

    console.log(res);
    return res.data.data.data;
  } catch (err) {
    console.log(err);
    throw new Error("Todo could not be Found.");
  }
}

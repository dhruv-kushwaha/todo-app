import { z } from "zod";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

// Define the schema using zod
export const FullTodoSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.enum(["pending", "in-progress", "completed"]).default("pending"),
  dueDate: z.union([z.date(), z.string()]),
  createdAt: z.union([z.string(), z.date()]),
  updatedAt: z.union([z.string(), z.date()]),
});

type FullTodo = z.infer<typeof FullTodoSchema>;

// Function to generate a single todo item
const generateTodo = (): FullTodo => {
  const now = new Date();
  const statusOptions: FullTodo["status"][] = [
    "pending",
    "in-progress",
    "completed",
  ];
  return {
    id: uuidv4(),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
    dueDate: faker.date.soon(),
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  };
};

// Generate 20 todo items
const generateTodos = (count: number): FullTodo[] => {
  return Array.from({ length: count }, generateTodo);
};

// Generate the todos
const todos = generateTodos(20);

// Log the generated todos
console.log(todos);

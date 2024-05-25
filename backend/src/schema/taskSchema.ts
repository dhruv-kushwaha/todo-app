import { z } from "zod";

export const FullTodoSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.enum(["pending", "in-progress", "completed"]).default("pending"),
  dueDate: z.date().or(z.string()),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

export const CreateTaskSchema = FullTodoSchema.pick({
  title: true,
  description: true,
  status: true,
  dueDate: true,
});

export const UpdateTaskSchema = FullTodoSchema.pick({
  title: true,
  description: true,
  status: true,
  dueDate: true,
}).partial();

export type IFullTaskType = z.infer<typeof FullTodoSchema>;
export type ICreateTaskType = z.infer<typeof CreateTaskSchema>;
export type IUpdateTaskType = z.infer<typeof UpdateTaskSchema>;

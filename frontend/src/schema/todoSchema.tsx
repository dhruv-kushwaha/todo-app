import { z } from "zod";

export const CreateTodoSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["pending", "in-progress", "completed"]).default("pending"),
  dueDate: z.date().or(z.string()),
});

export const FullTodoSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.enum(["pending", "in-progress", "completed"]).default("pending"),
  dueDate: z.date().or(z.string()),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

export const UpdateTodoSchema = FullTodoSchema.pick({
  id: true,
  title: true,
  description: true,
  status: true,
  dueDate: true,
});

export type ICreateTodoType = z.infer<typeof CreateTodoSchema>;
export type IFullTodoType = z.infer<typeof FullTodoSchema>;
export type IUpdateTodoType = z.infer<typeof UpdateTodoSchema>;

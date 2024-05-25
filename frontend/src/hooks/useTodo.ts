import { getTodo } from "@/services/apiTodos";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useTodo() {
  const { id: todoId } = useParams();

  const {
    data: todo,
    isLoading: isLoadingTodo,
    error,
  } = useQuery({
    queryKey: ["todo"],
    queryFn: () => getTodo(todoId as string),
  });
  return { todo, isLoadingTodo, error };
}

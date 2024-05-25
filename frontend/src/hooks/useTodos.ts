import { getAllTodos } from "@/services/apiTodos";
import { useQuery } from "@tanstack/react-query";

export function useTodos() {
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getAllTodos(),
  });
  return { todos, isLoading };
}

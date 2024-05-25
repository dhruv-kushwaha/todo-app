import { searchTodos } from "@/services/apiTodos";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function useSearchTodos() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  const { data: todos, isLoading } = useQuery({
    queryKey: ["searched-todos", searchQuery],
    queryFn: () => searchTodos(searchQuery as string),
  });

  return { todos, isLoading };
}

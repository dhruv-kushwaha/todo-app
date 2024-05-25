import { ICreateTodoType } from "@/schema/todoSchema";
import { createTodo as createTodoApi } from "@/services/apiTodos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useCreateTodo() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createTodo, isPending: isCreating } = useMutation({
    mutationFn: (todo: ICreateTodoType) => createTodoApi(todo),
    onError: (err) => toast.error(err.message),
    onSuccess: () => {
      toast.success("Todo successfully created");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
      navigate("/");
    },
  });

  return { createTodo, isCreating };
}

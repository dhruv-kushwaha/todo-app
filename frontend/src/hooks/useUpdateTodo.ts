import { IUpdateTodoType } from "@/schema/todoSchema";
import { updateTodo as updateTodoApi } from "@/services/apiTodos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateTodo, isPending: isUpdating } = useMutation({
    mutationFn: (todo: IUpdateTodoType) => updateTodoApi(todo),
    onError: (err) => toast.error(err.message),
    onSuccess: () => {
      toast.success("Todo successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
      navigate("/");
    },
  });

  return { updateTodo, isUpdating };
}

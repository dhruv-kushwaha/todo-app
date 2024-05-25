import { deleteTodo as deleteTodoApi } from "@/services/apiTodos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteTodo, isPending: isDeleting } = useMutation({
    mutationFn: (todoID: string) => deleteTodoApi(todoID),
    onError: (err) => toast.error(err.message),
    onSuccess: () => {
      toast.success("Todo successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
      navigate("/");
    },
  });

  return { deleteTodo, isDeleting };
}

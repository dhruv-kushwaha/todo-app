import { ReactNode, useState } from "react";
import { Popover, PopoverTrigger } from "./ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";

interface DeleteTodoProps {
  children: ReactNode;
  todoID: string;
}

function DeleteTodo({ children, todoID }: DeleteTodoProps) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const { deleteTodo, isDeleting } = useDeleteTodo();

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Confirm Delete</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row justify-end gap-4">
            <Button
              variant="outline"
              onClick={() => setPopoverOpen(false)}
              disabled={isDeleting}
            >
              Cancel
            </Button>
            <Button
              className="bg-red-600"
              onClick={() => {
                deleteTodo(todoID, {
                  onSettled: () => {
                    setPopoverOpen(false);
                  },
                });
              }}
              disabled={isDeleting}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}

export default DeleteTodo;

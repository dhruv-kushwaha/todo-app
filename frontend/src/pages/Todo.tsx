import DeleteTodo from "@/components/DeleteTodo";
import Navbar from "@/components/Navbar";
import TodoContent from "@/components/TodoContent";
import { Button } from "@/components/ui/button";
import { useTodo } from "@/hooks/useTodo";
import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { formatDate } from "@/lib/utils";
import { IFullTodoType } from "@/schema/todoSchema";
import {
  ArrowLeft,
  Calendar,
  CircleCheck,
  CircleCheckBig,
  Clock4,
  Edit,
  LoaderCircle,
  Trash,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

enum StatusValues {
  "pending" = "Pending",
  "in-progress" = "In progress",
  "completed" = "Completed",
}

function Todo() {
  const { todo, isLoadingTodo } = useTodo();
  const navigate = useNavigate();
  const { updateTodo, isUpdating } = useUpdateTodo();

  if (!isLoadingTodo && !todo) {
    return (
      <div>
        <Navbar />
        <div className="font-semibold uppercase italic">
          No todo found with that Id
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {isLoadingTodo && (
        <div className="flex h-screen items-center justify-center text-lg italic">
          Loading...
        </div>
      )}
      {!isLoadingTodo && (
        <div className="flex h-full justify-center py-12 ">
          <div className="w-[350px] min-w-[350px] max-w-[900px] rounded-lg bg-slate-50 shadow-lg sm:w-[450px] md:w-[575px]  lg:w-[900px]">
            {/*  nav div */}
            <div className="rounded-t-lg bg-slate-100 px-5 py-5">
              <div className="flex justify-between ">
                <div
                  className="flex cursor-pointer gap-2 text-slate-800 hover:text-slate-400"
                  onClick={() => navigate(-1)}
                >
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 border-2"
                  >
                    <ArrowLeft size={20} /> <span>Back</span>
                  </Button>
                </div>
                <div className="flex gap-3">
                  {/*  */}
                  <div className="flex items-center self-center">
                    <span className="px-2 py-1">
                      {todo?.status === "in-progress" && (
                        <LoaderCircle color="blue" size={18} />
                      )}
                      {todo?.status === "completed" && (
                        <CircleCheck color="green" size={18} />
                      )}
                      {todo?.status === "pending" && (
                        <Clock4 color="red" size={18} />
                      )}
                    </span>
                    <span>{StatusValues[todo?.status || "completed"]}</span>
                  </div>
                  <div className="flex items-center self-center">
                    <span className="px-2 py-1">
                      <Calendar color="black" size={18} />
                    </span>
                    <span>{formatDate(todo?.dueDate ?? "May 26, 2024")}</span>
                  </div>

                  {/*  */}
                </div>
              </div>
            </div>
            {/*  */}

            <TodoContent todo={todo as IFullTodoType} />

            <div className="rounded-b-lg bg-slate-100 px-5 py-5">
              <div className="gap-3 md:flex md:items-center md:justify-end">
                <div className="flex w-full justify-center md:w-fit md:justify-normal">
                  {todo?.status !== "completed" && (
                    <Button
                      className="flex items-center gap-2 bg-slate-800"
                      onClick={() =>
                        updateTodo({
                          ...(todo as IFullTodoType),
                          status: "completed",
                        })
                      }
                      disabled={isUpdating}
                    >
                      <CircleCheckBig size={20} />
                      <span>Mark as Completed</span>
                    </Button>
                  )}
                </div>
                <div className="mt-4 flex justify-evenly md:mt-0 md:gap-3">
                  <Button
                    className="flex items-center gap-2 bg-teal-600"
                    disabled={isUpdating}
                    onClick={() => navigate(`/todos/edit/${todo?.id}`)}
                  >
                    <Edit size={20} />
                    <span>Edit</span>
                  </Button>
                  <DeleteTodo todoID={todo?.id as string}>
                    <Button
                      className="flex items-center gap-2 bg-red-600"
                      disabled={isUpdating}
                    >
                      <Trash size={20} />
                      <span>Delete</span>
                    </Button>
                  </DeleteTodo>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;

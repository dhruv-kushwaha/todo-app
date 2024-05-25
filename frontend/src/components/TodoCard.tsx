import {
  Calendar,
  CircleCheck,
  Clock4,
  Edit,
  LoaderCircle,
  Trash,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { IFullTodoType } from "@/schema/todoSchema";
import DeleteTodo from "./DeleteTodo";
import { useNavigate } from "react-router-dom";
import { formatDate } from "@/lib/utils";

const CARD_DESC_WORD_LIMIT = 25;

enum StatusValues {
  "pending" = "Pending",
  "in-progress" = "In progress",
  "completed" = "Completed",
}

// enum NextStatusAction {
//   "pending" = "Mark as in progress",
//   "in-progress" = "Mark as completed",
//   "completed" = "Done",
// }

function TodoCard({ todo }: { todo: IFullTodoType }) {
  const desc = todo.description;
  const descArray = desc.split(" ");
  const isBigger = descArray.length > CARD_DESC_WORD_LIMIT;
  // console.log(descArray);
  const finalDescription = descArray
    .slice(0, CARD_DESC_WORD_LIMIT - 1)
    .join(" ");

  const navigate = useNavigate();

  return (
    <Card className="grid w-[320px] max-w-[400px] grow justify-self-center hover:scale-105 ">
      <div
        onClick={() => {
          navigate(`/todos/${todo.id}`);
        }}
        className="cursor-pointer"
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="inline-block w-auto max-w-[270px] text-2xl font-semibold">
            {todo.title}
          </h3>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            {finalDescription}
            {isBigger && (
              <span className="px-2 text-rose-500">Read more...</span>
            )}
          </CardDescription>
        </CardContent>
      </div>

      <CardFooter className="flex flex-col items-start gap-3 self-end rounded-b-md bg-slate-100 pt-4 text-sm text-teal-900">
        <div className="grid w-full grid-cols-2">
          <div className="flex items-center self-center">
            <span className="px-2 py-1">
              {todo.status === "in-progress" && (
                <LoaderCircle color="blue" size={18} />
              )}
              {todo.status === "completed" && (
                <CircleCheck color="green" size={18} />
              )}
              {todo.status === "pending" && <Clock4 color="red" size={18} />}
            </span>
            {/* <span> Status : &nbsp;</span> */}
            <span>{StatusValues[todo.status]}</span>
          </div>
          <div className="flex items-center self-center">
            <span className="px-2 py-1">
              <Calendar color="black" size={18} />
            </span>
            {/* <span>Due Date :&nbsp;</span> */}
            <span>{formatDate(todo.dueDate ?? "May 26, 2024")}</span>
          </div>
        </div>

        <div className="flex w-full cursor-pointer flex-row justify-between">
          <div className="grid w-full grid-cols-2 ">
            <div
              className="flex gap-2 self-center px-2 hover:text-teal-600"
              onClick={() => navigate(`/todos/edit/${todo?.id}`)}
            >
              <Edit size={18} className="" />
              <span>Edit</span>
            </div>

            <DeleteTodo todoID={todo.id}>
              <div className="flex gap-2 self-center px-2 hover:text-red-600">
                <Trash size={18} className="" />
                <span>Delete</span>
              </div>
            </DeleteTodo>
          </div>
          {/* <div className="flex flex-row items-center self-end justify-self-end">
            <span className="px-2">
              <CircleCheckBig size={20} className="hover:text-blue-600" />
            </span>

            <span>{NextStatusAction[todo.status]}</span>
          </div> */}
        </div>
      </CardFooter>
    </Card>
  );
}

export default TodoCard;

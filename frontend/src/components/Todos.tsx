import TodoCard from "./TodoCard";
import { IFullTodoType } from "@/schema/todoSchema";

interface TodosProps {
  todos: IFullTodoType[];
  isLoading: boolean;
}

function Todos({ todos, isLoading }: TodosProps) {
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className=" italic">Loading...</div>
      </div>
    );
  }

  return (
    <div className="px-30 grid gap-y-6 py-12 md:grid-cols-2 md:gap-y-10  lg:grid-cols-3 xl:grid-cols-4">
      {todos?.map((todo) => <TodoCard todo={todo} key={todo.id} />)}
    </div>
  );
}

export default Todos;

import { IFullTodoType } from "@/schema/todoSchema";

interface TodoContentProps {
  todo: IFullTodoType;
}

function TodoContent({ todo }: TodoContentProps) {
  return (
    <div className="flex flex-col px-8 py-6">
      <h2 className="mb-4 text-3xl font-bold"> {todo?.title}</h2>
      <hr className="py-2" />

      <p className="text-lg font-medium">{todo?.description}</p>
    </div>
  );
}

export default TodoContent;

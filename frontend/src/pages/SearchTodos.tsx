import Navbar from "@/components/Navbar";
import { useSearchTodos } from "@/hooks/useSearchTodos";
import Todos from "@/components/Todos";
import { IFullTodoType } from "@/schema/todoSchema";
import { useSearchParams } from "react-router-dom";

function SearchTodos() {
  const { todos, isLoading } = useSearchTodos();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search")?.split("%20%").join(" ");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full max-h-full min-h-screen ">
      <Navbar />
      <div className="px-8 py-4">
        <h2 className="text-xl font-semibold">Search Results for : {query}</h2>
      </div>
      <Todos todos={todos as IFullTodoType[]} isLoading={isLoading} />
    </div>
  );
}

export default SearchTodos;

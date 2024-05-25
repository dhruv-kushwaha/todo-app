import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import Todos from "@/components/Todos";
import { useTodos } from "@/hooks/useTodos";
import { IFullTodoType } from "@/schema/todoSchema";

function Home() {
  const { todos, isLoading } = useTodos();

  return (
    <div className="h-full max-h-full min-h-screen bg-gray-200 ">
      <Navbar />
      <Features />
      <Todos todos={todos as IFullTodoType[]} isLoading={isLoading} />
    </div>
  );
}

export default Home;

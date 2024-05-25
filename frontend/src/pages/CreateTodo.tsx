import CreateTodoForm from "@/components/CreateTodoForm";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { IFullTodoType } from "@/schema/todoSchema";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CreateTodo() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="flex h-full items-center justify-center bg-gray-200 px-32 py-20">
        <div className="flex w-[40rem] min-w-80 flex-col gap-8 rounded-md bg-slate-50 px-6 py-8 md:px-12">
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold uppercase text-slate-800 ">
              Create new Todo
            </h3>
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
          </div>
          <CreateTodoForm todoToEdit={{} as IFullTodoType} />
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;

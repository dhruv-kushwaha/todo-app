import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";

function Features() {
  const navigate = useNavigate();
  return (
    <div
      //  className="flex h-20 w-full items-center justify-end px-32"
      className="fixed bottom-5 right-5 z-[1000]"
    >
      <Button
        className="h-14 rounded-full bg-teal-600 text-sm uppercase text-slate-200"
        onClick={() => navigate("/todos/create")}
      >
        <Pencil />
      </Button>
    </div>
  );
}

export default Features;

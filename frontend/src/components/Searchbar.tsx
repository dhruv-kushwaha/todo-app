import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Searchbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const query = search.split(" ").join("%20%");
    navigate(`/todos?search=${query}`);
  }

  return (
    <div className=" flex gap-3">
      <Input
        type="text"
        placeholder={"Search todos by title..."}
        className="w-32 text-slate-800 md:w-60 lg:w-80"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button className="bg-teal-600" onClick={(e) => handleSearch(e)}>
        <span className="hidden md:inline">Search &nbsp;</span>
        <span>
          <Search size={16} />
        </span>
      </Button>
    </div>
  );
}

export default Searchbar;

import Logo from "./Logo";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <div className="h-20 w-full border-b-2 border-slate-200 bg-slate-800 px-4 md:px-10">
      <div className="flex h-full items-center justify-between  text-slate-200">
        <div>
          <Logo />
        </div>
        <div>
          <Searchbar />
        </div>
        <div className="hidden text-base md:text-lg lg:block">
          Welcome, Dhruv Kushwaha
        </div>
      </div>
    </div>
  );
}

export default Navbar;

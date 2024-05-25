import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="text-xl font-semibold italic text-teal-600 hover:text-slate-200 md:font-bold lg:text-3xl">
      <Link to="/">Happy Todos</Link>
    </div>
  );
}

export default Logo;

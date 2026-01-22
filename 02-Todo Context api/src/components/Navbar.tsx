import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex gap-6 mb-6">
      <Link to="/" className="text-blue-600 hover:underline">
        All
      </Link>
      <Link to="/?todos=active" className="text-blue-600 hover:underline">
        Active
      </Link>
      <Link to="/?todos=completed" className="text-blue-600 hover:underline">
        Completed
      </Link>
    </div>
  );
};

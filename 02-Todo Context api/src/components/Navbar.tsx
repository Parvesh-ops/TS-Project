import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all duration-200";
  const activeClasses = "bg-blue-600 text-white shadow-md";
  const inactiveClasses = "text-gray-700 hover:bg-blue-50 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 mb-6">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            All
          </NavLink>
          <NavLink
            to="/active"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Active
          </NavLink>
          <NavLink
            to="/completed"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Completed
          </NavLink>
        </div>
      </div>
    </nav>
  );
};